let imgPath = "assets/icons/";
let enemyID = 0, imgString, mapString = 'E-1', mapNumber = 1;
function muhAirpower(enemy){
	var ap = 0;
	for (let i=0; i<enemy.EQUIPS.length; i++) {
		if (EQTDATA[EQDATA[enemy.EQUIPS[i]].type].isfighter) {
			ap += Math.floor((EQDATA[enemy.EQUIPS[i]].AA||0) * Math.sqrt(enemy.SLOTS[i]) + (EQDATA[enemy.EQUIPS[i]].APbonus||0));
		}
	}
	return ap;
}

function updateMap(){
	let checkedButton = $('input[name=maps]:checked').val();
	if(checkedButton == "E-1"){
		mapString = checkedButton;
		mapNumber = 1;
		$('#guideE1').css('display', 'block');
		$('#guideE2').css('display', 'none');
	}
	else if(checkedButton == "E-2"){
		mapString = checkedButton;
		mapNumber = 2;
		$('#guideE1').css('display', 'none');
		$('#guideE2').css('display', 'block');
	}
	$('#enemyComps').empty();
}

function generateTitle(enemyID){
	let name = SHIPDATA[enemyID].name;
	let hp = SHIPDATA[enemyID].HP;
	let armor = SHIPDATA[enemyID].AR;
	let statoverrides = MAPDATA[99].overrideStats;
	for(let id in statoverrides){
		if(enemyID == id){
			if(statoverrides[id].AR) armor = statoverrides[id].AR;
			if(statoverrides[id].HP) hp = statoverrides[id].HP;
		}
	}
	return "ID " + enemyID + ": " + name + ", " + hp + " HP, " + armor + " Armor";
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
			return "C. Form 1";
		case 112:
			return "C. Form 2";
		case 113:
			return "C. Form 3";
		case 114:
			return "C. Form 4";
		default:
			return "Unknown";
	}
}

function loadComps(diff){
	let nodes = ENEMYCOMPS['Fubuki\'s Challenge'][mapString];
	let mapdata = MAPDATA[99].maps[mapNumber];
	$('#enemyComps').empty();
	$('<h2>' + mapString + ' ' + diff + ' Compositions</h2>').appendTo('#enemyComps');
	for(let node in nodes){
		// create initial table for the node
		let id = mapString + node;
		// determine node type
		let type = (mapdata.nodes[node].raid) ? "Air Raid Node" : ((mapdata.nodes[node].night2) ? "Night Battle Node" : ((mapdata.nodes[node].aironly) ? "Aerial Battle Node" : ((mapdata.nodes[node].boss) ? "Boss Battle Node" : "Normal Battle Node")));
		let nodeLetter = false, counter = 0;
		// create table header
		$('<table id="' + id + '"><tr><th>' + '</th><th>Formation</th><th>' + type + '</th><th>AD / AP / AS / AS+</th></tr>').appendTo('#enemyComps');
		for(let comps in nodes[node]){
			if(comps.includes(diff)) {
				let temp = comps;
				temp = temp.replace(/\s+/g, '');
				$('<tr id="' + id + "_" + temp + '">').appendTo('#' + id + ' > tbody');
				// create node letter column, include rowspan element (to be overwritten later)
				if(!nodeLetter){
					$('<td id="nodeLetter-' + node + '" rowspan=1>' + node + '</td>').appendTo('#' + id + "_" + temp);
					nodeLetter = true;
				}
				$('<td class="formation">' + formationConvert(nodes[node][comps].f) + '</td>').appendTo('#' + id + "_" + temp);
				$('<td class="comp-' + temp + '">').appendTo('#' + id + "_" + temp);
				let airpower = 0;
				for(let enemy in nodes[node][comps].c){
					if(enemyID != nodes[node][comps].c[enemy]){
						enemyID = nodes[node][comps].c[enemy];
						imgString = imgPath + SHIPDATA[enemyID].image;
					}
					airpower += muhAirpower(SHIPDATA[enemyID]);
					$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
				}
				if(nodes[node][comps].ce){
					$('<br />').appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
					for(let enemy in nodes[node][comps].ce){
						if(enemyID != nodes[node][comps].ce[enemy]){
							enemyID = nodes[node][comps].ce[enemy];
							imgString = imgPath + SHIPDATA[enemyID].image;
						}
						airpower += muhAirpower(SHIPDATA[enemyID]);
						$('<img src="' + imgString + '" />').attr('title', generateTitle(enemyID)).appendTo('#' + id + "_" + temp + ' > .comp-' + temp);
					}
					counter++;
				}
				Math.floor(airpower);
				if(airpower > 0) $('#' + id + "_" + temp).append("<td>" + Math.floor(airpower * 0.33333) + " / " + Math.floor(airpower * 0.66666) + " / " + Math.floor(airpower * 1.5) + " / " + Math.floor(airpower * 3) + "</td>");
				counter++;
			}
		}
		$('#nodeLetter-' + node).attr('rowspan', counter);
		$('<br />').appendTo('#enemyComps');
	}
}