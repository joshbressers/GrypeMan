import map1 from './maps/map-1';
import map2 from './maps/map-2';
import map3 from './maps/map-3';
import map4 from './maps/map-4';

const times = [
    [
        { mode : 'scatter', time : 7 },
        { mode : 'chase', time : 20 },
        { mode : 'scatter', time : 7 },
        { mode : 'chase', time : 20 },
        { mode : 'scatter', time : 5 },
        { mode : 'chase', time : 20 },
        { mode : 'scatter', time : 5 },
        { mode : 'chase', time : 1000000 }
    ]
];

// This info was parsed from
// https://home.comcast.net/~jpittman2/pacman/pacmandossier.html#LvlSpecs
var data = [
    ["bot-bonus-1", "100", "80", "71", "75", "40", "20", "80", "10", "85", "90", "79", "50", "6", "5", map1, "maze-1"],
    ["bot-bonus-2", "200", "90", "79", "85", "45", "30", "90", "15", "95", "95", "83", "55", "5", "5", map1, "maze-1"],
    ["bot-bonus-3", "500", "90", "79", "85", "45", "40", "90", "20", "95", "95", "83", "55", "4", "5", map2, "maze-2"],
    ["bot-bonus-4", "500", "90", "79", "85", "45", "40", "90", "20", "95", "95", "83", "55", "3", "5", map2, "maze-2"],
    ["bot-bonus-5", "700", "100", "87", "95", "50", "40", "100", "20", "105", "100", "87", "60", "2", "5", map2, "maze-2"],
    ["bot-bonus-6", "700", "100", "87", "95", "50", "50", "100", "25", "105", "100", "87", "60", "5", "5", map3, "maze-3"],
    ["bot-bonus-7", "1000", "100", "87", "95", "50", "50", "100", "25", "105", "100", "87", "60", "2", "5", map3, "maze-3"],
    ["bot-bonus-8", "1000", "100", "87", "95", "50", "50", "100", "25", "105", "100", "87", "60", "2", "5", map3, "maze-3"],
    ["bot-bonus-1", "2000", "100", "87", "95", "50", "60", "100", "30", "105", "100", "87", "60", "1", "3", map3, "maze-3"],
    ["bot-bonus-2", "2000", "100", "87", "95", "50", "60", "100", "30", "105", "100", "87", "60", "5", "5", map4, "maze-4"],
    ["bot-bonus-3", "2000", "100", "87", "95", "50", "60", "100", "30", "105", "100", "87", "60", "2", "5", map4, "maze-4"],
    ["bot-bonus-4", "2000", "100", "87", "95", "50", "80", "100", "40", "105", "100", "87", "60", "1", "3", map4, "maze-4"],
    ["bot-bonus-5", "5000", "100", "87", "95", "50", "80", "100", "40", "105", "100", "87", "60", "1", "3", map4, "maze-4"],
    ["bot-bonus-6", "5000", "100", "87", "95", "50", "80", "100", "40", "105", "100", "87", "60", "3", "5", map3, "maze-3"],
    ["bot-bonus-7", "5000", "100", "87", "95", "50", "100", "100", "50", "105", "100", "87", "60", "1", "3", map3, "maze-3"],
    ["bot-bonus-8", "5000", "100", "87", "95", "50", "100", "100", "50", "105", "100", "87", "60", "1", "3", map3, "maze-3"],
    ["bot-bonus-8", "5000", "100", "87", "95", "50", "100", "100", "50", "105", "0", "0", "0", "0", "0", map3, "maze-3"],
    ["bot-bonus-8", "5000", "100", "87", "95", "50", "100", "100", "50", "105", "100", "87", "60", "1", "3", map4, "maze-4"],
    ["bot-bonus-8", "5000", "100", "87", "95", "50", "120", "100", "60", "105", "0", "0", "0", "0", "0", map4, "maze-4"],
    ["bot-bonus-8", "5000", "100", "87", "95", "50", "120", "100", "60", "105", "0", "0", "0", "0", "0", map4, "maze-4"],
    ["bot-bonus-8", "5000", "90", "79", "95", "50", "120", "100", "60", "105", "0", "0", "0", "0", "0", map4, "maze-4"]
];

var keys = [
    'game.bonusId',
    'game.bonusScore',
    'pacman.speed',
    'pacman.dotSpeed',
    'ghost.speed',
    'ghost.tunnelSpeed',
    '',
    '',
    '',
    '',
    'pacman.frightenedSpeed',
    'pacman.frightenedDotSpeed',
    'ghost.frightenedSpeed',
    'ghost.frightenedTime',
    'ghost.frightenedFlashes',
    'game.map',
    'game.maze'
];

export default function(level, key) {
    var obj = {};

    level = level > data.length ? data.length : level;

    // TODO: Add times data for each level.
    if (key === 'times') return times[0];

    var i = keys.length;

    while(i--) {
        var spl = keys[i].split('.');
        if (spl[0] === key) obj[spl[1]] = data[level - 1][i];
    }

    return obj;
}
