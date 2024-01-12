## Pig Latin

#### By **DWilken02**

#### _Uses pig latin on words or phrases_

## Languages/Technologies used

* JavaScript
* HTML

### Description

This project translates the given word or phrase into Pig Latin.


#### Tests:
  
Describe: pigLatin();

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all of first consecutive consonants to the end and add 'ay' to the end of the word"
Code: pigLatin("move")
Expected Output: "ovemay"

Test: "If the first 2 letters of a word are "qu" then it will move them to the end and add "ay."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "If "qu" is in the beginning consecutive consonants it will move the consonants before "qu" to the end of the word and add "ay."
Code: pigLatin("squeal");
Expected Output: "ealsquay"

Describe: pigLatinPhrases();

Test: "It will take a phrase and turn it into pigLatin"
Code: pigLatinPhrases("Space the final frontier squeak");
Expected Output: "acespay ethay inalfay ontierfray eaksquay"

## Setup/Installation

1. Click the green code button
2. Then click download zip
3. Open the project folder
4. Then drag the index.html file to a browser of your choice

### [MIT license](license.txt)

If you have any questions or concerns please contact me at DWilken01@gmail.com

Copyright (c) _1/12/24_ _DWilken02_