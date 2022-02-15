"use strict";
const translateWord = {
    'en': {
        'welcome': 'Hello there!'
    }
};
const translateMessage = (language, word) => {
    return translateWord[language][word];
};
console.log(translateMessage('en', 'welcome'));
