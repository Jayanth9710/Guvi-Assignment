//Using Arrow Function//
let arr=[1,2,3,4,5,6,7,8,9,10];

var prime=arr.filter((num)=>{
    for(var i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i===0)
        return false;
    }
    return true;
});

console.log(prime);

// Using anonymous function//



function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  let arr1 = [3, 12, 50, 23, 0,5];

  arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(element);
    } 
  });