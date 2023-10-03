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