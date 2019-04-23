let EVENT_SELECTED = 20;
let MAP_SELECTED = 1;
let MAP_VISIBLE_NODES = [];
let ROUTE_SELECTED = 0;
let NODE_SELECTED = undefined;
let MAP_INFO = {
	99:{
		1:`<h2>E-1 Strategy Guide</h2>
		<i>Admiral, abyssal forces have invaded the southwestern seas once again, cutting us off from vital locations in the area.<br>
		Use a Combined Fleet to eliminate their presence.<br>
		<ul>
		<li>LBAS is available for use on this map.</li>
		<li>You may sortie either a Carrier Task Force or a Surface Task Force to this map.</li>
		<li>Be sure to thoroughly clear the area before proceeding to the target.</li>
		<li>Thanks to Minhfongboy for providing difficulty scaling and the home screen map icon.</li>
		</ul></i>
		E-1 is divided into two routes: North and South. The North route is accesible with a CTF, the South via a STF. Both routes must be taken in order to unlock the debuff present in the map.
		<br>
		<h3>Progression</h3>
		<h3>Part 1: Unlock the Debuff</h3>
		Particularly on Medium and Hard, the fleet at the boss node is incredibly strong and almost impossible to take down. Thankfully, a debuff is present in the map that gives you a 1.45x postcap damage 
		multiplier on all of your ships. You trigger this debuff by obtaining an S-rank at nodes S, T, and V.
		<h4>S-rank Node T</h4>
		This must be done using a Surface Task Force. Bringing 3 DD while keeping the fleet light appears to be the key to taking a shorter route. Once you get there, S-ranking this node is relatively straightforward and painless.
		<h4>S-rank Nodes S, V</h4>
		This must be done using a Carrier Task Force. The only real branching rule on the North route is from C -> H; to skip the sub node E a fast fleet with 4 or fewer BB + CV seems to be required. Node V has incredibly high airpower, 
		bringing 4CV is highly recommended, as is AACI to tolerate the mutliple air raid and air battle nodes on the way to S and V. S-ranking node S is pretty easy when you get there, node V on the other hand may take you a few tries.
		<h3>Part 2: Kill the Boss</h3>
		After unlocking the debuff, all that is left is to kill the boss. With the high postcap damage modifier you should make quick work of her assuming your fleet is loaded out appropriately. You can use either a Surface 
		Task Force or Carrier Task Force for this portion. A Fleet Oiler is needed if you wish to avoid incurring a damage penalty at the boss due to the length of the preboss on either route.`,
		2:`<h2>E-2 Strategy Guide</h2>
		<i>Commander, our next objective is to reclaim MI Island from an overwhelming abyssal force in what we will call 'Operation 139'.<br>
		In preparation, secure dominance in the MR Isles by reclaiming captured transports and eliminating the enemy airbase.<br>
		After doing so, continue further into the region and investigate an anomaly that may interfere with execution of Operation 139.<br>
		Commander, we are counting on you!<br>
		<ul>
		<li>LBAS is available for use on this map.</li>
		<li>LBAS bases available for use will expand as you capture enemy airbases.</li>
		<li>Capturing transports is vital to success in the transport operation.</li>
		<li>Thanks again to Minhfongboy for creating difficulty scaling, and to Prinz Eugen-sama for providing boss assets.</li>
		</ul></i>
		E-2 is a three-phase map: Transporting supplies to the general airbase area, securing control of said airbase, and investigating the anomaly taking place past it.
		<h3>Progression</h3>
		<h3>Part 1: Clearing the Transport Phase</h3>
		You will immediately recognize that something odd is going on with the transport phase with one peek at the gauge - an incredible 4000 TP on Hard difficulty. There is a map mechanic present which gives you 
		a multliplier for the TP you earn, which is the key to clearing this phase in a timely manner. To take advantage of it, you must use a Transport Combined Fleet and S-rank node F and/or L. Each node S-ranked gives an additional 
		1.5x multiplier for TP earned during the sortie you S-rank it, meaning you can have up to a 4x TP multiplier in the most optimal case. Routing to these nodes requires that you bring many ships carrying transport items (drums, daihatsu) 
		and that you keep your fleet light (battleships and carriers aren't treated kindly by the routing).
		The boss node W is a relatively straightforward installation boss. Utilize your LBAA, WG42, and Type 3 Shells to consistantly secure A-ranks and clear the TP phase with ease!
		<h3>Part 2: Claiming the Airbase</h3>
		The second part of the map tasks you with throwing more firepower at the airfield sitting in W and conquer it once and for all. You can use the same TCF that you did during the first phase, but it will be far more 
		difficult than taking advantage of the Striking Force Fleet option avaiable for this portion. You can bring some battleships and carriers and still take an ideal route, but in the end you still need to bring lighter ships (light cruisers, destroyers) 
		to secure the best branching. Like in the first phase, good LBAA, WG42, and Type 3 Shells will be very helpful in clearing this boss. Tanks will also come in handy with it comes to defeating installations enroute to the boss. 
		With an optimized setup, the boss will fall in due time.
		<h3>Part 3: Investigating the Anomaly</h3>
		After reclaming the airfield, your task is to use your advantageous position to look at an anomaly that has puzzled command for some time. To conduct your investigation, you must secure total control over the latter 
		portion of the operational area, that being closest to the anomaly. More specifically, you must accomplish the following:
		<ul>
		<li>Hard Difficulty: S-rank nodes Y, Z6; AS+ nodes Y, Z2, Z3, Z4</li>
		<li>Medium Difficulty: S-rank nodes Y, Z6; AS nodes Z2, Z3, Z4</li>
		<li>Easy Difficulty: S-rank nodes Y, Z6; AS nodes Z2, Z4</li>
		<li>Casual Difficulty: S-rank nodes Y, Z6</li>
		</ul>
		Using a fleet with many carriers is the key to securing the air raids. Approaching the harbor at node Y is best done using a smaller fleet. When these requirements are met, the boss will be unlocked.
		<h3>Part 4: Elminating the Anomaly</h3>
		Now that the anomaly has been identified, proceed to eliminate it! Prior to doing this, it is suggested that you trigger the debuff mechanic present for this boss. To do so:
		<ul>
		<li>Hard Difficulty: S-rank nodes W, Y, Z5, Z8</li>
		<li>Medium Difficulty: S-rank nodes Y, Z5, Z8</li>
		<li>Easy Difficulty: S-rank nodes Y, Z5; A-rank node Z8</li>
		<li>Casual Difficulty: S-rank node Y, A-rank node Z8</li>
		</ul>
		Use fleets from the earlier parts to effectively defeat the listed nodes. After unlocking the debuff, enemies at the boss receive an armor debuff, and Friend Fleets will arrive at the boss node.
		For routing to the boss, utilize a Surface Task Force with a limited number of heavy ships and at least one Seaplane Tender to secure the most ideal route. LHA can shorten the route taken, but not quite to the 
		extent that AV can. The boss node is packed full of installation-types that are weak to Type 3 Shells, bringing them is essentially mandatory for clearing. PT Imps are also present at the boss node; equipment that is 
		effective against them should be brought with you to counter them. The use of special attacks is advised, as the boss can prove difficult even with the debuff active.`,
		3:`<h2>E-3 Strategy Guide</h2>
		<i>The area around Vela Gulf has been attacked and conquered by a strong abyssal force, one of the most imposing ones ever witnessed.<br>
		Reclaim the airbase with an initial search party, then use it in conjunction with the main body of the fleet to converge on and destroy the enemy task force!<br>
		<ul>
		<li>LBAS will become avaiable for use as you progress through the map.</li>
		<li>Absolute domination of the abyssal force is required for success in this operation.</li>
		<li>Historically relevant ships to the tasks at hand in this map will be useful for clearing this operation.</li>
		<li>This map was made in collaboration with Prinz Eugen-sama, who provided the enemy comps and assets for this event. Thank you very much!</li>
		</ul></i>`
	}
};

function loadMapAssets(){
	// clear map image field
	$('#mapImage').empty();
	// add base map image
	$('#mapImage').append('<br><br><div id="guideMap"></div>');
	let mapImage = new Image();
	mapImage.onload = function(){
		$('#guideMap').css('width', this.width + 'px');
		$('#guideMap').css('height', this.height + 'px');
	}
	mapImage.src = "assets/maps/" + EVENT_SELECTED + "/" + MAP_SELECTED + ".png";
	mapImage.style = "position:absolute";
	mapImage.id = "mapImage" + MAP_SELECTED;
	$('#guideMap').append(mapImage);
	// add hidden routes (if applicable)
	let layer = 1;
	if(ROUTE_SELECTED != 0 && MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes){
		for(let j = 1; j <= ROUTE_SELECTED; ++j){
			for(let k in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images){
				// don't load routes that have no image defined
				if(!MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name) continue;
				$('#guideMap').append('<img id="mapImage' + MAP_SELECTED + '-' + j + '-' + k + '" src="assets/maps/' + EVENT_SELECTED + '/' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name + '" />')
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
				offsetX = 10; offsetY = 26;
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
		$('#guideMap').append('<div style="position:absolute; z-index:' + layer + '; left:' + (MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].x - offsetX) + '; top:' +  (MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].y - offsetY) + ';"><a href="#' + (EVENT_SELECTED == 20 ? MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name : "E-" + MAP_SELECTED) + nodeName + '"><img src="' + nodeIcon + '" /></a></div>');
	}
}

function loadMapData(){
	$('#guide').empty();
	// load map guide information
	$('#guide').append('<h2>' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nameT + '</h2>');
	if(MAP_INFO[EVENT_SELECTED] && MAP_INFO[EVENT_SELECTED][MAP_SELECTED]){
		$('#guide').append(MAP_INFO[EVENT_SELECTED][MAP_SELECTED]);
	}
	$('#enemyCompSelect').empty();
	// add enemy composition buttons
	// Events with HQ level scaling (pre Winter 2015)
	if(EVENT_SELECTED <= 28){
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(0)">All</button>');
	}
	// Events with difficulty selection (pre Winter 2018)
	else if(EVENT_SELECTED >= 29 && EVENT_SELECTED <= 40){
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	// Events with difficulty selection (Winter 2018 onwards)
	else{
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(4)">Casual</button><button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
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
	$('<table id="' + id + '"><tr><th>' + letter + '</th><th>' + (type == 2 ? "Resource Node" : (type == 3 ? "Empty Node" : (type == 4 ? "Maelstrom Node" : "Unknown Node Type"))) + '</th></tr>').appendTo('#enemyComps');
	$('<br />').appendTo('#enemyComps');
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
	$('<table id="' + id + '"><tr><th>' + '</th><th>Formation</th><th>' + type + '</th><th>AD / AP / AS / AS+</th></tr>').appendTo('#enemyComps');
	
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
	$('<br />').appendTo('#enemyComps');
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
	$('#enemyComps').empty();
	$('<h2>' + mapName + ' ' + (diff == 4 ? "Casual" : (diff == 1 ? "Easy" : (diff == 2 ? "Medium" : (diff == 3 ? "Hard" : (diff == 0 ? "All" : "Unknown"))))) + ' Compositions</h2>').appendTo('#enemyComps');
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

$(function(){
	// populate dropdown menu with all events
	for(let event in MAPDATA){
		$('#eventSelect').append('<option value="' + event + '">' + MAPDATA[event].name + '</option>');
	}
	$('#eventSelect').change(function(){
		$('#enemyComps').empty();
		$('#mapSelect').empty();
		$('#mapRouteSelect').empty();
		EVENT_SELECTED = parseInt($('#eventSelect option:selected').attr('value'));
		for(let map in MAPDATA[EVENT_SELECTED].maps){
			$('#mapSelect').append('<option value="' + map + '">' + MAPDATA[EVENT_SELECTED].maps[map].name  + '</option>');
		}
		MAP_SELECTED = 1;
		ROUTE_SELECTED = 0;
		updateMap(0);
		loadMapData();
	}).change();
	$('#mapSelect').change(function(){
		$('#enemyComps').empty();
		$('#mapRouteSelect').empty();
		MAP_SELECTED = parseInt($('#mapSelect option:selected').attr('value'));
		ROUTE_SELECTED = 0;
		updateMap(0);
		loadMapData();
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
