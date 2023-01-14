// const person: {
//     name: string;
//     age: number;
//     nicknames:string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     nicknames: ['Hello', "There"],
//     role: [2, 'Admin']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 1, READ_ONLY, AUTHOR, USER};

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

// console.log(person.nicknames);

if ( person.role === Role.ADMIN){
    console.log("Is Admin");
};