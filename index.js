// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
//   console.log(Monday());

//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
//   console.log(Tuesday());

//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
//   console.log(Wednesday());

//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
//   console.log(Thursday());

//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
//   console.log(Friday());

function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function receivesAFunction(callback) {
    callback();
}

receivesAFunction(() => console.log("Callback function called!")); 

function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}

const myFunction = returnsANamedFunction();
myFunction(); 

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); 