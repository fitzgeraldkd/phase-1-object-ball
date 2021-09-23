function gameObject() {
    let myObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };

    return myObject;
}

function numPointsScored(playerName) {
    return playerStats(playerName).points;
}

function shoeSize(playerName) {
    return playerStats(playerName).shoe;
}

function teamColor(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}

function teamNames() {
    let game = gameObject();
    let returnArray = [];
    for(let team in game) {
        returnArray.push(game[team].teamName)
    }
    return returnArray;
}

function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
     for(let team in game) {
        if(game[team].teamName === teamName) {
            for(let members in game[team].players) {
                numbers.push(game[team].players[members].number)
            }
        }
    }
    return numbers
}

function playerStats(playerName) {
    let game = gameObject();
    for(let team in game) {
        for(let player in game[team].players) {
            if(player === playerName) {
                return game[team].players[player]
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let largestShoeTeam = "";
    let largestShoePlayer = "";
    for(let team in game) {
        for(let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                largestShoeTeam = team;
                largestShoePlayer = player;
            }
        }
    }
    return game[largestShoeTeam].players[largestShoePlayer].rebounds;
}

function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let mostPointsPlayer = "";
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > mostPoints) {
                mostPoints = game[team].players[player].points;
                mostPointsPlayer = player;
            }
        }
    }
    return mostPointsPlayer;
}

function winningTeam() {
    let game = gameObject();
    let mostTeamPoints = 0;
    let winningTeam = "";
    for (let team in game) {
        let thisTeamPoints = 0;
        for (let player in game[team].players) {
            thisTeamPoints += game[team].players[player].points
        }
        if (thisTeamPoints > mostTeamPoints) {
            mostTeamPoints = thisTeamPoints;
            winningTeam = team;
        }
    }
    return game[winningTeam].teamName;
}

function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
            }
        }
    }
    if (playerStats(longestName).steals === mostSteals) {
        return true;
    } else {
        return false;
    }
}

console.log("Home Points: ", numPointsScored("Alan Anderson"));
console.log("Away Points: ", numPointsScored("Brendan Haywood"));
console.log("Home Shoe size: ", shoeSize("Alan Anderson"));
console.log("Away Shoe size: ", shoeSize("Brendan Haywood"));
console.log("Nets Colors: ", teamColor("Brooklyn Nets"));
console.log("Hornets Colors: ", teamColor("Charlotte Hornets"));
console.log("Names: ", teamNames())
console.log('Numbers Charlotte:' , playerNumbers('Charlotte Hornets'))
console.log('Numbers Brooklyn:' , playerNumbers('Brooklyn Nets'))
console.log('Player Object:' , playerStats('Alan Anderson'))
console.log("Shoe Rebounds: ", bigShoeRebounds())
console.log("Most Points: ", mostPointsScored())
console.log("Winning Team: ", winningTeam())
console.log("Longest Name: ", playerWithLongestName())
console.log("Long Name Steals Most: ", doesLongNameStealATon())