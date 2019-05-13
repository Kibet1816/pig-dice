# Triangle tracker

## Authors
- [Denis Kibet](https://github.com/Kibet1816)

## Project description
This is a web application that allows two players to play a game of pig dice.
 
## Setup instructions
- A computer with a modern browser
- Clone this repository
- Open index.html in the browser of your choice

## BDD
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 rolls the dice | Click the roll dice button | Generates a random number between 1 and 6 |
| Player 1 holds his score | Click hold button | Final result is shown |
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100 | Dialog box pops with "Winner!!" |


## Technologies used
The following languages have been used to write the application:
- HTML,
- JavaScript,
- CSS, and
- Markdown.

## License and copyright information

MIT License

Copyright (c) 2019 Denis Kibet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files ("Pig Dice"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

