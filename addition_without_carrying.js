// A little boy is studying arithmetics. 
// He has just learned how to add two integers, written one below another, 
// column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Note: the boy used this site as the source of knowledge, feel free to check it 
// out too if you are not familiar with column addition.

function additionWithoutCarrying(param1, param2) {
    var result = 0,
        num = 1;
    while (param1 + param2 > 0) {
        num *= 10;
        result += (param1 + param2) % num;
        param1 -= param1 % num;
        param2 -= param2 % num;
    }
    return result;
}

console.log(additionWithoutCarrying(54321,54321))