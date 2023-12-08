import { count } from 'letter-count';
import { franc } from 'franc';
import languages from  "./languages.json" 

function readingTime(words) {
  const wpm = 225;
  const time = Math.ceil(words / wpm);
  return time
}

export function analyser(text) {
  let result = {
    language:null,
    readingTime : 0,
    words:0,
    chars:0,
    wordsigns: 0
  }
  let language = franc(text);
  let counted = count(text);
  result.language = languages[language] ? languages[language]: null;
  result.readingTime = readingTime(counted.words)
  result.words = counted.words
  result.chars = counted.chars
  result.wordsigns = counted.wordsigns

  return result;
}
