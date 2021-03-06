$('#dialogmainmenu').dialog({
	autoOpen:false,
	width:815,
	height:600,
	draggable: false,
	resizable: false,
	modal:true,
	closeOnEscape:false,
});

$('#dialogreward').dialog({
	autoOpen:false,
	width:380,
	height:330,
	draggable: false,
	resizable: false,
	modal:true,
});

// automatically populate event list
$(function(){
	let visibles = [];
	for(let i in MAPDATA){
		if(MAPDATA[i].visible){
			let orderNum = parseInt(MAPDATA[i].order); 
			if(typeof(orderNum) === undefined) orderNum = 9000 + i;
			if(orderNum < 0) orderNum = 0;
			visibles.push({ world: parseInt(i), order: orderNum});
		}
	}
	visibles.sort(function(a,b){
		if(a.order < b.order) return -1;
		else return 1;
	});
	for(let v of visibles){
		$('#menuevents').append('<div class="eventbutton" style="background-image:url(' + MAPDATA[v.world].bannerImg + ')"><img src="' + MAPDATA[v.world].bannerImgAlt + '" alt="' + MAPDATA[v.world].name + '" title="' + MAPDATA[v.world].name + '" onclick="chMenuSelectedEvent(' + v.world + ')"/></div>');
	}
});
function chOpenMenu(allowclose) {
	if (!allowclose) $(".ui-dialog-titlebar").hide();

	$('#dialogmainmenu').dialog('open');
	
	var foundfile = false;
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') == 0) {
			foundfile = true;
		}
	}
	// foundfile = false; //testing
	
	if (!foundfile) {
		$('#menufileselect').hide();
		$('#menuevents').show();
	} else {
		chMenuShowFiles();
		$('#menufileselect').show();
		chMenuUpdateStorageSize();
		$('#menuevents').hide();
	}
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#menufiledeleteprompt').hide();
	
	$('#fileKC3').val('');
}

function chMenuShowFiles() {
	var nums = [];
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') != 0) continue;
		var num = key.substr(8);
		if ($('#chfile'+num).length) {
			if (num == localStorage.ch_file) {
				$('#chfile'+num).html('');
			} else {
				$('#chfile'+num+' div.menufiledelete').show();
				continue;
			}
		}
		var data = JSON.parse(localStorage[key]);
		nums.push({ num: parseInt(num), data: data });
	}
	nums.sort(function(a,b) { return a.data.event.createtime - b.data.event.createtime; });
	for (var k=0; k<nums.length; k++) {
		var num = nums[k].num;
		var data = nums[k].data;
		var mdata = MAPDATA[data.event.world];
		var tr = $('#chfile'+num);
		if (tr.length <= 0) {
			tr = $('<tr id="chfile'+num+'" class="chfile" onclick="chMenuLoadFile('+num+')"></tr>');
			$('#tfileselect').append(tr);
		}
		var td = $('<td style="display:block"></td>');
		td.append($('<img src="'+mdata.bannerImg+'" style="opacity:.25;position:absolute" />'));
		var divMain = $('<div style="position:absolute;margin-left:20px"></div>');
		td.append(divMain);
		divMain.append($('<span>'+mdata.name+': '+data.player.name+' - HQ '+data.player.level+/*' - '+(new Date(data.event.lasttime)).toLocaleString()+*/'</span><br>'));
		var progress = 0, total = 0;
		var medals = [];
		for (var mapnum in mdata.maps) total++;
		for (var mapnum in data.event.maps) {
			var nowhp = 0, maxhp = 0;
			if (mdata.maps[mapnum].parts) {
				for (var part in mdata.maps[mapnum].parts) {
					maxhp++;
					if (part > data.event.maps[mapnum].part) {
						nowhp++;
					} else if (data.event.maps[mapnum].part == part) {
						var nowhpP = data.event.maps[mapnum].hp;
						var maxhpP = getMapHP(data.event.world,mapnum,data.event.maps[mapnum].diff,part);
						if (maxhpP) nowhp += nowhpP/maxhpP;
						else nowhp++;
					}
				}
			} else {
				nowhp = data.event.maps[mapnum].hp;
				maxhp = getMapHP(data.event.world,mapnum,data.event.maps[mapnum].diff) || 0;
			}
			if (!maxhp) continue;
			progress += (maxhp-nowhp)/maxhp/total;
			if (nowhp <= 0) {
				var type;
				if (data.event.world == 20) type = 0;
				else if (data.config.diffmode == 2) type = data.event.maps[mapnum].diff;
				else {
					if (data.player.level >= 80) type = 3;
					else if (data.player.level >= 35) type = 2;
					else type = 1;
				}
				medals[mapnum-1] = type;
			}
		}
		if (medals.length >= Object.keys(mdata.maps).length && progress >= .9999) progress = 1; //fix JS float rounding
		if (progress >= 1 && data.event.world == 40) { medals.push(null); medals.push(40); }
		if (progress >= 1 && data.event.world == 41) { medals.push(null); medals.push(41); }
		var divMedal = $('<div style="height:50px"></div>');
		var divBar = $('<div style="width:420px;height:20px;float:left"></div>');
		var height = (medals.length > 10)? 23 : 50;
		for (var i=0; i<medals.length; i++) {
			if (data.event.world == 10 && i % 10 != 3) continue;
			var div = $('<div style="width:'+height+'px;height:'+height+'px;float:left"></div>');
			divMedal.append(div);
			if (medals[i] == null) continue;
			div.append($('<img src="assets/maps/medal'+medals[i]+'.png" style="height:'+(height*.8)+'px;margin-top:8px" />'));
		}
		divMain.append(divMedal);
		divBar.append($('<div style="width:400px;height:10px;position:absolute;border:1px solid black;background-color:white;border-radius:5px"></div>'));
		divBar.append($('<div style="width:'+(progress*400)+'px;height:10px;position:absolute;margin-left:1px;margin-top:1px;background-color:green;border-radius:4px"></div>'));
		var divProgress = $('<div></div>');
		divProgress.append(divBar);
		divProgress.append($('<div style="float:left;margin-top:-5px"><span>'+Math.floor(progress*100)+'%</span></div>'));
		divMain.append(divProgress);
		var divDelete = $('<div class="menufiledelete" onclick="chMenuClickedDeleteFile(this,'+num+');event.stopPropagation()">&#10006;</div>');
		td.append(divDelete);
		if (num == localStorage.ch_file) divDelete.hide();
		tr.append(td);
	}
}

function chMenuLoadFile(file) {
	$('#dialogmainmenu').dialog('close');
	if (file == localStorage.ch_file) return;
	chSave();
	chLoadFile(file);
}

var DELETEFILE = 0;
function chMenuClickedDeleteFile(caller,file) {
	if (file == localStorage.ch_file) return;
	DELETEFILE = file;
	$('#menufiledeleteprompt').show();
	var c = $(caller).offset();
	$('#menufiledeleteprompt').offset({top: c.top-2, left: c.left-737});
}

function chMenuDeleteFile() {
	delete localStorage['ch_basic'+DELETEFILE];
	delete localStorage['ch_data'+DELETEFILE];
	$('#chfile'+DELETEFILE).remove();
	$('#menufiledeleteprompt').hide();
	chMenuUpdateStorageSize();
}

function chMenuClickedNewFile() {
	if (!localStorage.max) chMenuUpdateStorageSize();
	if (localStorage.max - chGetStorageUsed()/1024/1024 < .5) {
		$('#menustoragewarn').show();
		return;
	}
	$('#menufileselect').hide();
	$('#menuevents').show();
}

function chMenuSelectedEvent(eventnum) {
	EVENTNUM = eventnum;
	$('#menucurbanner').attr('src',MAPDATA[EVENTNUM].bannerImg);
	chMenuDefaultSettings();
	$('#menuevents').hide();
	$('#menuloadfile').show();
	if (localStorage.ch_import == 1) {
		$('#menuImportKC3').hide();
		$('#menuImportOther').show();
	} else {
		$('#menuImportKC3').show();
		$('#menuImportOther').hide();
	}
	$('#menusettings').hide();
	$(".ui-dialog-titlebar").hide();
	if (MAPDATA[EVENTNUM].mechanicsOther) {
		$('#menusmechunique').parent().show();
		$('#menusmechunique').parent().attr('title',MAPDATA[EVENTNUM].mechanicsDescription);
	} else {
		$('#menusmechunique').parent().hide();
		$('#menusmechunique').parent().attr('title','');
	}
}

function chMenuBackEvent() {
	$('#menuevents').show();
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#fileKC3').val('');
	$('#menufinfo').hide();
}

function chMenuDefaultSettings() {
	$('#menusships').prop('checked',true);
	$('#menusequips').prop('checked',true);
	
	var eventdate = MAPDATA[EVENTNUM].date;
	var mechanicdate = 0;
	$('#menusmechanics option').each(function() {
		if ($(this).val() <= eventdate) mechanicdate = $(this).val();
	});
	$('#menusmechanics').val(mechanicdate);
	
	$('#menusdiff option[value="1"]').prop('disabled',(MAPDATA[EVENTNUM].diffMode != 1));
	$('#menusdiff').val(MAPDATA[EVENTNUM].diffMode);
	
	$('#menuslock').prop('checked',false);
	$('#menusraidreq').prop('checked',false);
	$('#menusunlock').prop('checked',false);
	
	$('#menusmechunique').prop('checked',true);
}

function chMenuExtractSettings() {
	CHDATA.config = {};
	CHDATA.config.disableships = $('#menusships').prop('checked');
	CHDATA.config.disableequips = $('#menusequips').prop('checked');
	CHDATA.config.mechanicsdate = $('#menusmechanics').val();
	CHDATA.config.mechanicsunique = $('#menusmechunique').prop('checked');
	CHDATA.config.diffmode = parseInt($('#menusdiff').val());
	CHDATA.config.disablelock = $('#menuslock').prop('checked');
	CHDATA.config.disableRaidReq = $('#menusraidreq').prop('checked');
	CHDATA.config.unlockAll = $('#menusunlock').prop('checked');
}

function chMenuDone() {
	var filenum = 1;
	for (; filenum<1000; filenum++) {
		if (!localStorage['ch_basic'+filenum]) break;
	}
	if (filenum >= 1000) return;
	localStorage.ch_file = FILE = filenum;
	
	$('#dialogmainmenu').dialog('close');
	$(".ui-dialog-titlebar").show();
	chMenuExtractSettings();
	chProcessKC3File2();
	InitUI();
	if (MAPDATA[EVENTNUM].initReward) {
		chAddReward(MAPDATA[EVENTNUM].initReward);
		chShowReward(MAPDATA[EVENTNUM].initReward);
	}
	chSave();
}

function chRestrictReward(data) {
	let result = {ships:[],items:[]};
	if (data.ships) {
		for (let ship of data.ships) {
			let found = false;
			for (let sid in CHDATA.ships) {
				if (!CHDATA.ships[sid].disabled && getBaseId(CHDATA.ships[sid].masterId) == ship) {
					found = true; break;
				}
			}
			if (!found) result.ships.push(ship);
		}
	}
	if (data.items) {
		for (let item of data.items) {
			let limit = 1;
			if (typeof item === 'object') {
				limit = item.limit;
				item = item.id;
			}
			let count = 0;
			for (let eqid in CHDATA.gears) {
				if (!CHDATA.gears[eqid].disabled && CHDATA.gears[eqid].masterId == item) {
					count++;
				}
			}
			if (count < limit) result.items.push(item);
		}
	}
	if (!result.ships.length) delete result.ships;
	if (!result.items.length) delete result.items;
	return result;
}

function chAddReward(data,forceNew) {
	if (data.ships) {
		for (var i=0; i<data.ships.length; i++) {
			if (!forceNew) {
				let shipExisting = null;
				for (let sid in CHDATA.ships) {
					let shipC = CHDATA.ships[sid];
					if (!shipC.disabled) continue;
					if (getBaseId(shipC.masterId) == data.ships[i] && (!shipExisting || shipC.LVL > shipExisting.LVL)) {
						shipExisting = shipC;
					}
				}
				if (shipExisting) {
					delete shipExisting.disabled;
					continue;
				}
			}
			var mid = typeof data.ships[i] === 'object' ? data.ships[i].id : data.ships[i];
			if (!SHIPDATA[mid]) continue;
			for (var j=0; j<100; j++) {
				var sid = 'x'+(90000+j);
				if (CHDATA.ships[sid]) continue;
				var sdata = SHIPDATA[mid];
				var lvl = (data.ships[i].lvl ? data.ships[i].lvl : ((mid > 2500)? 20 : 1));
				var newship = {
					HP: [sdata.HP,sdata.HP],
					LVL: lvl,
					FP: sdata.FP,
					TP: sdata.TP,
					AA: sdata.AA,
					AR: sdata.AR,
					EV: sdata.EVbase + Math.floor((sdata.EV-sdata.EVbase)*lvl/99),
					LOS: sdata.LOSbase + Math.floor((sdata.LOS-sdata.LOSbase)*lvl/99),
					ASW: sdata.ASWbase + Math.floor((sdata.ASW-sdata.ASWbase)*lvl/99),
					LUK: sdata.LUK,
					RNG: sdata.RNG,
					ammo: 10,
					fuel: 10,
					items: [-1,-1,-1,-1,-1],
					masterId: mid,
					morale: 49,
					planes: sdata.SLOTS.slice(),
				};
				CHDATA.ships[sid] = newship;
				break;
			}
		}
		DIALOGSORT = null;
		chFillDialogShip(1);
	}
	if (data.items) {
		for (var i=0; i<data.items.length; i++) {
			var mid = typeof data.items[i] === 'object' ? data.items[i].id : data.items[i];
			if (!forceNew) {
				let gearExisting = null;
				for (let eqid in CHDATA.gears) {
					if (CHDATA.gears[eqid].disabled && CHDATA.gears[eqid].masterId == mid) {
						gearExisting = CHDATA.gears[eqid];
						break;
					}
				}
				if (gearExisting) {
					delete gearExisting.disabled;
					continue;
				}
			}
			if (!EQDATA[mid]) continue;
			for (var j=0; j<100; j++) {
				var eqid = 'x'+(90000+j);
				if (CHDATA.gears[eqid]) continue;
				var newequip = {
					itemId: eqid,
					masterId: mid,
					lock: 1,
					stars: (data.itemsStars && data.itemsStars[i] > 0 ? data.itemsStars[i] : 0),
					ace: ((EQTDATA[EQDATA[mid].type].isPlane)? 7 : -1)
				};
				CHDATA.gears[eqid] = newequip;
				break;
			}
			$('#equipselecttable').append('<tr id="'+eqid+'" value="'+eqid+'"></tr>');
		}
	}
}

function chShowReward(data,tracker) {
	if (tracker === undefined) tracker = 0;
	var numShips = (data.ships)? data.ships.length : 0;
	var numItems = (data.items)? data.items.length : 0;
	if (numShips + numItems) {
		$('#dialogreward').dialog('open');
		$('#rewardshine').css('animation','spin 5s linear infinite');
		$('#rewardship').css('margin-top','105px');
		$('#rewardship').css('width','');
		$('#rewardship').css('height','');
		if (tracker < numShips) {
			$('#rewardship').attr('src','assets/icons/'+SHIPDATA[(typeof(data.ships[tracker]) === 'object' ? data.ships[tracker].id : data.ships[tracker])].image);
		} else {
			let imageSpecial = {
				53: 'assets/maps/rewards/Reppuu_Model_11_053_Card.png',
				54: 'assets/maps/rewards/Saiun_054_Card.png',
				56: 'assets/maps/22/Shinden_Kai_056_Card.png',
				58: 'assets/maps/rewards/61cm_Quintuple_(Oxygen)_Torpedo_Mount_058_Card.png',
				94: 'assets/maps/rewards/Tenzan_Model_12_(Tomonaga_Squadron)_094_Card.png',
				103: 'assets/maps/rewards/Prototype_35.6cm_Triple_Gun_Mount_103_Card.png',
				105: 'assets/maps/rewards/Prototype_41cm_Triple_Gun_Mount_105_Card.png',
				126: 'assets/maps/rewards/WG42_(Wurfgerät_42)_126_Card.png',
				138: 'assets/maps/rewards/Type_2_Large_Flying_Boat_138_Card.png',
				141: 'assets/maps/rewards/Type_32_Surface_Radar_Kai_141_Card.png',
				143: 'assets/maps/48/i143.png',
				144: 'assets/maps/48/i144.png',
				149: 'assets/maps/rewards/Type_4_Passive_Sonar_149_Card.png',
				167: 'assets/maps/rewards/Special_Type_2_Amphibious_Tank_167_Card.png',
				169: 'assets/maps/rewards/Type_1_Land-based_Attack_Aircraft_169_Card.png',
				170: 'assets/maps/rewards/Type_1_Land-based_Attack_Aircraft_(Nonaka_Squadron)_170_Card.png',
				175: 'assets/maps/36/Raiden_175_Card.png',
				176: 'assets/maps/36/Type_3_Fighter_Hien_176_Card.png',
				177: 'assets/maps/rewards/Type_3_Fighter_Hien_(244th_Air_Combat_Group)_177_Card.png',
				179: 'assets/maps/rewards/Prototype_61cm_Sextuple_(Oxygen)_Torpedo_Mount_179_Card.png',
				180: 'assets/maps/rewards/Type_1_Land-based_Attack_Aircraft_Model_22A_180_Card.png',
				185: 'assets/maps/36/Type_3_Fighter_Hien_Model_1D_185_Card.png',
				186: 'assets/maps/rewards/Type_1_Land-based_Attack_Aircraft_Model_34_186_Card.png',
				209: 'assets/maps/37/Saiun_(Disassembled_for_Transport)_209_Card.png',
				218: 'assets/maps/40/Type_4_Fighter_Hayate_218_Card.png',
				230: 'assets/maps/rewards/Toku_Daihatsu_Landing_Craft_&_11th_Tank_Regiment_230_Card.png',
				269: 'assets/maps/40/Prototype_Toukai_269_Card.png',
				270: 'assets/maps/40/Toukai_(901_Air_Group)_270_Card.png',
				272: 'assets/maps/40/Striking_Force_Fleet_Command_Facility_272_Card.png',
				273: 'assets/maps/rewards/Saiun_(4th_Recon_Squad)_273_Card.png',
				287: 'assets/maps/rewards/Type_3_Depth_Charge_Projector_(Concentrated_Deployment)_287_Card.png',
				289: 'assets/maps/rewards/35.6cm_Triple_Gun_Mount_Kai_(Dazzle_Camouflage)_289_Card.png',
				306: 'assets/maps/rewards/Ju_87C_Kai_Ni_(w_KMX_Skilled)_306_Card.png',
				311: 'assets/maps/43/i311.png',
				312: 'assets/maps/43/i312.png',
				333: 'assets/maps/44/i333.png',
				334: 'assets/maps/44/i334.png',
				337: 'assets/maps/rewards/Reppuu_Kai_Ni_(CarDiv_1_Skilled)_337_Card.png',
				346: 'assets/maps/45/i346.png',
				348: 'assets/maps/45/i348.png',
				350: 'assets/maps/45/i350.png',
				351: 'assets/maps/45/i351.png',
				355: 'assets/maps/45/i355.png',
				1001: 'assets/maps/rewards/12.7cm_Twin Gun Mount_Model_C_Kai_2_(Special_Calibration)_1001_Card.png',
				1002: 'assets/maps/rewards/Zuiuncopter_(634 Airgroup)_1002_Card.png',
				1005: 'assets/maps/rewards/Disassembled_Aircraft_1005_Card.png',
				1007: 'assets/maps/rewards/12.7cm_Twin_Gun_Mount_Model_D_Kai_Ni_(Enhanced)_1007_Card.png',
				1008: 'assets/maps/rewards/Type_96_Land-based_Attack_Aircraft_(Zui_Squadron)_1008_Card.png',
				1009: 'assets/maps/rewards/41cm_Triple_Gun_Mount_(Enhanced)_1009_Card.png',
			};
			var ind = tracker-numShips, id = typeof data.items[ind] === 'object' ? data.items[ind].id : data.items[ind];
			//TODO - examine the width/height changes here
			$('#rewardship').css('width','150px');
			$('#rewardship').css('height','150px');
			if (imageSpecial[id]) {
				$('#rewardship').css('margin-top','70px');
				$('#rewardship').attr('src',imageSpecial[id]);
			} else if (data.items[ind] == 'apology') {
				$('#rewardship').css('margin-top','40px');
				$('#rewardship').attr('src','assets/maps/Apology_scroll.png');
			} else {
				$('#rewardship').css('margin-top','70px');
				$('#rewardship').attr('src','assets/maps/rewards/i'+data.items[ind]+'.png');
				//$('#rewardship').attr('src','assets/items/'+EQTDATA[EQDATA[id].type].image+'.png');
			}
		}
		$('#rewardship').css('animation','appear 1s linear 1');
		tracker++;
		if (tracker < numShips + numItems) {
			$('#dialogreward').dialog('option','close',function() {
				setTimeout(function() { chShowReward(data,tracker); }, 1);
			});
		} else {
			$('#dialogreward').dialog('option','close',function() {
				$('#rewardshine').css('animation','');
				$('#rewardship').css('animation','');
			});
		}
	}
}


function chMenuUpdateStorageSize() {
	let size = chGetStorageUsed()/1024/1024;
	let max = localStorage.max || (localStorage.max = Math.round(size + chGetStorageLeft()/1024/1024));
	let maxText = (max > 100)? '100+' : max;
	$('#menustorage').text(size.toFixed(2));
	$('#menustoragemax').text(maxText);
	$('#menustoragewarn').hide();
}

function chGetStorageUsed() {
	let size = 0;
	for (let key in localStorage) {
		if (typeof localStorage[key] !== 'string') continue;
		size += localStorage[key].length + key.length;
	}
	return size*2;
}

function chGetStorageLeft() {
	let MB = 1024*1024;
	let steps = [MB, MB/10, MB/100];
	let left = 0;
	for (let step of steps) {
		let chars = step;
		for (; chars <= step*50; chars += step) {
			try {
				localStorage['a'] = 'a'.repeat(left + chars);
			} catch (e) {
				break;
			}
		}
		left += chars - step;
	}
	delete localStorage['a'];
	return 2*left;
}


$('#btnImportOther').click(function() {
	$('#menuImportKC3').hide();
	$('#menuImportOther').show();
	localStorage.ch_import = 1;
});
$('#btnImportKC3').click(function() {
	$('#menuImportKC3').show();
	$('#menuImportOther').hide();
	delete localStorage.ch_import;
});
$('#btnImportOtherSubmit').click(function() {
	$('#spanImportOtherError').text('');
	let dataShip, dataEquip;
	try {
		dataShip = JSON.parse($('#inpImportOtherShip').val());
	} catch(e) {
		$('#spanImportOtherError').text('Ship: Bad JSON');
		return;
	}
	try {
		dataEquip = JSON.parse($('#inpImportOtherEquip').val());
	} catch(e) {
		$('#spanImportOtherError').text('Equipment: Bad JSON');
		return;
	}
	let name = $('#inpImportOtherName').val(), level = +$('#inpImportOtherHQ').val();
	if (!name) {
		$('#spanImportOtherError').text('Name required');
		return;
	}
	if (!level || level < 1 || level > 120) {
		$('#spanImportOtherError').text('HQ Level required');
		return;
	}
	try {
		chProcessImportOther(dataShip,dataEquip,name,level);
	} catch(e) {
		console.log(e);
		$('#spanImportOtherError').text('Bad data');
		return;
	}
});

$('#menusmechunique').parent().css('text-decoration','underline dashed');