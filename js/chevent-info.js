let EVENT_SELECTED = 20;
let MAP_SELECTED = 1;
let ROUTE_SELECTED = 0;
let NODE_SELECTED = undefined;

/* utility functions */

// ghetto mergesort
function mergesort(array){
	let left, right;
	if(array.length > 2){
		let splitPoint = 0;
		if(array.length % 2 === 0) splitPoint = array.length / 2;
		else splitPoint = Math.floor(array.length / 2) + 1;
		left = mergesort(array.slice(0, splitPoint));
		right = mergesort(array.slice(splitPoint, array.length));
		let newarray = [];
		
		let ia = ib = 0;
		while(ia < left.length && ib < right.length){
			if(left[ia].order < right[ib].order){
				newarray.push(left[ia]);
				ia++;
			}
			else{
				newarray.push(right[ib]);
				ib++;
			}
		}
		if(ia >= left.length){
			while(ib < right.length){
				newarray.push(right[ib]);
				ib++;
			}
		}
		else{
			while(ia < left.length){
				newarray.push(left[ia]);
				ia++;
			}
		}
		return newarray;
	}
	else{
		if(array.length === 1) return array;
		else if(array[0].order > array[1].order){
			let temp = array[0];
			array[0] = array[1];
			array[1] = temp;
		}
		return array;
	}
}

// return a proper formation image object given a formation id
function formationConvert(formation){
	let formationString = "";
	switch(formation){
		case 1:
			formationString = "Line Ahead"; break;
		case 2:
			formationString = "Double Line"; break;
		case 3:
			formationString = "Diamond"; break;
		case 4:
			formationString = "Echelon"; break;
		case 5:
			formationString = "Line Abreast"; break;
		case 6:
			formationString = "Vanguard"; break;
		case 111:
		case 211:
			formationString = "C. Form 1"; break;
		case 112:
		case 212:
			formationString = "C. Form 2"; break;
		case 113:
		case 213:
			formationString = "C. Form 3"; break;
		case 114:
		case 214: // yasen 6v12
			formationString = "C. Form 4"; break;
		default:
			formationString = "Unknown"; break;
	}
	if(formation < 10){
		return '<img class="formation" title="' + formationString  + '" src="assets/stats/form' + formation + '.jpg" />';
	}
	else{
		if(formation < 200)
			return '<img class="formation" title="' + formationString  + '" src="assets/stats/form' + (formation - 100) + '.png" />';
		else
			return '<img class="formation" title="' + formationString  + '" src="assets/stats/form' + (formation - 200) + '.png" />';
	}
}

// calculate the airpower that an enemy ship provides
function calcAirpower(enemy){
	var ap = 0;
	for (let i=0; i<enemy.EQUIPS.length; i++) {
		if (EQTDATA[EQDATA[enemy.EQUIPS[i]].type].isfighter) {
			ap += Math.floor((EQDATA[enemy.EQUIPS[i]].AA||0) * Math.sqrt(enemy.SLOTS[i]) + (EQDATA[enemy.EQUIPS[i]].APbonus||0));
		}
	}
	return ap;
}

function refreshMap(eid, mid, route){
	// clear map image field
	$('#mapContainer').empty();
	// add base map image
	$('#mapContainer').append('<div id="mapImage"></div>');
	let mapImage = new Image();
	mapImage.onload = function(){
		$('#mapContainer').css('width', this.width + 'px');
		$('#mapContainer').css('height', this.height + 'px');
	}
	mapImage.src = "assets/maps/" + eid + "/" + mid + ".png";
	mapImage.style = "position:absolute";
	mapImage.id = "mapImage" + mid;
	$('#mapImage').append(mapImage);
	// add hidden routes (if applicable)
	let layer = 1;
	if(route !== 0 && MAPDATA[eid].maps[mid].hiddenRoutes){
		for(let j = 1; j <= route; ++j){
			for(let k in MAPDATA[eid].maps[mid].hiddenRoutes[j].images){
				// don't load routes that have no image defined
				if(!MAPDATA[eid].maps[mid].hiddenRoutes[j].images[k].name) continue;
				$('#mapImage').append('<img id="mapImage' + mid + '-' + j + '-' + k + '" src="assets/maps/' + eid + '/' + MAPDATA[eid].maps[mid].hiddenRoutes[j].images[k].name + '" />')
				$('#mapImage' + mid + '-' + j + '-' + k).css('z-index', j).css('position','absolute').css('left', MAPDATA[eid].maps[mid].hiddenRoutes[j].images[k].x).css('top', MAPDATA[eid].maps[mid].hiddenRoutes[j].images[k].y);
				++layer;
			}
		}
	}
	
	// populate visible node array
	let visible = [];
	for(let i in MAPDATA[eid].maps[mid].nodes){
		if(MAPDATA[eid].maps[mid].nodes[i].replacedBy && MAPDATA[eid].maps[mid].nodes[MAPDATA[eid].maps[mid].nodes[i].replacedBy].hidden <= route) continue;
		else visible.push(i);
	}
	
	// fill in visible nodes
	for(let k of visible){
		if(MAPDATA[eid].maps[mid].nodes[k].hidden > route || k.includes('Start') || MAPDATA[eid].maps[mid].nodes[k].type == 0) continue; // don't place the given node
		if(eid === 37 && mid === 1 && (k === "J" || k === "K") && route >= 1) continue; // Winter 2017 is weird
		let nodeIcon = "assets/maps/nodeR.png", offsetX = 10, offsetY = 10;
		if(MAPDATA[eid].maps[mid].nodes[k].type == 1){
			if(MAPDATA[eid].maps[mid].nodes[k].boss){
				nodeIcon = "assets/maps/nodeBoss.png";
				offsetX = 19; offsetY = 24;
			} 
			else if(MAPDATA[eid].maps[mid].nodes[k].raid){
				nodeIcon = "assets/maps/nodeRaid.png";
				offsetX = 23; offsetY = 19;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].aironly){
				nodeIcon = "assets/maps/nodeAir.png";
				offsetX = 35; offsetY = 22;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].ambush){
				nodeIcon = "assets/maps/nodeAmbush.png";
				offsetX = 10; offsetY = 27;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].night2) nodeIcon = "assets/maps/nodeN.png";
			else if(MAPDATA[eid].maps[mid].nodes[k].nightToDay2 || MAPDATA[eid].maps[mid].nodes[k].nightToDay2CF) nodeIcon = "assets/maps/nodeND.png";
		}
		else if(MAPDATA[eid].maps[mid].nodes[k].type == 2){
			if(MAPDATA[eid].maps[mid].nodes[k].dropoff){
				nodeIcon = "assets/maps/nodeAnchor.png";
				offsetX = 25; offsetY = 25;
			}
			else nodeIcon = "assets/maps/nodeG.png";
		}		
		else if(MAPDATA[eid].maps[mid].nodes[k].type == 3) nodeIcon = "assets/maps/nodeB.png";
		else if(MAPDATA[eid].maps[mid].nodes[k].type == 4) nodeIcon = "assets/maps/nodeP.png";

		let nodeName = k;
		if(nodeName.includes('*')) nodeName = nodeName.replace('*', '-');
		$('#mapImage').append('<div style="position:absolute; z-index:' + layer + '; left:' + (MAPDATA[eid].maps[mid].nodes[k].x - offsetX) + '; top:' +  (MAPDATA[eid].maps[mid].nodes[k].y - offsetY) + ';"><a href="#' + (eid == 20 ? MAPDATA[eid].maps[mid].name : "E-" + mid) + nodeName + '"><img src="' + nodeIcon + '" title="LBAS Distance: ' + MAPDATA[eid].maps[mid].nodes[k].distance + '"/></a></div>');
	}
}

// Changes the current map phase and updates the map state
function updateMap(eid, mid, route, change){
	if(change != 0 && !MAPDATA[eid].maps[MAP_SELECTED].hiddenRoutes[ROUTE_SELECTED + change] && (ROUTE_SELECTED + change) !== 0) return route; // no update required
	refreshMap(eid, mid, route + change);
	$('#mapRouteInput').attr('value', route + change);
	return route + change;
}

function loadMapData(eid, mid){
	$('#guide').empty();
	// load map guide information
	$('#guide').append('<div id="guideBoard"><h2 id="guideBoardHeader"><span style="font-size:18px">' + MAPDATA[eid].name + '</span><br>' + MAPDATA[eid].maps[mid].name + ': ' + MAPDATA[eid].maps[mid].nameT + '</h2>');
	if(MAP_INFO[eid] && MAP_INFO[eid][mid]){
		$('#guideBoard').append('<div id="guideBoardText">' + MAP_INFO[eid][mid].boardText);
		$('#guide').append('<div id="guideText">' + MAP_INFO[eid][mid].strategyText);
	}
	$('#guide').append('<hr>');

	// load map enemy composition headers
	$('#map').empty();
	$('#map').append('<h3>Tip: Hover over a Node to see its LBAS Distance</h3>');
	$('#map').append('<div id="mapEnemyCompSelect"></div><br><div id="mapRouteSelect"></div><br><div id="mapContainer"><br></div><div id="mapEnemyComps"><br></div>');
	$('#mapEnemyCompSelect').append('<b>View Enemy Compositions:</b><br>');
	// add enemy composition buttons
	// Events with HQ level scaling (pre Winter 2015)
	if(eid >= 22 && eid <= 28){
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(0)">All</button>');
	}
	// Events with difficulty selection (Easy, Medium, Hard; pre-Winter 2018)
	else if(eid >= 29 && eid <= 40){
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	else if(eid === 21){
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(4)">Casual</button><button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button><button onclick="generateCompositionTable(5)">Historical</button>');
	}
	// Events with difficulty selection (Casual, Easy, Medium, Hard; post-Winter 2018)
	else{
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(4)">Casual</button><button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	$('#mapRouteSelect').empty();
	// add route switch control buttons
	if(MAPDATA[eid].maps[mid].hiddenRoutes){
		$('#mapRouteSelect').append('<b>Map Unlock Phase:</b><br><button onclick="ROUTE_SELECTED=updateMap(EVENT_SELECTED,MAP_SELECTED,ROUTE_SELECTED,-1)">\<\<</button><input id="mapRouteInput" type="text" size="2" name="mapRoute" value="0" /><button onclick="ROUTE_SELECTED=updateMap(EVENT_SELECTED,MAP_SELECTED,ROUTE_SELECTED,1)">\>\></button>');
	}
	updateMap(eid, mid, ROUTE_SELECTED, 0);
}

function generateTitle(enemyID){
	let name = SHIPDATA[enemyID].name;
	let hp = SHIPDATA[enemyID].HP;
	let armor = SHIPDATA[enemyID].AR;
	let statoverrides = MAPDATA[EVENT_SELECTED].overrideStats;
	for(let id in statoverrides){
		if(enemyID == id){
			if(statoverrides[id].AR) armor = statoverrides[id].AR;
			if(statoverrides[id].HP) hp = statoverrides[id].HP;
		}
	}
	return "ID " + enemyID + ": " + name + ", " + hp + " HP, " + armor + " Armor";
}

function loadComposition(letter, nodeData, diff, enemyCompData, mapName){
	// generate node id
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	// determine node type
	let type = "Normal Battle Node";
	if(nodeData.ambush){ type = "Ambush Node"; }
	else if(nodeData.raid){ type = "Air Raid Node"; }
	else if(nodeData.aironly){ type = "Aerial Battle Node"; }
	else if(nodeData.night || nodeData.night2){ type = "Night Battle Node"; }
	else if(nodeData.nightToDay || nodeData.nightToDay2 || nodeData.nightToDay2CF){ type = "Night-to-Day Battle Node"; }

	let rows = 0;
	// cancel the function if the nodeid already exists (node has been placed into the table)
	if($('#' + id)[0]) return ;
	// create table header
	$('<table id="' + id + '"><tr><th>' + '</th><th>Formation</th><th></th><th>' + type + '</th><th>AD / AP / AS / AS+</th></tr>').appendTo('#mapEnemyComps');
	
	// acquire list of compositions to process
	let nodeCompositions = [[], []];
	// diff 0 = load everything (used for hq lvl scaled maps [pre Winter 2015])
	if(diff === 0){
		if(nodeData.compHQ){
			for(let a in nodeData.compHQ){
				for(let b in nodeData.compHQ[a]){
					nodeCompositions[0].push(nodeData.compHQ[a][b]);
					nodeCompositions[1].push({ hq: a });
				}
			}
			if(typeof(nodeData.compHQF) !== 'undefined'){
				for(let c in nodeData.compHQF){
					for(let d in nodeData.compHQF[c]){
						nodeCompositions[0].push(nodeData.compHQF[c][d]);
						nodeCompositions[1].push({ hq: c, final: true });
					}
				}
			}
			if(typeof(nodeData.compHQC) !== 'undefined'){
				for(let c in nodeData.compHQC){
					for(let d in nodeData.compHQC[c]){
						nodeCompositions[0].push(nodeData.compHQC[c][d]);
						nodeCompositions[1].push({ hq: c, cleared: true });
					}
				}
			}
		}
		// compDiff fallback incase diffmode is 0 but no hq levels are specified
		else{
			for(let a in nodeData.compDiff){
				for(let b in nodeData.compDiff[a]){
					nodeCompositions[0].push(nodeData.compDiff[a][b]);
					nodeCompositions[1].push({});
				}
			}
			if(typeof(nodeData.compDiffF) !== 'undefined'){
				for(let c in nodeData.compDiffF){
					for(let d in nodeData.compDiffF[c]){
						nodeCompositions[0].push(nodeData.compDiffF[c][d]);
						nodeCompositions[1].push({ final: true });
					}
				}
			}
			if(typeof(nodeData.compDiffC) !== 'undefined'){
				for(let c in nodeData.compDiffC){
					for(let d in nodeData.compDiffC[c]){
						nodeCompositions[0].push(nodeData.compDiffC[c][d]);
						nodeCompositions[1].push({ cleared: true });
					}
				}
			}
		}
	}
	// diff >= 1 = load that diff
	else{
		if(!nodeData.compDiff || !nodeData.compDiff[diff]) {return ;}
		for(let a in nodeData.compDiff[diff]){
			nodeCompositions[0].push(nodeData.compDiff[diff][a]);
			nodeCompositions[1].push({});
		}
		if(typeof(nodeData.compDiffS) !== 'undefined'){
			for(let a in nodeData.compDiffS[diff]){
				nodeCompositions[0].push(nodeData.compDiffS[diff][a]);
				nodeCompositions[1].push({ });
			}
		}
		if(typeof(nodeData.compDiffF) !== 'undefined'){
			for(let a in nodeData.compDiffF[diff]){
				nodeCompositions[0].push(nodeData.compDiffF[diff][a]);
				nodeCompositions[1].push({ final: true });
			}
		}
		if(typeof(nodeData.compDiffC) !== 'undefined'){
			for(let a in nodeData.compDiffC[diff]){
				nodeCompositions[0].push(nodeData.compDiffF[diff][a]);
				nodeCompositions[1].push({ cleared: true });
			}
		}
	}
	
	// generate html for each composition
	for(let comp in nodeCompositions[0]){
		$('<tr id="' + id + "_" + comp + '">').appendTo('#' + id + ' > tbody');
		// create node letter column, include rowspan element (to be overwritten later)
		if(comp === '0'){
			$('<td id="nodeLetter-' + id + '" rowspan=1 style="font-weight:bold;">' + letter + '</td>').appendTo('#' + id + "_" + comp);
		}
		let nodeCompositionData;
		// composition in enemy comp data
		nodeCompositionData = enemyCompData[nodeCompositions[0][comp]];
		// insert enemy formation
		$('<td class="formation">' + formationConvert(nodeCompositionData.f) + '</td>').appendTo('#' + id + "_" + comp);

		// insert other details
		if(nodeCompositions[1][comp]){
			let text = (nodeCompositions[1][comp].hq ? 'HQ Lvl ' + nodeCompositions[1][comp].hq + '<br>' : '') + (nodeCompositions[1][comp].cleared ? '<span style="font-weight: bold; color:blue;">(Cleared)</span>' : '') + (nodeCompositions[1][comp].final ? '<span style="font-weight: bold; color:red;">(Final)</span>' : '');
			$('<td>' + text + '</td>').appendTo('#' + id + "_" + comp);
		}
		else{
			$('<td></td>').appendTo('#' + id + "_" + comp);
		}
		

		// generate enemy comps + begin calculating airpower
		$('<td class="comp-' + comp + '">').appendTo('#' + id + "_" + comp);
		let airpower = 0, enemyID = 0, imgString = "";
		for(let enemy in nodeCompositionData.c){
			enemyID = nodeCompositionData.c[enemy];
			imgString = "assets/icons/" + SHIPDATA[enemyID].image;
			airpower += calcAirpower(SHIPDATA[enemyID]);
			if(enemyID >= 3024 && enemyID <= 3032){
				$('<a href="assets/maps/info/' + enemyID + '_info.png" target="_blank"><img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + comp + ' > .comp-' + comp);
			}
			else{
				$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + comp + ' > .comp-' + comp);
			}
		}
		if(nodeCompositionData.ce){
			$('<br />').appendTo('#' + id + "_" + comp + ' > .comp-' + comp);
			for(let enemy in nodeCompositionData.ce){
				if(enemyID != nodeCompositionData.ce[enemy]){
					enemyID = nodeCompositionData.ce[enemy];
					imgString = "assets/icons/" + SHIPDATA[enemyID].image;
				}
				airpower += calcAirpower(SHIPDATA[enemyID]);
				$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + comp + ' > .comp-' + comp);
			}
			rows++;
		}
		Math.floor(airpower);
		if(airpower > 0) $('#' + id + "_" + comp).append("<td>" + Math.floor(airpower * 0.33333) + " / " + Math.floor(airpower * 0.66666) + " / " + Math.floor(airpower * 1.5) + " / " + Math.floor(airpower * 3) + "</td>");
		rows++;
	}
	$('#nodeLetter-' + id).attr('rowspan', rows);
	$('<br />').appendTo('#mapEnemyComps');
}

function loadOtherNode(letter, nodeData, mapName){
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	if(nodeData.type === 2 || nodeData.type === 4){
		let resource = "";
		switch(nodeData.resource){
			case 1: resource = 'assets/stats/fuel.png'; break;
			case 2: resource = 'assets/stats/ammo.png'; break;
			case 3: resource = 'assets/stats/steel.png'; break;
			case 4: resource = 'assets/stats/baux.png'; break;
			case 5: resource = 'assets/stats/bucket.png'; break;
			case 6: resource = 'assets/stats/devmat.png'; break;
			case 7: resource = 'assets/stats/ibuild.png'; break;
			case 8: resource = 'assets/stats/box1.png'; break;
			case 9: resource = 'assets/stats/box2.png'; break;
			case 10: resource = 'assets/stats/box3.png'; break;	
		}
		if(nodeData.type === 2){
			let rscCounts = "";
			if(typeof(nodeData.amount) !== 'undefined'){
				rscCounts = nodeData.amount[0];
				if(nodeData.amount.length > 1){
					for(let i = 1; i < nodeData.amount.length; ++i){
						rscCounts += ", " + nodeData.amount[i];
					}
				}
			}
			
			$('<table id="' + id + '"><tr><th rowspan="2">' + letter + '</th><th>Resource Node</th></tr><tr><td style="text-align:center; margin:auto;"><img src="' + resource + '" />  ' + rscCounts + '</td></tr></table>').appendTo('#mapEnemyComps');
		}
		else{
			let rscLoss = (typeof(nodeData.lostMax) !== 'undefined' ? "-10% ~ -" + (nodeData.lostMax * 100) + "%" : "-10% ~ -20%");
			$('<table id="' + id + '"><tr><th rowspan="2">' + letter + '</th><th>Maelstrom Node</th></tr><tr><td style="text-align:center; margin:auto;"><img src="' + resource + '" />  ' + rscLoss + '</td></tr></table>').appendTo('#mapEnemyComps');

		}
	}
	else if(nodeData.type === 3){
		$('<table id="' + id + '"><tr><th>' + letter + '</th><th>Empty Node</th></tr>').appendTo('#mapEnemyComps');
	}
	else{
		$('<table id="' + id + '"><tr><th>' + letter + '</th><th>Unknown Node Type</th></tr>').appendTo('#mapEnemyComps');
	}
	$('<br />').appendTo('#mapEnemyComps');
}

function generateCompositionTable(diff){
	let eventName = '', mapName = '';
	if(EVENT_SELECTED == 20){
		eventName = "World " + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].world;
		mapName = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name.toString();
	}
	else{
		eventName = MAPDATA[EVENT_SELECTED].name;
		mapName = "E-" + MAP_SELECTED;
	}
	let mapData = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED];
	
	$('#mapEnemyComps').empty();
	$('#mapEnemyComps').css('display', 'block');
	$('<h2>' + mapName + ' ' + (diff == 4 ? "Casual" : (diff == 1 ? "Easy" : (diff == 2 ? "Medium" : (diff == 3 ? "Hard" : (diff == 0 ? "All" : "Unknown"))))) + ' Compositions</h2>').appendTo('#mapEnemyComps');

	for(let part in mapData.parts){
		if(mapData.parts[part].enemyRaid){
			loadComposition('AB-' + part, mapData.parts[part].enemyRaid, diff, ENEMYCOMPS[eventName][mapName][mapData.parts[part].enemyRaid.compName], mapName);
		}
	}

	for(let node in mapData.nodes){
		// starting points have no compositions; please don't put 'Start' in the name of nodes that aren't starting points; better yet, just always use node type 0. please.
		if(mapData.nodes[node].type === 0 || node.includes('Start')) continue;
		// standard battle node, load composition
		if(mapData.nodes[node].type === 1){
			let enemyCompData = ENEMYCOMPS[eventName][mapName];
			if(EVENT_SELECTED === 20 && mapData.nodes[node].boss) enemyCompData = enemyCompData["Boss"];
			else if(typeof(mapData.nodes[node].compName) !== 'undefined'){ enemyCompData = enemyCompData[mapData.nodes[node].compName]; }
			else { enemyCompData = enemyCompData[node]; }
			loadComposition(node, mapData.nodes[node], diff, enemyCompData, mapName);
		}
		else if(mapData.nodes[node].type >= 2 && mapData.nodes[node].type <= 4){
			loadOtherNode(node, mapData.nodes[node], mapName);
		}
	}
	if(window.location.hash){
		changeCompBackground(NODE_SELECTED, window.location.hash);
		NODE_SELECTED = window.location.hash;
	}
}

function changeCompBackground(current, next){
	if(typeof(current) !== 'undefined') $(current).css('background-color', 'white');
	$(next).css('background-color', 'lightsalmon');
}

$(function(){
	// populate dropdown menu with all visible events
	let order = [];
	for(let ev in MAPDATA){
		if(MAPDATA[ev].visible !== undefined && MAPDATA[ev].visible === false) continue;
		if(typeof(MAPDATA[ev].order) != 'undefined'){
			order.push({ event_id: ev, order: parseInt(MAPDATA[ev].order) });
		}
		else{
			order.push({ event_id: ev, order: 9000 + parseInt(ev) });
		}
	}
	let neworder = mergesort(order);
	for(let ev in order){
		$('#eventSelect').append('<option value="' + neworder[ev].event_id + '">' + MAPDATA[neworder[ev].event_id].name + '</option>');
	}
	// clear and repopulate map dropdown when an event selection change occurs
	$('#eventSelect').change(function(){
		$('#mapSelect').empty();
		EVENT_SELECTED = parseInt($('#eventSelect option:selected').attr('value'));
		for(let map in MAPDATA[EVENT_SELECTED].maps){
			$('#mapSelect').append('<option value="' + map + '">' + MAPDATA[EVENT_SELECTED].maps[map].name  + '</option>');
		}
		MAP_SELECTED = 1;
		ROUTE_SELECTED = 0;
		loadMapData(EVENT_SELECTED, MAP_SELECTED);
	}).change();
	// clear and repopulate map display when a map selection change occurs
	$('#mapSelect').change(function(){
		MAP_SELECTED = parseInt($('#mapSelect option:selected').attr('value'));
		ROUTE_SELECTED = 0;
		loadMapData(EVENT_SELECTED, MAP_SELECTED);
	}).change();
	// repopulate overlaid route images when a route selection change occurs
	$('#mapRouteSelect').on('input', function(){
		ROUTE_SELECTED = parseInt($('#mapRouteInput').val());
		if(!MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[ROUTE_SELECTED] && ROUTE_SELECTED != 0) return ;
		updateMap(EVENT_SELECTED, MAP_SELECTED, ROUTE_SELECTED, 0);
		$('#mapRouteInput').attr('value', ROUTE_SELECTED);
	});
	// highlight a given enemy comp entry when its respective node is clicked on the map
	$( window ).on('hashchange', function(){
		changeCompBackground(NODE_SELECTED, window.location.hash);
		NODE_SELECTED = window.location.hash;
	});
});
