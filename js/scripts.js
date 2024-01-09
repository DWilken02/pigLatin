//Business Logic
function pigLatin(userWord){
  let output = userWord;
  const vowelsString = "aeiou";
  if (vowelsString.includes(userWord[0])) {
    output += "way";
  } else if (userWord.slice(0, 2) == "qu") {
    output = userWord.slice(2) + "quay";
  } else {
    const charactersArray = userWord.split("");
    for (let index = 0; index < charactersArray.length; index += 1) {
      if (userWord.slice(index, index + 2) == "qu") {
        const firstPartOfWord = userWord.slice(0, index + 2);
        const restOfWord = userWord.slice(index + 2);
        output = restOfWord + firstPartOfWord + "ay";
        break;
      } else if (vowelsString.includes(charactersArray[index])) {
        output = userWord.slice(index) + userWord.slice(0, index) + "ay";
        break;
      }
    }   
  }
  return output;
}

//UI Logic
window.addEventListener("load", function() {
  console.log(pigLatin("squeal"));
})