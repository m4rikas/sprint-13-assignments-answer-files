interface WordTranslation {
  [k: string]: {
    [l: string]: string;
  }
}

const translateWord: WordTranslation = {
  'en': {
    'welcome': 'Hello there!'
  }
}

const translateMessage = (language: string, word: string): string => {
    return translateWord[language][word]
}

console.log(translateMessage('en', 'welcome'))