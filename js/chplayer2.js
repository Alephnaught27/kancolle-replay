function InitUI() {
	if (!CHDATA.event) return;
	WORLD = CHDATA.event.world;
	MAPNUM = CHDATA.event.mapnum;
	
	for (let mechanic in MECHANICDATES) { //refresh mechanics for updates
		CHDATA.config.mechanics[mechanic] = (MECHANICDATES[mechanic] <= CHDATA.config.mechanicsdate);
	}
	let dataDate = (CHDATA.config.mechanicsdate < MAPDATA[WORLD].date)? MAPDATA[WORLD].date : CHDATA.config.mechanicsdate;
	setShipDataDate(dataDate);
	setEquipDataDate(dataDate);
	
	if (CHHPREGENTIMER.running) {
		CHHPREGENTIMER.stop();
	}
	if (MAPDATA[WORLD].maps[CHDATA.event.unlocked] && MAPDATA[WORLD].maps[CHDATA.event.unlocked].hpRegenTick) {
		var elapsed = (Date.now() - CHDATA.event.lasttime)/1000 + (CHDATA.event.regenCounter || 0);
		CHHPREGENTIMER.start(CHDATA.event.unlocked,elapsed);
	}
	
	for (var mapnum in CHDATA.event.maps) {
		if (!CHDATA.event.maps[mapnum].part) continue;
		mapChangePart(WORLD,mapnum,CHDATA.event.maps[mapnum].part);
	}
	
	chCreateFleetTableLBAS('#lbasspace',5,'Land Base');
	var n = MAPDATA[WORLD].lbasSlotCount || 18;
	for(let i = 1; i <= (MAPDATA[WORLD].lbasPlayableCap || 3); ++i){
		SHIPDATA[5000 + i] = {
			name: 'Base ' + i,
			image: 'LBAS'+i+'.png',
			type: 'LandBase',
			SLOTS: [n,n,n,n],
			fuel: 0,
			ammo: 0,
		};
	}

	$('#equipfilters').html('');
	$('#equipselecttable').html('');
	chDialogItemInit();
	DIALOGSORT = null;
	
	if (MAPDATA[WORLD].allowFleets.indexOf(7) != -1 && CHDATA.fleets[1].length < 7) CHDATA.fleets[1].push(null);
	for (var fleetnum in CHDATA.fleets) chFillTable(CHDATA.fleets[fleetnum],fleetnum);
	if (CHDATA.fleets.combined) chClickedCombine(CHDATA.fleets.combined, true);
	else chClickedCombine(0,true);
	chToggleShowSF(CHDATA.fleets.sf);
	
	chLoadSortieInfo(CHDATA.event.mapnum);
	chUIUpdateResources();
	chUIUpdateItems();
	
	var found = false;
	for (var i=1; i<=3; i++) {
		if (MAPDATA[WORLD].allowFleets.indexOf(i) != -1) {
			$('#btncombine'+i).show();
			found = true;
		} else {
			$('#btncombine'+i).hide();
		}
	}
	if (MAPDATA[WORLD].allowFleets.indexOf(7) != -1) {
		$('#btncombineSF').show();
		found = true;
	} else {
		$('#btncombineSF').hide();
	}
	if (!found) $('.combinespacec').hide();
	else $('.combinespacec').show();
	
	if (CHDATA.fleets.supportN) {
		$('#btnsupportN').css('opacity',1);
	} else {
		$('#btnsupportN').css('opacity',.5);
	}
	if (CHDATA.fleets.supportB) {
		$('#btnsupportB').css('opacity',1);
	} else {
		$('#btnsupportB').css('opacity',.5);
	}
	
	
	for (var i=1; i<=(MAPDATA[WORLD].lbasPlayableCap || 3); i++) {
		if (CHDATA.fleets['lbas'+i]) $('#btnLBAS'+i).css('opacity',1);
		else $('#btnLBAS'+i).css('opacity',.5);
	}
	
	if (MAPDATA[WORLD].allowLBAS) {
		$('#tabLBAS').parent().show();
		for (let i=1; i<=(MAPDATA[WORLD].lbasPlayableCap || 3); i++) {
			let lbas = CHDATA.ships['z'+i];
			if (!lbas) continue;
			for (let j=0; j<lbas.items.length; j++) {
				if (lbas.items[j] <= 0) continue;
				let item = CHDATA.gears['x'+lbas.items[j]];
				SHIPDATA[5000+i].SLOTS[j] = chGetLBASNumPlanes(item);
			}
		}
	} else {
		$('#tabLBAS').parent().hide();
	}
	
	if (MAPDATA[WORLD].disableSupport) {
		$('#tabsupportN').parent().hide();
		$('#tabsupportB').parent().hide();
		$('#btnsupportN').hide();
		$('#btnsupportB').hide();
	} else {
		$('#tabsupportN').parent().show();
		$('#tabsupportB').parent().show();
		$('#btnsupportN').show();
		$('#btnsupportB').show();
	}
	if (MAPDATA[WORLD].friendFleet) {
		let ffAvailable = false;
		for(let node in MAPDATA[WORLD].maps[MAPNUM].nodes){
			if(typeof(MAPDATA[WORLD].maps[MAPNUM].nodes[node].friendFleet) !== 'undefined'){
				ffAvailable = true; break;
			}
		}
		if(ffAvailable){ 
			$('#btnFF').show();
			if (CHDATA.fleets.ff == null) {
				chSetFriendFleet(1);
			} else {
				chSetFriendFleet(CHDATA.fleets.ff);
			}
		}
		else{ $('#btnFF').hide(); }
	} else {
		$('#btnFF').hide();
	}
	
	chInitPreset();
	
	chClickedTab('#tabmain');
	$('#mainspace').show();
	
	if (MAPDATA[WORLD].worldMap) {
		initWorldMap(MAPDATA[WORLD].worldMap);
		showWorldMap();
	} else {
		hideWorldMap();
	}
	
	let diffNames = { 5: 'HISTORICAL', 3: 'HARD', 2: 'NORMAL', 1: 'EASY', 4: 'CASUAL' };
	if (MAPDATA[WORLD].diffNames) {
		for (let diff in MAPDATA[WORLD].diffNames) diffNames[diff] = MAPDATA[WORLD].diffNames[diff];
	}
	$('#srtDiffHist').val(diffNames[5]);
	$('#srtDiffHard').val(diffNames[3]);
	$('#srtDiffMed').val(diffNames[2]);
	$('#srtDiffEasy').val(diffNames[1]);
	$('#srtDiffCasual').val(diffNames[4]);
}

var WORLD, MAPNUM;
$('#battlespace').hide();
$('#mainspace').hide();
$(document).ready(function() {
	if (true && localStorage.ch_file) { 
		chLoadFile(localStorage.ch_file);
	} else chOpenMenu();
});

function chLoadFile(file) {
	localStorage.ch_file = FILE = file;
	var basic = JSON.parse(localStorage['ch_basic'+FILE]);
	CHDATA = JSON.parse(localStorage['ch_data'+FILE]);
	for (var key in basic) CHDATA[key] = basic[key];
	DIALOGSORT = -1;
	InitUI();
}

// global which contains map sprites
var STAGEMAP = new PIXI.Container();
// global which contains battle sprites
var STAGEBATTLE = stage;
stage = STAGEMAP;

var STAGEMANAGER = new PIXI.interaction.InteractionManager(renderer);
function screenClickBlank() { };
var SCREENCLICKFUNCTION = screenClickBlank;

var bgmap = PIXI.Sprite.fromImage('assets/82_res.images.ImgBackgroundDay.jpg');
stage.addChild(bgmap);
const MAPOFFX = 17, MAPOFFY = 22;

var mapShutterTop = PIXI.Sprite.fromImage('assets/512_res.common.ImgShutterTop.png');
var mapShutterBottom = PIXI.Sprite.fromImage('assets/510_res.common.ImgShutterBottom.png');
stage.addChild(mapShutterTop); stage.addChild(mapShutterBottom);

// pannable map object container
var smPannable = new PIXI.Container();
stage.addChild(smPannable);
// player size constants
var PLAYERWIDTH = 800, PLAYERHEIGHT = 480;
var PANBORDERL = 150, PANBORDERR = 650, PANBORDERT = 70, PANBORDERB = 360;
var MAPWIDTH = 768, MAPHEIGHT = 375;
var BOTTOMBARPOS = 387, COMPASSX = 185, COMPASSY = 295;
var ISMAPFREE = false;

// enable free panning - can be enabled at any time through ISMAPFREE
updates.push([function() {
	let panStep = 10, mouseX = STAGEMANAGER.mouse.global.x, mouseY = STAGEMANAGER.mouse.global.y;
	if(ISMAPFREE && MAPDATA[WORLD].maps[MAPNUM].canPan){
		if(mouseX >= 0 && mouseX <= PLAYERWIDTH && mouseY >= 0 && mouseY <= PLAYERHEIGHT){
			// left
			if(mouseX < PANBORDERL && smPannable.x < 0) {
				panMap(panStep * Math.pow(-1 * (PANBORDERL - mouseX) / PANBORDERL, 2), 0);
			}
			// right
			else if(mouseX > PANBORDERR && smPannable.x > (map.width - MAPWIDTH) * -1) {
				panMap((panStep * -1) * Math.pow(-1 * (PANBORDERR - mouseX) / (PLAYERWIDTH - PANBORDERR), 2), 0);
			}
			// up
			if(mouseY < PANBORDERT && smPannable.y < 0) {
				panMap(0, panStep * Math.pow(-1 * (PANBORDERT - mouseY) / PANBORDERT, 2));
			}
			// down
			else if(mouseY > PANBORDERB && smPannable.y > (map.height - MAPHEIGHT) * -1) {
				panMap(0, (panStep * -1) * Math.pow(-1 * (PANBORDERB - mouseY) / (PLAYERHEIGHT - PANBORDERB), 2));
			}
		}
	}
	return false;
},[]]);

var map = new PIXI.Container();
smPannable.addChild(map);
var mapnodes = {};

var mapshipS = PIXI.Sprite.fromImage('assets/maps/ship.png');
mapshipS.defpivotx = 27; mapshipS.defpivoty = 27;
var mapshipCTF = PIXI.Sprite.fromImage('assets/maps/shipC1.png');
mapshipCTF.defpivotx = 29; mapshipCTF.defpivoty = 21;
var mapshipSTF = PIXI.Sprite.fromImage('assets/maps/shipC2.png');
mapshipSTF.defpivotx = 30; mapshipSTF.defpivoty = 28;
var mapshipTTF = PIXI.Sprite.fromImage('assets/maps/shipC3.png');
mapshipTTF.defpivotx = 26; mapshipTTF.defpivoty = 21;
var mapship = mapshipS;
smPannable.addChild(mapship);

var mapDim = new PIXI.Graphics();
mapDim.beginFill(0x000000);
mapDim.drawRect(0,0,PLAYERWIDTH,PLAYERHEIGHT);
stage.addChild(mapDim);

var mapbar = new PIXI.Container();
var mapbarFill = null;
var mapbarSprite = null;
stage.addChild(mapbar);

var bottombar = PIXI.Sprite.fromImage('assets/maps/bottom.png');
stage.addChild(bottombar);
var bottomMessage = new PIXI.Text("", {font: '18px "Archibald Bold"', fill: 0xFFFFFF});
bottomMessage.position.set(275,400);
stage.addChild(bottomMessage);

var bcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
stage.addChild(bcompass);
var bneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
stage.addChild(bneedle);
updates.push([function(needle) {
	needle.rotation = Math.PI/4 + Math.random()*.06 - .03;
	return false;
},[bneedle]]);



var mcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
mcompass.pivot.set(150,150);
mcompass.position.set(400,240);
mcompass.alpha = 0;
mcompass.scale.set(1.5);
var mneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
mneedle.pivot.set(14,101);
mneedle.position.set(400,240);
mneedle.alpha = 0;
mneedle.scale.set(1.5);
updates.push([function(needle) {
	needle.rotation = Math.random()*.06 - .03;
	return false;
},[mneedle]]);

var formboxes = [], formbuttons = [], formdots = [];
for (var i=0; i<6; i++) {
	formboxes.push(PIXI.Sprite.fromImage('assets/maps/formbox.png'));
	formbuttons.push([PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'a.png'),PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'b.png')]);
}
formboxes[0].position.set(387,61);
formboxes[1].position.set(517,61);
formboxes[2].position.set(649,61);
formboxes[3].position.set(455,220); formboxes[3].xOrig = 455;
formboxes[4].position.set(586,220); formboxes[4].xOrig = 586;
formboxes[5].position.set(649,220);
for (var i=0; i<formbuttons.length; i++) {
	formbuttons[i][0].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][1].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][0].formnum = i+1;
	formbuttons[i][0].interactive = true;
	formbuttons[i][0].buttonMode = true;
	formbuttons[i][0].mouseover = function() { this.alpha = 0; }
	formbuttons[i][0].mouseout = function() { this.alpha = 1; }
	formbuttons[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}
var FORMDOTPOS = [
	[445,80], [445,94], [445,108], [445,122], [445,136], [445,150],
	[568,100], [568,114], [568,128], [582,100], [582,114], [582,128],
	[707,94], [707,108], [707,122], [707,136], [687,114], [727,114],
	[491,296], [500,287], [509,278], [518,269], [527,260], [536,251],
	[611,274], [624,274], [638,274], [651,274], [664,274], [677,274],
	[710,253], [710,272], [710,286], [710,300], [721,260], [699,260],
];

for (var i=0; i<FORMDOTPOS.length; i++) {
	formdots.push(PIXI.Sprite.fromImage('assets/maps/formdot.png'));
	formdots[i].pivot.set(7,7);
	formdots[i].scale.set(.6);
	formdots[i].position.set(FORMDOTPOS[i][0],FORMDOTPOS[i][1]);
}

var formboxesc = [], formbuttonsc = [];
for (var i=1; i<=4; i++) {
	formboxesc.push(PIXI.Sprite.fromImage('assets/maps/formboxc'+i+'.png'));
	formbuttonsc.push([PIXI.Sprite.fromImage('assets/maps/formc'+i+'a.png'),PIXI.Sprite.fromImage('assets/maps/formc'+i+'b.png')]);
}
formboxesc[0].position.set(417,64);
formboxesc[1].position.set(582,64);
formboxesc[2].position.set(417,201);
formboxesc[3].position.set(582,201);
for (var i=0; i<4; i++) {
	formbuttonsc[i][0].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][1].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][0].formnum = i+11;
	formbuttonsc[i][0].interactive = true;
	formbuttonsc[i][0].buttonMode = true;
	formbuttonsc[i][0].mouseover = function() { this.alpha = 0; }
	formbuttonsc[i][0].mouseout = function() { this.alpha = 1; }
	formbuttonsc[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}

var CONTINUESELECT = -1;
var mapcontinuebutton = [PIXI.Sprite.fromImage('assets/maps/sortieyes.png'),PIXI.Sprite.fromImage('assets/maps/sortieyes2.png')];
var mapretreatbutton = [PIXI.Sprite.fromImage('assets/maps/sortieno.png'),PIXI.Sprite.fromImage('assets/maps/sortieno2.png')];
mapcontinuebutton[0].position.set(201,162); 
mapcontinuebutton[0].interactive = true; mapcontinuebutton[0].buttonMode = true;
mapcontinuebutton[0].mouseover = function() {
	this.alpha = 0;
	mapcontinuebutton[1].alpha = 1;
}
mapcontinuebutton[0].mouseout = function() {
	this.alpha = 1;
	mapcontinuebutton[1].alpha = 0;
}
mapcontinuebutton[0].click = function() {
	CONTINUESELECT = 1;
	SM.play('click');
	this.callback();
}
mapcontinuebutton[1].position.set(201,162); mapcontinuebutton[1].alpha = 0;
mapretreatbutton[0].position.set(412,161);
mapretreatbutton[0].interactive = true; mapretreatbutton[0].buttonMode = true;
mapretreatbutton[0].mouseover = function() {
	this.alpha = 0;
	mapretreatbutton[1].alpha = 1;
}
mapretreatbutton[0].mouseout = function() {
	this.alpha = 1;
	mapretreatbutton[1].alpha = 0;
}
mapretreatbutton[0].click = function() {
	CONTINUESELECT = 0;
	SM.play('click');
	this.callback();
}
mapretreatbutton[1].position.set(412,161); mapretreatbutton[1].alpha = 0;

var NBSELECT = -1;
mapNBnobutton = [PIXI.Sprite.fromImage('assets/maps/nbno.png'),PIXI.Sprite.fromImage('assets/maps/nbno2.png')];
mapNByesbutton = [PIXI.Sprite.fromImage('assets/maps/nbyes.png'),PIXI.Sprite.fromImage('assets/maps/nbyes2.png')];
mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
mapNBnobutton[1].alpha = 0; mapNByesbutton[1].alpha = 0;
mapNBnobutton[0].buttonMode = true; mapNByesbutton[0].buttonMode = true;
mapNBnobutton[0].interactive = true; mapNByesbutton[0].interactive = true;
mapNBnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapNBnobutton[1].alpha = 1;
}
mapNByesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapNByesbutton[1].alpha = 1;
}
mapNBnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapNBnobutton[1].alpha = 0;
}
mapNByesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapNByesbutton[1].alpha = 0;
}
mapNBnobutton[0].click = function() {
	NBSELECT = 0;
	SM.play('click');
	this.callback();
}
mapNByesbutton[0].click = function() {
	NBSELECT = 1;
	SM.play('click');
	this.callback();
}

var FCFSELECT = -1;
mapFCFnobutton = [PIXI.Sprite.fromImage('assets/maps/fcfno1.png'),PIXI.Sprite.fromImage('assets/maps/fcfno2.png')];
mapFCFyesbutton = [PIXI.Sprite.fromImage('assets/maps/fcfyes1.png'),PIXI.Sprite.fromImage('assets/maps/fcfyes2.png')];
mapFCFnobutton[0].position.set(419,301); mapFCFnobutton[1].position.set(419,301);
mapFCFyesbutton[0].position.set(201,301); mapFCFyesbutton[1].position.set(201,301);
mapFCFnobutton[1].alpha = 0; mapFCFyesbutton[1].alpha = 0;
mapFCFnobutton[0].buttonMode = true; mapFCFyesbutton[0].buttonMode = true;
mapFCFnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFnobutton[1].alpha = 1;
}
mapFCFyesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFyesbutton[1].alpha = 1;
}
mapFCFnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFnobutton[1].alpha = 0;
}
mapFCFyesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFyesbutton[1].alpha = 0;
}
mapFCFnobutton[0].click = function() {
	FCFSELECT = 0;
	SM.play('click');
	this.callback();
}
mapFCFyesbutton[0].click = function() {
	FCFSELECT = 1;
	SM.play('click');
	this.callback();
}

loader.add('lbcrosshairs1','assets/maps/lbcrosshairs1.png').add('lbcrosshairs2','assets/maps/lbcrosshairs2.png').add('lbcrosshairs3','assets/maps/lbcrosshairs3.png')
.add('lb2crosshairs1', 'assets/maps/lb2crosshairs1.png').add('lb2crosshairs2','assets/maps/lb2crosshairs2.png').add('lb2crosshairs3','assets/maps/lb2crosshairs3.png');

function chResetMapSpritePos() {
	mapShutterTop.position.set(0,0); mapShutterTop.alpha = 0;
	mapShutterBottom.position.set(0,210); mapShutterBottom.alpha = 0;
	map.position.set(MAPOFFX,MAPOFFY);
	mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
	bottombar.position.set(0,387);
	bcompass.pivot.set(150,150); bcompass.rotation = Math.PI/4;
	bcompass.position.set(35,445);
	map.alpha = mapship.alpha = bneedle.alpha = bottombar.alpha = mapbar.alpha = 1;
	if(bcompass.x+150 > mapship.x && bcompass.y-150 < mapship.x) bcompass.alpha = 0.6;
	else bcompass.alpha = 1;
	for (var letter in mapnodes) mapnodes[letter].alpha = 1;
	bneedle.pivot.set(14,101); bneedle.rotation = Math.PI/4;
	bneedle.position.set(35,445);
	mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
}

function addMapNode(letter,type) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if (node.aironly && WORLD <= 27 && WORLD > 20) return; //already drawn on Summer 2014 map
	var hidden = node.hidden && (!CHDATA.event.maps[MAPNUM].routes || CHDATA.event.maps[MAPNUM].routes.indexOf(node.hidden) == -1);
	if (hidden) return;
	var nodeG = null;
	if (node.aironly) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAir.png');
			nodeG.pivot.set(35,22);
		}
	} else if (node.raid) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeRaid.png');
			nodeG.pivot.set(23,19);
			// nodeG.pivot.set(22,18);
		}
	} else if (node.strike) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeStrike.png');
			nodeG.pivot.set(28,19);
		}
	} else if (node.night2 && type != 3) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeN.png');
			nodeG.pivot.set(10,10);
		}
	} else if ((node.nightToDay2 || node.nightToDay2CF) && !node.boss) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeND.png');
			nodeG.pivot.set(10,10);
		}
	} else if (node.ambush) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAmbush.png');
			nodeG.pivot.set(10,27);
		}
	} else if (node.ambushN) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAmbushN.png');
			nodeG.pivot.set(10,27);
		}
	} else if (node.minefield) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeMine.png');
			nodeG.pivot.set(16,14);
		}
	} else if (node.normal) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeR.png');
			nodeG.pivot.set(10,10);
		}
	} else if (!node.boss) {
		if (node.dropoff) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAnchor.png');
			nodeG.pivot.set(25,25);
		} else {
			var img;
			switch (type||node.type) {
				case 1: img = 'assets/maps/nodeR.png'; break;
				case 2: img = 'assets/maps/nodeG.png'; break;
				case 3: img = 'assets/maps/nodeB.png'; break;
				case 4: img = 'assets/maps/nodeP.png'; break;
				case 5: img = 'assets/maps/nodeS.png'; break;
			}
			nodeG = PIXI.Sprite.fromImage(img);
			nodeG.pivot.set(10,10);
		}
	} else {
		nodeG = PIXI.Sprite.fromImage('assets/maps/nodeBoss.png');
		nodeG.pivot.set(19,24);
	}
	
	if(node.glitch){
		updates.push([function(glitch) {
			let line = Math.random() * 21;
			let pad = Math.random() * 6;
			let mask1 = new PIXI.Graphics();
			mask1.beginFill(0x000000);
			mask1.drawRect(node.x+MAPOFFX-10, node.y+MAPOFFY-10, 21, line-pad);
			mask1.drawRect(node.x+MAPOFFX-10, node.y+MAPOFFY-10+line, 21, 21-line);
			glitch.mask = mask1;
		}, [nodeG]]);
	}
	
	nodeG.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	if (mapnodes[letter]) smPannable.removeChild(mapnodes[letter]);
	mapnodes[letter] = nodeG;
	smPannable.addChildAt(nodeG,smPannable.getChildIndex(mapship));
}




function mapMoveShip(ship,x,y,path) {
	var dir = (ship.x > x)? -1: 1;
	if (!(ship.scale.x + dir)) {
		var timer = 20;
		updates.push([function() {
			ship.scale.x += .1*dir;
			if (--timer <= 0) {
				ship.scale.x = dir;
				return true;
			}
			return false;
		},[]]);
	}
	let speedX, speedY, t, tStep;
	let paddingX = 300; // [valid values: 0-399] pan the map left/right if the mapship gets within this distance of the left/right player border
	let paddingY = 150; // [valid values: 0-192] pan the map up/down if the mapship gets within this distance of the top/bottom player border
	addTimeout(function() {
		var timer = 120;
		if(typeof(path) !== 'undefined'){
			let pointInitial = (ship.x - path.centerX-MAPOFFX) / path.axisX;
			if(pointInitial < -1) pointInitial = -1; if(pointInitial > 1) pointInitial = 1;
			let tI = Math.acos(pointInitial); if(path.reroll.tI) tI = Math.PI * 2 - tI;
			let pointFinal = (x - path.centerX - MAPOFFX) / path.axisX;
			if(pointFinal < -1) pointFinal = -1; if(pointFinal > 1) pointFinal = 1;
			let tF = Math.acos(pointFinal); if(path.reroll.tF) tF = Math.PI * 2 - tF;
			t = tI, tStep = (tF - tI) / 120;
			/* TEST: ellipses
			let gfx = new PIXI.Graphics();
			gfx.beginFill(0x000000,0.3);
			gfx.drawEllipse(path.centerX + MAPOFFX, path.centerY + MAPOFFY, path.axisX, path.axisY);
			smPannable.addChild(gfx);*/
		}
		else{
			speedX = (x - ship.x)/120;
			speedY = (y - ship.y)/120;
		}
		
		updates.push([function() {
			if(typeof(path) !== 'undefined'){
				speedX = path.axisX * Math.cos(t) + path.centerX + MAPOFFX - ship.x;
				speedY = path.axisY * Math.sin(t) + path.centerY + MAPOFFY - ship.y;
				t += tStep;
			}
			ship.x += speedX;
			ship.y += speedY;
			
			// check if the ship is headed in the right direction for panning to occur
			// check if the ship is within the padding area / area where panning should occur
			// check if the ship is out of the map boundry
			// check if the map can be panned any further
			if(MAPDATA[WORLD].maps[MAPNUM].canPan){
				if(speedX > 0 && ship.x >= PLAYERWIDTH - paddingX - smPannable.x && ship.x <= (PLAYERWIDTH - smPannable.x) && smPannable.x > (map.width - MAPWIDTH) * -1) {
					panMap(speedX * -1, 0);
				}
				else if(speedX < 0 && ship.x <= paddingX - smPannable.x && smPannable.x < 0) {
					panMap(speedX * -1, 0);
				}
				if(speedY > 0 && ship.y >= BOTTOMBARPOS - paddingY - smPannable.y && ship.y <= (PLAYERHEIGHT - smPannable.y) && smPannable.y > (map.height - MAPHEIGHT) * -1) {
					panMap(0, speedY * -1);
				}
				else if(speedY < 0 && ship.y <= (paddingY - smPannable.y) && ship.y >= 0 && smPannable.y < 0) {
					panMap(0, speedY * -1);
				}
				
				// make the compass transparent if the mapship moves ontop of it
				if(bcompass.containsPoint(new PIXI.Point(ship.x, ship.y))){
					bcompass.alpha = 0.6;
				}
				else{
					bcompass.alpha = 1;
				}
			}
			
			if (--timer <= 0) {
				return true;
			}
			return false;
		},[]]);
	}, 400);
	
	addTimeout(function() { ecomplete = true; }, 2400);
}

var FORMSELECTED;
function mapBattleNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter);
	let node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if ((node.aironly || node.raid || node.strike || node.night2 || node.nightToDay2 || node.nightToDay2CF || node.ambush || node.ambushN || node.minefield || node.normal) && (WORLD > 27 || WORLD <= 20)) addMapNode(letter);
	if(node.message) bottomMessage.text = node.message;

	var radarstop = false, radartimer = 270;
	updates.push([function() {
		if (radartimer%90==0||radartimer%90==60) createRadar(ship.x,ship.y);
		if (radartimer%90==0&&radartimer>90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	let ePrevData = {};
	if(MAPDATA[WORLD].maps[MAPNUM].nodes[letter].enemyPreview) ePrevData = MAPDATA[WORLD].maps[MAPNUM].nodes[letter].enemyPreview;
	else if (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].subonly) ePrevData.sprite = 'submarine.png';
	if (typeof(ePrevData.sprite) !== 'undefined') {
		let ePrevSprite = PIXI.Sprite.fromImage('assets/maps/sprites/' + ePrevData.sprite);
		ePrevSprite.position.set(mapship.x+(ePrevData.offsetX || 10), mapship.y+(ePrevData.offsetY || -30));
		ePrevSprite.alpha = 0; ePrevSprite.scale.set(.75);
		smPannable.addChildAt(ePrevSprite,smPannable.getChildIndex(mapship)+1);
		updates.push([function() {
			if (radarstop) {
				ePrevSprite.alpha -= .05;
				if (ePrevSprite.alpha <= 0) {
					smPannable.removeChild(ePrevSprite);
					return true;
				}
			} else {
				if (ePrevSprite.alpha < 1) {
					ePrevSprite.alpha += .015;
					if (ePrevSprite.alpha > 1) ePrevSprite.alpha = 1;
					ePrevSprite.y-=.5;
				}
			}
			return false;
		},[]]);
	}
	
	addTimeout(function() {
		mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
		updates.push([function() {
			mapShutterTop.alpha += .1;
			mapShutterBottom.alpha += .1;
			mapDim.alpha += .05;
			if (mapShutterTop.alpha >= 1) { mapShutterTop.alpha=mapShutterBottom.alpha=1; mapDim.alpha = .5;}
			return (mapShutterTop.alpha >= 1);
		},[]]);
	}, 3000);
	
	var formcombined = (CHDATA.fleets.combined > 0 && !node.night && !node.night2);
	var afterSelect = function() {
		if (formcombined) addTimeout(function() { chHideFormSelectC(); }, 1);
		else addTimeout(function() { chHideFormSelect(); }, 1);
		radarstop = true;
		updates.push([function() {
			mapDim.alpha -= .05;
			return (mapDim.alpha <= 0);
		},[]]);
		addTimeout(function() {
			updates.push([function() {
				map.alpha -= .025;
				bottombar.alpha -= .025;
				bcompass.alpha -= .025;
				bneedle.alpha -= .025;
				mapship.alpha -= .025;
				mapbar.alpha -= .025;
				bcompass.x -= 4;
				bneedle.x -= 4;
				bcompass.rotation -= .05;
				bottombar.y += 2;
				for (var lettr in mapnodes) mapnodes[lettr].alpha -= .025;
				return (map.alpha <= 0);
			},[]]);
			SM.fadeBGM();
		}, 500);
		if (node.ambush || node.ambushN) {
			addTimeout(function() { SM.play('ambush'); }, 2000);
			addTimeout(function() { ecomplete = true; }, 4000);
		} else {
			addTimeout(function() { ecomplete = true; }, 2000);
		}	
	}
	
	let formDefault = (!formcombined)? 1 : (CHSHIPCOUNT.escort.total >= 4)? 14 : 12;
	FORMSELECTED = 0;
	if (node.ambush || node.ambushN) addTimeout(function() { FORMSELECTED = formDefault; afterSelect(); }, 3200);
	else if (formcombined) addTimeout(function() { chShowFormSelectC(afterSelect); }, 3200);
	else if (CHSHIPCOUNT.total >= 4) addTimeout(function() { chShowFormSelect(afterSelect); }, 3200);
	else addTimeout(function() { bottomMessage.text = ""; FORMSELECTED = 1; afterSelect(); }, 3200);
	
}

function mapResourceNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	// TODO - display resource gain
	var message = "Acquired resources!\n";
	if(node.message) message += node.message;
	bottomMessage.text = message;
	// var num = node.min + Math.floor(Math.random()*(node.max-node.min+5)/5)*5;
	var num;
	if (node.resource != 0) {
		let amount = node.amount || [0];
		num = amount[Math.floor(Math.random()*amount.length)];
	} else {
		var ships = chGetShips(true);
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		num = transportCalc(ships,'A') + ' - ' + transportCalc(ships,'S');
	}
	var res = createResource(node.resource,num);
	res.alpha = 0; res.position.set(ship.x-18,ship.y-10); res.counter = 40;
	smPannable.addChild(res);
	updates.push([function() {
		res.y -= 1;
		res.counter--;
		if (res.counter > 0) res.alpha = Math.min(res.alpha+.1,1);
		else res.alpha -= .05;
		if (res.alpha <= 0) {
			smPannable.removeChild(res);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { bottomMessage.text = ""; mapPhase(); ecomplete = true; }, 3600);
}

function mapIllusionNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter,1);
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if(node.message) bottomMessage.text = node.message;
	else bottomMessage.text = "There is nothing here...";
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y);
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 1300);
	addTimeout(function() {
		recycle(mapnodes[letter]);
		addMapNode(letter,3);
	}, 1800);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 2300);
}

function mapStormNode(ship,letter) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var numradars = 0, lostpercent, lostshow;
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		for (var j=0; j<FLEETS1[0].ships[i].equips.length; j++) {
			var equip = FLEETS1[0].ships[i].equips[j];
			if (!equip) continue;
			if (equip.type == RADARS || equip.type == RADARL || equip.type == RADARXL) { numradars++; break; }
		}
	}
	if(node.lostSpecial) lostpercent = (numradars >= node.lostSpecial.length ? node.lostSpecial[node.lostSpecial.length-1] : node.lostSpecial[numradars]);
	else{
		switch (numradars) {
			case 0: lostpercent = .4; break;
			case 1: lostpercent = .3; break;
			case 2: lostpercent = .24; break;
			default: lostpercent = .2; break;
		}
	}
	if (node.lostMax && node.lostMax < lostpercent) lostpercent = node.lostMax;
	var resname = (node.resource == 1)? 'fuelleft' : 'ammoleft';
	lostshow = Math.floor(FLEETS1[0].ships[0][resname]*lostpercent*10);
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		FLEETS1[0].ships[i][resname] *= (1-lostpercent);
	}

	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	var storm = getFromPool('storm','assets/maps/storm.png');
	storm.pivot.set(30,30); storm.rotation = 0;
	var stormwrap = new PIXI.Container();
	stormwrap.addChild(storm);
	stormwrap.position.set(ship.x,ship.y); stormwrap.scale.y = .5;
	smPannable.addChildAt(stormwrap,smPannable.getChildIndex(mapship));// smPannable.swapChildren(stormwrap,mapship);
	var stormtimer = 120, radius = 0;
	SM.play('storm');
	updates.push([function() {
		storm.rotation += .1;
		mapship.pivot.set(radius*Math.cos(storm.rotation)*mapship.scale.x+mapship.defpivotx,radius*Math.sin(storm.rotation)+mapship.defpivoty);
		stormtimer--;
		if (stormtimer >= 115) radius += 4;
		else if (stormtimer <= 100) radius -= .2;
		if (stormtimer<=0) {
			mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
			smPannable.removeChild(stormwrap); recycle(storm);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() {
		var res = createResource(node.resource,lostshow);
		res.position.set(ship.x-9,ship.y-9); res.counter = 60; res.vspeed = -3; smPannable.addChild(res);
		updates.push([function() {
			res.x -= 1;
			res.y += res.vspeed;
			res.vspeed += .1;
			res.counter--;
			if (res.counter < 20) res.alpha -= .05;
			if (res.counter <= 0) {
				smPannable.removeChild(res);
				return true;
			}
			return false;
		},[]]);
	}, 1500);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 3600);
	
}

function createResource(type,num) {
	var res = new PIXI.Container();
	var icon;
	if (type == null) type = 1;
	switch(type) {
		case 1: icon = PIXI.Sprite.fromImage('assets/stats/fuel.png'); break;
		case 2: icon = PIXI.Sprite.fromImage('assets/stats/ammo.png'); break;
		case 3: icon = PIXI.Sprite.fromImage('assets/stats/steel.png'); break;
		case 4: icon = PIXI.Sprite.fromImage('assets/stats/baux.png'); break;
		case 5: icon = PIXI.Sprite.fromImage('assets/stats/bucket.png'); break;
		case 6: icon = PIXI.Sprite.fromImage('assets/stats/devmat.png'); break;
		case 7: icon = PIXI.Sprite.fromImage('assets/stats/ibuild.png'); break;
		case 8: icon = PIXI.Sprite.fromImage('assets/stats/box1.png'); break;
		case 9: icon = PIXI.Sprite.fromImage('assets/stats/box2.png'); break;
		case 10: icon = PIXI.Sprite.fromImage('assets/stats/box3.png'); break;
		case 0: icon = PIXI.Sprite.fromImage('assets/items/25.png'); icon.y = -8; break;
	}
	res.addChild(icon);
	var text = new PIXI.Text(num.toString(),{font:'14px "Arno Pro Semibold"',fill:'#ffffff'});
	text.x = 22;
	res.addChild(text);
	return res;
}


function chShowFormSelect(callback) {
	let vanguard = MAPDATA[WORLD].allowVanguard;
	let num = (vanguard)? 6 : 5;
	for (var i=0; i<num; i++) {
		if (i==2 && CHSHIPCOUNT.total < 5) continue;
		if (i==3 || i==4) {
			if (vanguard) formboxes[i].x = formboxes[i-3].x;
			else formboxes[i].x = formboxes[i].xOrig;
			formbuttons[i][0].x = formbuttons[i][1].x = formboxes[i].x + 10;
		}
		stage.addChild(formboxes[i]);
		stage.addChild(formbuttons[i][1]);
		stage.addChild(formbuttons[i][0]);
		formbuttons[i][0].callback = callback;
		for (var j=i*6; j<i*6+6; j++) {
			stage.addChild(formdots[j]);
			if (i >= 3) {
				let offset = formboxes[i].x - formboxes[i].xOrig || 0;
				formdots[j].position.set(FORMDOTPOS[j][0]+offset,FORMDOTPOS[j][1]);
			}
		}
	}
}

function chHideFormSelect() {
	for (var i=0; i<formboxes.length; i++) {
		stage.removeChild(formboxes[i]);
		stage.removeChild(formbuttons[i][1]);
		stage.removeChild(formbuttons[i][0]);
		formbuttons[i][0].alpha = 1;
	}
	for (var i=0; i<formdots.length; i++) stage.removeChild(formdots[i]);
}

function chShowFormSelectC(callback) {
	for (var i=0; i<4; i++) {
		if (i==2 && CHSHIPCOUNT.escort.total < 5) continue;
		if (i==3 && CHSHIPCOUNT.escort.total < 4) continue;
		stage.addChild(formboxesc[i]);
		stage.addChild(formbuttonsc[i][1]);
		stage.addChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].callback = callback;
	}
}

function chHideFormSelectC() {
	for (var i=0; i<4; i++) {
		stage.removeChild(formboxesc[i]);
		stage.removeChild(formbuttonsc[i][1]);
		stage.removeChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].alpha = 1;
	}
}



function spinCompass(result,fairy) {
	stage.addChild(mcompass);
	stage.addChild(mneedle);
	mcompass.rotation = 0;
	updates.push([function(compass,needle) {
		compass.alpha += .05; needle.alpha = compass.alpha;
		compass.scale.set(compass.scale.x-.025); needle.scale.set(compass.scale.x);
		if (compass.alpha >= 1) {
			compass.alpha = needle.alpha = 1; compass.scale.set(1); needle.scale.set(1);
			return true;
		}
		return false;
	},[mcompass,mneedle]]);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			addTimeout(function() {
				var speed = .6;
				mcompass.rotation = result - 11.97 + Math.random()*.1;
				SM.play('mapcompass',.25);
				updates.push([function() {
					mcompass.rotation += speed;
					speed *= .95;
					if (speed <= .001) return true;
					return false;
				},[]]);
			}, 1000);
			
			addTimeout(function() {
				updates.push([function(compass,needle) {
					compass.alpha -= .05; needle.alpha = compass.alpha;
					compass.scale.set(compass.scale.x+.025); needle.scale.set(compass.scale.x);
					if (compass.alpha <= 0) {
						return true;
					}
					return false;
				},[mcompass,mneedle]]);
			}, 4000);
			
			addTimeout(function() {
				stage.removeChild(mcompass);
				stage.removeChild(mneedle);
				ecomplete = true;
			}, 5000);
		};
	}, 400);
	
	
}

function mapSendScout(ship,node,isSuccess) {
	var scout = getFromPool('scout','assets/maps/recon.png');
	scout.pivot.set(37,29);
	scout.position.set(ship.x,ship.y); scout.scale.set(0); scout.timer = 0;
	smPannable.addChild(scout);
	var startx = ship.x, starty = ship.y - 10;
	var targetx = node.x + MAPOFFX, targety = node.y + MAPOFFY;
	if (!isSuccess) {
		targetx = startx + (targetx - startx)*.4;
		targety = starty + (targety - starty)*.4;
	}
	var dir = (ship.x < targetx)? 1 : -1;
	scout.scale.x *= dir;
	
	SM.play('scout');
	updates.push([function() {
		scout.timer++;
		if (scout.timer <=10) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y+.1);
		if (scout.timer > 60 && scout.timer < 85) scout.scale.x -= .08*dir;
		if (scout.timer >=140) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y-.1);
		scout.x = startx + (targetx-startx)*Math.sin(Math.PI*scout.timer/150);
		scout.y = starty + (targety-starty)*Math.sin(Math.PI*scout.timer/150);
		scout.pivot.y = 29 - 20*Math.sin(2*Math.PI*scout.timer/150);
		if (scout.timer >= 150) {
			recycle(scout);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { ecomplete = true; }, 3000);
}

function mapSortieItems(items) {
	let bubbles = [];
	if (items.supply) {
		let bubble = getFromPool('bubble','assets/maps/bubbleSupply.png');
		bubble.pivot.set(61,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x-20,mapship.y-15);
		smPannable.addChild(bubble);
		bubbles.push(bubble);
	}
	if (items.ration) {
		let bubble = getFromPool('bubble','assets/maps/bubbleRation.png');
		bubble.pivot.set(0,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x+20,mapship.y-15);
		smPannable.addChild(bubble);
		bubbles.push(bubble);
	}
	if (items.repair) {
		let bubble = getFromPool('bubble','assets/maps/bubbleRepair.png');
		bubble.pivot.set(0,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x+20,mapship.y-15);
		smPannable.addChild(bubble);
		bubbles.push(bubble);
	}
	for (let bubble of bubbles) {
		updates.push([function() {
			bubble.scale.y += .1;
			if (bubble.scale.y >= 1) {
				bubble.scale.y = 1;
				return true;
			}
		},[]]);
		addTimeout(function() {
			updates.push([function() {
				bubble.scale.y -= .1;
				if (bubble.scale.y <= 0) {
					bubble.scale.y = 0;
					recycle(bubble);
					return true;
				}
			},[]]);
		},2000);
	}
	
	addTimeout(function() { ecomplete = true; }, 2100);
}

function createRadar(x,y,imagec) {
	if (!imagec) imagec = '';
	var radar = getFromPool('mapradar'+imagec,'assets/maps/radar'+imagec+'.png');
	radar.pivot.set(80,80); radar.scale.set(0); radar.alpha = 1; radar.notpersistent = true;
	radar.position.set(x,y);
	smPannable.addChildAt(radar,smPannable.getChildIndex(mapship));
	updates.push([function(radar) {
		radar.scale.set(radar.scale.x + .01);
		if (radar.scale.x > .75) radar.alpha -= .05;
		if (radar.alpha <= 0) {
			recycle(radar);
			return true;
		}
		return false;
	},[radar]]);
}

function loadHPBar(mapnum){
	mapbar.removeChildren();
	// position + fill in current gauge if exists
	// checking for bar information: 
	let barData = MAPDATA[WORLD].maps[mapnum].bar;
	let fill = 0xff0000;
	
	let mapbarShadow = null;
	// custom gauge data
	if(barData.gauges && barData.gauges.vert){
		if(barData.gaugeIDLD && CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part].finalhp[CHDATA.event.maps[MAPNUM].diff]) barData.gaugeID = barData.gaugeIDLD;
		mapbarSprite = new PIXI.Sprite.fromImage("assets/maps/" + WORLD + "/" + barData.gaugeID + "_gauge_vert.png");
		fill = (barData.fill ? '0x' + barData.fill : fill);
		if(barData.gauges.vertShadow) mapbarShadow = new PIXI.Sprite.fromImage("assets/maps/" + WORLD + "/" + barData.gaugeID + "_gauge_vert_shadow.png");
		else mapbarShadow = new PIXI.Sprite.fromImage("assets/maps/bossbar-vert-shadow.png");
	}
	// standard transport gauge
	else if(MAPDATA[WORLD].maps[mapnum].transport){
		mapbarSprite = new PIXI.Sprite.fromImage("assets/maps/tpbar-vert.png");
		fill = 0x00ff00;
		mapbarShadow = new PIXI.Sprite.fromImage("assets/maps/tpbar-vert-shadow.png");
	}
	// standard hp gauge
	else{
		mapbarSprite = new PIXI.Sprite.fromImage("assets/maps/bossbar-vert.png");
		mapbarShadow = new PIXI.Sprite.fromImage("assets/maps/bossbar-vert-shadow.png");
	}
	var raiseAlpha = true;
	updates.push([function(shadow) {
		if(raiseAlpha){
			shadow.alpha += .02;
			if(shadow.alpha >= 1){
				raiseAlpha = false;
			}
		}
		else{
			shadow.alpha -= .02;
			if(shadow.alpha <= 0){
				raiseAlpha = true;
			}
		}
		return false;
	}, [mapbarShadow]]);
	if(mapbarShadow != null && barData.gauges && barData.gauges.vertShadow) mapbar.addChild(mapbarShadow);
	mapbarFill = new PIXI.Graphics();
	mapbar.addChild(mapbarFill);
	mapbar.position.set((barData.vertPos && barData.vertPos.x ? barData.vertPos.x : 0)+MAPOFFX,(barData.vertPos && barData.vertPos.y ? barData.vertPos.y : 0)+MAPOFFY);
	// ALL VERTICAL GAUGES ARE FILLED FROM THIS COORDINATE. 
	mapbarFill.position.set(70,113);
	mapbarFill.beginFill(fill);
	let width = 8, height = 185;
	if(barData.vertFillDimensions){ width = barData.vertFillDimensions.width; height = barData.vertFillDimensions.height; } 
	let currentHP = CHDATA.event.maps[mapnum].hp, totalHP = getMapHP(WORLD,mapnum,CHDATA.event.maps[MAPNUM].diff);
	mapbarFill.drawRect(0,0,width,Math.floor((currentHP/totalHP)* height));
	mapbar.addChild(mapbarSprite);
	mapbar.visible = true;
}


// if (localStorage.data) {
	
	/*var testships = [];
	var choose = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].LVL >= 70 && CHDATA.ships[sid].items[2] != -1) choose.push(sid);
	}
	for (var i=0; i<6; i++) {
		var s;
		do {
			s = choose[Math.floor(Math.random()*choose.length)];
		} while (testships.indexOf(s) != -1);
		testships.push(s);
	}
	console.log(testships);
	// testships = [ "x11322", "x77", "x10176", "x1281", "x3494", "x5385" ];
	testships[5] = 'x110';
	chLoadFleet(testships);
	chFillTable(testships);*/
	
	
// }

var node = null;
var curletter = 'Start';
var CHSHIPCOUNT; //= {DD:2,CA:2,SS:2};
var ONSORTIE = false;

var testLOS = 101;

function chPlayerStart() {
	curletter = (MAPDATA[WORLD].maps[MAPNUM].startCheck)? MAPDATA[WORLD].maps[MAPNUM].startCheck(CHSHIPCOUNT) : 'Start';
	if (started) {
		console.log('reset');
		SM.stopBGM();
		stage = STAGEMAP;
		eventqueue = []; e = 0;
		bossbar.active = false;
	}
	CHDATA.sortie = {};
	node = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	var mapshipindex = smPannable.getChildIndex(mapship);
	smPannable.removeChild(mapship);
	switch(CHDATA.fleets.combined) {
		case 1: mapship = mapshipCTF; break;
		case 2: mapship = mapshipSTF; break;
		case 3: mapship = mapshipTTF; break;
		default: mapship = mapshipS; break;
	}
	smPannable.addChildAt(mapship,mapshipindex);
	mapship.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	var bossnum = (typeof MAPDATA[WORLD].maps[MAPNUM].bossnode === 'object')? MAPDATA[WORLD].maps[MAPNUM].bossnode[0] : MAPDATA[WORLD].maps[MAPNUM].bossnode;
	var letterboss = (typeof bossnum == 'string')? bossnum : String.fromCharCode(64+bossnum);
	var xboss = MAPDATA[WORLD].maps[MAPNUM].nodes[letterboss].x;
	mapship.scale.set(((xboss < node.x)? -1 : 1),1);
	if(MAPDATA[WORLD].maps[MAPNUM].fleetStorage){
		CHDATA.sortie.fleetStorage = {};
		let diff = CHDATA.event.maps[MAPNUM].diff || 2;
		for(let key in MAPDATA[WORLD].maps[MAPNUM].fleetStorage){
			let mapdata = MAPDATA[WORLD].maps[MAPNUM].nodes[key], comp;
			if(typeof(MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key].fleet) === 'string'){
				if (WORLD === 20) {
					comp = ENEMYCOMPS['World '+MAPDATA[WORLD].maps[MAPNUM].world][MAPDATA[WORLD].maps[MAPNUM].name]['STORAGE'][MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key].fleet];
				} else {
					comp = ENEMYCOMPS[MAPDATA[WORLD].name][MAPDATA[WORLD].maps[MAPNUM].name]['STORAGE'][MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key].fleet];
				}
			}
			else if (typeof(MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key].fleet) === 'object') comp = MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key];
			else comp = undefined;
			
			if(typeof(comp) !== 'object') continue;
			CHDATA.sortie.fleetStorage[key] = {};
			CHDATA.sortie.fleetStorage[key].fleet = [];
			let enemies = [];
			for (let i=0; i<comp.c.length; i++) {
				let sid = comp.c[i];
				let overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
				enemies.push(createDefaultShip(sid,overrideStats));
			}
			CHDATA.sortie.fleetStorage[key].fleet = new Fleet(1);
			CHDATA.sortie.fleetStorage[key].fleet.loadShips(enemies);
			CHDATA.sortie.fleetStorage[key].fleet.formation = ALLFORMATIONS[comp.f];
			if (comp.ce) {
				CHDATA.sortie.fleetStorage[key].fleetEscort = [];
				let enemiesC = [];
				for (let i=0; i<comp.ce.length; i++) {
					let sid = comp.ce[i];
					let overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
					enemiesC.push(createDefaultShip(sid,overrideStats));
				}
				CHDATA.sortie.fleetStorage[key].fleetEscort = new Fleet(1,CHDATA.sortie.fleetStorage[key].fleet);
				CHDATA.sortie.fleetStorage[key].fleetEscort.loadShips(enemiesC);
				CHDATA.sortie.fleetStorage[key].fleetEscort.formation = ALLFORMATIONS[comp.f+'E'];
			}
			for(let data in MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key]){
				if(data != 'fleet') CHDATA.sortie.fleetStorage[key][data] = MAPDATA[WORLD].maps[MAPNUM].fleetStorage[key][data];
			}
		}
	}
	chLoadMap(MAPNUM);
	
	let doLBP, doLBN = MAPDATA[WORLD].maps[MAPNUM].lbasTargeting;
	for(let i = 0; i < LBAS1.length; ++i){
		if(LBAS1[i].pos < 0) continue;
		if(CHDATA.fleets['lbas'+LBAS1[i].pos]){
			doLBP = true;
			break;
		}
	}
	if (doLBP) eventqueue.push([lbSelectPhase,[doLBN]]);
	if (doLBN) eventqueue.push([lbESelectPhase,[doLBP]]);
	if (!doLBP && !doLBN) mapPhase(true, true);
	if (!started) animate();
	started = true;
	ONSORTIE = true;
}

function chLoadMap(mapnum) {
	map.removeChildren();
	map.addChild(PIXI.Sprite.fromImage('assets/maps/'+CHDATA.event.world+'/'+mapnum+'.png'));
	if (MAPDATA[WORLD].maps[mapnum].hiddenRoutes) {
		if (!CHDATA.event.maps[mapnum].routes) CHDATA.event.maps[mapnum].routes = [];
		for (var key in MAPDATA[WORLD].maps[mapnum].hiddenRoutes) {
			if (CHDATA.event.maps[mapnum].routes.indexOf(parseInt(key)) == -1) continue;
			var route = MAPDATA[WORLD].maps[mapnum].hiddenRoutes[key];
			for (var image of route.images) {
				var spr = PIXI.Sprite.fromImage('assets/maps/'+CHDATA.event.world+'/'+image.name);
				spr.position.set(image.x,image.y);
				map.addChild(spr);
			}
		}
	}

	for (var letter in mapnodes) { smPannable.removeChild(mapnodes[letter]); }
	mapnodes = {};
	for (var i=0; i<CHDATA.event.maps[mapnum].visited.length; i++) {
		var letter = CHDATA.event.maps[mapnum].visited[i];
		if (letter == 'Start') continue;
		if (MAPDATA[WORLD].maps[mapnum].nodes[letter].type==3) addMapNode(letter,1);
		else addMapNode(letter);
	}
	if (WORLD > 27 || WORLD <= 20) { //fill unvisited air nodes
		for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
			var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
			if (node.replacedBy && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden) != -1) continue;
			if ((node.aironly||node.raid||node.strike||node.night2||node.nightToDay2||node.nightToDay2CF||node.ambush||node.ambushN||node.minefield||node.normal) && CHDATA.event.maps[mapnum].visited.indexOf(letter) == -1) addMapNode(letter);
		}
	}
	
	if(CHDATA.event.maps[mapnum].hp > 0 && MAPDATA[WORLD].maps[mapnum].bar)
		loadHPBar(mapnum);
	if(MAPDATA[WORLD].maps[MAPNUM].animation)
		MAPDATA[WORLD].maps[MAPNUM].animation();
	chResetMapSpritePos();
}


function mapPhase(first, startBGM) {
	let initPX = 0, initPY = 0;
	// reposition map back to proper position after freepan
	if(ISMAPFREE){
		ISMAPFREE = false;
		initPX -= smPannable.x;
		initPY -= smPannable.y;
	}
	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	// reposition map to reveal start point
	if(curnode.type === 0){
		if(curnode.x > 700){
			initPX -= curnode.x - 700;
		}
		if(curnode.y > 400){
			initPY -= curnode.y - 300;
		}
	}
	panMap(initPX, initPY);
	
	if (first) {
		if(startBGM) SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
		var hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;
		if (hiddenRoutes) {
			let routeKey = checkRouteUnlocks(hiddenRoutes);
			if (routeKey) {
				let panToX = 0, panToY = 0, curX = smPannable.x, curY = smPannable.y;
				eventqueue.push([function() {
					addTimeout(function() {
						if(hiddenRoutes[routeKey].panTo){
							panToX = (hiddenRoutes[routeKey].panTo[0] - 400 <= 0 ? 0 : hiddenRoutes[routeKey].panTo[0] - 400);
							panToY = (hiddenRoutes[routeKey].panTo[1] - 240 <= 0 ? 0 : hiddenRoutes[routeKey].panTo[1] - 240);
						}
						panMap((curX * -1) - panToX, (curY * -1) - panToY);
					}, 500);
					addTimeout(function() { showRouteUnlock(hiddenRoutes[routeKey],routeKey); }, 1000);
					addTimeout(function() { panMap(curX + panToX, curY + panToY); ecomplete = true; }, 4000);
				},[]]);
				if (WORLD >= 42) { //early-fall onward force return
					eventqueue.push([endMap,[]]);
					return;
				}
			}
		}
	} else {
		pushShipStatusToUI();
	}
	
	bottomMessage.text = "";
	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];

	if (MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].transport == curletter) {
		CHDATA.sortie.reachedTransport = true;
	}

	if (curnode.end) {
		if (curnode.dropoff || curnode.type == 3) {
			if (curnode.debuffGive) {
				if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
				curnode.debuffGive();
			}
		}
		if (curnode.dropoff) {
			if (!MAPDATA[WORLD].maps[MAPNUM].currentBoss || MAPDATA[WORLD].maps[MAPNUM].currentBoss == curletter) {
				var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
				CHDATA.event.maps[MAPNUM].hp -= transportCalc(chGetShips(true),'S');
				if (CHDATA.event.maps[MAPNUM].hp < 0) CHDATA.event.maps[MAPNUM].hp = 0;
			}
		}
		eventqueue.push([endMap,[]]);
		return;
	}
	var nextletter, nextnode;
	if (curnode.route) nextletter = curnode.route;
	else if (curnode.routeC) nextletter = curnode.routeC(CHSHIPCOUNT);
	else if (curnode.routeR) {
		var r = Math.random(), sum = 0;
		for (var letter in curnode.routeR) {
			sum += curnode.routeR[letter];
			if (r < sum) { nextletter = letter; break; }
		}
	} else if (curnode.routeL) {
		nextletter = checkELoS33(getELoS33(1,curnode.routeLC || 1,CHDATA.fleets.combined),curnode.routeL);
	} else if (curnode.routeS) {
		eventqueue.push([selectNode,[curnode.routeS]]);
	}
	
	if (!curnode.routeS) mapPhase2(nextletter);
}

function mapPhase2(nextletter) {
	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	var nextnode = MAPDATA[WORLD].maps[MAPNUM].nodes[nextletter];
	if (CHDATA.event.maps[MAPNUM].visited.indexOf(nextletter) == -1) CHDATA.event.maps[MAPNUM].visited.push(nextletter);
	
	eventqueue.push([wait,[1000]]);
	if ((curnode.routeC && !curnode.showNoCompass) || curnode.routeR) {
		var dir = Math.atan2(curnode.x-nextnode.x,curnode.y-nextnode.y);
		eventqueue.push([spinCompass,[dir]]);
	}
	if (curnode.routeL || curnode.showLoSPlane) {
		var targetLetter;
		if (curnode.showLoSPlane) {
			targetLetter = curnode.showLoSPlane;
		} else {
			var LOSs = Object.keys(curnode.routeL).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
			targetLetter = curnode.routeL[LOSs[0]];
		}
		eventqueue.push([mapSendScout,[mapship,MAPDATA[WORLD].maps[MAPNUM].nodes[targetLetter],(nextletter==targetLetter)]]);
	}
	
	let path = typeof(curnode.paths) !== 'undefined' && typeof(curnode.paths[nextletter]) !== 'undefined' ? curnode.paths[nextletter] : undefined;
	eventqueue.push([mapMoveShip,[mapship,nextnode.x+MAPOFFX,nextnode.y+MAPOFFY,path]]);
	
	var enemyRaid = MAPDATA[WORLD].maps[MAPNUM].enemyRaid;
	if (enemyRaid) {
		var diff = CHDATA.event.maps[MAPNUM].diff;
		if (CHDATA.sortie.raidCounter === undefined) { //first node won't have
			CHDATA.sortie.raidCounter = enemyRaid.chance[diff];
			CHDATA.sortie.raidNum = 0;
		} else if (CHDATA.sortie.raidNum < enemyRaid.maxNum[diff]) {
			CHDATA.sortie.raidCounter += enemyRaid.chance[diff];
			if (Math.random() < CHDATA.sortie.raidCounter) {
				eventqueue.push([mapEnemyRaid,[]]);
				eventqueue.push([prepEnemyRaid,[]]);
				CHDATA.sortie.raidCounter -= 1;
				CHDATA.sortie.raidNum++;
			}
		}
	}
	
	if (nextnode.repair) {
		if (chAnchorageRepair()) {
			eventqueue.push([mapSortieItems,[{repair:true}]]);
		}
	}
	if (nextnode.boss) {
		let result = chApplySortieItems();
		if (result.supply || result.ration) {
			eventqueue.push([mapSortieItems,[result]]);
		}
	}
	
	switch (nextnode.type) {
		case 1: //battle
			eventqueue.push([mapBattleNode,[mapship,nextletter]]);
			eventqueue.push([executeBattleNode,[nextletter]]);
			break;
		case 2: //res
			eventqueue.push([mapResourceNode,[mapship,nextletter]]);
			break;
		case 3: //illusion
			eventqueue.push([mapIllusionNode,[mapship,nextletter]]);
			break;
		case 4: //storm
			eventqueue.push([mapStormNode,[mapship,nextletter]]);
			break;
		default:
			break;
	}
	
	curletter = nextletter;
}

function lbSelectPhase(didLBN) {
	SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
	ISMAPFREE = true;
	CHDATA.sortie.lbas1Nodes = {};
	var currentBasePos = 0, currentBase = 1;
	for (currentBasePos; currentBasePos<LBAS1.length; currentBasePos++) {
		if (LBAS1[currentBasePos].pos > 0 && CHDATA.fleets['lbas'+LBAS1[currentBasePos].pos]) {
			currentBase = LBAS1[currentBasePos].pos;
			break;
		}
	}
	
	/*if (currentBase == 1 && !CHDATA.fleets.lbas1) currentBase = 2;
	if (currentBase == 2 && !CHDATA.fleets.lbas2) currentBase = 3;*/
	if (currentBase > MAPDATA[WORLD].maps[MAPNUM].lbas) {
		addTimeout(function() { ecomplete = true; }, 1);
		return;
	}
	var currentNum = 0;
	var areas = [];
	var crosshairs = [];
	var messages = [];
	var nodeSelected = '';
	
	var afterSelect = function() {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[nodeSelected];
		if (!CHDATA.sortie.lbas1Nodes[nodeSelected]) CHDATA.sortie.lbas1Nodes[nodeSelected] = [];
		var concentrated = CHDATA.sortie.lbas1Nodes[nodeSelected].indexOf(currentBasePos) != -1;
		CHDATA.sortie.lbas1Nodes[nodeSelected].push(currentBasePos);
		currentNum++;
		
		var crosshair;
		if (concentrated) crosshair = getFromPool('crosshair3','assets/maps/lbcrosshairs3.png');
		else if (currentNum == 2) crosshair = getFromPool('crosshair2','assets/maps/lbcrosshairs2.png');
		else crosshair = getFromPool('crosshair1','assets/maps/lbcrosshairs1.png');
		crosshair.pivot.set(28);
		crosshair.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		crosshairs.push(crosshair);
		var mapshipindex = smPannable.getChildIndex(mapship);
		smPannable.addChildAt(crosshair,mapshipindex);
		if(concentrated){
			recycle(crosshairs[0]);
		} 
		SM.play('lbasselect');

		if (currentNum >= 2) {
			for (var i=0; i<areas.length; i++) {
				areas[i].interactive = false;
			}
			messages[currentBase-1].visible = false;
			messageG.visible = true;
		}
		messageCancel.visible = true;
	}
	
	var afterContinue = function() {
		++currentBasePos;
		for (; currentBasePos<LBAS1.length; currentBasePos++) {
			if (LBAS1[currentBasePos].pos > 0 && CHDATA.fleets['lbas'+LBAS1[currentBasePos].pos]) {
				currentBase = LBAS1[currentBasePos].pos;
				currentNum = 0;
				break;
			}
		}
		if (currentBase <= 3 && currentBasePos < LBAS1.length) { //TODO- hardcoded 3
			for (var i=0; i<areas.length; i++) {
				areas[i].interactive = (MAPDATA[WORLD].maps[MAPNUM].nodes[areas[i].letter].distance <= getLBASRange(CHDATA.ships['z'+currentBase]));
			}
			for (var i=0; i<crosshairs.length; i++) {
				recycle(crosshairs[i]);
			}
			crosshairs = [];
			messageG.visible = false;
			messageCancel.visible = false;
			messages[currentBase-1].visible = true;
		} else {
			for (var i=0; i<areas.length; i++) {
				areas[i].interactive = areas[i].buttonMode = false;
			}
			for (var i=0; i<crosshairs.length; i++) {
				recycle(crosshairs[i]);
			}
			for (var i=0; i<messages.length; i++) {
				messages[i].interactive = messages[i].buttonMode = false;
			}
			addTimeout(function() {
				for (let area of areas) smPannable.removeChild(area);
				for (let message of messages) recycle(message);
				ecomplete = true;
				if(!didLBN) mapPhase(true, false);
			}, 1);
		}
		SM.play('lbassend');
	}
	
	var afterCancel = function() {
		for (var letter in CHDATA.sortie.lbas1Nodes) {
			var arrNew = [];
			for (var i=0; i<CHDATA.sortie.lbas1Nodes[letter].length; i++) {
				if (CHDATA.sortie.lbas1Nodes[letter][i] != currentBasePos) {
					arrNew.push(CHDATA.sortie.lbas1Nodes[letter][i]);
				}
			}
			CHDATA.sortie.lbas1Nodes[letter] = arrNew;
		}
		for (var letter in CHDATA.sortie.lbas1Nodes) {
			if (CHDATA.sortie.lbas1Nodes[letter].length <= 0) delete CHDATA.sortie.lbas1Nodes[letter];
		}
		currentNum = 0;
	
		for (var i=0; i<areas.length; i++) {
			areas[i].interactive = (MAPDATA[WORLD].maps[MAPNUM].nodes[areas[i].letter].distance <= getLBASRange(CHDATA.ships['z'+currentBase]));
		}
		messageCancel.visible = false;
		for (var i=0; i<crosshairs.length; i++) {
			recycle(crosshairs[i]);
		}
		messageG.visible = false;
		messages[currentBase-1].visible = true;
	}
	
	let found = false;
	for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		if (node.hidden && (!CHDATA.event.maps[MAPNUM].routes || CHDATA.event.maps[MAPNUM].routes.indexOf(node.hidden) == -1)) continue;
		if (node.replacedBy && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden) != -1) continue;
		if (node.lbPart && CHDATA.event.maps[MAPNUM].part != node.lbPart) continue;
		var area = new PIXI.Graphics();
		area.beginFill(0);
		area.drawCircle(10,10,10);
		area.pivot.set(10);
		area.alpha = 0;
		area.buttonMode = true;
		area.interactive = (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].distance <= getLBASRange(CHDATA.ships['z'+currentBase]));
		found = found || area.interactive;
		area.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		area.letter = letter;
		area.callback = afterSelect;
		area.click = function(e) { nodeSelected = this.letter; this.callback(); }
		areas.push(area);
	}
	if (!found) {
		addTimeout(function() { ecomplete = true; }, 1);
		return;
	}
	for (let area of areas) {
		smPannable.addChild(area);
	}

	for (var i=1; i<=3; i++) {
		var message = getFromPool('lbmessage'+i,'assets/maps/lbmessage'+i+'.png');
		// message.interactive = message.buttonMode = true;
		// message.callback = afterContinue;
		// message.click = function(e) { this.callback(); }
		message.position.set(10,10);
		message.visible = (i==currentBase);
		messages.push(message);
		stage.addChild(message);
	}
	var messageG = getFromPool('lbmessageG','assets/maps/lbmessageG.png');
	messageG.interactive = messageG.buttonMode = true;
	messageG.callback = afterContinue;
	messageG.click = function(e) { this.callback(); }
	messageG.position.set(3,3);
	messageG.visible = false;
	messages.push(messageG);
	stage.addChild(messageG);
	var messageCancel = getFromPool('lbcancel','assets/maps/lbcancel.png');
	messageCancel.interactive = messageCancel.buttonMode = true;
	messageCancel.callback = afterCancel;
	messageCancel.click = function(e) { this.callback(); }
	messageCancel.position.set(190,2);
	messageCancel.visible = false;
	messages.push(messageCancel);
	stage.addChild(messageCancel);
	
	var banner = getFromPool('lbbanner','assets/icons/LBAS1.png');
	banner.x = 18;
	banner.y = 45;
	messages.push(banner);
	stage.addChild(banner);
	
	messages[0].pivot.x = 300;
	updates.push([function() {
		messages[0].pivot.x -= 10;
		for (var i=1; i<messages.length; i++) messages[i].pivot.x = messages[0].pivot.x;
		return messages[0].pivot.x <= 0;
	},[]]);
}

function lbESelectPhase(didLBP){
	if(!didLBP) SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
	ISMAPFREE = true;
	let targetData = MAPDATA[WORLD].maps[MAPNUM].lbasTargeting;
	if(!CHDATA.sortie.lbas1Nodes) CHDATA.sortie.lbas1Nodes = {};
	CHDATA.sortie.lbas2Nodes = {};
	let targetList = [], wavesSent = [];
	// acquire possible nodes for targeting
	for(let node of targetData){
		// do not select nodes that are invisible
		if(typeof(MAPDATA[WORLD].maps[MAPNUM].nodes[node.letter].hidden) !== 'undefined' && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.letter].hidden) === -1) continue;
		let hpLeft = CHDATA.event.maps[MAPNUM].hp / MAPDATA[WORLD].maps[MAPNUM].maphp[CHDATA.event.maps[MAPNUM].diff][1];
		if(hpLeft <= 0) hpLeft = 1; // target nodes as if map is at 100% hp
		let selectSpecialPass = (typeof(node.selectSpecial) !== 'undefined' ? node.selectSpecial : true);
		if(hpLeft <= node.selectStart && hpLeft > node.selectEnd && selectSpecialPass){
			if(node.lockWaves1 || node.lockWaves2) targetList.push(node);
		}
	}
	if(LBAS2.length === 0 || targetList.length === 0){
		addTimeout(function() {
			ecomplete = true;
			mapPhase(true, false);
		}, 1);
	}
	else{
		// send locked waves to appropriate nodes first
		for(let target of targetList){
			if(target.lockWaves1){
				if(!CHDATA.sortie.lbas1Nodes[target.letter]) CHDATA.sortie.lbas1Nodes[target.letter] = [];
				for(let wave of target.lockWaves1){
					if(LBAS1[wave] === null) continue;
					CHDATA.sortie.lbas1Nodes[target.letter].push(wave);
					if(!wavesSent[wave]) wavesSent[wave] = [];
					wavesSent[wave].push(target.letter);
				}
			}
			if(target.lockWaves2){
				if(!CHDATA.sortie.lbas2Nodes[target.letter]) CHDATA.sortie.lbas2Nodes[target.letter] = [];
				for(let wave of target.lockWaves2){
					if(LBAS2[wave] === null) continue;
					CHDATA.sortie.lbas2Nodes[target.letter].push(wave);
					if(!wavesSent[wave]) wavesSent[wave] = [];
					wavesSent[wave].push(target.letter);
				}
			}
		}

		// show nodes being placed onto the map
		var crosshairs = [], events = 1;
		for(let base in wavesSent){
			if(wavesSent[base].length === 0) continue;
			for(let wave in wavesSent[base]){
				addTimeout( () => { 
					let crosshair, node = MAPDATA[WORLD].maps[MAPNUM].nodes[wavesSent[base][wave]];
					let concentrated = (wave == 1 && node == MAPDATA[WORLD].maps[MAPNUM].nodes[wavesSent[base][0]]);
					if (concentrated){
						crosshair = getFromPool('lb2crosshairs3','assets/maps/lb2crosshairs3.png');
						crosshair.pivot.set(38,28);
					}
					else{
						if(wave == 1){ crosshair = getFromPool('lb2crosshairs2','assets/maps/lb2crosshairs2.png'); }
						else { crosshair = getFromPool('lb2crosshairs1','assets/maps/lb2crosshairs1.png'); }
						crosshair.pivot.set(28);
					}
					crosshair.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
					crosshairs.push(crosshair);
					var mapshipindex = smPannable.getChildIndex(mapship);
					smPannable.addChildAt(crosshair,mapshipindex);
					SM.play('lbasselect');
					if(concentrated) recycle(crosshairs[0]);
				}, 750 * events);
				++events;
			}
			addTimeout( () => {
				for(let hair of crosshairs){
					if(hair !== undefined) recycle(hair);
				}
				crosshairs = [];
				SM.play('lbassend');
			}, 750 * events - 125);
			++events;
		}
		// now back to regularly scheduled programming
		addTimeout( () => { 
			ecomplete = true;
			mapPhase(true, false);
		}, 750 * events);
	}
}

function selectNode(letters) {
	var nodeSelected = false;
	bottomMessage.text = "Select a path for the fleet to take!";
	var originX = smPannable.x, originY = smPannable.y;
	var bubble = getFromPool('nodeBubble','assets/maps/nodeSelectBubble.png');
	bubble.pivot.set(0,60);
	bubble.scale.y = 0;
	bubble.position.set(mapship.x+20,mapship.y-15);
	smPannable.addChild(bubble);
	updates.push([function() {
		bubble.scale.y += .15;
		if (bubble.scale.y >= 1) {
			bubble.scale.y = 1;
			return true;
		}
	},[]]);
	var afterSelect = function() {
		ISMAPFREE = false;
		//panMap((smPannable.x-originX) * -1, (smPannable.y-originY) * -1);
		panMap(originX - smPannable.x, originY - smPannable.y);
		recycle(bubble); bottomMessage.text = "";
		for (let j=0; j<areas.length; j++) areas[j].interactive = false;
		mapPhase2(nodeSelected);
		addTimeout(function() { 
			for (let j=0; j<areas.length; j++) smPannable.removeChild(areas[j]);
			ecomplete = true;
		}, 100);
	};
	
	var glows = [], areas = [];
	for (var i=0; i<letters.length; i++) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letters[i]];
		glows[i] = getFromPool('nodeGlow','assets/maps/nodeGlow.png');
		glows[i].pivot.set(28);
		glows[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		smPannable.addChild(glows[i]);
		updates.push([function(glow) {
			glow.scale.set(glow.scale.x+.01);
			if (glow.scale.x >= 1.3) glow.scale.set(.7);
			glow.alpha = 1-(Math.abs(glow.scale.x-1)*3);
			if (nodeSelected) {
				recycle(glow);
				return true;
			}
		},[glows[i]]]);
		
		areas[i] = new PIXI.Graphics();
		areas[i].beginFill(0);
		areas[i].drawCircle(10,10,10);
		areas[i].pivot.set(10);
		areas[i].alpha = 0;
		areas[i].interactive = areas[i].buttonMode = true;
		areas[i].mouseover = function(e) { SM.play('hover'); }
		areas[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		areas[i].letter = letters[i];
		areas[i].callback = afterSelect;
		areas[i].click = function(e) { nodeSelected = this.letter; this.callback(); }
		smPannable.addChild(areas[i]);
	}
	ISMAPFREE = true;
}

function panMap(xdiff, ydiff){
	// TODO: put events that trigger on map panning here
	smPannable.x += xdiff;
	smPannable.y += ydiff;
}
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['A'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'A']]);
// eventqueue.push([spinCompass,[0]]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['B'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'B']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['C'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'C']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['D'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'D']]);
// eventqueue.push([prepBattle,[]]);

function getEnemyCompWithWeight(obj){
	if(typeof(obj) !== 'object') return '';
	let comp, r = Math.floor(100*Math.random());
	for (let key in obj) {
		comp = key;
		r -= obj[key];
		if (r < 0) break;
	}
	return comp;
}

function getEnemyComps(letter,mapdata,diff,lastdance,special) {
	lastdance = lastdance && (!mapdata.compFPart || mapdata.compFPart == CHDATA.event.maps[MAPNUM].part);
	var comps;
	// get list of compositions
	if (CHDATA.config.diffmode == 1) {
		var compHQ = (mapdata.compHQF && lastdance)? mapdata.compHQF : mapdata.compHQ;
		if (mapdata.compHQC && CHDATA.event.maps[MAPNUM].hp <= 0) compHQ = mapdata.compHQC;
		if (!compHQ) {
			comps = (mapdata.compDiffF && lastdance)? mapdata.compDiffF[2] : mapdata.compDiff[2];
			if (mapdata.compDiffC && CHDATA.event.maps[MAPNUM].hp <= 0) comps = mapdata.compDiffC[2];
		} else {
			var hqs = []; for (var key in compHQ) hqs.push(parseInt(key));
			hqs.sort(function(a,b) { return a-b; });
			// console.log(hqs);
			comps = compHQ[hqs[0]];
			for (var i=hqs.length-1; i>0; i--) {
				if (CHDATA.player.level >= hqs[i]) {
					comps = compHQ[hqs[i]];
					// console.log('chose: '+hqs[i]);
					break;
				}
			}
		}
		// console.log(comps);
	} else {
		if(mapdata.compDiffS && special.length > 0){
			comps = [];
			for(let sp in special){
				comps.push(mapdata.compDiffS[diff][sp]);
			}
		}
		else{
			if (mapdata.compDiffPart) mapdata = mapdata.compDiffPart[CHDATA.event.maps[MAPNUM].part];
			comps = (mapdata.compDiffF && lastdance)? mapdata.compDiffF[diff] : mapdata.compDiff[diff];
			if (mapdata.compDiffC && CHDATA.event.maps[MAPNUM].hp <= 0) comps = mapdata.compDiffC[diff];
			if (mapdata.compDiffC && MAPDATA[WORLD].maps[MAPNUM].currentBoss && MAPDATA[WORLD].maps[MAPNUM].currentBoss != letter) comps = mapdata.compDiffC[diff];
		}
	}
	
	var comp, compd = [];
	// unweighted composition chances (even split)
	if (Array.isArray(comps)) {
		comp = comps[Math.floor(Math.random()*comps.length)];
	// weighted composition chances
	} else {
		comp = getEnemyCompWithWeight(comps);
	}
	if(typeof(comp) === 'object'){
		for(let c of comp){
			if(Array.isArray(c)){
				compd.push(c[Math.floor(Math.random()* c.length)]);
			}
			else{
				compd.push(getEnemyCompWithWeight(c));
			}
		}
	}
	else{
		compd.push(comp);																							
	}
	
	for(let c1 = 0; c1 < compd.length; ++c1){
		if (WORLD === 20) {
			let n = (mapdata.compName)? mapdata.compName : (mapdata.boss)? 'Boss' : letter;
			compd[c1] = ENEMYCOMPS['World '+MAPDATA[WORLD].maps[MAPNUM].world][MAPDATA[WORLD].maps[MAPNUM].name][n][compd[c1]];
		} else {
			let n = (mapdata.compName)? mapdata.compName : letter;
			compd[c1] = ENEMYCOMPS[MAPDATA[WORLD].name]['E-'+MAPNUM][n][compd[c1]];
		}
	}
	return compd;
}

function chGetLastDance() {
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = false;
	if (MAPDATA[WORLD].maps[MAPNUM].transport) {
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		var tp = transportCalc(chGetShips(true),'S');
		lastdance = CHDATA.event.maps[MAPNUM].hp <= tp && CHDATA.event.maps[MAPNUM].hp > 0;
		if (!lastdance && MAPDATA[WORLD].maps[MAPNUM].finaltp) lastdance = (CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].finaltp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
	} else {
		lastdance = (MAPDATA[WORLD].maps[MAPNUM].finalhp && CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
	}
	if (MAPDATA[WORLD].maps[MAPNUM].parts && MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part+1] && WORLD == 32) lastdance = false; //for now Fall15 only
	return lastdance;
}

function executeBattleNode(letter){
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	SM.stopBGM();
	var CHAPI = {battles:[],fleetnum:1,support1:3,support2:4,source:2,world:WORLD,mapnum:MAPNUM};
	if (!MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].hpmode != -1) {
		if (!MAPDATA[WORLD].maps[MAPNUM].currentBoss || MAPDATA[WORLD].maps[MAPNUM].currentBoss == letter) {
			if (MAPDATA[WORLD].maps[MAPNUM].hpmode == 1) {
				CHAPI.defeat_count = getMapHP(WORLD,MAPNUM,diff) - CHDATA.event.maps[MAPNUM].hp;
				console.log(CHAPI.defeat_count);
			} else {
				CHAPI.now_maphp = CHDATA.event.maps[MAPNUM].hp;
				CHAPI.max_maphp = getMapHP(WORLD,MAPNUM,diff);
			}
		}
	}
	if (CHDATA.fleets.combined) CHAPI.combined = CHDATA.fleets.combined;
	
	for (var i=0; i<4; i++) {
		if (i >= FLEETS1.length) break;
		CHAPI['fleet'+(i+1)] = [];
		if (!FLEETS1[i]) continue;
		for (var j=0; j<FLEETS1[i].ships.length; j++) {
			var ship = FLEETS1[i].ships[j];
			var obj = {equip:[],kyouka:[]};
			obj.mst_id = ship.mid;
			var repairs = (ship.repairs)? ship.repairs.slice() : null;
			for (var k=0; k<Math.max(5,ship.equips.length); k++) {
				if (ship.equips[k]) {
					//don't load repair into replay if used (but keep on simship because it breaks things if remove)
					//this is still bugged, if both team and goddess are equipped, because replayer doesn't know which to use first, need to figure out
					if (ship.equips[k].type == REPAIR) {  
						var ind = repairs.indexOf(ship.equips[k].mid);
						if (ind != -1) { repairs.splice(ind,1); obj.equip.push(ship.equips[k].mid); }
						else obj.equip.push(-1);
						continue;
					}
					obj.equip.push(ship.equips[k].mid);
				}
				else obj.equip.push(-1);
			}
			CHAPI['fleet'+(i+1)].push(obj);
		}
	}
	var mapdata = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var lastdance = chGetLastDance(), special = typeof(mapdata.compSTrigger) !== 'undefined' ? mapdata.compSTrigger() : [];
	var comps = getEnemyComps(letter,mapdata,diff,lastdance,special);
	if(comps.length > 1) CHAPI.mbFinish = 0;
	let battleRes, c=0;
	for(; c<comps.length; ++c){
		battleRes = executeBattle(letter,comps[c],(c+1!==comps.length));
		if(typeof(battleRes) === 'undefined') break; //kill the loop if something goes wrong
		CHAPI.battles.push(battleRes[0]);
		if(c+1 !== comps.length){
			if(battleRes[1].rank === 'C' || battleRes[1].rank === 'D' || battleRes[1].rank === 'E') break;
		}
	}
	if(c === comps.length) CHAPI.mbFinish = 1;
	
	$('#code').val(JSON.stringify(CHAPI)); //remove?
	CHDATA.temp = battleRes[1];
	
	//update morale after NB select
	if(mapdata.backOverrideN) bg2 = PIXI.Sprite.fromImage("assets/maps/" + WORLD + "/" + mapdata.backOverrideN);
	stage = STAGEBATTLE;
	if(mapdata.backOverrideD){
		stage.removeChild(bg);
		bg = PIXI.Sprite.fromImage("assets/maps/" + WORLD + "/" + mapdata.backOverrideD);
	}
	stage.addChildAt(bg,0);
	radar1.scale.set(0); radar2.scale.set(0);
	stage.addChild(radar1);
	stage.addChild(radar2);
	dots1.alpha = dots2.alpha = 0;
	stage.addChild(dots1);
	stage.addChild(dots2);
	bossBarReset();
	eventqueue = [[shuttersPrebattle,[]]]; e = -1;
	processAPI(CHAPI);
	NBSELECT = false;
	if (!mapdata.nightToDay && !mapdata.nightToDay2 && !mapdata.nightToDay2CF) {
		for (var i=0; i<eventqueue.length; i++) {
			if (eventqueue[i][0] == shutters) { eventqueue[i][0] = shuttersSelect; break; }
		}
	}
	if (!MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].hpmode != 1) lastdance = FLEETS2[0].ships[0].maxHP >= CHDATA.event.maps[MAPNUM].hp; //if last dance hp < boss hp, still play sunk line
	if (MAPDATA[WORLD].isVita) lastdance = true;
	if (battleRes[1].flagsunk && ((mapdata.boss && lastdance && !MAPDATA[WORLD].maps[MAPNUM].transport) || FLEETS2[0].isFakeBoss)) {
		var shipid = comps[comps.length - 1].c[0];
		if (VOICES[shipid] && VOICES[shipid]['sunk']) {
			var sndindex = eventqueue.length;
			var snd = SM._sounds['Vsunk'+shipid] = new Howl({
				src:[VOICES[shipid]['sunk']],
				volume:.4*SM._volume,
				html5:true,
				onload: function() {
					var waittime = this.duration()*1000 + 2000;
					eventqueue.splice(sndindex,0,[wait,[waittime]]);
				}
			});
		}
	}
	eventqueue.push([shuttersPostbattle,[]]);
	eventqueue.push([showResults,[]]);
	shutterTop2.y = 0; shutterBottom2.y = 210;
	if (!MAPDATA[WORLD].maps[MAPNUM].nodes[letter].end) {
		if (CHDATA.fleets.combined || CHDATA.fleets.sf) eventqueue.push([FCFSelect,[]]);
		eventqueue.push([continueSelect,[]]);
		eventqueue.push([wait,[1000]]);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function executeBattle(letter,compd,prefinal){
	var enemies = [];
	var mapdata = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	
	for (var i=0; i<compd.c.length; i++) {
		var sid = compd.c[i];
		var overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
		enemies.push(createDefaultShip(sid,overrideStats));
	}
	FLEETS2[0] = new Fleet(1);
	FLEETS2[0].loadShips(enemies);
	FLEETS2[0].formation = ALLFORMATIONS[compd.f];
	if (compd.ce) {
		var enemiesC = [];
		for (var i=0; i<compd.ce.length; i++) {
			var sid = compd.ce[i];
			var overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
			enemiesC.push(createDefaultShip(sid,overrideStats));
		}
		FLEETS2[1] = new Fleet(1,FLEETS2[0]);
		FLEETS2[1].loadShips(enemiesC);
		FLEETS2[1].formation = ALLFORMATIONS[compd.f+'E'];
	}
	
	let friendFleet = null;
	if(!prefinal){
		FLEETS1[0].lockSpecial = false;
		let fsLetter = CHDATA.sortie.fleetStorage ? (CHDATA.sortie.fleetStorage[letter] ? letter : ((mapdata.compFS && CHDATA.sortie.fleetStorage[mapdata.compFS]) ? mapdata.compFS : undefined)): undefined;
		if(typeof(fsLetter) !== 'undefined'){
			let fs = CHDATA.sortie.fleetStorage[fsLetter];
			for(let i = 0; i < fs.fleet.ships.length; ++i){
				let replace = (fs.replacement) !== 'undefined' && typeof(fs.replacement[letter]) !== 'undefined' ? fs.replacement[letter][i] : i;
				if(typeof(FLEETS2[0].ships[replace]) !== 'undefined'){
					fs.fleet.ships[i].num = replace + 1;
					FLEETS2[0].ships[replace] = fs.fleet.ships[i];
					let bossnode = (MAPDATA[WORLD].maps[MAPNUM].currentBoss ? MAPDATA[WORLD].maps[MAPNUM].currentBoss : (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss));
					if(MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss && bossnode === letter && replacePos === 0 && !CHDATA.event.maps[MAPNUM].clear){
						let hpDiff = SHIPDATA[FLEETS2[0].ships[0].mid].HP - FLEETS2[0].ships[0].HP;
						if(hpDiff > 0){
							CHDATA.event.maps[MAPNUM].hp -= hpDiff;
							if(CHDATA.event.maps[MAPNUM].hp <= 0) CHDATA.event.maps[MAPNUM].hp = 1;
						}
					}
				}
			}
			if(typeof(FLEETS2[1]) !== 'undefined' && fs.fleetEscort){
				for(let i = 0; i < fs.fleetEscort.ships.length; ++i){
					let replace = (typeof(fs.replacementEscort) !== 'undefined' && typeof(fs.replacementEscort[letter]) !== 'undefined'  ? fs.replacementEscort[letter][i] : i);
					if(typeof(FLEETS2[1].ships[replace]) !== 'undefined'){
						fs.fleetEscort.ships[i].num = replace + 1;
						FLEETS2[1].ships[replace] = fs.fleetEscort.ships[i];
					}
				}
			}
		}
		
		if ((mapdata.friendFleet || CHDATA.sortie.ff1Extra || CHDATA.sortie.ff2Extra) && CHDATA.fleets.ff !== 0) {
			let friendFleets = [];
			if(mapdata.friendFleet && mapdata.friendFleet.length > 0) friendFleets = friendFleets.concat(mapdata.friendFleet);
			if(CHDATA.sortie.ff1Extra && CHDATA.sortie.ff1Extra.length > 0) friendFleets = friendFleets.concat(CHDATA.sortie.ff1Extra);
			let friendFleetsS = null;
			if(CHDATA.fleets.ff === 2){
				friendFleetsS = [];
				if(mapdata.friendFleetSX && mapdata.friendFleetSX.length > 0) friendFleetsS = friendFleetsS.concat(mapdata.friendFleetSX);
				else if(mapdata.friendFleetS && mapdata.friendFleetS.length > 0) friendFleetsS = friendFleetsS.concat(mapdata.friendFleetS);
				if(CHDATA.sortie.ff2Extra && CHDATA.sortie.ff2Extra.length > 0) friendFleetsS = friendFleetsS.concat(CHDATA.sortie.ff2Extra);
			}
			friendFleet = chLoadFriendFleet(chChooseFriendFleet(friendFleets,friendFleetsS,!!mapdata.friendFleetSX));
		}
		CHDATA.sortie.fleetFriend = friendFleet;
		
		if (mapdata.setupSpecial) {
			mapdata.setupSpecial(); //not reverted until sortie end
		}
		
		if (mapdata.debuffAmount) {
			var debuffCheck = MAPDATA[WORLD].maps[MAPNUM].debuffCheck;
			if (debuffCheck && debuffCheck(CHDATA.event.maps[MAPNUM].debuff)) {
				if (typeof mapdata.debuffAmount === 'object') {
					for (var i=0; i<FLEETS2[0].ships.length; i++) {
						var ship = FLEETS2[0].ships[i];
						if (mapdata.debuffAmount[ship.mid]) ship.debuff = mapdata.debuffAmount[ship.mid];
					}
					console.log('debuff applied by mid');
				} else if (mapdata.debuffAmount) {
					FLEETS2[0].ships[0].debuff = mapdata.debuffAmount;
					console.log('debuff applied to flag');
				}
			}
		}
	}
	else{
		FLEETS1[0].lockSpecial = true;
	}
	
	if (CHDATA.fleets.combined) {
		if (FORMSELECTED > 10) {
			FLEETS1[0].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED+'E'];
		} else {
			FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[FORMSELECTED];
		}
	} else {
		FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
	}
	
	let nodeNum = (letter.replace('*','').length > 1)? letter : letter.charCodeAt()-64;
	var BAPI = {data:{},yasen:{},mvp:[],rating:'',node:nodeNum};
	var doNB = (compd.bomb || prefinal ? false : true); //always do during standard battles, roll back later if not chosen
	var NBonly = compd.NB || mapdata.night2; //change to node level?
	var aironly = compd.air;
	var landbomb = compd.bomb;
	var ambush = mapdata.ambush || mapdata.ambushN;
	var supportfleet1 = (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss)? FLEETS1S[1] : FLEETS1S[0];
	var supportfleet2 = (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss)? FLEETS2S[1] : FLEETS2S[0];
	
	var LBAS1waves = null, LBAS2waves = null;
	if (CHDATA.sortie.lbas1Nodes && CHDATA.sortie.lbas1Nodes[letter]) {
		LBAS1waves = [];
		for (var i=0; i<CHDATA.sortie.lbas1Nodes[letter].length; i++) {
			LBAS1waves.push(LBAS1[CHDATA.sortie.lbas1Nodes[letter][i]]);
		}
	}
	if (CHDATA.sortie.lbas2Nodes && CHDATA.sortie.lbas2Nodes[letter]) {
		LBAS2waves = [];
		for (var i=0; i<CHDATA.sortie.lbas2Nodes[letter].length; i++) {
			LBAS2waves.push(LBAS2[CHDATA.sortie.lbas2Nodes[letter][i]]);
		}
	}
	
	if (MAPDATA[WORLD].vanguardConsts) {
		for (let key in MAPDATA[WORLD].vanguardConsts) {
			SIMCONSTS[key] = MAPDATA[WORLD].vanguardConsts[key];
		}
	}
	
	NEWFORMAT = CHDATA.fleets.sf || mapdata.nightToDay2 || mapdata.nightToDay2CF || mapdata.friendFleet;
	var res;
	if (ambush) {
		if (CHDATA.fleets.combined) res = simAmbushCombined(FLEETS1[0],FLEETS2[0],BAPI,prefinal,(mapdata.ambushN ? 1 : 0));
		else res = simAmbush(FLEETS1[0],FLEETS2[0],BAPI,prefinal,(mapdata.ambushN ? 1 : 0));
		if(mapdata.ambushN) BAPI.yasen.api_name = 'ld_n_shooting';
		else BAPI.data.api_name = 'ld_shooting';
	} else if (mapdata.nightToDay2) {
		res = simNightFirstCombined(FLEETS1[0],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,BAPI,prefinal);
	} else if (mapdata.nightToDay2CF) {
		res = simNightFirst12vs12(CHDATA.fleets.combined,FLEETS1[0],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,BAPI,prefinal);
	} else if (compd.ce) {
		if (CHDATA.fleets.combined) res = sim12vs12(CHDATA.fleets.combined,FLEETS1[0],FLEETS1[1],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleet,prefinal);
		else res = sim6vs12(FLEETS1[0],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleet,prefinal);
	} else {
		if (CHDATA.fleets.combined) res = simCombined(CHDATA.fleets.combined,FLEETS1[0],FLEETS1[1],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleet,prefinal);
		else res = sim(FLEETS1[0],FLEETS2[0],supportfleet1,supportfleet2,LBAS1waves,LBAS2waves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleet,false,prefinal);
	}
	NEWFORMAT = false;
	if (FLEETS2[0].ships[0].debuff) {
		if (NBonly) BAPI.yasen.api_boss_damaged = 1;
		else BAPI.data.api_boss_damaged = 1;
	}
	if (mapdata.nightToDay) {
		if (MAPDATA[WORLD].maps[MAPNUM].dayCheck && !MAPDATA[WORLD].maps[MAPNUM].dayCheck()) {
			
		} else {
			for (var i=0; i<FLEETS1[0].ships.length; i++) {
				let ship = FLEETS1[0].ships[i];
				if (ship.HPprev/ship.maxHP > .25) ship.protection = true;
			}
			res = sim(FLEETS1[0],FLEETS2[0],supportfleet,LBAS1waves,LBAS2waves,false,false,false,false,false,BAPI,true);
			BAPI.yasen.api_n_hougeki1 = BAPI.yasen.api_hougeki;
			delete BAPI.yasen.api_hougeki;
			for (var prop in BAPI.yasen) BAPI.data[prop] = BAPI.yasen[prop];
			BAPI.data.api_day_flag = 2;
			BAPI.yasen = {};
		}
	}
	res.NBonly = NBonly;
	res.landbomb = landbomb;
	res.noammo = compd.noammo;
	res.ambush = ambush;
	res.minefield = mapdata.minefield;
	if (mapdata.overrideCost) res.overrideCost = mapdata.overrideCost;
	if (mapdata.nightToDay2 || mapdata.nightToDay2CF) res.nightToDay2 = true;
	if (landbomb || ambush || mapdata.minefield) {
		res.rank = res.rankDay = getRankRaid(FLEETS1[0].ships,(CHDATA.fleets.combined)? FLEETS1[1].ships : null);
		if (landbomb) delete BAPI.data.api_hougeki1;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].bgTint) {
		BAPI.sim_bgtint = MAPDATA[WORLD].maps[MAPNUM].bgTint;
	}
	return [BAPI,res];
}

function prepMap() {
	if (!MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].end) {
		stage = STAGEMAP;
		eventqueue = []; e = -1;
		chResetMapSpritePos();
		mapPhase(true, true);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function endMap() {
	chReturnSortie();
	ONSORTIE = false;
	
	var cleared = false;
	if (CHDATA.event.maps[MAPNUM].hp <= 0) {
		var partNext = CHDATA.event.maps[MAPNUM].part+1;
		if (MAPDATA[WORLD].maps[MAPNUM].parts && MAPDATA[WORLD].maps[MAPNUM].parts[partNext]) {
			CHDATA.event.maps[MAPNUM].part = partNext;
			mapChangePart(WORLD,MAPNUM,partNext);
			CHDATA.event.maps[MAPNUM].hp = getMapHP(WORLD,MAPNUM,CHDATA.event.maps[MAPNUM].diff);
		} else if (CHDATA.event.unlockedS) {
			if (!CHDATA.event.maps[MAPNUM].clear) {
				CHDATA.event.maps[MAPNUM].clear = 1;
				cleared = true;
				for (let mapnum in MAPDATA[WORLD].maps) {
					if (CHDATA.event.unlockedS.indexOf(+mapnum) != -1) continue;
					if (MAPDATA[WORLD].maps[mapnum].requiresMap && MAPDATA[WORLD].maps[mapnum].requiresMap.every(m => CHDATA.event.maps[m].clear)) {
						CHDATA.event.unlockedS.push(+mapnum);
					}
				}
			}
		} else if (CHDATA.event.unlocked == MAPNUM || (CHDATA.config.unlockAll && !CHDATA.event.maps[MAPNUM].clear)) {
			if (CHDATA.config.unlockAll) CHDATA.event.maps[MAPNUM].clear = 1;
			else CHDATA.event.unlocked++;
			cleared = true;
			if (MAPDATA[WORLD].maps[CHDATA.event.unlocked] && MAPDATA[WORLD].maps[CHDATA.event.unlocked].hpRegenTick) {
				CHHPREGENTIMER.start(CHDATA.event.unlocked);
			}
		}
	}
	
	var endTime = 1500;
	var hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;
	if (hiddenRoutes) {
		var key = checkRouteUnlocks(hiddenRoutes);
		if (key) {
			addTimeout(function() {
				// TODO - hiding mapbar here - is it necessary?
				mapbar.visible = false;
				stage = STAGEMAP;
				chResetMapSpritePos();
				if(hiddenRoutes[key].panTo){
					let xCoord = (hiddenRoutes[key].panTo[0] - 400 <= 0 ? 0 : hiddenRoutes[key].panTo[0] - 400);
					let yCoord = (hiddenRoutes[key].panTo[1] - 240 <= 0 ? 0 : hiddenRoutes[key].panTo[1] - 240);
					panMap((smPannable.x * -1) - xCoord, (smPannable.y * -1) - yCoord);
				}
			},500);
			addTimeout(function() {
				showRouteUnlock(hiddenRoutes[key],key);
			},1500);
			endTime += 5000;
		}
	}
	
	addTimeout(function() {
		$('#battlespace').hide();
		$('#sortiespace').show();
		chLoadSortieInfo(CHDATA.event.mapnum);
		SM.stopBGM();
		ecomplete = true;
		smPannable.x = smPannable.y = 0;
		mapbar.visible = false;
		pushShipStatusToUI();
		chUIRemoveSunk();
		$('#noclick').hide();
		if (cleared) {
			var reward = MAPDATA[WORLD].maps[MAPNUM].reward;
			if (reward) {
				if (reward[3]) reward = reward[CHDATA.event.maps[MAPNUM].diff];
				if (reward.firstOnly || reward.limit) reward = chRestrictReward(reward);
				chAddReward(reward);
				chShowReward(reward);
			}
		}
		
		if (MAPDATA[WORLD].unlockProgressDings && MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes){
			let reqs = MAPDATA[WORLD].maps[MAPNUM].unlockReqs, progressChanged = false;
			if(typeof(CHDATA.event.maps[MAPNUM].debuffStatus) === 'undefined') CHDATA.event.maps[MAPNUM].debuffStatus = {};
			for(let phase in MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes){
				if(typeof(CHDATA.event.maps[MAPNUM].debuffStatus[phase]) === 'undefined'){
					if(typeof(reqs[phase]) === 'undefined' || Object.keys(reqs[phase][CHDATA.event.maps[MAPNUM].diff]).length === 0) CHDATA.event.maps[MAPNUM].debuffStatus[phase] = { complete: true };
					else{
						CHDATA.event.maps[MAPNUM].debuffStatus[phase] = { complete: false };
						for(let req in reqs[phase][CHDATA.event.maps[MAPNUM].diff]){
							CHDATA.event.maps[MAPNUM].debuffStatus[phase][req] = false;
						}
					}
				}
				if(CHDATA.event.maps[MAPNUM].debuffStatus[phase].complete === true) continue;
				let hasFalses = false;
				for(let req in reqs[phase][CHDATA.event.maps[MAPNUM].diff]){
					if(!CHDATA.event.maps[MAPNUM].debuff[req]){ hasFalses = true; continue; }
					if(reqs[phase][CHDATA.event.maps[MAPNUM].diff][req] === CHDATA.event.maps[MAPNUM].debuff[req] && CHDATA.event.maps[MAPNUM].debuffStatus[phase][req] === false){
						CHDATA.event.maps[MAPNUM].debuffStatus[phase][req] = true;
						progressChanged = true;
					}
					if(CHDATA.event.maps[MAPNUM].debuffStatus[phase][req] === false){
						hasFalses = true;
					}
				}
				if(!hasFalses){
					CHDATA.event.maps[MAPNUM].debuffStatus[phase].complete = true;
				}
			}
			if(progressChanged){
				SM.play('done');
				alert('An unlock requirement has been completed!');
			}
		}
		else{
			for (var mapnum in MAPDATA[WORLD].maps) {
				if (mapnum < MAPNUM) continue;
				if (mapnum > CHDATA.event.unlocked) continue;
				if (MAPDATA[WORLD].maps[mapnum].debuffCheck && !CHDATA.event.maps[mapnum].debuffed) {
					if (!CHDATA.event.maps[mapnum].debuff) CHDATA.event.maps[mapnum].debuff = {};
					if (MAPDATA[WORLD].maps[mapnum].debuffCheck(CHDATA.event.maps[mapnum].debuff)) {
						CHDATA.event.maps[mapnum].debuffed = true;
						SM.play('done');
						alert('DEBUFF');
					}
				}
			}
		}
		
		chSave();
	}, endTime);
}

function showRouteUnlock(route,routeId) {
	var sprs = [], sprsRemove = [];
	for (var image of route.images) {
		var spr = PIXI.Sprite.fromImage('assets/maps/'+WORLD+'/'+image.name);
		spr.position.set(image.x,image.y);
		spr.alpha = 0;
		map.addChild(spr);
		sprs.push(spr);
	}
	let skip = [];
	for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
		if (skip.indexOf(letter) != -1) continue;
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		if (node.replacedBy && MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden == routeId) {
			let ind = CHDATA.event.maps[MAPNUM].visited.indexOf(letter);
			if (ind != -1) {
				if (CHDATA.event.maps[MAPNUM].visited.indexOf(node.replacedBy) == -1) CHDATA.event.maps[MAPNUM].visited[ind] = node.replacedBy;
				else CHDATA.event.maps[MAPNUM].visited.splice(ind,1);
			}
			addMapNode(node.replacedBy);
			if (mapnodes[letter]) {
				smPannable.removeChild(mapnodes[letter]); smPannable.addChildAt(mapnodes[letter],smPannable.getChildIndex(mapship));
				sprsRemove.push(mapnodes[letter]);
			}
			skip.push(node.replacedBy);
			continue;
		}
		if (node.hidden == routeId && (node.raid || node.strike || node.aironly || node.night2 || node.nightToDay2 || node.nightToDay2CF || node.ambush || node.minefield) && !node.boss) {
			var spr = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			spr.position.set(node.x,node.y);
			spr.alpha = 0;
			spr.pivot.set(10);
			map.addChild(spr);
			sprs.push(spr);
		}
	}
	updates.push([function() {
		var done = false;
		for (var spr of sprs) {
			spr.alpha += .01;
			if (spr.alpha >= 1) {
				spr.alpha = 1;
				done = true;
			}
		}
		for (var spr of sprsRemove) {
			spr.alpha -= .01;
			if (spr.alpha <= 0) spr.alpha = 0;
		}
		return done;
	},[]]);
}

function shuttersPrebattle() {
	shutterTop2.y = 20; shutterBottom2.y = 230;
	updates.push([function() {
		shutterTop2.y -= 20;
		shutterBottom2.y += 20;
		if (shutterTop2.y <= -246) {
			shutterTop2.y = -246;
			shutterBottom2.y = 456;
			return true;
		}
		return false;
	},[]]);
	SM.play('shuttersopen');
	addTimeout(function() { ecomplete = true; }, 500);
}

function shuttersPostbattle(noshutters) {
	// RATE = 1;
	if (!noshutters) {
		shutterTop.alpha = shutterBottom.alpha = 1;
		updates.push([closeShutters,[]]);
		SM.play('shuttersclose');
	}
	if (bossbar.active) {  //update map hp
		CHDATA.event.maps[MAPNUM].hp = bossbar.nowhp;
		if (bossbar.nowhp <= 0) CHDATA.event.maps[MAPNUM].hp++;  //add 1 if -1 (sunk) or 0 (not sunk)
	}
	if (MAPDATA[WORLD].maps[MAPNUM].transport && CHDATA.sortie.reachedTransport && MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].boss) {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		CHDATA.event.maps[MAPNUM].hp -= transportCalc(chGetShips(true),rank);
		if (CHDATA.event.maps[MAPNUM].hp < 0) CHDATA.event.maps[MAPNUM].hp = 0;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].hpmode == -1 && MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].boss) {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		if (rank == 'S' || rank == 'A' || rank == 'B') CHDATA.event.maps[MAPNUM].hp = 0;
	}
	if (!CHDATA.temp.NBonly && NBSELECT && CHDATA.fleets.ff == 2 && CHDATA.sortie.fleetFriend) {
		CHDATA.event.resources.ibuild = CHDATA.event.resources.ibuild + 6 || 6;
		chUIUpdateResources();
	}
	for (let n=0; n<=1; n++) {
		if (!FLEETS1[n]) continue;
		for (let ship of FLEETS1[n].ships) {
			if (ship.repairs && ship.repairsOrig && ship.repairsOrig.length > ship.repairs.length) {
				let id = ship.repairsOrig.pop();
				let key = id == 43 ? 'damegami' : 'damecon';
				CHDATA.event.resources[key] = CHDATA.event.resources[key] + 1 || 1;
				chUIUpdateItems();
			}
		}
	}
	chUpdateMorale();
	chUpdateSupply();
	pushShipStatusToUI();
	let shipsC = (CHDATA.fleets.combined)? FLEETS1[0].ships.concat(FLEETS1[1].ships) : FLEETS1[0].ships;
	for (let ship of shipsC) { if (ship.HP <= 0) { chRefreshShipCountSortie(); break; } }
	if (CHDATA.temp.rankDay && !CHDATA.temp.NBonly && !NBSELECT) CHDATA.temp.rank = CHDATA.temp.rankDay;
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive) {
		if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
		MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive(FLEETS2,FLEETS1);
	}
	FLEETS1[0].reset(true);
	if (CHDATA.fleets.combined) FLEETS1[1].reset(true);
	CHDATA.temp.done = true;
	addTimeout(function() {
		stage.removeChildren();
		if(MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].backOverrideD) bg = PIXI.Sprite.fromImage('assets/82_res.images.ImgBackgroundDay.jpg');
		if(MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].backOverrideN) bg2 = PIXI.Sprite.fromImage('assets/83_res.images.ImgBackgroundNight.jpg');
		stage.addChild(bg);
		stage.addChild(shutterTop2); stage.addChild(shutterBottom2);
		stage.addChild(shutterTop); stage.addChild(shutterBottom);
		for (var i=0; i<fleet1.length; i++) {
			fleet1[i].shakepid = 0; if (fleet1[i].graphic.pivot) fleet1[i].graphic.pivot.x = 0; // if (fleet1[i].shakepid) clearInterval(fleet1[i].shakepid);
			//for (var j=0; j<fleet1[i].graphic.children.length; j++) fleet1[i].graphic.getChildAt(j).destroy();
			//fleet1[i].graphic.destroy();
		}
		for (var k=0; k<allfleets2.length; k++) {
			for (var i=0; i<allfleets2[k].length; i++) {
				var ship = allfleets2[k][i];
				ship.shakepid = 0; if (ship.graphic.pivot) ship.graphic.pivot.x = 0;// if (ship.shakepid) clearInterval(ship.shakepid);
				// for (var j=0; j<ship.graphic.children.length; j++) ship.graphic.getChildAt(j).destroy();
				// ship.graphic.destroy();
			}
		}
		fleetFriend = null;
		allfleets2 = [];
		while (dots1.children.length) recycle(dots1.getChildAt(0));
		while (dots2.children.length) recycle(dots2.getChildAt(0));
		$('#plEngage').text('');
		$('#plEngageT').text('');
		$('#plAS1').text('');
		$('#plAS2').text('');
		
		shutterTop2.y = 0; shutterBottom2.y = 210;
	}, 500);
	
	// addTimeout(function() {
		// updates.push([function() {
			// shutterTop.alpha-=.1;
			// shutterBottom.alpha-=.1;
			// return (shutterTop.alpha <= 0);
		// },[]]);
	// }, 1000);
	
	// addTimeout(function() { ecomplete = true; }, 1166);
	addTimeout(function() { ecomplete = true; }, 600);
}

function ResultBar(x,y,color) {
	this.g = new PIXI.Container();
	this.barBack = new PIXI.Graphics();
	this.barBack.beginFill(0xffffff);
	this.barBack.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.barBack);
	this.mask = new PIXI.Graphics();
	this.mask.beginFill(0x000000);
	this.mask.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.mask);
	this.barFront = new PIXI.Graphics();
	this.barFront.beginFill(color);
	this.barFront.drawRoundedRect(x-240,y,240,12,7);
	this.barFront.mask = this.mask;
	this.g.addChild(this.barFront);
}
var resultBar1 = new ResultBar(93,163,0x00ff00);
var resultBar2 = new ResultBar(414,163,0xff0000);

function showResults() {
	var resultback = getFromPool('resultback','assets/maps/resultback.png');
	resultback.y = resultback.pivot.y = 240;
	resultback.scale.y = 0;
	stage.addChild(resultback);
	updates.push([function() {
		resultback.scale.y += .05;
		if (resultback.scale.y >= 1) {
			resultback.scale.y = 1;
			return true;
		}
	},[]]);
	
	let offset = (fleet1.length >= 7)? -45*(fleet1.length-6)+20 : 0;
	
	for (let i=0; i<fleet1.length; i++) {
		fleet1[i].graphic.position.set(232,186+45*i+20+offset);
		fleet1[i].graphic.alpha = 0;
		fleet1[i].graphic.getChildAt(0).visible = false;
		fleet1[i].graphic.getChildAt(1).visible = false;
		fleet1[i].graphic.getChildAt(3).visible = false;
		fleet1[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet1[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet1[i].graphic.y -= 2;
				fleet1[i].graphic.alpha += .1;
				if (fleet1[i].graphic.alpha >= 1) {
					fleet1[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100);
	}
	for (let i=0; i<fleet2.length; i++) {
		fleet2[i].graphic.position.set(409,186+45*i+20+offset);
		fleet2[i].graphic.alpha = 0;
		fleet2[i].graphic.getChildAt(0).visible = false;
		fleet2[i].graphic.getChildAt(1).visible = false;
		fleet2[i].graphic.getChildAt(3).visible = false;
		fleet2[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet2[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet2[i].graphic.y -= 2;
				fleet2[i].graphic.alpha += .1;
				if (fleet2[i].graphic.alpha >= 1) {
					fleet2[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100+300);
	}
	
	let max1 = 0, max2 = 0, now1 = 0, now2 = 0;
	for (let ship of FLEETS1[0].ships) {
		now1 += Math.max(0,ship.HP);
		max1 += Math.max(0,ship.HPprev);
	}
	if (CHDATA.fleets.combined) {
		for (let ship of FLEETS1[1].ships) {
			now1 += Math.max(0,ship.HP);
			max1 += Math.max(0,ship.HPprev);
		}
	}
	for (var i=0; i<fleet2.length; i++) {
		now2 += Math.max(0,fleet2[i].hp);
		max2 += Math.max(0,fleet2[i].hpmax);
	}
	var hptarget1 = 1-(now2/max2), hptarget2 = 1-(now1/max1);
	resultBar1.g.alpha = 0;
	resultBar1.g.x = -20;
	resultBar1.g.y = offset;
	resultBar1.barFront.x = 0;
	resultBar1.timer = 0;
	stage.addChild(resultBar1.g);
	updates.push([function() {
		if (resultBar1.g.x < 0) { resultBar1.g.x += 2; resultBar1.g.alpha += .1; }
		else resultBar1.g.alpha = 1;
		resultBar1.barFront.x = 240*hptarget1*resultBar1.timer/50;
		return (++resultBar1.timer > 50);
	},[]]);
	resultBar2.g.alpha = 0;
	resultBar2.g.x = 20;
	resultBar2.g.y = offset;
	resultBar2.barFront.x = 0;
	resultBar2.timer = 0;
	stage.addChild(resultBar2.g);
	updates.push([function() {
		if (resultBar2.g.x > 0) { resultBar2.g.x -= 2; resultBar2.g.alpha += .1; }
		else resultBar2.g.alpha = 1;
		resultBar2.barFront.x = 240*hptarget2*resultBar2.timer/50;
		return (++resultBar2.timer > 50);
	},[]]);
	
	addTimeout(function() {
		updates.push([function() {
			resultBar2.g.x += 20;
			for (let ship of fleet2) ship.graphic.x += 20;
			return (resultBar2.g.x >= 500);
		},[]]);
	},1300);
	
	var cleared = CHDATA.event.unlocked == MAPNUM
		&& CHDATA.event.maps[MAPNUM].hp <= 0
		&& (!MAPDATA[WORLD].maps[MAPNUM].parts || !MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part+1])
		&& !CHDATA.event.maps[MAPNUM].clear;
	var rlaurel;
	addTimeout(function() {
		rlaurel = getFromPool('resultlaurel','assets/maps/resultlaurel.png');
		rlaurel.pivot.set(121,121);
		rlaurel.position.set(592,240);
		rlaurel.alpha = 0;
		rlaurel.scale.set(2);
		stage.addChild(rlaurel);
		updates.push([function() {
			rlaurel.alpha += .05;
			rlaurel.scale.set(rlaurel.scale.x-.05);
			if (rlaurel.alpha >= 1) {
				rlaurel.alpha = 1;
				rlaurel.scale.set(1);
				return true;
			}
		},[]]);
		if (cleared) {
			if (MAPDATA[WORLD].maps[MAPNUM].clearSpecial) MAPDATA[WORLD].maps[MAPNUM].clearSpecial();
			else SM.play('ooyodoClear');
		}
	}, 1700);
	
	var rgraphic, mvpicon;
	addTimeout(function() {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		CHDATA.temp.rankT = rank;
		var rsize;
		switch(rank) {
			case 'S':
				rsize = 240;
				rgraphic = getFromPool('rankS','assets/maps/rankS.png');
				SM.playBGM(3001,null,true);
				break;
			case 'A':
				rsize = 140
				rgraphic = getFromPool('rankA','assets/maps/rankA.png');
				SM.playBGM(3002,null,true);
				break;
			case 'B':
				rsize = 140;
				rgraphic = getFromPool('rankB','assets/maps/rankB.png');
				SM.playBGM(3003,null,true);
				break;
			case 'C':
				rsize = 140;
				rgraphic = getFromPool('rankC','assets/maps/rankC.png');
				SM.playBGM(3004,null,true);
				break;
			case 'D':
				rsize = 140;
				rgraphic = getFromPool('rankD','assets/maps/rankD.png');
				SM.playBGM(3004,null,true);
				break;
			case 'E':
				rsize = 140;
				rgraphic = getFromPool('rankE','assets/maps/rankE.png');
				SM.playBGM(3004,null,true);
				break;
		}
		rgraphic.position.set(592,238);
		rgraphic.pivot.set(121,121);
		rgraphic.size = rsize+300;
		rgraphic.scale.set(rgraphic.size/242);
		rgraphic.alpha = 0;
		stage.addChild(rgraphic);
		updates.push([function() {
			rgraphic.alpha = Math.min(1,rgraphic.alpha+.05);
			rgraphic.size -= 15;
			rgraphic.scale.set(rgraphic.size/242);
			return (rgraphic.size <= rsize);
		},[]]);
		
		var mvpindex = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.mvpDay : CHDATA.temp.MVP;
		mvpicon = getFromPool('mvp','assets/stats/MVP.png');
		mvpicon.alpha = 0;
		mvpicon.position.set(400,191+45*mvpindex+offset);
		stage.addChild(mvpicon);
		updates.push([function() {
			mvpicon.alpha += .025;
			if (mvpicon.alpha >= 1) {
				mvpicon.alpha = 1;
				return true;
			}
		},[]]);
		
	},2000);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			recycle(resultback);
			stage.removeChild(resultBar1.g);
			stage.removeChild(resultBar2.g);
			recycle(rgraphic);
			recycle(mvpicon);
			recycle(rlaurel);
			for (let ship of fleet1) stage.removeChild(ship.graphic);
			for (let ship of fleet2) stage.removeChild(ship.graphic);
			if (CHDATA.fleets.combined) for (let ship of fleet1C) stage.removeChild(ship.graphic);
			addTimeout(function() {
				updates.push([function() {
					shutterTop.alpha-=.1;
					shutterBottom.alpha-=.1;
					return (shutterTop.alpha <= 0);
				},[]]);
			}, 100);
			addTimeout(function() { SM.fadeBGM(); ecomplete = true; }, 266);
		}
	},2000);
}

function FCFSelect() {
	var retreater, escorter;
	if (CHDATA.fleets.sf) {
		if (FLEETS1[0].ships[0].hasFCF == 272 && FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP > .25) {
			for (let ship of FLEETS1[0].ships) {
				if (ship.HP/ship.maxHP <= .25 && ship.HP > 0 && !ship.retreated) {
					retreater = ship; break;
				}
			}
		}
		if (!retreater) {
			addTimeout(function() { ecomplete = true; }, 1);
			return;
		}
	} else if (CHDATA.fleets.combined) {
		if (FLEETS1[0].ships[0].hasFCF == 107 && FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP > .25) {
			var d = getFCFShips(FLEETS1[0].ships,FLEETS1[1].ships);
			retreater = d[0]; escorter = d[1];
		}
		if (!(retreater && escorter)) {
			addTimeout(function() { ecomplete = true; }, 1);
			return;
		}
	}
	
	stage.addChild(mapFCFyesbutton[1]);
	stage.addChild(mapFCFyesbutton[0]);
	stage.addChild(mapFCFnobutton[1]);
	stage.addChild(mapFCFnobutton[0]);
	mapFCFyesbutton[0].position.set(201,301); 
	mapFCFyesbutton[1].position.set(201,301); 
	mapFCFnobutton[0].position.set(419,301); 
	mapFCFnobutton[1].position.set(419,301);
	mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = true;
	
	var retreaterG = (retreater.isescort)? fleet1C[retreater.id].graphic : fleet1[retreater.id].graphic;
	var escorterG;
	stage.removeChild(retreaterG); stage.addChild(retreaterG);
	retreaterG.position.set(230,180);
	retreaterG.removeChild(retreaterG.mask);
	retreaterG.mask = null;
	if (escorter) {
		escorterG = (escorter.isescort)? fleet1C[escorter.id].graphic : fleet1[escorter.id].graphic;
		stage.removeChild(escorterG); stage.addChild(escorterG);
		escorterG.position.set(230,230);
		escorterG.removeChild(escorterG.mask);
		escorterG.mask = null;
	}
	
	var afterSelect = function() {
		if (FCFSELECT) {
			retreater.retreated = true;
			retreater.morale = 0;
			retreater.fuelleft = 0;
			if (CHDATA.fleets.sf) retreater.HP = Math.max(1,retreater.HP-Math.floor(.2*retreater.maxHP));
			if (escorter) {
				escorter.retreated = true;
				escorter.morale = 0;
				escorter.fuelleft = 0;
			}
			chRefreshShipCountSortie();
		}
	
		mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = false;
		mapFCFyesbutton[0].alpha = mapFCFnobutton[0].alpha = 1;
		mapFCFyesbutton[1].alpha = mapFCFnobutton[1].alpha = 0;
		updates.push([function() {
			mapFCFyesbutton[0].x -= 15;
			mapFCFnobutton[0].x += 15;
			if (retreaterG.alpha > 0) retreaterG.alpha -= .05;
			if (escorter && escorterG.alpha > 0) escorterG.alpha -= .05;
			return (mapFCFnobutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapFCFyesbutton[0]); stage.removeChild(mapFCFyesbutton[1]); 
			stage.removeChild(mapFCFnobutton[0]); stage.removeChild(mapFCFnobutton[1]); 
			stage.removeChild(retreaterG);
			if (escorter) stage.removeChild(escorterG); 
		}, 500);
	};
	
	mapFCFyesbutton[0].callback = mapFCFnobutton[0].callback = afterSelect;
}

function continueSelect() {
	if (FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP <= .25 && !MAPDATA[WORLD].noForceFlagRetreat) {
		if (!FLEETS1[0].ships[0].repairs || !FLEETS1[0].ships[0].repairs.length) {
			eventqueue.push([endMap,[]]);
			addTimeout(function() { ecomplete = true; }, 1);
			return;
		}
	}
	
	stage.addChild(mapcontinuebutton[1]);
	stage.addChild(mapcontinuebutton[0]);
	stage.addChild(mapretreatbutton[1]);
	stage.addChild(mapretreatbutton[0]);
	mapcontinuebutton[0].position.set(201,162); 
	mapcontinuebutton[1].position.set(201,162); 
	mapretreatbutton[0].position.set(412,161); 
	mapretreatbutton[1].position.set(412,161);
	var afterSelect = function() {
		if (CONTINUESELECT) eventqueue.push([prepMap,[]]);
		else eventqueue.push([endMap,[]]);
	
		mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = false;
		mapcontinuebutton[0].alpha = mapretreatbutton[0].alpha = 1;
		mapcontinuebutton[1].alpha = mapretreatbutton[1].alpha = 0;
		updates.push([function() {
			mapcontinuebutton[0].x -= 15;
			mapretreatbutton[0].x += 15;
			return (mapretreatbutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapcontinuebutton[0]); stage.removeChild(mapcontinuebutton[1]); 
			stage.removeChild(mapretreatbutton[0]); stage.removeChild(mapretreatbutton[1]);
			mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = true;
		}, 500);
	};
	
	mapcontinuebutton[0].callback = mapretreatbutton[0].callback = afterSelect;
}

function shuttersSelect() {
	shutterTop.alpha = shutterBottom.alpha = 1;
	updates.push([closeShutters,[]]);
	SM.play('shuttersclose');
	
	mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
	mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
	mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
	
	addTimeout(function() {
		stage.addChild(mapNBnobutton[0]); stage.addChild(mapNBnobutton[1]); 
		stage.addChild(mapNByesbutton[0]); stage.addChild(mapNByesbutton[1]);
		stage.removeChild(bg);
		stage.addChildAt(bg2,0);
	}, 500);
	
	var afterNBSelect = function() {
		mapNBnobutton[0].interactive = mapNByesbutton[0].interactive = false;
		mapNBnobutton[0].alpha = mapNByesbutton[0].alpha = 1;
		mapNBnobutton[1].alpha = mapNByesbutton[1].alpha = 0;
		updates.push([function() {
			mapNBnobutton[0].x -= 15;
			mapNByesbutton[0].x += 15;
			return (mapNByesbutton[0].x >= 800);
		},[]]);
		if (NBSELECT==1) {
			addTimeout(function() {
				updates.push([openShutters,[]]);
				SM.play('shuttersopen');
			}, 700);
			addTimeout(function(){ ecomplete = true; }, 1700);
		} else {
			rollBackNightBattle();
			for (; e < eventqueue.length; e++) {
				if (eventqueue[e][0] == shuttersPostbattle) { eventqueue[e][1] = [true]; break; }
			}
			SM.fadeBGM();
			addTimeout(function(){
				mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
				stage.removeChild(mapNBnobutton[0]); stage.removeChild(mapNBnobutton[1]); 
				stage.removeChild(mapNByesbutton[0]); stage.removeChild(mapNByesbutton[1]);
				ecomplete = true;
			}, 1000);
		}
	};
	
	mapNBnobutton[0].callback = afterNBSelect;
	mapNByesbutton[0].callback = afterNBSelect;
}

function rollBackNightBattle() {
	for (var i=0; i<fleet1.length; i++) { //roll back HP to pre-NB
		FLEETS1[0].ships[i].HP = fleet1[i].hp;
		if (FLEETS1[0].ships[i].HP/FLEETS1[0].ships[i].maxHP > .25) FLEETS1[0].ships[i].protection = true;
		if (FLEETS1[0].ships[i].repairs) FLEETS1[0].ships[i].repairs = CHDATA.temp.repairsDay[i].slice();
	}
	for (var i=0; i<fleet1C.length; i++) {
		FLEETS1[1].ships[i].HP = fleet1C[i].hp;
		if (FLEETS1[1].ships[i].HP/FLEETS1[1].ships[i].maxHP > .25) FLEETS1[1].ships[i].protection = true;
		if (FLEETS1[1].ships[i].repairs) FLEETS1[1].ships[i].repairs = CHDATA.temp.repairsDayC[i].slice();
	}
}

function chUIRemoveSunk() {
	var found = false;
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		var sid = CHDATA.fleets[1][i];
		if (!sid) continue;
		var ship = CHDATA.ships[sid];
		if (ship.HP[0] <= 0) {
			ship.disabled = true;
			for (var j=0; j<ship.items.length; j++) {
				if (ship.items[j] == -1) continue;
				CHDATA.gears['x'+ship.items[j]].disabled = true;
			}
			chTableRemoveShip(1,i+1);
			found = true;
		}
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			var sid = CHDATA.fleets[2][i];
			if (!sid) continue;
			var ship = CHDATA.ships[sid];
			if (ship.HP[0] <= 0) {
				ship.disabled = true;
				for (var j=0; j<ship.items.length; j++) {
					if (ship.items[j] == -1) continue;
					CHDATA.gears['x'+ship.items[j]].disabled = true;
				}
				chTableRemoveShip(2,i+1);
				found = true;
			}
		}
	}
	if (found) {
		DIALOGSORT = null;
		chFillDialogShip(1);
	}
}

function pushShipStatusToUI() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		chPushHP(1,i+1,FLEETS1[0].ships[i].HP);
		chPushResupply(1,i+1,FLEETS1[0].ships[i].fuelleft,FLEETS1[0].ships[i].ammoleft,FLEETS1[0].ships[i].planecount);
		chPushMorale(1,i+1,FLEETS1[0].ships[i].morale);
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			chPushHP(2,i+1,FLEETS1[1].ships[i].HP);
			chPushResupply(2,i+1,FLEETS1[1].ships[i].fuelleft,FLEETS1[1].ships[i].ammoleft,FLEETS1[1].ships[i].planecount);
			chPushMorale(2,i+1,FLEETS1[1].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			chPushResupply(3,i+1,FLEETS1S[0].ships[i].fuelleft,FLEETS1S[0].ships[i].ammoleft,FLEETS1S[0].ships[i].planecount);
			chPushMorale(3,i+1,FLEETS1S[0].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			chPushResupply(4,i+1,FLEETS1S[1].ships[i].fuelleft,FLEETS1S[1].ships[i].ammoleft,FLEETS1S[1].ships[i].planecount);
			chPushMorale(4,i+1,FLEETS1S[1].ships[i].morale);
		}
	}
	for (var i=1; i<=LBAS1.length; i++) {
		if(LBAS1[i-1].pos < 0) continue;
		if (CHDATA.fleets['lbas'+i] && LBAS1[i-1]) {
			chPushResupply(5,LBAS1[i-1].pos,0,0,LBAS1[i-1].planecount,true);
		}
	}
}

function chUpdateMorale() {
	var results = CHDATA.temp;
	var rank = (!results.NBonly && !NBSELECT)? results.rankDay : results.rank;
	var mvp = (!results.NBonly && !NBSELECT)? results.mvpDay : results.MVP;
	var didNB = (!results.NBonly && NBSELECT);
	if (!CHDATA.fleets.combined) {
		updateMorale(FLEETS1[0].ships,rank,mvp,results.NBonly,didNB);
	} else {
		var mvpc = (!results.NBonly && !NBSELECT)? results.mvpDayC : results.MVPC;
		console.log('ESCORT MVP: '+mvpc);
		updateMorale(FLEETS1[0].ships,rank,((didNB)? 0 : mvp),results.NBonly,didNB);
		updateMorale(FLEETS1[1].ships,rank,mvpc,results.NBonly,didNB);
	}
}

function cleanNumber(num) {
	let r = 100;
	if (Math.abs(num*r - Math.round(num*r)) < .01) {
		return Math.round(num*r)/r;
	}
	return num;
}

function chUpdateSupply() {
	var results = CHDATA.temp;
	var baseF = (results.landbomb)? .08 : .2;
	var baseA = (results.landbomb)? .04 : .2;
	if (MAPDATA[WORLD].newResupplyCosts) {
		if (results.overrideCost) {
			baseF = results.overrideCost.fuel;
			baseA = results.overrideCost.ammo;
		} else if (results.landbomb) {
			baseF = .06;
		} else if (results.noammo) {
			baseF = .08;
		} else if (results.NBonly) {
			baseF = .1;
			baseA = .1;
		} else if (results.ambush || results.ambushN || results.minefield) {
			baseF = .04;
			results.noammo = true;
		}
	}
	console.log(baseF + ' ' + baseA);
	var didNB = (results.rankDay && NBSELECT) || results.nightToDay2;
	
	let costSpecial = null, shipsSpecial = null, isECombined = !!FLEETS2[0].combinedWith && !results.nightToDay2;
	if (FLEETS1[0].didSpecial == 1) {
		let attackSpecial = FLEETS1[0].ships[0].attackSpecial;
		if (attackSpecial == 101 || attackSpecial == 102) costSpecial = 1.5;
		else if (attackSpecial == 104) costSpecial = 1.3;
		if (costSpecial) shipsSpecial = getSpecialAttackShips(FLEETS1[0].ships,attackSpecial);
		FLEETS1[0].didSpecial = 2;
	}
	
	let num = (CHDATA.fleets.combined)? 2 : 1;
	for (let n=0; n<num; n++) {
		for (var i=0; i<FLEETS1[n].ships.length; i++) {
			var ship = FLEETS1[n].ships[i];
			if (ship.retreated) continue;
			ship.fuelleft -= 10*Math.floor(Math.max(1,baseF*ship.fuel))/ship.fuel;
			if (!results.noammo) {
				let subAmmo = Math.floor(Math.max(1,baseA*ship.ammo));
				if (didNB && !isECombined) subAmmo += Math.ceil(ship.ammo*baseA/2);
				if (costSpecial && shipsSpecial.indexOf(ship) != -1 && (!isECombined || !didNB)) subAmmo = Math.floor(subAmmo*costSpecial);
				ship.ammoleft -= 10*subAmmo/ship.ammo;
			}
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.fuelleft = cleanNumber(ship.fuelleft);
			ship.ammoleft = cleanNumber(ship.ammoleft);
			console.log(ship.name + ' ' + ship.fuelleft + ' ' + ship.ammoleft + ' ' + ship.fuel + ' ' + ship.ammo);
		}
	}
}

function chReturnSortie() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		if (!FLEETS1[0].supportType) FLEETS1[0].ships[i].morale -= 15;
		if (FLEETS1[0].ships[i].morale < 49) FLEETS1[0].ships[i].morale = 49;
	}
	if (CHDATA.fleets.combined && FLEETS1[1]) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			if (!FLEETS1[1].supportType) FLEETS1[1].ships[i].morale -= 15;
			if (FLEETS1[1].ships[i].morale < 49) FLEETS1[1].ships[i].morale = 49;
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		var moralecost = 1 + Math.floor(5*Math.random());
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			var ship = FLEETS1S[0].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[0].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		var moralecost = 1 + Math.floor(10*Math.random());
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			var ship = FLEETS1S[1].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[1].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
}

function chUIUpdateResources() {
	if (!CHDATA.event.resources) return;
	$('#resfuel').text(CHDATA.event.resources.fuel);
	$('#resammo').text(CHDATA.event.resources.ammo);
	$('#ressteel').text(CHDATA.event.resources.steel);
	$('#resbaux').text(CHDATA.event.resources.baux);
	$('#resbucket').text(CHDATA.event.resources.bucket || 0);
	$('#resibuild').text(CHDATA.event.resources.ibuild || 0);
}

function chUIUpdateItems() {
	$('#resDamecon').text(CHDATA.event.resources.damecon || 0);
	$('#resDamegami').text(CHDATA.event.resources.damegami || 0);
	$('#resRation').text(CHDATA.event.resources.ration || 0);
	$('#resSupply').text(CHDATA.event.resources.supply || 0);
	$('#resRepair').text(CHDATA.event.resources.repair || 0);
	
	let costs = {
		'damecon': 200,
		'damegami': 500,
		'ration': 100,
		'supply': 150,
		'repair': 200,
	};
	let yen = 0;
	for (let key in costs) yen += (CHDATA.event.resources[key] || 0) * costs[key];
	$('#resourcespace2').attr('title','\u00a5'+yen);
}

function chApplySortieItems() {
	let result = { supply: false, ration: false };
	var num = (CHDATA.fleets.combined)? 2 : 1;
	var numOil = 0;
	for (var n=0; n<num; n++) {
		for (var i=0; i<FLEETS1[n].ships.length; i++) {
			var ship = FLEETS1[n].ships[i], hasRation = false;
			for (var equip of ship.equips) {
				if (equip.type == RATION) hasRation = true;
				if (equip.type == OILDRUM) numOil++;
			}
			if (hasRation) {
				ship.morale = Math.min(ship.morale+15,100);
				if (i > 0) FLEETS1[n].ships[i-1].morale = Math.min(FLEETS1[n].ships[i-1].morale+10,100);
				if (i < FLEETS1[n].ships.length-1) FLEETS1[n].ships[i+1].morale = Math.min(FLEETS1[n].ships[i+1].morale+10,100);
				result.ration = true;
				CHDATA.event.resources.ration = CHDATA.event.resources.ration + 1 || 1;
			}
		}
	}
	numOil = Math.min(3,numOil);
	if (numOil) {
		var amount = (CHDATA.fleets.combined)? .15 + .125*(numOil-1) : .25 + .11*(numOil-1);
		for (var n=0; n<num; n++) {
			for (var ship of FLEETS1[n].ships) {
				let fuel = 10*Math.floor(amount*ship.fuel)/ship.fuel;
				let ammo = 10*Math.floor(amount*ship.ammo)/ship.ammo;
				ship.fuelleft = Math.min(cleanNumber(ship.fuelleft + fuel), 10);
				ship.ammoleft = Math.min(cleanNumber(ship.ammoleft + ammo), 10);
				CHDATA.event.resources.fuel += Math.floor(amount*ship.fuel);
				CHDATA.event.resources.ammo += Math.floor(amount*ship.ammo);
			}
		}
		result.supply = true;
		CHDATA.event.resources.supply = CHDATA.event.resources.supply + numOil || numOil;
	}
	if (result.supply || result.ration) {
		pushShipStatusToUI();
		chUIUpdateResources();
		chUIUpdateItems();
	}
	return result;
}

function chGetShips(noRetreated) {
	var ships = [];
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		if (!CHDATA.fleets[1][i]) continue;
		if (noRetreated && FLEETS1[0].ships[i].retreated) continue;
		ships.push(CHDATA.ships[CHDATA.fleets[1][i]]);
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			if (!CHDATA.fleets[2][i]) continue;
			if (noRetreated && FLEETS1[1].ships[i].retreated) continue;
			ships.push(CHDATA.ships[CHDATA.fleets[2][i]]);
		}
	}
	return ships;
}


function getRankRaid(shipsF,shipsFC) {
	let ships = (shipsFC)? shipsF.concat(shipsFC) : shipsF;
	let hpNow = 0, hpPrev = 0;
	for (let ship of ships) {
		if (ship.retreated || ship.HP <= 0) continue;
		hpPrev += ship.HPprev;
		hpNow += ship.HP;
	}
	if (hpNow == hpPrev) return 'S';
	if (hpNow/hpPrev > .9) return 'A';
	if (hpNow/hpPrev > .8) return 'B';
	if (hpNow/hpPrev > .5) return 'C';
	return 'D';
}

function getLBASRange(ship) {
	if (MAPDATA[WORLD].lbasRangeMax) {
		var rangeMax = 0;
		for (var i=0; i<ship.items.length; i++) {
			if (ship.items[i] <= -1) continue;
			var eq = CHDATA.gears['x'+ship.items[i]];
			if (LBASDATA[eq.masterId].distance > rangeMax) rangeMax = LBASDATA[eq.masterId].distance;
		}
		return rangeMax;
	}
	var rangeMin = 9999, rangeScout = 0;
	for (var i=0; i<ship.items.length; i++) {
		if (ship.items[i] <= -1) continue;
		var eq = CHDATA.gears['x'+ship.items[i]];
		if (LBASDATA[eq.masterId].distance < rangeMin) rangeMin = LBASDATA[eq.masterId].distance;
		if (EQDATA[eq.masterId].type == SEAPLANE || EQDATA[eq.masterId].type == CARRIERSCOUT || EQDATA[eq.masterId].type == FLYINGBOAT || EQDATA[eq.masterId].type == LANDSCOUT) {
			rangeScout = Math.max(rangeScout,LBASDATA[eq.masterId].distance);
		}
	}
	if (rangeScout > rangeMin) rangeMin += Math.min(3,Math.round(Math.sqrt(rangeScout-rangeMin)));
	if (rangeMin == 9999) return 0;
	return rangeMin;
}

function getELoS33(fleet,coef,includeCombined) {
	coef = coef || 1;
	var los = 0;
	var ships = CHDATA.fleets[fleet].slice();
	if (includeCombined) ships = ships.concat(CHDATA.fleets[2]);
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		var shiplos = ship.LOS;
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			
			if (eqd.LOS) {
				var mod;
				switch(eqd.type) {
					default: mod = .6; break;
					case TORPBOMBER: mod = .8; break;
					case CARRIERSCOUT: mod = 1; break;
					case SEAPLANEBOMBER: mod = 1.1; break;
					case SEAPLANE: mod = 1.2; break;
				}
				var bonus = 0;
				var impr = (chAllowImprovement(eq.masterId) && eq.stars>0)? eq.stars : 0;
				if (impr && EQTDATA[eqd.type].improve && EQTDATA[eqd.type].improve.LOS) {
					bonus = Math.sqrt(impr)*EQTDATA[eqd.type].improve.LOS;
				}
				los += coef * mod * (eqd.LOS+bonus);
				shiplos -= eqd.LOS;
			}
		}
		los += Math.sqrt(shiplos);
	}
	los -= Math.ceil(CHDATA.player.level*.4);
	los += 2*(6-ships.length);
	return los;
}

function checkELoS33(los,routeMap) {
	var nextletter = null;
	var LOSs = Object.keys(routeMap).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
	if (los >= LOSs[0] || LOSs.length == 1) {
		nextletter = routeMap[LOSs[0]];
	} else {
		for (var i=0; i<LOSs.length-1; i++) {
			if (los < LOSs[i+1]) continue;
			var diff1 = los - LOSs[i+1], diff2 = LOSs[i] - LOSs[i+1];
			if (Math.random() < diff1/diff2) {
				nextletter = routeMap[LOSs[i]];
			} else {
				nextletter = routeMap[LOSs[i+1]];
			}
			break;
		}
		if (!nextletter) nextletter = routeMap[LOSs[LOSs.length-1]];
	}
	return nextletter;
}
function testGetLoSOld(fleetnum,includeCombined) {
	var los = 0;
	var ships = CHDATA.fleets[fleetnum].slice();
	if (includeCombined) ships = ships.concat(CHDATA.fleets[2]);
	var shiplos = 0;
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		shiplos += ship.LOS;
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			
			if (eqd.LOS) {
				var mod;
				switch(eqd.type) {
					default: mod = 0; break;
					case RADARS: mod = 1; break;
					case RADARL: mod = 1; break;
					case CARRIERSCOUT: mod = 2; break;
					case SEAPLANEBOMBER: mod = 2; break;
					case SEAPLANE: mod = 2; break;
				}
				los += mod * eqd.LOS;
				shiplos -= eqd.LOS;
			}
		}
	}
	los += Math.sqrt(shiplos);
	return los;
}


function checkRouteUnlocks(hiddenRoutes,peekOnly) {
	if (!CHDATA.event.maps[MAPNUM].routes) CHDATA.event.maps[MAPNUM].routes = [];
	for (var key in hiddenRoutes) {
		key = parseInt(key);
		if (CHDATA.event.maps[MAPNUM].routes.indexOf(key) != -1) continue; 
		if (hiddenRoutes[key].unlock(CHDATA.event.maps[MAPNUM].debuff)) {
			if (!peekOnly) CHDATA.event.maps[MAPNUM].routes.push(key);
			return key;
		}
	}
	return null;
}

//-----------------
function mapEnemyRaid() {
	SM.play('siren');
	addTimeout(function() {
		updates.push([function() {
			mapShutterTop.alpha += .025;
			mapShutterBottom.alpha += .025;
			map.alpha -= .025;
			bottombar.alpha -= .025;
			bcompass.alpha -= .025;
			bneedle.alpha -= .025;
			mapship.alpha -= .025;
			mapbar.alpha -= .025;
			bcompass.x -= 4;
			bneedle.x -= 4;
			bcompass.rotation -= .05;
			bottombar.y += 2;
			for (var lettr in mapnodes) mapnodes[lettr].alpha -= .025;
			return (map.alpha <= 0);
		},[]]);
		SM.fadeBGM();
		
	}, 2000);
	
	addTimeout(function() { ecomplete = true; }, 3500);
}

function doSimEnemyRaid(numLB,compd,forceHA) {
	var CHAPI = {battles:[],fleetnum:1,support1:3,support2:4,source:2,world:WORLD,mapnum:MAPNUM};
	var BAPI = {data:{},yasen:{},mvp:[],rating:'',node:'AB'};
	
	var fleetLB = new Fleet(0);
	var lbShips = [];
	for (var i=0; i<numLB; i++) {
		LBAS1[i].AS = 0;
		var ship;
		if(LBAS1[i].pos > 0){
			ship = new Ship(5000+LBAS1[i].pos,'',0,1,LBAS1[i].maxHP,0,0,0,LBAS1[i].AR,45,0,0,0,0,[]);
		}
		else{
			ship = new Ship(5500+(LBAS1[i].pos*-1),'',0,1,LBAS1[i].maxHP,0,0,0,LBAS1[i].AR,45,0,0,0,0,[]);
		}
		ship.HP = LBAS1[i].HP;
		ship.protection = true;
		if (!CHDATA.fleets['lbas'+(i+1)] && LBAS1[i].equips.length) ship.lbas = LBAS1[i];
		lbShips.push(ship);
	}
	fleetLB.loadShips(lbShips);
	fleetLB.formation = LINEAHEAD;
	
	var fleetE = new Fleet(1);
	var shipsE = [];
	for (var i=0; i<compd[0].c.length; i++) {
		shipsE.push(createDefaultShip(compd[0].c[i]));
	}
	fleetE.loadShips(shipsE);
	fleetE.formation = ALLFORMATIONS[compd[0].f];
	if (forceHA) fleetE.highAltitude = true;
	
	simLBRaid(fleetLB,fleetE,BAPI);
	
	let totalHPLost = 0, airState = 0;
	for (let i=0; i<fleetLB.ships.length; i++) {
		let hpLost = LBAS1[i].HP - fleetLB.ships[i].HP;
		totalHPLost += hpLost;
		if (LBAS1[i].AS != 0) airState = LBAS1[i].AS;
		if (hpLost >= 50 && CHDATA.fleets['lbas'+(i+1)]) {
			if (!LBAS1[i].planecount.length) continue;
			let slot = 0; while (slot < LBAS1[i].planecount.length && LBAS1[i].planecount[slot] <= 0) slot++;
			let planesLost = 1+Math.floor(Math.random()*.2*LBAS1[i].PLANESLOTS[slot]);
			LBAS1[i].planecount[slot] -= planesLost;
			if (LBAS1[i].planecount[slot] <= 0) LBAS1[i].planecount[slot] = 0;
			chPushResupply(5,i+1,0,0,LBAS1[i].planecount);
		}
		LBAS1[i].HP = fleetLB.ships[i].HP;
	}
	let resourceLost = Math.floor(.9*totalHPLost + .1);
	if (Math.random() < .5) {
		CHDATA.event.resources.fuel += resourceLost;
	} else {
		CHDATA.event.resources.baux += resourceLost;
	}
	chUIUpdateResources();
	
	let raidPass;
	if (MAPDATA[WORLD].maps[MAPNUM].enemyRaid.debuffGive) {
		if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
		raidPass = MAPDATA[WORLD].maps[MAPNUM].enemyRaid.debuffGive(airState,totalHPLost);
		if(typeof(raidPass) === 'undefined') raidPass = true;
	}
	
	CHAPI.raidPass = raidPass;
	CHAPI.battles.push(BAPI);
	CHAPI.fleet1 = [];
	for (var i=0; i<numLB; i++) {
		var equips = []; if (LBAS1[i]) for (var equip of LBAS1[i].equips) equips.push(equip.mid);
		CHAPI.fleet1.push({
			mst_id: (LBAS1[i].pos > 0 ? 5000+LBAS1[i].pos : 5500+(LBAS1[i].pos*-1)),
			equip: equips,
		});
	}
	return CHAPI;
}

function prepEnemyRaid() {
	var numLB = MAPDATA[WORLD].maps[MAPNUM].lbas;
	var enemyRaid = MAPDATA[WORLD].maps[MAPNUM].enemyRaid;
	let lastdance = (WORLD == 20)? CHDATA.event.maps[31].hp == 1 : chGetLastDance();
	let special = typeof(enemyRaid.compSTrigger) !== 'undefined' ? enemyRaid.compSTrigger() : [];
	var enemies = getEnemyComps(enemyRaid.compName,enemyRaid,CHDATA.event.maps[MAPNUM].diff,lastdance,special);
	let highAltitude = enemyRaid.highAltitude ? enemyRaid.highAltitude[CHDATA.event.maps[MAPNUM].diff] : false;
	var CHAPI = doSimEnemyRaid(numLB,enemies,highAltitude);
	
	stage = STAGEBATTLE;
	stage.addChild(bg);
	radar1.scale.set(0); radar2.scale.set(0);
	stage.addChild(radar1);
	stage.addChild(radar2);
	dots1.alpha = dots2.alpha = 0;
	stage.addChild(dots1);
	stage.addChild(dots2);
	
	bossBarReset();
	var eventqueueTemp = eventqueue.slice(), eTemp = e;
	eventqueue = [[shuttersPrebattle,[]]]; e = -1;
	processAPI(CHAPI);
	shutterTop2.y = 0; shutterBottom2.y = 210;
	// eventqueue = eventqueue.slice(0,4);
	eventqueue.push([function() {
		addTimeout(function() {
			shutterTop.alpha = shutterBottom.alpha = 1;
			updates.push([closeShutters,[]]);
			SM.play('shuttersclose');
		}, 700);
		addTimeout(function() { ecomplete = true; }, 1500);
	},[]]);
	eventqueue.push([function() {
		stage.removeChildren();
		stage.addChild(bg);
		stage.addChild(shutterTop2); stage.addChild(shutterBottom2);
		stage.addChild(shutterTop); stage.addChild(shutterBottom);
		while (dots1.children.length) recycle(dots1.getChildAt(0));
		while (dots2.children.length) recycle(dots2.getChildAt(0));
		stage = STAGEMAP;
		chResetMapSpritePos();
		if(!CHAPI.raidPass){
			eventqueue.push([endMap,[]]);
		}
		else{
			eventqueue = eventqueueTemp;
			e = eTemp;
		}
		addTimeout(function() { ecomplete = true; }, 500);
	},[]]);
	
	addTimeout(function() { ecomplete = true; }, 1);
}


function chChooseFriendFleet(friendFleets,friendFleetsStrong,strongExcludes) {
	let fleetDefault = friendFleets[0] || null;
	if (friendFleetsStrong) {
		if (strongExcludes) friendFleets = friendFleetsStrong;
		else friendFleets = friendFleets.concat(friendFleetsStrong).concat(friendFleetsStrong);
	}
	if (friendFleets.length <= 0) return null;
	let pool = (strongExcludes || !fleetDefault) ? [] : [fleetDefault];
	let curShips = FLEETS1[0].ships;
	if (CHDATA.fleets.combined) curShips = curShips.concat(FLEETS1[1].ships);
	for (let name of friendFleets) {
		if (name == fleetDefault) continue;
		let fleet = MAPDATA[WORLD].friendFleet[name];
		let found = false;
		for (let ship of fleet.ships) {
			let mid = getBaseId(ship.mid);
			for (let shipC of curShips) {
				let midC = getBaseId(shipC.mid);
				if (mid == midC) { found = true; break; }	
			}
			if (found) break;
		}
		if (!found) pool.push(name);
	}
	if (pool.length <= 0) return fleetDefault;
	let nameC = pool[Math.floor(Math.random()*pool.length)];
	return MAPDATA[WORLD].friendFleet[nameC];
}

function chLoadFriendFleet(friendData) {
	if (!friendData) return null;
	let fleet = new Fleet(0);
	let simShips = [];
	for (let ship of friendData.ships) {
		let sdata = SHIPDATA[ship.mid];
		let ShipType = window[sdata.type];
		let ev = sdata.EVbase + Math.floor((sdata.EV - sdata.EVbase)*ship.LVL/99);
		let asw = sdata.ASWbase + Math.floor((sdata.ASW - sdata.ASWbase)*ship.LVL/99);
		let los = sdata.LOSbase + Math.floor((sdata.LOS - sdata.LOSbase)*ship.LVL/99);
		let simShip = new ShipType(ship.mid,'',0,ship.LVL,sdata.HP,ship.FP,ship.TP,ship.AA,ship.AR,ev,asw,los,sdata.LUK,sdata.RNG,sdata.SLOTS);
		simShip.loadEquips(ship.equips,[],[],true);
		
		if (ship.damage) {
			let percent = ship.damage[0] + Math.random()*(ship.damage[1]-ship.damage[0]);
			simShip.HP = Math.floor(simShip.HP*percent);
		}
		simShips.push(simShip);
		
		if (friendData.voice && ship.mid == friendData.voice[0]) simShip.voiceFriend = [friendData.voice[1],1];
	}
	fleet.loadShips(simShips);
	fleet.formation = LINEAHEAD;
	return fleet;
}

function chAnchorageRepair() {
	let type = 0, didRepair = false;
	let ships = FLEETS1[0].ships;
	if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
	let shipR;
	if (shipR = ships.find(ship => ship.mid == 187 && ship.apiID2 != 1 && ship.HP/ship.maxHP > .5)) type = 1;
	else if (shipR = ships.find(ship => ship.mid == 450 && ship.apiID2 != 1 && ship.HP/ship.maxHP > .5)) type = 2;
	if (!type) return false;
	if (type == 2 && !FLEETS1[1]) return false;

	let hpAmount = 0, shipsRepair = [];
	if (type == 1) {
		hpAmount = .3;
		for (let i=0; i<shipR.equips.length; i++) {
			if (shipR.equips[i].type != SRF) continue;
			if (i == 0) shipsRepair.push.apply(shipsRepair,FLEETS1[0].ships.slice(0,3));
			if (i == 1) shipsRepair.push.apply(shipsRepair,FLEETS1[0].ships.slice(3));
			if (!FLEETS1[1]) continue;
			if (i == 2) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(0,3));
			if (i == 3) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(3));
		};
	} else if (type == 2) {
		hpAmount = .25;
		let fleet = FLEETS1[1] || FLEETS1[0];
		for (let i=0; i<shipR.equips.length; i++) {
			if (shipR.equips[i].type != SRF) continue;
			if (i == 0) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(0,3));
			if (i == 1) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(3));
		};
	}
	for (let ship of shipsRepair) {
		if (!ship) continue;
		if (ship.HP >= ship.maxHP) continue;
		if (ship.HP/ship.maxHP <= .25) continue;
		ship.HP += Math.ceil(hpAmount*ship.maxHP);
		if (ship.HP > ship.maxHP) ship.HP = ship.maxHP;
		ship.morale += 15 + Math.floor(Math.random()*6);
		if (ship.morale > 100) ship.morale = 100;
		didRepair = true;
	}
	pushShipStatusToUI();
	
	if (didRepair) {
		CHDATA.event.resources.repair = CHDATA.event.resources.repair + 1 || 1;
		chUIUpdateItems();
	}
	
	return didRepair;
}