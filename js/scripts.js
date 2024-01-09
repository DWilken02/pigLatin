//Business Logic
function pigLatin(userWord){
  let output = userWord;
  const vowelsString = "aeiou";
  if (vowelsString.includes(userWord[0])) {
    output += "way";
  } else {
    const charactersArray = userWord.split("");
    for (let index = 0; index < charactersArray.length; index += 1) {
      if (vowelsString.includes(charactersArray[index])) {
        output = userWord.slice(index) + userWord.slice(0, index) + "ay";
        break;
      }
    }
  }
  return output;
}


//UI Logic
window.addEventListener("load", function() {
  console.log(pigLatin("move"));
})