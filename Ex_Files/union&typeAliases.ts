// Union types "number | string | boolean......"

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion?: string
// ) {
//   let result: any;
//   if (typeof input1 === "number" && typeof input2 === "string") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);

// literal Types

// type aliases

type Combinable = number | string;
// combinable is an alias for the "number | string" union types.

function combine(
    input2: Combinable,
    input1: Combinable,
    resultConversion?: string
  ) {
    let result: any;
    if (typeof input1 === "number" && typeof input2 === "string") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames = combine("Max", "Anna");
  console.log(combinedNames);