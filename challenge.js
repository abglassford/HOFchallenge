console.log(greaterThan10(11)); //true
console.log(greaterThan10(3)); //false
console.log(any([8, 9, 10, 11], greaterThan10)); //[false, false, false, true]
console.log(surprise('surprise')('!')); //'surprise!'
console.log(onlyOdd(3)); //3
console.log(onlyOdd(2)); //false
console.log(filter([ 1, 2, 3, 4 ], onlyOdd)); //[1, 3]
console.log(sumTwoNumbers(3)(9)); //12


function greaterThan10(num){
  if(!Number(num) || num <= 10){
    return false
  }else{
    return true
  }
}

function any(nums, greaterThan10Fn){
  for(var i = 0; i < nums.length; i++){
    if(greaterThan10Fn(nums[i])){
    return true
    }
  }
return false;
}

function surprise(word){
  return function (punctuation){
    return word + punctuation
  }
}

function onlyOdd(num){
  if(num % 2 === 0 || !Number(num)){
    return false
  } else {
    return true
  }
}

function filter(nums, onlyOddFn){
  var oddArr = []
  for(var i = 0; i < nums.length; i++){
    if(onlyOddFn(nums[i]) === true){
      oddArr.push(nums[i])
    }
  }
  return oddArr
}

function sumTwoNumbers(num1){
  return function(num2){
    return num1 + num2
  }
}
