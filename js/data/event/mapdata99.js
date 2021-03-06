let MAP99 = {
	date: '2019-03-01',
	name: 'Fubuki\'s Challenge',
	diffMode: 2,
	order: 3,
	visible: true,
	allowDiffs: [1,2,3,4],
	allowFleets: [0,1,2,3,7],
	allowLBAS: true,
	newResupplyCosts: true,
	bannerImg: 'assets/maps/99/banner1.png',
	bannerImgAlt: 'assets/maps/99/banner2.png',
	overrideStats: {
		1547: { HP: 410, FP: 180, TP: 120, AR: 270 },
		1628: { AR: 193 },
		1539: { AR: 130 },
		1540: { AR: 160 },
		3003: { AR: 225 },
		3004: { AR: 250 },
		3005: { AR: 280 }
	},
	friendFleet: {
		'shinyou': { voice: [536,141], ships: [
			{ mid: 536, LVL: 90, FP: 37, TP: 0, AA: 58, AR: 56, equips: [206,154,257,259] },
			{ mid: 383, LVL: 88, FP: 37, TP: 0, AA: 54, AR: 33, equips: [229,229,28] },
			{ mid: 384, LVL: 89, FP: 38, TP: 0, AA: 55, AR: 33, equips: [229,229,28] },
			{ mid: 385, LVL: 85, FP: 39, TP: 0, AA: 54, AR: 33, equips: [229,229,28] },
			{ mid: 386, LVL: 92, FP: 36, TP: 0, AA: 53, AR: 34, equips: [229,229,28] },
		] },
		'russian' : { voice: [516,141], ships: [
			{ mid: 395, LVL: 70, FP: 66, TP: 68, AA: 69, AR: 56, equips: [283,283,283,101] },
			{ mid: 147, LVL: 84, FP: 54, TP: 89, AA: 59, AR: 57, equips: [283,283,283] },
			{ mid: 513, LVL: 98, FP: 90, TP: 32, AA: 72, AR: 95, equips: [232,232,232,140] },
		] },
		'german' : { voice: [353,141], ships: [
			{ mid: 353, LVL: 92, FP: 50, TP: 0, AA: 80, AR: 80, equips: [] },
			{ mid: 179, LVL: 97, FP: 49, TP: 71, AA: 64, AR: 53, equips: [78,78,126] },
			{ mid: 180, LVL: 95, FP: 47, TP: 71, AA: 68, AR: 53, equips: [78,78,126] },
			{ mid: 177, LVL: 93, FP: 75, TP: 84, AA: 60, AR: 82, equips: [50,90,58,101] },
			{ mid: 178, LVL: 91, FP: 99, TP: 36, AA: 70, AR: 95, equips: [114,114,35,140] },
		] },
		'brits-install': { voice: [576, 141], ships: [
			{ mid: 364, LVL: 91, FP: 106, TP: 0, AA: 98, AR: 93, equips: [192,192,192,35] },
			{ mid: 393, LVL: 95, FP: 50, TP: 0, AA: 82, AR: 70, equips: [244,255,254,258] },
			{ mid: 394, LVL: 93, FP: 52, TP: 90, AA: 70, AR: 50, equips: [280,280,126] },
			{ mid: 576, LVL: 91, FP: 114, TP: 0, AA: 92, AR: 104, equips: [300,299,35,140] },
		] },
		'reigo' : { voice: [470,141], ships: [
			{ mid: 470, LVL: 92, FP: 59, TP: 83, AA: 80, AR: 52, equips: [266,266,126] },
			{ mid: 193, LVL: 97, FP: 82, TP: 84, AA: 74, AR: 79, equips: [50,50,35,31] },
			{ mid: 321, LVL: 95, FP: 63, TP: 49, AA: 74, AR: 68, equips: [5,5,126,126] },
			{ mid: 344, LVL: 91, FP: 50, TP: 78, AA: 62, AR: 49, equips: [266,266,126] },
			{ mid: 325, LVL: 93, FP: 50, TP: 80, AA: 50, AR: 49, equips: [266,266,126] },
		] },
	},
	maps: {
		1: {
			name: 'E-1',
			nameT: 'Attack! Penetrate the Southwest Seas',
			fleetTypes: [1,2],
			bgmMap: 47,
			bgmDN: 88,
			bgmNN: 88,
			bgmDB: 41,
			bgmNB: 41,
			bossnode: 23,
			lbas: 3,
			bar:{
				gauges: { hort: false, hortShadow: false, vert: false, vertShadow: false },
				vertPos: { x:665, y:20 },
			},
			maphp: {
				3: { 1: 2870 },
				2: { 1: 2870 },
				1: { 1: 2460 },
				4: { 1: 2050 },
			},
			finalhp: {
				3: 410,
				2: 410,
				1: 410,
				4: 410,
			},
			reward: {
				3: { items: [179, 141, 53] },
				2: { items: [179, 141] },
				1: { items: [179] },
				4: { items: [58] },
			},
			debuffCheck: function(debuff) {
				if (!debuff) return false;
				return debuff.S && debuff.T && debuff.V;
			},
			
			nodes: {
				'Start': {
					type: 0,
					x: 656,
					y: 151,
					routeC: function(ships) {
						if(CHDATA.fleets.combined == 1) return 'C';
						return 'B';
					}
				},
				'A': {
					type: 1,
					x: 593,
					y: 249,
					distance: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'G'
				},
				'B': {
					type: 3,
					x: 585,
					y: 173,
					distance: 1,
					routeS: ['A','F']
				},
				
				'C': {
					type: 1,
					x: 572,
					y: 108,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships) {
						if(ships.speed >= 10 && ships.aCV + ships.escort.aCV + ships.aBB + ships.escort.aBB <= 4) return 'H';
						return 'E';
					}
				},
				'D': {
					type: 1,
					x: 528,
					y: 329,
					distance: 3,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'I'
				},
				'E': {
					type: 1,
					x: 523,
					y: 53,
					distance: 3,
					subonly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'H'
				},
				'F': {
					type: 1,
					x: 518,
					y: 209,
					distance: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'J'
				},
				'G': {
					type: 1,
					x: 489,
					y: 286,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(ships.aCV + ships.aBB <= 4 && ships.aBB <= 3 && ships.DD + ships.escort.DD >= 3) return 'L';
						if(ships.aCV + ships.aBB <= 5 && ships.DD + ships.escort.DD >= 3) return 'I';
						return 'D';
					}
				},
				'H': {
					type: 1,
					x: 458,
					y: 67,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'K'
				},
				
				'I': {
					type: 1,
					x: 442,
					y: 331,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'N'
				},
				'J': {
					type: 1,
					x: 424,
					y: 224,
					distance: 3,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships) {
						if(((ships.aBB + ships.aCV <= 3) || (ships.speed >= 10 && ships.aBB + ships.aCV <= 4 && ships.aBB <= 3)) && (ships.DD + ships.escort.DD >= 3))  return 'L';
						return 'G';
					}
				},
				'K': {
					type: 1,
					x: 400,
					y: 82,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'M'
				},
				'L': {
					type: 1,
					x: 381,
					y: 281,
					distance: 4,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'N'
				},
				'M': {
					type: 1,
					x: 335,
					y: 84,
					distance: 4,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'O'
				},
				'N': {
					type: 3,
					x: 318,
					y: 334,
					distance: 5,
					route: 'P'
				},
				'O': {
					type: 1,
					x: 274,
					y: 104,
					distance: 5,
					night2: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Q'
				},
				'P': {
					type: 1,
					x: 216,
					y: 323,
					distance: 5,
					raid: true,
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
					route: 'T'
				},
				'Q': {
					type: 3,
					x: 197,
					y: 99,
					distance: 5,
					routeS: ['S','U']
				},
				'R': {
					type: 3,
					x: 173,
					y: 236,
					distance: 6,
					end: true,
				},
				'S': {
					type: 1,
					x: 135,
					y: 154,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships) {
						this.showLoSPlane = 'W';
						return checkELoS33(getELoS33(1,3),{ 55: 'W', 50: 'R' });
					},
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.S = 1;
					}
				},
				'T': {
					type: 1,
					x: 136,
					y: 282,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships) {
						this.showLoSPlane = 'W';
						return checkELoS33(getELoS33(1,3),{ 45: 'W', 40: 'R' });
					},
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.T = 1;
					}
				},
				'U': {
					type: 1,
					x: 137,
					y: 86,
					distance: 6,
					aironly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'V'
				},
				'V': {
					type: 1,
					x: 62,
					y: 122,
					distance: 7,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					friendFleet: ['shinyou', 'russian'],
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.V = 1;
					}
				},
				'W': {
					type: 1,
					x: 77,
					y: 233,
					distance: 7,
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
					friendFleet: ['shinyou', 'russian'],
					setupSpecial: function() {
						let debuffed = MAPDATA[99].maps[1].debuffCheck(CHDATA.event.maps[1].debuff);
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
						for (let ship of ships) {
							let baseMid = getBaseId(ship.mid);
							if (debuffed)
								ship.bonusSpecial = [{mod:1.45}]
						}
					},
				},
			}
		},
		2: {
			name: 'E-2',
			nameT: 'Preparation for Operation 139',
			fleetTypes: [0,1,2,3,7],
			bgmMap: 79,
			bgmDN: 62,
			bgmNN: 62,
			bgmDB: 72,
			bgmNB: 72,
			bossnode: [23,'W*','Z10'],
			parts: {
				1: {
					currentBoss: 'W',
					lbas: 2,
					maphp: {
						3: { 1: 4000 },
						2: { 1: 3500 },
						1: { 1: 3000 },
						4: { 1: 3000 },
					},
					bar: {
						gauges: { hort: false, hortShadow: false, vert: false, vertShadow: false },	
						vertPos: { x:675, y:20 } 
					},
					transport: 'T',
				},
				2: {
					currentBoss: 'W*',
					lbas: 2,
					bar:{
						gaugeID: 20,
						gauges: { hort: true, hortShadow: true, vert: true, vertShadow: false },
						hortOffset: { x:17, y:-12 },
						vertPos: { x:675, y:20 },
					},
					maphp: {
						3: { 1: 3400 },
						2: { 1: 3200 },
						1: { 1: 3000 },
						4: { 1: 3000 },
					},
					finalhp: {
						3: 720,
						2: 680,
						1: 640,
						4: 640,
					},
					transport: null,
				},
				3: {
					currentBoss: 'Z10',
					lbas: 3,
					bar:{
						gaugeID: 21,
						gauges: { hort: true, hortShadow: false, vert: true, vertShadow: true },
						hortOffset: { x:0, y:-39 },
						vertPos: { x:675, y:20 },
					},
					maphp: {
						3: { 1: 3900 },
						2: { 1: 3750 },
						1: { 1: 3600 },
						4: { 1: 3600 },
					},
					finalhp: {
						3: 650,
						2: 625,
						1: 600,
						4: 600,
					},
				}
			},
			hiddenRoutes: {
				1: { // hp1
					images: [{ }],
					unlock: function() {
						return CHDATA.event.maps[2].part >= 2;
					}
				},
				2: { // node set 1
					images: [{ name: '2_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[2].part >= 3;
					}
				},
				3: { // node set 2
					images: [{ name: '2_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if(!debuff) return false;
						if(CHDATA.event.maps[2].diff == 3) return debuff.Y && debuff.YAS && debuff.Z2 && debuff.Z3 && debuff.Z4 && debuff.Z6;
						if(CHDATA.event.maps[2].diff == 2) return debuff.Y && debuff.Z2 && debuff.Z3 && debuff.Z4 && debuff.Z6;
						if(CHDATA.event.maps[2].diff == 1) return debuff.Y && debuff.Z2 && debuff.Z4 && debuff.Z6;
						if(CHDATA.event.maps[2].diff == 4) return debuff.Y && debuff.Z6;
					}
				},
			},
			transportCalc: function(ships,rank) {
				rank = rank || 'S';
				let tp = transportCalcStandard(ships,'S');
				let mult = 1;
				if(CHDATA.event.maps[2].debuff){
					if(CHDATA.event.maps[2].debuff.F){
						mult += 1.5;
					}
					if(CHDATA.event.maps[2].debuff.L){
						mult += 1.5;
					}
				}
				tp = Math.floor(tp * mult);
				if (rank == 'A') tp *= 0.7;
				if (rank != 'S' && rank != 'A') return 0;
				return Math.floor(tp);
			},
			debuffCheck: function(debuff) {
				if (!debuff) return false;
				if(CHDATA.event.maps[2].diff == 3) return debuff.Y2 && debuff.Z8 && debuff.Z5 && debuff.W;
				if(CHDATA.event.maps[2].diff == 2) return debuff.Y2 && debuff.Z8 && debuff.Z5;
				if(CHDATA.event.maps[2].diff == 1) return debuff.Y2 && debuff.Z8 && debuff.Z5;
				if(CHDATA.event.maps[2].diff == 4) return debuff.Y2 && debuff.Z8;
				return false;
			},
			reward: {
				3: { ships:[{ id: 990, lvl: 99 }], items: [180,230,1001,170] },
				2: { ships:[{ id: 990, lvl: 99 }], items: [180,230,1001] },
				1: { ships:[{ id: 990, lvl: 99 }], items: [180,167] },
				4: { ships:[{ id: 990, lvl: 99 }] },
			},
			nodes: {
				'Start':{
					type: 0,
					x: 54,
					y: 41,
					route: 'A',
				},
				'A': {
					type: 3,
					x: 44,
					y: 141,
					distance: 4,
					routeC: function(ships) {
						if(CHDATA.fleets.combined == 3) return 'B';
						return 'C';
					}
				},
				'B': {
					type: 3,
					x: 44,
					y: 232,
					distance: 5,
					route: 'D',
				},
				'C': {
					type: 1,
					x: 117,
					y: 128,
					subonly: true,
					distance: 3,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[2].debuff && CHDATA.event.maps[2].part == 1){
							CHDATA.event.maps[2].debuff.F = 0;
							CHDATA.event.maps[2].debuff.L = 0;
						}
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined == 0){
							if((ships.speed >= 10 && ships.DD >= 2 || ships.DD >= 3) && ships.aBB + ships.aCV <= 3) return 'I';	
							return 'E';
						}
						else{
							if(ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 4) return 'H';
							return 'E';
						}
					}
				},
				'D': {
					type: 1,
					x: 119,
					y: 256,
					subonly: true,
					distance: 4,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[2].debuff && CHDATA.event.maps[2].part == 1){
							CHDATA.event.maps[2].debuff.F = 0;
							CHDATA.event.maps[2].debuff.L = 0;
						}
					},
					routeC: function(ships) {
						let tpItems = 0, tpItemCarriers = 0;
						let fleet = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for(let ship of fleet){
							if(!ship.retreated){
								let tpItemsShip = 0;
								for(let e of ship.equips){
									if(e.mid == 75 || e.mid == 68 || e.mid == 193) ++tpItemsShip;
								}
								if(tpItemsShip > 0) ++tpItemCarriers;
								tpItems += tpItemsShip;
							}
						}
						if(!ships.aBB && ships.speed >= 10){
							
							if(tpItems >= 7 && tpItemCarriers >= 5) return 'F';
							else return 'J';
						}
						return 'G';
					},
				},
				'E': {
					type: 1,
					x: 137,
					y: 63,
					distance: 4,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					route: 'H',
				},
				'F': {
					type: 1,
					x: 171,
					y: 224,
					distance: 3,
					overrideCost: { fuel: .05, ammo: .05 },
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S' && CHDATA.event.maps[2].part == 1){
							CHDATA.event.maps[2].debuff.F = 1;
							SM.play('lbasselect', 1);
						}
					},
					route: 'J',
				},
				'G': {
					type: 1,
					x: 181,
					y: 284,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'J',
				},
				'H': {
					type: 1,
					x: 200,
					y: 88,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'I',
				},
				'I': {
					type: 1,
					x: 211,
					y: 146,
					distance: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'K',
				},
				'J': {
					type: 1,
					x: 237,
					y: 259,
					distance: 3,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1', 'Medium 2', 'Medium 3'],
						1: ['Easy 1', 'Easy 2', 'Easy 3'],
						4: ['Casual 1', 'Casual 2', 'Casual 3'],
					},
					routeC: function(ships) {
						let tpItems = 0, tpItemCarriers = 0;
						let fleet = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for(let ship of fleet){
							if(!ship.retreated){
								let tpItemsShip = 0;
								for(let e of ship.equips){
									if(e.mid == 75 || e.mid == 68 || e.mid == 193) ++tpItemsShip;
								}
								if(tpItemsShip > 0) ++tpItemCarriers;
								tpItems += tpItemsShip;
							}
						}
						if(!ships.aBB && !ships.aCV && !ships.escort.aCV && ships.speed >= 10 && tpItems >= 10 && tpItemCarriers >= 6) return 'L';
						return 'M';
					}
				},
				'K': {
					type: 1,
					x: 265,
					y: 154,
					distance: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[2].part == 3) return 'N*';
						return 'N';
					}
				},
				'L': {
					type: 1,
					x: 278,
					y: 282,
					distance: 4,
					overrideCost: { fuel: .05, ammo: .05 },
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S' && CHDATA.event.maps[2].part == 1){
							CHDATA.event.maps[2].debuff.L = 1;
							SM.play('lbasselect', 1);
						}
					},
					route: 'P',
				},
				'M': {
					type: 1,
					x: 283,
					y: 235,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships) {
						if(ships.aBB + ships.aCV + ships.escort.aCV <= 1) return 'P';
						return 'O';
					}
				},
				'N': {
					type: 3,
					x: 318,
					y: 141,
					distance: 3,
					replacedBy: 'N*',
					routeC: function(ships){
						if(CHDATA.fleets.combined == 0 && !ships.aSS) return 'Q';
						return 'V';
					},
				},
				'N*': {
					type: 3,
					x: 318,
					y: 141,
					hidden: 2,
					distance: 3,
					routeS: ['Q', 'V*'],
				},
				'O': {
					type: 1,
					x: 315,
					y: 197,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'P',
				},
				'P': {
					type: 1,
					x: 340,
					y: 251,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'T',
				},
				'Q': {
					type: 1,
					x: 376,
					y: 153,
					distance: 4,
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
						if(ships.CL && ships.DD >= 2) return 'R';
						return 'U';
					},
				},
				'R': {
					type: 1,
					x: 375,
					y: 197,
					distance: 4,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.event.maps[2].part == 1) return 'T';
						else this.showLoSPlane = checkELoS33(getELoS33(1,4),{ 65: 'W*', 60: 'T' });
						return this.showLoSPlane;
					}
				},
				'S': {
					type: 3,
					x: 374,
					y: 300,
					distance: 5,
					end: true,
				},
				'T': {
					type: 2,
					x: 393,
					y: 249,
					resource: 0,
					distance: 5,
					routeC: function(ships){
						if(CHDATA.event.maps[2].part == 1) this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 65: 'W', 60: 'S' });
						else this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 65: 'W*', 60: 'S' });
						return this.showLoSPlane;
					}
				},
				'U': {
					type: 1,
					x: 414,
					y: 158,
					distance: 5,
					subonly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'R',
				},
				'V': {
					type: 3,
					x: 432,
					y: 83,
					end: true,
					replacedBy: 'V*',
					distance: 5,
				},
				'V*': {
					type: 3,
					x: 432,
					y: 83,
					hidden: 1,
					distance: 5,
					routeC: function(ships){
						if(CHDATA.fleets.combined == 2){
							if((ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 4 || ((ships.AV || ships.escort.AV) && (ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 5)) || ships.speed >= 15) && (ships.DD || ships.CL))
								return 'Z1';
						}
						return 'X';
					},
				},
				'W': {
					type: 1,
					x: 417,
					y: 193,
					distance: 5,
					replacedBy: 'W*',
					end: true,
					boss: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
				},
				'W*':{
					type: 1,
					x: 417,
					y: 193,
					distance: 5,
					hidden: 1,
					end: true,
					boss: true,
					compName: 'W',
					compDiff: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Casual 3'],
					},
					debuffGive: function(){
						if (CHDATA.event.maps[2].diff == 3 && CHDATA.event.maps[2].routes.indexOf(3) != -1 && CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.W = 1;
					},
				},
				'X': {
					type: 1,
					x: 481,
					y: 150,
					distance: 6,
					hidden: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined == 0){
							if (CHDATA.event.maps[2].routes.indexOf(3) == -1) return 'Y';
							return 'Y*';
						}
						else if(ships.aCV + ships.escort.aCV <= 3){
							if (CHDATA.event.maps[2].routes.indexOf(3) == -1) return 'Z3';
							return 'Z3*';
						}
						else return 'Z2';
					},
				},
				'Y': {
					type: 1,
					x: 494,
					y: 210,
					distance: 6,
					hidden: 2,
					replacedBy: 'Y*',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					route: 'Z2',
					debuffGive: function(){
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.Y = 1;
						if (CHDATA.event.maps[2].diff == 3){
							if (FLEETS1[0].AS >= 2) CHDATA.event.maps[2].debuff.YAS = 1;
						}
					}
				},
				'Y*': {
					type: 1,
					x: 494,
					y: 210,
					distance: 6,
					hidden: 3,
					compName: 'Y',
					compDiff: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					route: 'Z2',
					debuffGive: function(){
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.Y2 = 1;
					},
				},
				'Z1': {
					type: 1,
					x: 525,
					y: 108,
					distance: 6,
					hidden: 2,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						4: ['Casual 1', 'Casual 2', 'Casual 3', 'Casual 4'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[2].routes.indexOf(3) == -1) return 'Z3';
						return 'Z3*';
					},
				},
				'Z2': {
					type: 1,
					x: 559,
					y: 226,
					distance: 7,
					hidden: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[2].routes.indexOf(3) == -1) return 'Z6';
						return 'Z6*';
					},
					debuffGive: function(){
						if (CHDATA.event.maps[2].diff <= 3){
							let reqAirstate = CHDATA.event.maps[2].diff == 3 ? 2 : 1;
							if (FLEETS1[0].AS >= reqAirstate) CHDATA.event.maps[2].debuff.Z2 = 1;
						}
					},
				},
				'Z3': {
					type: 1,
					x: 586,
					y: 138,
					distance: 7,
					hidden: 2,
					replacedBy: 'Z3*',
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if((ships.AV || ships.escort.AV || ships.LHA || ships.escort.LHA) && ships.aCV + ships.escort.aCV <= 2){
							let lookouts = 0;
							let fleet = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							for(let ship of fleet){
								if(!ship.retreated){
									for(let e of ship.equips){
										if(e.mid == 129) ++lookouts;
										break;
									}
								}
							}
							if(lookouts >= 2) return 'Z5';
							return 'Z4';
						}
						return 'Z4';
					},
					debuffGive: function(){
						if (CHDATA.event.maps[2].diff == 2 || CHDATA.event.maps[2].diff == 3){
							let reqAirstate = CHDATA.event.maps[2].diff == 3 ? 2 : 1;
							if (FLEETS1[0].AS >= reqAirstate) CHDATA.event.maps[2].debuff.Z3 = 1;
						}
					},
				},
				'Z3*': {
					type: 1,
					x: 586,
					y: 138,
					distance: 7,
					hidden: 3,
					raid: true,
					compName: 'Z3',
					compDiff: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
						4: ['Casual 2'],
					},
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Casual 3'],
					},
					routeC: function(ships){
						if((ships.AV || ships.escort.AV || ships.LHA || ships.escort.LHA) && ships.aCV + ships.escort.aCV <= 2){
							let lookouts = 0;
							let fleet = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							for(let ship of fleet){
								for(let e of ship.equips){
									if(e.mid == 129) ++lookouts;
								}
								if(lookouts >= 2) return 'Z5*';
							}
							return 'Z4';
						}
						return 'Z4';
					}
				},
				'Z4': {
					type: 1,
					x: 626,
					y: 212,
					distance: 8,
					hidden: 2,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						if(ships.BBV) return (CHDATA.event.maps[2].routes.indexOf(3) == -1 ? 'Z6': 'Z6*');
						if(CHDATA.event.maps[2].diff == 1 || CHDATA.event.maps[2].diff == 4 && ships.aCV + ships.escort.aCV <= 3) return (CHDATA.event.maps[2].routes.indexOf(3) == -1 ? 'Z5': 'Z5*'); 
						if((CHDATA.event.maps[2].diff == 2 || CHDATA.event.maps[2].diff == 3) && ships.aCV + ships.escort.aCV <= 3 && (ships.AV || ships.escort.AV || ships.LHA || ships.escort.LHA)) return (CHDATA.event.maps[2].routes.indexOf(3) == -1 ? 'Z5': 'Z5*');
						else{
							if(CHDATA.event.maps[2].routes.indexOf(3) == -1) return 'Z6';
							return 'Z6*';
						}
					},
					debuffGive: function(){
						if (CHDATA.event.maps[2].diff <= 3){
							let reqAirstate = CHDATA.event.maps[2].diff == 3 ? 2 : 1;
							if (FLEETS1[0].AS >= reqAirstate) CHDATA.event.maps[2].debuff.Z4 = 1;
						}
					},
				},
				'Z5': {
					type: 1,
					x: 656,
					y: 137,
					distance: 8,
					hidden: 2,
					replacedBy: 'Z5*',
					end: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
				},
				'Z5*': {
					type: 1,
					x: 656,
					y: 137,
					distance: 8,
					hidden: 3,
					compName: 'Z5',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
						4: ['Casual 1', 'Casual 2'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 55: 'Z10', 50: 'Z9' });
						return this.showLoSPlane;
					},
					debuffGive: function(){
						if (CHDATA.event.maps[2].diff <= 3 && CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.Z5 = 1;
					},
					setupSpecial: function(){
						if(MAPDATA[99].maps[2].debuffCheck(CHDATA.event.maps[2].debuff)){
							CHDATA.sortie.ff1Extra = ['shinyou', 'german', 'brits-install', 'reigo'];
						}	
					}
				},
				'Z6': {
					type: 1,
					x: 643,
					y: 279,
					distance: 8,
					hidden: 2,
					replacedBy: 'Z6*',
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if (CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.Z6 = 1;
					}
				},
				'Z6*': {
					type: 1,
					x: 643,
					y: 279,
					distance: 8,
					hidden: 3,
					compName: 'Z6',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 80: 'Z8', 75: 'Z7' });
						return this.showLoSPlane;
					},
				},
				'Z7': {
					type: 3,
					x: 688,
					y: 323,
					distance: 9,
					hidden: 3,
					end: true,
				},
				'Z8': {
					type: 1,
					x: 607,
					y: 339,
					distance: 8,
					hidden: 3,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
						4: ['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.event.maps[2].diff == 2 || CHDATA.event.maps[2].diff == 3){
							if(CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.Z8 = 1;
						}
						else{
							if(CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[2].debuff.Z8 = 1;
						}
					},
				},
				'Z9': {
					type: 3,
					x: 706,
					y: 92,
					distance: 9,
					hidden: 3,
					end: true,
				},
				'Z10': {
					type: 1,
					x: 659,
					y: 55,
					distance: 9,
					hidden: 3,
					end: true,
					boss: true,
					friendFleet: [],
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
						let debuffed = MAPDATA[99].maps[2].debuffCheck(CHDATA.event.maps[2].debuff);
						/*this.shuvMult = 1;
						if (numMortar) this.shuvMult *= 1.45;
						if (numMortar >= 2) this.shuvMult *= 1.6;
						if (numRocket4) this.shuvMult *= 1.3;
						if (numRocket4 >= 2) this.shuvMult *= 1.5;
						if (this.numWG) this.shuvMult *= 1.35;
						if (this.numWG >= 2) this.shuvMult *= 1.4;
						if (installeqs.T3) this.shuvMult *= 1.4;
						if (installeqs.SB) this.shuvMult *= 1.35;
						if (installeqs.DB) this.shuvMult *= 1.5;*/
						
						/*this.shuvMult = this.softSkinMult;
						if(installeqs.AP) this.shuvMult *= 1.5;
						if(installeqs.SB) this.shuvMult *= 1.5;*/
						if(debuffed){
							// armor reduction: main fleet
							for (let ship of FLEETS2[0].ships) {
								ship.AR -= 25;
							}
							// armor reduction: escort tank
							FLEETS2[1].ships[5].AR -= 35;
						}
					},
				},
			},
		},
		3:{
			name: 'E-3',
			nameT: 'The Witch of Vela Gulf',
			fleetTypes: [0,1,2,3,7],
			bgmMap: 98,
			bgmDN: 113,
			bgmNN: 113,
			bgmDB: 82,
			bgmNB: 82,
			canPan: true,
			transportCalc: transportCalcStandard,
			historical: [459,351,469,43,243,145,454,354,455,355],
			bossnode: [9, 'ZZ2'],
			reward: {
				3: { items: [289,1001,1002] },
				2: { items: [289,1001] },
				1: { items: [103,1001] },
				4: { items: [103] },
			},
			parts: {
				1: {
					currentBoss: 'I',
					lbas: 0,
					bar:{
						gaugeID: 30,
						gauges: { hort: true, hortShadow: false, vert: true, vertShadow: false },
						hortOffset: { x:-2, y:-12 },
						vertPos: { x:675, y:20 },
					},
					maphp: {
						3: { 1: 3780 },
						2: { 1: 3465 },
						1: { 1: 3150 },
						4: { 1: 3150 },
					},
					finalhp: {
						3: 630,
						2: 630,
						1: 630,
						4: 630,
					},
				},
				2: {
					currentBoss: 'ZZ2',
					lbas: 3,
					bar:{
						gaugeID: 31,
						gauges: { hort: true, hortShadow: false, vert: true, vertShadow: false },
						hortOffset: { x:-3, y:-21 },
						vertPos: { x:675, y:20 },
					},
					maphp: {
						3: { 1: 3400 },
						2: { 1: 3200 },
						1: { 1: 3000 },
						4: { 1: 3000 },
					},
					finalhp: {
						3: 750,
						2: 680,
						1: 630,
						4: 630,
					},
				}
			},
			hiddenRoutes: {
				1: { // N, U, Z8
					images: [{ name: '3_1.png', x: 0, y: 0 }],
					panTo: [494, 319],
					unlock: function() {
						return CHDATA.event.maps[3].part >= 2;
					}
				},
				2: { // ZZ2
					images: [{ name: '3_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if(CHDATA.event.maps[3].debuff.M1 && CHDATA.event.maps[3].debuff.U1){
							if(CHDATA.event.maps[3].diff == 3) return CHDATA.event.maps[3].debuff.imp >= 25;
							if(CHDATA.event.maps[3].diff == 2) return CHDATA.event.maps[3].debuff.imp >= 22;
							if(CHDATA.event.maps[3].diff == 1) return CHDATA.event.maps[3].debuff.imp >= 19;
							if(CHDATA.event.maps[3].diff == 4) return CHDATA.event.maps[3].debuff.imp >= 15;
						}
						return false;
					}
				},
			},
			additionalChecks: function(ships,errors) {
				if (CHDATA.event.maps[3].part == 1 && CHDATA.fleets.combined != 0) errors.push('Single fleet/Striking force only');
				let debuffed = (CHDATA.event.maps[3].debuff && CHDATA.event.maps[3].debuff.Z81 &&  CHDATA.event.maps[3].debuff.Z8AS && CHDATA.event.maps[3].debuff.G && CHDATA.event.maps[3].debuff.R);
				if(debuffed && !CHDATA.event.maps[3].unlockedZ8D){ SM.play('done'); CHDATA.event.maps[3].unlockedZ8D = true; } // 'hidden' optional Z8 debuff
			},
			startCheck: function() {
				if (CHDATA.fleets.combined == 0) return 'Start1';
				if (CHDATA.fleets.combined == 2) return 'Start2';
				return 'Start3';
			},
			debuffCheck: function(debuff){
				if (!debuff) return false;
				let diff = CHDATA.event.maps[3].diff;
				let isLD = CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[diff];
				if(isLD){
					if(CHDATA.event.maps[3].debuff.M2 && CHDATA.event.maps[3].debuff.U2 && CHDATA.event.maps[3].debuff.Z6 && CHDATA.event.maps[3].debuff.Z7 && CHDATA.event.maps[3].debuff.Z82) return true;
				}
			},
			nodes: {
				'Start1':{
					type: 0,
					x: 133,
					y: 172.25,
					routeC: function(ships) {
						if(CHDATA.event.maps[3].part >= 2 && (ships.aCV + ships.aBB <= 1) && ships.DD >= 3 && ships.CL) return 'J';
						if(ships.speed >= 10 && ships.aCV + ships.aBB <= 3 && (ships.CV + ships.CVB) <= 1) return 'B';
						return 'A';
					},
				},
				'Start2':{
					type: 0,
					x: 803,
					y: 508,
					route: 'V'
				},
				'Start3':{
					type: 0,
					x: 820,
					y: 166.25,
					routeC: function(ships){
						if(CHDATA.fleets.combined == 1){
							if(ships.CLT + ships.escort.CLT <= 1 && !ships.BB && !ships.escort.BB) return 'O';
							return 'P';
						}
						else{
							if(ships.BBV <= 1 && !ships.aCV) return 'O';
							return 'P';
						}
					}
				},
				'A': {
					type: 1,
					x: 52,
					y: 217,
					distance: 6,
					subonly: true,
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4'],
					},
					compDiffF: {
						3:['Hard 3','Hard 4'],
						2:['Medium 3','Medium 4'],
						1:['Easy 3','Easy 4'],
						4:['Casual 3','Casual 4'],
					},
					routeC: function(ships){
						if(ships.aBB + ships.aCV <= 4 && (ships.CV + ships.CVB) <= 1) return 'B';
						return 'C';
					}
				},
				'B': {
					type: 1,
					x: 98,
					y: 300,
					distance: 5,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					compDiffF: {
						3:['Hard 2'],
						2:['Medium 2'],
						1:['Easy 2'],
						4:['Casual 2'],
					},
					route: 'D'
				},
				'C': {
					type: 1,
					x: 36,
					y: 354,
					distance: 6,
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4'],
					},
					compDiffF: {
						3:['Hard 4'],
						2:['Medium 4'],
						1:['Easy 4'],
						4:['Casual 4'],
					},
					route: 'D'
				},
				'D': {
					type: 3,
					x: 108,
					y: 395,
					distance: 5,
					route: 'E'
				},
				'E': {
					type: 1,
					x: 203,
					y: 434,
					distance: 4,
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4','Casual 5','Casual 6'],
					},
					compDiffF: {
						3:['Hard 5','Hard 6'],
						2:['Medium 5','Medium 6'],
						1:['Easy 5','Easy 6'],
						4:['Casual 5','Casual 6'],
					},
					routeC: function(ships){
						if(ships.DD >= 2 && checkHistorical(MAPDATA[99].maps[3].historical,ships.ids,[1,1,2,0])) return 'G';
						return 'F';
					}
				},
				'F': {
					type: 1,
					x: 229,
					y: 338,
					distance: 3,
					raid: true,
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4'],
					},
					compDiffF: {
						3:['Hard 2','Hard 3'],
						2:['Medium 3','Medium 4'],
						1:['Easy 3','Easy 4'],
						4:['Casual 3','Casual 4'],
					},
					route: 'G',
				},
				'G': {
					type: 1,
					x: 255,
					y: 429,
					distance: 3,
					raid: true,
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
						if(CHDATA.event.maps[3].part >= 2 && FLEETS1[0].AS >= 2) CHDATA.event.maps[3].debuff.G = true;
					},
					routeC: function(ships){
						if(Math.random() < 0.6 && ships.speed <= 5 && (ships.aCV + ships.aBB) >= 5 && !ships.DD) return 'H';
						else{
							if(checkHistorical(MAPDATA[99].maps[3].historical,ships.ids,[1,1,2,0])){
								this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 60: 'I', 50: 'H' });
							}
							else{
								this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 60: 'I', 50: 'H' });
							}
							return this.showLoSPlane;
						}	
					}
				},
				'H': {
					type: 3,
					x: 339,
					y: 506,
					distance: 3,
					end: true,
				},
				'I': {
					type: 1,
					x: 364,
					y: 389,
					distance: 1,
					end: true,
					boss: true,
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
					setupSpecial: function(){
						let ships = FLEETS1[0].ships;
						for (let ship of ships) {
							if (MAPDATA[99].maps[3].historical.indexOf(ship.mid) != -1) {
								ship.bonusSpecial = 1.4;
							}
						}
					},
				},
				'J': {
					type: 1,
					x: 105,
					y: 104,
					distance: 7,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						if(!ships.aBB && !ships.aCV) return 'L';
						return 'K';
					}
				},
				'K': {
					type: 1,
					x: 44,
					y: 53,
					distance: 8,
					hidden: 1,
					distance: 1,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					route: 'L'
				},
				'L': {
					type: 1,
					x: 185,
					y: 50,
					distance: 7,
					hidden: 1,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					route: 'M'
				},
				'M': {
					type: 1,
					x: 232,
					y: 116,
					hidden: 1,
					distance: 6,
					nightToDay2: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S') {
							if(CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) CHDATA.event.maps[3].debuff.M2 = true;
							else CHDATA.event.maps[3].debuff.M1 = true;
						}
					},
					route: 'N'
				},
				'N': {
					type: 2,
					x: 187,
					y: 177,
					distance: 5,
					hidden: 1,
					end: true,
					dropoff: true,
					resource: 1,
					amount: [110],
					debuffGive: function(){
						CHDATA.event.maps[3].debuff.N = true;
					}
				},
				'O': {
					type: 3,
					x: 742,
					y: 88.25,
					distance: 8,
					hidden: 1,
					route: 'Q'
				},
				'P': {
					type: 1,
					x: 792,
					y: 37.25,
					distance: 9,
					hidden: 1,
					subonly: true,
					night2: true,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					route: 'Q'
				},
				'Q': {
					type: 1,
					x: 646,
					y: 79.25,
					distance: 7,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					route: 'R'
				},
				'R': {
					type: 1,
					x: 548,
					y: 103.25,
					distance: 6,
					hidden: 1,
					raid: true,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						if(CHDATA.fleets.combined == 3) return 'S';
						return 'Z5';
					},
					debuffGive: function(){
						if(FLEETS1[0].AS >= 2) CHDATA.event.maps[3].debuff.R = true;
					},
				},
				'S': {
					type: 1,
					x: 450,
					y: 32.25,
					distance: 7,
					hidden: 1,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,2,true),{ 55: 'U', 50: 'T' });
						return this.showLoSPlane;
					},
				},
				'T': {
					type: 3,
					x: 401,
					y: 85.25,
					distance: 6,
					hidden: 1,
					end: true,
				},
				'U': {
					type: 1,
					x: 336,
					y: 24.25,
					distance: 7,
					end: true,
					hidden: 1,
					nightToDay2CF: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S') {
							if(CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) CHDATA.event.maps[3].debuff.U2 = true;
							else CHDATA.event.maps[3].debuff.U1 = true;
						}
					},
				},
				'V': {
					type: 3,
					x: 700,
					y: 468.25,
					distance: 6,
					hidden: 1,
					routeS: ['W', 'X'],
				},
				'W': {
					type: 1,
					x: 779,
					y: 408.25,
					distance: 7,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						if(ships.escort.DD >= 5) return 'Y';
						return 'Z';
					},
					debuffGive: (fleetsE) => {
						let num = 0;
						for (var ship of fleetsE[0].ships) {
							if (ship.isPT && ship.HP <= 0) num++;
						}
						if (!CHDATA.event.maps[3].debuff.imp) CHDATA.event.maps[3].debuff.imp = num;
						else CHDATA.event.maps[3].debuff.imp += num;
					},
				},
				'X': {
					type: 1,
					x: 621,
					y: 406.25,
					distance: 5,
					hidden: 1,
					subonly: true,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1'],
					},
					route: 'Z',
				},
				'Y': {
					type: 1,
					x: 764,
					y: 311.25,
					distance: 7,
					hidden: 1,
					night2: true,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						if(isShipInList(ships.ids,479) || isShipInList(ships.escort.ids,479) || ships.speed >= 15) return 'Z2';
						return 'Z';
					},
					debuffGive: (fleetsE) => {
						let num = 0;
						for (var ship of fleetsE[0].ships) {
							if (ship.isPT && ship.HP <= 0) num++;
						}
						if (!CHDATA.event.maps[3].debuff.imp) CHDATA.event.maps[3].debuff.imp = num;
						else CHDATA.event.maps[3].debuff.imp += num;
					},
				},
				'Z': {
					type: 1,
					x: 685,
					y: 330.25,
					distance: 6,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					routeC: function(ships){
						if(ships.aSS) return 'Z1';
						if(ships.aBB + ships.escort.aBB + ships.aCV + ships.escort.aCV <= 3) return 'Z4';
						return 'Z1';
					}
				},
				'Z1': {
					type: 1,
					x: 569,
					y: 359.25,
					distance: 4,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					debuffGive: (fleetsE) => {
						let num = 0;
						for (var ship of fleetsE[0].ships) {
							if (ship.isPT && ship.HP <= 0) num++;
						}
						if (!CHDATA.event.maps[3].debuff.imp) CHDATA.event.maps[3].debuff.imp = num;
						else CHDATA.event.maps[3].debuff.imp += num;
					},
					route: 'Z4'
				},
				'Z2': {
					type: 3,
					x: 657,
					y: 254.25,
					distance: 6,
					hidden: 1,
					routeS: ['Z3','Z4']
				},
				'Z3': {
					type: 1,
					x: 592,
					y: 178.25,
					distance: 6,
					hidden: 1,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					debuffGive: (fleetsE) => {
						let num = 0;
						for (var ship of fleetsE[0].ships) {
							if (ship.isPT && ship.HP <= 0) num++;
						}
						if (!CHDATA.event.maps[3].debuff.imp) CHDATA.event.maps[3].debuff.imp = num;
						else CHDATA.event.maps[3].debuff.imp += num;
					},
					route: 'Z5',
				},
				'Z4': {
					type: 3,
					x: 576,
					y: 278.25,
					distance: 5,
					hidden: 1,
					route: 'Z6',
				},
				'Z5': {
					type: 1,
					x: 523,
					y: 185.25,
					distance: 5,
					hidden: 1,
					compDiff: {
						3:['Hard 1'],
						2:['Medium 1'],
						1:['Easy 1'],
						4:['Casual 1'],
					},
					route: 'Z7',
				},
				'Z6': {
					type: 1,
					x: 480,
					y: 248.25,
					distance: 4,
					hidden: 1,
					compDiff: {
						3:['Hard 1','Hard 2'],
						2:['Medium 1','Medium 2'],
						1:['Easy 1','Easy 2'],
						4:['Casual 1','Casual 2'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S') {
							if(CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) CHDATA.event.maps[3].debuff.Z6 = true;
						}
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[3].routes.indexOf(2) != -1) return 'Z8*';
						else return 'Z8';
					}
				},
				'Z7': {
					type: 1,
					x: 428,
					y: 149.25,
					distance: 5,
					subonly: true,
					hidden: 1,
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4','Casual 5','Casual 6'],
					},
					debuffGive: function(){
						if(CHDATA.temp.rank == 'S') {
							if(CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) CHDATA.event.maps[3].debuff.Z7 = true;
						}
					},
					routeC: function(ships){
						this.showNoCompass = true;
						if(CHDATA.event.maps[3].routes.indexOf(2) != -1) return 'Z8*';
						else return 'Z8';
					}
				},
				'Z8': {
					type: 1,
					x: 355,
					y: 219.25,
					distance: 4,
					end: true,
					hidden: 1,
					replacedBy: 'Z8*',
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6','Hard 7','Hard 8','Hard 9'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8','Medium 9'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6','Easy 7','Easy 8','Easy 9'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4','Casual 5','Casual 6','Casual 7','Casual 8','Casual 9'],
					},
					compDiffF:{
						3:['Hard 4','Hard 5','Hard 6','Hard 7','Hard 8','Hard 9'],
						2:['Medium 4','Medium 5','Medium 6','Medium 7','Medium 8','Medium 9'],
						1:['Easy 4','Easy 5','Easy 6','Easy 7','Easy 8','Easy 9'],
						4:['Casual 4','Casual 5','Casual 6','Casual 7','Casual 8','Casual 9'],
					},
					debuffGive: (fleetsE) => {
						let num = 0;
						for (var ship of fleetsE[0].ships) {
							if (ship.isPT && ship.HP <= 0) num++;
						}
						if (!CHDATA.event.maps[3].debuff.imp) CHDATA.event.maps[3].debuff.imp = num;
						else CHDATA.event.maps[3].debuff.imp += num;
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,3,true),{ 40: 'ZZ2', 35: 'ZZ1' });
						return this.showLoSPlane;
					}
				},
				'Z8*': {
					type: 1,
					x: 355,
					y: 219.25,
					distance: 4,
					hidden: 2,
					compName: 'Z8',
					compDiff: {
						3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6','Hard 7','Hard 8','Hard 9'],
						2:['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6','Medium 7','Medium 8','Medium 9'],
						1:['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5','Easy 6','Easy 7','Easy 8','Easy 9'],
						4:['Casual 1','Casual 2','Casual 3','Casual 4','Casual 5','Casual 6','Casual 7','Casual 8','Casual 9'],
					},
					compDiffF:{
						3:['Hard 4','Hard 5','Hard 6','Hard 7','Hard 8','Hard 9'],
						2:['Medium 4','Medium 5','Medium 6','Medium 7','Medium 8','Medium 9'],
						1:['Easy 4','Easy 5','Easy 6','Easy 7','Easy 8','Easy 9'],
						4:['Casual 4','Casual 5','Casual 6','Casual 7','Casual 8','Casual 9'],
					},
					debuffGive: () => {
						if(CHDATA.temp.rank == 'S') {
							if(CHDATA.event.maps[3].hp <= MAPDATA[99].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) CHDATA.event.maps[3].debuff.Z82 = true;
							CHDATA.event.maps[3].debuff.Z81 = true;
						}
						if (FLEETS1[0].AS >= 2) CHDATA.event.maps[3].debuff.Z8AS = true;
					},
					setupSpecial: function() {
						let debuffed = (CHDATA.event.maps[3].debuff.Z81 &&  CHDATA.event.maps[3].debuff.Z8AS && CHDATA.event.maps[3].debuff.G && CHDATA.event.maps[3].debuff.R);
						if(debuffed){
							let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								let baseMid = getBaseId(ship.mid);
								ship.bonusSpecial = [{mod:1.3}]
							}
						}
					},
					routeC: function(ships){
						this.showLoSPlane = checkELoS33(getELoS33(1,1,true),{ 60: 'ZZ2', 50: 'ZZ1' });
						return this.showLoSPlane;
					}
				},
				'ZZ1': {
					type: 3,
					x: 258.5,
					y: 169.25,
					distance: 5,
					end: true,
					hidden: 2,
				},
				'ZZ2': {
					type: 1,
					x: 257.5,
					y: 242.25,
					distance: 4,
					end: true,
					boss: true,
					hidden: 2,
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
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat(FLEETS1[1].ships);
						for (let ship of ships) {
							ship.bonusSpecial = [{mod:1}]
						}
						let debuffed = MAPDATA[99].maps[3].debuffCheck(CHDATA.event.maps[3].debuff);
						if(debuffed){
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
							for (let ship of ships) {
								ship.bonusSpecial = [{mod:1.3}]
							}
						}
					},
				},
			},
		}
	},
}
MAPDATA[99] = MAP99;