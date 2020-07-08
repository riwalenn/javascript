function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let nombreAtrouver = getRandomInt(100);
console.log(nombreAtrouver);
const gameNumber = new GameNumber(nombreAtrouver);