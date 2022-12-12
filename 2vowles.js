
var vowels=["a","e","i","o","u"]

function cvowels(str)
{
let count = 0;

for(var string of str.toLowerCase())
{
    if(vowels.includes(string))
    {
        count++;
    }
return count;
}
}

function cvowels(str1)
{
let count = 0;

for(var string1 of str1.toLowerCase())
{
    if(vowels.includes(string1))
    {
        count++;
    }
return count;
}
}
const string = prompt('Enter a string1: ');

const result = cvowels(string);

console.log(result);

const string1 = prompt('Enter a string2: ');

const result1 = cvowels(string1);

console.log(result1);


const result2 = result+result1;
document.write("the two string vovel is"+result2);
