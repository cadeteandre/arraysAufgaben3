// =====================================
//  Arrays-TS-Iteration-Level-1_1 (forEach)
// =====================================
console.log('%c Level-1_1 (forEach) ', 'background: black; color: yellow;');

let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

const drinkList = document.querySelector('#drinkList') as HTMLElement;
const sortedDrinks = getraenke.toSorted((a: string, b: string) => a.localeCompare(b));

const myDrinks = () => {
    sortedDrinks.forEach((drink) => {
        drinkList.innerHTML += `<li>${drink}</li>`;
        console.log(drink);
    });
}

myDrinks();

// =====================================
//  Array-TS-Iteration-Level-1_2 (map)
// =====================================
console.log('%c Level-1_2 (map) ', 'background: black; color: yellow;');

const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];
const upperDrinks = drinks.map((drink) => drink.toUpperCase());
console.log(upperDrinks);
const whatDrinkILike = upperDrinks.map((drink) => `I like ${drink}`);
console.log(whatDrinkILike);

// =====================================
//  Array-TS-Iteration-Level-1_3
// =====================================
console.log('%c Level-1_3 ', 'background: black; color: yellow;');

let array: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const multipliedArr = array.map((num: number) => num * 2);
console.log(multipliedArr);
const sortedArr = multipliedArr.toSorted((a: number, b: number) => a - b);
console.log(sortedArr);

// =====================================
//  Array-TS-Iteration-Level-1_4 (map)
// =====================================
console.log('%c Level-1_4 (map) ', 'background: black; color: yellow;');

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const tempConverter = fahrenheit.map((temp) => {
    const celsius: number = (temp - 32) / 1.8;
    return celsius.toFixed(0);
}); 

console.log(fahrenheit);
console.log(tempConverter);

// =====================================
//  Array-TS-Iteration-Level-1_5 (map)
// =====================================
console.log('%c Level-1_5 (map) ', 'background: black; color: yellow;');

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const result = checkNumber.map((num) => num % 3 === 0 ? num + 100 : num);
console.log(result);

// ====================================================
//  Array-TS-Iteration-Level-1_6 (map oder forEach)
// ====================================================
console.log('%c Level-1_6 (map oder forEach) ', 'background: black; color: yellow;');

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
let fileNames: string[] = [];

album.forEach((file) => {
    const fileName = file.split('.');
    if(fileName[1] === undefined) {
        fileNames.push('invalid');
    } else {
        fileNames.push(fileName[0].toLowerCase());
    }
});
console.log(fileNames);

// ====================================================
//  Array-TS-Iteration-Level-1_7 (map)
// ====================================================
console.log('%c Level-1_7 (map) ', 'background: black; color: yellow;');

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];

const newFruitArr = fruits.map((fruit) => {
    fruit = `${fruit} 🥤`;
    return fruit;
});
console.log(fruits);
console.log(newFruitArr);

// ====================================================
//  Array-TS-Iteration-Level-1_8 (filter)
// ====================================================
console.log('%c Level-1_8 (filter) ', 'background: black; color: yellow;');

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printEvenNumbers = () => {
    console.log(zahlen.filter((num) => num % 2 === 0 ? num : null));
};
printEvenNumbers();

const printOddNumbers = () => {
    console.log(zahlen.filter((num) => num % 2 !== 0 ? num : null));
};
printOddNumbers();

// ====================================================
//  Array-TS-Iteration-Level-3_3 (mit innerHTML)
// ====================================================
console.log('%c Level-3_3 (mit innerHTML) ', 'background: black; color: yellow;');