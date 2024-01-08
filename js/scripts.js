//Business Logic
function pigLatin(userWord){
  let output = userWord;
  const vowelsString = "aeiou";
  if (vowelsString.includes(userWord[0])) {
    output += "way";
  }
  return output;
}


//UI Logic
window.addEventListener("load", function() {
  console.log(pigLatin("a"));
})