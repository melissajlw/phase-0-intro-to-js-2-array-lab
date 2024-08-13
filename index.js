// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Function destructivelyAppendCat(name) appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function destructivelyPrependCat(name) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name)
}

// Function destructivelyRemoveLastCat() removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function destructivelyRemoveFirstCat() removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function appendCat(name) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// Function prependCat(name) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

// Function removeLastCat() removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function  removeFirstCat() removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}