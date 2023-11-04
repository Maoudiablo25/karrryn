﻿var Remtairy = Remtairy || {};
Remtairy.Enemy = Remtairy.Enemy || {};

//=============================================================================
 /*:
 * @plugindesc Enemy
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const AILEVEL_AGILITY_MODIFIER = 0.7;
const AILEVEL_ENEMY_DIDNOTHING_BONUS = 60;
const AILEVEL_ENEMY_DIDNOTHING_TIMES = 15;
const AILEVEL_ENEMY_HORNY_BONUS = 25;
const AILEVEL_ENEMY_DIZZY_BONUS = -15;
const AILEVEL_KARRYN_INBATTLE_ONANI_BONUS = -40;

const ANGER_ENEMY_ANGRY_EFFECT = 100;
const ANGER_ENEMY_HORNY_EFFECT = -50;
const ANGER_ENEMY_VIRGIN_EFFECT = -50;
const ANGER_ARTISAN_MEAL_BITCH_EFFECT = -35;
const ANGER_CALFSKIN_BELT_EFFECT = 20;
const ANGER_BRAND_HANDBAG_EFFECT = 40;

const VAR_AP_PER_EJC = 1.05;
const VAR_OP_PER_EJC = 1.12;

const VAR_CHARM_MULTIPLER_WHEN_CHARMING = 2.4;
const VAR_CHARM_MULTIPLER_WHEN_LESS = 0.75;
const VAR_CHARM_PLEASURE_DIVIDER_WHEN_ERECT = 0.33;

const ENEMY_POSE_NONE = 0;
const ENEMY_POSE_MASTER = 1;
const ENEMY_POSE_HELPER = 2;

const ENEMYTYPE_GUARD_TAG = 'guard';
const ENEMYTYPE_THUG_TAG = 'thug';
const ENEMYTYPE_GOBLIN_TAG = 'goblin';
const ENEMYTYPE_PRISONER_TAG = 'prisoner';
const ENEMYTYPE_ORC_TAG = 'orc';
const ENEMYTYPE_YASU_TAG = 'yasu';
const ENEMYTYPE_TONKIN_TAG = 'tonkin';
const ENEMYTYPE_CARGILL_TAG = 'cargill';
const ENEMYTYPE_ARON_TAG = 'aron';
const ENEMYTYPE_NOINIM_TAG = 'noinim';
const ENEMYTYPE_ROGUE_TAG = 'rogue';
const ENEMYTYPE_SLIME_TAG = 'slime';
const ENEMYTYPE_NERD_TAG = 'nerd';
const ENEMYTYPE_LIZARDMAN_TAG = 'lizardman';
const ENEMYTYPE_HOMELESS_TAG = 'homeless';
const ENEMYTYPE_WEREWOLF_TAG = 'werewolf';
const ENEMYTYPE_YETI_TAG = 'yeti';

const ENEMYTYPE_BARTABLE_TAG = 'bartable';
const ENEMYTYPE_VISITOR_MALE_TAG = 'visitorm';
const ENEMYTYPE_VISITOR_FEMALE_TAG = 'visitorf';

const ENEMYCOCK_DEFAULT_TAG = 'human_half_normal';

const ENEMY_DEFAULT_EJACULATION_AMOUNT = 8;
const ENEMY_DEFAULT_EJACULATION_RANGE = 6;

const ENEMY_BOSS_VICTORY_ORDER_GAIN = 1;

const ENEMY_BATTLERNAME_BLUSH_SUFFIX = '_blush';
const ENEMY_BATTLERNAME_CHARGE_SUFFIX = '_charge';
const ENEMY_BATTLERNAME_ANGRY_SUFFIX = '_angry';
const ENEMY_BATTLERNAME_DAMAGED_SUFFIX = '_damaged';

const ENEMY_BATTLERNAME_MAX_NUM_GUARD = 2;
const ENEMY_BATTLERNAME_MAX_NUM_PRISONER = 5;
const ENEMY_BATTLERNAME_MAX_NUM_GOBLIN = 3;
const ENEMY_BATTLERNAME_MAX_NUM_THUG = 4;
const ENEMY_BATTLERNAME_MAX_NUM_ORC = 2;

const ENEMY_BLANK_FULLSIZE_BATTLERNAME = 'blank_fullsize'; //default
const ENEMY_BLANK_HALFSIZE_BATTLERNAME = 'blank_halfsize';
const ENEMY_BLANK_DOT_BATTLERNAME = 'blank_dot';

///////
/////////////
// Game Enemy
//////////////
//////////////

Game_Enemy.prototype.initialize = function(enemyId, x, y, wanted, originalEnemyId) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(enemyId, x, y, wanted, originalEnemyId);
};

Remtairy.Enemy.Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y, wanted, originalEnemyId) {
	this._lvldParams = [[1],[1],[1],[1],[1],[1],[1],[1]];
    Remtairy.Enemy.Game_Enemy_setup.call(this, enemyId, x, y);
	this.setupEnemyTags(originalEnemyId);
	this.resetPoseStatus();
	this.resetAllTargetsForSex();
	this.resetTemporarySelectionShow();
	this.setUsedSkillThisTurn(false);
	this.setupUsingBodySlot();
	this.setupOrderAndFatigueGain();
	this.setupSexSkillLevels();
	this.setupEjaculation();
	this.setupAnger();
	this.setupStartingStance();
	this.setupAISkills();
	this.setupSelectionVariables();
	this.resetOrgasmSkills();
	this.resetEnemyTurnVariables();
	this.resetEvadeReductionStage();
	this.setupMinionThrowVariables();
	
	this.resetCustomEnemySprite();
	this.setupRandomEnemyName();
	
	this.setupWanted(wanted);
	this.setupEnemyTempRecords();
	if(!wanted) {
		this.setupEnemyType();
		//this.setupEnemyCock();
		this.setupEnemyLvl(); // has to go after type
		this.setupEnemyRecords();
	}
	this.setupEnemyCock();
	this.setupEnemyInitialPleasure();
	this.setCanBeKissed(true);
	
	this._visitor_isFan = false;
	this._visitor_isPervert = false;
	this._enemySpotsId = 0;
};

Remtairy.Enemy.Game_Enemy_onBattleStart = Game_Enemy.prototype.onBattleStart;
Game_Enemy.prototype.onBattleStart = function() {
    Remtairy.Enemy.Game_Enemy_onBattleStart.call(this);
    this.recoverAll();
	this.recoverAll();
	this.setupSexToys();
	this.hornyPrefixEffect();
	this.angryPrefixEffect();
};

////////
// Set up
/////////

Game_Enemy.prototype.setupEnemyTags = function(originalEnemyId) {
	this._tagUnique = this.enemy().hasTag(TAG_UNIQUE_ENEMY);
	this._tagOnlooker = this.enemy().hasTag(TAG_ONLOOKER);
	this._tagSupporter = this.enemy().hasTag(TAG_SUPPORTER);
	this._tagDontDrawName = this.enemy().hasTag(TAG_DONT_DRAW_NAME);
	this._tagDontDrawGauge = this.enemy().hasTag(TAG_DONT_DRAW_GAUGE);
	this._tagDontDrawImage = this.enemy().hasTag(TAG_DONT_DRAW_IMAGE);
	this._tagAlwaysShowStates = this.enemy().hasTag(TAG_ALWAYS_SHOW_STATES);
	this._tagDontAddWanted = this.enemy().hasTag(TAG_DONT_ADD_WANTED);
	this._tagDontAddPrefix = this.enemy().hasTag(TAG_DONT_ADD_PREFIX);
	this._tagDontMorph = this.enemy().hasTag(TAG_DONT_MORPH);
	this._tagDontDrawSelection = this.enemy().hasTag(TAG_DONT_DRAW_SELECTION);
	this._tagNoPptRegen = this.enemy().hasTag(TAG_NO_PPT_REGEN);
	this._tagSelectionFlashWhiter = this.enemy().hasTag(TAG_SELECTION_FLASH_WHITER);
	this._tagDontCountSubdued = this.enemy().hasTag(TAG_DONT_COUNT_SUBDUED);
	this._tagHasDamagedFace = this.enemy().hasTag(TAG_HAS_DAMAGED_FACE);
	
	if(originalEnemyId) {
		let originalEnemy = $dataEnemies[originalEnemyId];
		if(!this._tagOnlooker && originalEnemy.hasTag(TAG_ONLOOKER)) this._tagOnlooker = true;
		if(!this._tagDontDrawName && originalEnemy.hasTag(TAG_DONT_DRAW_NAME)) this._tagDontDrawName = true;
		if(!this._tagDontDrawGauge && originalEnemy.hasTag(TAG_DONT_DRAW_GAUGE)) this._tagDontDrawGauge = true;
		if(!this._tagDontDrawImage && originalEnemy.hasTag(TAG_DONT_DRAW_IMAGE)) this._tagDontDrawImage = true;
	}
};


Game_Enemy.prototype.setupOrderAndFatigueGain = function() {
	this._orderGain = this.enemy().dataOrderGain / 10;
	this._fatigueGain = this.enemy().dataFatigueGain / 10;
};

//Initial Pleasure
//Initial Enemy Pleasure
Game_Enemy.prototype.setupEnemyInitialPleasure = function() {
	let initialMulti = this.enemy().dataInitialPleasure;
	this._firstTimeAroused = false;
	
	if(Karryn.isInEnemiesJoinArousedAndStayArousedPose()) {
		this.setPleasureToArousalPoint();
		this._firstTimeAroused = true;
	}
	else if(Karryn.inBattleCharm * initialMulti > this.charm) {
		let charmDiff = Karryn.inBattleCharm;
		if(Karryn.inBattleCharm < this.charm)
			charmDiff -= this.charm;
		charmDiff = Math.min(Karryn.inBattleCharm, charmDiff + Karryn.slutLvl * 0.1);
		
		initialMulti += this.enemyInitialPleasurePrefixEffect();
		initialMulti += this.enemyInitialPleasureEdicts();
		initialMulti += this.enemyInitialPleasurePassives();
		
		let initialPleasure = Math.max(1, (charmDiff) * initialMulti);
		
		if(initialPleasure > this.arousalPoint())
			this.gainPleasure(this.arousalPoint() + Math.min(this.orgasmPoint() * 0.1, (initialPleasure - this.arousalPoint()) * 0.15));
		else 
			this.gainPleasure(initialPleasure)
	}

};

Game_Enemy.prototype.setupSexSkillLevels = function() {
	this._baseTalkLvl = Math.round(this.enemy().dataTalkLevel * 10) / 10;
	this._baseSightLvl = Math.round(this.enemy().dataSightLevel * 10) / 10;
	this._basePettingLvl = Math.round(this.enemy().dataPettingLevel * 10) / 10;
	this._baseToyLvl = Math.round(this.enemy().dataToyLevel * 10) / 10;
	this._baseSemenLvl = Math.round(this.enemy().dataSemenLevel * 10) / 10;
	this._baseStripLvl = Math.round(this.enemy().dataStripLevel * 10) / 10;
	this._baseKissLvl = Math.round(this.enemy().dataKissLevel * 10) / 10;
	this._baseHandjobLvl = Math.round(this.enemy().dataHandjobLevel * 10) / 10;
	this._baseBlowjobLvl = Math.round(this.enemy().dataBlowjobLevel * 10) / 10;
	this._baseTittyFuckLvl = Math.round(this.enemy().dataTittyFuckLevel * 10) / 10;
	this._basePussySexLvl = Math.round(this.enemy().dataPussySexLevel * 10) / 10;	
	this._baseAnalSexLvl = Math.round(this.enemy().dataAnalSexLevel * 10) / 10;
	this._baseMasturbateLvl = Math.round(this.enemy().dataMasturbateLevel * 10) / 10;
	this._baseMasochismLvl = Math.round(this.enemy().dataMasochismLevel * 10) / 10;
	this._baseSadismLvl = Math.round(this.enemy().dataSadismLevel * 10) / 10;
};

//unused
Game_Enemy.prototype.setupStench = function() {
	var min = this.enemy().dataStench;
	var range = this.enemy().dataStenchRange;
	
	if(min === 0 && range === 0) return;

	this.setStench(Math.max(Math.randomInt(range) + min, 0));
};
//unused
Game_Enemy.prototype.setupSmegma = function() {
	var min = this.enemy().dataSmegma;
	var range = this.enemy().dataSmegmaRange;
	
	if(min === 0 && range === 0) return;

	this._smegma = Math.max(Math.randomInt(range) + min, 0);
};

Game_Enemy.prototype.setupEjaculation = function() {
	this._ejaculationCount = 0;
	
	let ejStock = Math.floor(this.enemy().dataEjaculationStock);
	if(this.enemy().dataEjaculationStock > 1 && this.enemy().dataEjaculationStock < 2) {
		if(Math.random() < this.enemy().dataEjaculationStock - 1)
			ejStock++;
	}
	else if(this.enemy().dataEjaculationStock > 2 && this.enemy().dataEjaculationStock < 3) {
		if(Math.random() < this.enemy().dataEjaculationStock - 2)
			ejStock++;
	}
	
	this._ejaculationStock = ejStock;

	let min = this.enemy().dataEjaculationAmt;
	let range = this.enemy().dataEjaculationRange;
	this._ejaculationVolume = Math.max(Math.randomInt(range) + min, 0);
};

Game_Enemy.prototype.setupAnger = function() {
	this._baseAnger = this.enemy().dataBaseAnger;
};

Game_Enemy.prototype.setupSexToys = function() {
	this._hasPinkRotor = false;
	this._hasPenisDildo = false;
	this._hasAnalBeads = false;
	
	if(this.enemy().hasTag(TAG_HAS_PINK_ROTOR)) this._hasPinkRotor = true;
	if(this.enemy().hasTag(TAG_HAS_PENIS_DILDO)) this._hasPenisDildo = true;
	if(this.enemy().hasTag(TAG_HAS_ANAL_BEADS)) this._hasAnalBeads = true;
	
	let dontAddToyStateIconException = false;
	
	if(Karryn.isInWaitressServingPose() || $gameParty.isInGloryBattle) 
		dontAddToyStateIconException = true;
	
	if(dontAddToyStateIconException) return;
	
	if(this._hasPinkRotor) {
		this.addState(STATE_ENEMY_HAS_PINK_ROTOR_ID);
	}
	if(this._hasPenisDildo) {
		this.addState(STATE_ENEMY_HAS_PENIS_DILDO_ID);
	}
	if(this._hasAnalBeads) {
		this.addState(STATE_ENEMY_HAS_ANAL_BEADS_ID);
	}
};

Game_Enemy.prototype.setupStartingStance = function() {
	let stance = this.enemy().dataStartingStance;

	if(stance == STANCE_RANDOM || stance == 'random') {
		let ranNum = Math.randomInt(3);
		if(ranNum === 1) stance = STANCE_SLASH;
		else if(ranNum === 2) stance = STANCE_BLUNT;
		else stance = STANCE_PIERCE;
	}

	if(stance === STANCE_SLASH || stance == 'slash') this.changeStanceToSlash();
	else if(stance === STANCE_PIERCE || stance == 'pierce') this.changeStanceToPierce();
	else if(stance === STANCE_BLUNT || stance == 'blunt') this.changeStanceToBlunt();
};


Game_Enemy.prototype.setupAISkills = function() {
	if(!this.enemy().dataAIAttackSkills) this._aiAttackSkills = false;
	else this._aiAttackSkills = this.enemy().dataAIAttackSkills.slice(0);
	
	if(!this.enemy().dataAIChargeSkills) this._aiChargeSkills = false;
	else this._aiChargeSkills = this.enemy().dataAIChargeSkills.slice(0);
	
	if(!this.enemy().dataAIPettingSkills) this._aiPettingSkills = false;
	else this._aiPettingSkills = this.enemy().dataAIPettingSkills.slice(0);
	
	if(!this.enemy().dataAITalkSightSkills) this._aiTalkSightSkills = false;
	else this._aiTalkSightSkills = this.enemy().dataAITalkSightSkills.slice(0);
	
	if(!this.enemy().dataAIPoseStartSkills) this._aiPoseStartSkills = false;
	else this._aiPoseStartSkills = this.enemy().dataAIPoseStartSkills.slice(0);
	
	if(!this.enemy().dataAIPoseJoinSkills) this._aiPoseJoinSkills = false;
	else this._aiPoseJoinSkills = this.enemy().dataAIPoseJoinSkills.slice(0);
	
	if(!this.enemy().dataAIEjaculationSkills) this._aiDefaultEjaculationSkills = false;
	else this._aiDefaultEjaculationSkills = this.enemy().dataAIEjaculationSkills.slice(0);
	
};

Game_Enemy.prototype.setupSelectionVariables = function() {
	this._hasSelectionVariables = false;
	this._selectionAoeBufferX = 0;
	this._selectionAoeBufferY = 0;
	this._selectionAoeRow = 0;
	this._selectionAoeColumn = 0;
	this._specialSelectionName = this.enemy().dataSpecialSelectionName;
};


Game_Enemy.prototype.startWarmups = function() {
	let warmup = 0;
	
	warmup = this.warmupEval_rogueCharge();
	this.setWarmup(SKILL_ROGUE_CHARGE_ID, warmup);
	
	warmup = this.warmupEval_rogueTrip();
	this.setWarmup(SKILL_ROGUE_TRIP_ID, warmup);
	
	warmup = this.warmupEval_rogueDisarm();
	this.setWarmup(SKILL_ROGUE_DISARM_ID, warmup);
	
	warmup = this.warmupEval_mobCallLizardman();
	this.setWarmup(SKILL_LIZARDMAN_CHARGE_ID, warmup);
	this.setWarmup(SKILL_LIZARDMAN_CHARGE_PLUS_ONE_ID, warmup + 1);
	this.setWarmup(SKILL_LIZARDMAN_CHARGE_PLUS_TWO_ID, warmup + 2);
	this.setWarmup(SKILL_LIZARDMAN_CALL_ID, warmup);

	warmup = 1;
	this.setWarmup(SKILL_ENEMY_STRONG_PUNCH_BLUNT_ID, warmup);
	this.setWarmup(SKILL_ENEMY_WILD_SWING_BLUNT_ID, warmup);
	this.setWarmup(SKILL_ENEMY_DOUBLE_THRUSTS_PIERCE_ID, warmup);
	this.setWarmup(SKILL_ENEMY_LUNGE_PIERCE_ID, warmup);
	this.setWarmup(SKILL_ENEMY_WEREWOLF_TWO_CLAWS_ID, warmup);
};

///////
// Enemy Type
//////////////

Game_Enemy.prototype.setupEnemyType = function() {
	this._enemyType = this.enemy().dataEnemyType;
};

Game_Enemy.prototype.enemyType = function() {
	return this._enemyType;
};

Object.defineProperty(Game_Enemy.prototype, "isPrisonGuard", {
	get: function () { return this.isGuardType; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isInmate", {
	get: function () { return (!this.isPrisonGuard && !this.isVisitorType && this.enemyType() !== 0); }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isUnique", {
	get: function () { return this._tagUnique; }, configurable: true
});

Object.defineProperty(Game_Enemy.prototype, "isGuardType", {
	get: function () { return this.enemyType() == ENEMYTYPE_GUARD_TAG || this.isCargill || this.isYasu; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isThugType", {
	get: function () { return this.enemyType() == ENEMYTYPE_THUG_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isGoblinType", {
	get: function () { return this.enemyType() == ENEMYTYPE_GOBLIN_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isPrisonerType", {
	get: function () { return this.enemyType() == ENEMYTYPE_PRISONER_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isOrcType", {
	get: function () { return this.enemyType() == ENEMYTYPE_ORC_TAG || this.isTonkin; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isBossType", {
	get: function () { return this.isYasu || this.isTonkin || this.isCargill || this.isAron || this.isNoinim; }, configurable: true
});

Object.defineProperty(Game_Enemy.prototype, "isYasu", {
	get: function () { return this.enemyType() == ENEMYTYPE_YASU_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isTonkin", {
	get: function () { return this.enemyType() == ENEMYTYPE_TONKIN_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isCargill", {
	get: function () { return this.enemyType() == ENEMYTYPE_CARGILL_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isAron", {
	get: function () { return this.enemyType() == ENEMYTYPE_ARON_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isNoinim", {
	get: function () { return this.enemyType() == ENEMYTYPE_NOINIM_TAG; }, configurable: true
});

Object.defineProperty(Game_Enemy.prototype, "isNerdType", {
	get: function () { return this.enemyType() == ENEMYTYPE_NERD_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isRogueType", {
	get: function () { return this.enemyType() == ENEMYTYPE_ROGUE_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isSlimeType", {
	get: function () { return this.enemyType() == ENEMYTYPE_SLIME_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isLizardmanType", {
	get: function () { return this.enemyType() == ENEMYTYPE_LIZARDMAN_TAG || this.isAron; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isHomelessType", {
	get: function () { return this.enemyType() == ENEMYTYPE_HOMELESS_TAG; }, configurable: true
});

Object.defineProperty(Game_Enemy.prototype, "isWerewolfType", {
	get: function () { return this.enemyType() == ENEMYTYPE_WEREWOLF_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isYetiType", {
	get: function () { return this.enemyType() == ENEMYTYPE_YETI_TAG || this.isNoinim; }, configurable: true
});


Object.defineProperty(Game_Enemy.prototype, "isMonstrousType", {
	get: function () { return this.isSlimeType || this.isWerewolfType || this.isYetiType; }, configurable: true
});

Object.defineProperty(Game_Enemy.prototype, "isBarTableType", {
	get: function () { return this.enemyType() == ENEMYTYPE_BARTABLE_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isVisitorMaleType", {
	get: function () { return this.enemyType() == ENEMYTYPE_VISITOR_MALE_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isVisitorFemaleType", {
	get: function () { return this.enemyType() == ENEMYTYPE_VISITOR_FEMALE_TAG; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isVisitorType", {
	get: function () { return this.isVisitorMaleType || this.isVisitorFemaleType; }, configurable: true
});



///////////
// Enemy Stance
//////////////

Game_Enemy.prototype.dontShowStanceState = function() {
	return Karryn.isInDefeatedPose() || Karryn.isInJobPose();
};
Game_Enemy.prototype.showSlashStanceState = function() {
	if(this.dontShowStanceState()) return false;
	return this.isSlashStance() && !this.isInAPose();
};
Game_Enemy.prototype.showPierceStanceState = function() {
	if(this.dontShowStanceState()) return false;
	return this.isPierceStance() && !this.isInAPose();
};
Game_Enemy.prototype.showBluntStanceState = function() {
	if(this.dontShowStanceState()) return false;
	return this.isBluntStance() && !this.isInAPose();
};
Game_Enemy.prototype.showNoneStanceState = function() {
	if(this.dontShowStanceState()) return false;
	return this.isNoneStance() && !this.isInAPose();
};

//////
// State
///////

Game_Enemy.prototype.dontDisplayStateLogMessages = function() {
	if(this.isVisitorType) return true;
	if($gameParty.isInGloryBattle) return true;
	return !this.isAlive();
};

/////////
// Enemy Overblow Protection
///////////////////

Game_Enemy.prototype.overblowProtectionRate = function() {
	let op = this.enemy().dataOverblowProtection * 0.01;

	if(!this.isBossType) {
		if(Karryn.hasEdict(EDICT_HALBERD_OFFENSIVE_FOUR) && Karryn.isUsingHalberd()) op += 0.3;
		else if(Karryn.hasEdict(EDICT_HALBERD_OFFENSIVE_TWO) && Karryn.isUsingHalberd()) op += 0.15;
	}
	
	if(this.isAron) {
		if(this.hasLessThanOneThirdStamina())
			op = 0.12;
		else
			op = 0.34;
	}
	else if(this.isNoinim) {
		if(this.hasLessThanOneThirdStamina())
			op = 0.12;
		else
			op = 0.25;
	}
	
	op *= this.prefixOverblowProtectionRateEffect();
	
	if(this.isGuarding) {
		op *= 0.5;
	}
	
	if(this.isSkeweredThisTurn() && op < 1) {
		op *= 0.66;
	}

	return Math.max(op, 0.1);
};


///////
// Enemy Cock
//////////////

Game_Enemy.prototype.setupEnemyCock = function() {
	let enemyCock = ENEMYCOCK_DEFAULT_TAG;
	let enemyFaceName = '';

	if(this.isWanted) {
		enemyFaceName = this._wantedBattlerName;
	}
	else if(this.isUnique || this.isBossType) {
		enemyFaceName = this.enemy().battlerName;
	}
	else {
		enemyFaceName = this.enemyType() + '_' + this.battlerNameNum();
	}
	
	if(this.isBossType) {
		if(this.isYasu) 
			enemyCock = 'human_half_normal';
		else if(this.isTonkin) 
			enemyCock = 'orc_normal';
		else if(this.isCargill) 
			enemyCock = 'human_cut_pale';
		else if(this.isAron) 
			enemyCock = 'lizardman_dark';
		else if(this.isNoinim) 
			enemyCock = 'yeti';
	}
	else if(this.isPrisonerType) {
		if(enemyFaceName.includes('prisoner_02') || enemyFaceName.includes('prisoner_05') || enemyFaceName.includes('prisoner_07') || enemyFaceName.includes('prisoner_13'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('prisoner_11') || enemyFaceName.includes('prisoner_17'))
			enemyCock = 'human_skin_normal';
		else if(enemyFaceName.includes('prisoner_03'))
			enemyCock = 'human_cut_normal';
		else if(enemyFaceName.includes('prisoner_09') || enemyFaceName.includes('prisoner_12'))
			enemyCock = 'human_cut_pale';
		else if(enemyFaceName.includes('prisoner_08'))
			enemyCock = 'human_half_black';
		else if(enemyFaceName.includes('prisoner_16'))
			enemyCock = 'human_cut_black';
		else
			enemyCock = 'human_half_normal';
	}
	else if(this.isGuardType) {
		if(enemyFaceName.includes('guard_04'))
			enemyCock = 'human_cut_pale';
		else if(enemyFaceName.includes('guard_05'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('guard_03') || enemyFaceName.includes('guard_07'))
			enemyCock = 'human_half_normal';
		else if(enemyFaceName.includes('guard_09'))
			enemyCock = 'human_half_black';
		else if(enemyFaceName.includes('guard_08'))
			enemyCock = 'human_cut_black';
		else
			enemyCock = 'human_cut_normal';
	}
	else if(this.isThugType) {
		if(enemyFaceName.includes('thug_01') || enemyFaceName.includes('thug_02') || enemyFaceName.includes('thug_06') || enemyFaceName.includes('thug_14'))
			enemyCock = 'human_half_normal';
		else if(enemyFaceName.includes('thug_04') || enemyFaceName.includes('thug_08') || enemyFaceName.includes('thug_09') || enemyFaceName.includes('thug_13'))
			enemyCock = 'human_cut_pale';
		else if(enemyFaceName.includes('thug_07') || enemyFaceName.includes('thug_15'))
			enemyCock = 'human_cut_black';
		else
			enemyCock = 'human_cut_normal';
	}
	else if(this.isGoblinType) {
		if(enemyFaceName.includes('goblin_02') || enemyFaceName.includes('goblin_06') || enemyFaceName.includes('goblin_08') || enemyFaceName.includes('goblin_11'))
			enemyCock = 'goblin_dark';
		else
			enemyCock = 'goblin_normal';
	}
	else if(this.isNerdType) {
		if(enemyFaceName.includes('nerd_12') || enemyFaceName.includes('nerd_11'))
			enemyCock = 'human_half_normal';
		else if(enemyFaceName.includes('nerd_04') || enemyFaceName.includes('nerd_13') || enemyFaceName.includes('nerd_05'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('nerd_10'))
			enemyCock = 'human_skin_black';
		else if(enemyFaceName.includes('nerd_06') || enemyFaceName.includes('nerd_02') || enemyFaceName.includes('nerd_07'))
			enemyCock = 'human_skin_normal';
		else
			enemyCock = 'human_skin_pale';
	}
	else if(this.isRogueType) {
		if(enemyFaceName.includes('rogue_07') || enemyFaceName.includes('rogue_02') || enemyFaceName.includes('rogue_05'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('rogue_09'))
			enemyCock = 'human_half_black';
		else
			enemyCock = 'human_half_normal';
	}
	else if(this.isSlimeType) {
		enemyCock = 'slime';
	}
	else if(this.isOrcType) {
		if(enemyFaceName.includes('orc_02'))
			enemyCock = 'orc_dark';
		else
			enemyCock = 'orc_normal';
	}
	else if(this.isLizardmanType) {
		if(enemyFaceName.includes('lizardman_03') || enemyFaceName.includes('lizardman_04'))
			enemyCock = 'lizardman_dark';
		else
			enemyCock = 'lizardman_normal';
	}
	else if(this.isHomelessType) {
		if(enemyFaceName.includes('homeless_02') || enemyFaceName.includes('homeless_05'))
			enemyCock = 'human_skin_pale';
		else if(enemyFaceName.includes('homeless_04'))
			enemyCock = 'human_skin_black';
		else
			enemyCock = 'human_skin_normal';
	}
	else if(this.isWerewolfType) {
		enemyCock = 'werewolf';
	}
	else if(this.isYetiType) {
		enemyCock = 'yeti';
	}
	else if(this.isVisitorFemaleType) {
		enemyCock = 'human';
	}
	else if(this.isVisitorType) {
		if(enemyFaceName.includes('visitorm_01'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('visitorm_02'))
			enemyCock = 'human_skin_normal';
		else if(enemyFaceName.includes('visitorm_03'))
			enemyCock = 'human_cut_pale';
		else if(enemyFaceName.includes('visitorm_04'))
			enemyCock = 'human_half_pale';
		else if(enemyFaceName.includes('visitorm_05'))
			enemyCock = 'human_half_normal';
		else if(enemyFaceName.includes('visitorm_06'))
			enemyCock = 'human_cut_black';
		else if(enemyFaceName.includes('visitorm_07'))
			enemyCock = 'human_half_black';
		else if(enemyFaceName.includes('visitorm_08'))
			enemyCock = 'human_skin_black';
		else if(enemyFaceName.includes('visitorm_09'))
			enemyCock = 'goblin_dark';
		else if(enemyFaceName.includes('visitorm_10'))
			enemyCock = 'goblin_normal';
		else {
			enemyCock = 'human_half_normal';
		}
	}
	
	this._enemyCock = enemyCock;
};

Game_Enemy.prototype.enemyCock = function() {
	return this._enemyCock;
};
 
/////////////
// Element Rate

Game_Enemy.prototype.elementRate = function(elementId) {
    let rate = this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
	let bonus = 0;
	
	rate *= this.enemyErectElementRate(elementId);
	rate *= this.enemyEdictsElementRate(elementId);
	
	if(this.isAron) {
		if(this.hasLessThanOneThirdStamina()) {
			if(elementId === ELEMENT_SLASH_ID || elementId === ELEMENT_PIERCE_ID || elementId === ELEMENT_BLUNT_ID)
				bonus -= 0.3;
		}
		
		let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
		bonus -= 0.1 * (lizardmanCount - 1);
	}
	
	let elementRate = rate + bonus;
	
	
	elementRate = Math.max(elementRate, 0);
	return elementRate;
};
 
/////////////
// Elemental Weakness
/////////////////

Game_Enemy.prototype.weaknessToKiss = function() { 
	let value = this.elementRate(ELEMENT_KISS_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToPetting = function() { 
	let value = this.elementRate(ELEMENT_PETTING_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToHandjob = function() { 
	let value = this.elementRate(ELEMENT_HANDJOB_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToBlowjob = function() { 
	let value = this.elementRate(ELEMENT_BLOWJOB_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToRimjob = function() { 
	let value = this.elementRate(ELEMENT_RIMJOB_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToFootjob = function() { 
	let value = this.elementRate(ELEMENT_FOOTJOB_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToTittyFuck = function() { 
	let value = this.elementRate(ELEMENT_TITTYFUCK_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToPussy = function() { 
	let value = this.elementRate(ELEMENT_PUSSY_WEAK_ID);
	return value;
};

Game_Enemy.prototype.weaknessToAnal = function() { 
	let value = this.elementRate(ELEMENT_ANAL_WEAK_ID);
	return value;
};

////////
// Sex Level
/////////////

Game_Enemy.prototype.talkLvl = function() {
	let value = this._baseTalkLvl;
	
	if(this.isGuardType) {
		if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_THREE_ID)) value += 1.5;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_TWO_ID)) value += 1;
		else if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_GUARD_ONE_ID)) value += 0.5;
	}
	
	return value + this.enemyEdictTalkLvl() + this.prefixTalkLvl(this._baseTalkLvl);
};
Game_Enemy.prototype.sightLvl = function() {
	let value = this._baseSightLvl;
	
	return value + this.enemyEdictSightLvl() + this.prefixSightLvl(this._baseSightLvl);
};

Game_Enemy.prototype.pettingLvl = function() {
	let value = this._basePettingLvl;
	if(Karryn.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT) && !this.isVisitorType) {
		value += 1;
	}
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._basePettingLvl);
};
Game_Enemy.prototype.toyLvl = function() {
	let value = this._baseToyLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 2;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictToyLvl() + this.prefixToyLvl(this._baseToyLvl);
};
Game_Enemy.prototype.semenLvl = function() {
	let value = this._baseSemenLvl;
	
	return value + this.enemyEdictSemenLvl() + this.prefixSemenLvl(this._baseSemenLvl);
};
Game_Enemy.prototype.stripLvl = function() {
	let value = this._baseStripLvl;

	return value + this.enemyEdictStripLvl() + this.prefixStripLvl(this._baseStripLvl);
};

Game_Enemy.prototype.kissLvl = function() {
	let value = this._baseKissLvl;
	if(Karryn.hasEdict(EDICT_RESEARCH_APHRODISIAC_CONTRACT) && !this.isVisitorType) {
		value += 2;
	}
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._baseKissLvl);
};
Game_Enemy.prototype.handjobLvl = function() {
	let value = this._baseHandjobLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._baseHandjobLvl);
};
Game_Enemy.prototype.blowjobLvl = function() {
	let value = this._baseBlowjobLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._baseBlowjobLvl);
};
Game_Enemy.prototype.tittyFuckLvl = function() {
	let value = this._baseTittyFuckLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
		
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._baseTittyFuckLvl);
};
Game_Enemy.prototype.pussySexLvl = function() {
	let value = this._basePussySexLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
	
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._basePussySexLvl);
};
Game_Enemy.prototype.analSexLvl = function() {
	let value = this._baseAnalSexLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 3;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1.5;
	
	if(this.isStateAffected(STATE_ORC_COMMANDING_PRESENCE_ID) && Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS))
		value += 1.5;
	
	return value + this.enemyEdictSexLvl() + this.prefixSexLvl(this._baseAnalSexLvl);
};
Game_Enemy.prototype.masturbateLvl = function() {
	let value = this._baseMasturbateLvl;
	
	if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_TWO_ID))
		value -= 2;
	else if(this.isStateAffected(STATE_YETI_HEAT_ENEMY_ONE_ID))
		value -= 1;
	
	return value + this.enemyEdictMasturbateLvl() + this.prefixMasturbateLvl(this._baseMasturbateLvl);
};
Game_Enemy.prototype.masochismLvl = function() {
	return this._baseMasochismLvl + this.prefixMasochismLvl(this._baseMasochismLvl);
};
Game_Enemy.prototype.sadismLvl = function() {
	return this._baseSadismLvl + this.prefixSadismLvl(this._baseSadismLvl);
};

//////
// Anger
///////

Game_Enemy.prototype.anger = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let value = this._baseAnger;
	if(this.isPrisonGuard) value += this.prisonGuardEdictAnger();
	else if(this.isInmate) value += this.inmateEdictAnger();
	if(this.isHorny) {
		value += ANGER_ENEMY_HORNY_EFFECT;
		if(this.isWerewolfType) value += ANGER_ENEMY_HORNY_EFFECT * 3;
	}
	if(this.isAngry) value += ANGER_ENEMY_ANGRY_EFFECT;
	if(this.hasVirginPrefix() && Karryn.hasPassive(PASSIVE_VIRGINS_TOTAL_TWO_ID)) 
		value += ANGER_ENEMY_VIRGIN_EFFECT;
	
	value += actor.passiveEnemyAngerEffect(this);
	value += actor.titleInmateAngerEffect(this);
	
	if(actor.ateArtisanMeal(ARTISAN_MEAL_BITCH)) {
		if(actor.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE)) value += ANGER_ARTISAN_MEAL_BITCH_EFFECT * 1.5;
		else value += ANGER_ARTISAN_MEAL_BITCH_EFFECT;
	}
	if(actor.isEquippingThisAccessory(MISC_CALFSKINBELT_ID)) value += ANGER_CALFSKIN_BELT_EFFECT;
	if(actor.isEquippingThisAccessory(MISC_HANDBAG_ID)) value += ANGER_BRAND_HANDBAG_EFFECT;
	
	if($gameTemp.isPlaytest()) {
		if(TESTING_ENEMY_MAX_ANGER) return 999;
		else if(TESTING_ENEMY_NO_ANGER) return 0;
	}
	
	return value;
};

Game_Enemy.prototype.addAngryState = function() {
	if(this.isStateAffected(STATE_RESIST_ANGRY_ID)) return;
	if(Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_TWO_ID) && this.isNerdType) return;
	if(this.isNotSupporter) {
		this.removeState(STATE_HORNY_ID);
		if(this.isSlimeType) 
			this.addState(STATE_SLIME_ANGRY_ID);
		else if(this.isOrcType && !this.isTonkin) {
			this.addState(STATE_ORC_ANGRY_ID);
			if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM)) {
				$gameTroop.removeOrcCommandingPresenceFromAllEnemies(this);
			}
			else {
				$gameTroop.removeOrcDefensivePresenceFromAllEnemies(this);
			}
		}
		else
			this.addState(STATE_ANGRY_ID);
	}
};

Game_Enemy.prototype.removeAngryState = function() {
	this.removeState(STATE_ANGRY_ID);
	this.removeState(STATE_SLIME_ANGRY_ID);
	this.removeState(STATE_ORC_ANGRY_ID);
};


//////
// Pleasure
///////

Game_Enemy.prototype.setPleasure = function(value) {
	this.setTp(value); 
	if(this.isAroused() && !this._firstTimeAroused) {
		this._firstTimeAroused = true;
		Karryn.gainUncommittedCharmExp(16, this.enemyExperienceLvl());
	}
};

Game_Enemy.prototype.isAroused = function() { 
	if(!DEBUG_MODE) return false;
	return this.pleasure >= this.arousalPoint() && this.hasEjaculationStock();
};

Game_Enemy.prototype.arousalPoint = function() { 
	var value = this._arousalBasePoint + this.end * this.enemy().dataArousalPoint + this.enemyLvl() * VAR_AP_PER_CLVL;
	
	if(this.isPrisonGuard) value *= this.prisonGuardEdictArousalPoint();
	else if(this.isInmate) value *= this.inmateEdictArousalPoint();
	
	for(var i = 0; i < this._ejaculationCount; i++) {
		value *= VAR_AP_PER_EJC;
	}

	return Math.round(value);
};
Game_Enemy.prototype.orgasmPoint = function() { 
	let value = this._orgasmBasePoint + this.end * this.enemy().dataOrgasmPoint + this.enemyLvl() * VAR_OP_PER_CLVL;
	
	if(this.isPrisonGuard) value *= this.prisonGuardEdictOrgasmPoint();
	else if(this.isInmate) value *= this.inmateEdictOrgasmPoint();
	
	for(let i = 0; i < this._ejaculationCount; i++) {
		value *= VAR_OP_PER_EJC;
	}
	
	return Math.round(value);
};

//TRG = Pleasure/Per Turn during regen phase
//Pleasure regen
Game_Enemy.prototype.bonusPpt = function() { 
	if(this._tagNoPptRegen || Karryn.isInEnemiesDontRegenPleasurePose()) return 0;
	
	if($gameParty.isInGloryBattle) return this.bonusPpt_gloryBattle();
	
	let karrynCharm = Karryn.inBattleCharm;
	let enemyCharmReq = this.charm;
	
	if(this.enemy().params[PARAM_CHARM_ID] >= 999) return 0;
	
	let pleasureGain = 0;
	if(enemyCharmReq > karrynCharm) {
		pleasureGain = Math.floor(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_LESS);
	}
	else {
		pleasureGain = Math.round(karrynCharm * VAR_CHARM_MULTIPLER_WHEN_CHARMING - enemyCharmReq);
	}
	
	if(this.isAroused()) {
		pleasureGain = Math.floor(pleasureGain * VAR_CHARM_PLEASURE_DIVIDER_WHEN_ERECT);
	}
	
	pleasureGain *= this.bonusPpt_receptionistBattle();
	
	return Math.round(Math.min(this.orgasmPoint() * 0.2, pleasureGain));
};

/////////////////////////////
// Get Order Gain Fatigue Gain Values
//////////////////////////////

Game_Enemy.prototype.getOrderGainValue = function() {
	let orderGain = this._orderGain;
	let multipler = 1;
	
	if(this.isWanted) multipler *= 2;
	
	if(Karryn.isInDefeatedPose() || Karryn.isInJobPose()) multipler *= 0.33;
	
	return orderGain * multipler;
};

Game_Enemy.prototype.getFatigueGainValue = function() {
	return this._fatigueGain;
};

//////////
// Used Skill This Turn
/////////////////

Game_Enemy.prototype.usedSkillThisTurn = function() {
	return this._usedSkillThisTurn;
};
Game_Enemy.prototype.setUsedSkillThisTurn = function(value) {
	this._usedSkillThisTurn = value;
};

//////////
// Stench
/////////
//unused
Game_Enemy.prototype.stenchLvl = function() { 
	var value = this.stench;
	value += this._smegma * 3;
	return value;
};

//////////
// Ejaculation Volume
/////////

Game_Enemy.prototype.ejaculationVolume = function(multipler) {
	if(!multipler) multipler = 1;	
	let value = this._ejaculationVolume * multipler;
	if(this.isHorny) value *= 1.2;

	if(this.isPrisonGuard) value *= this.prisonGuardEdictEjaculationVolume();
	else if(this.isInmate) value *= this.inmateEdictEjaculationVolume();
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	value *= actor.titleEnemyEjaculationVolume(this);
	
	value *= this.prefixEjaculationVolumeEffect();

	let leftover = this.pleasure - this.orgasmPoint();
	if(leftover > 0)
		value *= (1 + leftover / this.orgasmPoint());
	
	let range = Math.round(value * 0.25);
	value -= Math.randomInt(range);
	value += Math.randomInt(range);
	
	return Math.min(Math.ceil(value), this.energy);
};

////////
// Ejaculation Stock

Game_Enemy.prototype.hasEjaculationStock = function() {
	return this._ejaculationStock >= 1;
};

Game_Enemy.prototype.hasNoMoreEjaculationStockOrEnergy = function() {
	return !this.hasEjaculationStock() || this.energy < 1;
};

////////
// AI Level
////////////

Game_Enemy.prototype.aiLevel = function() {
	if(this.isVisitorMaleType || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle) return 1;
	if(!this.hasEjaculationStock() && !Karryn.isInNoEjaculationStockStillContinuesPose()) return 0;
	if(this.hasNoStamina()) return 0;
	if(this.isChargedUp() || $gameParty.isInReceptionistBattle) return 1;
	if(Prison.easyMode() && ConfigManager.cheatEnemyAlwaysAct) return 1;
	
	let level = this.enemy().aiLevel;

	if(Karryn.isInWaitressServingPose() && this._bar_TimelimitAngryLeaving === -1)
		level -= 0.4;

	let mod = 0;
	if(this.isHorny) mod += AILEVEL_ENEMY_HORNY_BONUS;
	
	if(this.isStateAffected(STATE_DIZZY_ID)) mod += AILEVEL_ENEMY_DIZZY_BONUS;
	
	if(Karryn.isInMasturbationInBattlePose()) mod += AILEVEL_KARRYN_INBATTLE_ONANI_BONUS;
	else if(!Karryn.isInSexPose()) mod += (this.agi - Karryn.agi) * AILEVEL_AGILITY_MODIFIER;
	
	mod += this._didNothingCount * AILEVEL_ENEMY_DIDNOTHING_BONUS;
	
	if(!Karryn.isInWaitressServingPose() && !Karryn.isInMasturbationInBattlePose())
		mod += this._didNothingCountThisBattle * AILEVEL_ENEMY_DIDNOTHING_TIMES;
	
	level += mod * 0.01;
	
	if(Prison.easyMode()) level -= 0.1;
	else if(Prison.normalMode()) level -= 0.05;
	else level += 0.1;
	
	if(this.isPrisonGuard) level += this.prisonGuardEdictAILevel();
	else if(this.isInmate) level += this.inmateEdictAILevel();
	
	//after all other modifers
	
	let minlevel = 0.5;
	if($gameParty.isInWaitressBattle)
		minlevel = 0.15;
	
	let maxlevel = 1;
	
	level = level.clamp(minlevel,maxlevel);
    return level;
};

/////////
// Param Rate
/////////////////

Game_Enemy.prototype.paramRate = function(paramId) {
    let rate = Game_Battler.prototype.paramRate.call(this, paramId);
    rate *= this.enemy().rateParams[paramId];
	
	if(paramId === PARAM_MAXSTAMINA_ID) {
		if(this.hasMetalPrefix() && !Karryn.isInIgnoreMetalPropertiesPose())
			return 1;
	}
	else if(paramId === PARAM_CHARM_ID) {
		if(this.isHorny) rate *= 0.7;
		else if(this.isAngry) rate *= 1.5;
	}
	
	if(Prison.easyMode()) rate *= 0.8;
	
	if(this.isPrisonGuard) rate *= this.prisonGuardEdictParamRate(paramId);
	else if(this.isInmate) rate *= this.inmateEdictParamRate(paramId);
	
	if(this.isLizardmanType && !this.isAron) rate *= this.lizardmanParamRate(paramId);
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	rate *= actor.titleEnemyParamRate(paramId, this);
	
	rate *= this.enemyCharmRequirement(paramId);
	rate *= this.enemyPrefixParamRate(paramId);
	rate *= this.enemyPassiveParamRate(paramId);
	rate *= this.enemyBossParamRate(paramId);
	
    return rate;
};

Game_Enemy.prototype.enemyCharmRequirement = function(paramId) {
	let rate = 1;
	
	if(paramId === PARAM_CHARM_ID) {
		if(Karryn.isInSexPose()) {
			rate *= 0.7;
		}
		else if(Karryn.isNaked()) {
			rate *= 0.8;
		}
		else if(Karryn.isInDownPose()) {
			rate *= 0.9;
		}
		
		if(this.isHorny) {
			rate *= 0.66;
		}
	}

	return Math.max(0.5, rate);
};

Game_Enemy.prototype.enemyBossParamRate = function(paramId) {
	let rate = 1;
	let maxPity = 0.25;
	let pityPerLost = 0.05;
	
	if(Prison.easyMode()) maxPity = 0.35;
	else if(Prison.hardMode()) pityPerLost = 0.03;
	
	if(this.isBossType) {
		if(this.isTonkin) {
			if($gameVariables.value(VARIABLE_LOST_TO_TONKIN_COUNT_ID) > 0) {
				rate -= Math.min(maxPity, $gameVariables.value(VARIABLE_LOST_TO_TONKIN_COUNT_ID) * pityPerLost);
			}
		}
		else if(this.isCargill) {
			if($gameVariables.value(VARIABLE_LOST_TO_CARGILL_COUNT_ID) > 0) {
				rate -= Math.min(maxPity, $gameVariables.value(VARIABLE_LOST_TO_CARGILL_COUNT_ID) * pityPerLost);
			}
		}
		else if(this.isAron) {
			if($gameVariables.value(VARIABLE_LOST_TO_ARON_COUNT_ID) > 0) {
				rate -= Math.min(maxPity, $gameVariables.value(VARIABLE_LOST_TO_ARON_COUNT_ID) * pityPerLost);
			}
		}
		else if(this.isNoinim) {
			if($gameVariables.value(VARIABLE_LOST_TO_NOINIM_COUNT_ID) > 0) {
				rate -= Math.min(maxPity, $gameVariables.value(VARIABLE_LOST_TO_NOINIM_COUNT_ID) * pityPerLost);
			}
		}
	}
	
	return rate;
};

/////////////
// XParam
///////////////

Game_Enemy.prototype.xparamRate = function(id) {
    let value = Game_Battler.prototype.xparamRate.call(this, id);
    value *= this.enemy().rateXParams[id];
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	value *= actor.titleEnemyXParamRate(id, this);
	
	value *= this.enemyErectXParamRate(id);
	value *= this.enemyPassiveXParamRate(id);
	value *= this.enemyEdictXParamRate(id);
	
	if(id === XPARAM_EVA_ID) {
		value *= this.evadeReductionStageXParamRate();
		
		if(this.isOffBalance) {
			value *= 0.75;
		}
	}
	else if(id === XPARAM_STA_REGEN_ID) {
		if($gameParty.isInGloryBattle)
			value = 0;
	}
	else if(id === XPARAM_CRIT_ID) {
		if(this.isVisitorMaleType) {
			value *= 0.6;
		}
	}
	else if(id === XPARAM_HIT_ID) {
		if(this.isNoinim) {
			if(this.isStateAffected(STATE_MINION_AMMO_LARGE_ID)) {
				if(actor.isStateAffected(STATE_CAUTIOUS_STANCE_ID))
					value *= 0.75;
				else
					value *= 0.85;
			}
			else if(this.isStateAffected(STATE_MINION_AMMO_MED_ID)) {
				if(actor.isStateAffected(STATE_CAUTIOUS_STANCE_ID))
					value *= 0.85;
				else
					value *= 0.95;
			}
			else if(this.isStateAffected(STATE_MINION_AMMO_SMALL_ID)) {
				if(actor.isStateAffected(STATE_CAUTIOUS_STANCE_ID))
					value *= 1.05;
				else
					value *= 1.25;
			}
			else if(this.isStateAffected(STATE_MINION_AMMO_FAT_ID)) {
				if(actor.isStateAffected(STATE_CAUTIOUS_STANCE_ID))
					value *= 0.75;
				else
					value *= 0.85;
			}
		}
	}
	

    return value;
};

Game_Enemy.prototype.xparamPlus = function(id) {
    let value = Game_Battler.prototype.xparamPlus.call(this, id);
    value += this.enemy().plusXParams[id];
	
	value += this.enemyEdictXParamPlus(id);
	
	if(id === XPARAM_CRIT_ID) {
		if(TESTING_ENEMY_ALL_CRIT && $gameTemp.isPlaytest())
			value += 5;
	}
	
    return value;
};

/////////////
// SParam 
///////////////

Game_Enemy.prototype.sparamRate = function(id) {
    let value = Game_Battler.prototype.sparamRate.call(this, id);
    value *= this.enemy().rateSParams[id];
	
	value *= this.enemyPassiveSParamRate(id);
	value *= this.enemyEdictSParamRate(id);
	value *= this.enemyTitlesSParamRate(id);
	
	
	if(id === SPARAM_WPATK_ID) {
		if(this.isOffBalance) value *= 0.85;
	}		
	else if(id === SPARAM_WPDEF_ID) {
		if(this.isOffBalance) value *= 0.85;
	}
	
    return value;
};

Game_Enemy.prototype.sparamPlus = function(paramId) {
    let value = Game_Battler.prototype.sparamPlus.call(this, paramId);
    value += this.enemy().plusSParams[paramId];
	
	if(this.isPrisonGuard) value += this.prisonGuardEdictSParamPlus(paramId);
	
	if(this.isNoinim) {
		if(this.isStateAffected(STATE_MINION_AMMO_LARGE_ID)) {
			if(paramId === SPARAM_WPATK_ID)
				value += 0.5;
			else if(paramId === SPARAM_WPDEF_ID)
				value += 0.4;
		}
		else if(this.isStateAffected(STATE_MINION_AMMO_MED_ID)) {
			if(paramId === SPARAM_WPATK_ID)
				value += 0.25;
			else if(paramId === SPARAM_WPDEF_ID)
				value += 0.3;
		}
		else if(this.isStateAffected(STATE_MINION_AMMO_SMALL_ID)) {
			if(paramId === SPARAM_WPATK_ID)
				value -= 0.25;
			else if(paramId === SPARAM_WPDEF_ID)
				value += 0.2;
		}
		else if(this.isStateAffected(STATE_MINION_AMMO_FAT_ID)) {
			if(paramId === SPARAM_WPATK_ID)
				value -= 0.25;
			else if(paramId === SPARAM_WPDEF_ID)
				value += 0.4;
		}
	}
	
    return value;
};

/////////
// Erect

Game_Enemy.prototype.enemyErectXParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === XPARAM_CRIT_EVA_ID) {
		if(this.isErect && !this.isInAPose() && (this.isPrisonGuard || this.isInmate)) {
			if(this.isOrcType) {
				rate = 0.4;
			}
			else if(this.isMonstrousType) {
				rate = 0.6;
			}
			else {
				rate = 0.5;
			}
		}
	}
	
	return rate;
};

Game_Enemy.prototype.enemyErectElementRate = function(elementId) {
    let rate = 1;
	
	if(elementId === ELEMENT_KISS_WEAK_ID) {
		if(this.isErect && (this.isPrisonGuard || this.isInmate)) {
			rate = 0.9;
		}
	}
	else if(elementId === ELEMENT_PETTING_WEAK_ID) {
		if(this.isErect && (this.isPrisonGuard || this.isInmate)) {
			rate = 0.7;
		}
	}
	
	return rate;
};

// Action Speed
Game_Enemy.prototype.bonusActionSpeed = function(item) {
	let bonusSpeed = 0;
	let itemId = item.id;
	
	if($gameParty.isInGloryBattle) {
		if(item.id >= SKILL_ENEMY_EJACULATE_FACE_ID && item.id <= SKILL_ENEMY_EJACULATE_ONTO_FLOOR_ID)
			bonusSpeed += ACTION_SPEED_FAST_FIRST_PRIORITY;
		else
			bonusSpeed += ACTION_SPEED_FAST_FIRST_PRIORITY;
	}
	else if(Karryn.isInReceptionistPose() && this.isVisitorMaleType) 
		bonusSpeed -= ACTION_SPEED_FAST_FIRST_PRIORITY;
	else if(($gameParty.isInStripperBattle && !Karryn.isInStripperSexPose())) 
		bonusSpeed -= ACTION_SPEED_FAST_FIRST_PRIORITY;
	
    return bonusSpeed;
};

////////
// Charge
////////

Game_Enemy.prototype.isChargedUp = function() {
	return this.isStateAffected(STATE_CHARGE_ID);
};

/////////
// Onlooker
////////////

Object.defineProperty(Game_Enemy.prototype, "isOnlooker", {
	get: function () { return this._tagOnlooker || this.isStateAffected(STATE_IS_ONLOOKER_ID); }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isNotOnlooker", {
	get: function () { return !this.isOnlooker; }, configurable: true
});

/////////
// Supporter
///////////

Object.defineProperty(Game_Enemy.prototype, "isSupporter", {
	get: function () { return this._tagSupporter; }, configurable: true
});
Object.defineProperty(Game_Enemy.prototype, "isNotSupporter", {
	get: function () { return !this._tagSupporter; }, configurable: true
});

/////////
// Enemy BattlerName BattlerNum
/////////////////

Game_Enemy.prototype.battlerName = function() {
	let validShow = true;
	if(Karryn.isInShowEnemyImageOnlyDuringValidSelectionPose()) {
		validShow = SceneManager._scene._enemyWindow && SceneManager._scene._enemyWindow.isOpenAndActive() && this._selectionShowName;
	}
	
	if(this._performingCollapse) 
		return this._battlerNameAtCollapse;
	
	if(!validShow) {
		if(this.enemy().hasTag(TAG_BLANK_TYPE_DOT))
			return ENEMY_BLANK_DOT_BATTLERNAME;
		else if(this.enemy().hasTag(TAG_BLANK_TYPE_HALF))
			return ENEMY_BLANK_HALFSIZE_BATTLERNAME;
		else
			return ENEMY_BLANK_FULLSIZE_BATTLERNAME;
	}
	else if(!this._customEnemySprite) {
		if($gameParty.isInReceptionistBattle) {
			return this.battlerName_receptionistBattle();
		}
		else if($gameParty.isInGloryBattle) {
			return this.battlerName_gloryHoleBattle();
		}
		
		let suffixFileName = '';
		
		if($gameParty.isInWaitressBattle && Karryn.isInWaitressServingPose()) {
			suffixFileName = this.battlerName_waitressBattleSuffix();
		}
		else if($gameParty.isInStripperBattle && !Karryn.isInStripperSexPose()) {
			suffixFileName = this.battlerName_stripperBattleSuffix();
		}
		else if(this.isChargedUp()) {
			suffixFileName = ENEMY_BATTLERNAME_CHARGE_SUFFIX;
		}
		else if(this.isAngry) {
			suffixFileName = ENEMY_BATTLERNAME_ANGRY_SUFFIX;
		}
		else if(this.isErect) {
			suffixFileName = ENEMY_BATTLERNAME_BLUSH_SUFFIX;
		}
		else if(this._tagHasDamagedFace) {
			if(this.hasLessThanOneThirdStamina()) {
				suffixFileName = ENEMY_BATTLERNAME_DAMAGED_SUFFIX;
			}
			if(this.isCargill && $gameTroop.members()[0].hasLessThanOneThirdStamina()) {
				suffixFileName = ENEMY_BATTLERNAME_DAMAGED_SUFFIX;
			}
		}
		
		
		if(this.isWanted) {
			return this._wantedBattlerName + suffixFileName;
		}
		else if(this.isUnique || this.isBossType) {
			if(this.enemy().battlerName.includes('mas_target') || this.enemy().battlerName.includes('blank'))
				return this.enemy().battlerName;
			else
				return this.enemy().battlerName + suffixFileName;
		}
		else {
			return this.enemyType() + '_' + this.battlerNameNum() + suffixFileName;
		}
	}
	else
		return this._customEnemySprite;

};

Game_Enemy.prototype.battlerNameNum = function() {
	return this._battlerNameNum;
};

Game_Enemy.prototype.setupRandomBattlerNameNum = function() {
	let array = this.enemy().dataBatternameNum.slice(0);
	let ranNum = Math.randomInt(array.length);
	this._battlerNameNum = array[ranNum];
	if(this._battlerNameNum < 10) this._battlerNameNum = '' + '0' + this._battlerNameNum;
};


/////////
// Enemy Custom Sprite
/////////////////

Game_Enemy.prototype.setCustomEnemySprite = function(name) { 
	this._customEnemySprite = name;
};

Game_Enemy.prototype.setCustomEnemySpritePosition = function(x, y) { 
	this._spriteEnemy._homeX = x;
	this._spriteEnemy._homeY = y;
	this._spriteEnemy.updatePosition();
};

Game_Enemy.prototype.resetCustomEnemySprite = function() { 
	this._customEnemySprite = false;
};

////////
// Enemy Temporary Selection Show
/////////////////

Game_Enemy.prototype.resetTemporarySelectionShow = function() { 
	this._selectionShowImage = false;
	this._selectionShowName = false;
};

////////////////////
// Using Body Slot
////////////////////////

Game_Enemy.prototype.setupUsingBodySlot = function() {
	let st = SLOT_FREE;
	this._usingBodySlot = [ st, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st ];
};

//Reset everything to free except the ones set to unavailable
Game_Enemy.prototype.resetUsingBodySlot = function() {
	let slots = this._usingBodySlot;
	for(let i = 0; i < slots.length; ++i) {
		if(slots[i] !== SLOT_UNAVAILABLE)
			slots[i] = SLOT_FREE;
	}
};

Game_Enemy.prototype.fullResetUsingBodySlot = function() {
	this.setupUsingBodySlot();
};

Game_Enemy.prototype.getUsingBodySlotStatus = function(slotId) { 
	return this._usingBodySlot[slotId];
};
Game_Enemy.prototype.isUsingBodySlot = function(slotId) { 
	return this.getUsingBodySlotStatus(slotId) !== SLOT_FREE;
};
Game_Enemy.prototype.isUsingBodySlotPetting = function(slotId) { 
	return (this.getUsingBodySlotStatus(slotId) === SLOT_PETTED_PETTING_ONLY) 
	|| (this.getUsingBodySlotStatus(slotId) === SLOT_PETTED);
};
Game_Enemy.prototype.isUsingBodySlotPenis = function(slotId) { 
	return (this.getUsingBodySlotStatus(slotId) === SLOT_PENIS);
};
Game_Enemy.prototype.isUsingBodySlotAnus = function(slotId) { 
	return (this.getUsingBodySlotStatus(slotId) === SLOT_ANUS);
};


Game_Enemy.prototype.isThisBodySlotUnavailable = function(slotId) { 
	return (this.getUsingBodySlotStatus(slotId) === SLOT_UNAVAILABLE);
};

Game_Enemy.prototype.setBodySlot = function(slotId, status) { 
	this._usingBodySlot[slotId] = status;
};

//For setting which slot the enemy is using on actor

Game_Enemy.prototype.setBodySlotFree = function(slotId) { 
	this.setBodySlot(slotId, SLOT_FREE);
};
Game_Enemy.prototype.setBodySlotWithPetted = function(slotId) { 
	this.setBodySlot(slotId, SLOT_PETTED);
};
Game_Enemy.prototype.setBodySlotWithPettedPettingOnly = function(slotId) { 
	this.setBodySlot(slotId, SLOT_PETTED_PETTING_ONLY);
};
Game_Enemy.prototype.setBodySlotWithToy = function(slotId) { 
	this.setBodySlot(slotId, SLOT_TOY);
};
Game_Enemy.prototype.setBodySlotWithPenis = function(slotId) { 
	this.setBodySlot(slotId, SLOT_PENIS);
};
Game_Enemy.prototype.setBodySlotWithAnus = function(slotId) { 
	this.setBodySlot(slotId, SLOT_ANUS);
};


//For setting actor slots that the enemy will never use
Game_Enemy.prototype.setBodySlotUnavailable = function(slotId) { 
	this.setBodySlot(slotId, SLOT_UNAVAILABLE);
};


//////////////
// Pose Status
////////////
	
Game_Enemy.prototype.isInAPose = function() { 
	return this._poseStatus !== ENEMY_POSE_NONE;
};
Game_Enemy.prototype.isNotInAPose = function() { 
	return this._poseStatus === ENEMY_POSE_NONE;
};

Game_Enemy.prototype.isPoseMaster = function() { 
	return this._poseStatus === ENEMY_POSE_MASTER;
};

Game_Enemy.prototype.isPoseHelper = function() { 
	return this._poseStatus === ENEMY_POSE_HELPER;
};

Game_Enemy.prototype.setPoseStatusMaster = function() { 
	this._poseStatus = ENEMY_POSE_MASTER;
	this.addState(STATE_ENEMY_POSE_MASTER_ID);
};
Game_Enemy.prototype.setPoseStatusHelper = function() { 
	this._poseStatus = ENEMY_POSE_HELPER;
	this.removeState(STATE_ENEMY_POSE_MASTER_ID);
};

Game_Enemy.prototype.resetPoseStatus = function() { 
	this._poseStatus = ENEMY_POSE_NONE;
	this.removeState(STATE_ENEMY_POSE_MASTER_ID);
	this.setPoseSkills(false); 
	this.setPoseSkillTarget(false); 
	this.setCanOnlyUsePoseSkills(false); 
	this.setPoseMasterSkillID(-1);
};

Game_Enemy.prototype.setPoseMasterSkillID = function(value) { 
	this._poseMasterSkillID = value;
};
Game_Enemy.prototype.getPoseMasterSkillID = function() { 
	return this._poseMasterSkillID;
};

///////////
// Pose Skill
/////////////

Game_Enemy.prototype.setPoseSkills = function(skills) { 
	if(!skills) this._currentPoseSkills = skills;
	else this._currentPoseSkills = skills.slice(0);
};
Game_Enemy.prototype.setPoseSkillTarget = function(target) { 
	this._currentPoseSkillTarget = target;
};
Game_Enemy.prototype.setCanOnlyUsePoseSkills = function(status) { 
	this._canOnlyUsePoseSkills = status;
};

Game_Enemy.prototype.getPoseSkills = function() { 
	return this._currentPoseSkills;
};
Game_Enemy.prototype.getPoseSkillTarget = function() { 
	return this._currentPoseSkillTarget;
};
Game_Enemy.prototype.canOnlyUsePoseSkills = function() { 
	return this._canOnlyUsePoseSkills;
};


Game_Enemy.prototype.usePoseSkill = function() { 
	if(!this.getPoseSkills()) return false;
	
	let success = false;
	let array = this.getPoseSkills().slice(0);
	let target = false;
	if(this.getPoseSkillTarget())
		target = this.getPoseSkillTarget();
	
	while(array.length > 0 && !success) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
		if(success) {
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return true;
		}
	}
	
	return false;
};

///////////////
// Orgasm Skills
//////////////

Game_Enemy.prototype.setOrgasmSkills = function(skills) {
	if(!skills) this._currentOrgasmSkills = skills;	
	else this._currentOrgasmSkills = skills.slice(0);
};
Game_Enemy.prototype.getOrgasmSkills = function() { 
	return this._currentOrgasmSkills;
};

Game_Enemy.prototype.resetOrgasmSkills = function() { 
	if($gameParty.isInGloryBattle) {
		this.setGloryHoleOrgasmSkills();
	}
	else {
		this.setOrgasmSkills(this._aiDefaultEjaculationSkills);
	}
};


Game_Enemy.prototype.useOrgasmSkill = function() { 
	if(!this.getOrgasmSkills()) return false;
	
	let success = false;
	let orgasmSkills = this.getOrgasmSkills().slice(0);
	let target = false;
	
	if(this.getPoseSkillTarget())
		target = this.getPoseSkillTarget();
	
	if(!target) target = $gameActors.actor(ACTOR_KARRYN_ID);
	
	while(orgasmSkills.length > 0 && !success) {
		let index = Math.randomInt(orgasmSkills.length);
		let skillId = orgasmSkills.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
		
		//Stripper Show Overwrite
		if(target.isActor() && $gameParty.isInStripperBattle && !target.isInStripperSexPose()) {
			skillId = SKILL_ENEMY_EJACULATE_INTO_CONDOM_ID;
			success = true;
		}
		
		if(orgasmSkills.length === 0 && !success) {
			skillId = SKILL_ENEMY_EJACULATE_ONTO_FLOOR_ID;
			success = true;
		}
		
		if(success) {
			//Waitress Sex Overwrite
			if(target.isActor() && target.isInWaitressSexPose()) {
				if(target._karrynMugContent === ALCOHOL_TYPE_SEMEN || 
				(target.canMouthSwallow(false) && target._karrynMugAmount === 0)) {
					if(skillId === SKILL_ENEMY_EJACULATE_FACE_ID || skillId === SKILL_ENEMY_EJACULATE_BOOBS_ID ||
					skillId === SKILL_ENEMY_EJACULATE_LEFTARM_ID || skillId === SKILL_ENEMY_EJACULATE_RIGHTARM_ID) {
						if(Math.random() < 0.75 || this.isUsingBodySlotPenis(OTHER_1_ID))
							skillId = SKILL_ENEMY_EJACULATE_INTO_MUG_ID;
					}
					else if(skillId === SKILL_ENEMY_EJACULATE_ONTO_FLOOR_ID) {
						skillId = SKILL_ENEMY_EJACULATE_INTO_MUG_ID;
					}
				}
			}
			
			if(!this.isSlimeType && !target.isInReceptionistPose())
				this.addState(STATE_ENEMY_CAME_THIS_TURN_ID);
			
			
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
			return true;
		}
	}
	
	return false;
};

///////////
// Orgasm
/////////////

Game_Enemy.prototype.checkForOrgasm = function() {
	let canOrgasm = false;
	
	
	if(this.reachedOrgasmPoint() && !this.orgasmLocked() && this.hasEjaculationStock() && !this._ignoreNextOrgasmCheck && DEBUG_MODE) {
		canOrgasm = true;
		
		if(this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID)) {
			canOrgasm = false;
		}
		else if(this.isStateAffected(STATE_ENEMY_EDGING_CONTROL_ID)) {
			canOrgasm = false;
			if(this.pleasure >= this.orgasmPoint() * Karryn.willpowerEdgingControlEffect())
				canOrgasm = true;
		}
	}
	
	if(canOrgasm && $gameParty.isInReceptionistBattle) 
		canOrgasm = this.checkForOrgasm_receptionistBattle();
	
	if(canOrgasm) this.orgasm();
	
	if(this._ignoreNextOrgasmCheck) this._ignoreNextOrgasmCheck = false;
};

Game_Enemy.prototype.orgasm = function() { 
	this.useOrgasmSkill();
	this.removeState(STATE_HORNY_ID);
	this.removeAngryState();
	Karryn.emoteMasterManager();
	BattleManager.removeImmortalStateFromEveryone();
};

Game_Enemy.prototype.postOrgasmPleasure = function() { 
	if(this.isSlimeType && Karryn.isInSlimeAnalPiledriverSexPose()) {
		return;
	}
	else {
		this._ejaculationCount++;
		this._ejaculationStock--;
		if(this.hasEjaculationStock()) {
			this.setPleasureToArousalPoint();
		}
		else {
			if(Karryn.isInEnemiesJoinArousedAndStayArousedPose()) {
				this.setPleasureToArousalPoint();
			}
			else {
				this.gainPleasure(-this.orgasmPoint(), true);
			}
		}
		
		if(!this.isVisitorMaleType)
			this.addState(STATE_ENEMY_POST_CUM_STUN_ID);
	}
};

Game_Enemy.prototype.regenerateHp = function() {
	if(this.hasNoStamina()) return;
	if(this.isVisitorMaleType || $gameParty.isInGloryBattle) {
		this.setUsedSkillThisTurn(false);
		return;
	}
	if(this.energy !== 0 && (this.hasEjaculationStock() || Karryn.isInNoEjaculationStockStillContinuesPose())) {
		let value = Math.floor(this.maxstamina * this.staminaregen);
		if (value !== 0) {
			this.gainHp(value);
		}
		this.setUsedSkillThisTurn(false);
	}
	else {
		if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ATTACK))
			this.resetGotHitBySkillType();
		this.removeImmortal();
		this.gainHp(-this.stamina);
		
	}
};

/////////
// Can Attack
/////////

Game_Enemy.prototype.canAttack = function(target) { 
	return target.isAttackable();
};

////////
// Can Be Kissed
////////

Game_Enemy.prototype.canBeKissed = function() { 
	return this._canBeKissed;
};
Game_Enemy.prototype.setCanBeKissed = function(value) { 
	this._canBeKissed = value;
};


////////
// Can Pet
////////////

//default
Game_Enemy.prototype.canGetFingersSucked = function(target) { 
	if(this.isYetiType && target.isInYetiCarryPose() && this.isPoseMaster()) return false;
	if(target.isInKickCounterSexPose() && this.isPoseMaster()) return false;
	if(this.isVisitorType) return false;
	return target.canSuckFingers();
};
Game_Enemy.prototype.canKissLvlOne = function(target) { 
	return target.canGetKissed(KISS_LVL_ONE);
};
Game_Enemy.prototype.canKissLvlTwo = function(target) { 
	return target.canGetKissed(KISS_LVL_TWO);
};
Game_Enemy.prototype.canPetBoobs = function(target) { 
	return target.canGetBoobsPetted();
};
Game_Enemy.prototype.canPetNipples = function(target) { 
	return target.canGetNipplesPetted();
};
Game_Enemy.prototype.canPetClit = function(target) { 
	return target.canGetClitPetted();
};
Game_Enemy.prototype.canPetPussy = function(target) { 
	return target.canGetPussyPetted();
};
Game_Enemy.prototype.canPetButt = function(target) { 
	return target.canGetButtPetted();
};
Game_Enemy.prototype.canPetAnal = function(target) { 
	return target.canGetAnalPetted();
};

Game_Enemy.prototype.canSpank = function(target) { 
	if(this.isThugType) {
		if(Karryn.hasEdict(EDICT_WEAKEN_THE_THUGS)) return false;
	}
	else if(this.isGoblinType) {
		if(!Karryn.hasEdict(EDICT_DEMEAN_GOBLINS)) return false;
	}
	else if(this.isGuardType) {
		if(Prison.guardAggression < 12) return false;
		if(Prison.guardAggression < 20 && !Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING)) return false;
	}
	else if(this.isNerdType) {
		if(!Karryn.hasEdict(EDICT_THREATEN_THE_NERDS) || !this.isAngry) return false;
	}
	else if(this.isOrcType) {
		if(!Karryn.hasEdict(EDICT_REJECT_THE_ORCS) || !this.isAngry) return false;
	}
	else if(this.isLizardmanType) {
		if(!Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN) || !this.isAngry) return false;
	}
	
	return target.canGetSpanked();
};
Game_Enemy.prototype.canCunnilingus = function(target) { 
	return target.canGetCunnilingus();
};
Game_Enemy.prototype.canGetRimmed = function(target, actorSkill) { 
	if(ConfigManager.disableRimjobs) return false;
	return target.canGiveRimjob(actorSkill);
};

// Nerds
Game_Enemy.prototype.canNerdPet = function(target) { 
	if(this.isNerdType)
		return (!target.isInCombatPose() && !target.isInJobPose()) || Karryn.hasPassive(PASSIVE_SEXUAL_PARTNERS_NERD_THREE_ID);
	else
		return true;
};

// Toys

Game_Enemy.prototype.canInsertPinkRotor = function(target) { 
	return target.canGetClitToyInserted() && this._hasPinkRotor;
};
Game_Enemy.prototype.canInsertPenisDildo = function(target) { 
	return target.canGetPussyToyInserted() && this._hasPenisDildo;
};
Game_Enemy.prototype.canInsertAnalBeads = function(target) { 
	return target.canGetAnalToyInserted() && this._hasAnalBeads;
};

Game_Enemy.prototype.canPlayWithPinkRotor = function(target) { 
	return target.isWearingClitToy_PinkRotor() && target.getBodySlotStatus(CLIT_ID) !== SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Enemy.prototype.canPlayWithPenisDildo = function(target) { 
	return target.isWearingPussyToy_PenisDildo() && target.getBodySlotStatus(PUSSY_ID) !== SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Enemy.prototype.canPlayWithAnalBeads = function(target) { 
	return target.isWearingAnalToy_AnalBeads() && target.getBodySlotStatus(ANAL_ID) !== SLOT_UNAVAILABLE_BUT_HAS_TOY;
};

////////
// Petting Selector

Game_Enemy.prototype.canUsePettingMouthSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canGetFingersSucked(target) || this.canKissLvlOne(target);
};
Game_Enemy.prototype.canUsePettingBoobsAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetBoobs(target);
};
Game_Enemy.prototype.canUsePettingNipplesAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetNipples(target);
};
Game_Enemy.prototype.canUsePettingClitAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetClit(target) || this.canPlayWithPinkRotor(target);
};
Game_Enemy.prototype.canUsePettingPussyAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetPussy(target) || this.canPlayWithPenisDildo(target);
};
Game_Enemy.prototype.canUsePettingButtAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetButt(target);
};
Game_Enemy.prototype.canUsePettingAnalAreaSelector = function(target) { 
	if(!this.canNerdPet(target)) return false;
	return this.canPetAnal(target) || this.canPlayWithAnalBeads(target);
};


//////////
// Can Insert
///////////

//default
Game_Enemy.prototype.canInsertRightHand = function(target, actorSkill) { 
	if(this.isWerewolfType) return this.canInsertRightHand_Werewolf(target, actorSkill);
	return target.canGetRightHandInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertLeftHand = function(target, actorSkill) { 
	if(this.isWerewolfType) return this.canInsertLeftHand_Werewolf(target, actorSkill);
	return target.canGetLeftHandInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertMouth = function(target, actorSkill) { 
	if(this.isPrisonerType && !target._firstBlowjobDate) return false; 
	else if(this.isWerewolfType) return this.canInsertMouth_Werewolf(target, actorSkill);
	else if(this.isSlimeType) return this.canInsertMouth_Slime(target, actorSkill);
	return target.canGetMouthInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertBoobs = function(target, actorSkill) { 
	if(this.isWerewolfType) return this.canInsertBoobs_Werewolf(target, actorSkill);
	return target.canGetBoobsInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertBoobs_ignoreClothes = function(target) { 
	return target.canGetBoobsInserted(true) && this.isErect;
};
Game_Enemy.prototype.canInsertPussy = function(target, actorSkill) { 
	if(this.isPrisonerType && target.isVirgin()) return false; 
	else if(this.isWerewolfType) return this.canInsertPussy_Werewolf(target, actorSkill);
	return target.canGetPussyInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertAnal = function(target, actorSkill) { 
	if(this.isPrisonerType && !target._firstAnalSexDate) return false; 
	else if(this.isWerewolfType) return this.canInsertAnal_Werewolf(target, actorSkill);
	else if(this.isSlimeType) return this.canInsertAnal_Slime(target, actorSkill);
	return target.canGetAnalInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertFeet = function(target, actorSkill) { 
	if(ConfigManager.disableFootjobs) return false;
	return target.canGetFeetInserted(actorSkill) && this.isErect;
};

Game_Enemy.prototype.canInsertPussy_fromGoblinCL = function(target) { 
	return target.canGetPussyInserted_fromGoblinCL() && this.isErect;
};


Game_Enemy.prototype.canInsertRightHand_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInLizardmanCowgirlPose() && !target.isInReverseCowgirlPose() && !target.isInDefeatedLevel1Pose() && !target.isInOrcPaizuriSexPose() && !target.isInLayingTittyfuckSexPose() && !target.isInWaitressSexPose()) return false; 
	return target.canGetRightHandInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertLeftHand_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInKneelingBJSexPose() && !target.isInReverseCowgirlPose() && !target.isInDefeatedLevel1Pose() && !target.isInOrcPaizuriSexPose() && !target.isInThugGangbangPose()) return false; 
	return target.canGetLeftHandInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertMouth_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInWerewolfBackPose() && !target.isInDefeatedLevel1Pose() && !target.isInDefeatedLevel3Pose() && !target.isInDefeatedLevel4Pose() && !target.isInKarrynCowgirlPose() && !target.isInLizardmanCowgirlPose() && !target.isInReverseCowgirlPose() && !target.isInGuardGangbangPose() && !target.isInOrcPaizuriSexPose() && !target.isInLayingTittyfuckSexPose() && !target.isInThugGangbangPose() && !target.isInWaitressSexPose()) return false; 
	return target.canGetMouthInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertBoobs_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInKarrynCowgirlPose() && !target.isInDefeatedLevel3Pose()) return false; 
	return target.canGetBoobsInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertPussy_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInDefeatedLevel2Pose() && !target.isInDefeatedLevel3Pose() && !target.isInDefeatedLevel4Pose() && !target.isInRimjobSexPose() && !target.isInLayingTittyfuckSexPose() && !target.isInSlimeAnalPiledriverSexPose() && !target.isInLayingTittyfuckSexPose() && !target.isInRimjobSexPose() && !target.isInYetiPaizuriSexPose() && !target.isInWaitressSexPose()) return false; 
	return target.canGetPussyInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertAnal_Werewolf = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInDefeatedLevel2Pose() && !target.isInDefeatedLevel3Pose() && !target.isInDefeatedLevel4Pose() && !target.isInLayingTittyfuckSexPose() && !target.isInRimjobSexPose() && !target.isInYetiCarryPose() && !target.isInYetiPaizuriSexPose() && !target.isInLizardmanCowgirlPose() && !target.isInGuardGangbangPose() && !target.isInKickCounterSexPose() && !target.isInLayingTittyfuckSexPose() && !target.isInRimjobSexPose() && !target.isInWaitressSexPose()) return false; 
	return target.canGetAnalInserted(actorSkill) && this.isErect;
};


Game_Enemy.prototype.canInsertMouth_Slime = function(target, actorSkill) { 
	if(target.isInSlimeAnalPiledriverSexPose() && !this.isPoseMaster()) return false;
	if(target.isInSexPose() && !target.isInWerewolfBackPose() && !target.isInDefeatedLevel4Pose() && !target.isInDefeatedLevel3Pose() && !target.isInSlimeAnalPiledriverSexPose()) return false; 
	return target.canGetMouthInserted(actorSkill) && this.isErect;
};
Game_Enemy.prototype.canInsertAnal_Slime = function(target, actorSkill) { 
	if(target.isInSexPose() && !target.isInYetiCarryPose() && !target.isInDefeatedLevel2Pose() && !target.isInDefeatedLevel3Pose() && !target.isInDefeatedLevel4Pose()) return false; 
	return target.canGetAnalInserted(actorSkill) && this.isErect;
};


//None
Game_Enemy.prototype.canInsertRightHandNone = function(target) { 
	return target.canGetRightHandInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertLeftHandNone = function(target) { 
	return target.canGetLeftHandInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertMouthNone = function(target) { 
	return target.canGetMouthInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertBoobsNone = function(target) { 
	return target.canGetBoobsInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertPussyNone = function(target) { 
	return target.canGetPussyInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertAnalNone = function(target) { 
	return target.canGetAnalInsertedNone() && this.isErect;
};
Game_Enemy.prototype.canInsertOther1None = function(target) { 
	return target.canGetOther1InsertedNone();
};
Game_Enemy.prototype.canInsertOther2None = function(target) { 
	return target.canGetOther2InsertedNone();
};
Game_Enemy.prototype.canInsertOther3None = function(target) { 
	return target.canGetOther3InsertedNone();
};
Game_Enemy.prototype.canInsertOther4None = function(target) { 
	return target.canGetOther4InsertedNone();
};

Game_Enemy.prototype.canInsertOther1Mug = function(target) { 
	return target.canGetOther1InsertedMug();
};

/////////
// Target For Attack
///////////////

Game_Enemy.prototype.isValidTargetForAttack = function(actor) { 
	let untargetableForAttack = this.isStateAffected(STATE_UNTARGETABLE_FOR_ATTACK_ID);

	return !untargetableForAttack;
};

Game_Enemy.prototype.isValidTargetForMinionThrowAmmoLoading = function() { 
	let enemyId = this.enemyId();
	let untargetableForAmmoLoading = this.isDead() || this.isHidden() || this.isInAPose() || this.isMonstrousType;
	return !untargetableForAmmoLoading;
};

////////////
// Target For Sex
// As in can Karryn use her sex skill on you
// isValidTargetFor___ functions are called in Karryn's skills selection eval
////////////////

Game_Enemy.prototype.isValidTargetForKiss = function(actor, actorSkill) { 
	let enemyBodySlotAvailable = !this.isThisBodySlotUnavailable(MOUTH_ID);
	let isValidEnemyType = !this.isMonstrousType;
	let isNotAngry = !this.isAngry;
	let canBeKissed = this.canBeKissed();
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	if(actor.isInYetiCarryPose()) {
		if(this.isInAPose() || this.isYetiType) isValidEnemyType = true;
		else isValidEnemyType = false;
	}
	
	if(!untargetableForSex && enemyBodySlotAvailable && isValidEnemyType && isNotAngry && canBeKissed) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForCockStare = function(actor) { 
	let enemyIsErect = this.isErect;
	let enemyIsInSexPose = this.isInAPose();
	let isValidEnemyType = true;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let validTarget = !untargetableForSex && !enemyIsInSexPose && isValidEnemyType && enemyIsErect;
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForCockStare_gloryBattle(actor);
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForCockPetting = function(actor) { 
	let enemyIsInSexPose = this.isInAPose();
	let isValidEnemyType = true;
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let validTarget = !untargetableForSex && !enemyIsInSexPose && isValidEnemyType && isNotAngry;
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForCockPetting_gloryBattle(actor);
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForHandjob = function(actor, actorSkill) { 
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForHandjob;
	let canInsert = this.canInsertLeftHand(actor, actorSkill) || this.canInsertRightHand(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;
	
	if(Karryn.isInDefeatedPose() && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) {
		enemyIsInSexPose = false;
	}
	
	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForHandjobOrBlowjob_gloryBattle();
	}
	
	//exception
	if(this.isWerewolfType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInKneelingBJSexPose() || actor.isInLizardmanCowgirlPose() || actor.isInReverseCowgirlPose() || actor.isInDefeatedLevel1Pose() || actor.isInOrcPaizuriSexPose() || actor.isInLayingTittyfuckSexPose() || actor.isInThugGangbangPose() || actor.isInWaitressSexPose();
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForBlowjob = function(actor, actorSkill) { 
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);

	let sexPoseTarget = this._targetForBlowjob;
	let canInsert = this.canInsertMouth(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;
	
	if(Karryn.isInDefeatedPose()) {
		if(this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID)) {
			enemyIsInSexPose = false;
		}
	}
	
	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForHandjobOrBlowjob_gloryBattle();
	}
	
	//exception
	if(this.isYetiType && actorIsInSexPose) {
		validTarget = this.isUsingBodySlotPenis(BOOBS_ID) && this.isPoseMaster();
	}
	else if(this.isWerewolfType && isErect && !actorIsInSexPose && canInsert && isNotAngry && !enemyIsInSexPose && !untargetableForSex) {
		validTarget = true;
	}
	else if(this.isWerewolfType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInWerewolfBackPose() || actor.isInDefeatedLevel1Pose() || actor.isInDefeatedLevel3Pose() || actor.isInDefeatedLevel4Pose() || actor.isInKarrynCowgirlPose() || actor.isInLizardmanCowgirlPose() || actor.isInReverseCowgirlPose() || actor.isInGuardGangbangPose() || actor.isInOrcPaizuriSexPose() || actor.isInLayingTittyfuckSexPose() || actor.isInThugGangbangPose() || actor.isInWaitressSexPose();
	}
	else if(this.isSlimeType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInWerewolfBackPose() || actor.isInDefeatedLevel2Pose() || actor.isInDefeatedLevel4Pose();
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForTittyFuck = function(actor, actorSkill) {
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForTittyFuck;
	let canInsert = this.canInsertBoobs(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;
	
	if(Karryn.isInDefeatedPose() && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) {
		enemyIsInSexPose = false;
	}
	
	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	
	//exception
	if(this.isYetiType && isErect && !actorIsInSexPose && canInsert && isNotAngry && !enemyIsInSexPose && !untargetableForSex) {
		validTarget = true;
	}
	else if(this.isWerewolfType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInKarrynCowgirlPose() || actor.isInDefeatedLevel3Pose();
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForPussySex = function(actor, actorSkill) { 
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForPussySex;
	let canInsert = this.canInsertPussy(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;

	if(Karryn.isInDefeatedPose() && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) {
		enemyIsInSexPose = false;
		isValidEnemyType = true;
	}

	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex)); 
	
	//exception
	if(this.isWerewolfType && isErect && !actorIsInSexPose && canInsert && isNotAngry && !enemyIsInSexPose && !untargetableForSex) {
		validTarget = true;
	}
	else if(this.isWerewolfType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInDefeatedLevel2Pose() || actor.isInDefeatedLevel3Pose() || actor.isInDefeatedLevel4Pose() || actor.isInLayingTittyfuckSexPose() || actor.isInRimjobSexPose() || actor.isInSlimeAnalPiledriverSexPose() || actor.isInLayingTittyfuckSexPose() || actor.isInRimjobSexPose() || actor.isInYetiPaizuriSexPose() || actor.isInWaitressSexPose();
	}
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForPussyOrAnalSex_gloryBattle() && actor.isWet;
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForAnalSex = function(actor, actorSkill) { 
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForAnalSex;
	let canInsert = this.canInsertAnal(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;
	
	if(Karryn.isInDefeatedPose() && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) {
		enemyIsInSexPose = false;
		isValidEnemyType = true;
	}
	
	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	
	//exception
	if((this.isSlimeType || this.isWerewolfType) && isErect && !actorIsInSexPose && canInsert && isNotAngry && !enemyIsInSexPose && !untargetableForSex) {
		validTarget = true;
	}
	else if(this.isWerewolfType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInDefeatedLevel2Pose() || actor.isInDefeatedLevel3Pose() || actor.isInDefeatedLevel4Pose() || actor.isInLayingTittyfuckSexPose() || actor.isInRimjobSexPose() || actor.isInYetiPaizuriSexPose() || actor.isInYetiCarryPose() || actor.isInLizardmanCowgirlPose() || actor.isInGuardGangbangPose() || actor.isInKickCounterSexPose() || actor.isInLayingTittyfuckSexPose() || actor.isInRimjobSexPose() || actor.isInWaitressSexPose();
	}
	else if(this.isSlimeType && isErect && actorIsInSexPose && !sexPoseTarget && canInsert && isNotAngry && !enemyIsInSexPose) {
		validTarget = actor.isInYetiCarryPose();
	}
	
	if($gameParty.isInGloryBattle) {
		validTarget = this.isValidTargetForPussyOrAnalSex_gloryBattle();
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForRimjob = function(actor, actorSkill) {
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForRimjob;
	let canInsert = this.canGetRimmed(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;

	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (!actorIsInSexPose && canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForFootjob = function(actor, actorSkill) {
	let isErect = this.isErect;
	let actorIsInSexPose = actor.isInSexPose();
	let enemyIsInSexPose = this.isInAPose();
	let isNotAngry = !this.isAngry;
	let untargetableForSex = this.isStateAffected(STATE_UNTARGETABLE_FOR_SEX_ID);
	
	let sexPoseTarget = this._targetForFootjob;
	let canInsert = this.canInsertFeet(actor, actorSkill);
	let isValidEnemyType = !this.isMonstrousType;
	
	let validTarget = isErect && ((actorIsInSexPose && sexPoseTarget) || (canInsert && isNotAngry && isValidEnemyType && !enemyIsInSexPose && !untargetableForSex));
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.setValidTargetForHandjob = function() { 
	this._targetForHandjob = true;
};
Game_Enemy.prototype.setValidTargetForBlowjob = function() { 
	this._targetForBlowjob = true;
};
Game_Enemy.prototype.setValidTargetForRimjob = function() { 
	this._targetForRimjob = true;
};
Game_Enemy.prototype.setValidTargetForFootjob = function() { 
	this._targetForFootjob = true;
};
Game_Enemy.prototype.setValidTargetForTittyFuck = function() { 
	this._targetForTittyFuck = true;
};
Game_Enemy.prototype.setValidTargetForPussySex = function() { 
	this._targetForPussySex = true;
};
Game_Enemy.prototype.setValidTargetForAnalSex = function() { 
	this._targetForAnalSex = true;
};



Game_Enemy.prototype.resetAllTargetsForSex = function() { 
	this._targetForHandjob = false;
	this._targetForBlowjob = false;
	this._targetForTittyFuck = false;
	this._targetForPussySex = false;
	this._targetForAnalSex = false;
	this._targetForRimjob = false;
	this._targetForFootjob = false;
};

///////
// Guard Attack Requirement
//////////////

Game_Enemy.prototype.dumbGuardAttackReq = function() { 
	return !Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING);
};
Game_Enemy.prototype.smartGuardSlashReq = function(target) { 
	return Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING) && target.isBluntStance();
};
Game_Enemy.prototype.smartGuardStrikeReq = function(target) { 
	return Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING) && target.isPierceStance();
};
Game_Enemy.prototype.smartGuardThrustReq = function(target) { 
	return Karryn.hasEdict(EDICT_ADVANCED_GUARD_TRAINING) && target.isSlashStance();
};

///////////////
// On Turn End
///////////////

Game_Enemy.prototype.onTurnEnd = function() {
    this.clearResult();
	//this.checkIfStillErectedWhileInPose();
    this.regenerateAll();
	this.resetEnemyTurnVariables();
	this.onTurnEnd_enemyHornyChance();
	this.checkIfDidNothing();
    this.removeStatesAuto(2);
};

Game_Enemy.prototype.resetEnemyTurnVariables = function() {
    this._thisTurnTaunted = false;
	this._thisTurnFlaunted = false;
};

//Now currently being called in post internal ejaculation
Game_Enemy.prototype.checkIfStillErectedWhileInPose = function() {
    if(this.isInAPose() && !this.isErect) {
		if(this.isPoseMaster()) {
			if(!BattleManager.swappedPoseMaster(this))
				BattleManager.pullOutAllEnemies();
		}
		else {
			BattleManager.pullOutEnemy(this);
		}
		return true;
	}
	return false;
};


/////////
// Perform Collapse
///////////

Remtairy.Enemy.Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
Game_Enemy.prototype.performCollapse = function() {
	if(this.isInAPose()) {
		//If this enemy is a master, BattleManager needs to release the whole pose which will release everyone else
		if(this.isPoseMaster()) {
			if(!BattleManager.swappedPoseMaster(this))
				BattleManager.pullOutAllEnemies();
		}
		else {
			BattleManager.pullOutEnemy(this);
		}
	}
	if($gameParty.isInReceptionistBattle) {
		this.performCollapse_receptionistBattle();
	}
	
	if($gameParty._minionThrow_ammoLoaded) {
		if($gameParty._minionThrow_ammoName == this.displayName()) {
			$gameParty._minionThrow_ammoLoaded = false;
			let group = $gameTroop.aliveMembers();
			for (let i = 0; i < group.length; ++i) {
				let target = group[i];
				if(target) {
					target.removeState(STATE_MINION_AMMO_LARGE_ID);
					target.removeState(STATE_MINION_AMMO_MED_ID);
					target.removeState(STATE_MINION_AMMO_SMALL_ID);
					target.removeState(STATE_MINION_AMMO_FAT_ID);
				}
			 }
		}
	}
    
	this._performingCollapse = true;
	this._battlerNameAtCollapse = this.battlerName();
	
	Game_Battler.prototype.performCollapse.call(this);
    switch (this.collapseType()) {
    case 0:
        this.requestEffect('collapse');
        SoundManager.playEnemyCollapse();
        break;
    case 1:
        this.requestEffect('bossCollapse');
        SoundManager.playBossCollapse1();
        break;
    case 2:
        this.requestEffect('instantCollapse');
        break;
    }
	
	if($gameParty.isInWaitressBattle || $gameParty.isInReceptionistBattle) return;
	
	if(this.isWanted) {
		Prison.setWantedIdAsDefeated(this.getWantedId());
	}
	else if(this.isBossType) {
		$gameParty.checkPotentialNewWanted(this);
	}
	
	if(this.isOrcType && !this.isTonkin) {
		if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM)) {
			$gameTroop.removeOrcCommandingPresenceFromAllEnemies(this);
		}
		else {
			$gameTroop.removeOrcDefensivePresenceFromAllEnemies(this);
		}
	}
	if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ATTACK) && $gameTroop.thereAreOnlyOrcEnemysLeft(this)) {
		$gameTroop.setAllOrcEnemiesToAngryOnce(this);
	}
	
	if(this.isYetiType) {
		$gameTroop.checkYetiHeatAuraStateAfterYetiCollapse(this);
	}
	
	$gameTroop._enemySpots[this._enemySpotsId] = false;
	//todo potential problem of size 2's 2nd spot not being freed?
	
	$gameParty.addRecordSubdued(this);
	$gameParty.increaseOrderGain(this.getOrderGainValue());
};

Remtairy.Enemy.Game_Enemy_escape = Game_Enemy.prototype.escape;
Game_Enemy.prototype.escape = function() {
    if($gameParty.inBattle() && this.isInAPose()) {
		//If this enemy is a master, BattleManager needs to release the whole pose which will release everyone else
		if(this.isPoseMaster()) {
			if(!BattleManager.swappedPoseMaster(this))
				BattleManager.pullOutAllEnemies();
		}
		else {
			BattleManager.pullOutEnemy(this);
		}
	}
	
	Game_Battler.prototype.escape.call(this);
};

//////////
////////////////
// Data Manager
////////////////
///////////

//Enemy setup tags
DataManager.processRemTMNotetags_RemtairyEnemy = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);
		
		obj.dataOrderGain = 0;
		obj.dataFatigueGain = 0;
		obj.dataInitialPleasure = 10;
		obj.dataArousalPoint = VAR_AP_PER_END;
		obj.dataOrgasmPoint = VAR_OP_PER_END;
		obj.dataTalkLevel = 0;
		obj.dataSightLevel = 0;
		obj.dataPettingLevel = 0;
		obj.dataToyLevel = 0;
		obj.dataSemenLevel = 0;
		obj.dataStripLevel = 0;
		obj.dataKissLevel = 0;
		obj.dataHandjobLevel = 0;		
		obj.dataBlowjobLevel = 0;	
		obj.dataTittyFuckLevel = 0;	
		obj.dataPussySexLevel = 0;	
		obj.dataAnalSexLevel = 0;	
		obj.dataMasturbateLevel = 0;
		obj.dataMasochismLevel = 0;
		obj.dataSadismLevel = 0;
		obj.dataEnemyPrefixChance = 1;
		obj.dataStench = 0;	
		obj.dataStenchRange = 0;
		obj.dataSmegma = 0;	
		obj.dataSmegmaRange = 0;	
		obj.dataOverblowProtection = 100;
		obj.dataVisitorWalkingSpeed = 10;	
		obj.dataVisitorWritingSpeed = 10;	
		obj.dataVisitorDissatisfaction = 10;
		obj.dataVisitorPervPromoteChance = 0;
		obj.dataVisitorCanBeFan = 0;
		obj.dataVisitorCanBePervert = 0;
		obj.dataVisitorAlwaysFan = 0;
		obj.dataVisitorAlwaysPervert = 0;
		obj.dataVisitorNotVisiting = 0;
		obj.dataVisitorTachie = [1];
		obj.dataEjaculationAmt = ENEMY_DEFAULT_EJACULATION_AMOUNT;
		obj.dataEjaculationRange = ENEMY_DEFAULT_EJACULATION_RANGE;	
		obj.dataEjaculationStock = 1;	
		obj.dataBaseAnger = 100;
		obj.dataBaseEnemyLevel = 0;
		obj.dataMinAppearReq = 0;
		obj.dataDowngradeId = 0;
		obj.dataUpgradeReq = 0;
		obj.dataUpgradeId = 0;
		obj.dataRowHeight = 1;
		obj.dataFixedRow = -1;
		obj.dataStartingStance = STANCE_RANDOM;
		obj.dataEnemyType = ENEMYTYPE_PRISONER_TAG;
		obj.dataEnemyCock = ENEMYCOCK_DEFAULT_TAG;
		obj.dataTransferWantedEnemyId = false;
		obj.dataSpecialSelectionName = false;
		obj.dataBatternameNum = [1];
		obj.dataAIAttackSkills = false;
		obj.dataAIChargeSkills = false;
		obj.dataAIPettingSkills = false;
		obj.dataAITalkSightSkills = false;
		obj.dataAIPoseStartSkills = false;
		obj.dataAIPoseJoinSkills = false;
		obj.dataAIEjaculationSkills = false;
		
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<INITIAL PLEASURE:[ ](.*)>/i)) {
				obj.dataInitialPleasure = parseInt(RegExp.$1);
			} else if (line.match(/<ORDER GAIN:[ ](.*)>/i)) {
				obj.dataOrderGain = parseInt(RegExp.$1);	
			} else if (line.match(/<FATIGUE GAIN:[ ](.*)>/i)) {
				obj.dataFatigueGain = parseInt(RegExp.$1);
			} else if (line.match(/<AROUSAL POINT:[ ](.*)>/i)) {
				obj.dataArousalPoint = parseInt(RegExp.$1);
			} else if (line.match(/<ORGASM POINT:[ ](.*)>/i)) {
				obj.dataOrgasmPoint = parseInt(RegExp.$1);
			} else if (line.match(/<TALK LVL:[ ](.*)>/i)) {
				obj.dataTalkLevel = parseFloat(RegExp.$1);
			} else if (line.match(/<SIGHT LVL:[ ](.*)>/i)) {
				obj.dataSightLevel = parseFloat(RegExp.$1);
			} else if (line.match(/<PETTING LVL:[ ](.*)>/i)) {
				obj.dataPettingLevel = parseFloat(RegExp.$1);
			} else if (line.match(/<TOY LVL:[ ](.*)>/i)) {
				obj.dataToyLevel = parseFloat(RegExp.$1);
			} else if (line.match(/<SEMEN LVL:[ ](.*)>/i)) {
				obj.dataSemenLevel = parseFloat(RegExp.$1);	
				} else if (line.match(/<STRIP LVL:[ ](.*)>/i)) {
				obj.dataStripLevel = parseFloat(RegExp.$1);	
			} else if (line.match(/<KISS LVL:[ ](.*)>/i)) {
				obj.dataKissLevel = parseFloat(RegExp.$1);				
			} else if (line.match(/<HANDJOB LVL:[ ](.*)>/i)) {
				obj.dataHandjobLevel = parseFloat(RegExp.$1);			
			} else if (line.match(/<BLOWJOB LVL:[ ](.*)>/i)) {
				obj.dataBlowjobLevel = parseFloat(RegExp.$1);				
			} else if (line.match(/<TITTYFUCK LVL:[ ](.*)>/i)) {
				obj.dataTittyFuckLevel = parseFloat(RegExp.$1);		
			} else if (line.match(/<PUSSYSEX LVL:[ ](.*)>/i)) {
				obj.dataPussySexLevel = parseFloat(RegExp.$1);				
			} else if (line.match(/<ANALSEX LVL:[ ](.*)>/i)) {
				obj.dataAnalSexLevel = parseFloat(RegExp.$1);	
			} else if (line.match(/<MASTURBATE LVL:[ ](.*)>/i)) {
				obj.dataMasturbateLevel = parseFloat(RegExp.$1);	
			} else if (line.match(/<MASOCHISM LVL:[ ](.*)>/i)) {
				obj.dataMasochismLevel = parseFloat(RegExp.$1);	
			} else if (line.match(/<SADISM LVL:[ ](.*)>/i)) {
				obj.dataSadismLevel = parseFloat(RegExp.$1);	
			} else if (line.match(/<ENEMY PREFIX CHANCE:[ ](.*)>/i)) {
				obj.dataEnemyPrefixChance = parseFloat(RegExp.$1);	
			} else if (line.match(/<STENCH MIN:[ ](.*)>/i)) {
				obj.dataStench = parseInt(RegExp.$1);				
			} else if (line.match(/<STENCH RANGE:[ ](.*)>/i)) {
				obj.dataStenchRange = parseInt(RegExp.$1);
			} else if (line.match(/<SMEGMA MIN:[ ](.*)>/i)) {
				obj.dataSmegma = parseInt(RegExp.$1);				
			} else if (line.match(/<SMEGMA RANGE:[ ](.*)>/i)) {
				obj.dataSmegmaRange = parseInt(RegExp.$1);	
				
			} else if (line.match(/<OVERBLOW PROTECTION:[ ](.*)>/i)) {
				obj.dataOverblowProtection = parseInt(RegExp.$1);		
			} else if (line.match(/<VISITOR WALKING SPEED:[ ](.*)>/i)) {
				obj.dataVisitorWalkingSpeed = parseInt(RegExp.$1);	
			} else if (line.match(/<VISITOR WRITING SPEED:[ ](.*)>/i)) {
				obj.dataVisitorWritingSpeed = parseInt(RegExp.$1);
			} else if (line.match(/<VISITOR DISSATISFACTION:[ ](.*)>/i)) {
				obj.dataVisitorDissatisfaction = parseInt(RegExp.$1);
			} else if (line.match(/<VISITOR PERV PROMOTE CHANCE:[ ](.*)>/i)) {
				obj.dataVisitorPervPromoteChance = parseInt(RegExp.$1);	

			} else if (line.match(/<VISITOR CAN BE FAN:[ ](.*)>/i)) {
				obj.dataVisitorCanBeFan = parseInt(RegExp.$1);
			} else if (line.match(/<VISITOR CAN BE PERVERT:[ ](.*)>/i)) {
				obj.dataVisitorCanBePervert = parseInt(RegExp.$1);
				
			} else if (line.match(/<VISITOR ALWAYS FAN:[ ](.*)>/i)) {
				obj.dataVisitorAlwaysFan = parseInt(RegExp.$1);
			} else if (line.match(/<VISITOR ALWAYS PERVERT:[ ](.*)>/i)) {
				obj.dataVisitorAlwaysPervert = parseInt(RegExp.$1);	
				
			} else if (line.match(/<VISITOR NOT VISITING:[ ](.*)>/i)) {
				obj.dataVisitorNotVisiting = parseInt(RegExp.$1);	
				
			} else if (line.match(/<EJACULATION AMOUNT:[ ](.*)>/i)) {
				obj.dataEjaculationAmt = parseInt(RegExp.$1);				
			} else if (line.match(/<EJACULATION RANGE:[ ](.*)>/i)) {
				obj.dataEjaculationRange = parseInt(RegExp.$1);	
			} else if (line.match(/<EJACULATION STOCK:[ ](.*)>/i)) {
				obj.dataEjaculationStock = parseFloat(RegExp.$1);	
			} else if (line.match(/<BASE ANGER:[ ](.*)>/i)) {
				obj.dataBaseAnger = parseInt(RegExp.$1);
			} else if (line.match(/<BASE ENEMY LEVEL:[ ](.*)>/i)) {
				obj.dataBaseEnemyLevel = parseInt(RegExp.$1);	
			} else if (line.match(/<BASE ENEMY LVL:[ ](.*)>/i)) {
				obj.dataBaseEnemyLevel = parseInt(RegExp.$1);
			} else if (line.match(/<ENEMY BASE LVL:[ ](.*)>/i)) {
				obj.dataBaseEnemyLevel = parseInt(RegExp.$1);	

			} else if (line.match(/<ENEMY MIN APPEAR REQ:[ ](.*)>/i)) {
				obj.dataMinAppearReq = parseInt(RegExp.$1);	
			} else if (line.match(/<ENEMY DOWNGRADE ID:[ ](.*)>/i)) {
				obj.dataDowngradeId = parseInt(RegExp.$1);	
			} else if (line.match(/<ENEMY UPGRADE REQ:[ ](.*)>/i)) {
				obj.dataUpgradeReq = parseInt(RegExp.$1);	
			} else if (line.match(/<ENEMY UPGRADE ID:[ ](.*)>/i)) {
				obj.dataUpgradeId = parseInt(RegExp.$1);	
			
			} else if (line.match(/<ROW HEIGHT:[ ](.*)>/i)) {
				obj.dataRowHeight = parseInt(RegExp.$1);
			} else if (line.match(/<FIXED ROW:[ ](.*)>/i)) {
				obj.dataFixedRow = parseInt(RegExp.$1);
			} else if (line.match(/<TRANSFER WANTED ENEMY ID:[ ](.*)>/i)) {
				obj.dataTransferWantedEnemyId = parseInt(RegExp.$1);	
			} else if (line.match(/<ENEMY TYPE:[ ](.*)>/i)) {
				obj.dataEnemyType = String(RegExp.$1).toLowerCase();	
			} else if (line.match(/<ENEMY COCK:[ ](.*)>/i)) {
				obj.dataEnemyCock = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<STARTING STANCE:[ ](.*)>/i)) {
				obj.dataStartingStance = String(RegExp.$1).toLowerCase();
			} else if (line.match(/<SPECIAL SELECTION NAME:[ ](.*)>/i)) {
				obj.dataSpecialSelectionName = String(RegExp.$1);	
			} else if (line.match(/<(?:BATTLERNAME NUM):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataBatternameNum = [];
				obj.dataBatternameNum = obj.dataBatternameNum.concat(array);
			} else if (line.match(/<(?:VISITOR TACHIE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataVisitorTachie = [];
				obj.dataVisitorTachie = obj.dataVisitorTachie.concat(array);	
			} else if (line.match(/<(?:AI ATTACK SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIAttackSkills = [];
				obj.dataAIAttackSkills = obj.dataAIAttackSkills.concat(array);		
			} else if (line.match(/<(?:AI CHARGE SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIChargeSkills = [];
				obj.dataAIChargeSkills = obj.dataAIChargeSkills.concat(array);			
			} else if (line.match(/<(?:AI PETTING SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIPettingSkills = [];
				obj.dataAIPettingSkills = obj.dataAIPettingSkills.concat(array);	
			} else if (line.match(/<(?:AI TALKSIGHT SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAITalkSightSkills = [];
				obj.dataAITalkSightSkills = obj.dataAITalkSightSkills.concat(array);	
			} else if (line.match(/<(?:AI POSESTART SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIPoseStartSkills = [];
				obj.dataAIPoseStartSkills = obj.dataAIPoseStartSkills.concat(array);
			} else if (line.match(/<(?:AI POSEJOIN SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIPoseJoinSkills = [];
				obj.dataAIPoseJoinSkills = obj.dataAIPoseJoinSkills.concat(array);
			} else if (line.match(/<(?:AI EJACULATION SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.dataAIEjaculationSkills = [];
				obj.dataAIEjaculationSkills = obj.dataAIEjaculationSkills.concat(array);
			}
		}

	};
};