import factory from "./factory"
import constants from "./constants"

const names = constants.BOSS_NAMES;

const spirits = [
    factory.createSpirit(names.SOLVARING, true, 0, "Melrode Monastery", "In the haystack of the Monastery stable."),
    factory.createSpirit(names.SOLVARING, true, 0, "Melrode", "In the far corner of the sheep green."),
    factory.createSpirit(names.SOLVARING, true, 0, "Holy Plan", "In the souther corner of the eastern shore with trees."),
    factory.createSpirit(names.SOLVARING, true, 0, "Holy Plan", "Inside the gypsy's hut"),
    factory.createSpirit(names.SOLVARING, true, 0, "Holy Plan", "Outside house by fork."),
    factory.createSpirit(names.SOLVARING, true, 0, "Dondoran", "In the middle of the quarry."),

    factory.createSpirit(names.SOLVARING, true, 0, "Connor Forest", "Right by the sign on the path on the way to the Loch."),
    factory.createSpirit(names.SOLVARING, true, 0, "Connor Forest", "In between some trees on the first curve on the way to the Loch."),
    factory.createSpirit(names.SOLVARING, true, 0, "Connor Forest", "Inside the Hut"),
    factory.createSpirit(names.SOLVARING, true, 0, "Connor Forest", "Under a forked tree on the path to the fort."),
    factory.createSpirit(names.SOLVARING, true, 0, "Connor Forest", "By some trees in front of the fort gate."),

    // Zelse Start
    factory.createSpirit(names.ZELSE, true, 0, "Dondoran Flats", "End of the eastern path right out of Connor."),
    factory.createSpirit(names.ZELSE, true, 0, "Dondoran Flats", "End of the northern path on the way to Glencoe."),
    factory.createSpirit(names.ZELSE, true, 0, "Dondoran Flats", "End of the northern path from the central glen."),

    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "By the northeast end of the first lake."),
    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "By the northwest end of the first lake."),
    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "By the center of the western wall on the side of the first lake."),
    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "In front of the cottage."),
    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "By the nitch in the western wall leading to the valley."),
    factory.createSpirit(names.ZELSE, true, 0, "Glencoe Forest", "By the north east end of the valley near the entrance to the Blue Cave."),

    factory.createSpirit(names.ZELSE, true, 0, "West Carmagh", "On top of the slope right by the path from the docks."),
    factory.createSpirit(names.ZELSE, true, 0, "West Carmagh", "On top of the slope by the bridge and signs."),
    factory.createSpirit(names.ZELSE, true, 0, "West Carmagh", "Outside the house at the entrance to Cull Hazard."),

    factory.createSpirit(names.ZELSE, true, 0, "Cull Hazard", "At the eastern base of the plateau-ish rock."),
    factory.createSpirit(names.ZELSE, true, 0, "Cull Hazard", "Right next to the first chest by the plateau-ish rock."),
    factory.createSpirit(names.ZELSE, true, 0, "Normoon", "In the middle of the southern field."),
    factory.createSpirit(names.ZELSE, true, 0, "Normoon", "In the northwest corner of the southern field."),
    factory.createSpirit(names.ZELSE, true, 0, "Normoon", "In the southeast corner of the northern field."),
    factory.createSpirit(names.ZELSE, true, 0, "Windward", "By the path around the first bend."),
    factory.createSpirit(names.ZELSE, true, 0, "Windward", "Behind the house."),
    factory.createSpirit(names.ZELSE, true, 0, "Windward", "Inside of the house."),

    // Nepty Start
    factory.createSpirit(names.NEPTY, true, 0, "Windward", "Behind a tree by Zelse."),

    factory.createSpirit(names.NEPTY, false, 60, "Dondoran", "In the treasure room behind the throne."),
    factory.createSpirit(names.NEPTY, false, 30, "Dondoran", "Search the bookshelf in the castle library for a passage."),

    factory.createSpirit(names.NEPTY, true, 0, "Larapool", "By a slope on the path to Blue Cave, when the water drains."),
    factory.createSpirit(names.NEPTY, true, 0, "Larapool", "By the inn's other basement exit, when the water drains."),
    factory.createSpirit(names.NEPTY, true, 0, "Larapool", "By nitch in the wall of the temple entrance to the Blue Cave."),

    factory.createSpirit(names.NEPTY, false, 105, "Blue Cave", "Wrong turn at first arrow."),
    factory.createSpirit(names.NEPTY, false, 60, "Blue Cave", "Wrong turn at fourth arrow."),
    factory.createSpirit(names.NEPTY, true, 0, "Blue Cave", "Base of the pillar at the end of the tunnels."),
    factory.createSpirit(names.NEPTY, false, 25, "Blue Cave", "From maze beginning, left."),
    factory.createSpirit(names.NEPTY, true, 50, "Blue Cave", "From maze beginning, right, left."),
    factory.createSpirit(names.NEPTY, false, 28, "Blue Cave", "From maze beginning, strait, right, left."),
    factory.createSpirit(names.NEPTY, true, 0, "Blue Cave", "Behind Epona's house."),

    factory.createSpirit(names.NEPTY, true, 0, "Loch Kilderey", "In the hold of Kiliac's ship."),
    
    factory.createSpirit(names.NEPTY, true, 0, "Isle of Skye", "On the dock."),
    factory.createSpirit(names.NEPTY, true, 0, "Isle of Skye", "By the gate of Colleen's house."),
    factory.createSpirit(names.NEPTY, true, 0, "Isle of Skye", "Behind Colleen's house."),
    factory.createSpirit(names.NEPTY, true, 0, "Isle of Skye", "In back of the Circle of Stones."),

    // Shilf Start
    factory.createSpirit(names.SHILF, true, 0, "Isle of Skye", "Colleen's other room."),

    factory.createSpirit(names.SHILF, false, 20, "East Limelin", "Take the boat back to Dondoran Flats and check the boxes in the ship before you exit."),
    factory.createSpirit(names.SHILF, true, 20, "East Limelin", "In south corner of bend to main field."),

    // Quick 5 takes about 1:30
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "By a bushel in the port."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "By the fence of the condemned house."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "By the gate of the grain field."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "Behind the jail house."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "By the shackles in the jail."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "At the base of the pillar in the castle gardens."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "Behind the relief in the grand hall 1."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "Behind the relief in the grand hall 2."),
    factory.createSpirit(names.SHILF, false, 0, "Limelin", "Search the bookshelf in the castle library."),
    factory.createSpirit(names.SHILF, false, 50, "East Limelin", "Wrong turn on the way to Baragoon Tunnel."),
    factory.createSpirit(names.SHILF, true, 0, "East Limelin", "To the right of the steps leading into the mine area."),
    factory.createSpirit(names.SHILF, true, 0, "East Limelin", "Underneath the scaffold in the mine area."),
    factory.createSpirit(names.SHILF, true, 0, "East Limelin", "By a pile of wood in the shack by the mine."),
    factory.createSpirit(names.SHILF, true, 0, "East Limelin", "By a pile of ore in the shack by the mine."),
    factory.createSpirit(names.SHILF, true, 0, "Baragoon Tunnel", "By the door before the really long shaft."),
    factory.createSpirit(names.SHILF, true, 0, "Baragoon Tunnel", "Make a left at the entrance to the halls."),
    factory.createSpirit(names.SHILF, false, 25, "Baragoon Tunnel", "In the lower nitch on the left in the big room of the halls."),
    factory.createSpirit(names.SHILF, false, 35, "Baragoon Tunnel", "By the wall on at the end of the right upper level in the big room of the halls."),

    // Fargo Start
    factory.createSpirit(names.FARGO, true, 0, "Baragoon Tunnel", "Between the two chests in the room after Shilf."),

    factory.createSpirit(names.FARGO, false, 15, "Dindom Dries", "In the first tent."),
    factory.createSpirit(names.FARGO, false, 90, "Dindom Dries", "In the southwest corner of the upper section of the desert."),
    factory.createSpirit(names.FARGO, false, 90, "Dindom Dries", "In the middle of the desert; three rock curves east, three dunes south."),
    factory.createSpirit(names.FARGO, true, 10, "Dindom Dries", "At the wrong turn to enter Greenoch."),
    factory.createSpirit(names.FARGO, false, 60, "Dindom Dries", "Base of the southern edge of the lava field."),
    factory.createSpirit(names.FARGO, true, 0, "Dindom Dries", "In the craggy section of the road."),
    factory.createSpirit(names.FARGO, true, 0, "Dindom Dries", "By the entrance to the Boil Hole, where the road cracks."),
    factory.createSpirit(names.FARGO, false, 30, "Boil Hole", "By a bend in the second roofed section."),

    // Guilty Start
    factory.createSpirit(names.GUILTY, true, 15, "Boil Hole", "In the southern corner in the room with Fargo."),

    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "When exiting the teleporter, hug the right side to find an invisible path around."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "On the north side of the palace on the ground courtyard."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the treasure room 1."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the treasure room 2."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "On the north side of outside tier."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the northeast corner of the topmost outside tier."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the top room 1."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the top room 2."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the top room 3."),
    factory.createSpirit(names.GUILTY, false, 0, "Shamwood", "In the top room 4."),
    
    factory.createSpirit(names.GUILTY, true, 0, "Baragoon Moor", "Corner of the inn outside."),
    factory.createSpirit(names.GUILTY, true, 0, "Baragoon Moor", "Second floor of the inn."),
    factory.createSpirit(names.GUILTY, false, 7, "Baragoon Moor", "Northern edge of the platform."),
    factory.createSpirit(names.GUILTY, false, 25, "Baragoon Moor", "Eastern edge of the platform."),
    factory.createSpirit(names.GUILTY, false, 15, "Baragoon Moor", "Southern edge of the platform."),
    factory.createSpirit(names.GUILTY, false, 31, "Baragoon Moor", "Outer platform in back of Brannoch Castle."),
    factory.createSpirit(names.GUILTY, false, 20, "Brannoch Castle", "In the corner of a room at the first side door."),

    // Beigis Start
    factory.createSpirit(names.BEIGIS, true, 11, "Brannoch Castle", "In the corner of the save room."),
]

console.log(spirits.length);

export default spirits;
