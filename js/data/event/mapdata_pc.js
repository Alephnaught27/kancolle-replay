MAP100 = {
	date: '2223-01-01',
	name: 'Pacific Conquest',
	visible: true,
	order: 1,
	diffMode: 2,
	allowDiffs: [1,2,3,4],
	allowFleets: [0,1,2,3,7],
	allowLBAS: true,
	newResupplyCosts: true,
	bannerImg: 'assets/maps/100/banner1.png',
	bannerImgAlt: 'assets/maps/100/banner2.png',
	transportCalc: transportCalcStandard,
	friendFleet: {
		'midway': { voice: [599], ships: [
			{ mid: 599, LVL: 93, FP: 72, TP: 0, AA: 84, AR: 81, equips: [345,339,339,338,56] },
			{ mid: 278, LVL: 85, FP: 50, TP: 0, AA: 79, AR: 79, equips: [345,339,339,259] },
			{ mid: 197, LVL: 87, FP: 58, TP: 0, AA: 84, AR: 75, equips: [344,338,93,258] },
			{ mid: 196, LVL: 86, FP: 65, TP: 0, AA: 82, AR: 76, equips: [344,338,99,258] },
			{ mid: 564, LVL: 82, FP: 66, TP: 89, AA: 67, AR: 53, equips: [286,286,74] },
		] },
		'opmo': { voice: [461], ships: [
			{ mid: 461, LVL: 88, FP: 63, TP: 0, AA: 88, AR: 77, equips: [344,338,338,258] },
			{ mid: 462, LVL: 88, FP: 56, TP: 0, AA: 90, AR: 78, equips: [344,338,338,258] },
			{ mid: 194, LVL: 84, FP: 84, TP: 84, AA: 72, AR: 78, equips: [90,90,59,101] },
			{ mid: 319, LVL: 84, FP: 80, TP: 88, AA: 80, AR: 78, equips: [90,15,15,74] },
			{ mid: 566, LVL: 82, FP: 68, TP: 90, AA: 62, AR: 53, equips: [266,286,240] },
			{ mid: 567, LVL: 81, FP: 67, TP: 91, AA: 64, AR: 54, equips: [266,286,240] },
		] },
		'crossroads': { voice: [541], ships: [
			{ mid: 541, LVL: 91, FP: 118, TP: 0, AA: 100, AR: 110, equips: [318,318,318,31] },
			{ mid: 545, LVL: 87, FP: 68, TP: 0, AA: 94, AR: 85, equips: [257,255,254,254] },
			{ mid: 314, LVL: 79, FP: 64, TP: 78, AA: 73, AR: 69, equips: [139,139,74] },
			{ mid: 177, LVL: 78, FP: 75, TP: 84, AA: 60, AR: 82, equips: [123,15,15,124] },
		] },
		'6thflt-6': { voice: [184], ships: [
			{ mid: 184, LVL: 67, FP: 15, TP: 0, AA: 36, AR: 37, equips: [12,12,101] },
			{ mid: 400, LVL: 69, FP: 14, TP: 84, AA: 0, AR: 19, equips: [348,167] },
			{ mid: 401, LVL: 71, FP: 12, TP: 89, AA: 0, AR: 19, equips: [348,167] },
			{ mid: 367, LVL: 66, FP: 12, TP: 86, AA: 0, AR: 19, equips: [348,167] },
		] },
		'6thflt-7': { voice: [184], ships: [
			{ mid: 184, LVL: 67, FP: 15, TP: 0, AA: 36, AR: 37, equips: [12,12,101] },
			{ mid: 400, LVL: 69, FP: 14, TP: 84, AA: 0, AR: 19, equips: [15,15] },
			{ mid: 401, LVL: 71, FP: 12, TP: 89, AA: 0, AR: 19, equips: [15,15] },
			{ mid: 367, LVL: 66, FP: 12, TP: 86, AA: 0, AR: 19, equips: [15,15] },
		] },
	},
	overrideStats: {
		1547: { HP: 410, FP: 180, TP: 120, AR: 270 },
		1862: { EQUIPS: [550, 550, 530, 540], },
		3016: { AR: 210 }, 3017: { HP: 700, AR: 240 }, 3018: { HP: 800, AR: 280 },
		3019: { AR: 243 }, 3020: { HP: 700, AR: 273 }, 3021: { HP: 800, AR: 313 },
	},
	getCarrierRecons: function(isCombined){
		let recons = FLEETS1[0].getWithItemsOfTypes([CARRIERSCOUT,CARRIERSCOUT2]).length;
		if(isCombined) recons += FLEETS1[1].getWithItemsOfTypes([CARRIERSCOUT,CARRIERSCOUT2]).length;
		return recons;
	},
	getSurfaceRadars: function(isCombined){
		let radars = FLEETS1[0].getWithItemsOfTypes([B_RADAR],"btype",{ LOS: 5 }).length;
		if(isCombined) radars += FLEETS1[1].getWithItemsOfTypes([B_RADAR],"btype",{ LOS: 5 }).length;
		return radars;
	},
	getSonars: function(isCombined){
		let sonars = FLEETS1[0].getWithItemsOfTypes([B_SONAR],"btype").length;
		if(isCombined) sonars += FLEETS1[1].getWithItemsOfTypes([B_SONAR],"btype").length;
		return sonars;
	},
	maps: {
		1: {
			name: 'E-1',
			nameT: 'Incoming Abyssal Assault! The Brave Escape from MI Isle',
			fleetTypes: [0],
			bgmMap: 2131,
			bgmDN: 55,
			bgmNN: 55,
			bgmDB: 15,
			bgmNB: 15,
			bossnode: [7],
			giveLock: 1001,
			checkLock: [1002,1003,1004,1005,1006],
			reward: {
				3: { items: [180,1007,1008] },
				2: { items: [169,180,1007] },
				1: { items: [169,180] },
				4: { items: [169] },
			},
			parts:{
				1:{
					currentBoss: 'G',
					bar:{
						gaugeID: 10,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						fill: 'FF0000',
						hortOffset: { x: -14, y: -26 },
						vertPos: { x: 680, y: 20 },
					},
					maphp: {
						3: { 1: 780 },
						2: { 1: 780 },
						1: { 1: 780 },
						4: { 1: 588 },
					},
					finalhp: {
						3: 130,
						2: 130,
						1: 130,
						4: 130,
					},
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '1_1.png', x: 0, y: 0 }],
					unlock: function() {
						if(CHDATA.event.maps[1].hp <= MAPDATA[100].maps[1].parts[1].maphp[CHDATA.event.maps[1].diff][1] * 0.5){
							if(CHDATA.event.maps[1].routes.indexOf(1) == -1) CHDATA.event.maps[1].visited = [];
							return true;
						}
						return false;
					}
				},
				2: {
					images: [{ name: '1_2.png', x: 0, y: 0 }],
					unlock: function() {
						if(CHDATA.event.maps[1].hp <= MAPDATA[100].maps[1].parts[1].finalhp[CHDATA.event.maps[1].diff]){
							if(CHDATA.event.maps[1].routes.indexOf(2) == -1) CHDATA.event.maps[1].visited = [];
							return true;
						}
						return;
					}
				},
				3: {
					images: [{ name: '1_3.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if(!debuff) return false;
						return debuff.E;
					}
				},
			},
			additionalChecks: function(ships, errors){
				if(ships.AV || ships.BB || ships.BBV || ships.CV || ships.CVB || ships.CVL || ships.FBB || ships.LHA || ships.SS || ships.SSV){
					errors.push("AV, (F)BB(V), CV(L/B), LHA, SS(V) cannot be sortied to this map.");
				}
			},
			startCheck: function() {
				if (!CHDATA.event.maps[1].routes) return 'Start1';
				else if (CHDATA.event.maps[1].routes.indexOf(2) != -1) return 'Start3';
				else if (CHDATA.event.maps[1].routes.indexOf(1) != -1) return 'Start2';
				else return 'Start1';
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 561,
					y: 47,
					replacedBy: 'NULL-1',
					route: 'A'
				},
				'Start2': {
					type: 0,
					x: 251,
					y: 331,
					replacedBy: 'NULL-2',
					route: 'H'
				},
				'Start3': {
					type: 0,
					x: 55,
					y: 46,
					routeC: function(ships){
						if(ships.total <= 5) return 'O';
						else return 'P';
					},
				},
				'A': {
					type: 1,
					x: 507,
					y: 127,
					replacedBy: 'A*',
					compDiff: {
						3:['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2:['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1:['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						4:['Casual 1', 'Casual 2', 'Casual 3', 'Casual 4'],
					},
					routeC: function(ships){
						if(ships.total > 5 || ships.CA + ships.CAV > 2 || ships.CL === 0) return 'C';
						else{
							let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = [4,4,5,3];
							if(radars >= radarsReq[CHDATA.event.maps[1].diff - 1]) return 'E';
							else return 'B';
						}
					},
				},
				'A*': {
					type: 1,
					x: 507,
					y: 127,
					hidden: 1,
					compName: 'A',
					compDiff: {
						3:['Hard 5', 'Hard 6', 'Hard 7', 'Hard 8'],
						2:['Medium 5', 'Medium 6', 'Medium 7', 'Medium 8'],
						1:['Easy 5', 'Easy 6', 'Easy 7', 'Easy 8'],
						4:['Casual 5', 'Casual 6', 'Casual 7', 'Casual 8'],
					},
					compDiffF: {
						3:['Hard 9', 'Hard 10', 'Hard 11', 'Hard 12'],
						2:['Medium 9', 'Medium 10', 'Medium 11', 'Medium 12'],
						1:['Easy 9', 'Easy 10', 'Easy 11', 'Easy 12'],
						4:['Casual 9', 'Casual 10', 'Casual 11', 'Casual 12'],
					},
					routeC: function(ships){
						if(ships.AR) return 'NULL-1';
						if(ships.DD <= 1) return 'B*';
						else{
							let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = [4,4,5,3];
							if(radars >= radarsReq[CHDATA.event.maps[1].diff - 1]) return 'E*';
							else return 'B*';
						} 
					},
				},
				'B': {
					type: 1,
					x: 586,
					y: 154,
					replacedBy: 'B*',
					ambush: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'E',
				},
				'B*': {
					type: 1,
					hidden: 1,
					x: 586,
					y: 154,
					compName: 'B',
					ambush: true,
					compDiff: {
						3:['Hard 3', 'Hard 4'],
						2:['Medium 3', 'Medium 4'],
						1:['Easy 3', 'Easy 4'],
						4:['Casual 3', 'Casual 4'],
					},
					compDiffF: {
						3:['Hard 5', 'Hard 6'],
						2:['Medium 5', 'Medium 6'],
						1:['Easy 5', 'Easy 6'],
						4:['Casual 5', 'Casual 6'],
					},
					route: 'E*',
				},
				'C': {
					type: 1,
					x: 431,
					y: 96,
					replacedBy: 'C*',
					ambush: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'D',
				},
				'C*': {
					type: 1,
					x: 431,
					y: 96,
					hidden: 1,
					compName: 'C',
					raid: true,
					compDiff: {
						3:['Hard 3'],
						2:['Medium 3'],
						1:['Easy 3'],
						4:['Casual 3'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[1].routes.indexOf(2) !== -1){
							if(ships.CA + ships.CAV >= 2) return 'A*';
							else return 'D*';
						}
						else{
							this.showNoCompass = true;
							return 'A*';
						}
					}
				},
				'D': {
					type: 1,
					x: 425,
					y: 194,
					replacedBy: 'D*',
					compDiff: {
						3:['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2:['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1:['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						4:['Casual 1', 'Casual 2', 'Casual 3', 'Casual 4'],
					},
					route: 'E',
				},
				'D*': {
					type: 1,
					x: 425,
					y: 194,
					hidden: 1,
					compName: 'D',
					compDiff: {
						3:['Hard 5', 'Hard 6'],
						2:['Medium 5', 'Medium 6'],
						1:['Easy 5', 'Easy 6'],
						4:['Casual 5', 'Casual 6'],
					},
					compDiffF: {
						3:['Hard 7', 'Hard 8'],
						2:['Medium 7', 'Medium 8'],
						1:['Easy 7', 'Easy 8'],
						4:['Casual 7', 'Casual 8'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[1].routes.indexOf(2) !== -1){
							this.showNoCompass = true;
							return 'E*';
						}
						else{
							if((ships.speed >= 15 && ships.DD >= 2) || (ships.total <= 5 && ships.DD >= 2 && ships.CL + ships.DD >= 3)) return 'E*';
							else return 'C*';
						}
					}
				},
				'E': {
					type: 1,
					x: 538,
					y: 242,
					replacedBy: 'E*',
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].ships[0].getItemsOfTypes([B_RADAR],"btype",{ LOS: 5 }).length === 0) return 'F';
						let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = [3,3,4,2];
						if(radars >= radarsReq[CHDATA.event.maps[1].diff - 1] && ships.DD > 0) return 'G';
						else return 'F';
					}
				},
				'E*': {
					type: 1,
					x: 538,
					y: 242,
					hidden: 1,
					compName: 'E',
					compDiff: {
						3:['Hard 3', 'Hard 4'],
						2:['Medium 3', 'Medium 4'],
						1:['Easy 3', 'Easy 4'],
						4:['Casual 3', 'Casual 4'],
					},
					compDiffF: {
						3:['Hard 5', 'Hard 6'],
						2:['Medium 5', 'Medium 6'],
						1:['Easy 5', 'Easy 6'],
						4:['Casual 5', 'Casual 6'],
					},
					routeC: function(ships){
						if(FLEETS1[0].ships[0].getItemsOfTypes([B_RADAR],"btype",{ LOS: 5 }).length === 0) return 'F';
						let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = [3,3,4,2];
						if(radars >= radarsReq[CHDATA.event.maps[1].diff - 1] && ships.DD > 0) return 'G';
						else return 'F';
					},
					debuffGive: function(){
						if(CHDATA.event.maps[1].routes.indexOf(2) !== -1 && CHDATA.temp.rank === 'S') CHDATA.event.maps[1].debuff.E = 1;
					},
				},
				'F': {
					type: 3,
					x: 644,
					y: 299,
					end: true,
				},
				'G': {
					type: 1,
					x: 706,
					y: 210,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1567.png',
						offsetX: -75,
						offsetY: -55,
					},
					compSTrigger: function(){
						if(CHDATA.event.maps[1].hp <= getMapHP(100,1,CHDATA.event.maps[1].diff,CHDATA.event.maps[1].part) * 0.5 && CHDATA.event.maps[1].hp > getMapLDHP(100,1,CHDATA.event.maps[1].diff,CHDATA.event.maps[1].part)){
							return [0];
						}
						return [];
					},
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffS: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					compDiffF: {
						3:['Hard 3'],
						2:['Medium 3'],
						1:['Easy 3'],
						4:['Casual 3'],
					}
				},
				'H': {
					type: 3,
					x: 298,
					y: 264,
					hidden: 1,
					routeS: ['I', 'L'],
				},
				'H*': {
					type: 3,
					x: 298,
					y: 264,
					hidden: 2,
					routeC: function(ships){
						if(ships.AR > 0) return 'NULL-2';
						else return 'I';
					}
				},
				'I': {
					type: 1,
					x: 372,
					y: 307,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					routeC: function(ships){
						if(ships.CA + ships.CAV <= 3 && ships.CL > 0) return 'K';
						else return 'J';
					},
				},
				'J': {
					type: 1,
					x: 440,
					y: 254,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					route: 'K',
				},
				'K': {
					type: 1,
					x: 496,
					y: 299,
					hidden: 1,
					night2: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					route: 'E*',
				},
				'L': {
					type: 3,
					x: 249,
					y: 174,
					hidden: 1,
					routeC: function(ships){
						if(CHDATA.event.maps[1].routes.indexOf(2) !== -1){
							let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = (FLEETS1[0].nodePrevious === 'N' ? [3,3,4,2] : [4,4,5,3]);
							if(radars >= radarsReq[CHDATA.event.maps[1].diff - 1] && (FLEETS1[0].nodePrevious === 'N' || (FLEETS1[0].ships[0].type === 'CL' && ships.DD >= 2))) return 'M';
							else return 'H*';
						}
						else{
							this.showNoCompass = true;
							return 'M';
						}
					},
				},
				'M': {
					type: 1,
					x: 355,
					y: 180,
					hidden: 1,
					subonly: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2', ],
						4:['Casual 1', 'Casual 2'],
					},
					compDiffF:{
						3:['Hard 3', 'Hard 4'],
						2:['Medium 3', 'Medium 4'],
						1:['Easy 3', 'Easy 4'],
						4:['Casual 3', 'Casual 4'],
					},
					route: 'D*',
				},
				'N': {
					type: 3,
					x: 313,
					y: 97,
					hidden: 2,
					routeC: function(ships){
						let radars = MAPDATA[100].getSurfaceRadars(false), radarsReq = [3,3,4,2];
						if(CHDATA.event.maps[1].routes.indexOf(3) !== -1 && radars >= radarsReq[CHDATA.event.maps[1].diff - 1] && ships.DD >= 2) return 'D*';
						else if(ships.DD >= 2 && ships.DD + ships.CL >= 3) return 'L';
						else return 'C*';
					},
					setupSpecial: function(){
						FLEETS1[0].nodePrevious = 'N';
					}
				},
				'O': {
					type: 3,
					x: 150,
					y: 69,
					hidden: 2,
					routeC: function(ships){
						if(CHDATA.event.maps[1].routes.indexOf(3) !== -1 && ships.DD >= 2) return 'N';
						else return 'R';
					},
				},
				'P': {
					type: 1,
					x: 110,
					y: 146,
					hidden: 2,
					subonly: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'Q',
				},
				'Q': {
					type: 1,
					x: 191,
					y: 215,
					hidden: 2,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'L',
				},
				'R': {
					type: 1,
					x: 250,
					y: 43,
					hidden: 2,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					route: 'N',
				},
				'NULL-1': {
					type: 1,
					x: 561,
					y: 44,
					hidden: 1,
					end: true,
					glitch: true,
					compDiff: {
						3:['Hard 1'],
						2:['Hard 1'],
						1:['Easy 1'],
						4:['Easy 1'],
					},
				},
				'NULL-2': {
					type: 1,
					x: 251,
					y: 330,
					hidden: 2,
					end: true,
					glitch: true,
					compDiff: {
						3:['Hard 1'],
						2:['Hard 1'],
						1:['Easy 1'],
						4:['Easy 1'],
					},
				},
			},
		},
		2: {
			name: 'E-2',
			nameT: 'Defending the Mainland! Preparation of the Retaking Force',
			fleetTypes: [0],
			bgmMap: 2037,
			bgmDN: 104,
			bgmNN: 104,
			bgmDB: 111,
			bgmNB: 111,
			bossnode: [14],
			giveLock: 1002,
			checkLock: [1001,1003,1004,1005,1006],
			reward: {
				3: { items: [149,177,287,138] },
				2: { items: [149,185,287,138] },
				1: { items: [149,185,138] },
				4: { items: [149,176] },
			},
			parts:{
				1:{
					currentBoss: 'N',
					bar:{
						gaugeID: 20,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x: -6, y: -17 },
						vertPos: { x: 40, y: -15 },
					},
					lbas: 2,
					lbasSortie:1,
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
						chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						debuffGive: function(airState,totalHPLost) {
							let airStateRequirement = [1,1,2,-3];
							if (airState >= airStateRequirement[CHDATA.event.maps[2].diff - 1]) CHDATA.event.maps[2].debuff.AB = 1;
						}
					},
					maphp: {
						3: { 1: 2940 },
						2: { 1: 2580 },
						1: { 1: 2260 },
						4: { 1: 1850 },
					},
					finalhp: {
						3: 490,
						2: 430,
						1: 370,
						4: 370,
					},
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '2_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if(!debuff) return false;
						if(CHDATA.event.maps[2].diff === 4){
							return debuff.G && debuff.K && debuff.F && debuff.N;
						}
						else{
							return debuff.G && debuff.K && debuff.F && debuff.N && (debuff.AB || CHDATA.config.disableRaidReq);
						}
					}
				},
			},
			pointFunction: function(ships){
				let points = 0;
				if(ships.aBB || ships.CV || ships.CVB) points += 5 * (ships.aBB + ships.CV + ships.CVB);
				if(ships.CVL) points += 3 * ships.CVL;
				if(ships.CL > 0) points -= 4;
				if(ships.DD > 2) points -= 3 * (ships.DD - 2);
				return points;
			},
			nodes: {
				'Start': {
					type: 0,
					x: 225,
					y: 227,
					route: 'A',
				},
				'A': {
					type: 3,
					x: 292,
					y: 321,
					distance: 3,
					route: 'B',
				},
				'B': {
					type: 1,
					x: 433,
					y: 298,
					distance: 4,
					subonly: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.aCV === 0 && ships.aBB <= 1 && ships.DD >= 3) return 'D';
						else if (ships.aCV <= 1 && ships.DD >= 2) return 'M';
						else return 'C';
					}
				},
				'C': {
					type: 1,
					x: 384,
					y: 232,
					distance: 4,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'E',
				},
				'D': {
					type: 1,
					x: 553,
					y: 277,
					distance: 6,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.DD >= 3 && ships.CL > 0) return 'J';
						else return 'I';
					}
				},
				'E': {
					type: 1,
					x: 325,
					y: 148,
					distance: 4,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'F',
				},
				'F': {
					type: 1,
					x: 402,
					y: 80,
					distance: 5,
					raid: true,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[2].routes.indexOf(1) === -1){
							this.showNoCompass = true;
							return 'G';
						}
						else{
							let points = MAPDATA[100].maps[2].pointFunction(ships);
							if(ships.aCV <= 2 && ships.DD >= 2 && points <= 14) return 'P';
							else return 'G';
						}
					},
					debuffGive: function(){
						if(FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.F = 1;
					},
				},
				'G': {
					type: 1,
					x: 490,
					y: 31,
					distance: 6,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.aCV <= 3 && ships.DD >= 1){
							this.showLoSPlane = checkELoS33(getELoS33(1,2),{ 80: 'N', 70: 'H' });
							return this.showLoSPlane;
						}
						else return 'H';
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[2].debuff.G = 1;
					},
				},
				'H': {
					type: 3,
					x: 356,
					y: 36,
					distance: 5,
					end: true,
				},
				'I': {
					type: 1,
					x: 619,
					y: 283,
					distance: 6,
					raid: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF:{
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 1'],
					},
					route: 'J',
				},
				'J': {
					type: 1,
					x: 638,
					y: 210,
					distance: 7,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					route: 'K',
				},
				'K': {
					type: 1,
					x: 680,
					y: 114,
					distance: 8,
					compDiff: {
						3:['Hard 1', 'Hard 2'],
						2:['Medium 1', 'Medium 2'],
						1:['Easy 1', 'Easy 2'],
						4:['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.aBB + ships.aCV <= 2){
							this.showLoSPlane = checkELoS33(getELoS33(1,2),{ 50: 'N', 40: 'L' })
							return this.showLoSPlane;
						}
						else return 'L';
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[2].debuff.K = 1;
					},
				},
				'L': {
					type: 3,
					x: 597,
					y: 121,
					distance: 7,
					end: true,
				},
				'M': {
					type: 1,
					x: 464,
					y: 219,
					distance: 5,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[2].routes.indexOf(1) === -1){
							this.showNoCompass = true;
							return 'D';
						}
						else{
							let points = MAPDATA[100].maps[2].pointFunction(ships);
							if(points <= 10) return 'P';
							else if(points <= 14) return 'O';
							else return 'D';
						}
					}
				},
				'N': {
					type: 1,
					x: 591,
					y: 44,
					distance: 7,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1705.png',
						offsetX: 0,
						offsetY: 0,
					},
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					debuffGive: function(){
						if(!CHDATA.event.maps[2].debuff.N) CHDATA.event.maps[2].debuff.N = 1;
					},
					setupSpecial: function(){
						if(FLEETS1[0].nodePrevious === 'P'){
							for (let ship of FLEETS1[0].ships) {
								ship.bonusSpecial = [{mod:1.1}];
							}
						}
					},
				},
				'O': {
					type: 1,
					x: 543,
					y: 187,
					hidden: 1,
					distance: 6,
					raid: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF:{
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 1'],
					},
					route: 'P',
				},
				'P': {
					type: 1,
					x: 514,
					y: 128,
					hidden: 1,
					distance: 6,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					compDiffF:{
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						FLEETS1[0].nodePrevious = 'P';
						this.showLoSPlane = checkELoS33(getELoS33(1,2),{ 50: 'N', 40: 'L' })
						return this.showLoSPlane;
					},
				},
			},
		},
		3: {
			name: 'E-3',
			nameT: 'Pushing Through Pacific Waters',
			fleetTypes: [0,1,2],
			bgmMap: 137,
			bgmDN: 88,
			bgmNN: 88,
			bgmDB: 1002,
			bgmNB: 1002,
			bossnode: [9,21],
			giveLock: [1001,1002],
			checkLock: [1003,1004,1005,1006],
			lockSpecial: true,
			reward: {
				3: { items: [126,126,126,1009,273,306] },
				2: { items: [126,126,126,1009,273] },
				1: { items: [126,126,105,273] },
				4: { items: [126,105,54] },
			},
			parts:{
				1:{
					currentBoss: 'I',
					bar:{
						gaugeID: 30,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						fill: '60b4e2',
						hortOffset: { x: -26, y: -18 },
						vertPos: { x: 635, y: 45 },
						vertFillDimensions: { width: 6, height: 171 },
						
					},
					maphp: {
						3: { 1: 800 },
						2: { 1: 650 },
						1: { 1: 550 },
						4: { 1: 550 },
					},
					finalhp: {
						3: 160,
						2: 130,
						1: 110,
						4: 110,
					},
				},
				2:{
					currentBoss: 'U',
					bar:{
						gaugeID: 31,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x: 5, y: -24 },
						vertPos: { x: 635, y: 45 },
						vertFillDimensions: { width: 7, height: 171 },
					},
					maphp: {
						3: { 1: 3000 },
						2: { 1: 3000 },
						1: { 1: 2200 },
						4: { 1: 2000 },
					},
					finalhp: {
						3: 545,
						2: 545,
						1: 400,
						4: 400,
					},
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '3_1.png', x: 0, y: 0 }],
					unlock: function() {
						return (CHDATA.event.maps[3].part === 2);
					}
				},
			},
			additionalChecks: function(ships,errors) {
				if (CHDATA.event.maps[3].diff === 1 || CHDATA.event.maps[3].diff === 4) return;
				let lock = null, allSame = true, hasMILock = false, hasRepLock = false;
				let num = (CHDATA.fleets.combined) ? 2 : 1;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
							if (!hasMILock && CHDATA.ships[sid].lock === 1001) hasMILock = true;
							if (!hasRepLock && CHDATA.ships[sid].lock === 1002) hasRepLock = true;
						}
					}
				}
				if (!allSame) errors.push('No mixed locks.');
				if(CHDATA.event.maps[3].part === 1){ // part 1 restrictions
					if(CHDATA.fleets.combined) errors.push('A Combined Fleet cannot sortie at this time.');
					if(hasRepLock) errors.push('The Repulsion Force cannot sortie at this time.');
					if(ships.AV || ships.BB || ships.BBV || ships.CV || ships.CVB || ships.CVL || ships.FBB || ships.LHA || ships.SS || ships.SSV)
						errors.push("AV, (F)BB(V), CV(L/B), LHA, SS(V) cannot be sortied to this map with a Single Fleet.");
					
				}
				else{ // part 2 restrictions
					if(CHDATA.fleets.combined && hasMILock) errors.push('The MI Unit cannot sortie as a Combined Fleet.');
					if(!CHDATA.fleets.combined){
						if(hasRepLock) errors.push('The Repulsion Force cannot sortie as a Single Fleet.');
						if(ships.AV || ships.BB || ships.BBV || ships.CV || ships.CVB || ships.CVL || ships.FBB || ships.LHA || ships.SS || ships.SSV)
							errors.push("AV, (F)BB(V), CV(L/B), LHA, SS(V) cannot be sortied to this map with a Single Fleet.");
					}
				}
			},
			startCheck: function() {
				if(CHDATA.event.maps[3].part === 1){
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,1001);
					}
					return 'Start1';
				}
				else{
					if(CHDATA.fleets.combined){
						for (let n=1; n<=2; n++) {
							for (let i=0; i<CHDATA.fleets[n].length; i++) {
								chGiveLock(n,i+1,1002);
							}
						}
						return 'Start2';
					}
					else{
						for (let i=0; i<CHDATA.fleets[1].length; i++) {
							chGiveLock(1,i+1,1001);
						}
						return 'Start1';
					}
				}
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 512,
					y: 338,
					route: 'A',
				},
				'Start2': {
					type: 0,
					x: 121,
					y: 96,
					hidden: 1,
					routeC: function(ships){
						if(ships.aCV + ships.escort.aCV <= 2) return 'K';
						else return 'J';
					},
				},
				'A': {
					type: 1,
					x: 424,
					y: 264,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
						2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
						1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						4: ['Casual 1','Casual 2','Casual 3','Casual 4'],
					},
					routeC: function(ships){
						if(ships.CL === 0) return 'B';
						let sonars = MAPDATA[100].getSonars(false), sonarsReq = [1,2,2,1];
						if(sonars >= sonarsReq[CHDATA.event.maps[3].diff - 1]) return 'C';
						else return 'B';
					},
				},
				'B': {
					type: 1,
					x: 324,
					y: 265,
					ambush: true,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'C',
				},
				'C': {
					type: 1,
					x: 334,
					y: 347,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].ships[0].getItemsOfTypes([B_SONAR],"btype").length === 0) return 'E';
						let sonars = MAPDATA[100].getSonars(false), sonarsReq = [2,2,3,1];
						if(sonars >= sonarsReq[CHDATA.event.maps[3].diff - 1]) return 'D';
						else return 'E';
					},
				},
				'D': {
					type: 1,
					x: 258,
					y: 278,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'F',
				},
				'E': {
					type: 1,
					x: 236,
					y: 345,
					ambush: true,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'D',
				},
				'F': {
					type: 1,
					x: 161,
					y: 305,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(ships.DD < 2 || ships.total > 5 || FLEETS1[0].ships[0].getItemsOfTypes([B_SONAR],"btype").length === 0) return 'G';
						let sonars = MAPDATA[100].getSonars(false), sonarsReq = [3,3,4,2];
						if(sonars >= sonarsReq[CHDATA.event.maps[3].diff - 1]) return 'I';
						else return 'G';
					},
				},
				'G': {
					type: 1,
					x: 184,
					y: 208,
					ambush: true,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(ships.DD < 2 || ships.total > 5 || FLEETS1[0].ships[0].getItemsOfTypes([B_SONAR],"btype").length === 0) return 'H';
						let sonars = MAPDATA[100].getSonars(false), sonarsReq = [2,2,3,1];
						if(sonars >= sonarsReq[CHDATA.event.maps[3].diff - 1]) return 'I';
						else return 'H';
					},
				},
				'H': {
					type: 1,
					x: 69,
					y: 133,
					ambush: true,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'I',
				},
				'I': {
					type: 1,
					x: 98,
					y: 209,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1644.png',
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
				},
				'J': {
					type: 1,
					x: 235,
					y: 65,
					hidden: 1,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'L',
				},
				'K': {
					type: 1,
					x: 229,
					y: 146,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 1 || ships.aCV + ships.escort.aCV < [1,1,0,0][CHDATA.event.maps[3].diff - 1]) return 'L';
						return 'M';
					},
				},
				'L': {
					type: 3,
					x: 328,
					y: 105,
					hidden: 1,
					routeC: function(ships){
						if(CHDATA.fleets.combined === 2) return 'R';
						else return 'N';
					},
				},
				'M': {
					type: 1,
					x: 327,
					y: 189,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'R',
				},
				'N': {
					type: 1,
					x: 424,
					y: 67,
					raid: true,
					hidden: 1,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'O',
				},
				'O': {
					type: 1,
					x: 528,
					y: 80,
					hidden: 1,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(ships.CV + ships.CVB >= 3) return 'Q';
						this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 150: 'P', 130: 'Q' });
						return this.showLoSPlane;
					},
				},
				'P': {
					type: 1,
					hidden: 1,
					x: 613,
					y: 135,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 2) return 'U'; // STF
						else{ // CTF
							// radar check
							let radars = MAPDATA[100].getSurfaceRadars(true), radarsReq = [2,4,4,2];
							if(radars < radarsReq[CHDATA.event.maps[3].diff - 1]) return 'S';
							// points check
							let points = 0;
							if(ships.aBB || ships.escort.aBB) points += 8 * (ships.aBB + ships.escort.aBB);
							if(ships.aCV || ships.escort.aCV) points += 5 * (ships.aCV + ships.escort.aCV);
							if(radars > radarsReq[CHDATA.event.maps[3].diff - 1]){
								let pointReduction = (radars - radarsReq[CHDATA.event.maps[3].diff - 1]) * 3;
								if(pointReduction > 9) pointReduction = 9;
								points -= pointReduction;
							}
							if(points > 15) return 'S';
							// all checks passed
							return 'U';
						}
					},
				},
				'Q': {
					type: 3,
					x: 663,
					y: 68,
					hidden: 1,
					end: true,
				},
				'R': {
					type: 1,
					x: 422,
					y: 150,
					hidden: 1,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'S',
				},
				'S': {
					type: 1,
					x: 525,
					y: 186,
					hidden: 1,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 1) return 'U'; // CTF
						else{ // STF
							// los check
							this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 150: 'U', 130: 'T' });
							if(this.showLoSPlane === 'T') return this.showLoSPlane;
							// radar check
							let radars = MAPDATA[100].getSurfaceRadars(true), radarsReq = [2,4,4,2];
							if(radars < radarsReq[CHDATA.event.maps[3].diff - 1]) return 'P';
							// point calculation
							let isSlow = ships.speed < 10 || ships.escort.speed < 10 || ships.SS || ships.SSV || ships.escort.SS || ships.escort.SSV;
							let points = 0;
							if(ships.aBB + ships.escort.aBB > 2) points += (ships.aBB + ships.escort.aBB - 2) * (isSlow ? 7 : 6);
							if(ships.aCV || ships.escort.aCV) points += ((ships.aCV + ships.escort.aCV) * (isSlow ? 10 : 8) - (!isSlow ? 8 : 0));
							if(radars > radarsReq[CHDATA.event.maps[3].diff - 1]){
								let pointReduction = (radars - radarsReq[CHDATA.event.maps[3].diff - 1]) * 3;
								if(pointReduction > 6) pointReduction = 6;
								points -= pointReduction;
							}
							if(points >= 15) return 'P';
							// all checks passed, return LoS plane for node U now
							return this.showLoSPlane;
						}
					},
				},
				'T': {
					type: 3,
					x: 581,
					y: 289,
					hidden: 1,
					end: true,
				},
				'U': {
					type: 1,
					x: 637,
					y: 255,
					hidden: 1,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '3034.png',
						offsetX: -45,
						offsetY: -65,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
				},
			},
		},
		4: {
			name: 'E-4',
			nameT: 'The Second Operation MI',
			fleetTypes: [1],
			bgmMap: 2027,
			bgmDN: 16,
			bgmNN: 16,
			bgmDB: 17,
			bgmNB: 17,
			bossnode: [13,"ZZ5"],
			giveLock: 1003,
			checkLock: [1001,1002,1004,1005,1006],
			canPan: true,
			historical: {
				cardiv1: [83,84],
				cardiv2: [90,91],
			},
			reward: {
				3: { ships: [991], items: [94,186,337] },
				2: { ships: [991], items: [94,186,53] },
				1: { ships: [991], items: [94,180,53] },
				4: { ships: [991], items: [94,180] },
			},
			parts:{
				1:{
					currentBoss: 'M',
					bar:{
						gaugeID: 40,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						fill: 'edf7ff',
						fillDimensionsVert: { width: 7, height: 170 },
						hortOffset: { x: 2, y: -14 },
						vertPos: {x: 670, y: 20},
					},
					maphp: {
						3: { 1: 18 },
						2: { 1: 18 },
						1: { 1: 18 },
						4: { 1: 18 },
					},
					finaltp: {
						3: 3,
						2: 3,
						1: 3,
						4: 3,
					},
					transport: 'J',
				},
				2:{
					currentBoss: 'ZZ5',
					bar:{
						gaugeID: 41,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						fill: 'FF0000',
						fillDimensionsVert: { width: 7, height: 171 },
						hortOffset: { x: -18, y: -32 },
						vertPos: {x: 670, y: 20},
					},
					lbas: 2,
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1, 4: 0 },
						chance: { 3: .2, 2: .2, 1: .2, 4: 0 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						debuffGive: function(airState,totalHPLost) {
							let airStateRequirement = (CHDATA.event.maps[4].diff === 4 ? -3 : 1);
							if (airState >= airStateRequirement && (CHDATA.event.maps[4].diff === 3 ? totalHPLost === 0 : true)){
								if(CHDATA.event.maps[4].routes.indexOf(3) === -1) CHDATA.event.maps[4].debuff.AB1 = 1;
								else CHDATA.event.maps[4].debuff.AB2 = 1;
							} 
						}
					},
					maphp: {
						3: { 1: 7000 },
						2: { 1: 6000 },
						1: { 1: 5500 },
						4: { 1: 5000 },
					},
					finalhp: {
						3: 900,
						2: 800,
						1: 750,
						4: 750,
					},
					transport: null,
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '4_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if(!debuff) return false;
						return debuff.M;
					}
				},
				2:{
					images: [{ name: '4_2.png', x: 0, y: 0 }],
					panTo: [536, 249],
					unlock: function(debuff){
						if(!debuff) return false;
						return debuff.S && debuff.P && (debuff.AB1 || CHDATA.config.disableRaidReq);
					}
				},
				3:{
					images: [{ name: '4_3.png', x: 0, y: 0 }],
					panTo: [800, 548],
					unlock: function(debuff){
						if(!debuff) return false;
						return debuff.X && debuff.XAS && debuff.Y && debuff.YAS;
					}
				},
				4:{
					images: [{ name: '4_4.png', x: 0, y: 0 }],
					panTo: [800, 243],
					unlock: function(debuff){
						if(!debuff) return false;
						return debuff.Z4 && debuff.Z4AS && debuff.Z && (debuff.AB2 || CHDATA.config.disableRaidReq);
					}
				},
			},
			getCountTPItem: function(){
				let items = 0, ships = FLEETS1[0].getWithItemsOfTypes([TRANSPORTITEM2]).concat(FLEETS1[1].getWithItemsOfTypes([TRANSPORTITEM2]));
				for(let ship of ships){
					for(let equip of ship.equips){
						if(equip.mid === 1005) ++items;
					}
				}
				return items;
			},
			transportCalc: function(ships, rank){
				if(rank === 'A' || rank === 'S'){
					return MAPDATA[100].maps[4].getCountTPItem();
				}
				else return 0;
			},
			disableLBAS: function(){
				if(!CHDATA.event.maps[4].routes || CHDATA.event.maps[4].routes.indexOf(1) === -1) return true;
				else return false;
			},
			startCheck: function(ships){
				if(!MAPDATA[100].maps[4].getCountTPItem() > 0 && CHDATA.event.maps[4].part === 2 && CHDATA.event.maps[4].routes && CHDATA.event.maps[4].routes.indexOf(1) !== -1){
					return 'Start2';
				} 
				else return 'Start1';
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 112,
					y: 101,
					route: 'A',
				},
				'Start2': {
					type: 0,
					x: 231,
					y: 634,
					hidden: 1,
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[4].routes.indexOf(2) === -1) return 'N';
						else if(CHDATA.event.maps[4].routes.indexOf(4) === -1) return 'N*';
						else return 'N**';
					},
				},
				'A': {
					type: 3,
					x: 269,
					y: 129,
					distance: 6,
					routeS:['C','D'],
				},
				'B': {
					type: 1,
					x: 104,
					y: 177,
					distance: 5,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'E',
				},
				'C': {
					type: 1,
					x: 165,
					y: 227,
					distance: 5,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(ships.aCV + ships.aBB <= 4 && ships.CVB + ships.aBB <= 1 && ships.escort.aBB + ships.escort.aCV <= 1){
							if(ships.speed >= 10 && ships.escort.speed >= 10) return 'E';
							else return 'B';
						}
						else return 'D';
					},
				},
				'D': {
					type: 1,
					x: 265,
					y: 226,
					distance: 5,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						let recons = MAPDATA[100].getCarrierRecons(true), reconsReq = [1,2,2,1];
						if(MAPDATA[100].maps[4].getCountTPItem() > 0 || recons < reconsReq[CHDATA.event.maps[4].diff - 1]) return 'F';
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 90: 'G', 80: 'F' });
						return this.showLoSPlane;
					},
				},
				'E': {
					type: 1,
					x: 115,
					y: 314,
					distance: 4,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'H',
				},
				'F': {
					type: 1,
					x: 236,
					y: 321,
					distance: 4,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(ships.speed >= 10 && ships.escort.speed >= 10) return 'H';
						else return 'I';
					}
				},
				'G': {
					type: 1,
					x: 316,
					y: 311,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S' || (CHDATA.temp.rank == 'A' && Math.random() < 0.6)){
							chAddReward({ items: [1005] });
							chShowReward({ items: [1005] });
						}
					},
					route: 'F',
				},
				'H': {
					type: 1,
					x: 222,
					y: 464,
					distance: 3,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'J',
				},
				'I': {
					type: 1,
					x: 310,
					y: 417,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'H',
				},
				'J': {
					type: 2,
					x: 200,
					y: 583,
					distance: 1,
					resource: 0,
					routeC: function(ships){
						if(!MAPDATA[100].maps[4].getCountTPItem() > 0 && CHDATA.event.maps[4].part !== 2) return 'K';
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 95: 'L', 85: 'K' });
						return this.showLoSPlane;
					},
				},
				'K': {
					type: 3,
					x: 298,
					y: 515,
					distance: 2,
					end: true,
				},
				'L': {
					type: 1,
					x: 111,
					y: 506,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'M',
				},
				'M': {
					type: 1,
					x: 124,
					y: 602,
					distance: 1,
					end: true,
					boss: true,
					bgmOverride: 59,
					enemyPreview: {
						sprite: '1605.png',
						offsetX: -45,
						offsetY: -65,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[4].part === 2 && CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.M = 1;
					},
					setupSpecial: function() {
						if(CHDATA.event.maps[4].part === 2){
							let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								ship.bonusSpecial = [{mod:1.15}];
							}
						}
					},
				},
				'N': {
					type: 3,
					x: 445,
					y: 533,
					hidden: 1,
					distance: 3,
					replacedBy: 'N*',
					route: 'O',
				},
				'N*': {
					type: 3,
					x: 445,
					y: 533,
					hidden: 2,
					distance: 3,
					replacedBy: 'N**',
					routeS: ['O','T'],
				},
				'N**': {
					type: 3,
					x: 445,
					y: 533,
					hidden: 4,
					distance: 3,
					routeS: ['O','T*'],
				},
				'O': {
					type: 1,
					x: 589,
					y: 642,
					hidden: 1,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[4].routes.indexOf(3) === -1){
							let recons = MAPDATA[100].getCarrierRecons(true), reconsReq = [2,2,3,1], DDReq = [4,5,5,4];
							if(recons >= reconsReq[CHDATA.event.maps[4].diff - 1] && (CHDATA.event.maps[4].diff === 4 || ships.DE >= 1) && (ships.DE + ships.DD + ships.escort.DE + ships.escort.DD >= DDReq[CHDATA.event.maps[4].diff - 1])){
								return 'R';
							}
							else return 'P';
						}
						else{
							if(ships.speed >= 10 && ships.escort.speed >= 10 && (ships.DE > 0 || ships.escort.DE > 0)) return 'R';  // forces one to R, doesn't require passing of any other checks
							let sids = ships.ids.concat(ships.escort.ids);
							if(!checkHistorical(MAPDATA[100].maps[4].historical.cardiv1,sids,[0,0,2,0]) && !checkHistorical(MAPDATA[100].maps[4].historical.cardiv2,sids,[0,0,2,0])) return 'P';
							let points = 0, pointsRequired = [18,16,14,20];
							if(ships.aCV > 0 || ships.escort.aCV > 0) points += 4 * (ships.aCV + ships.escort.aCV);
							if(ships.aBB > 0 || ships.escort.aBB > 0) points += 5 * (ships.aBB + ships.escort.aBB);
							if(ships.DD > 0 || ships.CL > 0) points -= 3;
							if(ships.DD > 0 || ships.escort.DD > 2) points -= 2 * (ships.DD + ships.escort.DD - 2);
							if(ships.AV > 0 || ships.escort.AV > 0 || ships.LHA > 0 || ships.escort.LHA > 0) points -= 3;
							if(points <= pointsRequired[CHDATA.event.maps[4].diff - 1]) return 'Z1';
							else return 'P';
						}
					},
				},
				'P': {
					type: 1,
					x: 621,
					y: 547,
					hidden: 1,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Q',
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S' || ((CHDATA.event.maps[4].diff === 4 || CHDATA.event.maps[4].diff === 1) && CHDATA.temp.rank === 'A')) CHDATA.event.maps[4].debuff.P = 1;
					},
				},
				'Q': {
					type: 1,
					x: 726,
					y: 544,
					hidden: 1,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						let recons = MAPDATA[100].getCarrierRecons(true), reconsReq = [1,1,2,1], DDReq = [3,4,4,3];
						if(recons >= reconsReq[CHDATA.event.maps[4].diff - 1] && (ships.DE + ships.DD + ships.escort.DE + ships.escort.DD >= DDReq[CHDATA.event.maps[4].diff - 1])){
							if(CHDATA.event.maps[4].routes.indexOf(3) === -1) return 'S';
							else return 'S*';
						}
						else return 'R';
					},
				},
				'R': {
					type: 1,
					x: 730,
					y: 617,
					hidden: 1,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[4].routes.indexOf(3) === -1) return 'S';
						else return 'S*';
					},
				},
				'S': {
					type: 1,
					x: 859,
					y: 563,
					hidden: 1,
					replacedBy: 'S*',
					distance: 7,
					end: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.S = 1;
					},
				},
				'S*': {
					type: 1,
					x: 859,
					y: 563,
					hidden: 3,
					compName: 'S',
					distance: 7,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					route: 'Z2',
				},
				'T': {
					type: 1,
					x: 571,
					y: 343,
					hidden: 2,
					distance: 5,
					replacedBy: 'T*',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[4].routes.indexOf(3) === -1){
							this.showNoCompass = true;
							return 'U';
						}
						else{
							if(ships.speed >= 10 && ships.escort.speed >= 10) return 'Z';
							else return 'U';
						}
					},
				},
				'T*': {
					type: 3,
					x: 571,
					y: 343,
					hidden: 4,
					distance: 5,
					routeS: ['U','Z*'],
				},
				'U': {
					type: 1,
					x: 528,
					y: 225,
					hidden: 2,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						let recons = MAPDATA[100].getCarrierRecons(true), reconsReq = [1,2,2,1];
						if(ships.LHA + ships.escort.LHA >= 1 || (recons >= reconsReq[CHDATA.event.maps[4].diff - 1] && ships.CV + ships.CVB + ships.escort.CV + ships.escort.CVB <= 2)) return 'X';
						else return 'V';
					},
				},
				'V': {
					type: 1,
					x: 449,
					y: 159,
					hidden: 2,
					distance: 6,
					aironly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'W',
				},
				'W': {
					type: 1,
					x: 531,
					y: 159,
					hidden: 2,
					distance: 6,
					aironly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Y',
				},
				'X': {
					type: 1,
					x: 629,
					y: 156,
					hidden: 2,
					distance: 7,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Y',
					debuffGive: function(){
						let requiredAir = [1,1,2,-3];
						if(FLEETS1[0].AS >= requiredAir[CHDATA.event.maps[4].diff - 1]) CHDATA.event.maps[4].debuff.XAS = 1;
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.X = 1;
					},
				},
				'Y': {
					type: 1,
					x: 551,
					y: 68,
					hidden: 2,
					distance: 7,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						let requiredAir = [1,1,2,-3];
						if(FLEETS1[0].AS >= requiredAir[CHDATA.event.maps[4].diff - 1]) CHDATA.event.maps[4].debuff.YAS = 1;
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.Y = 1;
					},
				},
				'Z': {
					type: 1,
					x: 836,
					y: 376,
					hidden: 3,
					replacedBy: 'Z*',
					distance: 7,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						let radars = MAPDATA[100].getSurfaceRadars(true), radarsReq = [4,5,6,3];
						if((ships.DD > 0 || ships.CL > 0) && radars >= radarsReq[CHDATA.event.maps[4].diff - 1]) return 'Z2';
						else return 'S*';
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.Z = 1;
					},
				},
				'Z*': {
					type: 3,
					x: 837,
					y: 376,
					hidden: 4,
					routeS: ['S*','Z2','Z5'],
				},
				'Z1': {
					type: 1,
					x: 789,
					y: 688,
					hidden: 3,
					distance: 6,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'S*',
				},
				'Z2': {
					type: 1,
					x: 963,
					y: 487,
					hidden: 3,
					distance: 8,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						let recons = MAPDATA[100].getCarrierRecons(true), reconsReq = [1,2,2,1];
						if(recons >= reconsReq[CHDATA.event.maps[4].diff - 1]){
							this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 115: 'Z4', 105: 'Z3' });
							return this.showLoSPlane;
						}
						else return 'Z3';
					}
				},
				'Z3': {
					type: 1,
					x: 1070,
					y: 462,
					hidden: 3,
					distance: 9,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Z4',
				},
				'Z4': {
					type: 1,
					x: 1072,
					y: 652,
					hidden: 3,
					distance: 9,
					bgmOverride: 26,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						let requiredAir = (CHDATA.event.maps[4].diff === 4 ? -3 : 1);
						if(FLEETS1[0].AS >= requiredAir) CHDATA.event.maps[4].debuff.Z4AS = 1;
						if(CHDATA.temp.rank === 'S') CHDATA.event.maps[4].debuff.Z4 = 1;
					},
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for (let ship of ships) {
							if(checkHistorical([ship.mid],MAPDATA[100].maps[4].historical.cardiv1,[1,1,1,1]) || checkHistorical([ship.mid],MAPDATA[100].maps[4].historical.cardiv2,[1,1,1,1])){
								ship.bonusSpecial = [{mod:1.1}]
							}
						}
					},
				},
				'Z5': {
					type: 1,
					x: 901,
					y: 248,
					hidden: 4,
					distance: 8,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB <= 5) return 'Z8';
						else{
							if(ships.speed >= 10 && ships.escort.speed >= 10) return 'Z7';
							else return 'Z6';
						}
					},
				},
				'Z6': {
					type: 1,
					x: 822,
					y: 172,
					hidden: 4,
					distance: 8,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'Z7',
				},
				'Z7': {
					type: 1,
					x: 851,
					y: 93,
					hidden: 4,
					distance: 9,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
						4: ['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].ships[0].type != 'CV' && FLEETS1[0].ships[0].type != 'CVB') return 'Z9';
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 100: 'ZZ1', 85: 'Z9' });
						return this.showLoSPlane;
					},
				},
				'Z8': {
					type: 1,
					x: 1006,
					y: 228,
					hidden: 4,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].ships[0].type != 'CV' && FLEETS1[0].ships[0].type != 'CVB') return 'ZZ4';
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 90: 'ZZ2', 75: 'ZZ4' });
						if(this.showLoSPlane !== 'ZZ4' && (ships.speed < 10 || ships.escort.speed < 10)) this.showLoSPlane = 'ZZ3';
						return this.showLoSPlane;
					},
				},
				'Z9': {
					type: 3,
					x: 734,
					y: 101,
					hidden: 4,
					distance: 8,
					end: true,
				},
				'ZZ1': {
					type: 1,
					x: 933,
					y: 78,
					hidden: 4,
					distance: 10,
					aironly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'ZZ2',
				},
				'ZZ2': {
					type: 1,
					x: 970,
					y: 153,
					hidden: 4,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'ZZ5',
				},
				'ZZ3': {
					type: 1,
					x: 1068,
					y: 174,
					hidden: 4,
					distance: 10,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'ZZ2',
				},
				'ZZ4': {
					type: 3,
					x: 1102,
					y: 226,
					hidden: 4,
					distance: 10,
					end: true,
				},
				'ZZ5': {
					type: 1,
					x: 1046,
					y: 91,
					hidden: 4,
					distance: 10,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1583.png',
						offsetX: -45,
						offsetY: -65,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for (let ship of ships) {
							if(checkHistorical([ship.mid],MAPDATA[100].maps[4].historical.cardiv1,[1,1,1,1]) || checkHistorical([ship.mid],MAPDATA[100].maps[4].historical.cardiv2,[1,1,1,1])){
								ship.bonusSpecial = [{mod:1.4}]
							}
							else if(ship.type === 'CV' || ship.type === 'CVL' || ship.type === 'CVB'){
								ship.bonusSpecial = [{mod:1.25}]
							}
						}
					},
				},
			},
		},
		5: {
			name: 'E-5',
			nameT: 'An Ominous Wake',
			fleetTypes: [0,7],
			bgmMap: 2130,
			bgmDN: 31,
			bgmNN: 31,
			bgmDB: 34,
			bgmNB: 34,
			bossnode: [22],
			giveLock: 1004,
			checkLock: [1001,1002,1003,1005,1006],
			gaugepos: [30, 0],
			reward: {
				3: { items: [167,317,1016,1013] },
				2: { items: [167,317,1013] },
				1: { items: [167,317] },
				4: { items: [167] },
			},
			parts:{
				1:{
					currentBoss: 'V',
					bar:{
						gaugeID: 50,
						gaugeIDLD: 51,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x:-10, y:-20 },
						hortOffsetLD: { x:-10, y:-29 },
						vertPos: { x:660, y:-35 },
					},
					lbas: 2,
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
						chance: { 3: .25, 2: .25, 1: .25, 4: .25 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						debuffGive: function(airState,totalHPLost) {
							if (airState >= 1 && (CHDATA.event.maps[5].diff === 3 ? totalHPLost === 0 : true)){
								CHDATA.event.maps[5].debuff.AB = 1;
							} 
						}
					},
					supportEB:{
						comps:{
							3: [3045,1567,1529,1543,1860,1860],
							2: [3045,1529,1529,1543,1859,1859],
							1: [3045,1529,1529,1542,1858,1858],
							4: [3045,1529,1524,1542,1857,1857],
						},
						ldOnly: true,
					},
					maphp: {
						3: { 1: 4000 },
						2: { 1: 3450 },
						1: { 1: 3250 },
						4: { 1: 3000 },
					},
					finalhp: {
						3: 700,
						2: 700,
						1: 700,
						4: 700,
					},
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '5_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[MAPNUM].hp <= getMapLDHP(100, 5, CHDATA.event.maps[5].diff, CHDATA.event.maps[5].part);
					}
				},
			},
			debuffCheck: function(debuff){
				if (!debuff) return false;
				let isLD = CHDATA.event.maps[5].hp <= getMapLDHP(100, 5, CHDATA.event.maps[5].diff, CHDATA.event.maps[5].part);
				if(isLD){
					if(debuff.W && debuff.H && (debuff.AB || CHDATA.config.disableRaidReq)) return true;
				}
			},
			nodes: {
				'Start': {
					type: 0,
					x: 331,
					y: 110,
					route: 'A',
				},
				'A': {
					type: 3,
					x: 292,
					y: 49,
					distance: 2,
					routeS: ['B', 'O'],
				},
				'B': {
					type: 1,
					x: 216,
					y: 122,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 92: 'C', 77: 'D' });
						if(this.showLoSPlane === 'C'){
							if(ships.DD >= 3 && ships.aBB + ships.aCV <= 2) this.showLoSPlane = 'F';
							else if(CHDATA.event.maps[5].routes.indexOf(1) !== -1) this.showLoSPlane = 'C*';
						}
						return this.showLoSPlane;
					},
				},
				'C': {
					type: 3,
					x: 124,
					y: 168,
					distance: 2,
					replacedBy: 'C*',
					routeS: ['E', 'G'],
				},
				'C*': {
					type: 3,
					x: 124,
					y: 168,
					distance: 2,
					routeS: ['E*', 'G'],
				},
				'D': {
					type: 3,
					x: 88,
					y: 80,
					distance: 2,
					end: true,
				},
				'E': {
					type: 1,
					x: 37,
					y: 212,
					distance: 3,
					replacedBy: 'E*',
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
				},
				'E*': {
					type: 1,
					x: 37,
					y: 212,
					distance: 3,
					hidden: 1,
					compName: 'E',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'W',
				},
				'F': {
					type: 1,
					x: 250,
					y: 219,
					distance: 2,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'J',
				},
				'G': {
					type: 1,
					x: 183,
					y: 249,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if((ships.CL > 0 && ships.CL + ships.CA + ships.CAV >= 2) || ships.DD >= 1) return 'I';
						else return 'H';
					},
				},
				'H': {
					type: 1,
					x: 215,
					y: 324,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						let requiredAir = (CHDATA.event.maps[5].diff === 3 ? 2 : 1);
						if(FLEETS1[0].AS >= requiredAir) CHDATA.event.maps[5].debuff.H = 1;
					},
					route: 'I',
				},
				'I': {
					type: 1,
					x: 293,
					y: 297,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'K',
				},
				'J': {
					type: 1,
					x: 371,
					y: 208,
					distance: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.AV >= 1) return 'L';
						else return 'K';
					},
				},
				'K': {
					type: 1,
					x: 429,
					y: 291,
					distance: 2,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(ships.speed >= 10 && ships.CL + ships.DD >= 2) return 'L';
						else return 'M';
					},
				},
				'L': {
					type: 2,
					x: 472,
					y: 222,
					distance: 1,
					resource: 2,
					amount: [50,65,80,95,110],
					routeC: function(ships){
						if(ships.CLT === 0 && ships.DD >= 1) return 'N';
						else{
							FLEETS1[0].nodePrevious = 'L';
							return 'S';
						}
					},
				},
				'M': {
					type: 1,
					x: 562,
					y: 337,
					distance: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'V',
				},
				'N': {
					type: 1,
					x: 587,
					y: 267,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'V',
				},
				'O': {
					type: 1,
					x: 413,
					y: 38,
					distance: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,4,true),{ 81: 'Q', 68: 'P' });
						return this.showLoSPlane;
					},
				},
				'P': {
					type: 3,
					x: 547,
					y: 36,
					distance: 2,
					end: true,
				},
				'Q': {
					type: 1,
					x: 528,
					y: 122,
					distance: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships){
						if(ships.DD === 0 || ships.aBB + ships.aCV > 3){
							FLEETS1[0].nodePrevious = 'Q';
							return 'S';
						}
						else{
							if(ships.CV + ships.CVB >= 2) return 'R';
							else return 'T';
						}
					},
				},
				'R': {
					type: 1,
					x: 623,
					y: 89,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'T',
				},
				'S': {
					type: 1,
					x: 542,
					y: 180,
					distance: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(FLEETS1[0].nodePrevious === 'L') return 'N';
						else if(FLEETS1[0].nodePrevious === 'Q') return 'T';
						else return 'T';
					},
				},
				'T': {
					type: 1,
					x: 608,
					y: 187,
					distance: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'U',
				},
				'U': {
					type: 1,
					x: 668,
					y: 245,
					distance: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'V',
				},
				'V': {
					type: 1,
					x: 680,
					y: 339,
					distance: 2,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1557.png',
						offsetX: -55,
						offsetY: -65,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					setupSpecial: function(){
						if(MAPDATA[100].maps[5].debuffCheck(CHDATA.event.maps[5].debuff)){
							FLEETS2S[1].supportType = 3;
							let ships = FLEETS1[0].ships;
							for (let ship of ships) {
								ship.bonusSpecial = [{mod:1.1}];
							}
							for (let base of LBAS){
								base.bonusSpecial = {mod:1.2};
							}
						}
					}
				},
				'W': {
					type: 1,
					x: 123,
					y: 275,
					distance: 2,
					hidden: 1,
					enemyPreview: {
						sprite: 'assets/maps/100/supporth.png',
						offsetX: 30,
						offsetY: -40,
					},
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(((CHDATA.event.maps[5].diff === 1 || CHDATA.event.maps[5].diff === 4) && CHDATA.temp.rank === 'A') || CHDATA.temp.rank === 'S') CHDATA.event.maps[5].debuff.W = 1;
					},
					route: 'H',
				},
			}
		},
		6: {
			name: 'E-6',
			nameT: 'Liberation of the MH Isles',
			fleetTypes: [0,1,2],
			bgmMap: 2035,
			bgmDN: 71,
			bgmNN: 71,
			bgmDB: 131,
			bgmNB: 131,
			canPan: true,
			bossnode: [9,25,"Z4"],
			giveLock: [1005,1006],
			checkLock: [1001,1002,1003,1004],
			transportCalc: function(ships,rank) {
				rank = rank || 'S';
				let tp = transportCalcStandard(ships,'S');
				let tp2 = 0;
				for(let ship of ships){
					if(ship.type === 'SS' || ship.type === 'SSV') tp2 += 5;
					for(let equip of ship.items){
						if(equip === -1) continue;
						if(EQDATA[CHDATA.gears['x' + equip].masterId].type === LANDINGTANK) tp2 += 30;
						if(EQDATA[CHDATA.gears['x' + equip].masterId].type === DRUM) tp2 += 15;
					}
				}
				if (rank == 'A') tp2 *= 0.7;
				if (rank != 'S' && rank != 'A') return 0;
				return tp + tp2;
			},
			reward: {
				3: { items: [1001,186,1014,1017] },
				2: { items: [1001,186,1013,1016] },
				1: { items: [1001,180,1016] },
				4: { items: [1001,180] },
			},
			enemyLBAS:{
				3: [
					{
						planes: [562,562,561,561],
						planecount: [24, 24, 12, 12],
					},
					{
						planes: [562,562,561,561],
						planecount: [24, 24, 12, 12],
					},
					{
						planes: [595,594,562,561],
						planecount: [24, 24, 12, 12],
					},
				],
				2: [
					{
						planes: [562,561,561,561],
						planecount: [24, 12, 6, 6],
					},
					{
						planes: [562,561,561,561],
						planecount: [24, 12, 6, 6],
					},
				],
				1: [
					{
						planes: [561,561,561,561],
						planecount: [24, 12, 6, 6],
					},
					{
						planes: [561,561,561,561],
						planecount: [24, 12, 6, 6],
					},
				],
			},
			parts:{
				1:{
					currentBoss: 'I',
					bar:{
						gaugeID: 60,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						fill: '00ff00',
						hortOffset: { x: -12, y: -19 },
						vertPos: { x: -5, y: -35 },
						vertFillDimensions: { width: 9, height: 171 },
					},
					maphp: {
						3: { 1: 500 },
						2: { 1: 440 },
						1: { 1: 400 },
						4: { 1: 370 },
					},
					finaltp: {
						3: 80,
						2: 70,
						1: 65,
						4: 60,
					},
					transport: 'G',
				},
				2:{
					currentBoss: 'Y',
					bar:{
						gaugeID: 61,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x: -7, y: -34 },
						vertPos: { x: -5, y: -35 },
						vertFillDimensions: { width: 6, height: 171 },
					},
					lbas: 3,
					maphp: {
						3: { 1: 3600 },
						2: { 1: 3150 },
						1: { 1: 2700 },
						4: { 1: 2400 },
					},
					finalhp: {
						3: 800,
						2: 700,
						1: 600,
						4: 600,
					},
					enemyLBASTargeting: [
						// part 1
						{ letter: 'L', selectStart: 1, selectEnd: 0.65, lockWaves: [0,1,2] },
						{ letter: 'M', selectStart: 1, selectEnd: 0.65, lockWaves: [0,1,2] },
						// part 2
						{ letter: 'L', selectStart: 0.65, selectEnd: 0.3, lockWaves: [0] },
						{ letter: 'M', selectStart: 0.65, selectEnd: 0.3, lockWaves: [0] },
						{ letter: 'O', selectStart: 0.65, selectEnd: 0.3, lockWaves: [1,2], },
						{ letter: 'Q', selectStart: 0.65, selectEnd: 0.3, lockWaves: [1,2], },
						// part 3
						{ letter: 'O', selectStart: 0.3, selectEnd: 0, lockWaves: [1] },
						{ letter: 'Q', selectStart: 0.3, selectEnd: 0, lockWaves: [1] },
						{ letter: 'Y', selectStart: 0.3, selectEnd: 0, lockWaves: [0,0,2,2] },
					],
					transport: null,
				},
				3:{
					currentBoss: 'Z4',
					bar:{
						gaugeID: 62,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x: -14, y: -40 },
						vertPos: { x: -5, y: -35 },
						vertFillDimensions: { width: 6, height: 171 },
					},
					supportEB:{
						comps:{
							3: [3046,1567,1567,1761,1744,1744],
							2: [3046,1567,1529,1761,1743,1743],
							1: [3046,1529,1529,1595,1742,1742],
							4: [3046,1529,1529,1594,1575,1575],
						},
					},
					enemyLBASTargeting: [
						// part 1
						{ letter: 'Q', selectStart: 1, selectEnd: 0.7, lockWaves: [2,2] },
						{ letter: 'Z', selectStart: 1, selectEnd: 0.7, lockWaves: [0,0] },
						{ letter: 'Z3', selectStart: 1, selectEnd: 0.7, lockWaves: [1,1] },
						// part 2
						{ letter: 'Z', selectStart: 0.7, selectEnd: 0.35, lockWaves: [1,2] },
						{ letter: 'Z3', selectStart: 0.7, selectEnd: 0.35, lockWaves: [1,2] },
						{ letter: 'Z4', selectStart: 0.7, selectEnd: 0.35, lockWaves: [0,0] },
						// part 3
						{ letter: 'Z', selectStart: 0.35, selectEnd: 0, lockWaves: [2] },
						{ letter: 'Z3', selectStart: 0.35, selectEnd: 0, lockWaves: [2] },
						{ letter: 'Z4', selectStart: 0.35, selectEnd: 0, lockWaves: [0,0,1,1] },
					],
					lbas: 3,
					maphp: {
						3: { 1: 4200 },
						2: { 1: 3800 },
						1: { 1: 3600 },
						4: { 1: 3330 },
					},
					finalhp: {
						3: 765,
						2: 705,
						1: 660,
						4: 660,
					},
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '6_1.png', x: 0, y: 0 }],
					panTo: [400, 300],
					unlock: function() {
						return CHDATA.event.maps[6].part >= 2;
					}
				},
				2: {
					images: [{ name: '6_2.png', x: 0, y: 0 }],
					panTo: [400, 500],
					unlock: function() {
						return CHDATA.event.maps[6].part >= 3;
					}
				},
			},
			debuffCheck: function(debuff){
				if(!debuff) return false;
				if(debuff.S && debuff.T && (CHDATA.event.maps[6].diff === 4 || debuff.V) && debuff.XAS && debuff.X) return true;
			},
			additionalChecks: function(ships,errors) {
				if (CHDATA.event.maps[3].diff === 1 || CHDATA.event.maps[3].diff === 4) return;
				let lock = null, allSame = true, has6thLock = false, hasMHLock = false;
				let num = (CHDATA.fleets.combined) ? 2 : 1;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
							if (!has6thLock && CHDATA.ships[sid].lock === 1005) has6thLock = true;
							if (!hasMHLock && CHDATA.ships[sid].lock === 1006) hasMHLock = true;
						}
					}
				}
				if (!allSame) errors.push('No mixed locks.');
				if(CHDATA.event.maps[6].part === 1){ // part 1 restrictions
					if(CHDATA.fleets.combined) errors.push('A Combined Fleet cannot sortie at this time.');
				}
				else{ // part 2/3 restrictions
					if(CHDATA.fleets.combined && has6thLock) errors.push('The 6th Fleet cannot sortie as a Combined Fleet.');
				}
			},
			startCheck: function() {
				if(CHDATA.event.maps[6].part === 1){
					for (let i=0; i<CHDATA.fleets[1].length; i++) {
						chGiveLock(1,i+1,1005);
					}
					return 'Start';
				}
				else{
					if(CHDATA.fleets.combined){
						for (let n=1; n<=2; n++) {
							for (let i=0; i<CHDATA.fleets[n].length; i++) {
								chGiveLock(n,i+1,1006);
							}
						}
					}
					else{
						for (let i=0; i<CHDATA.fleets[1].length; i++) {
							chGiveLock(1,i+1,1005);
						}
					}
					return 'Start';
				}
			},
			nodes: {
				'Start': {
					type: 0,
					x: 124,
					y: 95,
					routeC: function(ships){
						if(CHDATA.event.maps[6].routes.indexOf(1) === -1){
							this.showNoCompass = true;
							return 'A';
						}
						else{
							if(CHDATA.fleets.combined) return 'J';
							else return 'A';
						}
					}
				},
				'A': {
					type: 1,
					x: 233,
					y: 207,
					distance: 1,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						let subsReq = [3,ships.total,ships.total,2];
						if(ships.SS + ships.SSV < subsReq[CHDATA.event.maps[6].diff - 1]) return 'C';
						else{
							this.showLoSPlane = checkELoS33(getELoS33(1,4),{ 5: 'B', 0: 'D' });
							return this.showLoSPlane;
						}
					},
				},
				'B': {
					type: 1,
					x: 215,
					y: 308,
					distance: 2,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'E',
				},
				'C': {
					type: 1,
					x: 333,
					y: 197,
					distance: 2,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'D',
				},
				'D': {
					type: 1,
					x: 331,
					y: 241,
					distance: 2,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'F',
				},
				'E': {
					type: 1,
					x: 287,
					y: 350,
					distance: 3,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'G',
				},
				'F': {
					type: 1,
					x: 423,
					y: 288,
					distance: 3,
					bgmOverride: 120,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'G',
				},
				'G': {
					type: 2,
					x: 384,
					y: 385,
					distance: 3,
					resource: 0,
					routeC: function(ships){
						if(CHDATA.event.maps[6].diff !== 4 && ships.SS + ships.SSV === 0) return 'H';
						return 'I';
					},
				},
				'H': {
					type: 3,
					x: 442,
					y: 431,
					distance: 4,
					end: true,
				},
				'I': {
					type: 1,
					x: 369,
					y: 312,
					distance: 3,
					bgmOverride: 71,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '1641.png',
						offsetX: -65,
						offsetY: -40,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					setupSpecial: function() {
						let ships = FLEETS1[0].ships;
						for (let ship of ships) {
							if(ship.type === 'SS' || ship.type === 'SSV'){
								ship.bonusSpecial = [{mod:1.4}]
							}
						}
					},
				},
				'J': {
					type: 1,
					x: 331,
					y: 70,
					distance: 1,
					hidden: 1,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'K',
				},
				'K': {
					type: 3,
					x: 472,
					y: 102,
					distance: 3,
					hidden: 1,
					routeS: ['L', 'M'],
				},
				'L': {
					type: 1,
					x: 425,
					y: 174,
					distance: 3,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].nodePrevious === 'M') return 'N';
						FLEETS1[0].nodePrevious = 'L';
						if(ships.BBV + ships.escort.BBV > 0 || ships.aCV + ships.escort.aCV > 4 || ships.CV + ships.CVB + ships.escort.CV + ships.escort.CVB > 3) return 'M';
						return 'N';
					}
				},
				'M': {
					type: 1,
					x: 514,
					y: 177,
					distance: 3,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].nodePrevious === 'L') return 'O';
						FLEETS1[0].nodePrevious = 'M';
						if(ships.CV + ships.CVB + ships.escort.CV + ships.escort.CVB > 0 || ships.aBB + ships.escort.aBB > 4 || ships.CVL + ships.escort.CVL > [2,2,1,3][CHDATA.event.maps[6].diff - 1]) return 'L';
						return 'O';
					}
				},
				'N': {
					type: 4,
					x: 497,
					y: 248,
					distance: 3,
					hidden: 1,
					resource: 1,
					lostMax: 0.1,
					route: 'Q',
				},
				'O': {
					type: 1,
					x: 628,
					y: 259,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					routeC: function(ships){
						if(ships.CL === 0 && ships.AV === 0 && ships.LHA === 0) return 'P';
						if(ships.CL + ships.escort.CL + ships.AV + ships.escort.AV + ships.LHA + ships.escort.LHA + ships.DD + ships.escort.DD + ships.DE + ships.escort.DE < (CHDATA.event.maps[6].diff === 4 ? 4 : 5)) return 'R';
						if(ships.aBB + ships.escort.aBB === 4 || ships.CV > 0 || ships.CVB > 0) return 'R';
						return 'S';
					},
				},
				'P': {
					type: 1,
					x: 568,
					y: 347,
					distance: 4,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'U',
				},
				'Q': {
					type: 1,
					x: 491,
					y: 386,
					distance: 4,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[6].routes.indexOf(2) !== -1){
							if(ships.speed <= 5 || ships.escort.speed <= 5) return 'P';
							if(MAPDATA[100].getSurfaceRadars(true) >= [3,3,5,2][CHDATA.event.maps[6].diff - 1]) return 'V';
							return 'U';
						}
						else{
							if(ships.CV + ships.CVB + ships.escort.CV + ships.escort.CVB > 2 && ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB > 3) return 'P';
							return 'U';
						}
					},
				},
				'R': {
					type: 1,
					x: 723,
					y: 299,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'S',
				},
				'S': {
					type: 1,
					x: 682,
					y: 349,
					distance: 5,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						let drums = FLEETS1[0].getWithItemsOfTypes([DRUM]).length + FLEETS1[1].getWithItemsOfTypes([DRUM]).length, drumReq = [3,3,4,2];
						if(drums >= drumReq[CHDATA.event.maps[6].diff - 1]) return 'T';
						else{
							let los = 0, losReq = [25,30,40,15], fleet = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							for(let ship of fleet){
								for(let equip of ship.equips){
									if(equip.type === CARRIERSCOUT || equip.type === CARRIERSCOUT2) los += equip.LOS;
									else if(equip.type === FLYINGBOAT) los += Math.floor(equip.LOS * 1.5);
								}
							}
							if(los > losReq[CHDATA.event.maps[6].diff - 1]) return 'X';
							return 'Y';
						}
					},
					debuffGive: function(){
						let airReq = [1,2,2,1];
						if(FLEETS1[0].AS >= airReq[CHDATA.event.maps[6].diff - 1]) CHDATA.event.maps[6].debuff.S = 1;
					},
				},
				'T': {
					type: 1,
					x: 636,
					y: 391,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(((CHDATA.event.maps[6].diff === 4 || CHDATA.event.maps[6].diff === 1) && CHDATA.temp.rank === 'A') || CHDATA.temp.rank === 'S') CHDATA.event.maps[6].debuff.T = 1;
					},
					route: 'Y',
				},
				'U': {
					type: 1,
					x: 591,
					y: 402,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'V',
				},
				'V': {
					type: 1,
					x: 558,
					y: 455,
					distance: 5,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[6].routes.indexOf(2) !== -1){
							if(ships.speed <= 5 || ships.escort.speed <= 5) return 'Y';
							if(ships.BB > 0 || ships.escort.BB > 0) return 'Z';
							if(ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 4 && ships.CLT + ships.escort.CLT <= 1) return 'W*';
							return 'Z';
						}
						else{
							this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 45: 'Y', 35: 'W' });
							return this.showLoSPlane;
						}
					},
					debuffGive: function(){
						let airReq = [1,1,2,-2];
						if(FLEETS1[0].AS >= airReq[CHDATA.event.maps[6].diff - 1]) CHDATA.event.maps[6].debuff.V = 1;
					},
				},
				'W': {
					type: 3,
					x: 459,
					y: 515,
					distance: 5,
					hidden: 1,
					replacedBy: 'W*',
					end: true,
				},
				'W*': {
					type: 3,
					x: 459,
					y: 515,
					distance: 5,
					hidden: 2,
					routeS: ['Z2','Z3'],
				},
				'X': {
					type: 1,
					x: 725,
					y: 473,
					distance: 6,
					hidden: 1,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						let airReq = [-2,1,2,-2];
						if(FLEETS1[0].AS >= airReq[CHDATA.event.maps[6].diff - 1]) CHDATA.event.maps[6].debuff.XAS = 1;
						if((CHDATA.event.maps[6].diff === 4 && CHDATA.temp.rank === 'A') || CHDATA.temp.rank === 'S') CHDATA.event.maps[6].debuff.X = 1;
					},
				},
				'Y': {
					type: 1,
					x: 662,
					y: 466,
					distance: 6,
					hidden: 1,
					bgmOverride: 99,
					end: true,
					boss: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					enemyPreview: {
						sprite: '3016.png',
						offsetX: 10,
						offsetY: 0,
					},
					friendFleet: ['6thflt-6'],
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
						for (let ship of ships) {
							if(MAPDATA[100].maps[6].debuffCheck(CHDATA.event.maps[6].debuff)){
								ship.bonusSpecial = [{mod:1.15}];
								ship.bonusSpecial.push({mod:1.05,on:[3016,3017,3018,3019,3020,3021]});
								ship.bonusSpecial.push({mod:1.35,on:[1696,1697,1698]});
								for(let equip of ship.equips){
									if(equip.type === DIVEBOMBER || equip.type === SEAPLANEBOMBER){
										ship.bonusSpecial.push({mod:1.25,on:[1650,1651,1652]});
										ship.bonusSpecial.push({mod:1.35,on:[1699,1700,1701,1702,1703,1704]});
										break;
									}
								}
							}
							else{
								ship.bonusSpecial = [{mod:1.1}];	
							}
						}
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S' && Math.random() < 0.1 || CHDATA.temp.rank == 'A' && Math.random() < 0.05){
							chAddReward({ ships: [990], firstOnly: true });
							chShowReward({ ships: [990], firstOnly: true });
						}
					},
				},
				'Z': {
					type: 1,
					x: 603,
					y: 524,
					distance: 6,
					hidden: 2,
					enemyPreview: {
						sprite: '1849.png',
						offsetX: 0,
						offsetY: 0,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 150: 'Z4', 125: 'Z1' });
						return this.showLoSPlane;
					},
				},
				'Z1': {
					type: 3,
					x: 552,
					y: 544,
					distance: 5,
					hidden: 2,
					end: true,
				},
				'Z2': {
					type: 1,
					x: 343,
					y: 501,
					distance: 4,
					hidden: 2,
					end: true,
					enemyPreview: {
						sprite: '3045.png',
						offsetX: -65,
						offsetY: -50,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if(((CHDATA.event.maps[6].diff === 4 || CHDATA.event.maps[6].diff === 1) && CHDATA.temp.rank === 'A') || CHDATA.temp.rank === 'S'){
							if(typeof(CHDATA.event.maps[6].debuff.Z2) === 'undefined') CHDATA.event.maps[6].debuff.Z2 = 0;
							if(CHDATA.event.maps[6].debuff.Z2 < 10) CHDATA.event.maps[6].debuff.Z2 += 1;
							if(!CHDATA.event.maps[6].debuff.BSUPP){
								if(CHDATA.event.maps[6].debuff.Z2 >= [1,1,2,1][CHDATA.event.maps[6].diff - 1]){
									SM.play('done');
									alert("A map mechanic has changed!");
									CHDATA.event.maps[6].debuff.BSUPP = 1;
								}
							}
						}
					},
				},
				'Z3': {
					type: 1,
					x: 509,
					y: 599,
					distance: 6,
					hidden: 2,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					compDiffF: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 130: 'Z4', 110: 'Z1' });
						return this.showLoSPlane;
					},
				},
				'Z4': {
					type: 1,
					x: 586,
					y: 594,
					distance: 6,
					hidden: 2,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '3048.png',
						offsetX: 0,
						offsetY: -60,
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					friendFleet: ['6thflt-7'],
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for (let ship of ships) {
							let mod = 1.05;
							if(ship.getItemsOfTypes([SCAMP,RADARS,RADARL,RADARXL]).length > 0){mod *= 1.1;}
							if(ship.getItemsOfTypes([CARRIERSCOUT,CARRIERSCOUT2]).length > 0){mod *= 1.15;}
							ship.bonusSpecial = [{mod:mod}];
						}
						if(typeof(CHDATA.event.maps[6].debuff.BSUPP) !== 'undefined'){
							FLEETS2S[1].supportType = 3;
						}
					}
				},
			}
		},
		7: {
			name: 'E-7',
			nameT: 'Breakthrough Over the Rising Sun――',
			canPan: true,
			fleetTypes: [0,1,2,3,7],
			bgmMap: 115,
			bgmDN: 2200,
			bgmNN: 2200,
			bgmDB: 2201,
			bgmNB: 2201,
			bossnode: [23],
			historical: {
				kon: [14,42,43,46,405,486],
				ozawa: [111, 102,103,116, 77,87, 22,100,183, 421,423],
				nishimura: [26,27,70,43,97,413,414],
			},
			reward: {
				3: { ships: [992], items: [1019,1019,1015,1018] },
				2: { ships: [992], items: [1019,1019,1014,1017] },
				1: { ships: [992], items: [1019,1013,1016] },
				4: { ships: [992], items: [1019] },
			},
			parts:{
				1:{
					currentBoss: 'W',
					bar:{
						gaugeID: 70,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: true },
						hortOffset: { x: -9, y: -30 },
						vertPos: { x: 665, y: 5 },
						vertFillDimensions: { width: 6, height: 176 },
					},
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
						chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
							4: ['Casual 1', 'Casual 2'],
						},
						debuffGive: function(airState,totalHPLost) {
							if(airState >= 1){
								if(typeof(CHDATA.event.maps[7].debuff.ABAS) === 'undefined') CHDATA.event.maps[7].debuff.ABAS = 0;
								if(CHDATA.event.maps[7].debuff.ABAS < 10) CHDATA.event.maps[7].debuff.ABAS += 1;
							}
							if(totalHPLost === 0){
								if(typeof(CHDATA.event.maps[7].debuff.ABPD) === 'undefined') CHDATA.event.maps[7].debuff.ABPD = 0;
								if(CHDATA.event.maps[7].debuff.ABPD < 10) CHDATA.event.maps[7].debuff.ABPD += 1;
							}
						}
					},
					lbas: 3,
					maphp: {
						3: { 1: 5500 },
						2: { 1: 5500 },
						1: { 1: 5500 },
						4: { 1: 5500 },
					},
					finalhp: {
						3: 1100,
						2: 1100,
						1: 1100,
						4: 1100,
					},
				},
			},
			enemyLBAS:{
				3: [
					{
						planes: [598,597,595,595],
						planecount: [16, 16, 16, 16],
					},
					{
						planes: [598,597,595,595],
						planecount: [16, 16, 16, 16],
					},
					{
						planes: [598,597,595,595],
						planecount: [16, 16, 16, 16],
					},
				],
				2: [
					{
						planes: [597,597,595,594],
						planecount: [12, 12, 16, 16],
					},
					{
						planes: [597,597,595,594],
						planecount: [12, 12, 16, 16],
					},
					{
						planes: [597,597,595,594],
						planecount: [12, 12, 16, 16],
					},
				],
				1: [
					{
						planes: [562,561,595,594],
						planecount: [12, 12, 12, 12],
					},
					{
						planes: [562,561,595,594],
						planecount: [12, 12, 12, 12],
					},
					{
						planes: [562,561,595,594],
						planecount: [12, 12, 12, 12],
					},
				],
				4: [
					{
						planes: [561,561,561,561],
						planecount: [10, 10, 8, 8],
					},
					{
						planes: [561,561,561,561],
						planecount: [10, 10, 8, 8],
					},
					{
						planes: [561,561,561,561],
						planecount: [10, 10, 8, 8],
					},
				],
			},
			enemyLBASTargeting: [],
			hiddenRoutes: {
				1: {
					images: [{ name: '7_1.png', x: 0, y: 0 }],
					panTo: [0, 0],
					unlock: function() {
						if(!CHDATA.event.maps[7].debuff) return false;
						return CHDATA.event.maps[7].debuff.I >= 1;
					}
				},
				2: {
					images: [{ name: '7_2.png', x: 0, y: 0 }],
					panTo: [900, 450],
					unlock: function() {
						if(!CHDATA.event.maps[7].debuff) return false;
						return CHDATA.event.maps[7].debuff.JR >= 1;
					}
				},
				3: {
					images: [{ name: '7_3.png', x: 0, y: 0 }],
					panTo: [621, 280],
					unlock: function(){
						if(!CHDATA.event.maps[7].debuff) return false;
						return CHDATA.event.maps[7].debuff.EY >= 1 && CHDATA.event.maps[7].debuff.MY >= 1;
					}
				},
			},
			debuffCheck: function(debuff){
				if(!debuff) return false;
				let reqAS = [2,2,2,1], reqPD = [0,1,2,0], reqN = [1,1,2,0], reqFR = [1,1,2,1];
				if(!debuff.LBAS){
					let isCasual = CHDATA.event.maps[7].diff === 4;
					if((isCasual || (debuff.N >= reqN[CHDATA.event.maps[7].diff-1])) && debuff.C2R && debuff.C3R && debuff.D3R && debuff.FR >= reqFR[CHDATA.event.maps[7].diff-1] && (CHDATA.config.disableRaidReq || (CHDATA.event.maps[7].debuff.ABAS >= reqAS[CHDATA.event.maps[7].diff-1] && (isCasual || CHDATA.event.maps[7].diff === 1 || CHDATA.event.maps[7].debuff.ABPD >= reqPD[CHDATA.event.maps[7].diff-1])))){
						SM.play('done');
						alert("A map mechanic has changed!");
						CHDATA.event.maps[7].debuff.LBAS = 1;
					}
				}
				if(!debuff.MAPMOD){
					if(debuff.P1 >= [1,1,2,1][CHDATA.event.maps[7].diff-1] && debuff.DAS >= [1,2,2,1][CHDATA.event.maps[7].diff-1]){
						SM.play('done');
						alert("A map mechanic has changed!");
						CHDATA.event.maps[7].debuff.MAPMOD = 1;
					}
				}
				if(!debuff.BOSSMOD){
					if(debuff.P2 && debuff.R && debuff.RAS && debuff.S && debuff.T && debuff.U && debuff.V >= [1,2,2,1][CHDATA.event.maps[7].diff-1] && debuff.W){
						SM.play('done');
						alert("A map mechanic has changed!");
						CHDATA.event.maps[7].debuff.BOSSMOD = 1;
					}
				}
				return false;
			},
			startCheck: function() {
				MAPDATA[100].maps[7].enemyLBASTargeting = [];
				let debuff = CHDATA.event.maps[7].debuff;
				if(debuff){
					if(!debuff.LBAS){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1){
							MAPDATA[100].maps[7].enemyLBASTargeting = [
								{ letter: 'U*', selectStart: 1, selectEnd: 0, lockWaves: [0,0] },
								{ letter: 'H-Y', selectStart: 1, selectEnd: 0, lockWaves: [1,1] },
								{ letter: 'V', selectStart: 1, selectEnd: 0, lockWaves: [2,2] },
							];
						}
						else if(CHDATA.event.maps[7].routes.indexOf(2) !== -1){
							MAPDATA[100].maps[7].enemyLBASTargeting = [
								{ letter: 'M-Y', selectStart: 1, selectEnd: 0, lockWaves: [0,0] },
								{ letter: 'M-Y', selectStart: 1, selectEnd: 0, lockWaves: [1,1] },
								{ letter: 'M-Y', selectStart: 1, selectEnd: 0, lockWaves: [2,2] },
							];
						}
						else if(CHDATA.event.maps[7].routes.indexOf(1) !== -1){
							MAPDATA[100].maps[7].enemyLBASTargeting = [
								{ letter: 'I-R', selectStart: 1, selectEnd: 0, lockWaves: [0,0] },
								{ letter: 'J-R', selectStart: 1, selectEnd: 0, lockWaves: [1,1] },
								{ letter: 'J-R', selectStart: 1, selectEnd: 0, lockWaves: [2,2] },
							];
						}
						else{
							MAPDATA[100].maps[7].enemyLBASTargeting = [
								{ letter: 'S', selectStart: 1, selectEnd: 0, lockWaves: [0,0] },
								{ letter: 'T', selectStart: 1, selectEnd: 0, lockWaves: [1,1] },
								{ letter: 'U', selectStart: 1, selectEnd: 0, lockWaves: [2,2] },
							];
						}
					}
					if(debuff.MAPMOD){
						let ships = FLEETS1[0].ships;
						if(CHDATA.fleets.combined) ships = ships.concat(FLEETS1[1].ships);
						for(let ship of ships){
							ship.bonusSpecial = [{mod:1.15}];
						}
					}
				}
				
				if(CHDATA.fleets.combined === 2 && CHDATA.event.maps[7].routes.indexOf(2) !== -1) return 'Start-Y';
				if(CHDATA.fleets.combined === 1 && CHDATA.event.maps[7].routes.indexOf(1) !== -1) return 'Start-R';
				return 'Start';
			},
			nodes: {
				'Start':{
					type: 0,
					x: 330,
					y: 645,
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[7].routes.indexOf(1) !== -1) return 'A*';
						return 'A';
					},
				},
				'Start-R':{
					type: 0,
					x: 159,
					y: 162,
					route: 'A-R',
				},
				'Start-Y':{
					type: 0,
					x: 1075,
					y: 673,
					routeC: function(ships){
						if(ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB <= 5 && ships.CLT + ships.escort.CLT <= 1) return 'A-Y';
						return 'K';
					}
				},
				'A': {
					type: 3,
					x: 423,
					y: 617,
					distance: 2,
					replacedBy: 'A*',
					routeS: ['B', 'M', 'S'],
				},
				'A*': {
					type: 3,
					x: 423,
					y: 617,
					distance: 2,
					hidden: 1,
					routeS: ['B', 'M', 'S*'],
				},
				'B': {
					type: 1,
					x: 560,
					y: 667,
					distance: 3,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(2) !== -1 && CHDATA.fleets.combined === 3){
							if(ships.BBV + ships.escort.BBV === 0) return 'C';
							return 'E';
						}
						else{
							if(CHDATA.fleets.combined === 1) return 'D';
							if(CHDATA.fleets.combined === 2) return 'E';
							if((CHDATA.fleets.combined === 3 && ships.aCV + ships.escort.aCV >= 2) || (ships.CV + ships.CVB >= 2)) return 'D';
							else return 'E';
						}
					}
				},
				'C': {
					type: 1,
					x: 632,
					y: 540,
					distance: 4,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(2) !== -1){
							if(CHDATA.fleets.combined === 3) return 'D-Y';
							return 'H';
						}
						else{
							this.showNoCompass = true;
							return 'H';
						}
					},
				},
				'D': {
					type: 1,
					x: 585,
					y: 762,
					distance: 4,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(FLEETS1[0].AS >= 1){
							if(typeof(CHDATA.event.maps[7].debuff.DAS) === 'undefined') CHDATA.event.maps[7].debuff.DAS = 0;
							if(CHDATA.event.maps[7].debuff.DAS < 10) CHDATA.event.maps[7].debuff.DAS += 1;
						}
					},
					route: 'F',
				},
				'E': {
					type: 1,
					x: 699,
					y: 638,
					distance: 4,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 2) return 'G';
						if(CHDATA.fleets.combined === 3) return 'C';
						if(ships.speed >= 10 && ships.aBB <= 1) return 'C';
						return 'G';
					},
				},
				'F': {
					type: 1,
					x: 707,
					y: 699,
					distance: 4,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'J',
				},
				'G': {
					type: 1,
					x: 777,
					y: 572,
					distance: 5,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'H',
				},
				'H': {
					type: 1,
					x: 870,
					y: 530,
					distance: 6,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 2){
							if(CHDATA.event.maps[7].routes.indexOf(2) !== -1){
								if((ships.aCV + ships.escort.aCV) - (ships.CVE + ships.escort.CVE) === 0) return 'C-Y';
								else return 'B-Y';
							}
							else return 'K';
						}
						else{
							if(CHDATA.fleets.combined === 3){
								this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 85: 'I', 75: 'K' });
								return this.showLoSPlane;
							}
							if(ships.CL > 0 && ships.total - ships.DD <= 5){
								this.showLoSPlane = checkELoS33(getELoS33(1,3),{ 70: 'I', 64: 'K' });
								return this.showLoSPlane;
							}
							return 'K';
						}
					},
				},
				'I': {
					type: 1,
					x: 857,
					y: 605,
					distance: 5,
					end: true,
					bgmOverride: 28,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					enemyPreview: {
						sprite: '1597.png',
					},
					setupSpecial: function(){
						if(typeof(CHDATA.event.maps[7].debuff.I) === 'undefined') FLEETS2[0].isFakeBoss = true;
						let ships = FLEETS1[0].ships;
						if(CHDATA.fleets.combined) ships = ships.concat(FLEETS1[1].ships);
						for(let ship of ships){
							ship.bonusSpecial = [];
							if(CHDATA.event.maps[7].debuff && CHDATA.event.maps[7].debuff.MAPMOD >= 1){
								ship.bonusSpecial.push({mod:1.2});
							}
							if(MAPDATA[100].maps[7].historical.kon.indexOf(getBaseId(ship.mid)) !== -1){
								ship.bonusSpecial.push({mod:1.2});
							}
						}
					},
					debuffGive: function(){
						if(FLEETS2[0].ships[0].HP <= 0) CHDATA.event.maps[7].debuff.I = 1;
					},
				},
				'J': {
					type: 1,
					x: 841,
					y: 703,
					distance: 5,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined === 1) return 'L';
						if(ships.CL > 0 && ships.aCV <= 3 && ships.total - ships.DD <= 4){
							this.showLoSPlane = checkELoS33(getELoS33(1,2),{ 75: 'I', 68: 'L' });
							return this.showLoSPlane;
						}
						return 'L';
					},
				},
				'K': {
					type: 1,
					x: 947,
					y: 560,
					distance: 6,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(2) !== -1 && CHDATA.fleets.combined === 2){
							if(ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 6 && ships.CLT + ships.escort.CLT <= 1) return 'A-Y';
							return 'H';
						}
						else{
							this.showNoCompass = true;
							return 'I';
						}
					}
				},
				'L': {
					type: 1,
					x: 937,
					y: 687,
					distance: 6,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'I',
				},
				'M': {
					type: 1,
					x: 338,
					y: 506,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						FLEETS1[0].nodePrevious = 'M';
						if(CHDATA.fleets.combined) return 'N';
						if(ships.CV === 2 && ships.CVL === 1 && ships.DD >= 2){
							if(ships.aBB <= 1) return 'O';
							if(ships.aBB <= 2) return 'N';
						}
						let nodeP = (CHDATA.event.maps[7].routes.indexOf(3) !== -1 ? 'P*' : 'P');
						return nodeP;
					}
				},
				'N': {
					type: 1,
					x: 270,
					y: 405,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(FLEETS1[0].AS >= 1){
							if(typeof(CHDATA.event.maps[7].debuff.N) === 'undefined') CHDATA.event.maps[7].debuff.N = 0;
							if(CHDATA.event.maps[7].debuff.N < 10) CHDATA.event.maps[7].debuff.N += 1;
						}
					},
					route: 'O',
				},
				'O': {
					type: 1,
					x: 258,
					y: 483,
					distance: 3,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(!CHDATA.fleets.combined && FLEETS1[0].nodePrevious === 'M') return 'Q';
						if(FLEETS1[0].nodePrevious === 'B-R'){
							if(ships.aCV + ships.escort.aCV + ships.CA + ships.escort.CA + ships.CAV + ships.escort.CAV + ships.BBV + ships.escort.BBV <= 5)
								return 'Q';
						}
						let nodeP = (CHDATA.event.maps[7].routes.indexOf(3) !== -1 ? 'P*' : 'P');
						return nodeP;
					}
				},
				'P': {
					type: 1,
					x: 239,
					y: 578,
					distance: 1,
					replacedBy: 'P*',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat(FLEETS1[1] ? FLEETS1[1].ships : []);
						for (let ship of ships) {
							let bonuses = [];
							let hasT3shell = false;
							let kamiLevel = -1;
							let hasT89 = false;
							let daihatsuLevel = -1;
							let has11thRegiment = false;
							let hasWG = false;
							let hasM4A1 = false;
							for (let equip of ship.equips) {
								if (equip.type == TYPE3SHELL) hasT3shell = true;
								if (!kamiLevel == -1 && equip.mid === 167) kamiLevel = equip.level || 0;
								if (equip.mid === 166) hasT89 = true;
								if (!daihatsuLevel == -1 && equip.btype === B_LC1) daihatsuLevel = equip.level || 0;
								if (equip.mid === 230) has11thRegiment = true;
								if (equip.type === WG42) hasWG = true;
								if(equip.mid === 355) hasM4A1 = true;
							}
							if (hasT3shell) bonuses.push({ mod: 1.428, on: [1827,1828,1829,1830,1831,1832] });
							if (kamiLevel >= 0) bonuses.push({ mod: 1.4 + (0.053 * kamiLevel), on: [1827,1828,1829,1830,1831,1832] });
							if (hasT89) bonuses.push({ mod: 1.715, on: [1827,1828,1829,1830,1831,1832] });
							if (daihatsuLevel >= 0) bonuses.push({ mod: 1.22 + (0.089 * daihatsuLevel), on: [1827,1828,1829,1830,1831,1832] });
							if (has11thRegiment) bonuses.push({ mod: 1.75, on: [1827,1828,1829,1830,1831,1832] });
							if (hasWG) bonuses.push({ mod: 1.46, on: [1827,1828,1829,1830,1831,1832] });
							if (hasM4A1) bonuses.push({ mod: 1.8, on: [1827,1828,1829,1830,1831,1832] });
							if (bonuses.length) {
								ship.bonusSpecial = bonuses;
							}
						}
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S' || ((CHDATA.event.maps[7].diff === 4 || CHDATA.event.maps[7].diff === 1) && CHDATA.temp.rank === 'A')){
							if(typeof(CHDATA.event.maps[7].debuff.P1) === 'undefined') CHDATA.event.maps[7].debuff.P1 = 0;
							if(CHDATA.event.maps[7].debuff.P1 < 10) CHDATA.event.maps[7].debuff.P1 += 1;
						}
					},
					route: 'Q',
				},
				'P*': {
					type: 1,
					x: 239,
					y: 578,
					distance: 1,
					hidden: 3,
					compName: 'P',
					compDiff: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat(FLEETS1[1] ? FLEETS1[1].ships : []);
						for (let ship of ships) {
							let bonuses = [];
							let hasT3shell = false;
							let kamiLevel = -1;
							let hasT89 = false;
							let daihatsuLevel = -1;
							let has11thRegiment = false;
							let hasWG = false;
							let hasM4A1 = false;
							for (let equip of ship.equips) {
								if (equip.type == TYPE3SHELL) hasT3shell = true;
								if (!kamiLevel == -1 && equip.mid === 167) kamiLevel = equip.level || 0;
								if (equip.mid === 166) hasT89 = true;
								if (!daihatsuLevel == -1 && equip.btype === B_LC1) daihatsuLevel = equip.level || 0;
								if (equip.mid === 230) has11thRegiment = true;
								if (equip.type === WG42) hasWG = true;
								if(equip.mid === 355) hasM4A1 = true;
							}
							if (hasT3shell) bonuses.push({ mod: 1.428, on: [1827,1828,1829,1830,1831,1832] });
							if (kamiLevel >= 0) bonuses.push({ mod: 1.4 + (0.053 * kamiLevel), on: [1827,1828,1829,1830,1831,1832] });
							if (hasT89) bonuses.push({ mod: 1.715, on: [1827,1828,1829,1830,1831,1832] });
							if (daihatsuLevel >= 0) bonuses.push({ mod: 1.22 + (0.089 * daihatsuLevel), on: [1827,1828,1829,1830,1831,1832] });
							if (has11thRegiment) bonuses.push({ mod: 1.75, on: [1827,1828,1829,1830,1831,1832] });
							if (hasWG) bonuses.push({ mod: 1.46, on: [1827,1828,1829,1830,1831,1832] });
							if (hasM4A1) bonuses.push({ mod: 1.8, on: [1827,1828,1829,1830,1831,1832] });
							if (bonuses.length) {
								ship.bonusSpecial = bonuses;
							}
						}
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S'){
							CHDATA.event.maps[7].debuff.P2 = 1;
						}
						if(CHDATA.temp.rank === 'S' || ((CHDATA.event.maps[7].diff === 4 || CHDATA.event.maps[7].diff === 1) && CHDATA.temp.rank === 'A')){
							if(typeof(CHDATA.event.maps[7].debuff.P1) === 'undefined') CHDATA.event.maps[7].debuff.P1 = 0;	
							if(CHDATA.event.maps[7].debuff.P1 < 10) CHDATA.event.maps[7].debuff.P1 += 1;
						}
					},
					route: 'Q',
				},
				'Q': {
					type: 1,
					x: 163,
					y: 516,
					distance: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'R',
				},
				'R': {
					type: 1,
					x: 72,
					y: 447,
					distance: 3,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					enemyPreview: {
						sprite: '1547.png',
					},
					debuffGive: function(){
						let reqAir = [1,1,2,-2];
						if(FLEETS1[0].AS >= reqAir[CHDATA.event.maps[7].diff-1]) CHDATA.event.maps[7].debuff.RAS = 1;
						if(CHDATA.temp.rank === 'S' || ((CHDATA.event.maps[7].diff === 4 || CHDATA.event.maps[7].diff === 1) && CHDATA.temp.rank === 'A')) CHDATA.event.maps[7].debuff.R = 1;
					},
				},
				'S': {
					type: 1,
					x: 550,
					y: 386,
					distance: 4,
					enemyPreview: {
						sprite: '1597.png',
					},
					replacedBy: 'S*',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'T',
				},
				'S*': {
					type: 1,
					x: 550,
					y: 386,
					distance: 4,
					hidden: 1,
					compName: 'S',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 4', 'Hard 5', 'Hard 6'],
						2: ['Medium 4', 'Medium 5', 'Medium 6'],
						1: ['Easy 4', 'Easy 5', 'Easy 6'],
						4: ['Casual 4', 'Casual 5', 'Casual 6'],
					},
					compDiffF: {
						3: ['Hard 7', 'Hard 8', 'Hard 9'],
						2: ['Medium 7', 'Medium 8', 'Medium 9'],
						1: ['Easy 7', 'Easy 8', 'Easy 9'],
						4: ['Casual 7', 'Casual 8', 'Casual 9'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && CHDATA.temp.rank === 'S') CHDATA.event.maps[7].debuff.S = 1;
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1){
							return 'T*';
						}
						return 'T';
					},
				},
				'T': {
					type: 1,
					x: 621,
					y: 280,
					distance: 5,
					subonly: true,
					enemyPreview: {
						sprite: '1736.png',
					},
					replacedBy: 'T*',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[7].routes.indexOf(2) !== -1){
							return 'U*';
						}
						return 'U';
					},
				},
				'T*': {
					type: 1,
					x: 621,
					y: 280,
					distance: 5,
					subonly: true,
					hidden: 3,
					compName: 'T',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 3', 'Hard 4'],
						2: ['Medium 3', 'Medium 4'],
						1: ['Easy 3', 'Easy 4'],
						4: ['Casual 3', 'Casual 4'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && CHDATA.temp.rank === 'S') CHDATA.event.maps[7].debuff.T = 1;
					},
					route: 'U*',
				},
				'U': {
					type: 1,
					x: 734,
					y: 195,
					distance: 6,
					enemyPreview: {
						sprite: '1799.png',
					},
					replacedBy: 'U*',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'V',
				},
				'U*': {
					type: 1,
					x: 734,
					y: 195,
					distance: 6,
					hidden: 2,
					compName: 'U',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 3', 'Hard 4'],
						2: ['Medium 3', 'Medium 4'],
						1: ['Easy 3', 'Easy 4'],
						4: ['Casual 3'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && CHDATA.temp.rank === 'S') CHDATA.event.maps[7].debuff.U = 1;
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1){
							return 'V*';
						}
						return 'V';
					},
				},
				'V': {
					type: 1,
					x: 857,
					y: 188,
					distance: 6,
					normal: true,
					enemyPreview: {
						sprite: '1767.png',
					},
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					replacedBy: 'V*',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 120: 'W', 113: 'X' });
						return this.showLoSPlane;
					},
				},
				'V*': {
					type: 1,
					x: 857,
					y: 188,
					distance: 6,
					hidden: 3,
					raid: true,
					compName: 'V',
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.jpg',
					compDiff: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Casual 2'],
					},
					compDiffF: {
						3: ['Hard 4'],
						2: ['Medium 4'],
						1: ['Easy 4'],
						4: ['Casual 3'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && FLEETS1[0].AS >= 2){
							if(typeof(CHDATA.event.maps[7].debuff.V) === 'undefined') CHDATA.event.maps[7].debuff.V = 0;	
							if(CHDATA.event.maps[7].debuff.V < 10) CHDATA.event.maps[7].debuff.V += 1;
						}
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 120: 'W', 113: 'X' });
						return this.showLoSPlane;
					},
				},
				'W': {
					type: 1,
					x: 998,
					y: 176,
					distance: 7,
					end: true,
					boss: true,
					enemyPreview: {
						sprite: '3054.png',
					},
					distance: 5,
					backOverrideD: '7_back.jpg',
					backOverrideN: '7_back_n.png',
					friendFleet: ['6thflt-7', 'midway', 'opmo', 'crossroads'],
					compDiff: {
						3: [[['Hard 1'],['Hard 2'],['Hard 3']]],
						2: [[['Medium 1'],['Medium 2'],['Medium 3']]],
						1: [[['Easy 1'],['Easy 2'],['Easy 3']]],
						4: [[['Casual 1'],['Casual 2'],['Casual 3']]],
					},
					compDiffF: {
						3: [[['Hard 4'],['Hard 5'],['Hard 6']]],
						2: [[['Medium 4'],['Medium 5'],['Medium 6']]],
						1: [[['Easy 4'],['Easy 5'],['Easy 6']]],
						4: [[['Casual 4'],['Casual 5'],['Casual 6']]],
					},
					setupSpecial: function(){
						let ships = FLEETS1[0].ships;
						if (CHDATA.fleets.combined) ships = ships.concat(FLEETS1[1].ships);
						if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
						let debuff = CHDATA.event.maps[7].debuff;
						let flag = FLEETS1[0].ships[0];
						for(let ship of ships){
							ship.bonusSpecial = [];
							if(debuff){
								if(debuff.BOSSMOD){
									ship.bonusSpecial.push({mod:1.5});
								}
								else if(debuff.MAPMOD){
									ship.bonusSpecial.push({mod:1.2});
								}
								if(ship.getItemsOfTypes([TORPEDO]).length > 0){
									ship.bonusSpecial.push({mod:1.125});
								}
								if((flag.type === 'CV' || flag.type === 'CVL' || flag.type === 'CVB') && CHDATA.fleets.combined === 1){
									ship.bonusSpecial.push({mod:1.25});
								}
							}
						}
						for (let base of LBAS){
							if(debuff.BOSSMOD){
								base.bonusSpecial = {mod:2.5, on:[1790,1791,1792]};
							}
						}
					},
					debuffGive: function(){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && (CHDATA.temp.rank === 'A' || CHDATA.event.maps[7].diff === 1 || CHDATA.event.maps[7].diff === 4)) CHDATA.event.maps[7].debuff.W = 1;
					},
				},
				'X': {
					type: 3,
					x: 974,
					y: 89,
					distance: 7,
					end: true,
				},
				'A-R': {
					type: 3,
					x: 232,
					y: 254,
					distance: 4,
					hidden: 1,
					routeC: function(ships){
						let isCVFlag = FLEETS1[0].ships[0].type === 'CV' || FLEETS1[0].ships[0].type === 'CVL' || FLEETS1[0].ships[0].type === 'CVB' || FLEETS1[0].ships[0].type === 'BBV';
						if(isCVFlag && ships.aCV <= 3 && ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB + ships.CA + ships.escort.CA + ships.CAV + ships.escort.CAV <= 7){
							this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 210: 'C1-R', 190: 'B-R' });
							return this.showLoSPlane;
						}
						return 'B-R';
					},
				},
				'B-R': {
					type: 3,
					x: 279,
					y: 321,
					distance: 4,
					hidden: 1,
					routeC: function(ships){
						FLEETS1[0].nodePrevious = 'B-R';
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1 && (ships.SS + ships.escort.SS + ships.SSV + ships.escort.SSV + ships.AS + ships.escort.AS >= 3)) return 'N';
						if(ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB + ships.CA + ships.escort.CA + ships.CAV + ships.escort.CAV <= 8){
							let aradars = FLEETS1[0].getWithItemsOfTypes([A_AIRRADAR], "atype").length + FLEETS1[1].getWithItemsOfTypes([A_AIRRADAR], "atype").length, aradarReq = [2,2,3,1];
							if(aradars >= aradarReq[CHDATA.event.maps[7].diff - 1]) return 'C3-R';
						}
						return CHDATA.event.maps[7].routes.indexOf(2) !== -1 ? 'C2-R*' : 'C2-R';
					},
				},
				'C1-R': {
					type: 1,
					x: 290,
					y: 162,
					distance: 5,
					hidden: 1,
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'D1-R',
				},
				'C2-R': {
					type: 1,
					x: 330,
					y: 212,
					distance: 4,
					hidden: 1,
					replacedBy: 'C2-R*',
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					debuffGive: function(){
						let reqAir = [1,1,2,-2];
						if(FLEETS1[0].AS >= reqAir[CHDATA.event.maps[7].diff-1]) CHDATA.event.maps[7].debuff.C2R = 1;
					},
					route: 'D2-R',
				},
				'C2-R*': {
					type: 1,
					x: 330,
					y: 212,
					distance: 4,
					hidden: 2,
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 5'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'D2-R*',
				},
				'C3-R': {
					type: 1,
					x: 372,
					y: 273,
					distance: 4,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						let reqAir = [1,1,2,1];
						if(FLEETS1[0].AS >= reqAir[CHDATA.event.maps[7].diff-1]) CHDATA.event.maps[7].debuff.C3R = 1;
					},
					route: 'D3-R',
				},
				'D1-R': {
					type: 1,
					x: 366,
					y: 124,
					distance: 5,
					hidden: 1,
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 2', 'Easy 3', 'Easy 4'],
						4: ['Casual 2', 'Casual 3'],
					},
					route: 'E1-R',
				},
				'D2-R': {
					type: 1,
					x: 398,
					y: 179,
					distance: 5,
					hidden: 1,
					replacedBy: 'D2-R*',
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 2', 'Easy 3', 'Easy 4'],
						4: ['Casual 2', 'Casual 3'],
					},
					route: 'E2-R',
				},
				'D2-R*': {
					type: 1,
					x: 398,
					y: 179,
					distance: 5,
					hidden: 2,
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 2','Hard 5'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'E2-R',
				},
				'D3-R': {
					type: 1,
					x: 432,
					y: 239,
					distance: 4,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						let reqAir = [1,2,2,1];
						if(FLEETS1[0].AS >= reqAir[CHDATA.event.maps[7].diff-1]) CHDATA.event.maps[7].debuff.D3R = 1;
					},
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1){
							if(ships.AV + ships.escort.AV === 0){
								this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 175: 'F-R', 155: 'G-R*' });
								return this.showLoSPlane;
							}
							return 'G-R*';
						}
						else{
							if(ships.AV + ships.escort.AV === 0){
								return 'G-R';
							}
							else{
								this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 175: 'F-R', 155: 'G-R' });
								return this.showLoSPlane;
							}
						}
					},
				},
				'E1-R': {
					type: 1,
					x: 470,
					y: 106,
					distance: 5,
					hidden: 1,
					raid: true,
					compName: 'CDE-R',
					compDiff: {
						3: ['Hard 3', 'Hard 4'],
						2: ['Medium 3', 'Medium 4'],
						1: ['Easy 3', 'Easy 4'],
						4: ['Casual 3'],
					},
					route: 'I-R',
				},
				'E2-R': {
					type: 1,
					x: 480,
					y: 172,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(3) !== -1){
							if(ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB <= 6 && ships.CLT + ships.escort.CLT <= 1) return 'H-R*';
							return 'I-R';
						}
						else{
							let isBBFlag = FLEETS1[0].ships[0].type === 'BB' || FLEETS1[0].ships[0].type === 'FBB';
							let chance = (ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB - 5) * .2 + (isBBFlag ? .4 : 0);
							if(Math.random() >= chance){
								this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 165: 'I-R', 145: 'H-R' });
								return this.showLoSPlane;
							}
							return 'H-R';
						}
					},
				},
				'F-R': {
					type: 1,
					x: 446,
					y: 351,
					distance: 4,
					hidden: 1,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank === 'S' || ((CHDATA.event.maps[7].diff === 4 || CHDATA.event.maps[7].diff === 1) && CHDATA.temp.rank === 'A')){
							if(typeof(CHDATA.event.maps[7].debuff.FR) === 'undefined') CHDATA.event.maps[7].debuff.FR = 0;
							if(CHDATA.event.maps[7].debuff.FR < 10) CHDATA.event.maps[7].debuff.FR += 1;
						}
					},
				},
				'G-R': {
					type: 3,
					x: 521,
					y: 277,
					distance: 4,
					hidden: 1,
					replacedBy: 'G-R*',
					end: true,
				},
				'G-R*': {
					type: 3,
					x: 521,
					y: 277,
					distance: 4,
					hidden: 3,
					route: 'T*',
				},
				'H-R': {
					type: 3,
					x: 600,
					y: 174,
					distance: 5,
					hidden: 1,
					replacedBy: 'H-R*',
					end: true,
				},
				'H-R*': {
					type: 3,
					x: 600,
					y: 174,
					distance: 5,
					hidden: 3,
					route: 'U*',
				},
				'I-R': {
					type: 1,
					x: 538,
					y: 133,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'J-R',
				},
				'J-R': {
					type: 1,
					x: 614,
					y: 74,
					distance: 6,
					end: true,
					hidden: 1,
					bgmOverride: 115,
					enemyPreview: {
						sprite: '1799.png',
						offsetX: -20,
						offsetY: 20,
					},
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					setupSpecial: function() {
						if(typeof(CHDATA.event.maps[7].debuff.JR) === 'undefined') FLEETS2[0].isFakeBoss = true;
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for(let ship of ships){
							ship.bonusSpecial = [];
							if(CHDATA.event.maps[7].debuff && CHDATA.event.maps[7].debuff.MAPMOD >= 1){
								ship.bonusSpecial.push({mod:1.2});
							}
							let smid = getBaseId(ship.mid);
							if(MAPDATA[100].maps[7].historical.ozawa.indexOf(smid) !== -1){
								if(smid === 111) ship.bonusSpecial.push({mod:1.25});
								else ship.bonusSpecial.push({mod:1.1});
							}
						}
					},
					debuffGive: function(){
						if(FLEETS2[0].ships[0].HP <= 0) CHDATA.event.maps[7].debuff.JR = 1;
					},
				},
				'A-Y': {
					type: 3,
					x: 1071,
					y: 556,
					distance: 7,
					hidden: 2,
					route: 'F-Y',
				},
				'B-Y': {
					type: 1,
					x: 763,
					y: 469,
					distance: 5,
					hidden: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'C-Y',
				},
				'C-Y': {
					type: 1,
					x: 803,
					y: 410,
					distance: 5,
					hidden: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].nodePrevious === 'D-Y' || (ships.aBB + ships.aCV + ships.CA + ships.CAV <= 3 && ships.DE + ships.escort.DE >= [0,1,2,0][CHDATA.event.maps[7].diff - 1])) return 'E-Y';
						else{
							FLEETS1[0].nodePrevious = 'C-Y';
							return 'D-Y';
						}
					},
				},
				'D-Y': {
					type: 1,
					x: 698,
					y: 415,
					distance: 5,
					hidden: 2,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						if(FLEETS1[0].nodePrevious === 'C-Y' || ships.DE + ships.escort.DE >= [0,1,2,0][CHDATA.event.maps[7].diff - 1]) return 'E-Y';
						else{
							FLEETS1[0].nodePrevious = 'D-Y';
							return 'C-Y';
						}
					},
				},
				'E-Y': {
					type: 1,
					x: 751,
					y: 309,
					distance: 5,
					end: true,
					hidden: 2,
					bgmOverride: 99,
					enemyPreview: {
						sprite: '1736.png',
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					setupSpecial: function() {
						if(typeof(CHDATA.event.maps[7].debuff.EY) === 'undefined') FLEETS2[0].isFakeBoss = true;
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for(let ship of ships){
							if(CHDATA.event.maps[7].debuff.P1 >= [1,1,2,1][CHDATA.event.maps[7].diff-1]){
								ship.bonusSpecial = [{mod:1.2}];
							}
						}
					},
					debuffGive: function(){
						if(FLEETS2[0].ships[0].HP <= 0) CHDATA.event.maps[7].debuff.EY = 1;
					},
				},
				'F-Y': {
					type: 3,
					x: 1049,
					y: 458,
					distance: 7,
					hidden: 2,
					routeC: function(ships){
						if(CHDATA.event.maps[7].routes.indexOf(3) === -1 && FLEETS1[0].ships[0].type === 'BB') return 'H-Y';
						if(ships.aBB + ships.escort.aBB <= 2 && ships.DD + ships.escort.DD >= 4) return 'G-Y';
						return 'H-Y';
						
					},
				},
				'G-Y': {
					type: 1,
					x: 1051,
					y: 380,
					distance: 7,
					hidden: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships){
						if(FLEETS1[1].getWithItemsOfTypes([SEARCHLIGHTS,SEARCHLIGHTL]).length > 0) return 'I-Y';
						return 'L-Y';
					},
				},
				'H-Y': {
					type: 1,
					x: 966,
					y: 407,
					distance: 6,
					hidden: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					compDiffF:{
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'J-Y',
				},
				'I-Y': {
					type: 1,
					x: 1052,
					y: 321,
					distance: 7,
					hidden: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'M-Y',
				},
				'J-Y': {
					type: 1,
					x: 915,
					y: 316,
					distance: 6,
					hidden: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships){
						let chance = 0;
						if(CHDATA.event.maps[7].routes.indexOf(3) === -1 && FLEETS1[0].ships[0].type === 'BB') chance = 0.5;
						if(Math.random() > chance && ships.aBB + ships.escort.aBB <= 3 && ships.DD + ships.escort.DD >= 4) return 'M-Y';
						return (CHDATA.event.maps[7].routes.indexOf(3) !== -1 ? 'K-Y*' : 'K-Y');
					}
				},
				'K-Y': {
					type: 1,
					x: 834,
					y: 263,
					distance: 6,
					end: true,
					hidden: 2,
					replacedBy: 'K-Y*',
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
				},
				'K-Y*': {
					type: 1,
					x: 834,
					y: 263,
					distance: 6,
					hidden: 3,
					compName: 'K-Y',
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'V*',
				},
				'L-Y': {
					type: 1,
					x: 998,
					y: 350,
					distance: 7,
					hidden: 2,
					night2: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					route: 'I-Y',
				},
				'M-Y': {
					type: 1,
					x: 985,
					y: 253,
					distance: 7,
					end: true,
					hidden: 2,
					bgmOverride: 107,
					distance: 6,
					nightToDay2CF: true,
					enemyPreview: {
						sprite: '1767.png',
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					setupSpecial: function() {
						if(typeof(CHDATA.event.maps[7].debuff.MY) === 'undefined') FLEETS2[0].isFakeBoss = true;
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for(let ship of ships){
							ship.bonusSpecial = [];
							if(CHDATA.event.maps[7].debuff && CHDATA.event.maps[7].debuff.MAPMOD >= 1){
								ship.bonusSpecial.push({mod:1.2});
							}
							if(MAPDATA[100].maps[7].historical.nishimura.indexOf(getBaseId(ship.mid)) !== -1){
								ship.bonusSpecial.push({mod:1.2});
							}
						}
					},
					debuffGive: function(){
						if(FLEETS2[0].ships[0].HP <= 0) CHDATA.event.maps[7].debuff.MY = 1;
					},
				},
			},
		},
	},
}
MAPDATA[100] = MAP100;