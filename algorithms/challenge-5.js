function accum(str) {
 let acc ="";
 for(leti = 0; i<str.length;i++){
    acc += str[i].toUpperCase()
    for(let j = 0; j< i; j++){
        acc += str[i].toLowerCase()
     }
 }
 console.log(acc.join("-"));
 }
 accum("abcd") 
 //"A-Bb-Ccc-Dddd"
  accum("RqaEzty") 
  //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 
  accum("cwAt") 
   //"C-Ww-Aaa-Tttt"
  module.exports =accum