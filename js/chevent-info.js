let EVENT_SELECTED = 20;
let MAP_SELECTED = 1;
let MAP_VISIBLE_NODES = [];
let ROUTE_SELECTED = 0;
let NODE_SELECTED = undefined;

function loadMapAssets(){
	// clear map image field
	$('#mapContainer').empty();
	// add base map image
	$('#mapContainer').append('<div id="mapImage"></div>');
	let mapImage = new Image();
	mapImage.onload = function(){
		$('#mapContainer').css('width', this.width + 'px');
		$('#mapContainer').css('height', this.height + 'px');
	}
	mapImage.src = "assets/maps/" + EVENT_SELECTED + "/" + MAP_SELECTED + ".png";
	mapImage.style = "position:absolute";
	mapImage.id = "mapImage" + MAP_SELECTED;
	$('#mapImage').append(mapImage);
	// add hidden routes (if applicable)
	let layer = 1;
	if(ROUTE_SELECTED != 0 && MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes){
		for(let j = 1; j <= ROUTE_SELECTED; ++j){
			for(let k in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images){
				// don't load routes that have no image defined
				if(!MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name) continue;
				$('#mapImage').append('<img id="mapImage' + MAP_SELECTED + '-' + j + '-' + k + '" src="assets/maps/' + EVENT_SELECTED + '/' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name + '" />')
				$('#mapImage' + MAP_SELECTED + '-' + j + '-' + k).css('z-index', j).css('position','absolute').css('left', MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].x).css('top', MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].y);
				++layer;
			}
		}
	}
	// fill in visible nodes
	for(let k of MAP_VISIBLE_NODES){
		if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].hidden > ROUTE_SELECTED || k === "Start" || MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 0) continue; // don't place the given node
		if(EVENT_SELECTED === 37 && MAP_SELECTED === 1 && (k === "J" || k === "K") && ROUTE_SELECTED >= 1) continue; // Winter 2017 is weird
		let nodeIcon = "assets/maps/nodeR.png", offsetX = 10, offsetY = 10;
		if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 1){
			if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].boss){
				nodeIcon = "assets/maps/nodeBoss.png";
				offsetX = 19; offsetY = 24;
			} 
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].raid){
				nodeIcon = "assets/maps/nodeRaid.png";
				offsetX = 23; offsetY = 19;
			}
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].aironly){
				nodeIcon = "assets/maps/nodeAir.png";
				offsetX = 35; offsetY = 22;
			}
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].ambush){
				nodeIcon = "assets/maps/nodeAmbush.png";
				offsetX = 10; offsetY = 27;
			}
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].night2) nodeIcon = "assets/maps/nodeN.png";
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].nightToDay2 || MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].nightToDay2CF) nodeIcon = "assets/maps/nodeND.png";
		}
		else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 2){
			if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].dropoff){
				nodeIcon = "assets/maps/nodeAnchor.png";
				offsetX = 25; offsetY = 25;
			}
			else nodeIcon = "assets/maps/nodeG.png";
		}		
		else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 3) nodeIcon = "assets/maps/nodeB.png";
		else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 4) nodeIcon = "assets/maps/nodeP.png";

		let nodeName = k;
		if(nodeName.includes('*')) nodeName = nodeName.replace('*', '-');
		$('#mapImage').append('<div style="position:absolute; z-index:' + layer + '; left:' + (MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].x - offsetX) + '; top:' +  (MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].y - offsetY) + ';"><a href="#' + (EVENT_SELECTED == 20 ? MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name : "E-" + MAP_SELECTED) + nodeName + '"><img src="' + nodeIcon + '" title="LBAS Distance: ' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].distance + '"/></a></div>');
	}
}

function loadMapData(){
	$('#guide').empty();
	// load map guide information
	$('#guide').append('<div id="guideBoard"><h2 id="guideBoardHeader"><span style="font-size:18px">' + MAPDATA[EVENT_SELECTED].name + '</span><br>' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name + ': ' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nameT + '</h2>');
	if(MAP_INFO[EVENT_SELECTED] && MAP_INFO[EVENT_SELECTED][MAP_SELECTED]){
		$('#guideBoard').append('<div id="guideBoardText">' + MAP_INFO[EVENT_SELECTED][MAP_SELECTED].boardText);
		$('#guide').append('<div id="guideText">' + MAP_INFO[EVENT_SELECTED][MAP_SELECTED].strategyText);
	}
	$('#guide').append('<hr>');

	$('#map').empty();
	$('#map').append('<h3>Tip: Hover over a Node to see its LBAS Distance</h3>');
	$('#map').append('<div id="mapEnemyCompSelect"></div><br><div id="mapRouteSelect"></div><br><div id="mapContainer"><br></div><div id="mapEnemyComps"><br></div>');
	$('#mapEnemyCompSelect').append('<b>View Enemy Compositions:</b><br>');
	// add enemy composition buttons
	// Events with HQ level scaling (pre Winter 2015)
	if(EVENT_SELECTED <= 28){
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(0)">All</button>');
	}
	// Events with difficulty selection (Easy, Medium, Hard; pre-Winter 2018)
	else if(EVENT_SELECTED >= 29 && EVENT_SELECTED <= 40){
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	// Events with difficulty selection (Casual, Easy, Medium, Hard; post-Winter 2018)
	else{
		$('#mapEnemyCompSelect').append('<button onclick="generateCompositionTable(4)">Casual</button><button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	$('#mapRouteSelect').empty();
	// add route switch control buttons
	if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes){
		$('#mapRouteSelect').append('<b>Map Unlock Phase:</b><br><button onclick="updateMap(-1)">\<\<</button><input id="mapRouteInput" type="text" size="2" name="mapRoute" value="0" /><button onclick="updateMap(1)">\>\></button>');
	}
}

// Changes the current map phase and updates the map state
function updateMap(routeChange){
	if(routeChange != 0 && !MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[ROUTE_SELECTED + routeChange] && (ROUTE_SELECTED + routeChange) != 0) return ; // no update required
	ROUTE_SELECTED += routeChange;
	// populate visible node array
	MAP_VISIBLE_NODES = [];
	for(let i in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes){
		if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[i].replacedBy && MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[i].replacedBy].hidden <= ROUTE_SELECTED){
			continue;
		}
		else{
			MAP_VISIBLE_NODES.push(i);
		}
	}
	loadMapAssets();
	$('#mapRouteInput').attr('value', ROUTE_SELECTED);
}

function loadOtherNode(letter,type,mapName){
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	$('<table id="' + id + '"><tr><th>' + letter + '</th><th>' + (type == 2 ? "Resource Node" : (type == 3 ? "Empty Node" : (type == 4 ? "Maelstrom Node" : "Unknown Node Type"))) + '</th></tr>').appendTo('#mapEnemyComps');
	$('<br />').appendTo('#mapEnemyComps');
}

function formationConvert(formation){
	switch(formation){
		case 1:
			return "Line Ahead";
		case 2:
			return "Double Line";
		case 3:
			return "Diamond";
		case 4:
			return "Echelon";
		case 5:
			return "Line Abreast";
		case 6:
			return "Vanguard";
		case 111:
		case 211:
			return "C. Form 1";
		case 112:
		case 212:
			return "C. Form 2";
		case 113:
		case 213:
			return "C. Form 3";
		case 114:
		case 214: // yasen 6v12
			return "C. Form 4";
		default:
			return "Unknown";
	}
}

function calcAirpower(enemy){
	var ap = 0;
	for (let i=0; i<enemy.EQUIPS.length; i++) {
		if (EQTDATA[EQDATA[enemy.EQUIPS[i]].type].isfighter) {
			ap += Math.floor((EQDATA[enemy.EQUIPS[i]].AA||0) * Math.sqrt(enemy.SLOTS[i]) + (EQDATA[enemy.EQUIPS[i]].APbonus||0));
		}
	}
	return ap;
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

function loadComposition(letter,nodeData,diff,enemyCompData,mapName){
	// create initial table for the node
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	// determine node type
	let type = (nodeData.boss) ? "Boss Battle Node" : (nodeData.ambush ? "Ambush Node" : ((nodeData.raid) ? "Air Raid Node" : ((nodeData.night2) ? "Night Battle Node" : ((nodeData.aironly) ? "Aerial Battle Node" : "Normal Battle Node"))));
	let counter = 0, enemyID = 0, imgString, isNodeLetterCreated = false;
	if($('#' + id)[0]) return ;
	// create table header
	$('<table id="' + id + '"><tr><th>' + '</th><th>Formation</th><th>' + type + '</th><th>AD / AP / AS / AS+</th></tr>').appendTo('#mapEnemyComps');
	
	let nodeEnemyCompositions = [];
	// acquire list of compositions to process
	// diff 0 = load everything (used for hq lvl scaled maps [pre Winter 2015])
	// diff >= 1 = load that diff

	if(diff == 0){
		for(let a in nodeData.compDiff){
			for(let b in nodeData.compDiff[a])  nodeEnemyCompositions.push(nodeData.compDiff[a][b]);
		}
		if(!nodeData.compDiffF){ }
		else{
			for(let c in nodeData.compDiffF){
				for(let d in nodeData.compDiffF[c])  nodeEnemyCompositions.push(nodeData.compDiffF[c][d]);
			}
		}
	}
	else{
		if(!nodeData.compDiff || !nodeData.compDiff[diff]) {return ;}
		for(let a in nodeData.compDiff[diff])
			nodeEnemyCompositions.push(nodeData.compDiff[diff][a]);
		if(!nodeData.compDiffF){ }
		else{
			for(let a in nodeData.compDiffF[diff])
			nodeEnemyCompositions.push(nodeData.compDiffF[diff][a]);
		}
	}
	for(let comp in nodeEnemyCompositions){
		let temp = comp;
		temp = temp.replace(/\s+/g, '');
		$('<tr id="' + id + "_" + temp + '">').appendTo('#' + id + ' > tbody');
		// create node letter column, include rowspan element (to be overwritten later)
		if(!isNodeLetterCreated){
			$('<td id="nodeLetter-' + id + '" rowspan=1>' + letter + '</td>').appendTo('#' + id + "_" + temp);
			isNodeLetterCreated = true;
		}
		let nodeEnemyCompositionData;
		// composition in enemy comp data
		if(!enemyCompData[letter]){
			if(nodeData.boss && EVENT_SELECTED == 20) nodeEnemyCompositionData = enemyCompData["Boss"][nodeEnemyCompositions[comp]];
			else nodeEnemyCompositionData = enemyCompData[nodeData.compName][nodeEnemyCompositions[comp]];
		}
		else nodeEnemyCompositionData = enemyCompData[letter][nodeEnemyCompositions[comp]];
		// insert enemy formation
		$('<td class="formation">' + formationConvert(nodeEnemyCompositionData.f) + '</td>').appendTo('#' + id + "_" + temp);

		// generate enemy comps + begin calculating airpower
		$('<td class="comp-' + temp + '">').appendTo('#' + id + "_" + temp);
		let airpower = 0;
		for(let enemy in nodeEnemyCompositionData.c){
			if(enemyID != nodeEnemyCompositionData.c[enemy]){
				enemyID = nodeEnemyCompositionData.c[enemy];
				imgString = "assets/icons/" + SHIPDATA[enemyID].image;
			}
			airpower += calcAirpower(SHIPDATA[enemyID]);
			if(enemyID >= 3024 && enemyID <= 3032){
				$('<a href="assets/maps/info/' + enemyID + '_info.png" target="_blank"><img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
			}
			else{
				$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
			}
		}
		if(nodeEnemyCompositionData.ce){
			$('<br />').appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
			for(let enemy in nodeEnemyCompositionData.ce){
				if(enemyID != nodeEnemyCompositionData.ce[enemy]){
					enemyID = nodeEnemyCompositionData.ce[enemy];
					imgString = "assets/icons/" + SHIPDATA[enemyID].image;
				}
				airpower += calcAirpower(SHIPDATA[enemyID]);
				$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
			}
			counter++;
		}
		Math.floor(airpower);
		if(airpower > 0) $('#' + id + "_" + temp).append("<td>" + Math.floor(airpower * 0.33333) + " / " + Math.floor(airpower * 0.66666) + " / " + Math.floor(airpower * 1.5) + " / " + Math.floor(airpower * 3) + "</td>");
		counter++;
	}
	$('#nodeLetter-' + id).attr('rowspan', counter);
	$('<br />').appendTo('#mapEnemyComps');
}

function generateCompositionTable(diff){
	let eventName = '', mapName = '';
	if(EVENT_SELECTED == 20){
		eventName = "World " + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].world;
		mapName = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name + "";
	}
	else{
		eventName = MAPDATA[EVENT_SELECTED].name;
		mapName = "E-" + MAP_SELECTED;
	}
	let mapdata = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED];
	let enemyCompData = ENEMYCOMPS[eventName][mapName];
	$('#mapEnemyComps').empty();
	$('#mapEnemyComps').css('display', 'block');
	$('<h2>' + mapName + ' ' + (diff == 4 ? "Casual" : (diff == 1 ? "Easy" : (diff == 2 ? "Medium" : (diff == 3 ? "Hard" : (diff == 0 ? "All" : "Unknown"))))) + ' Compositions</h2>').appendTo('#mapEnemyComps');

	for(let part in mapdata.parts){
		if(mapdata.parts[part].enemyRaid){
			loadComposition('AB-' + part, mapdata.parts[part].enemyRaid, diff, enemyCompData, mapName);
		}
	}

	for(let node in mapdata.nodes){
		if(node == "Start") continue; // start node has no compositions
		if(mapdata.nodes[node].type == 1){ // not a battle node, no enemy comp to load
			// hardcoded exceptions for odd node data (they exist all throughout here, and are noted as such)
			if(mapdata.nodes[node].compName && mapdata.nodes[node].compName.includes('/')){
				for(let i = 0; i < mapdata.nodes[node].compName.length; ++i){
					if(mapdata.nodes[node].compName[i] != '/'){
						loadComposition(mapdata.nodes[node].compName[i], mapdata.nodes[mapdata.nodes[node].compName[i]], diff, enemyCompData, mapName);
					}
				}
			}
			else{
				loadComposition(node, mapdata.nodes[node], diff, enemyCompData, mapName);
			}
		}
		else if(mapdata.nodes[node].type >= 2 && mapdata.nodes[node].type <= 4){
			loadOtherNode(node, mapdata.nodes[node].type, mapName);
		}
	}
	if(window.location.hash){
		$(window.location.hash).css('background-color', 'lightsalmon');
		NODE_SELECTED = window.location.hash;
	}
}

// just write your own loooool
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

$(function(){
	// populate dropdown menu with all events
	let order = [];
	for(let event in MAPDATA){
		if(MAPDATA[event].visible !== undefined && MAPDATA[event].visible === false) continue;
		if(typeof(MAPDATA[event].order) != 'undefined'){
			order.push({ event_id: event, order: parseInt(MAPDATA[event].order) });
		}
		else{
			order.push({ event_id: event, order: 9000 + parseInt(event) });
		}
	}
	let neworder = mergesort(order);
	for(let event in order){
		$('#eventSelect').append('<option value="' + neworder[event].event_id + '">' + MAPDATA[neworder[event].event_id].name + '</option>');
	}
	$('#eventSelect').change(function(){
		$('#mapSelect').empty();
		EVENT_SELECTED = parseInt($('#eventSelect option:selected').attr('value'));
		for(let map in MAPDATA[EVENT_SELECTED].maps){
			$('#mapSelect').append('<option value="' + map + '">' + MAPDATA[EVENT_SELECTED].maps[map].name  + '</option>');
		}
		MAP_SELECTED = 1;
		ROUTE_SELECTED = 0;
		loadMapData();
		updateMap(0);
	}).change();
	$('#mapSelect').change(function(){
		MAP_SELECTED = parseInt($('#mapSelect option:selected').attr('value'));
		ROUTE_SELECTED = 0;
		loadMapData();
		updateMap(0);
	}).change();
	$('#mapRouteSelect').on('input', function(){
		ROUTE_SELECTED = parseInt($('#mapRouteInput').val());
		if(!MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[ROUTE_SELECTED] && ROUTE_SELECTED != 0) return ;
		updateMap(0);
		$('#mapRouteInput').attr('value', ROUTE_SELECTED);
	});
	$( window ).on('hashchange', function(){
		if(NODE_SELECTED) $(NODE_SELECTED).css('background-color', 'white');
		$(window.location.hash).css('background-color', 'lightsalmon');
		NODE_SELECTED = window.location.hash;
	});
});
