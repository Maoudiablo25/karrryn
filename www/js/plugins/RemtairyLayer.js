﻿var Remtairy = Remtairy || {};
Remtairy.Layer = Remtairy.Layer || {};

//=============================================================================
 /*:
 * @plugindesc Layer
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const LAYER_TYPE_HOPPE = 2; //hoppe_
const LAYER_TYPE_SWEAT = 3; //sweat_
const LAYER_TYPE_MOUTH = 4; //mouth_
const LAYER_TYPE_EYES = 5; //eyes_
const LAYER_TYPE_EYEBROWS = 6; //eyebrows_
const LAYER_TYPE_HAIR = 8; //hair_
const LAYER_TYPE_HAT = 9; //hat_
const LAYER_TYPE_GLASSES = 10; //glasses_
const LAYER_TYPE_TIE = 11; //tie_
const LAYER_TYPE_FACE = 12; //face_

const LAYER_TYPE_BODY = 20; //body_
const LAYER_TYPE_HEAD = 21; //head_
const LAYER_TYPE_BOOBS = 22; //boobs_
const LAYER_TYPE_LEFT_BOOB = 23; //leftboob_
const LAYER_TYPE_RIGHT_BOOB = 24; //rightboob_
const LAYER_TYPE_ERECT_BOOBS = 25; //boobs_bokki
const LAYER_TYPE_BUTT = 26; //butt_
const LAYER_TYPE_CLOTHES = 27; //clothes_
const LAYER_TYPE_SKIRT = 28; //skirt_
const LAYER_TYPE_LEGS = 29; //legs_

const LAYER_TYPE_LEFT_ARM = 30; //leftarm_
const LAYER_TYPE_RIGHT_ARM = 31; //rightarm_
const LAYER_TYPE_WEAPON = 32; //weapon_
const LAYER_TYPE_PANTIES = 33; //panties_
const LAYER_TYPE_PUBIC = 34; //pubic_
const LAYER_TYPE_HOLE_PUSSY = 35; //ana_manko_
const LAYER_TYPE_HOLE_ANUS = 36; //ana_anaru_
const LAYER_TYPE_SPANKMARK_LEFTBUTT = 37; //spank_leftbutt_
const LAYER_TYPE_SPANKMARK_RIGHTBUTT = 38; //spank_rightbutt_

const LAYER_TYPE_BACK_A = 40; //backA_
const LAYER_TYPE_BACK_B = 41; //backB_
const LAYER_TYPE_BACK_C = 42; //backC_
const LAYER_TYPE_BACK_D = 43; //backD_
const LAYER_TYPE_BACK_E = 44; //backE_

const LAYER_TYPE_FRONT_A = 50; //frontA_
const LAYER_TYPE_FRONT_B = 51; //frontB_
const LAYER_TYPE_FRONT_C = 52; //frontC_
const LAYER_TYPE_FRONT_D = 53; //frontD_
const LAYER_TYPE_FRONT_E = 54; //frontE_

const LAYER_TYPE_COCK_NORMAL = 60; //chin_
const LAYER_TYPE_COCK_MOUTH = 61; //chin_mouth_
const LAYER_TYPE_COCK_BOOBS = 62; //chin_boobs_
const LAYER_TYPE_COCK_RIGHT_ARM = 63; //chin_rightarm_
const LAYER_TYPE_COCK_LEFT_ARM = 64; //chin_leftarm_
const LAYER_TYPE_COCK_FEET = 65; //chin_feet_
const LAYER_TYPE_COCK_PUSSY = 66; //chin_manko_
const LAYER_TYPE_COCK_ANAL = 67; //chin_anaru_

const LAYER_TYPE_TOY_CLIT = 70; //toyC_
const LAYER_TYPE_TOY_PUSSY = 71; //toyP_
const LAYER_TYPE_TOY_ANAL = 72; //toyA_

const LAYER_TYPE_WET = 100; //zaa_wet
const LAYER_TYPE_WET_PANTIES = 101; //zaa_wet_panties_
const LAYER_TYPE_DROOL_MOUTH = 102; //yodare_mouth_
const LAYER_TYPE_DROOL_FINGERS = 103; //yodare_finger_
const LAYER_TYPE_DROOL_NIPPLES = 104; //yodare_chikubi_

const LAYER_TYPE_SEMEN_BACK = 110; //zaa_back_
const LAYER_TYPE_SEMEN_BELLY = 111; //zaa_belly_
const LAYER_TYPE_SEMEN_BOOBS = 112; //zaa_boobs_
const LAYER_TYPE_SEMEN_LEFT_BOOB = 113; //zaa_leftboob_
const LAYER_TYPE_SEMEN_RIGHT_BOOB = 114; //zaa_rightboob_
const LAYER_TYPE_SEMEN_BUTT = 115; //zaa_butt_
const LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT = 116; //zaa_butt_right_ue_
const LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT = 117; //zaa_butt_left_ue_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT = 118; //zaa_butt_right_sita_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT = 119; //zaa_butt_left_sita_
const LAYER_TYPE_SEMEN_BUTT_RIGHT = 120; //zaa_rightbutt_
const LAYER_TYPE_SEMEN_BUTT_LEFT = 121; //zaa_leftbutt_

const LAYER_TYPE_SEMEN_PUSSY = 130; //zaa_crotch_
const LAYER_TYPE_SEMEN_PUSSY_PANTIES = 131; //zaa_crotch_panties_
const LAYER_TYPE_SEMEN_ANAL = 132; //zaa_anaru_
const LAYER_TYPE_SEMEN_RIGHT_ARM = 133; //zaa_rightarm_
const LAYER_TYPE_SEMEN_LEFT_ARM = 134; //zaa_leftarm_
const LAYER_TYPE_SEMEN_RIGHT_LEG = 135; //zaa_rightleg_
const LAYER_TYPE_SEMEN_LEFT_LEG = 136; //zaa_leftleg_
const LAYER_TYPE_SEMEN_FACE = 137; //zaa_face_
const LAYER_TYPE_SEMEN_MOUTH = 138; //zaa_mouth_

const LAYER_TYPE_SEMEN_COCK_MOUTH = 140; //zaa_chin_mouth_
const LAYER_TYPE_SEMEN_COCK_BOOBS = 141; //zaa_chin_boobs_
const LAYER_TYPE_SEMEN_COCK_RIGHT_ARM = 142; //zaa_chin_rightarm_
const LAYER_TYPE_SEMEN_COCK_LEFT_ARM = 143; //zaa_chin_leftarm_
const LAYER_TYPE_SEMEN_COCK_PUSSY = 144; //zaa_chin_manko_
const LAYER_TYPE_SEMEN_COCK_ANAL = 145; //zaa_chin_anaru_
const LAYER_TYPE_SEMEN_COCK_FEET = 146; //zaa_chin_feet_
const LAYER_TYPE_SEMEN_COCK_NORMAL = 147; //zaa_chin_

const LAYER_TYPE_SEMEN_FRONT_A = 150; //zaa_frontA_
const LAYER_TYPE_SEMEN_FRONT_B = 151; //zaa_frontB_
const LAYER_TYPE_SEMEN_FRONT_C = 152; //zaa_frontC_
const LAYER_TYPE_SEMEN_FRONT_D = 153; //zaa_frontD_
const LAYER_TYPE_SEMEN_FRONT_E = 154; //zaa_frontE_

const LAYER_TYPE_SEMEN_HOLE_LEFT = 155; //zaa_hole_left_
const LAYER_TYPE_SEMEN_HOLE_RIGHT = 156; //zaa_hole_right_
const LAYER_TYPE_SEMEN_TOILET_SEAT = 157; //zaa_toiletseat_crotch_
const LAYER_TYPE_WET_TOILET_SEAT = 158; //zaa_toiletseat_wet_
const LAYER_TYPE_GLORY_SEMEN_WALL_LEFT = 159; //zaa_glory_leftwall_
const LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT = 160; //zaa_glory_rightwall_
const LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT = 161; //zaa_glory_lefthole_
const LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT = 162; //zaa_glory_righthole_
const LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT = 163; //zaa_glory_lefttoilet_
const LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT = 164; //zaa_glory_righttoilet_

const LAYER_TYPE_MUG = 200; //mug_
const LAYER_TYPE_STRAW = 201; //straw_
const LAYER_TYPE_VISITOR_A = 202; //visitorA_
const LAYER_TYPE_VISITOR_B = 203; //visitorB_
const LAYER_TYPE_VISITOR_C = 204; //visitorC_
const LAYER_TYPE_VISITOR_D = 205; //visitorD_
const LAYER_TYPE_SEMEN_DESK = 206; //zaa_desk_
const LAYER_TYPE_LEFT_HOLE = 207; //hole_left_
const LAYER_TYPE_RIGHT_HOLE = 208; //hole_right_

const LAYER_TYPE_POLE = 300; //pole_
const LAYER_TYPE_CONDOM_BELT = 301; //kon_belt_
const LAYER_TYPE_CONDOM_BRA = 302; //kon_bra_
const LAYER_TYPE_CONDOM_CHIKUBI = 303; //kon_chikubi_
const LAYER_TYPE_CONDOM_HEAD = 304; //kon_head_
const LAYER_TYPE_CONDOM_LEG = 305; //kon_leg_
const LAYER_TYPE_CONDOM_PANTSU = 306; //kon_pantsu_
const LAYER_TYPE_CONDOM_BUTT = 307; //kon_butt_
const LAYER_TYPE_CONDOM_FLOOR = 308; //kon_floor_

Game_Actor.prototype.getCustomTachieLayerLoadout = function() {
	let pose = this.poseName;
	
	if(this.modding_isCustomTachieLayerPose(pose)) {
		return this.modding_getLayerLoadout(pose);
	}
	
	if(this.isInDefeatedPose()) {
		if(pose == POSE_DEFEATED_LEVEL1)
			return this.getLayerLoadout_DefeatedLv1();
		else if(pose == POSE_DEFEATED_LEVEL2)
			return this.getLayerLoadout_DefeatedLv2();
		else if(pose == POSE_DEFEATED_LEVEL3)
			return this.getLayerLoadout_DefeatedLv3();
		else if(pose == POSE_DEFEATED_LEVEL4)
			return this.getLayerLoadout_DefeatedLv4();
		else if(pose == POSE_DEFEATED_LEVEL5)
			return this.getLayerLoadout_DefeatedLv5();
		else if(pose == POSE_DEFEATED_GUARD)
			return this.getLayerLoadout_DefeatedGuard();
	}
	else if(this.isInJobPose()) {
		if(pose == POSE_RECEPTIONIST)
			return this.getLayerLoadout_Receptionist();
		else if(pose == POSE_WAITRESS_SEX)
			return this.getLayerLoadout_WaitressSex();
		else if(pose == POSE_TOILET_SITTING)
			return this.getLayerLoadout_ToiletSitting();
		else if(pose == POSE_TOILET_SIT_LEFT)
			return this.getLayerLoadout_ToiletSitLeft();
		else if(pose == POSE_TOILET_SIT_RIGHT)
			return this.getLayerLoadout_ToiletSitRight();
		else if(pose == POSE_TOILET_STAND_LEFT)
			return this.getLayerLoadout_ToiletStandLeft();
		else if(pose == POSE_TOILET_STAND_RIGHT)
			return this.getLayerLoadout_ToiletStandRight();
		
		else if(pose == POSE_STRIPPER_MOUTH)
			return this.getLayerLoadout_StripperMouth();
		else if(pose == POSE_STRIPPER_BOOBS)
			return this.getLayerLoadout_StripperBoobs();
		else if(pose == POSE_STRIPPER_PUSSY)
			return this.getLayerLoadout_StripperPussy();
		else if(pose == POSE_STRIPPER_BUTT)
			return this.getLayerLoadout_StripperButt();
		else if(pose == POSE_STRIPPER_VIP)
			return this.getLayerLoadout_StripperVIP();
		else if(pose == POSE_STRIPPER_INTERMISSION)
			return [LAYER_TYPE_CONDOM_FLOOR];
	}
	
	if(pose == POSE_DOWN_ORGASM)
		return this.getLayerLoadout_DownOrgasm();
	else if(pose == POSE_DOWN_FALLDOWN)
		return this.getLayerLoadout_DownFalldown();
	else if(pose == POSE_BJ_KNEELING)
		return this.getLayerLoadout_BjKneeling();
	else if(pose == POSE_HJ_STANDING)
		return this.getLayerLoadout_HjStanding();
	else if(pose == POSE_KICKCOUNTER)
		return this.getLayerLoadout_KickCounter();
	else if(pose == POSE_GUARDGANGBANG)
		return this.getLayerLoadout_GuardGangbang();
	else if(pose == POSE_THUGGANGBANG)
		return this.getLayerLoadout_ThugGangbang();
	else if(pose == POSE_REVERSE_COWGIRL)
		return this.getLayerLoadout_ReverseCowgirl();
	else if(pose == POSE_KARRYN_COWGIRL)
		return this.getLayerLoadout_KarrynCowgirl();
	else if(pose == POSE_LIZARDMAN_COWGIRL)
		return this.getLayerLoadout_LizardmanCowgirl();
	else if(pose == POSE_ORC_PAIZURI)
		return this.getLayerLoadout_OrcPaizuri();
	else if(pose == POSE_PAIZURI_LAYING)
		return this.getLayerLoadout_PaizuriLaying();
	else if(pose == POSE_WEREWOLF_BACK)
		return this.getLayerLoadout_WerewolfBack();	
	else if(pose == POSE_YETI_PAIZURI)
		return this.getLayerLoadout_YetiPaizuri();	
	else if(pose == POSE_YETI_CARRY)
		return this.getLayerLoadout_YetiCarry();
	else if(pose == POSE_FOOTJOB)
		return this.getLayerLoadout_Footjob();	
	else if(pose == POSE_RIMJOB)
		return this.getLayerLoadout_Rimjob();
	else if(pose == POSE_SLIME_PILEDRIVER_ANAL)
		return this.getLayerLoadout_SlimePiledriver();		
		
	else if(pose == POSE_MASTURBATE_INBATTLE)
		return this.getLayerLoadout_MasturbateInBattle();
	
	return this.getLayerLoadout_Default();
};

//Chatface
Game_Actor.prototype.getCustomTachieLayerLoadout_Chatface = function() {
	let layerArray = [];
	let tempArray = [];	
	let chatface = this.poseName;
	let tachieBody = this.tachieBody;
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	if(chatface === CHAT_FOLDER_KARRYN) {
		layerArray = [
			LAYER_TYPE_SEMEN_FACE,
			LAYER_TYPE_SEMEN_RIGHT_ARM,
			LAYER_TYPE_SEMEN_LEFT_ARM,
		
			LAYER_TYPE_GLASSES,
			LAYER_TYPE_FACE,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAT,
			
			LAYER_TYPE_WEAPON
		]
		
		if(!mergedLeftArmArray && (tachieBody === '1' || tachieBody === '2' || tachieBody === '5')) {
			layerArray = layerArray.concat(leftArmArray);
			mergedLeftArmArray = true;
		}
		
		tempArray = [	
			LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_SEMEN_BELLY,
			LAYER_TYPE_SEMEN_BUTT,
			LAYER_TYPE_BOOBS,
		]
		layerArray = layerArray.concat(tempArray);
		
		if(!mergedLeftArmArray) {
			layerArray = layerArray.concat(leftArmArray);
			mergedLeftArmArray = true;
		}
		
		tempArray = [		
			LAYER_TYPE_PANTIES,
			LAYER_TYPE_BODY
		]
		layerArray = layerArray.concat(tempArray);
		
		if(!mergedRightArmArray) {
			layerArray = layerArray.concat(rightArmArray);
			mergedRightArmArray = true;
		}
	}
	else if(chatface === CHAT_FOLDER_ARON) {
		layerArray = [
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_FACE,
			LAYER_TYPE_BODY
		]
	}
	else {
		layerArray = [
			LAYER_TYPE_HAT,
			LAYER_TYPE_FACE,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_BODY
		]
	}
	
	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_Default = function() {
	let actor = this;
	let layerArray = [];
	let tempArray = [];	
	
	let frontArray = [ 
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_SEMEN_FRONT_E, 
		LAYER_TYPE_FRONT_E
	];
	
	if(actor.tachieFrontInFrontOfFace()) {
		if(actor.tachieSemenRightArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
		if(actor.tachieSemenLeftArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
		layerArray = layerArray.concat(frontArray);
	}
	
	if(actor.tachieCockMouthInFrontOfFace()) {
		layerArray.push(LAYER_TYPE_SEMEN_COCK_MOUTH);
		layerArray.push(LAYER_TYPE_COCK_MOUTH);
	}
	
	layerArray.push(LAYER_TYPE_SEMEN_MOUTH);
	layerArray.push(LAYER_TYPE_SEMEN_FACE);
	
	layerArray.push(LAYER_TYPE_GLASSES);
	
	layerArray.push(LAYER_TYPE_FACE);
	
	layerArray.push(LAYER_TYPE_EYEBROWS);
	layerArray.push(LAYER_TYPE_EYES);
	layerArray.push(LAYER_TYPE_MOUTH);
	layerArray.push(LAYER_TYPE_HAIR);
	layerArray.push(LAYER_TYPE_SWEAT);
	layerArray.push(LAYER_TYPE_HOPPE);
	
	if(!actor.tachieFrontInFrontOfFace()) {
		if(actor.tachieSemenRightArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
		if(actor.tachieSemenLeftArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
		layerArray = layerArray.concat(frontArray);
	}
	
	if(actor.tachieAnalToyInFrontOfEverything())
		layerArray.push(LAYER_TYPE_TOY_ANAL);
	
	if(actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
		if(actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		if(actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieAnalToyInFrontOfEverything())
			layerArray.push(LAYER_TYPE_TOY_ANAL);
		if(!actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
	}
	
	if(actor.tachieWeaponInFrontOfBody() && actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
		layerArray.push(LAYER_TYPE_WEAPON);
	
	layerArray.push(LAYER_TYPE_SEMEN_BUTT);
	layerArray.push(LAYER_TYPE_SEMEN_BACK);
	layerArray.push(LAYER_TYPE_SEMEN_LEFT_LEG);
	layerArray.push(LAYER_TYPE_SEMEN_RIGHT_LEG);
	
	layerArray.push(LAYER_TYPE_SEMEN_COCK_LEFT_ARM);
	layerArray.push(LAYER_TYPE_SEMEN_COCK_RIGHT_ARM);
	
	if(!actor.tachieSemenLeftArmInFrontOfFront()) 
		layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
	if(!actor.tachieSemenRightArmInFrontOfFront()) 
		layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
	
	if(actor.tachieHatInFrontOfBody()) 
		layerArray.push(LAYER_TYPE_HAT);
	
	if(actor.tachieHeadInFrontOfBody()) 				
		layerArray.push(LAYER_TYPE_HEAD);
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(actor.tachieLeftArmInFrontOfBody() && actor.tachieLeftArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(actor.tachiePantiesInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_PANTIES);
	}
	
	if(actor.tachieBoobsInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_DROOL_NIPPLES);
		
		if(actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		layerArray.push(LAYER_TYPE_RIGHT_BOOB);
		if(!actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		
		layerArray.push(LAYER_TYPE_BOOBS);
		
		if(!actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(!actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
			layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(actor.tachieLeftArmInFrontOfBody() && !actor.tachieLeftArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(!actor.tachiePantiesInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_PANTIES);
	}
	
	if(actor.tachieHolesCocksToysInFrontOfBody()) {
		if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
			if(actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
			if(actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieAnalToyInFrontOfEverything())
				layerArray.push(LAYER_TYPE_TOY_ANAL);
			if(!actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
		}
		
		layerArray.push(LAYER_TYPE_SEMEN_COCK_ANAL);
		layerArray.push(LAYER_TYPE_SEMEN_COCK_PUSSY);
		layerArray.push(LAYER_TYPE_COCK_ANAL);
		layerArray.push(LAYER_TYPE_COCK_PUSSY);
		
		if(actor.tachieClitToyBehindCocks()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		
		layerArray.push(LAYER_TYPE_SEMEN_PUSSY);
		layerArray.push(LAYER_TYPE_SEMEN_ANAL);
		layerArray.push(LAYER_TYPE_WET);
		
		layerArray.push(LAYER_TYPE_HOLE_ANUS);
		layerArray.push(LAYER_TYPE_HOLE_PUSSY);
	}
	
	layerArray.push(LAYER_TYPE_PUBIC);
	layerArray.push(LAYER_TYPE_BODY);
	
	if(!actor.tachieHolesCocksToysInFrontOfBody()) {
		if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
			if(actor.tachieClitToyInFrontOfMainToys()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
			if(actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieAnalToyInFrontOfEverything())
				layerArray.push(LAYER_TYPE_TOY_ANAL);
			if(!actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieClitToyInFrontOfMainToys()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
		}
		
		layerArray.push(LAYER_TYPE_SEMEN_COCK_ANAL);
		layerArray.push(LAYER_TYPE_SEMEN_COCK_PUSSY);
		layerArray.push(LAYER_TYPE_COCK_ANAL);
		layerArray.push(LAYER_TYPE_COCK_PUSSY);
		
		layerArray.push(LAYER_TYPE_SEMEN_PUSSY);
		layerArray.push(LAYER_TYPE_SEMEN_ANAL);
		layerArray.push(LAYER_TYPE_WET);
		
		layerArray.push(LAYER_TYPE_HOLE_ANUS);
		layerArray.push(LAYER_TYPE_HOLE_PUSSY);
	}
	
	if(!actor.tachieHatInFrontOfBody()) 
		layerArray.push(LAYER_TYPE_HAT);
	
	if(!actor.tachieHeadInFrontOfBody()) {
		if(actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
			layerArray.push(LAYER_TYPE_DROOL_FINGERS);
			layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
			layerArray.push(LAYER_TYPE_RIGHT_ARM);
		}
		layerArray.push(LAYER_TYPE_HEAD);
	}
	
	if(!actor.tachieBoobsInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_DROOL_NIPPLES);
		
		if(actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		layerArray.push(LAYER_TYPE_RIGHT_BOOB);
		if(!actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		
		layerArray.push(LAYER_TYPE_BOOBS);
		
		if(!actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(!actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
			layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	if(!actor.tachieCockMouthInFrontOfFace()) {
		layerArray.push(LAYER_TYPE_SEMEN_COCK_MOUTH);
		layerArray.push(LAYER_TYPE_COCK_MOUTH);
	}
	
	if(!actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponBehindEverything())
		layerArray.push(LAYER_TYPE_WEAPON);
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(!actor.tachieLeftArmInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(actor.tachieWeaponBehindEverything()) {
		layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	layerArray.push(LAYER_TYPE_BACK_A);
	layerArray.push(LAYER_TYPE_BACK_B);
	layerArray.push(LAYER_TYPE_BACK_C);
	layerArray.push(LAYER_TYPE_BACK_D);
	layerArray.push(LAYER_TYPE_BACK_E);
	
	if(actor.tachieToysInBehindOfEverything()) {
		if(actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		if(actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieAnalToyInFrontOfEverything())
			layerArray.push(LAYER_TYPE_TOY_ANAL);
		if(!actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
	}
	
	return layerArray;
};

//defeated_level1
Game_Actor.prototype.getLayerLoadout_DefeatedLv1 = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	let mergedSemenLeftBoobsArray = false;
	let semenLeftBoobArray = [ LAYER_TYPE_SEMEN_LEFT_BOOB ];
	let mergedSemenRightBoobsArray = false;
	let semenRightBoobArray = [ LAYER_TYPE_SEMEN_RIGHT_BOOB ];
	
	
	layerArray = [
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A,
		
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,

		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM
	]

	
	if(!mergedSemenLeftArmArray && this.isBodySlotPenis(LEFT_HAND_ID)) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(!mergedSemenRightArmArray && this.isBodySlotPenis(RIGHT_HAND_ID)) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(!mergedSemenLeftBoobsArray && this.isBodySlotPenis(LEFT_HAND_ID)) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobsArray = true;
	}
	if(!mergedSemenRightBoobsArray && this.isBodySlotPenis(RIGHT_HAND_ID)) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobsArray = true;
	}
	
	if(!mergedSemenLeftBoobsArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobsArray = true;
	}
	if(!mergedSemenRightBoobsArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobsArray = true;
	}
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_LEFT_BOOB,
		LAYER_TYPE_RIGHT_BOOB,

		LAYER_TYPE_HAT,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	
	return layerArray;
};

//defeated_level2
Game_Actor.prototype.getLayerLoadout_DefeatedLv2 = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,

		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,

		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HOPPE,

		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,

		LAYER_TYPE_WET,
		LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT,
		LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,

		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HAT,
		LAYER_TYPE_BODY
	]
	
	return layerArray;
};

//defeated_level3
Game_Actor.prototype.getLayerLoadout_DefeatedLv3 = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedTieArray = false;
	let tieArray = [ LAYER_TYPE_TIE ];
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	
	layerArray = [
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
	]
		
	if(!mergedTieArray && this.tachieTie === 'zuri') {
		layerArray = layerArray.concat(tieArray);
		mergedTieArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_WET,

		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_COCK_BOOBS,
		
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedTieArray && this.tachieTie === 'normal') {
		layerArray = layerArray.concat(tieArray);
		mergedTieArray = true;
	}


	tempArray = [	
		LAYER_TYPE_BOOBS,
	
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BODY
	]
	
	
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//defeated_level4
Game_Actor.prototype.getLayerLoadout_DefeatedLv4 = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_HAT,
		
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BUTT_LEFT,
		LAYER_TYPE_SEMEN_BUTT_RIGHT,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SPANKMARK_RIGHTBUTT,
		LAYER_TYPE_SPANKMARK_LEFTBUTT,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_MOUTH
	]

	return layerArray;
};

//defeated_level5
Game_Actor.prototype.getLayerLoadout_DefeatedLv5 = function() {
	let layerArray = [];
	
	return layerArray;
};

//down orgasm
Game_Actor.prototype.getLayerLoadout_DownOrgasm = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedPubicArray = false;
	let pubicArray = [ LAYER_TYPE_PUBIC ];

	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY_PANTIES,
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		
		
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_PANTIES
	]

	if(!mergedPubicArray && !this.isWearingPanties()) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}
		

	tempArray = [	
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//down falldown
Game_Actor.prototype.getLayerLoadout_DownFalldown = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedPubicArray = false;
	let pubicArray = [ LAYER_TYPE_PUBIC ];

	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_PANTIES
	]

	if(!mergedPubicArray && !this.isWearingPanties()) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}
		

	tempArray = [	
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_HjStanding = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY
	]

	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_BjKneeling = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let leftArmIsHj = this.tachieLeftArm.includes('hj');
	let rightArmIsHj = this.tachieRightArm.includes('hj');
	
	layerArray = [
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM
	]
	
	if(!mergedSemenRightArmArray && rightArmIsHj) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedSemenLeftArmArray && leftArmIsHj) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsHj) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_COCK_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);
	
	
	return layerArray;
};

//kick counter
Game_Actor.prototype.getLayerLoadout_KickCounter = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_BACK_B,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BACK_D
		
	]
	
	return layerArray;
};

//thug gangbang
Game_Actor.prototype.getLayerLoadout_ThugGangbang = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		
		LAYER_TYPE_COCK_BOOBS,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_FRONT_B
	]
	
	if(!mergedBoobsArray && this.tachieBoobs.includes('zuri')) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_HAT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//guard gangbang
Game_Actor.prototype.getLayerLoadout_GuardGangbang = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Werewolf Back
Game_Actor.prototype.getLayerLoadout_WerewolfBack = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
	]
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);

	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BUTT
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Orc Paizuri
Game_Actor.prototype.getLayerLoadout_OrcPaizuri = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_FACE,

		LAYER_TYPE_HAT,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_FRONT_A,

		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Paizuri Laying
Game_Actor.prototype.getLayerLoadout_PaizuriLaying = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Yeti Paizuri
Game_Actor.prototype.getLayerLoadout_YetiPaizuri = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_COCK_BOOBS

	]
	
	return layerArray;
};

//Yeti Carry
Game_Actor.prototype.getLayerLoadout_YetiCarry = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_BODY
	]
	
	return layerArray;
};

//Rimjob
Game_Actor.prototype.getLayerLoadout_Rimjob = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY
	]
	
	return layerArray;
};

//Slime Piledriver
Game_Actor.prototype.getLayerLoadout_SlimePiledriver = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HOLE_PUSSY,
		
		LAYER_TYPE_HAT,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Footjob
Game_Actor.prototype.getLayerLoadout_Footjob = function() {
	let layerArray = [];
	let tempArray = [];	
	
	layerArray = [
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_COCK_FEET,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_COCK_FEET,
		LAYER_TYPE_TOY_CLIT
	]	
	
	if(this.tachieHead.includes('far')) {
		tempArray = [
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	tempArray = [
		LAYER_TYPE_COCK_MOUTH,
	]
	layerArray = layerArray.concat(tempArray);

	if(this.tachieHead.includes('close')) {
		tempArray = [
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);	
	}
		
	tempArray = [
		LAYER_TYPE_HAT,
		LAYER_TYPE_HEAD,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
	
	return layerArray;
};

//Lizardman Cowgirl
Game_Actor.prototype.getLayerLoadout_LizardmanCowgirl = function() {
	let layerArray = [];
	let tempArray = [];	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);

	layerArray = [
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_BOOBS,

		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,

		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_BODY,
		LAYER_TYPE_HAT
	]	
		
	if(givingBJ) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}
	else {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);
	}
		

	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_BACK_A
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Karryn Cowgirl
Game_Actor.prototype.getLayerLoadout_KarrynCowgirl = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	

	layerArray = [
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_WET,

		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES
	]
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_COCK_BOOBS,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_LEGS,
		
		LAYER_TYPE_BACK_A
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Reverse Cowgirl
Game_Actor.prototype.getLayerLoadout_ReverseCowgirl = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	
	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_SWEAT,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_BUTT,
	]
	
	if(!mergedLeftArmArray && hasLeftHandjob) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && hasRightHandjob) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_BODY,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_BACK_A
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


Game_Actor.prototype.getLayerLoadout_MasturbateInBattle = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightBoobArray = false;
	let semenRightBoobArray = [ LAYER_TYPE_SEMEN_RIGHT_BOOB ];
	let mergedSemenLeftBoobArray = false;
	let semenLeftBoobArray = [ LAYER_TYPE_SEMEN_LEFT_BOOB ];
	let mergedWetArray = false;
	let wetArray = [ LAYER_TYPE_WET ];
	
	let leftArmIsNormal = this.tachieLeftArm.includes('normal');
	let rightArmIsNormal = this.tachieRightArm.includes('normal');
	let leftArmIsOppai = this.tachieLeftArm.includes('touch_oppai');
	let rightArmIsOppai = this.tachieRightArm.includes('touch_oppai');
	let leftArmIsChikubi = this.tachieLeftArm.includes('touch_chikubi');
	let rightArmIsChikubi = this.tachieRightArm.includes('touch_chikubi');
	let leftArmIsSuckFinger = this.tachieLeftArm.includes('suck_fingers');
	let rightArmIsSuckFinger = this.tachieRightArm.includes('suck_fingers');
	let leftArmIsKuri = this.tachieLeftArm.includes('touch_kuri');
	let rightArmIsKuri = this.tachieRightArm.includes('touch_kuri');
	let leftArmIsOmanko = this.tachieLeftArm.includes('finger_omanko');
	let rightArmIsOmanko = this.tachieRightArm.includes('finger_omanko');
	let leftArmIsAnaru = this.tachieLeftArm.includes('finger_anaru');
	let rightArmIsAnaru = this.tachieRightArm.includes('finger_anaru');
	let leftArmIsToyP = this.tachieLeftArm.includes('play_toyP');
	let rightArmIsToyP = this.tachieRightArm.includes('play_toyP');
	let frontBIsArmsHalberd = this.tachieFrontB.includes('arms_halberd');
	

	if(frontBIsArmsHalberd) {
		layerArray = [
			LAYER_TYPE_FRONT_A,
			
			LAYER_TYPE_SEMEN_RIGHT_ARM,
			LAYER_TYPE_SEMEN_LEFT_ARM,
			LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_WET,
			
			LAYER_TYPE_FRONT_B
		]
		mergedSemenRightArmArray = true;
		mergedSemenLeftArmArray = true;
		mergedWetArray = true;
		mergedSemenRightBoobArray = true;
		mergedSemenLeftBoobArray = true;
	}
	else {
		layerArray = [
			LAYER_TYPE_FRONT_A
		]
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}	
	
	if(!mergedSemenRightBoobArray && rightArmIsOppai) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsOppai) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}	
	
	if(!mergedSemenRightBoobArray && rightArmIsChikubi) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsChikubi) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsToyP) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsToyP) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsOmanko) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsOmanko) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsKuri) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsKuri) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsNormal) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsNormal) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	/*if(!mergedWetArray) {
	//	layerArray = layerArray.concat(wetArray);
	//	mergedWetArray = true;
	}*/
	
	if(!mergedSemenRightArmArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsOppai) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsOppai) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsToyP) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsToyP) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenLeftArmArray && leftArmIsOmanko) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(!mergedSemenRightArmArray && rightArmIsOmanko) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}		
	
	if(!mergedSemenRightArmArray && rightArmIsKuri) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsKuri) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsNormal) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsNormal) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsChikubi) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsChikubi) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
	
	if(!mergedRightArmArray && rightArmIsOppai) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_RIGHT_BOOB,
		LAYER_TYPE_LEFT_BOOB,
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedRightArmArray && rightArmIsToyP) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsToyP) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	

	if(!mergedLeftArmArray && leftArmIsOmanko) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
	if(!mergedRightArmArray && rightArmIsOmanko) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}		
	
	if(!mergedRightArmArray && rightArmIsKuri) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsKuri) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
	
	if(!mergedRightArmArray && rightArmIsNormal) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsNormal) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	if(!mergedLeftArmArray && leftArmIsOppai) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}		
		
	if(!mergedRightArmArray && rightArmIsChikubi) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsChikubi) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
	
	
		
	tempArray = [		
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedWetArray) {
		layerArray = layerArray.concat(wetArray);
		mergedWetArray = true;
	}			
		
	tempArray = [		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	return layerArray;
};

//defeated_guard
Game_Actor.prototype.getLayerLoadout_DefeatedGuard = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM, LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedArmsArray = false;
	let armsArray = [ LAYER_TYPE_RIGHT_ARM, LAYER_TYPE_LEFT_ARM ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	tempArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenArmsArray && (this.tachieLeftArm === 'zuri' || this.tachieLeftArm === 'zuri_naked')) {
		if(this.tachieBoobs === 'empty') {
			layerArray = layerArray.concat(semenArmsArray);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		else {
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
			layerArray = layerArray.concat(semenArmsArray);
		}
		mergedSemenArmsArray = true;
	}
	else {
		layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
	}
	
	tempArray = [
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_BOOBS
	];
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenArmsArray && (this.tachieLeftArm === 'thigh' || this.tachieLeftArm === 'thigh_naked')) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_TOY_CLIT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedBoobsArray && this.tachieBoobs === 'zuri_enemy') {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	if(!mergedArmsArray && (this.tachieLeftArm === 'zuri' || this.tachieLeftArm === 'zuri_naked')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedBoobsArray && this.tachieBoobs === 'zuri_karryn') {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HAT,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedArmsArray && (this.tachieLeftArm === 'thigh' || this.tachieLeftArm === 'thigh_naked')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
	
	if(!mergedArmsArray) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	return layerArray;
};


//Waitress Sex
Game_Actor.prototype.getLayerLoadout_WaitressSex = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	layerArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_STRAW,
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_MUG,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};	

//Receptionist
Game_Actor.prototype.getLayerLoadout_Receptionist = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenNakaArray = false;
	let semenNakaArray = [ LAYER_TYPE_SEMEN_ANAL, LAYER_TYPE_SEMEN_PUSSY, LAYER_TYPE_WET ];
	
	let mergedCockNormalArray = false;
	let cockNormalArray = [ LAYER_TYPE_COCK_NORMAL ];
	let mergedSemenCockNormalArray = false;
	let semenCockNormalArray = [ LAYER_TYPE_SEMEN_COCK_NORMAL ];
	let mergedVisitorAArray = false;
	let visitorAArray = [ LAYER_TYPE_VISITOR_A ];
	
	let thereIsPervertedGoblinFront = $gameTroop.receptionistBattle_thereIsVisitorAtDesk() && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isGoblin && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isPervert && ($gameTroop.receptionistBattle_visitorAtDesk()._visitor_isIdentified || $gameTroop.receptionistBattle_visitorAtDesk().isWanted);
	let receptionistIsKissing = this.receptionistBattle_isKissing();
	let receptionistIsGettingBoobsRubbed = this.receptionistBattle_gettingBoobsRubbed();
	let receptionistIsGivingBJ = this.receptionistBattle_isGivingBlowjob();
	let receptionistIsGivingHJ = this.receptionistBattle_isGivingHandjob();
	
	layerArray = [
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_FRONT_E,
		
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_GLASSES,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_BUTT
	]
		
	if(!mergedSemenNakaArray && this.clothingStage === 3 && !this.isWearingPanties()) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}		
		
	tempArray = [		
		LAYER_TYPE_CLOTHES,
		LAYER_TYPE_SKIRT, 
		LAYER_TYPE_PANTIES
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenNakaArray) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_BUTT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_BACK_D,
		LAYER_TYPE_BACK_E
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedSemenCockNormalArray && thereIsPervertedGoblinFront) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}	
	
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && receptionistIsGettingBoobsRubbed) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && receptionistIsGettingBoobsRubbed) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	
	
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && !receptionistIsGivingBJ) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && !receptionistIsGivingBJ) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	

		
	tempArray = [
		LAYER_TYPE_SEMEN_DESK
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && receptionistIsGivingBJ) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && receptionistIsGivingBJ) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	
	
	if(!mergedSemenCockNormalArray) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}	
	if(!mergedCockNormalArray) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	
	
	if(!mergedVisitorAArray) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_VISITOR_B,
		LAYER_TYPE_VISITOR_C,
		LAYER_TYPE_VISITOR_D
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Toilet Sitting
Game_Actor.prototype.getLayerLoadout_ToiletSitting = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedLeftBoobArray = false;
	let leftBoobArray = [ LAYER_TYPE_LEFT_BOOB ];
	let mergedRightBoobArray = false;
	let rightBoobArray = [ LAYER_TYPE_RIGHT_BOOB ];
	
	let mergedSemenLeftBoobArray = false;
	let semenLeftBoobArray = [ LAYER_TYPE_SEMEN_LEFT_BOOB ];
	let mergedSemenRightBoobArray = false;
	let semenRightBoobArray = [ LAYER_TYPE_SEMEN_RIGHT_BOOB ];
	
	let mergedSemenHoleLeftArray = false;
	let semenHoleLeftArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT ];
	let mergedSemenHoleRightArray = false;
	let semenHoleRightArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_PUBIC, LAYER_TYPE_LEGS ];

	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_WET
		];
	

	let legsAreClose = this.tachieLegs.includes('close');
	let legsAreSpread = this.tachieLegs.includes('spread');
	
	let leftArmPlayingWithToyA = this.tachieLeftArm.includes('toyA');
	let rightArmPlayingWithToyA = this.tachieRightArm.includes('toyA');
	let leftArmPlayingWithToyP = this.tachieLeftArm.includes('toyP');
	let rightArmPlayingWithToyP = this.tachieRightArm.includes('toyP');
	let leftArmPlayingWithToyC = this.tachieLeftArm.includes('toyC');
	let rightArmPlayingWithToyC = this.tachieRightArm.includes('toyC');
	
	let leftArmPlayingWithClit = this.tachieLeftArm.includes('kuri');
	let rightArmPlayingWithClit = this.tachieRightArm.includes('kuri');
	let leftArmPlayingWithPussy = this.tachieLeftArm.includes('manko');
	let rightArmPlayingWithPussy = this.tachieRightArm.includes('manko');
	let leftArmPlayingWithAnal = this.tachieLeftArm.includes('anaru');
	let rightArmPlayingWithAnal = this.tachieRightArm.includes('anaru');
	
	let leftArmSuckingFinger = this.tachieLeftArm.includes('suck_fingers');
	let rightArmSuckingFinger = this.tachieRightArm.includes('suck_fingers');
	let leftArmTouchingChikubi = this.tachieLeftArm.includes('chikubi');
	let rightArmTouchingChikubi = this.tachieRightArm.includes('chikubi');
	
	let isNaked = !this.isWearingGlovesAndHat();
	
	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]	
	layerArray = layerArray.concat(tempArray);
	
	if(leftArmPlayingWithToyP && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyP && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedLeftArmArray && leftArmPlayingWithToyP) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithToyP) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(legsAreClose && !mergedLegsBasedSemenArray) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	} 
	
	if(legsAreClose && !mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	} 

	if(leftArmSuckingFinger && !mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(rightArmSuckingFinger && !mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}

	if(leftArmSuckingFinger && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmSuckingFinger && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(leftArmSuckingFinger && !mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	if(rightArmSuckingFinger && !mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}

	tempArray = [
		LAYER_TYPE_SEMEN_FACE
	]	
	layerArray = layerArray.concat(tempArray);

	if(leftArmPlayingWithAnal && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithAnal && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(leftArmPlayingWithToyA && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyA && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(leftArmPlayingWithPussy && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithPussy && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}

	tempArray = [
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_HEAD,
	]	
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedLeftArmArray && leftArmPlayingWithAnal) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithAnal) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	if(!mergedLeftArmArray && leftArmPlayingWithToyA) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithToyA) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
		
	if(!mergedLeftArmArray && leftArmPlayingWithPussy) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithPussy) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	if(leftArmPlayingWithToyC && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyC && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(leftArmPlayingWithClit && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithClit && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedLeftArmArray && leftArmPlayingWithToyC) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithToyC) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	if(!mergedLeftArmArray && leftArmPlayingWithClit) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && rightArmPlayingWithClit) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	
	tempArray = [
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);	

	if(!leftArmPlayingWithToyA && !rightArmPlayingWithToyA) {
		tempArray = [	
			LAYER_TYPE_TOY_ANAL
		]
		layerArray = layerArray.concat(tempArray);
	}
		
	if(legsAreSpread) {
		tempArray = [
			LAYER_TYPE_TOY_CLIT,
		]
		layerArray = layerArray.concat(tempArray);	
	}		
	
	if(!mergedLegsBasedSemenArray) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	} 
		
	if(!mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
		
	if(!isNaked && !rightArmSuckingFinger) {
		tempArray = [	
			LAYER_TYPE_TIE
		]
		layerArray = layerArray.concat(tempArray);	
	}
		
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(leftArmTouchingChikubi && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(leftArmTouchingChikubi && !mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(!mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(leftArmTouchingChikubi && !mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	
	if(rightArmTouchingChikubi && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(rightArmTouchingChikubi && !mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}
	if(!mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}
	if(rightArmTouchingChikubi && !mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}
	
	if(!mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	if(!mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenHoleRightArray) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
	if(!mergedSemenHoleLeftArray) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedLeftArmArray && this.tachieLeftArm.includes('pet') && !this.tachieRightHole.includes('pet')) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && this.tachieRightArm.includes('pet') && !this.tachieLeftHole.includes('pet')) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_LEFT_HOLE,
		LAYER_TYPE_RIGHT_HOLE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Toilet Sit Left
Game_Actor.prototype.getLayerLoadout_ToiletSitLeft = function() {
	let layerArray = [];
	let tempArray = [];

	let leftArmIsIdle = this.tachieLeftArm.includes('legs');
	let leftArmIsClose = this.tachieLeftArm.includes('close');
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	let mouthIsBj = this.tachieMouth.includes('bj');
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_LEGS ];
	
	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET
		];
		
	layerArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]

	if(!mergedLegsBasedSemenArray && legsAreClose) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	if(!mergedSemenLeftArmArray && leftArmIsClose) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
		
	if(!mergedLeftArmArray && leftArmIsIdle) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		
		LAYER_TYPE_LEFT_HOLE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_HEAD,
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsBasedSemenArray && legsAreSpread) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_PUBIC
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_RIGHT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Toilet Sit Right
Game_Actor.prototype.getLayerLoadout_ToiletSitRight = function() {
	let layerArray = [];
	let tempArray = [];
	
	let rightArmIsIdle = this.tachieRightArm.includes('legs');
	let rightArmIsClose = this.tachieRightArm.includes('close');
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	let mouthIsBj = this.tachieMouth.includes('bj');
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_LEGS ];
	
	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET
		];

	layerArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]

	if(!mergedLegsBasedSemenArray && legsAreClose) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	if(!mergedSemenRightArmArray && rightArmIsClose) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
		
	if(!mergedRightArmArray && rightArmIsIdle) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		
		LAYER_TYPE_RIGHT_HOLE
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_HEAD,
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsBasedSemenArray && legsAreSpread) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_PUBIC
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_LEFT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Toilet Stand Left
Game_Actor.prototype.getLayerLoadout_ToiletStandLeft = function() {
	let layerArray = [];
	let tempArray = [];

	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let leftHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused()
	let rightHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused()
	
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let mergedLeftHole = false;
	let leftHoleArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT, LAYER_TYPE_LEFT_HOLE ];
	let mergedRightHole = false;
	let rightHoleArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT, LAYER_TYPE_RIGHT_HOLE ];
	
	let mergedSemenLeftArmHole = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];


	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedRightHole) {
		layerArray = layerArray.concat(rightHoleArray);
		mergedRightHole = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_TOY_CLIT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(leftArmIsChikubi && !mergedSemenLeftArmHole) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS,	
		
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmHole) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		
		LAYER_TYPE_LEFT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Toilet Stand Right
Game_Actor.prototype.getLayerLoadout_ToiletStandRight = function() {
	let layerArray = [];
	let tempArray = [];

	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let leftHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused()
	let rightHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused()
	
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let mergedLeftHole = false;
	let leftHoleArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT, LAYER_TYPE_LEFT_HOLE ];
	let mergedRightHole = false;
	let rightHoleArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT, LAYER_TYPE_RIGHT_HOLE ];
	
	let mergedSemenRightArmHole = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	

	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT,
	
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_FACE,

		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLeftHole) {
		layerArray = layerArray.concat(leftHoleArray);
		mergedLeftHole = true;
	}
		
	tempArray = [	
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_TOY_CLIT
	]
	layerArray = layerArray.concat(tempArray);
		
	if(rightArmIsChikubi && !mergedSemenRightArmHole) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS,	
		
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenRightArmHole) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmHole = true;
	}
		
	tempArray = [	
		LAYER_TYPE_RIGHT_ARM,
	
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		
		LAYER_TYPE_RIGHT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};



//Stripper Mouth
Game_Actor.prototype.getLayerLoadout_StripperMouth = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedFrontBHole = false;
	let frontBArray = [ LAYER_TYPE_FRONT_B ];
	
	layerArray = [
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BRA
	]	
		
	if(!mergedFrontBHole && this.tachieFrontB.includes('before')) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedFrontBHole) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_POLE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Stripper Boobs
Game_Actor.prototype.getLayerLoadout_StripperBoobs = function() {
	let layerArray = [];
	let tempArray = [];	
	
	layerArray = [
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BRA,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_POLE,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HEAD,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	
	return layerArray;
};

//Stripper Pussy
Game_Actor.prototype.getLayerLoadout_StripperPussy = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let rightArmIsKupa = this.tachieRightArm.includes('kupa');
	
	layerArray = [
		LAYER_TYPE_FRONT_B,
	
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_BELT,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BRA,
		
		LAYER_TYPE_BOOBS
	]
		
	if(!mergedRightArmArray && !rightArmIsKupa) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_PANTIES,

		LAYER_TYPE_WET,
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsKupa) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Stripper Butt
Game_Actor.prototype.getLayerLoadout_StripperButt = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedCondomButtArray = false;
	let condomButtArray = [ LAYER_TYPE_CONDOM_BUTT ];
	
	let condomButtIsKupa = this.tachieCondomButt.includes('kupa');
	
	if(!mergedCondomButtArray && condomButtIsKupa) {
		layerArray = layerArray.concat(condomButtArray);
		mergedCondomButtArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedCondomButtArray) {
		layerArray = layerArray.concat(condomButtArray);
		mergedCondomButtArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_CONDOM_BELT,
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_BRA,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_BODY,
		LAYER_TYPE_PUBIC,
		
		
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_POLE,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Stripper VIP
//Stripper Sex
Game_Actor.prototype.getLayerLoadout_StripperVIP = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_COCK_LEFT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_BODY
		
	]
	
	
	return layerArray;
};