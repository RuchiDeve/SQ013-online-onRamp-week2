const letters = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    let ans = "";
    for (let i = 0; i < text.length; i++) {
      ans = ans + '' +letters.indexOf(text[i])
      
        console.log(ans)
      }
    
    return result
 
}
console.log(alphabetPosition('developer'));
console.log(alphabetPosition('decadev'));
console.log(alphabetPosition('sucess'));

  module.exports = alphabetPosition
  