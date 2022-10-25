let num = 357894;
const reversedNum =  parseFloat(num.toString().split("").reverse().join(""))*Math.sign(num);
console.log(reversedNum);