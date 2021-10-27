// While Loop
const color = ["yellow", "red", "blue", "orange"]
let i = 0;
let colorLength = color.length;
while (i < colorLength) {
   color[i];
   i++;
}
console.log(color);

//For Loop
for (let i = 0; i < colorLength; i++) {

   color[i];
}

console.log(color);

//Foreach 
color.forEach(i => console.log(color));


/* How many lines does my for loop and my while loop take up? 1 line each
   How many rules does my forEach method take up? 3 lines
   What other advantages does using an array method have compared to a for or a while loop? For example, which method do you find easier to read? Why? The array method is more functional and declarative
   Can you use an array method on an object? The answer is no.
   Suppose you have an object with 45 properties. Try to figure out (use Google) how you can still console those 45 properties.log with a loop: Looping through the properties of an object.
   Try this piece of code and use a 5-property object for it. Are you iteratingnow? */

const newCars = [
   {
      brand: 'BMW',
      model: 'X5',
      type: 'SUV',
      fuel: 'Petrol',
      transmission: 'AUTO'
   },
   {
      brand: 'Mercedez Benz',
      model: 'CLS AMG',
      type: 'Sedan',
      fuel: 'Petrol',
      transmission: 'AUTO'
   },
   {
      brand: 'Audi',
      model: 'Q5',
      type: 'SUV',
      fuel: 'Diesel',
      transmission: 'MANUAL'
   },
   {
      brand: 'VW',
      model: 'Golf',
      type: 'Hacthback',
      fuel: 'Electric',
      transmission: 'MANUAL'
   },
   {
      brand: 'Lexus',
      model: 'is950',
      type: 'Sedan',
      fuel: 'Electric',
      transmission: 'MANUAL'
   },
];

newCars.forEach(newCars => {
   for (let key in newCars) {
      console.log(`${key}: ${newCars[key]}`);
   }
});

