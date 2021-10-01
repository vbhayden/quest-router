import constants from "./constants";
import leveling from "./leveling";
import formulas from "./formulas";

function getLowerIndex(value, levelingArray) {

    let index = 0;
    for (let levelRequirement of levelingArray) {
        if (value < levelRequirement)
            break;

        index++;
    }

    return index;
}

export default {

    calculateBossRow: function(coreBrian, routeBrian, boss, jp = false) {
        let row = {...boss};

        if (boss.name == constants.BOSS_NAMES.SOLVARING) {
            row.coreHits = formulas.calculateRequiredPillar1Hits(coreBrian.spirits, boss.element, boss.defense, boss.health, jp);
            row.routeHits = formulas.calculateRequiredPillar1Hits(routeBrian.spirits, boss.element, boss.defense, boss.health, jp);
        }
        else {
            row.coreHits = formulas.calculateRequiredAvalancheHits(coreBrian.spirits, boss.element, boss.defense, boss.health, jp);
            row.routeHits = formulas.calculateRequiredAvalancheHits(routeBrian.spirits, boss.element, boss.defense, boss.health, jp);
        }

        row.spirits = {...routeBrian.spirits}
        
        row.delta = row.routeHits - row.coreHits;

        return row;
    },

    addExperience: function(brian, xp, escapeRoute = false) {

        // console.log(`Adding ${xp} to Brian, ${brian.xp} + ${xp} => ${brian.xp + xp}`);

        let previousXP = brian.xp;
        let previousLevel = brian.level;
        
        let currentXP = previousXP + xp;
        let currentLevel = getLowerIndex(currentXP, leveling.combat);

        let newLevels = currentLevel - previousLevel;

        for (let k=0; k<newLevels; k++) {
            this.addBonusSpirit(brian.spirits, escapeRoute);
        }

        brian.xp = currentXP;
        brian.level = currentLevel;
        
        // console.log(`Current Level ${brian.level}`);
    },  

    addBonusSpirit: function (spirits, escapeRoute = false) {

        let firstWaterLimit = escapeRoute ? 23 : 19;
    
        // Exit or Escape
        if (spirits.WATER < firstWaterLimit) {
            spirits.WATER += 1;
            return;
        }
    
        // Avalanche w/ Padding
        if (spirits.EARTH < 27) {
            spirits.EARTH += 1;
            return;
        }
        
        // Heal 2
        if (spirits.WATER < 25) {
            spirits.WATER += 1;
            return;
        }
        
        if (spirits.EARTH < 50) {
            spirits.EARTH += 1;
            return;
        }
        
        if (spirits.WATER < 50) {
            spirits.WATER += 1;
            return;
        }
        
        if (spirits.FIRE < 50) {
            spirits.FIRE += 1;
            return;
        }
        
        if (spirits.AIR < 50) {
            spirits.AIR += 1;
            return;
        }
    }
}