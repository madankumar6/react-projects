Exercise: Creating arrays and objects
In this exercise lab you will practice creating arrays and objects.

Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.

var clothes = [];
clothes.push("Shirt");
clothes.push("Pant");
clothes.push("Jeans");
clothes.push("Jacket");
clothes.push("T-Shirt");

clothes.pop();

clothes.push("Casual");

console.log(clothes[2]);

var favCar = {};
favCar.color = "Red";
favCar.covertible = true;

console.log(favCar);


Jeans
{ color: 'Red', covertible: true }

Tips
Remember to use the object literal syntax: {}.

Remember to use the array literal syntax: [].

Resources
Video (Conceptual): Arrays


Video (Mix): Introduction to Arrays


Video (Conceptual): Objects


Video (Mix): Objects