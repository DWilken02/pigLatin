## Pig Latin

#### Tests:
  
Describe: pigLatin();

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all of first consecutive consonants to the end and add 'ay' to the end of words with one or more consonants."
Code: pigLatin("move")
Expected Output: "ovemay"

Test: "If the first 2 letters of a word "qu" then it will move them to the end and add "ay."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "If "qu" is in the beginning consecutive consonants it will move the consonants before "qu" to the end of the word and add "ay."
Code: pigLatin("squeal");
Expected Output: "quealsay"