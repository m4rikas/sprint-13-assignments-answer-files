interface WordTranslation {
  [k: string]: {
    [l: string]: string;
  }
}

interface NumberTranslation {
  [m: string]: {
    [n: number]: string;
  }
}

const translateWord: WordTranslation = {
  'en': {
    'welcome': 'Hello there!'
  }
}

const translateNumber: NumberTranslation = {
  'en': {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five'
  }
}

const translateMessage = (language: string, input: string | number): string => {
  if(typeof input == 'string'){
    return translateWord[language][input]
  } else if (typeof input == 'number') {
    const purchases_left = (5 - input);
    return `Thank you for your purchase, only ${translateNumber[language][purchases_left]} more until your free cup of coffee!`
  } else {
    return 'Incorrect input type detected'
  }
}

console.log(translateMessage('en', 'welcome'))
console.log(translateMessage('en', 3))
