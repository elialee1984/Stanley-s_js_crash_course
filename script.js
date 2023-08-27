// 1. + 2.
const num = 5;
if (num % 2 === 1) {
    console.log("Num is odd!")
}

// 3.
const colors = ["red", "blue", "green", "orange", "yellow"]

// 4.
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])

// 5.
for (const color of colors) {
    console.log(color)
}

// 6.
let counterOfColorsThatHaveMoreThanThreeCharacters = 0; // actually, I would never name a variable that way lol
for (const color of colors) {
    if (color.length > 3) {
        counterOfColorsThatHaveMoreThanThreeCharacters++;
    }
}
console.log(counterOfColorsThatHaveMoreThanThreeCharacters);

// 7.
const alc = {
    name: "casamigos",
    spirit: "tequila",
    percentage: 0.4,
    shotsUntilBlackout: 20,
}

// 8.
console.log(alc.name);
console.log(alc.spirit);
console.log(alc.percentage);
console.log(alc.shotsUntilBlackout);

// 9.
if (alc.percentage > 0.3) {
    console.log('This is a courtney style drink'); // LOL, what?
}

// 10.
const moreAlc = [
    {
        name: "Casamigos",
        spirit: "Tequila",
        percentage: 0.4,
        shotsUntilBlackout: 20,
    },
    {
        name: "Johnny Walker",
        spirit: "Whisky",
        percentage: 0.4,
        shotsUntilBlackout: 20,
    },
    {
        name: "Baileys",
        spirit: "irish cream liqueur",
        percentage: 0.17,
        shotsUntilBlackout: 50, //?
    },
]

// 11.
for (const bottle of moreAlc) {
    console.log(bottle.percentage);
}

// 12.
let counterNumberOfBottlesWithLowPercentage = 0;
for (const bottle of moreAlc) {
    if (bottle.percentage < 0.3) {
        counterNumberOfBottlesWithLowPercentage++;
    }
}
console.log(counterNumberOfBottlesWithLowPercentage);

// 13.
const numsOne = [1, 2, 3, 4, 5];
const average = numArr => {
    let sum = 0;
    for (const element of numArr) {
        sum += element;
    }
    return `The average of the given array is: ${sum / numArr.length}`
}
console.log(average(numsOne));

// 14.
const numsTwo = [4, 5, 6, 7, 1, 2];
console.log(average(numsTwo));

// 15.
const numsThree = [10, 2, 3, 4, 1, 2];
console.log(average(numsThree));

// 16.
const numsFour = [100, 12, 1, 3, 4];
console.log(average(numsFour));

// 17.
const numsFive = [1, 100, 2, 19, 3];
console.log(average(numsFive));

// Was that trolling? XD