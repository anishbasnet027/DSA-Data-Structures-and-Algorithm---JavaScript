// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.


let str = 'w3resource';

setInterval(() => {
  str = str[str.length - 1] + str.substring(0, str.length - 1);
  console.log(str);
}, 1000);
