# lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @khaoulamouanniss/lotide`

**Require it:**

`const _ = require('@khaoulamouanniss/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: This function counts the letters of a string and return an object whose keys are the letters of the word and their value is the counting number.
* `countOnly(allItems, itemsToCount)`: This function count how many time itemsToCount are in the allItems.
* `findKey(obj, callback)`: Theis function return the key that passed as an argument in the callback return true.
* `findKeyByValue(obj, value)`: This function fin the key of a value.
* `flattern(arr)`: This function flattern an array or nested array.
* `head(arr)`: This function returns the first element of an array.
* `letterPositions(sentence)`: This function returns an object with the positions of all the letters of a string.
* `map(arr, callback)`: This function uses a callback function to change the elements of an array.
* `middle(arr)`: This function returns the middle item of an array.
* `tail(arr)`: This function returns all the elements of an array without the first one.
* `takeUntil(arr, callback)`: This function select the elements of an array until the callback function will be true.
* `without(arr, items)`: This function return an array without items passed as argument.
