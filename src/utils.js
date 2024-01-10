export function pointsForWord(word) {
    let points = 0;
    word.match(/\d+/) ? word = word.replace(/\d+/g, '') : null
    for (const char of word) {
        console.log("char is: ", char, " and it's a type of ", typeof char)
        points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
}