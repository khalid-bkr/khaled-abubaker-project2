import wordsListEasy from "./WordsData/fiveLetterWords.txt";
import wordsListMedium from "./WordsData/sixLetterWords.txt";
import wordsListHard from "./WordsData/sevenLetterWords.txt";

export const getWordsSet = async (wordlist) => {
  let words;
  await fetch(wordlist)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.toUpperCase().split("\n");
      words = new Set(wordArray);
    });

  return { words };
};

export const easyWords = getWordsSet(wordsListEasy).then((words) => {
  //   console.log(words.words);
  return words.words;
});

console.log(easyWords);
// export const mediumWords = getWordsSet(wordsListMedium).then((words) => {
//   return words;
// });
export const mediumWords = ["hi"];
export const hardWords = getWordsSet(wordsListHard).then((words) => {
  return words.words;
});
