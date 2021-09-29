import factory from "./factory";
import constants from "./constants";

export default [

    // Enemy(NAME, HP, DEFENSE, AGILITY, XP, ELEMENT)
    factory.createEnemy(constants.BOSS_NAMES.SOLVARING, 200,  15, 17, 100,  constants.ELEMENTS.EARTH),
    factory.createEnemy(constants.BOSS_NAMES.ZELSE,     680,  30, 60, 1200, constants.ELEMENTS.AIR),
    factory.createEnemy(constants.BOSS_NAMES.NEPTY,     880,  65, 80, 2000, constants.ELEMENTS.WATER),
    factory.createEnemy(constants.BOSS_NAMES.SHILF,     1000, 77, 90, 2800, constants.ELEMENTS.AIR),

    factory.createEnemy(constants.BOSS_NAMES.FARGO,  1500, 88,  100, 3600, constants.ELEMENTS.FIRE),
    factory.createEnemy(constants.BOSS_NAMES.GUILTY, 1800, 88,  120, 5000, constants.ELEMENTS.NEUTRAL),
    factory.createEnemy(constants.BOSS_NAMES.BEIGIS, 1900, 100, 140, 7000, constants.ELEMENTS.FIRE),
    factory.createEnemy(constants.BOSS_NAMES.MAMMON, 2300, 100, 15,  0,    constants.ELEMENTS.NEUTRAL),
]
