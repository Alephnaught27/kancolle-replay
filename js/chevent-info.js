let hashSelectedNode = undefined;
let EVENT_SELECTED = 20;
let MAP_SELECTED = 1;

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

function loadMapInfo(){
	$('#guide').empty();
	$('#mapImage').empty();
	$('#enemyCompSelect').empty();
	// load map guide if one exists
	if(MAP_INFO[EVENT_SELECTED] && MAP_INFO[EVENT_SELECTED][MAP_SELECTED]){
		$('#guide').append(MAP_INFO[EVENT_SELECTED][MAP_SELECTED]);
	}

	// load map image
	$('#mapImage').append('<br><br><div id="guideMap"><img src="assets/maps/' + EVENT_SELECTED + '/' + MAP_SELECTED + '.png" style="position:absolute" /></div>');
	// add hidden routes (if applicable)
	let layer = 1;
	if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes){
		for(let j in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes){
			for(let k in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images){
				// don't load routes that have no image defined, also some hardcoding due to Winter 2017 oddities
				if(!MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name || (EVENT_SELECTED == 37 && MAP_SELECTED == 1 && k == 0)) continue;
				$('#guideMap').append('<img id="' + MAP_SELECTED + '-' + j + k + '" src="assets/maps/' + EVENT_SELECTED + '/' + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].name + '" />')
				$('#' + MAP_SELECTED + '-' + j + k).css('z-index', j).css('position','absolute').css('left', MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].x).css('top', MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].hiddenRoutes[j].images[k].y);
				++layer;
			}
		}
	}

	if(EVENT_SELECTED == 20){
		eventName = "World " + MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].world;
		mapName = MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].name + "";
	}
	else{
		eventName = MAPDATA[EVENT_SELECTED].name;
		mapName = "E-" + MAP_SELECTED;
	}

	// fill in nodes
	for(let k in MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes){
		if(k == 'Start' || MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 0) continue; // start node, already on map
		let nodeIcon = "assets/maps/nodeR.png", offsetX = 10, offsetY = 10;
		if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].type == 1){
			if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].raid){
				nodeIcon = "assets/maps/nodeRaid.png";
				offsetX = 23; offsetY = 19;
			}
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].aironly){
				nodeIcon = "assets/maps/nodeAir.png";
				offsetX = 35; offsetY = 22;
			}
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].night2) nodeIcon = "assets/maps/nodeN.png";
			else if(MAPDATA[EVENT_SELECTED].maps[MAP_SELECTED].nodes[k].nightToDay2) nodeIcon = "assets/maps/nodeND.png";
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
	
	// add potential enemy composition buttons
	if(EVENT_SELECTED >= 29 && EVENT_SELECTED <= 40){
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
	else if(EVENT_SELECTED <= 28){
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(0)">All</button>');
	}
	else{
		$('#enemyCompSelect').append('<button onclick="generateCompositionTable(4)">Casual</button><button onclick="generateCompositionTable(1)">Easy</button><button onclick="generateCompositionTable(2)">Medium</button><button onclick="generateCompositionTable(3)">Hard</button>');
	}
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
		case 214:
			return "C. Form 4";
		default:
			return "Unknown";
	}
}

function loadComposition(letter,nodeData,diff,eventName,mapName){
	let nodeCompData = ENEMYCOMPS[eventName][mapName];
	// create initial table for the node
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	// determine node type
	let type = (nodeData.raid) ? "Air Raid Node" : ((nodeData.night2) ? "Night Battle Node" : ((nodeData.aironly) ? "Aerial Battle Node" : ((nodeData.boss) ? "Boss Battle Node" : "Normal Battle Node")));
	let counter = 0, enemyID = 0, imgString, isNodeLetterCreated = false;
	if($('#' + id)[0]) return ;
	// create table header
	$('<table id="' + id + '"><tr><th>' + '</th><th>Formation</th><th>' + type + '</th><th>AD / AP / AS / AS+</th></tr>').appendTo('#enemyComps');
	
	let enemyCompos = [];
	// acquire list of compositions to process
	// diff 0 = load everything (used for hq lvl scaled maps [pre Winter 2015])
	// diff >= 1 = load that diff
	if(diff == 0){
		for(let a in nodeData.compDiff){
			for(let b in nodeData.compDiff[a])  enemyCompos.push(nodeData.compDiff[a][b]);
		}
		if(!nodeData.compDiffF){ }
		else{
			for(let c in nodeData.compDiffF){
				for(let d in nodeData.compDiffF[c])  enemyCompos.push(nodeData.compDiffF[c][d]);
			}
		}
	}
	else{
		if(!nodeData.compDiff || !nodeData.compDiff[diff]) {return ;}
		for(let a in nodeData.compDiff[diff])
			enemyCompos.push(nodeData.compDiff[diff][a]);
		if(!nodeData.compDiffF){ }
		else{
			for(let a in nodeData.compDiffF[diff])
			enemyCompos.push(nodeData.compDiffF[diff][a]);
		}
	}
	for(let comp in enemyCompos){
		let temp = comp;
		temp = temp.replace(/\s+/g, '');
		$('<tr id="' + id + "_" + temp + '">').appendTo('#' + id + ' > tbody');
		// create node letter column, include rowspan element (to be overwritten later)
		if(!isNodeLetterCreated){
			$('<td id="nodeLetter-' + id + '" rowspan=1>' + letter + '</td>').appendTo('#' + id + "_" + temp);
			isNodeLetterCreated = true;
		}
		let compData;
		// composition in enemy comp data
		if(!nodeCompData[letter]){
			if(nodeData.boss && EVENT_SELECTED == 20) compData = nodeCompData["Boss"][enemyCompos[comp]];
			else compData = nodeCompData[nodeData.compName][enemyCompos[comp]];
		}
		else compData = nodeCompData[letter][enemyCompos[comp]];
		// insert enemy formation
		$('<td class="formation">' + formationConvert(compData.f) + '</td>').appendTo('#' + id + "_" + temp);

		// generate enemy comps + begin calculating airpower
		$('<td class="comp-' + temp + '">').appendTo('#' + id + "_" + temp);
		let airpower = 0;
		for(let enemy in compData.c){
			if(enemyID != compData.c[enemy]){
				enemyID = compData.c[enemy];
				imgString = "assets/icons/" + SHIPDATA[enemyID].image;
			}
			airpower += calcAirpower(SHIPDATA[enemyID]);
			$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
		}
		if(compData.ce){
			$('<br />').appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
			for(let enemy in compData.ce){
				if(enemyID != compData.ce[enemy]){
					enemyID = compData.ce[enemy];
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

function loadOtherNode(letter,type,mapName){
	let id = mapName + letter;
	if(id.includes('*')) id = id.replace('*', '-');
	$('<table id="' + id + '"><tr><th>' + letter + '</th><th>' + (type == 2 ? "Resource Node" : (type == 3 ? "Empty Node" : (type == 4 ? "Maelstrom Node" : "Unknown Node Type"))) + '</th></tr>').appendTo('#enemyComps');
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
	$('#enemyComps').empty();
	$('<h2>' + mapName + ' ' + (diff == 4 ? "Casual" : (diff == 1 ? "Easy" : (diff == 2 ? "Medium" : (diff == 3 ? "Hard" : "Unknown")))) + ' Compositions</h2>').appendTo('#enemyComps');
	for(let node in mapdata.nodes){
		if(node == "Start") continue; // start node has no compositions
		if(mapdata.nodes[node].type == 1){ // not a battle node, no enemy comp to load
			// hardcoded exceptions for odd node data (they exist all throughout here, and are noted as such)
			if(mapdata.nodes[node].compName && mapdata.nodes[node].compName.includes('/')){
				for(let i = 0; i < mapdata.nodes[node].compName.length; ++i){
					if(mapdata.nodes[node].compName[i] != '/'){
						console.log(mapdata.nodes[node].compName[i]);
						loadComposition(mapdata.nodes[node].compName[i], mapdata.nodes[mapdata.nodes[node].compName[i]], diff, eventName, mapName);
					}
				}
			}
			else{
				loadComposition(node, mapdata.nodes[node], diff, eventName, mapName);
			}
		}
		else if(mapdata.nodes[node].type >= 2 && mapdata.nodes[node].type <= 4){
			loadOtherNode(node, mapdata.nodes[node].type, mapName);
		}
	}
	if(window.location.hash){
		$(window.location.hash).css('background-color', 'lightsalmon');
		hashSelectedNode = window.location.hash;
	}
}

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
		</ul></i>`
	}
};

$(function(){
	// populate dropdown menu
	for(let event in MAPDATA){
		$('#eventSelect').append('<option value="' + event + '">' + MAPDATA[event].name + '</option>');
	}
	$('#eventSelect').change(function(){
		$('#enemyComps').empty();
		EVENT_SELECTED = $('#eventSelect option:selected').attr('value');
		$('#mapSelect').empty();
		for(let map in MAPDATA[EVENT_SELECTED].maps){
			$('#mapSelect').append('<option value="' + map + '">' + MAPDATA[EVENT_SELECTED].maps[map].name  + '</option>');
		}
		MAP_SELECTED = "1";
		loadMapInfo();
	}).change();
	$('#mapSelect').change(function(){
		$('#enemyComps').empty();
		MAP_SELECTED = $('#mapSelect option:selected').attr('value');
		loadMapInfo();
	}).change();
	
	$( window ).on('hashchange', function(){
		if(hashSelectedNode) $(hashSelectedNode).css('background-color', 'white');
		$(window.location.hash).css('background-color', 'lightsalmon');
		hashSelectedNode = window.location.hash;
	});
});
