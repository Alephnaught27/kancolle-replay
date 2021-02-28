MAP200 = {
	name: 'Showdown at Operation MU, Battle of Ishijima Coast',
	date: '2019-03-26',
	diffMode: 2,
	order: 10,
	allowDiffs: [1,2,3],
	allowFleets: [0,1,2,3,7],
	allowLBAS: true,
	allowVanguard: true,
	vanguardConsts: { vanguardEvDD1: 25, vanguardEvDD2: 40, vanguardEvOther1: 15, vanguardEvOther2: 25 },
	newResupplyCosts: true,
	sortieable: false,
	bannerImg: 'assets/maps/200/banner1.png',
	bannerImgAlt: 'assets/maps/200/banner2.png',
	transportCalc: transportCalcStandard,
	historical: {
		saiki_mutsuki: [1,2,6,7,28,29,30,31,481],
		saiki_cl: [99,100,21,53,113],
		saiki_dd: [42,44,405,425,424,452,135,410,527],
		saiki_kmkz: [471,472,473,474],
		oka_renagawa_25: [532],
		oka_renagawa_2_15: [137,138,139,140,479,480],
		oka_renagawa_3_15: [137,138,139,140,479,480,20],
		oka_renagawa_3_14: [98],
		oka_renagawa_12: [102,103,85,79,60,120,71,72,54,56,135,44,45,50,421,423],
		miyauchi_2: [42,458,410],
		miyauchi_18: [185],
		miyauchi_15: [55,43,485,528],
		miyauchi_115: [110,111,68,69,124,125,422,44,135],
	},
	friendFleet: {
		'desdiv31': { voice: [], ships: [
				{ "mid": 373, "LVL": 108, "FP": 58, "TP": 79, "AA": 63, "AR": 50, "equips": [ 266, 280, 88 ] },
				{ "mid": 688, "LVL": 74, "FP": 56, "TP": 80, "AA": 76, "AR": 49, "equips": [ 3, 122, 106 ] },			   
				{ "mid": 680, "LVL": 60, "FP": 56, "TP": 74, "AA": 62, "AR": 49, "equips": [ 3, 3, 28 ] },
				{ "mid": 497, "LVL": 150, "FP": 76, "TP": 87, "AA": 82, "AR": 52, "equips": [ 266, 296, 240 ] } 
			]},
		'yuugumo1': { voice: [], ships: [
				{ "mid": 686, "LVL": 99, "FP": 56, "TP": 80, "AA": 76, "AR": 49, "equips": [ 122, 122, 74 ] },
				{ "mid": 359, "LVL": 99, "FP": 53, "TP": 92, "AA": 53, "AR": 51, "equips": [ 267, 286, 101 ] },
				{ "mid": 564, "LVL": 99, "FP": 72, "TP": 100, "AA": 73, "AR": 56, "equips": [ 267, 286, 267 ] }
			]},
		'gambier': { voice: [], ships: [
				{ "mid": 396, "LVL": 99, "FP": 37, "TP": 9, "AA": 59, "AR": 40, "equips": [ 257, 255, 259 ] },
				{ "mid": 681, "LVL": 99, "FP": 54, "TP": 78, "AA": 67, "AR": 45, "equips": [ 313, 314, 101 ] },
				{ "mid": 689, "LVL": 99, "FP": 63, "TP": 72, "AA": 119, "AR": 55, "equips": [ 308, 308, 307 ] }
			]},
		'shinyo': { voice: [], ships: [
				{ "mid": 536, "LVL": 99, "FP": 42, "TP": 9, "AA": 76, "AR": 57, "equips": [ 257, 255, 154, 259 ] },
				{ "mid": 383, "LVL": 99, "FP": 43, "TP": 0, "AA": 58, "AR": 33, "equips": [ 63, 63, 29 ] },		   
				{ "mid": 385, "LVL": 99, "FP": 45, "TP": 0, "AA": 58, "AR": 33, "equips": [ 63, 63, 29 ] },		   
				{ "mid": 386, "LVL": 99, "FP": 42, "TP": 0, "AA": 57, "AR": 34, "equips": [ 63, 63, 29 ] }
			]},
		'tengo': { voice: [307, 141], ships: [
				{ "mid": 136, "LVL": 99, "FP": 238, "TP": 0, "AA": 119, "AR": 118, "equips": [ 128, 128, 128, 116 ] },
				{ "mid": 307, "LVL": 99, "FP": 88, "TP": 79, "AA": 82, "AR": 69, "equips": [ 50, 50, 102 ] }, 
				{ "mid": 558, "LVL": 99, "FP": 64, "TP": 81, "AA": 97, "AR": 56, "equips": [ 266, 266, 101 ] },			   
				{ "mid": 557, "LVL": 99, "FP": 66, "TP": 80, "AA": 94, "AR": 55, "equips": [ 266, 266, 29 ] }
			]},
		'shiratsuyu': { voice: [], ships: [
				{ "mid": 497, "LVL": 92, "FP": 75, "TP": 87, "AA": 82, "AR": 52, "equips": [266, 296, 74] },
				{ "mid": 145, "LVL": 90, "FP": 59, "TP": 119, "AA": 72, "AR": 53, "equips": [266, 88, 286] },
				{ "mid": 498, "LVL": 87, "FP": 74, "TP": 88, "AA": 74, "AR": 53, "equips": [266, 266, 101] },
				{ "mid": 144, "LVL": 93, "FP": 79, "TP": 93, "AA": 63, "AR": 54, "equips": [266, 266, 29] }
			]},
		'euro': { voice: [], ships: [
				{ "mid": 579, "LVL": 86, "FP": 72, "TP": 70, "AA": 110, "AR": 63, "equips": [ 303, 303, 102, 74 ] }, 
				{ "mid": 347, "LVL": 79, "FP": 54, "TP": 72, "AA": 63, "AR": 50, "equips": [ 147, 147, 101 ] },
				{ "mid": 580, "LVL": 83, "FP": 54, "TP": 84, "AA": 64, "AR": 50, "equips": [ 129, 58, 29 ] },  
				{ "mid": 394, "LVL": 99, "FP": 57, "TP": 106, "AA": 73, "AR": 52, "equips": [ 314, 314, 280 ] }
			]},
		'yuugumo2': { voice: [], ships: [
				{ "mid": 564, "LVL": 83, "FP": 72, "TP": 89, "AA": 73, "AR": 55, "equips": [ 267, 267, 74 ] },
				{ "mid": 542, "LVL": 88, "FP": 73, "TP": 87, "AA": 72, "AR": 55, "equips": [ 267, 267, 101 ] },
				{ "mid": 563, "LVL": 91, "FP": 68, "TP": 102, "AA": 68, "AR": 54, "equips": [ 267, 58, 240 ] }
			]},
		'taffy': {
			voice: [], ships: [
				{ "mid": 396, "LVL": 99, "FP": 37, "TP": 9, "AA": 59, "AR": 40, "equips": [257, 255, 259] },
				{ "mid": 681, "LVL": 99, "FP": 54, "TP": 78, "AA": 67, "AR": 45, "equips": [313, 314, 101] },
				{ "mid": 689, "LVL": 99, "FP": 63, "TP": 72, "AA": 119, "AR": 55, "equips": [308, 308, 307] }
			]
		},
		'arashi': {
			voice: [], ships: [
				{ "mid": 354, "LVL": 84, "FP": 55, "TP": 79, "AA": 53, "AR": 51, "equips": [266, 266, 74] },
				{ "mid": 355, "LVL": 87, "FP": 52, "TP": 91, "AA": 51, "AR": 50, "equips": [266, 58, 29] },
				{ "mid": 557, "LVL": 79, "FP": 66, "TP": 80, "AA": 114, "AR": 53, "equips": [122, 122, 106] },
				{ "mid": 469, "LVL": 97, "FP": 69, "TP": 96, "AA": 68, "AR": 53, "equips": [266, 266, 240] }
			]
		},
		'av': {
			voice: [], ships: [
				{ "mid": 586, "LVL": 99, "FP": 70, "TP": 88, "AA": 65, "AR": 49, "equips": [310, 310, 102, 74] },
				{ "mid": 348, "LVL": 99, "FP": 69, "TP": 72, "AA": 50, "AR": 51, "equips": [134, 134, 134] },
				{ "mid": 488, "LVL": 99, "FP": 60, "TP": 92, "AA": 93, "AR": 68, "equips": [235, 58, 129] }
			]
		},
		'sara': {
			voice: [], ships: [
				{ "mid": 586, "LVL": 99, "FP": 70, "TP": 88, "AA": 65, "AR": 49, "equips": [310, 310, 102, 74] },
				{ "mid": 348, "LVL": 99, "FP": 69, "TP": 72, "AA": 50, "AR": 51, "equips": [134, 134, 134] },
				{ "mid": 488, "LVL": 99, "FP": 60, "TP": 92, "AA": 93, "AR": 68, "equips": [235, 58, 129] }
			]
		},
		'dd': {
			voice: [], ships: [
				{ "mid": 323, "LVL": 75, "FP": 55, "TP": 79, "AA": 53, "AR": 51, "equips": [266, 266, 74] },
				{ "mid": 369, "LVL": 87, "FP": 57, "TP": 82, "AA": 53, "AR": 50, "equips": [266, 266, 101] },
				{ "mid": 688, "LVL": 81, "FP": 57, "TP": 80, "AA": 64, "AR": 51, "equips": [267, 267, 29] },
				{ "mid": 680, "LVL": 67, "FP": 58, "TP": 78, "AA": 65, "AR": 51, "equips": [267, 267, 29] }
			]
		},
		'tengo2': { voice: [136,141], ships: [
			{"mid": 136, "LVL": 86, "FP": 238, "TP": 0, "AA": 119, "equips": [128, 128, 128, 116]},
			{"mid": 307, "LVL": 96, "FP": 88, "TP": 79, "AA": 82, "equips": [50,  50, 102]},
			{"mid": 558, "LVL": 85, "FP": 64, "TP": 81, "AA": 97, "equips": [266, 266, 101]},
			{"mid": 557, "LVL": 87, "FP": 66, "TP": 80, "AA": 94, "equips": [266, 266, 101]}
			]},
		'miyauchi' : { voice: [], ships: [
			{"mid": 350, "LVL": 99, "FP": 55, "TP": 79, "AA": 54, "equips": [266, 266, 74]},
			{"mid": 407, "LVL": 127, "FP": 73, "TP": 101, "AA": 80, "equips": [296, 240, 179]},
			{"mid": 325, "LVL": 65, "FP": 56, "TP": 80, "AA": 56, "equips": [267, 267, 29]},
			{"mid": 318, "LVL": 90, "FP": 39, "TP": 18, "AA": 74, "equips": [257, 255, 257]}
			]},
		'kasumi' : { voice: [], ships: [
			{"mid": 464, "LVL": 93, "FP": 69, "TP": 92, "AA": 77, "equips": [266, 266, 140],damage:[.5,.5]},
			{"mid": 344, "LVL": 78, "FP": 53, "TP": 78, "AA": 68, "equips": [267, 267, 101]},
			{"mid": 325, "LVL": 65, "FP": 56, "TP": 80, "AA": 56, "equips": [267, 167, 29]}
			]},
		'shigure' : { voice: [], ships: [
			{"mid": 145, "LVL": 99, "FP": 59, "TP": 118, "AA": 72, "equips": [58, 286, 286],damage:[.5,.5]}
			]},
		'amatsu' : { voice: [], ships: [
			{"mid": 316, "LVL": 155, "FP": 55, "TP": 84, "AA": 67, "equips": [266, 266, 74]},
			{"mid": 689, "LVL": 125, "FP": 62, "TP": 72, "AA": 117, "equips": [308, 313, 279]},
			{"mid": 681, "LVL": 87, "FP": 54, "TP": 78, "AA": 71, "equips": [314, 308, 29]},
			{"mid": 396, "LVL": 81, "FP": 37, "TP": 9, "AA": 59, "equips": [257, 255, 259]}
			]
		},
		'leyte1' : { voice: [136,141], ships: [
			{"mid": 136, "LVL": 96, "FP": 205, "TP": 0, "AA": 117, "equips": [276, 117, 116, 12]},
			{"mid": 541, "LVL": 91, "FP": 91, "TP": 0, "AA": 115, "equips": [290, 290, 12, 102]},
			{"mid": 428, "LVL": 99, "FP": 101, "TP": 84, "AA": 118, "equips": [50, 234, 234, 31]},
			{"mid": 427, "LVL": 86, "FP": 105, "TP": 86, "AA": 78, "equips": [50, 50, 101, 31]},
			{"mid": 270, "LVL": 89, "FP": 96, "TP": 90, "AA": 76, "equips": [50, 90, 286, 31]},
			{"mid": 269, "LVL": 96, "FP": 90, "TP": 90, "AA": 76, "equips": [50, 90, 286, 31]}
			]},
		'leyte2' : { voice: [149,141], ships: [
			{"mid": 149, "LVL": 92, "FP": 155, "TP": 0, "AA": 99, "equips": [289, 289, 289, 74]},
			{"mid": 151, "LVL": 94, "FP": 145, "TP": 0, "AA": 105, "equips": [7, 7, 289, 101]},
			{"mid": 188, "LVL": 87, "FP": 96, "TP": 93, "AA": 89, "equips": [60, 90, 286, 102]},
			{"mid": 189, "LVL": 83, "FP": 98, "TP": 94, "AA": 91, "equips": [5, 286, 90, 239]},
			{"mid": 543, "LVL": 97, "FP": 75, "TP": 89, "AA": 70, "equips": [267, 267, 29]},
			{"mid": 373, "LVL": 104, "FP": 58, "TP": 79, "AA": 64, "equips": [267, 267, 29]}
			]},
		'nishimra': { voice: [145,241], ships: [
			{"mid": 412, "LVL": 97, "FP": 145, "TP": 0, "AA": 99, "equips": [290, 290, 240, 74]},
			{"mid": 411, "LVL": 91, "FP": 151, "TP": 0, "AA": 100, "equips": [236, 236, 36, 101]},
			{"mid": 73, "LVL": 72, "FP": 95, "TP": 79, "AA": 74, "equips": [50, 50, 286, 79]},
			{"mid": 489, "LVL": 82, "FP": 74, "TP": 101, "AA": 68, "equips": [266, 266, 58]},
			{"mid": 327, "LVL": 87, "FP": 55, "TP": 91, "AA": 53, "equips": [266, 266, 58]},
			{"mid": 145, "LVL": 95, "FP": 59, "TP": 118, "AA": 72, "equips": [286, 286, 58]}
			]},
		'tengo3': { voice: [307, 141], ships: [
			{"mid": 136, "LVL": 76, "FP": 145, "TP": 0, "AA": 120, "equips": [276, 117, 276, 36]},
			{"mid": 307, "LVL": 84, "FP": 145, "TP": 0, "AA": 76, "equips": [247, 247, 101]},
			{"mid": 557, "LVL": 92, "FP": 96, "TP": 93, "AA": 112, "equips": [296, 296, 106]},
			{"mid": 558, "LVL": 91, "FP": 98, "TP": 94, "AA": 112, "equips": [122, 122, 106]},
			{"mid": 470, "LVL": 99, "FP": 75, "TP": 89, "AA": 117, "equips": [266, 266, 58]},
			{"mid": 228, "LVL": 76, "FP": 58, "TP": 79, "AA": 84, "equips": [129, 286, 29]}
			]},
		'italian': { voice: [], ships: [
			{"mid": 178, "LVL": 93, "FP": 151, "TP": 36, "AA": 99, "equips": [114, 114, 114, 85]},
			{"mid": 446, "LVL": 85, "FP": 167, "TP": 0, "AA": 105, "equips": [246, 246, 246, 101]},
			{"mid": 447, "LVL": 87, "FP": 170, "TP": 0, "AA": 89, "equips": [246, 246, 245, 101]},
			{"mid": 353, "LVL": 76, "FP": 54, "TP": 0, "AA": 91, "equips": [306, 159, 159]},
			{"mid": 347, "LVL": 79, "FP": 51, "TP": 84, "AA": 70, "equips": [147, 58, 29]},
			{"mid": 580, "LVL": 78, "FP": 57, "TP": 84, "AA": 64, "equips": [147, 58, 29]}
			]},
		'euro': { voice: [], ships: [
			{"mid": 579, "LVL": 87, "FP": 72, "TP": 70, "AA": 112, "equips": [303, 303, 59, 101]},
			{"mid": 496, "LVL": 92, "FP": 105, "TP": 60, "AA": 92, "equips": [162, 162, 102, 58]},
			{"mid": 361, "LVL": 91, "FP": 110, "TP": 44, "AA": 80, "equips": [162, 134, 134, 134]},
			{"mid": 580, "LVL": 84, "FP": 60, "TP": 72, "AA": 67, "equips": [147, 147, 101]},
			{"mid": 347, "LVL": 85, "FP": 54, "TP": 72, "AA": 63, "equips": [147, 147, 29]},
			{"mid": 394, "LVL": 99, "FP": 55, "TP": 114, "AA": 70, "equips": [314, 314, 314]}
			]},
		'allies': { voice: [364,141], ships: [
			{"mid": 576, "LVL": 99, "FP": 186, "TP": 0, "AA": 99, "equips": [299, 298, 298, 36]},
			{"mid": 364, "LVL": 99, "FP": 173, "TP": 0, "AA": 114, "equips": [246, 246, 246, 191]},
			{"mid": 392, "LVL": 92, "FP": 153, "TP": 0, "AA": 89, "equips": [246, 245, 234, 234]},
			{"mid": 360, "LVL": 99, "FP": 195, "TP": 0, "AA": 129, "equips": [161, 183, 183, 36]},
			{"mid": 393, "LVL": 99, "FP": 63, "TP": 24, "AA": 82, "equips": [244, 244, 243, 24]}
			]},
		'american': { voice: [], ships: [
			{"mid": 360, "LVL": 82, "FP": 191, "TP": 0, "AA": 138, "equips": [161, 161, 161, 172]},
			{"mid": 545, "LVL": 87, "FP": 75, "TP": 18, "AA": 106, "equips": [257, 257, 255, 259]},
			{"mid": 397, "LVL": 85, "FP": 63, "TP": 18, "AA": 105, "equips": [257, 257, 254, 258]},
			{"mid": 396, "LVL": 69, "FP": 35, "TP": 9, "AA": 57, "equips": [257, 254, 258]},
			{"mid": 689, "LVL": 82, "FP": 62, "TP": 72, "AA": 111, "equips": [308, 313, 315]},
			{"mid": 681, "LVL": 89, "FP": 55, "TP": 78, "AA": 74, "equips": [314, 308, 315]}
			]},
		'british': { voice: [364,141], ships: [
			{"mid": 576, "LVL": 93, "FP": 186, "TP": 0, "AA": 92, "equips": [299, 298, 299, 36]},
			{"mid": 364, "LVL": 86, "FP": 173, "TP": 0, "AA": 114, "equips": [246, 246, 246, 191]},
			{"mid": 393, "LVL": 82, "FP": 63, "TP": 24, "AA": 82, "equips": [244, 244, 243, 242]},
			{"mid": 394, "LVL": 93, "FP": 52, "TP": 126, "AA": 70, "equips": [58, 58, 58]}
			]},
		'dd32su': { voice: [], ships: [
			{"mid": 350, "LVL": 99, "FP": 55, "TP": 79, "AA": 54, "equips": [63, 63, 74]},
			{"mid": 497, "LVL": 150, "FP": 76, "TP": 87, "AA": 75, "equips": [266, 266, 240]},
			{"mid": 373, "LVL": 108, "FP": 58, "TP": 79, "AA": 63, "equips": [280, 147, 28]},
			{"mid": 688, "LVL": 74, "FP": 57, "TP": 80, "AA": 61, "equips": [267, 267, 101]},
			{"mid": 680, "LVL": 60, "FP": 56, "TP": 74, "AA": 62, "equips": [3, 3, 28]}
			]},
		'aganos': { voice: [], ships: [
			{"mid": 306, "LVL": 83, "FP": 86, "TP": 79, "AA": 80, "equips": [50, 50, 101]},
			{"mid": 307, "LVL": 98, "FP": 80, "TP": 79, "AA": 76, "equips": [247, 247, 102]},
			{"mid": 314, "LVL": 99, "FP": 76, "TP": 90, "AA": 80, "equips": [139, 235, 58]},
			{"mid": 686, "LVL": 99, "FP": 53, "TP": 92, "AA": 59, "equips": [267, 58, 29]},
			{"mid": 564, "LVL": 99, "FP": 69, "TP": 100, "AA": 70, "equips": [267, 286, 29]}
			]},
		'kagerous': { voice: [], ships: [
			{"mid": 566, "LVL": 93, "FP": 74, "TP": 90, "AA": 66, "equips": [266, 266, 74]},
			{"mid": 567, "LVL": 129, "FP": 73, "TP": 91, "AA": 70, "equips": [267, 267, 101]},
			{"mid": 568, "LVL": 103, "FP": 75, "TP": 88, "AA": 70, "equips": [266, 267, 29]},
			{"mid": 362, "LVL": 109, "FP": 56, "TP": 78, "AA": 52, "equips": [266, 266, 29]},
			{"mid": 316, "LVL": 112, "FP": 52, "TP": 106, "AA": 65, "equips": [266, 286, 286]},
			{"mid": 228, "LVL": 83, "FP": 62, "TP": 111, "AA": 61, "equips": [266, 286, 286]}
			]},
		'yuugumos': { voice: [], ships: [
			{"mid": 542, "LVL": 153, "FP": 73, "TP": 87, "AA": 72, "equips": [267, 267, 74]},
			{"mid": 563, "LVL": 80, "FP": 70, "TP": 101, "AA": 71, "equips": [267, 286, 267]},
			{"mid": 564, "LVL": 94, "FP": 72, "TP": 89, "AA": 73, "equips": [267, 267, 29]},
			{"mid": 543, "LVL": 98, "FP": 75, "TP": 89, "AA": 70, "equips": [267, 267, 101]},
			{"mid": 344, "LVL": 83, "FP": 53, "TP": 89, "AA": 68, "equips": [267, 267, 286]},
			{"mid": 324, "LVL": 82, "FP": 56, "TP": 91, "AA": 56, "equips": [267, 267, 286]}
			]},
		'53level': { voice: [], ships: [
			{"mid": 347, "LVL": 51, "FP": 54, "TP": 72, "AA": 63, "equips": [147, 147, 29]},
			{"mid": 265, "LVL": 41, "FP": 95, "TP": 79, "AA": 76, "equips": [50, 90, 74, 74]},
			{"mid": 580, "LVL": 53, "FP": 54, "TP": 84, "AA": 64, "equips": [58, 129, 29]},
			{"mid": 435, "LVL": 78, "FP": 46, "TP": 92, "AA": 58, "equips": [58, 129, 29]},
			{"mid": 327, "LVL": 54, "FP": 49, "TP": 91, "AA": 50, "equips": [58, 129, 29]}
			]},
		'asashios': { voice: [], ships: [
			{"mid": 463, "LVL": 91, "FP": 74, "TP": 92, "AA": 64, "equips": [266, 266, 74]},
			{"mid": 199, "LVL": 86, "FP": 70, "TP": 101, "AA": 64, "equips": [266, 286, 29]},
			{"mid": 489, "LVL": 93, "FP": 71, "TP": 101, "AA": 66, "equips": [266, 58, 29]},
			{"mid": 490, "LVL": 93, "FP": 71, "TP": 101, "AA": 66, "equips": [266, 266, 101]},
			{"mid": 687, "LVL": 78, "FP": 57, "TP": 79, "AA": 59, "equips": [266, 266, 29]},
			{"mid": 198, "LVL": 76, "FP": 69, "TP": 99, "AA": 65, "equips": [266, 58, 29]}
			]},
		'nakama': { voice: [], ships: [
			{"mid": 430, "LVL": 143, "FP": 52, "TP": 18, "AA": 90, "equips": [257, 257, 255, 259]},
			{"mid": 157, "LVL": 103, "FP": 57, "TP": 110, "AA": 59, "equips": [314, 314, 283]},
			{"mid": 543, "LVL": 109, "FP": 75, "TP": 89, "AA": 70, "equips": [267, 267, 101]},
			{"mid": 497, "LVL": 155, "FP": 87, "TP": 87, "AA": 90, "equips": [266, 240, 296]},
			{"mid": 119, "LVL": 140, "FP": 63, "TP": 171, "AA": 49, "equips": [58, 286, 286]}
			]},
		'yuugumos2': { voice: [], ships: [
			{ "mid": 542, "LVL": 87, "FP": 73, "TP": 87, "AA": 72, "AR": 55, "equips": [ 267, 267, 101 ] },
			{ "mid": 543, "LVL": 93, "FP": 75, "TP": 89, "AA": 70, "AR": 55, "equips": [ 267, 267, 74 ] },			   
			{ "mid": 686, "LVL": 65, "FP": 56, "TP": 80, "AA": 61, "AR": 51, "equips": [ 266, 267, 29 ] },			   
			{ "mid": 359, "LVL": 57, "FP": 53, "TP": 92, "AA": 52, "AR": 51, "equips": [ 286, 266, 29 ] },			   
			{ "mid": 345, "LVL": 49, "FP": 56, "TP": 80, "AA": 63, "AR": 50, "equips": [ 267, 122, 29 ] } 
			]},
		'muragumo': { voice: [], ships: [
			{ "mid": 498, "LVL": 125, "FP": 74, "TP": 88, "AA": 74, "AR": 53, "equips": [ 266, 266, 74 ] },
			{ "mid": 687, "LVL": 65, "FP": 57, "TP": 79, "AA": 54, "AR": 51, "equips": [ 266, 266, 101 ] },			   
			{ "mid": 373, "LVL": 103, "FP": 59, "TP": 79, "AA": 64, "AR": 51, "equips": [ 267, 267, 240 ] },			   
			{ "mid": 688, "LVL": 65, "FP": 57, "TP": 80, "AA": 64, "AR": 51, "equips": [ 267, 267, 29 ] },			   
			{ "mid": 680, "LVL": 60, "FP": 55, "TP": 89, "AA": 61, "AR": 51, "equips": [ 266, 286, 29 ] }
			]},
		'smolyuro': { voice: [], ships: [
			{ "mid": 579, "LVL": 86, "FP": 72, "TP": 70, "AA": 110, "AR": 63, "equips": [ 303, 303, 102, 74 ] },
			{ "mid": 347, "LVL": 79, "FP": 54, "TP": 72, "AA": 63, "AR": 50, "equips": [ 147, 147, 101 ] },			   
			{ "mid": 580, "LVL": 83, "FP": 54, "TP": 84, "AA": 64, "AR": 50, "equips": [ 129, 58, 29 ] },			   
			{ "mid": 394, "LVL": 99, "FP": 57, "TP": 106, "AA": 73, "AR": 52, "equips": [ 314, 314, 280 ] },			   
			{ "mid": 179, "LVL": 82, "FP": 57, "TP": 71, "AA": 66, "AR": 55, "equips": [ 282, 282, 29 ] },			   
			{ "mid": 180, "LVL": 83, "FP": 48, "TP": 79, "AA": 69, "AR": 54, "equips": [ 129, 314, 29 ] }
			]},
		'kimura': { voice: [], ships: [
			{ "mid": 464, "LVL": 94, "FP": 69, "TP": 92, "AA": 76, "AR": 52, "equips": [ 266, 266, 101 ] },
			{ "mid": 193, "LVL": 86, "FP": 102, "TP": 84, "AA": 83, "AR": 79, "equips": [ 50, 50, 102, 140 ] },			   
			{ "mid": 321, "LVL": 74, "FP": 92, "TP": 49, "AA": 80, "AR": 72, "equips": [ 310, 134, 134, 134 ] },			   
			{ "mid": 344, "LVL": 92, "FP": 51, "TP": 78, "AA": 66, "AR": 50, "equips": [ 267, 240, 129 ] },			   
			{ "mid": 325, "LVL": 91, "FP": 56, "TP": 80, "AA": 56, "AR": 51, "equips": [ 267, 267, 29 ] }
			]},
		'random': { voice: [], ships: [
			{ "mid": 152, "LVL": 79, "FP": 161, "TP": 0, "AA": 97, "AR": 92, "equips": [ 289, 104, 104, 36 ] },
			{ "mid": 150, "LVL": 86, "FP": 151, "TP": 0, "AA": 97, "AR": 95, "equips": [ 104, 104, 104, 36 ] },			   
			{ "mid": 282, "LVL": 63, "FP": 38, "TP": 27, "AA": 42, "AR": 60, "equips": [ 257, 257, 257, 259 ] },			   
			{ "mid": 293, "LVL": 74, "FP": 83, "TP": 79, "AA": 69, "AR": 53, "equips": [ 310, 310, 310, 310 ] },			   
			{ "mid": 371, "LVL": 76, "FP": 41, "TP": 77, "AA": 58, "AR": 39, "equips": [ 295, 285, 29 ] },			   
			{ "mid": 476, "LVL": 65, "FP": 43, "TP": 77, "AA": 49, "AR": 40, "equips": [ 294, 285, 29 ] }
			]},
		'zkk': { voice: [467,999], ships: [
			{"mid": 467, "LVL": 94, "FP": 72, "TP": 18, "AA": 102, "AR": 85, "equips": [257, 257, 255, 259]},
			{"mid": 466, "LVL": 91, "FP": 77, "TP": 18, "AA": 100, "AR": 85, "equips": [257, 257, 255, 259]},
			{"mid": 149, "LVL": 87, "FP": 140, "TP": 0, "AA": 98, "AR": 84, "equips": [289, 290, 102, 101]},
			{"mid": 151, "LVL": 86, "FP": 147, "TP": 0, "AA": 98, "AR": 84, "equips": [289, 290, 59, 543]},
			{"mid": 543, "LVL": 99, "FP": 75, "TP": 89, "AA": 70, "AR": 55, "equips": [267, 267, 29]},
			{"mid": 373, "LVL": 99, "FP": 75, "TP": 89, "AA": 70, "AR": 55, "equips": [267, 267, 29]},
			]},
	},
	maps: {
		1: {
			name: 'E-1',
			nameT: 'Sasebo-Miyauchi Transport Operation',
			fleetTypes: [0,3],
			bgmMap: 103,
			bgmDN: 104,
			bgmNN: 104,
			bgmDB: 111,
			bgmNB: 111,
			bossnode: [11, 16],
			checkLock: [10, 11, 12],
			giveLock: 9,
			overrideStats: function(diff) {
				return 	{
					1659: { AR: 110 },
					1660: { AR: diff == 2 ? 130 : 150 },
					1662: { AR: 135 },
					1663: { AR: 140 },
					1664: { AR: 160 },
				}
			},
			parts: {
				1: {
					currentBoss: 'K',
					transport: 'I',
					maphp: {
						3: { 1: 500 },
						2: { 1: 400 },
						1: { 1: 300 }
					},
					finalhp: null,
				},
				2: {
					currentBoss: 'P',
					transport: null,
					maphp: {
						3: { 1: 1400 },
						2: { 1: 1400 },
						1: { 1: 1400 },
					},
					finalhp: {
						3: 390,
						2: 390,
						1: 390
					}
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '1_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[1].part == 2;
					}
				},
				2: {
					images: [{ name: '1_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (debuff && debuff.K) return true;
						if (CHDATA.event.maps[1].diff == 1 && CHDATA.event.maps[1].part == 2) return true;
						return false;
					}
				}
			},
			additionalCheck: function(ships,errors) {
				if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
			},
			nodes: {
				'Start': {
					type: 0,
					x: 60,
					y: 94,
					routeC: function() {
						if (CHDATA.fleets.combined == 3) return 'B';
						return 'A';
					}
				},
				'A': {
					type: 1,
					x: 132,
					y: 229,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2','Medium 1','Medium 2','Medium 1'],
						1: ['Easy 1', 'Easy 2','Easy 1','Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2'],
					},
					subonly: true,
					route: 'D'
				},
				'B': {
					type: 1,
					x: 191,
					y: 121,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 1', 'Hard 1', 'Hard 1'],
						2: ['Medium 1', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1', 'Medium 1'],
						1: ['Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 1'],
					},
					routeC: function(ships) {
						let count = 0;
						const ids = ships.ids.concat(ships.escort.ids);
						if (ids.includes(560)) count++;
						const baseCVE = [544, 521, 534];
						for (let mid in baseCVE){
							if (isShipInList(ids, baseCVE[mid])) count++;
						}
						if (count >= 3) return 'C';
						return 'G';
					}
				},
				'C': {
					type: 1,
					x: 222,
					y: 35,
					compDiff: {
						3: ['Hard 1', 'Hard 2','Hard 1','Hard 1','Hard 1'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					route: 'G'
				},
				'D': {
					type: 3,
					x: 247,
					y: 305,
					routeC: function(ships) {
						if ((ships.aBB + ships.CVL > 3) || ships.DD < 2) return 'F';
						return 'E';
					}
				},
				'E': {
					type: 1,
					x: 371,
					y: 318,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					raid: true,
					route: 'L',
				},
				'F': {
					type: 3,
					x: 215,
					y: 398,
					end: true
				},
				'G': {
					type: 1,
					x: 298,
					y: 122,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					raid: true,
					route: 'H'
				},
				'H': {
					type: 1,
					x: 414,
					y: 101,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					route: 'I'
				},
				'I': {
					type: 2,
					x: 476,
					y: 188,
					resource: 0,
					route: 'J',
				},
				'J': {
					type: 1,
					x: 552,
					y: 123,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeL: {
						16: 'K',
						14: 'M'
					}
				},
				'K': {
					type: 1,
					x: 619,
					y: 74,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					boss: true,
					end: true,
					debuffGive: function() {
						if (CHDATA.event.maps[1].part == 2 && CHDATA.fleets.combined != 3 && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[1].debuff.K = 1;
					},
					setupSpecial: function() {
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.saiki_mutsuki.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
								}
								if (MAPDATA[42].historical.saiki_cl.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.saiki_dd.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4}];
								}
								if (MAPDATA[42].historical.saiki_kmkz.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},
				'L': {
					type: 3,
					x: 488,
					y: 293,
					routeC: function(ships) {
						if (CHDATA.event.maps[1].part == 1) {
							this.showNoCompass = true;
							return 'N';
						}
						this.showNoCompass = false;
						if (CHDATA.event.maps[1].debuff.K && (ships.aBB + ships.CVL < 3) && ships.CL > 0) return 'O';
						let count = 0;
						const mutsukiIds = [1, 2, 28, 29];
						mutsukiIds.forEach(id => {
							if (isShipInList(ships.ids, id)) count++;
						});
						if (count >= 2) return 'I';
						return 'N';
					}
				},
				'M': {
					type: 3,
					x: 488,
					y: 42,
					end: true
				},
				'N': {
					type: 1,
					x: 588,
					y: 230,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: function(ships) {
						
						if (ships.CL == 0) return 'I';
						return 'O';
					}
				},
				'O': {
					type: 1,
					x: 589,
					y: 354,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: function() {
						this.showNoCompass = true;
						if (CHDATA.event.maps[1].part == 1) {
							return 'O*';
						}
						return 'P';
					}
				},
				'O*': {
					type: 3,
					x: 589,
					y: 354,
					end: true,
					hidden: 4
				},
				'P': {
					type: 1,
					x: 672,
					y: 403,
					hidden: 1,
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
					boss: true,
					end: true,
					setupSpecial: function() {
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.saiki_mutsuki.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.8}];
								}
								if (MAPDATA[42].historical.saiki_cl.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.saiki_dd.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4}];
								}
								if (MAPDATA[42].historical.saiki_kmkz.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},
			}
		},
		2: {
			name: 'E-2',
			nameT: 'Oka Renagawa Fleet, Commence Operation!',
			fleetTypes: [0,2],
			bgmMap: 106,
			bgmDN: 105,
			bgmNN: 105,
			bgmDB: 114,
			bgmNB: 114,
			bossnode: [8,18],
			checkLock: [9,11,12],
			giveLock: 10,
			overrideStats: function(diff) {
				const isLD = CHDATA.event.maps[2].hp <= MAPDATA[42].maps[2].finalhp[diff] && CHDATA.event.maps[2].hp > 0 ? 1 : 0;
				const values = {
					1: [110, 150],
					2: [130, 170],
					3: [160, 190]
				}
				return 	{
					1773: { AR: values[diff][isLD] },
				}
			},
			parts: {
				1: {
					currentBoss: 'H',
					transport: null,
					maphp: {
						3: { 1: 1450 },
						2: { 1: 1450 },
						1: { 1: 1450 }
					},
					finalhp: {
						3: 390,
						2: 390,
						1: 390
					},
				},
				2: {
					currentBoss: 'R',
					transport: null,
					maphp: {
						3: { 1: 2400 },
						2: { 1: 2400 },
						1: { 1: 2400 },
					},
					finalhp: {
						3: 655,
						2: 655,
						1: 655
					}
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '2_1.png', x: 0, y: 0 }],
					unlock: function() {
						if (CHDATA.event.maps[2].part == 1) return false;
						return true;
					}
				},
				2: {
					images: [{ name: '2_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (debuff && debuff.M && debuff.H) return true;
						if (CHDATA.event.maps[2].diff == 1 && CHDATA.event.maps[2].part == 2) return true;
						return false;
						
					}
				},
			},
			nodes: {
				'Start': {
					type: 0,
					x: 202,
					y: 139,
					route: 'B'
				},
				'A': {
					type: 1,
					x: 109,
					y: 311,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[2].part == 1) return 'A*';
						this.showNoCompass = false;
						if (checkFlagshipSurfaceRadar() && ships.speed >= 10 && ships.escort && ships.escort.DD > 3 && (ships.CA + ships.CAV > 3)) return 'N';
						return 'L';
					}
				},
				'A*': {
					type: 3,
					x: 109,
					y: 311,
					end: true,
					hidden: 4
				},
				'B': {
					type: 3,
					x: 178,
					y: 243,
					routeS: ['A','C','D']
				},
				'C': {
					type: 1,
					x: 283,
					y: 165,
					subonly: true,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					route: 'E'
				},
				'D': {
					type: 1,
					x: 364,
					y: 242,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					routeC: function(ships) {
						const isCombined = !!ships.escort;
						if (ships.CLT + (isCombined ? ships.escort.CLT : 0) > 0 || ships.CL + (isCombined ? ships.escort.CL : 0) < 2 || ships.aCV > 0 || !checkFlagshipSurfaceRadar()) return 'E';
						return 'G';
					}
				},
				'E': {
					type: 1,
					x: 405,
					y: 161,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'F'
				},
				'F': {
					type: 1,
					x: 492,
					y: 202,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'I'
				},
				'G': {
					type: 1,
					x: 488,
					y: 277,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					raid: true,
					route: 'I',
				},
				'H': {
					type: 1,
					x: 506,
					y: 105,
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
					end: true,
					boss: true,
					debuffGive: function() {
						if (CHDATA.event.maps[2].part == 2 && CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.H = 1;
					},
					setupSpecial: function() {
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_2_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},
				'I': {
					type: 1,
					x: 611,
					y: 211,
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
					},
					route: 'J'
				},
				'J': {
					type: 1,
					x: 601,
					y: 139,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL: { 20: 'H', 18: 'K' }
				},
				'K': {
					type: 3,
					x: 688,
					y: 94,
					end: true,
				},
				'L': {
					type: 1,
					x: 51,
					y: 261,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'M'
				},
				'M': {
					type: 1,
					x: 52,
					y: 359,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'N',
					raid: true,
					debuffGive: function() {
						if (FLEETS1[0].AS >= (CHDATA.event.maps[2].diff == 2 ? 1 : 2)) CHDATA.event.maps[2].debuff.M = 1;
					},
				},
				'N': {
					type: 1,
					x: 126,
					y: 405,
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
					},
					hidden: 1,
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[2].routes && CHDATA.event.maps[2].routes.indexOf(2) > -1) {
							this.showNoCompass = false;
							if (ships.aCV < 1) return 'P';
						}
						return 'O';
					}
				},
				'O': {
					type: 1,
					x: 224,
					y: 328,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'P'
				},
				'P': {
					type: 1,
					x: 302,
					y: 359,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					routeC: function(ships) {
						if (ships.CA + ships.CAV <= 2) return 'Q';
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 18: 'R', 17.99: 'Q' })
						return this.showLoSPlane;
					}
				},
				'Q': {
					type: 3,
					x: 377,
					y: 319,
					end: true,
					hidden: 1
				},
				'R': {
					type: 1,
					x: 380,
					y: 406,
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
					hidden: 1,
					end: true,
					boss: true,
					setupSpecial: function() {
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_2_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},

			}
		},
		3: {
			name: 'E-3',
			nameT: 'Beyond Near Okinawa Sea...',
			fleetTypes: [0,1,2],
			bgmMap: 106,
			bgmDN: 105,
			bgmNN: 105,
			bgmDB: 114,
			bgmNB: 114,
			bossnode: [11,22],
			checkLock: [9,11,12],
			giveLock: 10,
			lbas: 2,
			lbasSortie: 1,
			overrideStats: function(diff) {
				const values = {
					1: 150,
					2: 160,
					3: 170
				},
				othervalues = {
					1: 165,
					2: 180,
					3: 190
				};
				return 	{
					1599: { AR: values[diff] },
					1600: { AR: othervalues[diff] }
				}
			},
			parts: {
				1: {
					currentBoss: 'K',
					transport: null,
					maphp: {
						3: { 1: 1350 },
						2: { 1: 1350 },
						1: { 1: 1350 },
					},
					finalhp: {
						3: 270,
						2: 270,
						1: 270,
					},
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1 },
						chance: { 3: .25, 2: .25, 1: .25 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2']
						},
					}
				},
				2: {
					currentBoss: 'V',
					transport: null,
					maphp: {
						3: { 1: 1950 },
						2: { 1: 1950 },
						1: { 1: 1950 },
					},
					finalhp: {
						3: 390,
						2: 390,
						1: 390,
					},
					enemyRaid: {
						maxNum: { 3: 1, 2: 1, 1: 1 },
						chance: { 3: .25, 2: .25, 1: .25 },
						compName: 'AB',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2']
						},
					}
				}
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '3_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[3].part == 2;
					}
				},
			},
			startCheck: function() {
				if (CHDATA.fleets.combined) return 'Start2';
				return 'Start1';
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 56,
					y: 268,
					routeC: function(ships) {
						if (ships.aBB + ships.aCV > 4) return 'A';
						return 'B';
					}
				},
				'Start2': {
					type: 0,
					x: 190,
					y: 114,
					route: 'C'
				},
				'A': {
					type: 1,
					x: 114,
					y: 340,
					distance: 5,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2']
					},
					route: 'B'
				},
				'B': {
					type: 1,
					x: 143,
					y: 280,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'D'
				},
				'C': {
					type: 3,
					x: 240,
					y: 185,
					distance: 3,
					routeS: ['G','I']
				},
				'D': {
					type: 1,
					x: 240,
					y: 303,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						if (CHDATA.fleets.combined || (ships.aBB + ships.aCV > 3) || ships.DD < 2) return 'E';
						return 'H';
					}
				},
				'E': {
					type: 1,
					x: 284,
					y: 370,
					distance: 6,
					compDiff: {
						3: ['Hard 2','Hard 3'],
						2: ['Medium 2','Medium 3'],
						1: ['Easy 2','Easy 3'],
					},
					routeC: function(ships) {
						if (CHDATA.fleets.combined == 1 || (CHDATA.fleets.combined && (ships.aBB + ships.aCV > 3) && ships.DD < 3) || ships.DD == 0) return 'F';
						return 'H';
					}
				},
				'F': {
					type: 3,
					x: 202,
					y: 391,
					distance: 6,
					end: true,
				},
				'G': {
					type: 1,
					x: 307,
					y: 245,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'D'
				},
				'H': {
					type: 1,
					x: 365,
					y: 317,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL: { 38: 'K', 37.99: 'L' },
					raid: true
				},
				'I': {
					type: 1,
					x: 327,
					y: 148,
					distance: 3,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[3].part == 2) {
							this.showNoCompass = false;
							return CHDATA.fleets.combined == 1 ? 'N' :'M';
						}
						return 'J';
					}
				},
				'J': {
					type: 3,
					x: 317,
					y: 51,
					distance: 3,
					end: true
				},
				'K': {
					type: 1,
					x: 416,
					y: 394,
					distance: 7,
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
					end: true,
					boss: true,
					setupSpecial: function() {
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_3_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_3_14.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4}];
								}
								if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},
				'L': {
					type: 3,
					x: 482,
					y: 362,
					distance: 7,
					end: true
				},
				'M': {
					type: 1,
					x: 406,
					y: 79,
					hidden: 1,
					distance: 4,
					route: 'P',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
					},
				},
				'N': {
					type: 1,
					x: 412,
					y: 184,
					hidden: 1,
					distance: 4,
					compDiff: {
						3: ['Hard 2','Hard 3'],
						2: ['Medium 2','Medium 3'],
						1: ['Easy 2','Easy 3'],
					},
					routeC: function(ships) {
						const historicals = [421,423,532,49], ids = ships.ids.concat(ships.escort.ids);
						if ((ships.CA + ships.CAV > 2) && historicals.some(mid => isShipInList(ids, mid))) return 'Q';
						return Math.random() > 0.3 ? 'O' : 'Q';
					}
				},
				'O': {
					type: 1,
					x: 481,
					y: 245,
					distance: 6,
					hidden: 1,
					route: 'S',
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
				},
				'P': {
					type: 1,
					x: 518,
					y: 78,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 2','Hard 3'],
						2: ['Medium 2','Medium 3'],
						1: ['Easy 2','Easy 3'],
					},
					routeC: function(ships) {
						const historicals = [421,423,532,49], ids = ships.ids.concat(ships.escort.ids);
						if (checkFlagshipSurfaceRadar() && historicals.some(mid => isShipInList(ids, mid))) return 'R';
						return 'Q';
					}
				},
				'Q': {
					type: 1,
					x: 503,
					y: 167,
					distance: 5,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'S'
				},
				'R': {
					type: 1,
					x: 616,
					y: 157,
					distance: 6,
					hidden: 1,
					raid: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL: { 40: 'V', 39.99: 'T' }
				},
				'S': {
					type: 1,
					x: 578,
					y: 261,
					distance: 7,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						if (checkFlagshipSurfaceRadar()) return 'V';
						this.showLoSPlane =  checkELoS33(getELoS33(1,1),{ 30: 'V', 29.99: 'U' });
						return this.showLoSPlane;
					}
				},
				'T': {
					type: 3,
					x: 649,
					y: 73,
					distance: 7,
					hidden: 1,
					end: true
				},
				'U': {
					type: 3,
					x: 609,
					y: 345,
					hidden: 1,
					distance: 8,
					end: true
				},
				'V': {
					type: 1,
					x: 681,
					y: 232,
					hidden: 1,
					boss: true,
					end: true,
					distance: 8,
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
						for (let i=0; i<2; i++) {
							if (!FLEETS1[i]) continue;
							for (let ship of FLEETS1[i].ships) {
								if (MAPDATA[42].historical.oka_renagawa_25.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:2.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_3_15.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.5}];
								}
								if (MAPDATA[42].historical.oka_renagawa_3_14.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.4}];
								}
								if (MAPDATA[42].historical.oka_renagawa_12.indexOf(getBaseId(ship.mid)) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
							}
						}
					},
				},

			}
		},
		4: {
			name: 'E-4',
			nameT: 'Sortie! Miyauchi 1st Task Force',
			fleetTypes: [0,1,2,7],
			bgmMap: 112,
			bgmDN: 62,
			bgmNN: 62,
			bgmDB: 115,
			bgmNB: 115,
			bossnode: [11,22,'Z3'],
			lockSpecial: true,
			checkLock: [9, 12],
			lbas: 3,
			lbasSortie: 2,
			parts: {
				1: {
					currentBoss: 'K',
					maphp: {
						3: { 1: 2600 },
						2: { 1: 2600 },
						1: { 1: 2600 },
					},
					finalhp: {
						3: 800,
						2: 800,
						1: 800,
					}
				},
				2: {
					currentBoss: 'V',
					maphp: {
						3: { 1: 1000 },
						2: { 1: 1000 },
						1: { 1: 1000 },
					},
					finalhp: {
						3: 655,
						2: 655,
						1: 655,
					}
				},
				3: {
					currentBoss: 'Z3',
					maphp: {
						3: { 1: 3750 },
						2: { 1: 3000 },
						1: { 1: 2500 },
					},
					finalhp: {
						3: 750,
						2: 600,
						1: 500,
					}
				}
			},
			enemyRaid: {
				maxNum: { 3: 2, 2: 2, 1: 1 },
				chance: { 3: .15, 2: .15, 1: .15 },
				compName: 'AB',
				compDiff: {
					3: ['Hard 1','Hard 2','Hard 3'],
					2: ['Medium 1','Medium 2','Medium 3'],
					1: ['Easy 1','Easy 2'],
				},
				debuffGive: function(airState,totalHPLost) {
					if (CHDATA.event.maps[4].part > 1) {
						if (totalHPLost <= 0) CHDATA.event.maps[4].debuff.AB = 1 + (CHDATA.event.maps[4].debuff.AB || 0);
					}
				}
			},
			debuffCheck: function(debuff) {
				if (!debuff) return false;
				return !!debuff.Z3;
			},
			overrideStats: function() {
				return 	{
					1846: { AR: 180, HP: 500 },
					1847: { AR: 200, HP: 600 },
					1848: { AR: 230, HP: 750 },
					1849: { AR: 300, HP: 500 },
					1850: { AR: 340, HP: 600 },
					1851: { AR: 410, HP: 750 },
				}
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '4_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[4].part > 1;
					}
				},
				2: {
					images: [{ name: '4_2.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (!debuff) return false;
						let debuffK =  CHDATA.event.maps[4].diff == 1 ? true : debuff.K;
						let debuffAS = debuff.P && (CHDATA.event.maps[4].diff > 1 ? debuff.F && debuff.P : true) && (CHDATA.event.maps[4].diff == 3 ? debuff.S: true);
						let debuffAB = debuff.AB >= (CHDATA.event.maps[4].diff == 3 ? 2 : 1) || CHDATA.event.maps[4].diff == 1 || CHDATA.config.disableRaidReq;
						return debuffAS && debuffAB && debuffK;
					}
				},
				3: {
					images: [{ name: '4_3.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[4].part == 3;
					}
				}
			},
			additionalChecks: function(ships,errors) {
				if (!CHDATA.fleets.combined && !(CHDATA.event.maps[4].routes && (CHDATA.event.maps[4].routes.indexOf(2) > -1))) errors.push('You cannot sortie a single fleet/String Force at this time.');
				if (CHDATA.event.maps[4].diff == 1) return;
				let lock = null, allSame = true;
				let num = (CHDATA.fleets.combined)? 2 : 1;
				let allRed = true;
				let allBlue = true;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (CHDATA.ships[sid].lock != 10) { allBlue = false; }
							if (CHDATA.ships[sid].lock != 11) { allRed = false; }
							if (lock != CHDATA.ships[sid].lock) { allSame = false; }
						}
					}
				}
				if (!allSame) errors.push('No mixed locks.');
				if (!allRed && allBlue && CHDATA.fleets.combined) errors.push('You cannot sortie a combined fleet with the current locked ships.');
				if (allRed && !allBlue && !CHDATA.fleets.combined) errors.push('You cannot sortie a single fleet with the current locked ships.');
			},
			startCheck: function() {
				if (CHDATA.fleets.combined) {
					for (let n=1; n<=2; n++) { // give red lock
						for (let i=0; i<CHDATA.fleets[n].length; i++) {
							chGiveLock(n,i+1,11);
						}
					}
					return 'Start1';
				}
				for (let i=0; i<CHDATA.fleets[1].length; i++) { //give blue lock
					chGiveLock(1,i+1,10);
				}
				return 'Start2';
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 697,
					y: 100,
					route: 'A'
				},
				'Start2': {
					type: 0,
					x: 49,
					y: 47,
					route: 'X',
					hidden: 2
				},
				'A': {
					type: 3,
					x: 626,
					y: 79,
					routeC: function() {
						if (CHDATA.fleets.combined == 2) return 'B';
						return 'C';
					},
					distance: 2
				},
				'B': {
					type: 1,
					x: 547,
					y: 68,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'L',
					distance: 3
				},
				'C': {
					type: 1,
					x: 558,
					y: 118,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						if (ships.aBB + ships.aCV < 3) return 'D';
						return 'H';
					},
					distance: 4,
				},
				'D': {
					type: 1,
					x: 572,
					y: 184,
					distance: 4,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'F'
				},
				'E': {
					type: 3,
					x: 582,
					y: 246,
					distance: 6,
					end: true
				},
				'F': {
					type: 1,
					x: 500,
					y: 254,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					raid: true,
					distance: 6,
					routeC: function(ships) {
						if (ships.DD + ships.escort.DD <= 3) return 'E'	
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 30: 'I', 29.99: 'E' })
						return this.showLoSPlane;
					},
					debuffGive: function() {
						if (FLEETS1[0].AS == 2) CHDATA.event.maps[4].debuff.F = 1;
					},
				},
				'G': {
					type: 1,
					x: 498,
					y: 185,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'F'
				},
				'H': {
					type: 3,
					x: 443,
					y: 119,
					distance: 5,
					routeS: ['G', 'Z']
				},
				'I': {
					type: 1,
					x: 497,
					y: 329,
					distance: 7,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						if (ships.CLT + ships.escort.CLT > 0 || !checkFlagshipSurfaceRadar()) return 'J'	
						return 'K'
					}
				},
				'J': {
					type: 4,
					x: 445,
					y: 298,
					distance: 7,
					resource: 1,
					loseMax: .15,
					route: 'K'
				},
				'K': {
					type: 1,
					x: 425,
					y: 361,
					distance: 8,
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
					end: true,
					boss: true,
					debuffGive: function() {
						if (CHDATA.event.maps[4].part > 1 && (CHDATA.event.maps[4].diff == 3 ? ['S'] : ['A','S']).includes(CHDATA.temp.rank)) CHDATA.event.maps[4].debuff.K = 1;
					},
					friendFleet: ['desdiv31','yuugumo1','gambier','shinyo'],
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
						for (let ship of ships) {
							if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:2}];
							}
							if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.8}];
							}
							if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.5}];
							}
							if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.15}];
							}
						}
					}
				},
				'L': {
					type: 3,
					x: 462,
					y: 54,
					distance: 4,
					routeS: ['M','H']
				},
				'M': {
					type: 1,
					x: 358,
					y: 53,
					distance: 5,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function() {
						this.showNoCompass = true;
						if (CHDATA.event.maps[4].part == 1) return 'M*';
						return 'N';
					}
				},
				'M*': {
					type: 3,
					x: 358,
					y: 53,
					end: true,
					hidden: 4
				},
				'N': {
					type: 1,
					x: 294,
					y: 98,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					routeC: function() {
						if (checkFlagshipSurfaceRadar()) return 'P';
						return 'O';
					}
				},
				'O': {
					type: 1,
					x: 212,
					distance: 7,
					y: 71,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					routeC: function(ships) {
						if (!checkFlagshipSurfaceRadar() || CHDATA.fleets.combined || (ships.CA + ships.CAV < 1)) return 'R';
						return 'P';
					}
				},
				'P': {
					type: 1,
					x: 232,
					y: 150,
					distance: 7,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'Q',
					raid: true,
					debuffGive: function() {
						if (FLEETS1[0].AS >= (CHDATA.event.maps[4].diff == 1 ? 1 : 2)) CHDATA.event.maps[4].debuff.P = 1;
					},
				},
				'Q': {
					type: 3,
					x: 202,
					y: 209,
					hidden: 1,
					distance: 8,
					routeS: ['S', 'Z4']
				},
				'R': {
					type: 1,
					x: 154,
					y: 127,
					distance: 8,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'S'
				},
				'S': {
					type: 1,
					x: 136,
					y: 221,
					distance: 9,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					raid: true,
					route: 'T',
					debuffGive: function() {
						if (FLEETS1[0].AS == 2) CHDATA.event.maps[4].debuff.S = 1;
					},
				},
				'T': {
					type: 1,
					x: 174,
					y: 286,
					distance: 10,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					routeL: { 28: 'V', 27.99: 'U' }
				},
				'U': {
					type: 3,
					x: 100,
					y: 311,
					distance: 11,
					hidden: 1,
					end: true
				},
				'V': {
					type: 1,
					x: 171,
					y: 358,
					distance: 11,
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
					hidden: 1,
					end: true,
					boss: true,
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						for (let ship of ships) {
							if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:2}];
							}
							if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.8}];
							}
							if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.5}];
							}
							if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.15}];
							}
						}
					}
				},
				'X': {
					type: 1,
					x: 143,
					y: 34,
					distance: 8,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					hidden: 2,
					subonly: true,
					routeC: function(ships) {
						if (ships.DD > 1 && (ships.aBB + ships.aCV < 4)) return 'O';
						return 'W';
					}
				},					
				'W': {
					type: 3,
					x: 222,
					y: 23,
					distance: 7,
					hidden: 2,
					end: true
				},
				'Y': {
					type: 1,
					x: 415,
					y: 187,
					distance: 6,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 3,
					route: 'Z1'
				},
				'Z': {
					type: 1,
					x: 374,
					y: 133,
					distance: 6,
					subonly: true,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 3,
					routeC: function(ships) {
						if (ships.CA + ships.CAV < 1 && (ships.aCV + ships.escort.aCV > 2) && checkFlagshipSurfaceRadar()) return 'Y';
						return 'Z4';
					}
				},
				'Z1': {
					type: 1,
					x: 370,
					y: 280,
					distance: 8,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					hidden: 3,
					routeL: { 30: 'Z3', 29.99: 'Z2' }
				},
				'Z2': {
					type: 3,
					x: 350,
					y: 223,
					hidden: 3,
					distance: 7,
					end: true
				},
				'Z3': {
					type: 1,
					x: 303,
					y: 333,
					distance: 9,
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
					hidden: 3,
					end: true,
					boss: true,
					debuffGive: function() {
						if (!CHDATA.fleets.combined && ['A','S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[4].debuff.Z3 = 1;
					},
					debuffAmount: 120,
					friendFleet: ['shinyo','tengo','shiratsuyu','euro','yuugumo2'],
					setupSpecial: function() {
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);
						for (let ship of ships) {
							if (MAPDATA[42].historical.miyauchi_2.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:2}];
							}
							if (MAPDATA[42].historical.miyauchi_18.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.8}];
							}
							if (MAPDATA[42].historical.miyauchi_15.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.5}];
							}
							if (MAPDATA[42].historical.miyauchi_115.indexOf(getBaseId(ship.mid)) != -1) {
								ship.bonusSpecial = [{mod:1.15}];
							}
						}
					}
				},
				'Z4': {
					type: 1,
					x: 296,
					y: 183,
					distance: 7,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 3,
					route: 'Z5'
				},
				'Z5': {
					type: 1,
					x: 269,
					y: 267,
					distance: 8,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 1', 'Hard 1', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2', 'Hard 2'],
						2: ['Medium 1', 'Medium 2', 'Medium 1', 'Medium 1', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2', 'Medium 2'],
						1: ['Easy 1', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2', 'Easy 2'],
					},
					hidden: 3,
					routeL: { 30: 'Z3', 29.99: 'Z2' }
				},
			}
		},
		5: {
			name: 'E-5',
			nameT: 'Suzukake Retaliation Operation',
			fleetTypes: [0,7],
			bgmMap: 112,
			bgmDN: 111,
			bgmNN: 111,
			bgmDB: 50,
			bgmNB: 50,
			bossnode: [12,17],
			checkLock: [9, 10, 11],
			giveLock: 12,
			parts: {
				1: {
					currentBoss: 'L',
					transport: 'J',
					maphp: {
						3: { 1: 800 },
						2: { 1: 700 },
						1: { 1: 500 },
					},
					finalhp: null
				},
				2: {
					currentBoss: 'Q',
					transport: null,
					maphp: {
						3: { 1: 950 },
						2: { 1: 950 },
						1: { 1: 950 },
					},
					finalhp: {
						3: 195,
						2: 190,
						1: 155,
					}
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '5_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[5].part == 2;
					}
				},
			},
			additionalCheck: function(ships,errors) {
				if (ships.CV + ships.CVL + ships.CVB) errors.push('No CV(L/B)');
			},
			nodes: {
				'Start': {
					type: 0,
					x: 321,
					y: 29,
					route: 'B'
				},
				'A': {
					type: 3,
					x: 188,
					y: 91,
					end: true
				},
				'B': {
					type: 1,
					x: 289,
					y: 90,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: function(ships) {
						if (ships.CA > 2 || ships.DD < 3) return 'A';
						return 'C';
					},
					subonly: true
				},
				'C': {
					type: 3,
					x: 351,
					y: 119,
					routeS: ['D', 'F']
				},
				'D': {
					type: 1,
					x: 353,
					y: 171,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: function(ships) {
						if (ships.DD > 4 || ships.AV < 0) return 'G';
						if (CHDATA.event.maps[5].part == 2 && ships.ids.length == 7 && ships.DD > 3) return 'I';
						return 'E';
					}
				},
				'E': {
					type: 1,
					x: 394,
					y: 228,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
						1: ['Easy 1', 'Easy 2'],
					},
					route: 'I'
				},
				'F': {
					type: 1,
					x: 432,
					y: 119,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					route: 'G',
					night2: true,
					overrideCost: { fuel: .04, ammo: .08 },
				},
				'G': {
					type: 1,
					x: 440,
					y: 171,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					route: 'J'
				},
				'H': {
					type: 3,
					x: 476,
					y: 57,
					end: true
				},
				'I': {
					type: 3,
					x: 480,
					y: 227,
					routeS: ['J', 'M']
				},
				'J': {
					type: 2,
					x: 522,
					y: 171,
					resource: 0,
					route: 'K',
				},
				'K': {
					type: 1,
					x: 533,
					y: 91,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: function(ships) {
						if (ships.SS >= 4) return 'H';
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 10: 'L', 9.99: 'H' })
						return this.showLoSPlane;
					}
				},
				'L': {
					type: 1,
					x: 605,
					y: 123,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					end: true,
					boss: true,
					setupSpecial: function() {
						const bonusList = {
							'[97]': 1.2,
							'[95,96,98,48.49,63,65,54,138,140,527]': 1.1,
						};
						applyBonusToShips(bonusList);
						FLEETS2[0].ships[0].HP = 250;
						FLEETS2[0].ships[0].maxHP = 250;
					}
				},
				'M': {
					type: 3,
					x: 579,
					y: 248,
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[5].part == 1) return 'M*'
						return 'O';
					}
				},
				'M*': {
					type: 3,
					x: 579,
					y: 248,
					hidden: 2,
					end: true
				},
				'N': {
					type: 1,
					x: 536,
					y: 351,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'P',
					raid: true,
					hidden: 1,
				},
				'O': {
					type: 1,
					x: 551,
					y: 315,
					hidden: 1,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						return ships.speed < 10 ? 'N' : 'P';
					}
				},
				'P': {
					type: 1,
					x: 610,
					y: 356,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL: { 15: 'Q', 14.99: 'R'},
					raid: true
				},
				'Q': {
					type: 1,
					x: 636,
					y: 305,
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
					end: true, 
					boss: true,
					hidden: 1,
					setupSpecial: function() {
						const bonusList = {
							'[97]': 1.2,
							'[95,96,98,48.49,63,65,54,138,140,527]': 1.1,
						};
						applyBonusToShips(bonusList);
					}
				},
				'R': {
					type: 3,
					x: 674,
					y: 337,
					end: true,
					hidden: 1,
				},
			}
		},
		6: {
			name: 'E-6',
			nameT: 'Sortie! Miyauchi 2nd Fleet',
			fleetTypes: [0,1,2,7],
			bgmMap: 112,
			bgmDN: 111,
			bgmNN: 111,
			bgmDB: 82,
			bgmNB: 82,
			bossnode: [5,22],
			checkLock: [9, 10, 11],
			giveLock: 12,
			parts: {
				1: {
					currentBoss: 'E',
					maphp: {
						3: { 1: 1160 },
						2: { 1: 1160 },
						1: { 1: 1160 },
					},
					finalhp: {
						3: 330,
						2: 290,
						1: 230,
					}
				},
				2: {
					currentBoss: 'V',
					maphp: {
						3: { 1: 1950 },
						2: { 1: 1950 },
						1: { 1: 1950 },
					},
					finalhp: {
						3: 390,
						2: 380,
						1: 370,
					}
				},
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '6_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[6].part == 2;
					}
				},
			},
			nodes: {
				'Start': {
					type: 0,
					x: 234,
					y: 149,
					route: 'A'
				},
				'A': {
					type: 3,
					x: 234,
					y: 222,
					routeS: ['B', 'C']
				},
				'B': {
					type: 1,
					x: 275,
					y: 294,
					overrideCost: { fuel: .04, ammo: .08 },
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[6].part == 1) return 'B*';
						this.showNoCompass = false;
						return (ships.SS > 2 || ships.aBB > 3) ? 'L' :
							(ships.aBB > 1 || ships.CA > 2) ? 'N' : 'M';
					}
				},
				'B*': {
					type: 3,
					hidden: 2,
					x: 275,
					y: 294,
					end: true
				},
				'C': {
					type: 1,
					x: 304,
					y: 222,
					subonly: true,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1'],
					},
					routeC: s => (s.aBB < 1 && s.DD > 2 && s.speed >= 10) ? 'D' : 'F'
				},
				'D': {
					type: 1,
					x: 336,
					y: 153,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: s => (s.DD > 3 || s.CA < 2) ? 'G' : 'I'
				},
				'E': {
					type: 1,
					x: 370,
					y: 35,
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
					end: true,
					boss: true,
					setupSpecial: function() {
						const bonusList = {
							'[122,415]': 1.4,
							'[95,96,98,97,48.49,63,138,140,527,133,453]': 1.1,
						};
						applyBonusToShips(bonusList);
					}
				},
				'F': {
					type: 1,
					x: 394,
					y: 222,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: s => (s.aBB > 1 || s.CA > 2) ? 'K' : 'I'
				},
				'G': {
					type: 1,
					x: 413,
					y: 113,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'H',
					night2: true
				},
				'H': {
					type: 1,
					x: 451,
					y: 58,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL: { 12: 'E', 11.99: 'J'}
				},
				'I': {
					type: 1,
					x: 451,
					y: 173,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'H'
				},
				'J': {
					type: 3,
					x: 511,
					y: 112,
					end: true
				},
				'K': {
					type: 1,
					x: 512,
					y: 222,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1'],
					},
					route: 'I'
				},
				'L': {
					type: 3,
					x: 206,
					y: 299,
					hidden: 1,
					end: true						
				},
				'M': {
					type: 1,
					x: 336,
					y: 273,
					hidden: 1,
					route: 'O',
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
				},
				'N': {
					type: 1,
					x: 336,
					y: 355,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'O'
				},
				'O': {
					type: 1,
					x: 405,
					y: 314,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'Q',
					raid: true
				},
				'P': {
					type: 1,
					x: 483,
					y: 261,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					route: 'R'
				},
				'Q': {
					type: 3,
					x: 490,
					y: 314,
					hidden: 1,
					routeC: s => s.aBB > 2 ? 'P' : 
						(s.speed < 10 || s.DD < 2 || s.CL < 1) ? 'R' : 'S'
				},
				'R': {
					type: 1,
					x: 569,
					y: 264,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'T'
				},
				'S': {
					type: 1,
					x: 569,
					y: 346,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'T',
					setupSpecial: function() {
						for (let ship of FLEETS2[0].ships) {
							if (ship.mid == 185) {
								ship.AR = 280;
							}
						}
					}
				},
				'T': {
					type: 1,
					x: 656,
					y: 309,
					hidden: 1,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeL:  {17: 'V', 16.99: 'U'}
				},
				'U': {
					type: 3,
					x: 674,
					y: 250,
					hidden: 1,
					end: true,						
				},
				'V': {
					type: 1,
					x: 727,
					y: 313,
					hidden: 1,
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
					end: true,
					boss: true,
					friendFleet: ['taffy','arashi','av','sara','dd'],
					setupSpecial: function() {
						const bonusList = {
							'[122,415]': 1.4,
							'[95,96,98,97,48.49,63,138,140,527,133,453]': 1.1,
						};
						applyBonusToShips(bonusList);
					}
				},
			}
		},
		7: {
			name: 'E-7',
			nameT: 'Final Showdown, Battle of Ishijima Coast',
			fleetTypes: [0,1,2,7],
			bgmMap: 2136,
			bgmDN: 89,
			bgmNN: 89,
			bgmDB: 115,
			bgmNB: 41,
			bossnode: [20,'Z5','ZZ8'],
			checkLock: [9],
			lockSpecial: true,
			lbas: 3,
			lbasSortie: 3,
			parts: {
				1: {
					currentBoss: 'T',
					maphp: {
						3: { 1: 3200 },
						2: { 1: 3200 },
						1: { 1: 3200 },
					},
					finalhp: {
						3: 800,
						2: 700,
						1: 600,
					}
				},
				2: {
					currentBoss: 'Z5',
					maphp: {
						3: { 1: 4000 },
						2: { 1: 4000 },
						1: { 1: 4000 },
					},
					finalhp: {
						3: 800,
						2: 800,
						1: 800,
					}
				},
				3: {
					currentBoss: 'ZZ8',
					maphp: {
						3: { 1: 4500 },
						2: { 1: 4500 },
						1: { 1: 4500 },
					},
					finalhp: {
						3: 800,
						2: 800,
						1: 800,
					}
				}
			},
			enemyRaid: {
				maxNum: { 3: 2, 2: 2, 1: 1 },
				chance: { 3: .35, 2: .20, 1: .15 },
				compName: 'AB',
				compDiff: {
					3: ['Hard 1','Hard 2','Hard 3', 'Hard 4', 'Hard 5'],
					2: ['Medium 1','Medium 2','Medium 3'],
					1: ['Easy 1','Easy 2', 'Easy 3'],
				},
				debuffGive: function(airState,totalHPLost) {
					if (CHDATA.event.maps[7].part == 3 && CHDATA.event.maps[7].debuff) {
						if (totalHPLost <= 0) CHDATA.event.maps[7].debuff.AB = 1 + (CHDATA.event.maps[7].debuff.AB || 0);
					}
				}
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '7_1.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[7].part >= 2;
					}
				},
				2: {
					images: [{ name: '7_2.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[7].debuff && CHDATA.event.maps[7].debuff.A;
					}
				},
				3: {
					images: [{ name: '7_3.png', x: 0, y: 0 }],
					unlock: function() {
						const debuff = CHDATA.event.maps[7].debuff;
						if (CHDATA.event.maps[7].part == 1 || !debuff) return false;
						if (CHDATA.event.maps[7].diff == 3 && debuff.Z2 && debuff.Z1 && debuff.Z5 && debuff.T) return true;
						if (CHDATA.event.maps[7].diff == 2 && debuff.Z2 && debuff.Z1 && debuff.T) return true;
						if (CHDATA.event.maps[7].diff == 1 && debuff.T) return true;
						return false;
					}
				},
				4: {
					images: [{ name: '7_4.png', x: 0, y: 0 }],
					unlock: function() {
						return CHDATA.event.maps[7].part == 3;
					}
				},
				5: {
					images: [{ name: '7_5.png', x: 0, y: 0 }],
					unlock: function() {
						const debuff = CHDATA.event.maps[7].debuff;
						if (CHDATA.event.maps[7].part < 3 || !debuff) return false;
						const ASreq = {
							1: 0,
							2: 1,
							3: 2
						}[CHDATA.event.maps[7].diff];
						const debuffAS = (debuff.AB >= ASreq) || CHDATA.config.disableRaidReq;
						if (CHDATA.event.maps[7].diff == 3 && debuff.ZZ7 && debuff.ZZZ4 && debuff.ZZ3 && debuff.Z7 && debuffAS) return true;
						if (CHDATA.event.maps[7].diff == 2 && debuff.ZZ7 && debuff.ZZ3 && debuffAS) return true;
						if (CHDATA.event.maps[7].diff == 1 && debuff.ZZ3) return true;
						return false;
					}
				},
			},
			debuffCheck: d => d && (!!d.T_2 + !!d.ZZ7_2 + !!d.Z5_2 + !!d.S + !!d.ZZ8 >= 3),
			additionalChecks: function(ships,errors) {
				let lock = null, allSame = true;
				let num = (CHDATA.fleets.combined)? 2 : 1;
				let allRed = true;
				let allBlue = true;
				let allGreen = true;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (CHDATA.ships[sid].lock != 10) { allBlue = false; }
							if (CHDATA.ships[sid].lock != 11) { allRed = false; }
							if (CHDATA.ships[sid].lock != 12) { allGreen = false; }
							if (lock != CHDATA.ships[sid].lock) { allSame = false; }
						}
					}
				}
				if (CHDATA.event.maps[7].diff == 1) return;
				if (!allSame) errors.push('No mixed locks.');
				const isCombined = CHDATA.fleets.combined;
				if (allRed && !allGreen && !isCombined) errors.push('You cannot sortie a single fleet/Striking Force with this fleet.')
				if (allGreen && !allRed && isCombined) errors.push('You cannot sortie a combined fleet with this fleet.')
				if (allBlue && !allRed && !allGreen && !isCombined) errors.push('You cannot sortie a single fleet/Striking Force with this fleet.');
				if (allBlue && !allRed && !allGreen && CHDATA.fleets.combined == 1) errors.push('You cannot sortie a Carrier Task Force with this fleet.')

			},
			startCheck: function() {
				let lock = null, allSame = true;
				let num = (CHDATA.fleets.combined)? 2 : 1;
				let allRed = true;
				let allBlue = true;
				let allGreen = true;
				for (let n=1; n<=num; n++) {
					for (let sid of CHDATA.fleets[n]) {
						if (sid && CHDATA.ships[sid].lock) {
							if (!lock) lock = CHDATA.ships[sid].lock;
							if (CHDATA.ships[sid].lock != 10) { allBlue = false; }
							if (CHDATA.ships[sid].lock != 11) { allRed = false; }
							if (CHDATA.ships[sid].lock != 12) { allGreen = false; }
							if (lock != CHDATA.ships[sid].lock) { allSame = false; }
						}
					}
				}
				const isCombined = CHDATA.fleets.combined;
				if (isCombined && (allRed || (!allSame && CHDATA.event.maps[7].diff == 1))) {
					for (let n=1; n<=2; n++) { // give red lock
						for (let i=0; i<CHDATA.fleets[n].length; i++) {
							chGiveLock(n,i+1,11);
						}
					}
					return 'Start1';
				}
				if (!isCombined && (allGreen || (!allSame && CHDATA.event.maps[7].diff == 1))) {
					for (let i=0; i<CHDATA.fleets[1].length; i++) { //give green lock
						chGiveLock(1,i+1,12);
					}
					return 'Start2';
				}
				if (isCombined && allBlue && CHDATA.event.maps[7].routes && CHDATA.event.maps[7].routes.includes(3)) {
					for (let n=1; n<=2; n++) { // give blue lock
						for (let i=0; i<CHDATA.fleets[n].length; i++) {
							chGiveLock(n,i+1,10);
						}
					}
					return 'Start3';
				}
				if (isCombined) {
					for (let n=1; n<=2; n++) { // give red lock
						for (let i=0; i<CHDATA.fleets[n].length; i++) {
							chGiveLock(n,i+1,11);
						}
					}
					return 'Start1';
				}
				else {
					for (let i=0; i<CHDATA.fleets[1].length; i++) { //give green lock
						chGiveLock(1,i+1,12);
					}
					return 'Start2';
				}
			},
			nodes: {
				'Start1': {
					type: 0,
					x: 687,
					y: 43,
					route: 'H'
				},
				'Start2': {
					type: 0,
					x: 667,
					y: 217,
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[7].routes && CHDATA.event.maps[7].routes.includes(2)) {
							this.showNoCompass = false;
							return (ships.BBV > 1 && ships.CA > 1 && ships.ids.length == 7 && checkFlagshipSurfaceRadar()) ? 'P*': 'B';
						}
						return 'B';
					}
				},
				'Start3': {
					type: 0,
					x: 40,
					y: 166,
					routeC: s => (s.speed == 5 || !checkFlagshipSurfaceRadar()) ? 'Z8' : 'Z9'
				},
				'A': {
					type: 1,
					x: 717,
					y: 378,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					end: true,
					setupSpecial: function() {							
						const bonusList = {
							'[97]': 2,
							'[96]': 1.8,
							'[98]': 1.5,
							'[49]': 1.4,
						};
						applyBonusToShips(bonusList);
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.7}];
						}							
					},
					distance: 16,
					debuffGive: function() {
						if (CHDATA.event.maps[7].part > 1 && (CHDATA.event.maps[7].diff == 1 ? 
							['A', 'S'] : ['S']).includes(CHDATA.temp.rank)) {
								CHDATA.event.maps[7].debuff.A = true;
						} 
					}						
				},						
				'B': {
					type: 1,
					x: 697,
					y: 265,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					routeC: s => (s.DD < 3 || s.aBB > 1) ? 'C' : 'F',
					distance: 99,
					subonly: true,
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.5}];
						}
					}
				},
				'C': {
					type: 1,
					x: 687,
					y: 310,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'F',
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.5}];
						}
					}
				},
				'E': {
					type: 1,
					x: 670,
					y: 378,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					route: 'A',
					distance: 15,
					raid: true,
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.7}];
						}
					}
				},
				'F': {
					type: 1,
					x: 647,
					y: 285,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[7].routes && CHDATA.event.maps[7].routes.includes(1)) {
							this.showNoCompass = false;
							return (ships.BBV > 1 && ships.ids.length == 7 && checkFlagshipSurfaceRadar()) ? 'P*': 'K';
						}
						return 'K';
					},
					distance: 13,
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.5}];
						}
					}
				},
				'G': {
					type: 1,
					x: 646,
					y: 339,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 15,
					route: 'E',
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.7}];
						}
					}
				},
				'H': {
					type: 1,
					x: 601,
					y: 58,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
					},
					overrideCost: { fuel: .04, ammo: .04 },
					distance: 99,
					routeC: s => s.aCV < 1 ? 'L' : 'M'
				},
				'I': {
					type: 1,
					x: 602,
					y: 187,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1','Easy 2'],
					},
					distance: 99,
					showNoCompass: true,
					routeC: () => CHDATA.event.maps[7].part >= 2 ? 'P*' : 'P',
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.5}];
						}
					}
				},
				'J': {
					type: 1,
					x: 596,
					y: 115,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					routeC: () => CHDATA.fleets.combined == 1 ? 'N' : 'I',
					distance: 99,
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.5}];
						}
					}
				},
				'K': {
					type: 3,
					x: 587,
					y: 293,
					routeS: ['Q', 'G'],
					distance: 13
				},
				'L': {
					type: 3,
					x: 537,
					y: 21,
					end: true,
					distance: 99
				},
				'M': {
					type: 3,
					x: 527,
					y: 83,
					routeS: ['J', 'N', 'V', 'ZZ4'],
					distance: 99
				},
				'N': {
					type: 1,
					x: 520,
					y: 131,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
					},
					distance: 99,
					route: 'O',
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.7}];
						}
					}
				},
				'O': {
					type: 1,
					x: 528,
					y: 179,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
					},
					routeC: () => CHDATA.fleets.combined == 1 ? (CHDATA.event.maps[7].part >= 2 ? 'P*' : 'P') : 'I',
					distance: 99,
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.8}];
						}
					}
				},
				'P': {
					type: 3,
					x: 550,
					y: 223,
					route: 'K',
					distance: 99
				},
				'P*': {
					type: 3,
					x: 550,
					y: 223,
					routeS: ['K', 'U'],
					distance: 99,
					hidden: 1,
				},
				'Q': {
					type: 1,
					x: 540,
					y: 320,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 12,
					routeC: s => (s.aBB > 4 || s.aCV > 3 || s.AV) ? 'S' : checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 25: 'T', 24.99: 'R' })
				},
				'R': {
					type: 3,
					x: 509,
					y: 362,
					distance: 12,
					end: true
				},
				'S': {
					type: 1,
					x: 463,
					y: 276,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 11,
					end: true,
					debuffGive: function() {
						if (CHDATA.event.maps[7].part == 3 && 'S' == CHDATA.temp.rank) CHDATA.event.maps[7].debuff.S = true;
					},
					setupSpecial: function() {							
						const bonusList = {
							'[97]': 2,
							'[96]': 1.8,
							'[98]': 1.5,
							'[49]': 1.4,
						};
						applyBonusToShips(bonusList);							
					},
				},
				'T': {
					type: 1,
					x: 458,
					y: 327,
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
					end: true,
					distance: 11,
					boss: true,
					friendFleet: ['tengo2','miyauchi','kasumi','shigure','amatsu'],
					setupSpecial: function() {
						if (CHDATA.event.maps[7].part == 1 && CHDATA.event.maps[7].hp <= MAPDATA[42].maps[7].finalhp[CHDATA.event.maps[7].diff]) {
							FLEETS2[0].ships[0].AR = {
								3: 230,
								2: 200,
								1: 188,
							}[CHDATA.event.maps[7].diff];
						}
						const bonusList = {
							'[332]': 2,
							'[184]': 1.8,
							'[25,35,42]': 1.3,
							'[458,410,135,532]': 1.2,
							'[80,143,26,27,110,111,124,125,68,69,54,114,137,140,459,43,44,49,95,97,485]': 1.2,								
						};
						applyBonusToShips(bonusList);	
					},					
					debuffGive: function() {
						if (CHDATA.event.maps[7].part > 1 && CHDATA.temp.rank == 'S') CHDATA.event.maps[7].debuff.T = true;
						if (CHDATA.event.maps[7].part == 3 && ['A','S'].includes(CHDATA.temp.rank) && FLEETS1[0].ships.length == 7) CHDATA.event.maps[7].debuff.T_2 = true;  
					}
				},
				'U': {
					type: 1,
					x: 487,
					y: 221,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 11,
					showNoCompass: true,
					routeC: () => CHDATA.event.maps[7].part == 3 ? 'W*' : 'W',
					hidden: 1
				},
				'V': {
					type: 1,
					x: 455,
					y: 74,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					hidden: 1,
					routeC: s => (s.escort.DD > 3 && (s.aBB + s.aCV + s.escort.aBB + s.escort.aCV) < 5 
						&& s.speed >= 10 && s.escort.speed >= 10)  ? 'X' : 'Y',
					distance: 9
				},
				'W': {
					type: 3,
					x: 427,
					y: 176,
					route: 'Y',
					distance: 10,
					hidden: 1,
				},
				'W*': {
					type: 3,
					x: 427,
					y: 176,
					routeS: ['Y', 'ZZ6'],
					distance: 10,
					hidden: 4
				},
				'X': {
					type: 1,
					x: 373,
					y: 71,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					hidden: 1,
					distance: 8,
					routeC: s => (s.ids.length == 7 && s.AS) ? 'Z1' : 'Z'
				},
				'Y': {
					type: 1,
					x: 363,
					y: 133,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					routeC: s => (s.ids.length == 7 && checkFlagshipSurfaceRadar()) ? 'Z2' : 'X',
					distance: 8,
					hidden : 1
				},
				'Z': {
					type: 1,
					x: 306,
					y: 35,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 7,
					hidden: 1,
					route: 'Z1'
				},
				'Z1': {
					type: 1,
					x: 297,
					y: 97,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 7,
					hidden: 1,
					raid: true,
					route: 'Z3',
					debuffGive: function() {
						if (CHDATA.event.maps[7].diff == 3 && FLEETS1[0].AS >= 1) CHDATA.event.maps[7].debuff.Z1 = true;
						if (CHDATA.event.maps[7].diff == 2) CHDATA.event.maps[7].debuff.Z1 = true;
					}
				},
				'Z2': {
					type: 1,
					x: 295,
					y: 170,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					end: true,
					distance: 7,
					hidden: 1,
					debuffGive: function() {
						if((CHDATA.event.maps[7].diff == 2 ? ['A', 'S'] : ['S']).includes(CHDATA.temp.rank)) CHDATA.event.maps[7].debuff.Z2 = true;
					},
					setupSpecial: function() {							
						const bonusList = {
							'[97]': 2,
							'[96]': 1.8,
							'[98]': 1.5,
							'[49]': 1.4,
						};
						applyBonusToShips(bonusList);							
					},
				},
				'Z3': {
					type: 1,
					x: 230,
					y: 110,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
					},
					distance: 5,
					hidden: 1,
					routeC: function(ships) {
						this.showLoSPlane = null;
						if (ships.aCV > 2) return 'Z4';
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 36: 'Z5', 35.99: 'Z4' });
						return this.showLoSPlane;
					}
				},
				'Z4': {
					type: 3,
					x: 228,
					y: 49,
					end: true,
					distance: 5,
					hidden: 1,
					
				},
				'Z5': {
					type: 1,
					x: 227,
					y: 167,
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
					friendFleet: ["yuugumos2",'muragumo','smolyuro','kimura','random'],
					setupSpecial: function() {
						const isLD = CHDATA.event.maps[7].part == 2 && CHDATA.event.maps[7].hp <= MAPDATA[42].maps[7].finalhp[CHDATA.event.maps[7].diff];
						const kitanda = FLEETS2[0].ships[0];
						kitanda.HP = 800;
						kitanda.maxHP = 800;
						kitanda.AR = {
							3: isLD ? 283 : 230,
							2: isLD ? 245 : 219,
							1: isLD ? 215 : 194
						}[CHDATA.event.maps[7].diff];
						const bonusList = {
							'[332]': 2,
							'[184]': 1.8,
							'[25,35,42]': 1.3,
							'[458,410,135,532]': 1.2,
							'[80,143,26,27,110,111,124,125,68,69,54,114,137,140,459,43,44,49,95,97,485]': 1.2,								
						};
						applyBonusToShips(bonusList);
					},
					debuffGive: function() { 
						CHDATA.event.maps[7].debuff.Z5 = true;
						let num = (CHDATA.fleets.combined)? 2 : 1;
						let lock = null;
						let allBlue = true, allSame = true;
						for (let n = 1; n <= num; n++) {
							for (let sid of CHDATA.fleets[n]) {
								if (sid && CHDATA.ships[sid].lock) {
									if (!lock) lock = CHDATA.ships[sid].lock;
									if (CHDATA.ships[sid].lock != 10) { allBlue = false; }
									if (lock != CHDATA.ships[sid].lock) { allSame = false; }								
								}
							}
						}
						if (CHDATA.fleets.combined && (!allBlue || !allSame) && ['A', 'S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[7].debuff.Z5_2 = true;
					},
					distance: 6,
					hidden: 1,
					end: true,
					boss: true
				},
				'Z6': {
					type: 1,
					x: 204,
					y: 209,
					compDiff: {
						3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1'],
					},
					distance: 5,
					hidden: 3,
					route: 'Z5'
				},
				'Z7': {
					type: 1,
					x: 156,
					y: 244,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 4,
					hidden: 3,
					route: 'Z6',
					raid: true,
					debuffGive: function() {
						if(FLEETS1[0].AS >= 1) CHDATA.event.maps[7].debuff.Z7 = true;
					}
				},
				'Z8': {
					type: 1,
					x: 111,
					y: 154,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 3,
					hidden: 3,
					route: 'Z9'
				},
				'Z9': {
					type: 1,
					x: 80,
					y: 213,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 3,
					hidden: 3,
					route: 'ZZ1'
				},
				'ZZ1': {
					type: 3,
					x: 112,
					y: 276,
					distance: 4,
					hidden: 3,
					routeS: ['Z7', 'ZZ2', 'ZZZ4']
				},
				'ZZ2': {
					type: 1,
					x: 50,
					y: 271,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 3,
					hidden: 3,
					route: 'ZZ3',
					subonly: true,
				},
				'ZZ3': {
					type: 1,
					x: 51,
					y: 337,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 4,
					hidden: 3,
					end: true,
					friendFleet: ['zkk'],
					debuffGive: function() {
						if (['A', 'S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[7].debuff.ZZ3 = true;
					}
				},
				'ZZ4': {
					type: 1,
					x: 477,
					y: 125,
					compDiff: {
						3: ['Hard 1', 'Hard 2'],
						2: ['Medium 1','Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					distance: 11,
					hidden: 4,
					route: 'W*',
					subonly: true
				},
				'ZZ5': {
					type: 1,
					x: 399,
					y: 267,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 9,
					hidden: 4,
					route: 'ZZ7'
				},
				'ZZ6': {
					type: 1,
					x: 376,
					y: 213,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 8,
					hidden: 4,
					routeC: function(ships) {
						let ss = 0;
						const idList = ships.ids.concat(ships.escort ? ships.escort.ids : []);
						for (let key in idList) {
							const ship = SHIPDATA[idList[key]] || {};
							if (ship.SPD === 5) ss++;
						}
						return ss > 3 ? 'ZZ5' : 'ZZ7';
					}
				},
				'ZZ7': {
					type: 1,
					x: 329,
					y: 263,
					compDiff: {
						3: ['Hard 1'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 7,
					hidden: 4,
					raid: true,
					debuffGive: function() {
						if(FLEETS1[0].AS >= 1) CHDATA.event.maps[7].debuff.ZZ7 = true;
						if (FLEETS1[0].ships.length == 7) CHDATA.event.maps[7].debuff.ZZ7_2 = true;
					},
					routeC: function(ships) {
						this.showNoCompass = true;
						if (CHDATA.event.maps[7].routes && CHDATA.event.maps[7].routes.includes(5)) {
							this.showNoCompass = false;
							let ss = 0;
							const idList = ships.ids.concat(ships.escort ? ships.escort.ids : []);
							for (let key in idList) {
								const ship = SHIPDATA[idList[key]] || {};
								if (ship.SPD === 5) ss++;
							}
							if (ss < 5 && (CHDATA.fleets.combined == 1 ? ships.aBB + ships.escort.aBB < 3 : true) && (CHDATA.fleets.combined == 2 
								? ships.aCV < 2 : true)) return 'ZZ9'
						}
						return 'ZZZ1';
					},
					setupSpecial: function(){
						let ships = FLEETS1[0].ships.concat((FLEETS1[1] || {}).ships || []);
						ships = ships.concat(FLEETS2[0].ships).concat((FLEETS2[1] || {}).ships || []);
						for (let ship of ships) {
							if (['CV','CVL','CVB'].includes(SHIPDATA[ship.mid].type)) ship.bonusSpecial = [{mod:0.6}];
						}
					}
				},
				'ZZ8': {
					type: 1,
					x: 364,
					y: 345,
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
					distance: 9,
					hidden: 4,
					boss: true,
					end: true,
					debuffAmount: 90,
					friendFleet: ["leyte1", "leyte2", "nishimra", "tengo3", "italian", "euro", "allies", "american", "british", "dd32su", "aganos", "kagerous", "yuugumos", "53level", "asashios", "nakama"],
					setupSpecial: function() {
						const isLD = CHDATA.event.maps[7].hp > 0 && CHDATA.event.maps[7].hp <= MAPDATA[42].maps[7].finalhp[CHDATA.event.maps[7].diff];
						const nsh = FLEETS2[0].ships[0];
						const difficulty = CHDATA.event.maps[7].diff;
						nsh.AR = {
							3: isLD ? 405 : 260,
							2: isLD ? 350 : 220,
							1: isLD ? 320 : 190
						}[difficulty];
						if (isLD && difficulty == 3) {
							FLEETS2[0].ships[1].HP = 600;
							FLEETS2[0].ships[1].maxHP = 600;
							FLEETS2[1].ships[1].HP = 150;
							FLEETS2[1].ships[1].maxHP = 150;
						}
						const debuffed = MAPDATA[42].maps[7].debuffCheck(CHDATA.event.maps[7].debuff);
						const bonusList = debuffed ? {
							'[332]': 2.8,
							'[184]': 2,
							'[25,35,42]': 1.8,
							'[458,410,135,532]': 1.6,
							'[80,143,26,27,110,111,124,125,68,69,54,114,137,140,459,43,44,49,95,97,485]': 1.5,								
						} : {
							'[332]': 2,
							'[184]': 1.8,
							'[25,35,42]': 1.3,
							'[458,410,135,532]': 1.2,
							'[80,143,26,27,110,111,124,125,68,69,54,114,137,140,459,43,44,49,95,97,485]': 1.2,								
						};
						applyBonusToShips(bonusList);	
					},
					debuffGive: function() {
						let lock = null;
						let num = (CHDATA.fleets.combined)? 2 : 1;
						let allBlue = true;
						for (let n = 1; n <= num; n++) {
							for (let sid of CHDATA.fleets[n]) {
								if (sid && CHDATA.ships[sid].lock) {
									if (!lock) lock = CHDATA.ships[sid].lock;
									if (CHDATA.ships[sid].lock != 10) { allBlue = false; }								
								}
							}
						}
						if (allBlue && ['A', 'S'].includes(CHDATA.temp.rank)) CHDATA.event.maps[7].debuff.ZZ8 = true;
					}
				},
				'ZZ9': {
					type: 1,
					x: 299,
					y: 334,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1'],
					},
					route: 'ZZ8',
					distance: 7,
					hidden: 4,
				},
				'ZZZ1': {
					type: 3,
					x: 273,
					y: 301,
					distance: 6,
					hidden: 4,
					routeC: function(ships) {
						this.showLoSPlane = false;
						let ss = 0;
						const idList = ships.ids.concat(ships.escort ? ships.escort.ids : []);
						for (let key in idList) {
							const ship = SHIPDATA[idList[key]] || {};
							if (ship.SPD === 5) ss++;
						}
						if (ss >= 2 || (ships.aCV + (ships.escort ? ships.escort.aCV : 0) > 3)  || (CHDATA.fleets.combined === 1 ? ships.aBB + ships.escort.aBB >= 1 : false)) return 'ZZZ2';
						this.showLoSPlane = checkELoS33(getELoS33(1,1, CHDATA.fleets.combined),{ 35: 'ZZ9', 34.99: 'ZZZ2' });
						return this.showLoSPlane;
					}
				},
				'ZZZ2': {
					type: 3,
					x: 257,
					y: 359,					
					distance: 8,
					hidden: 4,
					end: true
				},
				'ZZZ3': {
					type: 1,
					x: 217,
					y: 311,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1', 'Medium 2'],
						1: ['Easy 1', 'Easy 2'],
					},
					distance: 6,
					hidden: 4,
					route: 'ZZZ1'
				},
				'ZZZ4': {
					type: 1,
					x: 168,
					y: 314,
					compDiff: {
						3: ['Hard 1','Hard 2'],
						2: ['Medium 1'],
						1: ['Easy 1'],
					},
					distance: 5,
					hidden: 4,
					raid: true,
					route: 'ZZZ3',
					debuffGive: function() {
						if(FLEETS1[0].AS >= 1) CHDATA.event.maps[7].debuff.ZZZ4 = true;
					}
				},
			}
		},
	}
};
MAPDATA[200] = MAP200;