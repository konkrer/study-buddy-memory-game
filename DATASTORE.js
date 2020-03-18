'use strict'


const DATA = {
    'JavaScript': [
        {
            'question': 'What is a ternary operator?',
            answer: 'Used to create an often one line conditional if/else statement making code more compact.'
        },
        {
            'question': 'What is a higher order function?',
            answer: 'A function that accepts another function as a argument.'
        },
        {
            'question': 'What is the call stack?',
            answer: 'A data structure a programming language uses to call functions in the proper order.'
        },
        {
            'question': 'What is an event listener?',
            answer: 'A functionality included in JavaScript allowing respose to user inputs.'
        },
        {
            'question': 'What is used to avoid function blocking?',
            answer: 'An asynchronous approch.'
        },
        {
            'question': 'What is a type of condtional one can use to check multiple possible values of a variable?',
            answer: 'A switch statement.'
        },
        {
            'question': 'What is an alternative to putting scripts at the end of the body element in HTML file?',
            answer: 'Using "defer" in a script tag to asychronosly load then run the script when DOM has loaded.'
        },
        {
            'question': 'What is Number EPSILON?',
            answer: 'the difference between 1 and the smallest floating point number greater than 1.'
        },
        {
            'question': 'What is a Promise in JavaScript?',
            answer: 'An object used for aysynchronous computations.'
        },
        {
            'question': 'What is the The Fetch API?',
            answer: 'This provides an interface for requesting resources (including across the network).'
        },

    ],
    Python: [
        {
            'question': 'What is the newer string method that can replace using format?',
            answer: 'f strings.'
        },
        {
            'question': 'What data types are immutable?',
            answer: 'strings, tuples.'
        },
        {
            'question': 'What package contains functions useful for creating decorators?',
            answer: 'functools'
        },
        {
            'question': 'What package contains functions useful for calling apis over network?',
            answer: 'requests'
        },
        {
            'question': 'What package contains functions useful for creating combinations and permutations?',
            answer: 'itertools'
        },
        {
            'question': 'What method can replace iterating multiple lines of for/if statments?',
            answer: 'list comprehension'
        },
        {
            'question': 'What is the easiest way to make an iterator of numbers?',
            answer: 'range function'
        },
        {
            'question': 'What is package excels at manipulating multidemensional arrays?',
            answer: 'numpy'
        },
        {
            'question': 'What is operator is a shorthand for floor dividing?',
            answer: '//'
        },
        {
            'question': 'What function can be used to sequentially pair entries from different lists?',
            answer: 'zip function'
        },

    ],
    CSS: [
        {
            'question': 'What does the acronym CSS stand for?',
            answer: 'Cascading Style Sheets'
        },
        {
            'question': 'Have I thrown in the towel making these questions?',
            answer: 'Yep'
        },

    ],
    HTML: [
        {
            question: 'What does the acronym HTML stand for?',
            answer: 'Hypertext Markup Language'
        },
        {
            question: 'Have I thrown in the towel making these questions?',
            answer: 'Yep'
        },
    ],
    GIFS: [
        {
            question: 'https://media1.giphy.com/media/1FMaabePDEfgk/giphy.gif?cid=ecf05e47b209c8f5912b45bcb20ee256dc8526a11d651e5e&rid=giphy.gif',
            answer: 'https://media1.giphy.com/media/1FMaabePDEfgk/giphy.gif?cid=ecf05e47b209c8f5912b45bcb20ee256dc8526a11d651e5e&rid=giphy.gif',
        },
        {
            question: 'https://media1.giphy.com/media/chVgEkHr9oYz4ZPGeU/200.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=200.webp',
            answer: 'https://media1.giphy.com/media/chVgEkHr9oYz4ZPGeU/200.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=200.webp',
        },
        {
            question: 'https://media0.giphy.com/media/iE3lvCgDR29h10Gh5B/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
            answer: 'https://media0.giphy.com/media/iE3lvCgDR29h10Gh5B/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
        },
        {
            question: 'https://media3.giphy.com/media/U7gJGolFtVBWNLH7bb/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
            answer: 'https://media3.giphy.com/media/U7gJGolFtVBWNLH7bb/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
        },
        {
            question: 'https://media2.giphy.com/media/Lqmp9tVPIvtyyKQneQ/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
            answer: 'https://media2.giphy.com/media/Lqmp9tVPIvtyyKQneQ/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
        },
        {
            question: 'https://media2.giphy.com/media/kDwKAjmtRpO9RTLcHq/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
            answer: 'https://media2.giphy.com/media/kDwKAjmtRpO9RTLcHq/giphy.webp?cid=ecf05e479ac3ec00882e07bd3ea0779e245e8204477a6428&rid=giphy.webp',
        },
        {
            question: 'https://media1.giphy.com/media/l1NcjrMQ1SeyPOA1Kk/giphy.webp',
            answer: 'https://media1.giphy.com/media/l1NcjrMQ1SeyPOA1Kk/giphy.webp',
        },
        {
            question: 'https://media1.giphy.com/media/ko1n9SyUdZwNW/giphy.webp',
            answer: 'https://media1.giphy.com/media/ko1n9SyUdZwNW/giphy.webp',
        },
        {
            question: 'https://media0.giphy.com/media/hQiz5jfdDjD5EVBjEA/giphy.webp',
            answer: 'https://media0.giphy.com/media/hQiz5jfdDjD5EVBjEA/giphy.webp',
        },
        {
            question: 'https://media3.giphy.com/media/5q3NyUvgt1w9unrLJ9/giphy.webp',
            answer: 'https://media3.giphy.com/media/5q3NyUvgt1w9unrLJ9/giphy.webp',
        },
    ],
}