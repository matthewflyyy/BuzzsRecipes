Cloning a repository from the terminal:
    git clone https://github.com/webprogramming260/startup-example.git


Add, commit and push from the terminal to github:
    git add test.md

➜  git commit -am "update(notes) thoughts about startup applications"

➜  git push

Configure your github account in the terminal:
    git config --global user.email "you@example.com"
    git config --global user.name "Your name"

Check if there are changes to commit:
➜  git fetch
➜  git status

Development and production environments:
     it is critical to separate where you develop your application, from where the production release of your application is made publicly available

     You should never consider your production environment as the place where you develop or experiment with your application

     You run a deployment script from a console window in your development environment with a command like the following:
         ./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon

dig (url) gives you the ip address of a website

The local host ip address is 127.0.0.1 is just to access your own local machine
        
# CSS
## Intro
CSS - Cascading Style Sheets
- Converts the structe and content of HTML into a vibrant, responsive experience.
- Can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.
- Defines rulesets (rules) that are comprised of:
    -  A selector that selects the elements to apply the rule to
    - One or more declarations that represent the property to style with the given property value
![Example code](<https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssDefinitions.jpg>)
### Associating CSS with HTML
Style:
- use the style attribute of an HTML element and assign it one or more declarations
```html
<p style="color:green">CSS</p>
```
- use the style element to define CSS rules within HTML document. Style element should be in head element
```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
Link:
- Create a hyperlink reference to an external file containing CSS rules. Must be within head element
```html
<link rel="stylesheet" href="styles.css" />
```
styles.css
```html
p {
  color: green;
}
```
### Cascading styles
Rules cascade down from the highest nodes in the DOM tree to the lowest level. Delcarations as lower levels will override the higher declaration.
### The box model
CSS defines everything as boxes
![Box Model](<https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg>)

You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border.

## Selectors
### Element type selector
To change the font of all elements, use an element name selector. Select the body, which will affect the whole document.
```html
body {
  font-family: sans-serif;
}
```
(* also selects all elements instead of using body)

Could do the same with h1 (top level heading).
```html
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```

### Combinators
To change only the h2 in a specific section, use a descendant combinator that only affects items that are a descendant of the previous item
```html
section h2 {
  color: #004400;
}
```
Other combinations:

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

### Class selector
Any element can have 0 or more classifications applied to it. If you wanted to bold text in a class called "summary":
```html
.summary {
  font-weight: bold;
}
```
Can combine element name and class selectors:
```html
p.summary {
  font-weight: bold;
}
```

### ID selector
All IDs should be unique within an HTML document, so it targets a specific element. Prefix the ID with #:
```
#physics {
  border-left: solid 1em purple;
}
```

### Attribute selector
Select elements based on their attributes. Select any element with a given attribute (a[href]). Can also specify a specific value (a[href="./fish.png"]). Also support attribute values containing a specific text ('p[href*="https://"]).
```html
p[class='summary'] {
  color: red;
}
```

### Pseudo selector
Select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. Select whenever a section is hovered over:
```html
section:hover {
  border-left: solid 1em purple;
}
```

## CSS Declarations
Specify a property and value to assign when rule selector matches one or more elements.

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

### Units
```html
p {
  width: 25%;
  height: 30vh;
}
```
List of commonly used units. All are prefixed with a number:

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

### Color

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |


## CSS Fonts
Can make users want to use your application or drive them away.
CSS "font-family" propery defines the fonts used. Is an ordered list of fonts. Always defaults to first available font in list which is important bc some browsers might not have your first choice.

### Font Families
Four major one: serif (strokes at end of character's major strokes), sans-serif (no extra strokes), fixed (all same size), and symbol(non-language characters).

### Importing fonts
Allows your font to always be the same. Use @font-face rule w/ name and source location.
```html
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```
If you don't want to host font files on your server, load from font provider (e.g. Google). Use CSS importart statement.
```html
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

## CSS Animation
Created using animation properties and defining keyframes for what element should look like at different times in animation.
Centered text, zoom until size is 20% of view height.
```html
p {
  text-align: center;
  font-size: 20vh;
}
```
Add animation-name property. Add animation-duration property.
```html
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```
Now, create keyframes. Start with invisible text and zoom into full final size.
```html
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```
Make it bounce out to a little bigger first. Happens 95% thru animation.
```html
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```


## Responsive Design
Ability to reconfigure the interface to accomadate and take advantage of screen's size and orientation.
### Display
| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

Demonstration using many div elements, which by default have the display property of "block":
```html
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```
Which would look like this:

![block example](<https://github.com/webprogramming260/.github/raw/main/profile/css/responsive/cssDisplayDefault.jpg>)

Modify the display property of each element, getting a completely different rendering.
```html
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
![Another exaple](<https://github.com/webprogramming260/.github/raw/main/profile/css/responsive/cssDisplay.jpg>)

### Viewport meta tag
Include meta tag in head element of html pages so that browser doesn't scale the page:
```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

### Float
Moves element to left or right and allows inline elements to wrap around it.
```html
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```
![Example](<https://github.com/webprogramming260/.github/raw/main/profile/css/responsive/cssFloat.gif>)

### Media queries
@media selector detects size and orientation of device and aplies rules to accommadate the change
If orientation is portrait:
```html
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```
Can also make entire pieces disappear or move to different location:
```html
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

## CSS Grid
Grid display layout is for displaying child elements in responsive grid.
Use display property with value "grid" on the parent element. "grid-template-columns" property which specifies layout of grid columns. minimum 300 pixels and max "1fr" (equal fractional unit) (fill parent's width). Fractional unitsplits up parent element's width into equal parts for children. 300 pixels high with "grid-auto-rows" property and "grid-gap" property says we want >= 1em gap between itmes.
```html
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
![example](<https://github.com/webprogramming260/.github/raw/main/profile/css/grid/cssGrid.gif>)


## CSS Flexbox
"flex" display layout partitions application into areas that move as window resizes or changes orientation.
Include CSS display property w/ value "flex". "flex-directions" property w/ "column" to make column oriented.
```html
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```
Ex: flex: 0 80px - 0 means it won't grow and has starting height of 80px. Fixed size box
flex: 1 - gets 1 fractional unit of growth, will get remaining space since it's the only non-zero growth value.
flex-direction: row - children are oriented side by side
```html
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```
1st one gets 1 unit (25%) of space and content gets 3 (rest of) space. Will always remain constant no matter how we resize things.
```html
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

### Media Query
Drops the header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow.
Support narrow screen (portrait mode), check if we're in portrait mode and sets "flex-direction" to be column instead of row
Make header and footer disappear: triggers when viewport has max value of 700px. Change "display" for header and footer to "none"
```html
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```

## CSS Frameworks
Open source repositories that make web development easier. Basically, allows you to do CSS really fast.

### Tailwind
A new contender in CSS framework space. Is different than most bc it uses smaller definitions that are applied specifically to individual HTML elements.
```html
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>
```

### Bootstrap
Getting started with Bootstrap: https://getbootstrap.com/docs/5.2/getting-started/introduction/
1. Include <meta name="viewport"> in html file for proper responsive behavior in mobile devices.
2. Place <link> tag in <head> for Bootstrap CSS, and <script> tag for Bootstrap JavaScript bundle before closing </body>.
3. Now you can start building w/ Bootstrap

Bootstrap is the favorite CSS framework. Bc it's so popular, users recognize the style and how to use a website like it, but it may not grab their attention.

#### Getting bootstrap
This references bootstrap CSS files from their content delivery network(CDN) and adds HTML link elements to head element:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
If you use bootstrap components that involve JavaScript, include bootstrap's JavaScript module at the end of your HTML body element.
```html
<body>
  ...
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```
To include bootstrap using NPM in your application (numbers are the specific version):
```html
npm install bootstrap@5.2.3
```
#### Using bootstrap
Simple button: btn gets the button and btn-primary shades the button which defaults to Blue
```html
// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>
```

# JavaScript
Most used programming language in the world.

## Getting Started
Concatenate a string and output string to debugger console:
```js
console.log('Hello' + ' ' + 'world');
```
Build functions:
```js
function join(a, b) {
  return a + ' ' + b;
}
console.log(join('Hello', 'world'));
```

## Comments
```js
// Line comment

/*
Block comment
*/
```
## Playgrounds
Use codepen or use F12 in Chrome to open debugger and open debugger to code JS.

## JS Console
Provides interaction w/ JS runtime's debugger console.

### Log
Create formatted messages:
```js
console.log('hello %s', 'world');
// OUTPUT: hello world
```
Styled log output:
```js
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```

### Timers
Wrap piece of code w/ "time" and "timeEnd" and will output duration between time and timeEnd:
```js
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

### Count
See how many times a block of code is called:
```js
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```

## Adding JS to HTML
Can add directly to HTML using <script> element or src attribute references outside JS file.
index.js:
```js
function sayHello() {
  console.log('hello');
}
```
index.html:
```js
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

## JS Type and Construct
### Declaring variables
Declared using let or const. Let allows the variable to be changed while const will cause an error if you try to change it.
### Type
| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Object types:
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

### Type Conversions
JS is weakly typed, type of var can change. Automatic, unexpected conversions can occurr:
```js
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```
Dealing with the equality operator:
```js
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```
Use === and !== to get correct answers
```js
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```

### Conditionals
Supports if, else, and if else. Includes compact if else (ternary operator):
```js
a === 1 ? console.log(1) : console.log('not 1');
```
Uses && || and !

### Loops
Suppors for (let i = 0; i < 2; i++), for in, for of, while, do while and switch:
do while:
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
for in iterates over object's property names. gets the index values for an array:
```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```
for of iteratoes over property values:
```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```
Able to use "break" and "continue"

## JS String
Single and double quotes are equivalent, but ` backticks defines string literal that may contain JS that is evaluated in place and concatenated into the string. literal replacement specifier is declared by ${}.
```js
const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
### Unicode Support
Defines string as 16-bit unsigned integer representing UTF-16 strings. Allows it to represent most languages.
### String functions
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

## Functions
1st class objects: can be passed as parameter, returned, and referenced from object or array.
Functino begins w/ "function" keyword.
### Parameters
Caller may choose which parameters to provide. If a parameter isn't provided, it is "undefined" when functione executes.
### Anonymous functions
Functions are often assigned to var so they can be passed as parameter to some other function or stored as obj property.
## JS Arrow Function
Used to make code more compact. Basically a lambda with => placed after the parameter declaration. These 2 are equal:
```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
Can't be used for constructors or iterator generators.
Return values are optional if no curly brackets and only contains a single expression. If there are curly brackets, it behaves as a standard runction.
Debounce function only executes a specified function once within a given time window.

## JS Array
Functions:
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

## JSON
A simple way to share and store data. Easily convertible to and from JS objects.
### Format
Contains one of the following data types:
| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

Most common is an object. Key is a string and value is valid JSON data types. 
Ex JSON document:
```js
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
Always encoded w/ UTF-8.
### Converting to JS
Use JSON.parse and JSON.stringify functions.
```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
JSON can't represent JS undefined object so it gets dropped in conversion.

## JS Regular Expressions
Textual pattern matchers. Can be using class constructor or regular expression literal:
```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
string functions that accept regular expressions: match, replace, search and split. Test function sees if there's a match
```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
## JS rest and spread
### Rest
If we want a function to take unknown # of parameters, we use rest syntax. To turn las parameter of function into "rest" parameter, prefix it w/ 3 periods. Then, any number of parameters are automatically combined into an array:
```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
### Spread
Spread does opposite of rest. Takes object that is iterable (array, string, etc.) and expands it into function's parameters:
```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
## JS Exceptions
Supports try catch and throw syntax. Can also specify a finally block that is always called wether or not an exception was thrown:
```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```
Try to restrict exceptions to truly exceptional situations such as running when a file isn't found that's necessary to run the code.
### Fallbacks
Often implemented using exception handling. Allows you to always return something, even if the desired feature is temporarily unavailable.
```js
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```

## JS destructuring
Process of pulling idividual items out of existing one (or removing structure). Example:
```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Can combine multiple items from the original object using rest syntax:
```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
When destructuring objects, explicity specify properties you want to pull from source object:
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
Can map names to new variables:
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
Default values can be provided for missing ones:
```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```
Reassign existing values:
```js
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```

## JS Object and classes
JS obj represents collection of name value pairs called properties. Property name must be String/Symbol, value can be anything. Have constructors, "this" pointer, static properties/functions, and inheritance. Properties can be referenced w/ dot (obj.prop) or brackets (obj['prop']).
```js
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
### Object-literals
Can declare variable of obj type w/ object-literal syntax. Allows you to provide initial composition of obj:
```js
const obj = {
  a: 3,
  b: 'fish',
};
```
### Obj Functions
Commonly used ones:
| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |
```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```
### Constructor
Invoked w/ "new" operator:
```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```
Can create methods on obj as part of its encapsulation:
```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
### Classes
Used to define objects. Person obj above would look like this when converted to a class:
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
Make properties/functions private by prefixing them with a #.
### Inheritance
Classes can be extended using "extends" keyword to define inheritance. Parameters passed to parent class are delivered using "super" function. Functions w/ same name as parent override the parent function. Parent function used explicity using "super" keyword:
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

## Scope
Scope is defined as the variables that're visible in the current context of exectution. JS has 4 types of scope:
1. Global - Visible to all code
2. Module - Visible to all code running in a module
3. Function - Visible within a function
4. Block - Visible within a block of code delimited by curly braces
### VAR
When var is used to declare a variable, it ignores block scope. Automatically brought to top of the function. 
### This
Represents variable that points to obj. Automatically declared and can be accessed anywhere in JS program. 3 different context this can refer to:
1. Global - When this is referenced outside a func or obj, refers to "globalThis" obj. Represents context for runtime environment.
2. Function - When this is referenced in a cun, refers to obj that owns the func. 
3. Object - When this is referenced in obj refers to the obj.
### Closure
Defined as a function and its surrounding state. That means whatever variables are accessible when a func is created are available inside of that func. 
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```
Arrow functions inherit pointer of their creation context.
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
But when it is made inside the context of the obj:
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```

## JS Modules
Allow for partitioning and sharing of code. Node.js modules are called CommonJS modules. JS modules are called ES modules. We're focusing only on ES modules.
Must explicitly export obj from one file and import to other. 
alert.js
```js
export function alertDisplay(msg) {
  alert(msg);
}
```
main.js
```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```
### ES Modules in the browser
Cannot access JS contained in module from global scope that your non-module JS is executing in.
From HTML, can specify use of ES module by including "type" attribute w/ value of "module" in "script" element. Then can import and use other modules.
index.html
```html
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
If we want to use module in global scope that HTML or other non-module JS is executing in, must leak it into global scope by attaching it to event handler or explicitly adding it to a function, to global window obj. 
index.html
```js
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```
### Modules with web frameworks
Generally don't have to worry abt differentiating between global scope and ES module scope when using web framework bundler

## Document Object Model
DOM is an obj representation of HTML elements that browser uses to render display. Allows you to write programs that dynamically manipulate the HTML.
Browser provides access to DOM thru global variable "document".
### Accessing the DOM
Every element in HTML doc implements the DOM Element interface, derived from DOM Node interface. Provides means for iterating child elements, accessing parent element and manipulating element's attributes. In JS, start w/ "document" var and wakl thru each element in the tree.
```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
Can procide CSS selector to "querySelectorAll" func in order to select elements from doc. "textContent" property contains all of element's text. Can access text representation of element's HTML content w/ "innerHTML" property.
```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```
### Modifying the DOM
Can insert, modify or delete elements in DOM. Add element:
```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
Delete elements w/ "removeChild" func:
```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```
### Injecting HTML
Can inject entire blocks of HTML into an element. This code finds 1st "div" and replaces it w/ all HTML it contains:
```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```
Make sure injected HTML can't be manipulated by user.
### Event Listeners
Can attach a func that gets called when an event occurs in the element. Called "event listeners". Here's one when the element's clicked:
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
Some commonly used events:
| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |
Can be added directly to HTML:
```html
<button onclick='alert("clicked")'>click me</button>
```

## Local Storage
localStorage api in browser provides ability to store and retrieve data (scores, usernames, etc.) on user's browser across sessions and HTML page renderings. Also cache for when data can't be obtained from server.

### How to use LocalStorage
4 main functions:
| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |
Value must be type string, number or boolean.

Ex:
```js
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```
## Promises
In JS, only 1 piece of code executes at a time. Can asynchronously execute code w/ use of JS Promise. Promise obj can be in 1 of 3 states:
1. pending - currently running asynchronously
2. fulfilled - completed successfully
3. rejected - failed to complte
Ex:
```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```
### Resolving and rejecting
Must set state to fulfilled or rejected once done. Promise executor func takes 2 funcs as parameters, resolve and reject. Resolve sets to fulfilled state while reject sets to rejected state.
"coin toss" waits 10 sec then has 50% chance of resolving/rejecting:
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
Logging promise to console right after calling it:
```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```
Wait 10 sec will be fulfilled or rejected:
```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```
### Then, catch, finally
We must do something w/ result of promise. Promsie has 3 funcs: then, catch and finally. Then is called if promise is fulfilled. Catch called if rejected. Finally called after all processing is completed.
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
### The observer pattern
"Observer" pattern can run things asynchronously in JS. Observers can be reused, and result of executing an Observable can be saved as history of a particular execution.

## JS Async/await
Makes a more concise representation of prosmises. "await" wraps execution of promise and removed need to chain functions. Will block until promise is fulfilled or throw exception if rejected. Coin toss promise:
```js
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```
Can create equivalent execution w/ then/catch or w/ await w/ try/catch block:
then/catch chain version:
```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```
async, try/catch:
```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
### async
Can't vall await unless it's called at top level of JS, or is in func that's defined w/ async keyword. 
```js
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```
Now designated as asynchronous:
```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
Explicitly create a promise
```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```
### await
Declares that a func returns a promise. Wraps a call to asyn func, blocks execution until resolves and returns reult of promise.
Let's us return result of promise instead of actual promise obj:
```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
Promise:
```js
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```
async/await:
```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```