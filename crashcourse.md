# Prompt
This is just a crash course on all the javascript syntax we've learned so far. In this crash course, I will be limiting the hints 😎

# Basic problems
1. Imagine you have a number. Lets say `5`. How can you tell whether this number is odd?
<details>
  <summary>Hints (dont look unless you're really stuck)</summary>

  You can use these two choices interchangably. I like to typically use the second choice just for more readability. In reality there's no difference
  ```js
  const num = 5;
  
  // first choice. just console.log the value
  console.log(num % 2 === 1); // true
  
  // second choice. assign the value to a variable
  const numIsOdd = num % 2 === 1;
  console.log(numIsOdd); // true
  ```
</details>

2. If the number is odd, lets just `console.log('Num is odd!')`. How would you do that?
- if statements ONLY run if the logic is `true`
```js
if (true) {
  // this will run
}

if (false) {
  // this will not run
}
```
You can replace `true` / `false` with some logic. For example,
```js
if (3 < 5) {
  // this will run because 3 < 5 evaluates to true
}

if (3 > 5) {
  // this will not run because 3 > 5 evaluates to false
}

if (!(3 > 5)) {
  // this will run because 3 > 5 evaluates to false. we use ! to invert the false, so !false becomes true
}
```

<details>
  <summary>Hints (dont look unless you're really stuck)</summary>

  You can use these two choices interchangably. I like to typically use the second choice just for more readability. In reality there's no difference
  ```js
  const num = 5;
  
  // first choice. just check the value within the if statement
  if (num % 2 === 1) {
    console.log('num is odd');
  }
  
  // second choice. assign the value to a variable
  const numIsOdd = num % 2 === 1;
  if (numIsOdd) {
    console.log('num is odd');
  }
  ```
</details>

3. Imagine you have a bag of colors. Lets say you have the colors 'red', 'blue', 'green', 'orange', 'yellow'. How can you store all these colors in your code?  
  
you should NOT do   
```js
const red = 'red';
const blue = 'blue';
const green = 'green';
const orange = 'orange';
const yellow = 'yellow';
```

<details>
  <summary>Hints (dont look unless you're really stuck)</summary>
  
  Use an array
  
  ```js
  const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  ```
</details>

4. We have stored all the colors in our code inside a variable. How can you access the 0th element? What about the 1st element? What about the 2nd element? Lets just console.log it one by one

<details>
  <summary>Hint</summary>
  
  ```js
  const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  console.log(colors[0]); // access the 0th color
  console.log(colors[1]); // access the 1st color
  console.log(colors[2]); // access the 2nd color
  ```
</details>

5. How can you look through every single color one by one? No hints!
6. For each of the colors that you have stored, how many colors are longer than 3 characters? You're gonna need a counter variable for this. 
  
something like 
```js
let numberOfColorsThatAreOddLength = 0;

......

const color = 'red';
console.log(color.length); // 3. this is how you get the # of characters in a string

if (color.length > 3) {
  numberOfColorsThatAreOddLength++;
}

```
7. You have a bottle of alcohol. This bottle of alcohol has a few properties
- The bottle name: casamigos
- The spirit: tequila
- The alcohol percentage: 40%
- Number of shots until blackout: 20

Without storing these properties into individual variables like this, how can you store this information in your code?
```js
const name = 'casamigos';
const spirit = 'tequila';
const percentage = 0.4;
const shotsUntilBlackout = 20;
```

8. Nice! You stored the information in your code. How can you programmatically access the `name`, `spirit`, `percentage`, and `shotsUntilBlackout` properties? Lets just console.log all of them
9. If the percentage is greater than 0.3, lets `console.log('This is a courtney style drink')`

# Slightly more advanced problems
10. Remember how in the 7th problem, you only had to deal with 1 bottle? What if you have many different bottles? Lets store this information in our code.
Lets store your favorite 3 bottles now.

<details>
  <summary>Hints (dont look unless you're really stuck)</summary>
  
  Previously, we made an array of strings. We had    
  
  ```js
  const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  ```
  
  colors[0] is 'red'.  
  colors[1] is 'blue'.  
  colors[2] is 'green'.  
  and so on.    
  
  ---
    
  You can have an array of objects.  
  
  ```js
  const bottles = [
    {name: 'casamigos', spirit: 'tequila', percentage: 0.4, shotsUntilBlackout: 20},
    {name: 'malibu', spirit: 'liqueur', percentage: 0.21, shotsUntilBlackout: 40},
    {name: 'black label', spirit: 'whiskey', percentage: 0.4, shotsUntilBlackout: 15},
  ];
  ```
  
  bottles[0] is {name: 'casamigos', spirit: 'tequila', percentage: 0.4, shotsUntilBlackout: 20}.  
  bottles[1] is {name: 'malibu', spirit: 'liqueur', percentage: 0.21, shotsUntilBlackout: 40}.  
  and so on.  
</details>

11. How can you access the `percentage` property from every single bottle you have? Lets just console.log the percentage of every single bottle, one by one
12. Find the # of bottles with percentage less than 0.3 and console.log it

# Back to basics
13. Imagine you have an array of numbers. [1, 2, 3, 4, 5]. You want to find the average of all those numbers. Write me some code that finds the average and console.logs the average
14. Imagine you have a second array of numbers. [4, 5, 6, 7, 1, 2]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it
15. Imagine you have a third array of numbers. [10, 2, 3, 4, 1, 2]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it
16. Imagine you have a fourth array of numbers. [100, 12, 1, 3, 4]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it
17. Imagine you have a fifth array of numbers. [1, 100, 2, 19, 3]. You want to also find the average of all those numbers. Write me some code that finds the average and console.logs it

  
    
Push your code onto github and send it to me!