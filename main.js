
const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(','); //defaults to commas if you put nothing

// console.log(string1) //.join converts array elements into a string

const string1toArray = string1.split(','); //put in parentheses where you want the method to split the string

// console.log(string1toArray);


//*** .push() and .pop() *****

array1.pop();
// console.log(array1);
array1.push('cat');
// console.log(array1); //we are able to change the const array1 because we are mutating the array. we aren't reassigning the value of the variable


// ***** .unshift() and .shift *****

array1.unshift('cow'); //puts cow at the front of the array
// console.log(array1);
array1.shift(); //removes whatever is at index zero, in this case the cow we just added
// console.log(array1);
