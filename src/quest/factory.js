import constants from "./constants";

function createEnemy(name, health, defense, agility, xp, element) {
    return {
        name,
        health,
        defense,
        agility,
        xp,
        element
    }
}

function createSpirits(water, earth, fire, air) {
    return {
        [constants.ELEMENTS.WATER]: water,
        [constants.ELEMENTS.EARTH]: earth,
        [constants.ELEMENTS.FIRE]: fire,
        [constants.ELEMENTS.AIR]: air,
    }
}

function copySpirits(otherSpirits) {
    return {...otherSpirits};
}

function createBrian(spirits, xp) {
    return {
        spirits,
        level: 0,
        xp
    }
}

function copyBrian(otherBrian) {
    return {
        spirits: {...otherBrian.spirits},
        level: otherBrian.level,
        xp: otherBrian.xp
    }
}

function parseDuration(duration) {
    if (typeof duration == "number")
        return duration;

    let parts = duration.split(":");
    let minutes = Number.parseInt(parts[0]);
    let seconds = Number.parseInt(parts[1]);

    return minutes * 60 + seconds;
}

/**
 * 
 * @param {String} area Which boss is this spirit associated with
 * @param {Boolean} core Is this part of the standard route?
 * @param {Number} timePenalty How long does this spirit take to collect?
 * @returns 
 */
/**
 * 
 * @param {String} area Which boss is this spirit associated with
 * @param {Boolean} core Is this part of the standard route?
 * @param {String} timePenalty How long does this spirit take to collect?
 * @returns 
 */
function createSpirit(area, core, timePenalty, name, description, index) {
    return {
        index,
        area,
        core,
        timePenalty: parseDuration(timePenalty),
        name,
        description,
    }
}



export default {
    createEnemy,
    createSpirits,
    copySpirits,
    createBrian,
    copyBrian,
    createSpirit
}