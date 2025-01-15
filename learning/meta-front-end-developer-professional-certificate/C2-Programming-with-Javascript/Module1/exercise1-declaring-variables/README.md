Exercise: Declaring variables

1. Declare a new variable named **petDog** and give it the name **Rex**.
2. Declare a new variable named **petCat** and give it the name **Pepper**.
3. Log the **petDog** variable to the console.
4. Log the **petCat** variable to the console.
5. Log the following to the console: the text **"My pet dog's name is: "** and the **petDog** variable.
6. Log the following to the console: the text **"My pet cat's name is: "** and the **petCat** variable.
7. Declare another variable and name it **catSound**. Assign the string of **"purr"** to it.
8. Declare another variable and name it **dogSound**. Assign the string of **"woof"** to it.
9. Log the following to the console: the variable **petDog**, then the string **"says"**, then the variable **dogSound**.
10. Log the following to the console: the variable **petCat**, then the string **"says"**, then the variable **catSound**.
11. Reassign the value stored in **catSound** to the string **"meow"**.
12. Log the following to the console: the variable **petCat**, then the string **"now says"**, then the variable **catSound**.

Make sure to output all your variables. Feel free to play.

var petDog = "Rex";
var petCat = "Pepper";


console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, " says ", dogSound);
console.log(petCat, " says ", catSound);

catSound = "meow";
console.log(petCat, " now says ", catSound);
