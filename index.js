// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var names = 'hello';
// TODO write your code here...
names = names.toUpperCase()
console.log(names);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var str = sentence.split(" ");
str.forEach((item, index) => {
    str[index] = item.slice(0, 1).toUpperCase() + item.slice(1);
})
sentence = str.join(" ")
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.replace(/[^0-9]/g, '')
console.log(money);
