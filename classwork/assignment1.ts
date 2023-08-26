//  1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let varNameString : string = "Usman";
console.log(`Hello ${varNameString}, would you like to learn some Python today?`);


// 2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let varCaseString: string = "Usman";
console.log(varCaseString.toLowerCase());
console.log(varCaseString.toUpperCase());
console.log(varCaseString[0].toUpperCase() + varCaseString.slice(1).toLowerCase());

// 3. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log(`Imam Ali (AS) once said, "The biggest shame is to mock at something that you have in yourself."`);

// 4. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Imam Ali (AS)";
let message: string = "The biggest shame is to mock at something that you have in yourself.";
console.log(`${famous_person} once said, "${message}"`);

// 5. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let varStrippingName: string = "\t\n Usman \n\t";
console.log(varStrippingName);
console.log(varStrippingName.trim());

// 6. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let varAddition: number = 5 + 3;
let varSubtraction: number = 10 - 2;
let varMultiplication: number = 4 * 2;
let varDivision: number = 16 / 2;

console.log(varAddition);
console.log(varSubtraction);
console.log(varMultiplication);
console.log(varDivision);


// 7. You should create four lines that look like this:console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

// 8. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let varFavoriteNumber: number = 42;
let varMessage: string = `My favorite number is ${varFavoriteNumber}.`;
console.log(varMessage); 

// 9. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Name: Muhammad Usman
// Date: 19-07-2023
// Description: This program stores name in a variabale and shows lowercase, UPPERCASE and Titlecase

// Stores name in string type varible named varCaseString1
let varCaseString1: string = "Usman"; 

// Print name in lowercase by using bultin toLowerCase method of string 
console.log(varCaseString1.toLowerCase()); // Result: usman 

// Print name in UPPERCASE by using bultin toUpperCase method of string 
console.log(varCaseString1.toUpperCase()); // Result: USMAN

// Print name in Titlecase by using bultin toUpperCase method of string on first element of name string and concatename the rest of the string in lowercase with toLowerCase method of string  
console.log(varCaseString1[0].toUpperCase() + varCaseString1.slice(1).toLowerCase()); // Result: Usman

// Name: Muhammad Usman
// Date: 19-07-2023
// Description: This program stores name in a variabalewith some spaces and prints it with and without spaces.

// Stores name with spaces in string type varible named varStrippingName1
let varStrippingName1: string = "\t\n Usman \n\t";

// Prints the varStrippingName1 variable as it is.
console.log(varStrippingName1);

// Prints the varStrippingName1 varible after removing the spaces aroung with trim function of string object.
console.log(varStrippingName1.trim());


// 10. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let arrNames: string[] = ["Muhamamd", "Usman", "Rasheed", "Hassan"];
console.log(arrNames[0]);
console.log(arrNames[1]);
console.log(arrNames[2]);
console.log(arrNames[3]);

// 11. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let arrNames1: string[] = ["Muhamamd", "Usman", "Rasheed", "Hassan"];
console.log(`Hello ${arrNames1[0]}, How are you?`);
console.log(`Hello ${arrNames1[1]}, How are you?`);
console.log(`Hello ${arrNames1[2]}, How are you?`);
console.log(`Hello ${arrNames1[3]}, How are you?`);

// 12. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let cars: string[] = ["Toyota", "Honda", "BMW", "Tesla"];
console.log(`I have a ${cars[0]} car.`);
console.log(`${cars[1]} cars are very expensive.`); 
console.log(`I dream to have a ${cars[2]} car.`); 
console.log(`${cars[3]} is the next generation car.`);

// 13. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let arrGuests: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];

for (let i = 0; i < arrGuests.length; i++) {
  console.log(`Dear ${arrGuests[i]}, I would like to invite you to dinner at my place.`)
}

// 14. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let arrGuests1: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];

for (let i = 0; i < arrGuests1.length; i++) {
  console.log(`Dear ${arrGuests1[i]}, I would like to invite you to dinner at my place.`)
}
console.log(`${arrGuests1[2]} can't attend the dinner.`);
arrGuests1[2] = "Bilal";
for (let i = 0; i < arrGuests1.length; i++) {
  console.log(`Dear ${arrGuests1[i]}, I would like to invite you to dinner at my place.`)
}

// 15. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let arrGuests2: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];

for (let i = 0; i < arrGuests2.length; i++) {
  console.log(`Dear ${arrGuests2[i]}, I would like to invite you to dinner at my place.`)
}
console.log(`${arrGuests2[2]} can't attend the dinner.`);
arrGuests2[2] = "Bilal";
for (let i = 0; i < arrGuests2.length; i++) {
  console.log(`Dear ${arrGuests2[i]}, I would like to invite you to dinner at my place.`)
}
console.log("Hurrah!!! We found a bigger dinner table, so We can invite more guests.");
arrGuests2.unshift("Farhan");
arrGuests2.splice(3, 0, "Basit");
arrGuests2.push("Ali");
for (let i = 0; i < arrGuests2.length; i++) {
    console.log(`Dear ${arrGuests2[i]}, I would like to invite you to dinner at my place.`)
}

// 16. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let arrGuests3: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];

for (let i = 0; i < arrGuests3.length; i++) {
  console.log(`Dear ${arrGuests3[i]}, I would like to invite you to dinner at my place.`)
}
console.log(`${arrGuests3[2]} can't attend the dinner.`);
arrGuests3[2] = "Bilal";
for (let i = 0; i < arrGuests3.length; i++) {
  console.log(`Dear ${arrGuests3[i]}, I would like to invite you to dinner at my place.`)
}
console.log("Hurrah!!! We found a bigger dinner table, so We can invite more guests.");
arrGuests3.unshift("Farhan");
arrGuests3.splice(3, 0, "Basit");
arrGuests3.push("Ali");
for (let i = 0; i < arrGuests3.length; i++) {
    console.log(`Dear ${arrGuests3[i]}, I would like to invite you to dinner at my place.`)
}
console.log("I'm sorry, but We can invite only two people for dinner.");

let varItemsToRemove: number = arrGuests3.length - 2; 
for (let i = 0; i < varItemsToRemove; i++) {
    console.log(`Dear ${arrGuests3.pop()}, I'm sorry I can't invite you to dinner.`);
}


console.log(`Dear ${arrGuests3[0]}, you're still invited to dinner.`); 
console.log(`Dear ${arrGuests3[1]}, you're still invited to dinner.`); 

arrGuests3.pop();
arrGuests3.pop();

console.log(arrGuests3); 

// 17. Seeing the World: Think of at least five places in the world you’d like to visit.

    // • Store the locations in a array. Make sure the array is not in alphabetical order.
    let arrPlaces: string[] = ["Lahore", "Karachi", "Peshawar", "Quetta", "Faisalabad"];

    // • Print your array in its original order.
    console.log(arrPlaces);

    // • Print your array in alphabetical order without modifying the actual list.
    console.log(arrPlaces.slice().sort());

    // • Show that your array is still in its original order by printing it.
    console.log(arrPlaces); 

    // • Print your array in reverse alphabetical order without changing the order of the original list.
    console.log(arrPlaces.slice().sort().reverse());

    // • Show that your array is still in its original order by printing it again.
    console.log(arrPlaces);

    // • Reverse the order of your list. Print the array to show that its order has changed.
    arrPlaces.reverse();
    console.log(arrPlaces);

    // • Reverse the order of your list again. Print the list to show it’s back to its original order.
    arrPlaces.reverse();
    console.log(arrPlaces);
    // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    arrPlaces.sort();
    console.log(arrPlaces); 
    // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    arrPlaces.sort().reverse();
    console.log(arrPlaces);

// 18. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let arrGuests4: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];

for (let i = 0; i < arrGuests4.length; i++) {
  console.log(`Dear ${arrGuests4[i]}, I would like to invite you to dinner at my place.`)
}
console.log(`We have invited ${arrGuests4.length} people to dinner.`);

// 19. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let arrCountries: string[] = ["Amarica", "Brazil", "France", "China", "UAE", "Pakistan"];
console.log(arrCountries); 

// 20. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let objStudent: {name: string, age: number, rollNumber: string} = {
    name: "Muhammad Usman",
    age: 41,
    rollNumber: " PIAIC78068"
  };
  
  console.log(objStudent);

  // 21. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let arrGuests5: string[] = ["Muhammad", "Usman", "Rasheed","Hassan"];
//console.log(arrGuests5[4]); // Error Message: Undefined

// 22. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// Declare a variable for varCar
let varCar: string = "subaru";

// i. Test if varCar is equal to "subaru"
console.log("Is varCar == 'subaru'? I predict true.");
console.log(varCar == "subaru"); 

// ii. Test if varCar is not equal to "audi"
console.log("Is varCar != 'audi'? I predict true."); 
console.log(varCar != "audi"); 

// iii. Test if varCar is equal to "subaru" or "toyota"
console.log("Is varCar == 'subaru' || varCar == 'toyota'? I predict true.");
console.log(varCar == "subaru" || varCar == "toyota"); 

// iv. Test if the first letter of varCar is "s"
console.log("Is varCar[0] == 's'? I predict true."); 
console.log(varCar[0] == "s"); 

// v. Test if the type of varCar is a string
console.log("Is typeof(varCar) == 'string'? I predict true."); 
console.log(typeof(varCar) == "string");

// vi. Test if varCar is equal to "bmw" or "mercedes"
console.log("Is varCar == 'bmw' || varCar == 'mercedes'? I predict false.");
console.log(varCar == "bmw" || varCar == "mercedes");

// vii. Test if the length of varCar is 6
console.log("Is varCar.length == 6? I predict false."); 
console.log(varCar.length == 6); 

// viii. Test if varCar is equal to "Subaru" (case-sensitive)
console.log("Is varCar == 'Subaru'? I predict false."); // Is varCar == 'Subaru'? I predict false.
console.log(varCar == "Subaru"); // false

// ix. Test if the last letter of varCar is "x"
console.log("Is varCar[varCar.length - 1] == 'x'? I predict false."); 
console.log(varCar[varCar.length - 1] == "x");

// x. Test if the type of varCar is a number
console.log("Is typeof(varCar) == 'number'? I predict false."); 
console.log(typeof(varCar) == "number");

// 23. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
let varCar2: string = "subaru";
console.log(varCar2 == "subaru"); 
console.log(varCar2 == "toyota"); 
console.log(varCar2 != "Subaru"); 
console.log(varCar2 != "Toyota"); 

console.log(varCar2.toLowerCase() == "subaru"); 
console.log(varCar2.toLowerCase() == "SUBARU"); 

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let varCar2Length: number = varCar2.length;
console.log(varCar2Length == 6); 
console.log(varCar2Length == 10); 
console.log(varCar2Length != 6); 
console.log(varCar2Length != 10);
console.log(varCar2Length > 6); 
console.log(varCar2Length > 20); 
console.log(varCar2Length < 6); 
console.log(varCar2Length < 10); 
console.log(varCar2Length >= 6); 
console.log(varCar2Length >= 10); 
console.log(varCar2Length <= 6); 
console.log(varCar2Length <= 20); 

// Tests using "and" and "or" operators
console.log(varCar2Length > 5 && varCar2Length < 10); 
console.log(varCar2Length > 9 && varCar2Length < 10); 
console.log(varCar2Length > 5 || varCar2Length < 10); 
console.log(varCar2Length > 9 || varCar2Length < 6); 

// Test whether an item is in a array
let arrColors: string[] = ["red", "green", "blue"];
console.log(arrColors.includes("red")); 
console.log(arrColors.includes("yellow")); 

// Test whether an item is not in a array
let arrFruits: string[] = ["apple", "banana", "orange"];
console.log(!arrFruits.includes("grape")); 
console.log(!arrFruits.includes("banana")); 

// 24. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
    // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
    let alien_color: string = "green";
    if (alien_color == "green") {
    console.log("You just earned 5 points!"); 
    }

    // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
    let alien_color1: string = "red";
    if (alien_color1 == "green") {
    console.log("You just earned 5 points!");
    }

// 25. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// Program to execute the if part of the if-else statement
let alienColor2: string = "green";

if (alienColor2 === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points for shooting the alien.");
}

// Program to execute the else part of the if-else statement
let alienColor3: string = "red";

if (alienColor3 === "green") {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points for shooting the alien.");
}


// 26. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

    // i. If the alien is green, print a message that the player earned 5 points.
    let alienColor4: string = "green";
    if (alienColor4 === "green") {
    console.log("You earned 5 points.");
    } else if (alienColor4 === "yellow") {
    console.log("You earned 10 points.");
    } else if (alienColor4 === "red") {
    console.log("You earned 15 points.");
    } else {
    console.log("Invalid color.");
    }

    // ii. If the alien is yellow, print a message that the player earned 10 points.
    let alienColor5: string = "yellow";
    if (alienColor5 === "green") {
    console.log("You earned 5 points.");
    } else if (alienColor5 === "yellow") {
    console.log("You earned 10 points.");
    } else if (alienColor5 === "red") {
    console.log("You earned 15 points.");
    } else {
    console.log("Invalid color.");
    }

    // iii. If the alien is red, print a message that the player earned 15 points.
    let alienColor6: string = "yellow";
    if (alienColor6 === "green") {
    console.log("You earned 5 points.");
    } else if (alienColor6 === "yellow") {
    console.log("You earned 10 points.");
    } else if (alienColor6 === "red") {
    console.log("You earned 15 points.");
    } else {
    console.log("Invalid color.");
    }


// 27. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// 28. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits: string[] = ["apple", "mango", "banana"];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}


// 29. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let arrUserNames : string[] = ["admin", "usman", "rasheed", "hassan", "bilal"];

for (let userName of arrUserNames) {
  if (userName == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
}


// 30. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let arrUserNames1 : string[] = ["admin", "usman", "rasheed", "hassan", "bilal"];

if(arrUserNames1.length === 0 ){
    console.log("We need to find some users!");
} else {
    for (let userName of arrUserNames1) {
        if (userName == "admin") {
          console.log("Hello admin, would you like to see a status report?");
        } else {
          console.log(`Hello ${userName}, thank you for logging in again.`);
        }
      }
}
// 31. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users: string[] = ["muhammad", "usman", "rasheed", "hassan", "ali"];

let new_users: string[] = ["basit", "bilal", "FARHAN", "momin", "ALI"];

for (let new_user of new_users) {
  let lower_new_user: string = new_user.toLowerCase();
  if (current_users.includes(lower_new_user)) {
    console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
  } else {
    console.log(`Great, ${new_user} is available.`);
  }
}

// 32. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of arrNumbers) {
  if(number === 1){
    console.log("1st");
  } else if (number === 2){
    console.log("2nd");
  } else if (number === 3){
    console.log("3rd");
  } else {
    console.log(`${number}th`);
  }            
}

// 33. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas: string[] = ["pepperoni", "cheese", "mushroom"];
for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// 34. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// 35. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string) {
    console.log(`The shirt is size ${size} and has the message "${message}" on it.`);
  }
  
  make_shirt("M", "I LOVE Pakistan.");

// 36. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(size: string = "L", message: string = "I love TypeScript.") {
    console.log(`The shirt is size ${size} and has the message "${message}" on it.`);
  }
  
  make_shirt1();
  make_shirt1("M");
  make_shirt1("S","I Love PIAIC");

// 37. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("Karachi");
  describe_city("Lahore");
  describe_city("New York", "USA");

// 38. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Karachi","Pakistan")); //"Karachi, Pakistan" 
console.log(city_country("Lahore","Pakistan"));  //"Lahore, Pakistan" 
console.log(city_country("Bostan","USA"));       //"Bostan,USA"

// 39. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist:string, title:string, tracks?:number) : object{
    var album: { artist: string, title: string, tracks?:number } = {
    artist: artist,
    title: title
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Use the function to make three objects representing different albums
  let album1 = make_album("Taylor Swift", "1989");
  let album2 = make_album("Ed Sheeran", "Divide");
  let album3 = make_album("Coldplay", "Parachutes");
  
  // Print each return value to show that objects are storing the album information correctly
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  // Make at least one new function call that includes the number of tracks on an album
  let album4 = make_album("Adele", "21", 11);
  console.log(album4);

// 40. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let arrMagicians: string[] = ["David Copperfield", "Harry Houdini", "Penn and Teller"];
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(arrMagicians);

// 41. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let arrMagicians1: string[] = ["David Copperfield", "Harry Houdini", "Penn and Teller"];
function show_magicians1(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(arrMagicians1);
show_magicians1(arrMagicians1);

show_magicians(arrMagicians);

// 42. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let arrMagicians2: string[] = ["David Copperfield", "Harry Houdini", "Penn and Teller"];
function show_magicians2(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great2(magicians: string[]):string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
   return magicians;
}

let great_magicians:string[] = make_great2([...arrMagicians2]);
show_magicians2(arrMagicians2);
show_magicians2(great_magicians);

// 43. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items:string[]) {
    console.log(`You ordered a sandwich with ${items.join(", ")}.`);
  }
  
  make_sandwich("cheese", "ham", "lettuce");
  make_sandwich("peanut butter", "jam");
  make_sandwich("turkey", "bacon", "tomato", "mayo");
// 44. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer:string, model:string, ...options: string[][]) : object{
    var car: { manufacturer: string, model: string, [index: string]: string;} = {
    manufacturer: manufacturer,
    model: model
    };
    for (let option of options) {
    car[option[0]] = option[1];
  }
  return car;
  }

let car1 = make_car("Toyota", "Corolla", ["color", "white"], ["year", "2023"]);

console.log(car1);