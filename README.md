# Startup Specification
## Elevator Pitch
As a college student, it is hard to find time to do all that you have to do in a week. With all that college students have to do, one of the first things to be forgotten about is cooking and eating a decent meal. We try, but finding a fast, cheap recipe takes time, and once we find one, we don't want to be stuck eating that same meal everyday. I have found myself copying quick recipes into the notes on my phone to try to have them together in a single location. So I am developing a website that allows you to easily save, organize and share recipes! Perfect for those who don't have time to spend looking for new recipes and then copying them into a disorganized file.

## Design
### Wireframe
Home Page

![Image of Home page wireframe](<Diagrams/WireframeHomeScreen.png>)

View available recipes

![Alt text](<Diagrams/WireframeRecipeSection.png>)
### Userflow Diagram
![Alt text](<Diagrams/UserFlowChart.png>)

## Key Features
- Secure Login
- Browsing recipes by category
- Sharing recipes between friends
- Saving and organizing recipes in your personal account
- A top recipe section
- Recipes show the ingredients, time to make, and cooking instructions

## Technologies
- HTML: Uses HTML to put down the basic structure of the site. Includes the home page, log in page, about us, the recipe browsing page and the saved recipe section
- CSS: Creates a visually pleasing website that includes good design principles.
- JavaScript: Creates functionality for login, viewing other users' recipes, and saving recipes.
- Web Services: Backend service for log in and creating and retrieving recipes
- Authentification: Create account and log in securely to your account. Users can't save or create recipes unless they are logged in.
- Database Data: Stores all the recipes put into the website as well as the recipes that a specific user saves to their account.
- WebSocket Data: Recipes are added to the website's "Browse" section as they are added by users and a user can be sent a recipe by a friend.

# HTML deliverable

For this deliverable, I created the outline of my website using HTML.

- **HTML pages** - 9 HTML pages that represent the home, login, create account, about, and myaccount pages as well as the pages containing all recipes, breakfast recipes, lunch recipes, and dinner recipes.
- **Links** - Each page has a menu in the header that contains links to the other pages. The log in button takes you to the myaccount page and the create account button takes you to the create account page.
- **Text** - There is text on the home page as well as on the about page.
- **Images** - There is an image with lots of food on the home page, and an image with each recipe corresponding to its resulting food.
- **Login** - Input boxes for username and password with a submit button as well as a button to create a new account.
- **Database** - The recipes on the site (including the saved recipes on the myaccount page) represent data pulled from the database.
- **WebSocket** - The message "*Brooklynn just sent you a recipe*" on the myaccount page represents a realtime message of a recipe sent to you from another user.

