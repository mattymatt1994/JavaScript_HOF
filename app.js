console.log("Hello World!\n==========\n");

console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section
function plus(number) {
  return (plusNumber) => {
    return number + plusNumber;
  };
}
const plus15 = plus(15);
console.log(plus15(10));

//Exercise 2
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
users.forEach((element) => {
  console.log(element.name, element.score);
});

// Exercxise 3

const mappedUsers = users.map((element) => {
  return {
    name: element.name,
    score: element.score,
  };
});
console.log(mappedUsers);

// //Exercise 4

const filteredUsers = users.filter((element) => {
  if (element.isActive == true) {
    return true;
  }
  return false;
});
console.log(filteredUsers);
// //Exercise 5
users.sort((a, b) => {
  if (b.score > a.score) {
    // A goes after B
    return 1;
  } else if (a.score > b.score) {
    return -1;
  } else {
    return 0;
  }
});
console.log(users);
// //Exercise 6
const reducedUser = users.reduce((prev, curr) => {
  // console.log("Previous Value:", prev);
  //console.log(`${prev} + ${curr.score} => ${prev + curr.score}`)
  return prev + curr.score;
}, 0);
console.log(reducedUser);
//Sum up the ages of the users
//50
//prev + curr => "prev"
//50 + 38 => 88
//88 + 36 => 124
//124 + 26 => 150
