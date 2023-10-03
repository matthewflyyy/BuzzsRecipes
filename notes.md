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