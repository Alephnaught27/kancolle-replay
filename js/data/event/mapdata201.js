MAPDATA[201] = {
	name: 'Intercept! Gain Air Supremacy at Sea Near Amur',
	date: '2019-05-17',
	diffMode: 2,
	order: 11,
	allowDiffs: [1,2,3],
	allowFleets: [0,1,2,3,7],
	allowLBAS: true,
	allowVanguard: true,
	vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
	newResupplyCosts: true,
	bannerImg: 'https://i.imgur.com/TbZloDP.png',
	bannerImgAlt: 'https://i.imgur.com/ztULWgQ.png',
	transportCalc: function(ships,rank) {
		rank = rank || 'S';
		let tp = transportCalcStandard(ships,'S');
		for (let ship of ships) {
			if (!ship) continue;
			for (let item of ship.items) {
				if (item <= 0) continue;
				let eq = CHDATA.gears['x'+item];
				let eqd = EQDATA[eq.masterId];
				if (eqd.type == LANDINGTANK) tp += 18;
			}
		}
		tp = Math.floor(tp);
		if (rank == 'A') tp *= 0.7;
		if (rank != 'S' && rank != 'A') return 0;
		return Math.floor(tp);
	},
	friendFleet: {
		'e2_1': { voice: [200, 700], ships: [
			{ "mid": 200, "LVL": 86, "FP": 56, "TP": 130, "AA": 78, "AR": 68, "equips": [58, 58, 58]},
			{ "mid": 678, "LVL": 96, "FP": 44, "TP": 0, "AA": 66, "AR": 34, "equips": [63, 63, 29]},
			{ "mid": 586, "LVL": 85, "FP": 86, "TP": 88, "AA": 74, "AR": 48, "equips": [310, 12, 12, 12]},
			{ "mid": 554, "LVL": 87, "FP": 139, "TP": 0, "AA": 96, "AR": 94, "equips": [290, 290, 36, 102, 101]}
		]},
		'e2_2': { voice: [373, 700], ships: [
			{ "mid": 373, "LVL": 124, "FP": 58, "TP": 79, "AA": 64, "AR": 51, "equips": [267, 267, 74]},
			{ "mid": 688, "LVL": 87, "FP": 57, "TP": 80, "AA": 64, "AR": 51, "equips": [267, 267, 101]},
			{ "mid": 680, "LVL": 85, "FP": 58, "TP": 78, "AA": 65, "AR": 51, "equips": [267, 267, 29]},
		]},
		'e2_3': { voice: [], ships: [
			{ "mid": 395, "LVL": 94, "FP": 74, "TP": 68, "AA": 71, "AR": 58, "equips": [282, 282, 29]},
			{ "mid": 147, "LVL": 98, "FP": 64, "TP": 89, "AA": 69, "AR": 58, "equips": [63, 63, 29]},
			{ "mid": 689, "LVL": 121, "FP": 62, "TP": 80, "AA": 104, "AR": 55, "equips": [313, 313, 314]},
			{ "mid": 681, "LVL": 86, "FP": 56, "TP": 78, "AA": 73, "AR": 46, "equips": [284, 313, 314]},
		]},
		'e3m_1': { voice: [513, 700], ships: [
			{"mid": 513, "LVL": 87, "FP": 124, "TP": 32, "AA": 79, "AR": 97, "equips": [232, 232, 102, 140]},
			{"mid": 147, "LVL": 87, "FP": 64, "TP": 89, "AA": 69, "AR": 58, "equips": [63, 29, 63]},
			{"mid": 376, "LVL": 67, "FP": 41, "TP": 0, "AA": 57, "AR": 33, "equips": [63, 29, 63]},
			{"mid": 395, "LVL": 89, "FP": 74, "TP": 68, "AA": 71, "AR": 58, "equips": [282, 282, 29, 101]},
		]},  
		'e3m_2': { voice: [513, 700], ships: [
			{"mid": 513, "LVL": 87, "FP": 124, "TP": 32, "AA": 79, "AR": 97, "equips": [232, 232, 102, 140]},
			{"mid": 147, "LVL": 87, "FP": 64, "TP": 89, "AA": 69, "AR": 58, "equips": [63, 29, 63]},
			{"mid": 395, "LVL": 89, "FP": 74, "TP": 68, "AA": 71, "AR": 58, "equips": [282, 282, 29, 101]},
			{"mid": 503, "LVL": 97, "FP": 110, "TP": 88, "AA": 95, "AR": 77, "equips": [50, 134, 134, 134]},
		]},  
		'e3m_3': { voice: [497, 700], ships: [
			{"mid": 497, "LVL": 153, "FP": 75, "TP": 87, "AA": 82, "AR": 52, "equips": [266, 296, 74]},
			{"mid": 145, "LVL": 123, "FP": 59, "TP": 120, "AA": 72, "AR": 54, "equips": [58, 286, 286]},
			{"mid": 498, "LVL": 123, "FP": 74, "TP": 88, "AA": 74, "AR": 53, "equips": [266, 266, 101]},
			{"mid": 144, "LVL": 98, "FP": 80, "TP": 93, "AA": 63, "AR": 54, "equips": [266, 266, 240]},
		]},  
		'e3m_4': { voice: [497, 700], ships: [
			{"mid": 497, "LVL": 153, "FP": 75, "TP": 87, "AA": 82, "AR": 52, "equips": [266, 296, 74]},
			{"mid": 350, "LVL": 126, "FP": 55, "TP": 79, "AA": 54, "AR": 51, "equips": [266, 266, 240]},
			{"mid": 498, "LVL": 123, "FP": 74, "TP": 88, "AA": 74, "AR": 53, "equips": [266, 266, 101]},
			{"mid": 469, "LVL": 112, "FP": 69, "TP": 96, "AA": 68, "AR": 53, "equips": [266, 266, 240]},
		]},
		'e3m_5' : { voice: [], ships: [
			{"mid": 316, "LVL": 155, "FP": 55, "TP": 84, "AA": 54, "AA": 67, "equips": [266, 266, 74]},
			{"mid": 689, "LVL": 125, "FP": 62, "TP": 72, "AA": 54, "AA": 117, "equips": [308, 313, 279]},
			{"mid": 681, "LVL": 87, "FP": 54, "TP": 78, "AA": 54, "AA": 71, "equips": [314, 308, 29]},
			{"mid": 396, "LVL": 81, "FP": 37, "TP": 9, "AA": 54, "AA": 59, "equips": [257, 255, 259]}
		]},
		'e3p_1': { voice: [200,700], ships: [
			{"mid": 200, "LVL": 86, "FP": 56, "TP": 130, "AA": 78, "AR": 68, "equips": [58, 58, 58]},
			{"mid": 678, "LVL": 96, "FP": 44, "TP": 0, "AA": 66, "AR": 34, "equips": [63, 63, 29]},
			{"mid": 586, "LVL": 85, "FP": 86, "TP": 88, "AA": 74, "AR": 48, "equips": [310, 12, 12, 12]},
			{"mid": 554, "LVL": 87, "FP": 139, "TP": 0, "AA": 96, "AR": 94, "equips": [290, 290, 36, 102, 101]}
		]},  
		'e3p_2': { voice: [200,700], ships: [
			{"mid": 200, "LVL": 86, "FP": 56, "TP": 130, "AA": 78, "AR": 68, "equips": [58, 58, 58]},
			{"mid": 586, "LVL": 85, "FP": 86, "TP": 88, "AA": 74, "AR": 48, "equips": [310, 12, 12, 12]},
			{"mid": 260, "LVL": 93, "FP": 45, "TP": 69, "AA": 50, "AR": 40, "equips": [296, 63, 29]},
			{"mid": 529, "LVL": 99, "FP": 46, "TP": 18, "AA": 66, "AR": 56, "equips": [257, 255, 257, 259]}
		]},
		   'e3p_3' : { voice: [], ships: [
			{"mid": 350, "LVL": 99, "FP": 55, "TP": 79, "AA": 54, "AR": 53, "equips": [266, 266, 74]},
			{"mid": 497, "LVL": 127, "FP": 73, "TP": 101, "AA": 80, "AR": 53, "equips": [296, 240, 179]},
			{"mid": 325, "LVL": 65, "FP": 56, "TP": 80, "AA": 56, "AR": 53, "equips": [267, 267, 29]},
			{"mid": 318, "LVL": 90, "FP": 39, "TP": 18, "AA": 74, "AR": 53, "equips": [257, 255, 257, 259]}
		]},
		'e3p_4': { voice: [], ships: [
			{"mid": 542, "LVL": 153, "FP": 73, "TP": 87, "AA": 72, "AR": 53, "equips": [267, 267, 74]},
			{"mid": 563, "LVL": 80, "FP": 70, "TP": 101, "AA": 71, "AR": 53, "equips": [267, 286, 267]},
			{"mid": 564, "LVL": 94, "FP": 72, "TP": 89, "AA": 73, "AR": 53, "equips": [267, 267, 29]},
			{"mid": 543, "LVL": 98, "FP": 75, "TP": 89, "AA": 70, "AR": 53, "equips": [267, 267, 101]}
		]},
		'e3p_5': { voice: [], ships: [
			{"mid": 463, "LVL": 91, "FP": 74, "TP": 92, "AA": 64, "AR": 53, "equips": [266, 266, 74]},
			{"mid": 199, "LVL": 86, "FP": 70, "TP": 101, "AA": 64, "AR": 53, "equips": [266, 286, 29]},
			{"mid": 489, "LVL": 93, "FP": 71, "TP": 101, "AA": 66, "AR": 53, "equips": [266, 58, 29]},
			{"mid": 490, "LVL": 93, "FP": 71, "TP": 101, "AA": 66, "AR": 53, "equips": [266, 266, 101]},
			{"mid": 687, "LVL": 78, "FP": 57, "TP": 79, "AA": 59, "AR": 53, "equips": [266, 266, 29]}
		]},
		'e3p_6': { voice: [], ships: [
			{"mid": 430, "LVL": 143, "FP": 52, "TP": 18, "AA": 90, "AR": 53, "equips": [257, 257, 255, 259]},
			{"mid": 318, "LVL": 90, "FP": 39, "TP": 18, "AA": 74, "AR": 53, "equips": [257, 255, 257, 259]},
			{"mid": 543, "LVL": 109, "FP": 75, "TP": 89, "AA": 70, "AR": 53, "equips": [267, 267, 101]},
			{"mid": 497, "LVL": 155, "FP": 87, "TP": 87, "AA": 90, "AR": 53, "equips": [266, 240, 296]},
			{"mid": 119, "LVL": 140, "FP": 63, "TP": 171, "AA": 49, "AR": 53, "equips": [58, 286, 286]}
		]}
	},
	maps: {
		1: {
			name: 'E-1',
			nameT: 'Fleet Gathering! Off to Sea Near Teiko!',
			fleetTypes: [0,7],
			bgmMap: 2034,
			bgmDN: 87,
			bgmNN: 87,
			bgmDB: 55,
			bgmNB: 55,
			bossnode: 16,
			checkLock: [72,73,74],
			giveLock: 71,
			maphp: {
				3: { 1: 1508 },
				2: { 1: 1108 },
				1: { 1: 708 },
			},
			finalhp: {
				3: 177,
				2: 277,
				1: 377,
			},
			reward: {
				3: { items: [282, 282] },
				2: { items: [282, 282] },
				1: { items: [282, 282] },
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '1_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if (CHDATA.event.maps[1].diff == 3) return debuff.J && debuff.B && debuff.M;
						else return debuff.B && debuff.M;
					}
				}
			},
			additionalChecks: function(ships,errors) {
				if (ships.CV + ships.CVB) errors.push('No CV(B)');
			},
			nodes: {
				'Start': {
					type: 0,
					x: 76,
					y: 68,
					route: 'C'
				},
				'A': {
					type: 1,
					x: 133,
					y: 182,
					route: 'B',
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					subonly: true
				},	
				'B': {
					type: 1,
					x: 133,
					y: 275,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: () => CHDATA.event.maps[1].debuff.B = CHDATA.temp.rank == 'S'
				},
				'C': {
					type: 3,
					x: 187,
					y: 108,
					routeS: ['A', 'D']
				},
				'D': {
					type: 3,
					x: 252,
					y: 192,
					routeS: ['E', 'H']
				},
				'E': {
					type: 1,
					x: 252,
					y: 275,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true,
					routeC: s => s.CVL < 1 && s.aBB < 1 && s.CA < 2 && (s.DD + s.DE) > 3 ? 'G' : 'F'
				},
				'F': {
					type: 1,
					x: 252,
					y: 332,
					raid: true,
					route: 'I',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},						
				},
				'G': {
					type: 2,
					x: 312,
					y: 275,
					route: 'I',
					resource: 3,
					amount: [50,55,60,65,70]
				},
				'H': {
					type: 1,
					x: 334,
					y: 192,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true,
					routeC: function() {
						this.showNoCompass = true;
						return CHDATA.event.maps[1].routes && CHDATA.event.maps[1].routes.includes(1) ? 'K*' : 'K'
					}
				},
				'I': {
					type: 1,
					x: 374,
					y: 332,
					routeC: s => s.SS + s.SSV > 0 || s.CVL > 1 || s.aBB > 1 ? 'J' : 'L',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true,						
				},
				'J': {
					type: 1,
					x: 416,
					y: 275,
					route: 'L',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: () => CHDATA.event.maps[1].debuff.J = ['A','S'].includes(CHDATA.temp.rank)
				},
				'K': {
					type: 3,
					x: 416,
					y: 192,
					end: true				
				},
				'K*': {
					type: 3,
					x: 416,
					y: 192,
					route: 'N',
					hidden: 1
				},
				'L': {
					type: 1,
					x: 455,
					y: 332,
					route: 'M',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
				},
				'M': {
					type: 1,
					x: 541,
					y: 312,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: () => CHDATA.event.maps[1].debuff.M = CHDATA.event.maps[1].diff > 1 ? ['A','S'].includes(CHDATA.temp.rank) : true
				},
				'N': {
					type: 1,
					x: 475,
					y: 140,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						if(ships.CVL >= 2) return 'O'
						this.showLoSPlane = checkELoS33(getELoS33(1,3, CHDATA.fleets.combined),{ 36: 'P', 35.99: 'O' });
						return this.showLoSPlane;
					}
				},
				'O': {
					type: 3,
					x: 538,
					y: 86,
					hidden: 1,
					end: true
				},	
				'P': {
					type: 1,
					x: 551,
					y: 194,
					hidden: 1,
					boss: true,
					end: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
					},
					setupSpecial: function() {
						for (const ship of FLEETS1[0].ships) {
							let baseMid = getBaseId(ship.mid);
							if (baseMid == 20) {
								ship.bonusSpecial = [{mod:2}];									
							}
						}
					},
				},
			}
		},
		2: {
			name: 'E-2',
			nameT: 'Sortie! Strengthen Northeastern Sea defense!',
			fleetTypes: [0,1,3,7],
			bgmMap: 129,
			bgmDN: 75,
			bgmNN: 5,
			bgmDB: 60,
			bgmNB: 60,
			bossnode: [22,24],
			lbas: 3,
			lbasSortie: 0,
			checkLock: [73, 74],
			giveLock: [71,72],
			reward: { ships: [513], firstOnly: true} ,
			lockSpecial: true,
			parts: {
				1: {
					currentBoss: 'H',
					maphp: {
						3: { 1: 400 },
						2: { 1: 300 },
						1: { 1: 200 },
					},
					transport: 'I'
				},
				2: {
					currentBoss: 'V',
					maphp: {
						3: { 1: 3850 },
						2: { 1: 3850 },
						1: { 1: 3850 }
					},
					finalhp: {
						3: 770,
						2: 770,
						1: 770,
					},
					transport: null
				}
			},				
			hiddenRoutes: {
				1: {
					images: [{ name: '2_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						return CHDATA.event.maps[2].part == 2;
					}
				},
				2: {
					images: [{ name: '2_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if (debuff.H && debuff.S) return CHDATA.event.maps[2].diff == 3 ? debuff.E && debuff.M : CHDATA.event.maps[2].diff == 2 ? debuff.M : true;
						return false;
					}
				},
				3: {
					images: [{ name: '2_3.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if (debuff.H_2 && debuff.Q) return CHDATA.event.maps[2].diff > 1 ? debuff.U : true;
						return false;
					}
				},
			},
			additionalChecks: function(ships,errors) {
				MAPDATA[70].maps[2].bgmDN = 75;
				MAPDATA[70].maps[2].bgmNN = 5;
				MAPDATA[70].maps[2].bgmDB = 60;
				MAPDATA[70].maps[2].bgmNB = 60;
				if (CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.includes(2)) MAPDATA[70].maps[2].lbasSortie = 2;
				let lock = null, allSame = true, allRed = true, allPurple = true;
				let num = (CHDATA.fleets.combined)? 2 : 1;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false;}
							if (lock != 71) {allRed = false;}
							if (lock != 72) {allPurple = false;}
						}
					}
				}
				if (!allSame) errors.push('No mixed locks.');
				if (CHDATA.fleets.combined === 1 && !(CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.includes(1))) errors.push('You cannot sortie a CTF at this time')
				if (CHDATA.fleets.combined === 1 && !allPurple && allRed) errors.push('You cannot sortie a CTF with the Manchuria Fleet')
				if (CHDATA.fleets.combined != 1 && allPurple && !allRed) errors.push('You must sortie a CTF with the Teiko Fleet')
			},
			startCheck: function() {					
				let num = (CHDATA.fleets.combined)? 2 : 1;
				if (CHDATA.fleets.combined != 1) {
					for (let n=1; n<=num; n++) {
						for (let i=0; i<CHDATA.fleets[n].length; i++) {
							chGiveLock(n,i+1,71);
						}
					}
					return 'Start1';
				}
				for (let n=1; n<=2; n++) {
					for (let i=0; i<CHDATA.fleets[n].length; i++) {
						chGiveLock(n,i+1,72);
					}
				}
				return 'Start2';
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 132,
					y: 181,						
					routeC: () => CHDATA.fleets.combined ? 'B' : 'C'
				},
				'Start2': {
					type: 0,
					x: 346,
					y: 345,
					route: 'K',
					hidden: 1,
				},
				'A': {
					type: 3,
					x: 112,
					y: 283,
					end: true,
					distance: 5
				},
				'B': {
					type: 1,
					x: 206,
					y: 255,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => s.DD + s.escort.DD < 8 ? 'A' : s.DD + s.escort.DD < 9 || s.CA + s.CAV + s.escort.CA + s.escort.CAV > 4 ? 'C' : 'E'
				},
				'C': {
					type: 1,
					x: 225,
					y: 191,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true,
					routeC: s => CHDATA.fleets.combined === 3 || s.aBB < 1 ? 'E' : 'D'
				},
				'D': {
					type: 1,
					x: 314,
					y: 191,
					distance: 3,
					route: 'F',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
				},
				'E': {
					type: 1,
					x: 316,
					y: 256,
					route: 'F',
					raid: true,
					distance: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() {
						if (FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.E = 1;
					}
				},
				'F': {
					type: 1,
					x: 400,
					y: 191,
					distance: 2,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function() {
						this.showNoCompass = true;
						if (CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.includes(1)) {
							this.showNoCompass = false;
							return CHDATA.fleets.combined == 1 ? 'G' : 'I';
						}
						return 'I';
					}
			
				},
				'G': {
					type: 3,
					x: 466,
					y: 99,
					showNoCompass: false,
					distance: 4,
					routeC: function() {
						MAPDATA[70].maps[2].nodes.H.compDiff = CHDATA.fleets.combined != 1 ?
							{
								3: ['Hard 1'], 2: ['Medium 1'], 1: ['Easy 1'],
							} : {
								3: ['Hard 2'], 2: ['Medium 2'], 1: ['Easy 2'],
							};						
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 26: 'H', 25.99: 'J' })
						return this.showLoSPlane;
					},						
				},
				'H': {
					type: 1,
					x: 498,
					y: 44,
					boss: true,
					end: true,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() {
						if (CHDATA.event.maps[2].part === 2 && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[2].debuff.H = true;
						if (CHDATA.event.maps[2].part === 2 && CHDATA.fleets.combined === 1 && ((CHDATA.event.maps[2].diff < 3 && ['A','S'].includes(CHDATA.temp.rank))
						|| CHDATA.temp.rank == 'S')) CHDATA.event.maps[2].debuff.H_2 = true;
						
					}
				},
				'I': {
					type: 2,
					x: 488,
					y: 181,
					distance: 3,						
					resource: 0,
					route: 'G'
				},
				'J': {
					type: 3,
					x: 544,
					y: 87,
					distance: 5,
					end: true
				},
				'K': {
					type: 3,
					x: 409,
					y: 280,
					distance: 1,
					routeS: ['F', 'L', 'M'],
					hidden: 1
				},
				'L': {
					type: 1,
					x: 488,
					y: 245,
					distance: 3,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => s.CV + s.CVB > 2 || s.DD + s.escort.DD < 3 || s.AV + s.AO + s.escort.AV + s.escort.AO > 0 ? 'N' : 'O',
					hidden: 1
				},
				'M': {
					type: 1,
					x: 524,
					y: 289,
					raid: true,
					route: 'N',
					distance: 3,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() {
						if (FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.M = 1;
					},
					hidden: 1
				},
				'N': {
					type: 1,
					x: 576,
					y: 245,
					distance: 4,
					route: 'P',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true,
					hidden: 1
				},
				'O': {
					type: 1,
					x: 581,
					y: 170,
					distance: 5,
					route: 'S',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1
				},
				'P': {
					type: 1,
					x: 628,
					y: 211,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => s.AV + s.AO + s.escort.AV + s.escort.AO > 0 ? 'U' : 'S',
					hidden: 1
				},
				'Q': {
					type: 1,
					x: 628,
					y: 47,
					end: true,
					distance: 8,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					nightToDay2: true,
					debuffGive: function() {
						if (CHDATA.event.maps[2].part === 2 && CHDATA.fleets.combined === 1 && ((CHDATA.event.maps[2].diff < 3 && ['A','S'].includes(CHDATA.temp.rank))
					|| CHDATA.temp.rank == 'S')) CHDATA.event.maps[2].debuff.Q = true;
					},
					hidden: 1,
					setupSpecial: function() {
						MAPDATA[70].maps[2].bgmDN = 131;
						MAPDATA[70].maps[2].bgmNN = 131;
					}
				},
				'R': {
					type: 1,
					x: 628,
					y: 103,
					distance: 6,
					route: 'Q',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},						
					overrideCost: { fuel: .04, ammo: .08 },
					hidden: 1
				},
				'S': {
					type: 1,
					x: 669,
					y: 162,
					raid: true,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 46: CHDATA.event.maps[2].routes.includes(3) && 
							ships.escort.CLT < 1 && ships.CVL + ships.escort.CVL > 1 ? 'V' : 'R', 45.99: 'T' });
						return this.showLoSPlane;
					},
					debuffGive: function() {
						if (FLEETS1[0].AS >= 1) CHDATA.event.maps[2].debuff.S = 1;
					},
					hidden: 1
				},
				'T': {
					type: 3,
					x: 686,
					y: 87,
					distance: 7,
					end: true,
					hidden: 1
				},
				'U': {
					type: 1,
					x: 686,
					y: 221,
					end: true,
					distance: 6,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: () => { if (CHDATA.event.maps[2].part === 2 && CHDATA.fleets.combined === 1 && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[2].debuff.U = true }
				},
				'V': {
					type: 1,
					x: 727,
					y: 148,
					distance: 7,
					end: true,
					boss: true,
					hidden: 3,
					friendFleet: ["e2_1", "e2_2", "e2_3"],
					setupSpecial: function() {
						MAPDATA[70].maps[2].bgmDB = 131;
						MAPDATA[70].maps[2].bgmNB = 131;
						const bonusList = {
							'[546, 85, 87, 54, 99]': 2,
							'[49, 425, 410]': 1.3,
						};
						applyBonusToShips(bonusList);
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
					},
					debuffGive: function() {							
						const main = savePlayerFleet(FLEETS1[0]);
						const escort = savePlayerFleet(FLEETS1[1]);
						CHDATA.event.maps[2].debuff.teiko = {
							main: main,
							escort: escort,
							mainForm: FLEETS1[0].formation,
							escortForm: FLEETS1[1].formation
						};
					},
				},			
			}
		},
		3: {
			name: 'E-3',
			nameT: 'Intercept! Enemy Task Force on Amur Sea!',
			fleetTypes: [1,2],
			bgmMap: 1006,
			bgmDN: 130,
			bgmNN: 130,
			bgmDB: 'd_00_01',
			bgmNB: 'd_00_01',
			bossnode: [13,16],
			lbas: 3,
			lbasSortie: 3,
			checkLock: [71, 72],
			giveLock: [73,74],
			lockSpecial: true,
			parts: {
				1: {
					currentBoss: 'M',
					maphp: {
						3: { 1: 3500 },
						2: { 1: 3500 },
						1: { 1: 3500 },
					},
					finalhp: {
						3: 700,
						2: 700,
						1: 700,
					},
				},
				2: {
					currentBoss: 'P',
					maphp: {
						3: { 1: 4250 },
						2: { 1: 4250 },
						1: { 1: 4250 }
					},
					finalhp: {
						3: 840,
						2: 840,
						1: 840,
					},
				}
			},
			enemyRaid: {
				maxNum: { 3: 2, 2: 2, 1: 1 },
				chance: { 3: .35, 2: .20, 1: .15 },
				compName: 'AB',
				compDiff: {
					3: ['Hard 1','Hard 2','Hard 3'],
					2: ['Medium 1','Medium 2'],
					1: ['Easy 1','Easy 2'],
				},
				debuffGive: function(airState,totalHPLost) {
					if (CHDATA.event.maps[3].part == 2 && CHDATA.event.maps[3].debuff) {
						if (totalHPLost <= 0) CHDATA.event.maps[3].debuff.AB = 1 + (CHDATA.event.maps[3].debuff.AB || 0);
					}
				}
			},
			debuffCheck: function(debuff) {
				if (!debuff) return false;
				if (debuff.I && debuff.M) return CHDATA.event.maps[3].diff === 3 ? debuff.T_2 && (debuff.LB > 1 || CHDATA.config.disableRaidReq) : 
						CHDATA.event.maps[3].diff === 2 ? debuff.LB > 0 || CHDATA.config.disableRaidReq : true;
				return false;
			},		
			hiddenRoutes: {
				1: {
					images: [{ name: '3_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						return CHDATA.event.maps[3].part == 2;
					}
				},
				2: {
					images: [{ name: '3_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if (debuff.G && CHDATA.event.maps[3].part === 2) return CHDATA.event.maps[3].diff == 3 ? debuff.T : true;
						return false;
					}
				},
				3: {
					images: [{ name: '3_3.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						if (debuff.I && debuff.M) return CHDATA.event.maps[3].diff === 3 ? debuff.T_2 && (debuff.AB > 1 || CHDATA.config.disableRaidReq) : 
							CHDATA.event.maps[3].diff === 2 ? debuff.AB > 0 || CHDATA.config.disableRaidReq : true;
						return false;
					}
				},
			},
			additionalChecks: function(ships,errors) {
				let lock = null, allSame = true, allBlue = true, allGreen = true;
				let num = (CHDATA.fleets.combined)? 2 : 1;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (lock != CHDATA.ships[sid].lock) { allSame = false;}
							if (lock != 73) {allBlue = false;}
							if (lock != 74) {allGreen = false;}
						}
					}
				}
				if (!allSame) errors.push('No mixed locks.');
				if (CHDATA.fleets.combined === 2 && !(CHDATA.event.maps[3].routes && CHDATA.event.maps[3].routes.includes(1))) errors.push('You cannot sortie a STF at this time')
				if (CHDATA.fleets.combined === 2 && !allGreen && allBlue) errors.push('You cannot sortie a STF with the Nakama Mobile Force')
				if (CHDATA.fleets.combined === 1 && allGreen && !allBlue) errors.push('You cannot sortie a CTF with the Amurian Fleet')
			},
			startCheck: function () {
				const lock = CHDATA.fleets.combined === 1 ? 73 : 74;
				if (CHDATA.fleets.combined === 1) {
					MAPDATA[70].maps[3].bgmDB = 'd_00_01';
					MAPDATA[70].maps[3].bgmNB = 'd_00_01';
					MAPDATA[70].maps[3].bgmDN = 130;
					MAPDATA[70].maps[3].bgmNN = 130;
				}
				for (let n = 1; n <= 2; n++) {
					for (let i = 0; i < CHDATA.fleets[n].length; i++) {
						chGiveLock(n, i + 1, lock);
					}
				}
				return CHDATA.fleets.combined === 1 ? 'Start1' : 'Start2';						
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 707,
					y: 90,
					route: 'A'
				},
				'Start2': {
					type: 0,
					x: 332,
					y: 76,
					routeC: s => s.BB + s.escort.BB > 4 || s.DD + s.escort.DD < 3 ? 'W' : 'V',
					hidden: 1,
				},
				'A': {
					type: 3,
					x: 681,
					y: 169,
					distance: 8,
					routeS: ['B','E']
				},
				'B': {
					type: 1,
					x: 660,
					y: 233,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => s.aBB + s.escort.aBB < 1 || Math.min(s.speed, s.escort.speed) === 5 ? 'F' : 'C'
				},
				'C': {
					type: 1,
					x: 661,
					y: 318,
					distance: 10,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'F',
					debuffGive: function() {
						CHDATA.event.maps[3].debuff.escort = saveEnemyFleetHP(FLEETS2[0]);
					},
				},
				'D': {
					type: 1,
					x: 602,
					y: 85,
					distance: 7,
					route: 'H',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					ambush: true
				},
				'E': {
					type: 1,
					x: 595,
					y: 169,
					distance: 7,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => s.DD + s.escort.DD < 3 ? 'D' : s.CV + s.CVB < 4 && Math.min(s.speed, s.escort.speed) > 5 ? 'I' : 'H'
				},
				'F': {
					type: 1,
					x: 594,
					y: 268,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'G'
				},
				'G': {
					type: 1,
					x: 593,
					y: 339,
					end: true,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() { 
						if (CHDATA.event.maps[3].part == 2 && CHDATA.temp.rank === 'S') CHDATA.event.maps[3].debuff.G = true 
					},
					setupSpecial: function() {
						if (CHDATA.event.maps[3].debuff.escort) FLEETS2[1].ships.forEach((ship, index) => ship.HP = CHDATA.event.maps[3].debuff.escort[index]);
					}
				},
				'H': {
					type: 1,
					x: 547,
					y: 106,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'J'
				},
				'I': {
					type: 1,
					x: 521,
					y: 170,
					raid: true,
					distance: 5,
					route: 'J',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() {
						if (FLEETS1[0].AS >= (CHDATA.event.maps[3].diff == 1 ? 1 : 2)) CHDATA.event.maps[3].debuff.I = true;
					},
				},					
				'J': {
					type: 1,
					x: 450,
					y: 149,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'K'
				},
				'K': {
					type: 3,
					x: 374,
					y: 189,
					distance: 3,
					routeS: ['L','R']
				},
				'L': {
					type: 1,
					x: 308,
					y: 189,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 47: ships.CV + ships.CVB > 2 ? 'O' : 'M', 46.99: 'N' });
						return this.showLoSPlane;
					}
				},
				'M': {
					type: 1,
					x: 261,
					y: 272,
					distance: 6,
					boss: true,
					end: true,
					debuffGive: function() {
						if (CHDATA.event.maps[3].part == 2 && CHDATA.temp.rank === 'S') CHDATA.event.maps[3].debuff.M = true 
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
					},
					friendFleet: ['e3m_1','e3m_2','e3m_3','e3m_4','e3m_5'],
					setupSpecial: function() {
						const bonusList = {
							'[110, 111]': 2,
							'[183, 54, 64, 485, 421, 95, 97, 135]': 1.8,
							'[457, 458, 459]': 1.4
						};
						applyBonusToShips(bonusList);
					},
					battleSpecial: function() {
						var teiko = (CHDATA.event.maps[2].debuff || {}).teiko;
						if (!teiko) {
							delete this.stageSpecial;
						}
						else {
							this.stageSpecial = function(CHAPI, nowhp) {
								var genFleet = array => array.map(ship => ({
									mst_id: ship.mid,
									equip: ship.equips,
									kyouka: [],
								}));
								
								var API = Object.assign({},CHAPI);
								API.fleet1 = [];
								API.fleet2 = [];
								API.combined = 1;
								API.battles = [this.battle];
								API.battleSpecial = 1;
								var teiko = CHDATA.event.maps[2].debuff.teiko;
								API.fleet1 = genFleet(teiko.main);
								API.fleet2 = genFleet(teiko.escort);

								processAPI(API);
								eventqueue.push([shuttersNextBattle,[[]]]);

								CHAPI.battleSpecialContinue = true;
								CHAPI.now_maphp -= (700 - nowhp);
								if (CHAPI.now_maphp < 1) CHAPI.now_maphp = 1;
								eventqueue.push([cleanStage,[]]);
								eventqueue.push([function(){									
									processAPI(CHAPI);
									for (var i=eventqueue.length-1; i>-1; i--) {
										if (eventqueue[i][0] == shutters) { eventqueue[i][0] = shuttersSelect; break; }
									}
									eventqueue.push([endSortie,[]])
								},[]]);
							}
							fleetData = loadFleet(teiko.main);
							var fleet = new Fleet(0);
							fleet.loadShips(fleetData);
							fleet.formation = teiko.mainForm;

							var fleetE = new Fleet(0, fleet2);
							fleetData = loadFleet(teiko.escort);
							fleetE.loadShips(fleetData);
							fleetE.formation = teiko.escortForm;

							NEWFORMAT = false;
							var battle = {data:{},yasen:{},mvp:[],rating:'',node:13};
							this.battle = battle;
							sim12vs12(1,fleet,fleetE,FLEETS2[0],null,null,false,false,false,false,false,battle,true,null);
						}							
					}
				},
				'N': {
					type: 3,
					x: 229,
					y: 173,
					distance: 4,
					end: true
				},
				'O': {
					type: 1,
					x: 218,
					y: 234,
					distance: 4,
					aironly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'M'
				},
				'P': {
					type: 1,
					x: 478,
					y: 303,
					boss: true,
					hidden: 1,
					distance: 7,
					end: true,
					friendFleet: ['e3p_1','e3p_2','e3p_3','e3p_4','e3p_5','e3p_6'],
					debuffAmount: 110,
					setupSpecial: function() {
						MAPDATA[70].maps[3].bgmDB = 'n_01_01';
						MAPDATA[70].maps[3].bgmNB = 'n_01_01';
						const isLD = CHDATA.event.maps[3].part == 2 && CHDATA.event.maps[3].hp <= MAPDATA[70].maps[3].finalhp[CHDATA.event.maps[3].diff];
						FLEETS2[0].ships[0].AR = {3: isLD ? 390 : 280, 2: isLD ? 340 : 260, 1: isLD ? 300 : 240}[CHDATA.event.maps[3].diff];
						const debuffed = CHDATA.event.maps[3].routes.includes(3);
						const bonusList = debuffed ?  {
							'[35, 511, 516]': 2.5,
							'[444, 441, 442, 443, 448, 449, 575]': 1.5
						} : {
							'[35, 511, 516]': 2,
							'[444, 441, 442, 443, 448, 449, 575]': 1.2
						};
						const ships = FLEETS1[0].ships.concat(FLEETS1[1].ships).concat(CHDATA.sortie.fleetFriend.ships);
						for (let ship of ships) {
							for (let key in bonusList) {
								const midList = JSON.parse(key);
								if (midList.includes(getBaseId(ship.mid))) ship.bonusSpecial = [{ mod: bonusList[key] }];
							}
							if(ship.equips.some(equip => equip.mid === 282)) ship.bonusSpecial ? ship.bonusSpecial[0].mod *= 1.5 : ship.bonusSpecial = [{ mod: 1.5 }];
						}
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					compDiffF: {
						3: ['Hard 2'],
						2: ['Medium 2'],
						1: ['Easy 2'],
					},						
				},
				'Q': {
					type: 1,
					x: 447,
					y: 353,
					distance: 8,
					raid: true,
					route: 'P',
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
				},
				'R': {
					type: 1,
					x: 374,
					y: 235,
					hidden: 1,
					route: 'T',
					distance: 4,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					setupSpecial: function() {
						MAPDATA[70].maps[3].bgmDN = 'n_01_00';
						MAPDATA[70].maps[3].bgmNN = 'n_01_00';
					}
				},
				'S': {
					type: 1,
					x: 370,
					y: 331,
					hidden: 1,
					distance: 7,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1'],
					},
					routeC: s => s.aBB + s.escort.aBB > 3 || Math.min(s.speed, s.escort.speed) == 5 ? 'Q' : 'P'
				},
				'T': {
					type: 1,
					x: 327,
					y: 284,
					hidden: 1,
					distance: 7,
					raid: true,
					routeC: function(ships) {
						const russianIds = [35, 511, 516];
						const count = russianIds.reduce((acc, basemid) => acc + isShipInList(FLEETS1[0].ships.concat(FLEETS1[1].ships), basemid) ? 1: 0, 0);
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 43: CHDATA.event.maps[3].routes.includes(3) && 
							(ships.CA + ships.escort.CA  + ships.CAV + ships.escort.CAV > 2 || ships.LHA + ships.escort.LHA > 0 || count >= 2) && ships.aCV + ships.escort.aCV < 2 ? 'X' : 'S', 42.99: 'U' });
						return this.showLoSPlane;
					},
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					debuffGive: function() { 
						CHDATA.event.maps[3].debuff.T = true 
						if (FLEETS1[0].AS == 2) CHDATA.event.maps[3].debuff.T_2 = 1;
					}
				},
				'U': {
					type: 3,
					x: 294,
					y: 334,
					end: true,
					hidden: 1,
					distance: 7,
				},
				'V': {
					type: 1,
					x: 391,
					y: 128,
					hidden: 2,
					distance: 2,
					route: 'K',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
				},	
				'W': {
					type: 1,
					x: 333,
					y: 139,
					hidden: 2,
					distance: 2,
					route: 'V',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					subonly: true
				},
				'X': {
					type: 1,
					x: 391,
					y: 282,
					hidden: 3,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'P',
					subonly: true
				},			
			}
		}
	},
};