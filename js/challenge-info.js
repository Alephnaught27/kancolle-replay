let EVENT_SELECTED = -1;
let MAP_SELECTED = 1;
let ROUTE_SELECTED = 0;
let DIFF_SELECTED = -1;
let NODE_SELECTED = undefined;
let PAGE_URL = new URL(window.location), PAGE_PARAMS = undefined;
let CHDATA = { event: { maps: {} }};
if(PAGE_URL.search.length !== 0){
	PAGE_PARAMS = new URLSearchParams(PAGE_URL.search);
}

/* Utility functions */
// Return a formation image object given a formation id.
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

// Get the name corresponding to each difficulty number.
function getDiffName(diff){
	let diffNames = MAPDATA[EVENT_SELECTED].diffNames;
	if(diffNames && diffNames[diff]) return diffNames[diff];
	else{
		switch(diff){
			case 5:
				return "Historical";
			case 4:
				return "Casual";
			case 3:
				return "Hard";
			case 2:
				return "Medium";
			case 1:
				return "Easy";
			case 0:
				return "All";
			default:
				return "Unknown";
		}
	}
}

// Calculate the airpower that an enemy ship contributes to the fleet.
function calcAirpower(enemy){
	var ap = 0;
	for (let i=0; i<enemy.EQUIPS.length; i++) {
		if (EQTDATA[EQDATA[enemy.EQUIPS[i]].type].isfighter) {
			ap += Math.floor((EQDATA[enemy.EQUIPS[i]].AA||0) * Math.sqrt(enemy.SLOTS[i]) + (EQDATA[enemy.EQUIPS[i]].APbonus||0));
		}
	}
	return ap;
}

// Generate an on-hover description for an enemy ship.
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
/* End utility functions */

// Updates the displayed map image, including node colors and unlockable paths.
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
			if(MAPDATA[eid].maps[mid].nodes[k].aironly){
				nodeIcon = "assets/maps/nodeAir.png";
				offsetX = 35; offsetY = 22;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].raid){
				nodeIcon = "assets/maps/nodeRaid.png";
				offsetX = 23; offsetY = 19;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].strike){
				nodeIcon = "assets/maps/nodeStrike.png";
				offsetX = 28; offsetY = 19;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].night2) nodeIcon = "assets/maps/nodeN.png";
			else if(MAPDATA[eid].maps[mid].nodes[k].nightToDay2 || MAPDATA[eid].maps[mid].nodes[k].nightToDay2CF) nodeIcon = "assets/maps/nodeND.png";
			else if(MAPDATA[eid].maps[mid].nodes[k].ambush){
				nodeIcon = "assets/maps/nodeAmbush.png";
				offsetX = 10; offsetY = 27;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].ambushN){
				nodeIcon = "assets/maps/nodeAmbushN.png";
				offsetX = 10; offsetY = 27;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].minefield){
				nodeIcon = "assets/maps/nodeMine.png";
				offsetX = 16; offsetY = 14;
			}
			else if(MAPDATA[eid].maps[mid].nodes[k].boss){
				nodeIcon = "assets/maps/nodeBoss.png";
				offsetX = 19; offsetY = 24;
			}
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
		else if(MAPDATA[eid].maps[mid].nodes[k].type == 5) nodeIcon = "assets/maps/nodeS.png";

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

// Equipment library: Loads an equipment entry.
function loadEquipEntry(eqid){
	$('#eqLibInfo').empty();
	$('#eqLibInfo').append('<div id="eqLibInfoCard"></div><div id="eqLibInfoNotes"></div><div id="eqLibInfoExit">X</div>');
	$('#eqLibInfoCard').append('<img style="margin-bottom: 20px;" src="' + (EQUIP_INFO[eqid].card_path ? EQUIP_INFO[eqid].card_path : 'assets/maps/rewards/i' + eqid + '.png') + '" /><br>');
	$('#eqLibInfoNotes').append('<h1>' + EQDATA[eqid].name + '</h1>' + (EQUIP_INFO[eqid].notes || "No description available.") + (EQUIP_INFO[eqid].credits ? '<br>Credits to: ' + EQUIP_INFO[eqid].credits : ''));
	let statString = '<div id="eqLibInfoStats">';
	var STATS = ['DIVEBOMB','FP','TP','AA','AR','ACC','EV','ASW','LOS'];
	for(let stat of STATS){
		if(EQDATA[eqid][stat]){
			statString += '<img style="position:relative; top:3px; width: 20px;" title="' + stat + '" src="assets/stats/' + stat.toLowerCase() + '.png" /> ' + EQDATA[eqid][stat] + '   ';
		}
	}
	if(EQTDATA[EQDATA[eqid].type].isPlane && !(EQDATA[eqid].type === AUTOGYRO) && !(EQDATA[eqid].type === ASWPLANE)){
		statString += '<img style="position:relative; top:3px; width: 20px;" title="RNG" src="assets/stats/rn.png" /> ' + LBASDATA[eqid].distance + '   ';
	}
	statString += '</div>';
	$('#eqLibInfoCard').append(statString);
	$('#eqLibInfoExit').click(function(){
		$('#eqLibInfo').fadeOut(200);
		//$('#eqLibInfo').css('display', 'none');
	});
	$('#eqLibInfo').fadeIn(200);
	$('#eqLibInfo').css('display', 'flex');
}

// Equipment library: Loads the equipment library page.
function loadEquipLibrary(){
	$('#pEquip').append('<div id="eqLib"><div id="eqLibInfo"></div></div>');
	if(EQUIP_INFO){
		for(let eq in EQUIP_INFO){
			let data = EQDATA[eq];
			$('#eqLib').append('<img class="eqLibEntry" width=260px height=260px src="' + (EQUIP_INFO[eq].card_path ? EQUIP_INFO[eq].card_path : 'assets/maps/rewards/i' + eq + '.png') + '" onclick="loadEquipEntry(' + eq + ')">');
		}
	}
	
}

// Map info: Loads all map data (guide, map image, etc).
function loadMapData(eid, mid){
	$('#mapSelectContainer').css('display', 'inline');
	$('#permlinkContainer').css('display', 'inline');
	$('#guide').empty();
	// load map guide information
	$('#guide').append('<div id="guideBoard"><h2 id="guideBoardHeader"><span style="font-size:18px">' + MAPDATA[eid].name + '</span><br>' + MAPDATA[eid].maps[mid].name + ': ' + MAPDATA[eid].maps[mid].nameT + '</h2>');
	if(MAP_INFO[eid] && MAP_INFO[eid][mid]){
		$('#guideBoard').append('<div id="guideBoardText">' + MAP_INFO[eid][mid].boardText);
		$('#guide').append('<h1>Map Guide</h1><div id="guideText">' + MAP_INFO[eid][mid].strategyText);
	}
	$('#guide').append('<hr>');

	// load map enemy composition headers
	$('#map').empty();
	$('#map').append('<div id="mapGraphic"><h3>Tip: Hover over a Node to see its LBAS Distance</h3><div id="mapRouteSelect"></div><div id="mapEnemyCompSelect"><br></div><br><div id="mapContainer"></div></div><div id="mapEnemyComps"><br></div>');
	// get difficulties to load compositions for
	let diffs = (typeof(MAPDATA[eid].maps[mid].allowDiffs) !== 'undefined' ? MAPDATA[eid].maps[mid].allowDiffs : (typeof(MAPDATA[eid].allowDiffs) !== 'undefined' ? MAPDATA[eid].allowDiffs : [])).slice(), diffMode = MAPDATA[eid].diffMode;
	diffs.sort();

	// add enemy composition buttons
	let compSelectHTML = '<b>View Enemy Compositions:</b><br>';
	if(diffMode === 1){
		compSelectHTML += '<button onclick="generateCompositionTable(0)">All</button>';
	}
	else{
		if(diffs.indexOf(4) !== -1 && diffs.indexOf(4) !== 0) compSelectHTML += '<button onclick="generateCompositionTable(4)">Casual</button>';
		for(let diff of diffs){
			if(diff !== 4) compSelectHTML += '<button onclick="generateCompositionTable(' + diff + ')">' + getDiffName(diff) + '</button>';
		}
	}
	if(typeof(PAGE_PARAMS) !== 'undefined' && PAGE_PARAMS.get("debug") === "comp"){
		compSelectHTML += '<button onclick="generateCompositionTable(0)">Debug</button>';
	}
	$('#mapEnemyCompSelect').append(compSelectHTML);
	$('#mapRouteSelect').empty();
	// add route switch control buttons
	if(MAPDATA[eid].maps[mid].hiddenRoutes){
		$('#mapRouteSelect').append('<b>Map Unlock Phase:</b><br><button onclick="ROUTE_SELECTED=updateMap(EVENT_SELECTED,MAP_SELECTED,ROUTE_SELECTED,-1)">\<\<</button><input id="mapRouteInput" type="text" size="2" name="mapRoute" value="0" /><button onclick="ROUTE_SELECTED=updateMap(EVENT_SELECTED,MAP_SELECTED,ROUTE_SELECTED,1)">\>\></button>');
	}
	
	// fill in permalink box
	$('#permlinkField').attr('value', 'alephnaught27.github.io/kancolle-replay/event-info.html?world=' + EVENT_SELECTED + '&mapnum=' + MAP_SELECTED);
	updateMap(eid, mid, ROUTE_SELECTED, 0);
}

function pushCompositions(compDiff, compArray, flag){
	for(let a in compDiff){
		if(typeof(compDiff[a]) === 'object'){
			for(let b in compDiff[a]){
				for(let c in compDiff[a][b]){
					compArray[0].push(compDiff[a][b][c]);
					compArray[1].push({});
				}
			}
		}
		else{
			compArray[1].push( flag === 0 ? { final: true } : (flag === 1 ? { cleared : true } : {}));
			if(typeof(compDiff[a]) === 'number' && EVENT_SELECTED !== 20){ // new system with individual chance to roll given comp
				compArray[0].push(a);
			}
			else{
				compArray[0].push(compDiff[a]);
			}
		}
	}
}

function loadComposition(letter, nodeData, diff, enemyCompData, mapName){
	// generate node id
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	// determine node type
	let type = "Normal Battle Node";
	if(nodeData.ambush){ type = "Ambush Node"; }
	else if(nodeData.minefield){ type = "Minefield Node"; }
	else if(nodeData.raid){ type = "Air Raid Node"; }
	else if(nodeData.aironly){ type = "Aerial Battle Node"; }
	else if(nodeData.night || nodeData.night2 || enemyCompData[Object.keys(enemyCompData)[0]].NB){ type = "Night Battle Node"; }
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
			if(typeof(nodeData.compDiff) === 'undefined') {return ;}
			for(let a in nodeData.compDiff) pushCompositions(nodeData.compDiff[a], nodeCompositions);
			if(typeof(nodeData.compDiffS) !== 'undefined'){
				for(let a in nodeData.compDiffS) pushCompositions(nodeData.compDiffS[a], nodeCompositions);
			}
			if(typeof(nodeData.compDiffF) !== 'undefined'){
				for(let a in nodeData.compDiffF) pushCompositions(nodeData.compDiffF[a], nodeCompositions, 0);
			}
			if(typeof(nodeData.compDiffC) !== 'undefined'){
				for(let a in nodeData.compDiffC) pushCompositions(nodeData.compDiffC[a], nodeCompositions, 1);
			}
		}
	}
	// diff >= 1 = load that diff
	else{
		CHDATA.event.maps = {};
		try{
			if(nodeData.compDiffPart){
				
				nodeData = nodeData.compDiffPart[Object.keys(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].parts).length];
			}				
			if(typeof(nodeData.compDiff) === 'undefined' || typeof(nodeData.compDiff[diff]) === 'undefined') {return ;}
			pushCompositions(nodeData.compDiff[diff], nodeCompositions);
			if(typeof(nodeData.compDiffS) !== 'undefined') pushCompositions(nodeData.compDiffS[diff], nodeCompositions);
			if(typeof(nodeData.compDiffF) !== 'undefined') pushCompositions(nodeData.compDiffF[diff], nodeCompositions, 0);
			if(typeof(nodeData.compDiffC) !== 'undefined') pushCompositions(nodeData.compDiffC[diff], nodeCompositions, 1);
		}catch(e){
			if(EVENT_SELECTED == 42 && MAP_SELECTED == 3){
				CHDATA.event.maps = { 3: { part: 2 } };
				if(typeof(nodeData.compDiff[diff]) === 'undefined' || typeof(nodeData.compDiff[diff]) === 'undefined') {return ;}
				pushCompositions(nodeData.compDiff[diff], nodeCompositions);
				if(typeof(nodeData.compDiffS) !== 'undefined') pushCompositions(nodeData.compDiffS[diff], nodeCompositions);
				if(typeof(nodeData.compDiffF) !== 'undefined') pushCompositions(nodeData.compDiffF[diff], nodeCompositions, 0);
				if(typeof(nodeData.compDiffC) !== 'undefined') pushCompositions(nodeData.compDiffC[diff], nodeCompositions, 1);
				CHDATA.event.maps = { 3: { part: 3 } };
				pushCompositions(nodeData.compDiff[diff], nodeCompositions);
				if(typeof(nodeData.compDiffF) !== 'undefined') pushCompositions(nodeData.compDiffF[diff], nodeCompositions, 0);
				if(typeof(nodeData.compDiffC) !== 'undefined') pushCompositions(nodeData.compDiffC[diff], nodeCompositions, 1);
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
		let nodeCompositionData = enemyCompData[nodeCompositions[0][comp]];;
		// insert enemy formation
		$('<td class="formation">' + formationConvert(nodeCompositionData.f) + '</td>').appendTo('#' + id + "_" + comp);
		
		// insert other details
		if(nodeCompositions[1][comp]){
			let compInfo = (nodeCompositions[1][comp].hq ? 'HQ Lvl ' + nodeCompositions[1][comp].hq + '<br>' : '') + (nodeCompositions[1][comp].cleared ? '<span style="font-weight: bold; color:blue;">(Cleared)</span>' : '') + (nodeCompositions[1][comp].final ? '<span style="font-weight: bold; color:red;">(Final)</span>' : '');
			$('<td>' + compInfo + '</td>').appendTo('#' + id + "_" + comp);
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
	let eventName = '', mapName = '', mapData = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED];
	DIFF_SELECTED = diff;
	if(EVENT_SELECTED == 20){
		eventName = "World " + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].world;
		mapName = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name.toString();
	}
	else{
		eventName = MAPDATA[EVENT_SELECTED].name;
		mapName = "E-" + MAP_SELECTED;
	}
	
	$('#mapEnemyComps').empty();
	$('#mapEnemyComps').css('display', 'block');
	$('<h2>' + mapName + ' ' + getDiffName(diff) + ' Compositions</h2>').appendTo('#mapEnemyComps');
	if(mapData.enemyRaid){
		loadComposition('AB', mapData.enemyRaid, diff, ENEMYCOMPS[eventName][mapName][mapData.enemyRaid.compName], mapName);
	}
	else if(mapData.parts){
		for(let part in mapData.parts){
			if(mapData.parts[part].enemyRaid){
				loadComposition('AB-' + part, mapData.parts[part].enemyRaid, diff, ENEMYCOMPS[eventName][mapName][mapData.parts[part].enemyRaid.compName], mapName);
			}
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
	// element events
	// clear and repopulate map dropdown when the selected event is changed
	$('#eventSelect').change(function(){
		$('#mapSelect').empty();
		EVENT_SELECTED = parseInt($('#eventSelect option:selected').attr('value'));
		if(EVENT_SELECTED >= 0){
			for(let map in MAPDATA[EVENT_SELECTED].maps){ 
				$('#mapSelect').append('<option value="' + map + '">' + (EVENT_SELECTED === 10 ? MAPDATA[EVENT_SELECTED].maps[map].name + ' ' + MAPDATA[EVENT_SELECTED].maps[map].nameT : MAPDATA[EVENT_SELECTED].maps[map].name) + '</option>'); 
			}
		}
		MAP_SELECTED = (EVENT_SELECTED === 10 ? 11 : 1); 
		ROUTE_SELECTED = 0;
		DIFF_SELECTED = -1;
		loadMapData(EVENT_SELECTED, MAP_SELECTED);
	});
	// clear and repopulate map display when the selected map is changed
	$('#mapSelect').change(function(){
		MAP_SELECTED = parseInt($('#mapSelect option:selected').attr('value'));
		ROUTE_SELECTED = 0;
		DIFF_SELECTED = -1;
		loadMapData(EVENT_SELECTED, MAP_SELECTED);
	});
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
	$('#hAbout').click(function(){
		$('#pAbout').css('display', 'block'); $('#hAbout').attr('class', 'hStyleSel');
		$('#pEvent').css('display', 'none'); $('#hEvent').attr('class', 'hStyle');
		$('#pEquip').css('display', 'none'); $('#hEquip').attr('class', 'hStyle');
	});
	$('#hEvent').click(function(){
		$('#pEvent').css('display', 'block'); $('#hEvent').attr('class', 'hStyleSel');
		$('#pAbout').css('display', 'none'); $('#hAbout').attr('class', 'hStyle');
		$('#pEquip').css('display', 'none'); $('#hEquip').attr('class', 'hStyle');
	});
	$('#hEquip').click(function(){
		$('#pEquip').css('display', 'block'); $('#hEquip').attr('class', 'hStyleSel');
		$('#pAbout').css('display', 'none'); $('#hAbout').attr('class', 'hStyle');
		$('#pEvent').css('display', 'none'); $('#hEvent').attr('class', 'hStyle');
	});
	
	// populate equipment library page with equip entries
	loadEquipLibrary();
	
	// event page formation
	// populate dropdown menu with all available events, maps of the first event in the list
	let order = [];
	for(let ev in MAPDATA){
		if(MAPDATA[ev].visible !== undefined && MAPDATA[ev].visible === false) continue;
		if(typeof(MAPDATA[ev].order) != 'undefined'){
			let orderNum = parseInt(MAPDATA[ev].order); if(orderNum < 0) orderNum = 0;
			order.push({ world: parseInt(ev), order: orderNum });
		}
		else{
			order.push({ world: parseInt(ev), order: 9000 + parseInt(ev) });
		}
	}
	order.sort(function(a,b){
		if(a.order < b.order) return -1;
		else return 1;
	});

	// override EVENT_SELECTED and MAP_SELECTED if specified
	if(typeof(PAGE_PARAMS) !== 'undefined'){
		if(PAGE_PARAMS.has("world") && !isNaN(parseInt(PAGE_PARAMS.get("world"))) && typeof(MAPDATA[parseInt(PAGE_PARAMS.get("world"))]) !== 'undefined') EVENT_SELECTED = PAGE_PARAMS.get("world");
		if(PAGE_PARAMS.has("mapnum") && !isNaN(parseInt(PAGE_PARAMS.get("mapnum"))) && typeof(MAPDATA[EVENT_SELECTED].maps[parseInt(PAGE_PARAMS.get("mapnum"))]) !== 'undefined') MAP_SELECTED = PAGE_PARAMS.get("mapnum");
	}
	for(let ev of order){ $('#eventSelect').append('<option value="' + ev.world + '">' + MAPDATA[ev.world].name + '</option>'); }
	if(MAPDATA[EVENT_SELECTED]){
		$('#hEvent').click();
	} else {
		EVENT_SELECTED = order[0].world; MAP_SELECTED = (EVENT_SELECTED === 10 ? 11 : 1);
	}
	
	if(EVENT_SELECTED >= 0){
		for(let map in MAPDATA[EVENT_SELECTED].maps){ 
			$('#mapSelect').append('<option value="' + map + '">' + (EVENT_SELECTED === 10 ? MAPDATA[EVENT_SELECTED].maps[map].name + ' ' + MAPDATA[EVENT_SELECTED].maps[map].nameT : MAPDATA[EVENT_SELECTED].maps[map].name) + '</option>'); 
		}
		$('#eventSelect > option[value = "' + EVENT_SELECTED + '"]').attr('selected', '');
		$('#mapSelect > option[value = "' + MAP_SELECTED + '"]').attr('selected', '');
	}
	loadMapData(EVENT_SELECTED, MAP_SELECTED);
});