import constants from "./constants";

function elementsAreOpposed(elementA, elementB) {
    let opposite = constants.OPPSITES[elementA];
    if (opposite != undefined && opposite == elementB)
        return true;

    return false;
}

function calculateElementBonus(spirits, spellElement) {

    let elements = Object.keys(constants.MAIN_ELEMENTS);
    let influences = elements.map(element => Math.floor(spirits[element] * constants.AFFINITIES[spellElement][element]));

    let totalInfluence = influences.reduce((a, b) => a + b);

    // console.log("Bonus Calc:", influences, totalInfluence);

    return constants.TOTAL_ELEMENT_BONUSES[totalInfluence];
}

function getTypeCoefficient(damageElement, actorElement, isJP = false) {
    if (damageElement == actorElement)
        return 0.5;
    
    let opposed = elementsAreOpposed(damageElement, actorElement);
    if (opposed)
        return 1.25;
    
    if (actorElement == constants.ELEMENTS.NEUTRAL)
        return isJP ? 1.0 : 0.5;

    return 1;
}

function calculateSpellDamage(spirits, spellPower, spellElement, enemyElement, enemyDefense, isJP = false) {

    let elementBonus = calculateElementBonus(spirits, spellElement);
    let totalPower = spellPower * elementBonus;

    let typeCoefficient = getTypeCoefficient(spellElement, enemyElement, isJP);
    let rawDamage = Math.floor(typeCoefficient * totalPower);

    let totalElements = Object.keys(spirits).map(element => spirits[element]).reduce((a, b) => a + b);
    let defenseCoefficient = totalElements / Math.floor(totalElements + enemyDefense);
    
    return Math.floor(rawDamage * defenseCoefficient);
}

function calculateAvalancheDamage(spirits, enemyElement, enemyDefense, isJP = false) {
    return calculateSpellDamage(spirits, 460, constants.ELEMENTS.EARTH, enemyElement, enemyDefense, isJP);
}

function calculateRequiredAvalancheHits(spirits, enemyElement, enemyDefense, enemyHealth, isJP = false) {
    let minimumRockDamage = calculateAvalancheDamage(spirits, enemyElement, enemyDefense, isJP);
    return Math.ceil(enemyHealth / minimumRockDamage);
}

function calculatePillar1Damage(spirits, enemyElement, enemyDefense, isJP = false) {
    return calculateSpellDamage(spirits, 365, constants.ELEMENTS.WATER, enemyElement, enemyDefense, isJP);
}

function calculateRequiredPillar1Hits(spirits, enemyElement, enemyDefense, enemyHealth, isJP = false) {
    let minimumRockDamage = calculatePillar1Damage(spirits, enemyElement, enemyDefense, isJP);
    return Math.ceil(enemyHealth / minimumRockDamage);
}

export default {
    calculateSpellDamage,
    calculateAvalancheDamage,
    calculateRequiredAvalancheHits,
    calculatePillar1Damage,
    calculateRequiredPillar1Hits
}