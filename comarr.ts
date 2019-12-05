export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
export const combinedArray = [...winners, ...runnerUps]
console.log(combinedArray);

// #3 Combining objects
export const bob = {
    man: 'Bob'
  };
  
  export const kyle = {
    boy: 'Kyle'
  };
  
  export const originalPersons = Object.assign(bob, kyle);