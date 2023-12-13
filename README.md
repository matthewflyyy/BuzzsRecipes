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

# CSS Deliverable
For this deliverable, I utilized CSS to properly style my application.
- **Header, Footer and Main content body**
- **Navigation Elements** - I dropped the underlines and color change once the link has been visited. I also styled them so they look like buttons to be easily recognized by the user.
- **Responsive to window resizing** - I ensured that the application looks good at all window sizes, especializing on a mobile device.
- **Application Elements** - I put in contrast and I used my whitespace well. I also made all the elements easy to find for the user.
- **Application text content** - There is a consistent use of font.
- **Application Images** - I made a couple images background images overlayed with text. I also properly placed and sized the recipe pictures.

# JavaScript Deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.
- **Login** - When you Press login or create an account it takes you to the My Account page where your username is displayed at the top.
- **Database** - The username is stored and retrieved in local storage. Also, when you add a new recipe (which you get to from the My Account page), that recipe is stored in local storage and then displayed in the All Recipes page.
- **WebSocket** - On the All Recipes page, a "user" periodically adds a new recipe at the top-left corner. This will be replaced with WebSocket messages later.
- **Application Logic** - When you are creating a recipe, there is a button to add ingredients and add more steps to your recipe. Those ingredients and instructions are then displayed on the recipe page with the instructions in numerical order.

# Service deliverable
For this deliverable I added backend endpoints that receives recipes and returns the added recipes. I also get quotes from a 3rd party endpoint.
- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - Call to thirdparty endpoint to get quotes that are placed on the about page.
- **Backend service endpoints** - Endpoints for added recipes.
- **Frontend calls service endpoints** - I did this using the fetch function to retrieve the recipes.

# Database Deliverable
For this deliverable, I stored the recipes in a database.
- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My endpoints process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

# Login Deliverable
- **User Registration** - Creates a new account in the database.
- **Existing User** - Takes the user to their account if the user already exists.
- **Use MongoDB to store credentials** - Stores the credentials for each user.
- **Restricts Functionality** - Users don't have access to recipes, an account page or have the ability to add recipes until they have logged in.
# WebSocket Deliverable
For this deliverable, I created a new "web socket" page that can be accessed from the footer to create a counter that pops up as an alert and goes up in number each time it is clicked.
-**Backend listens for WebSocket connection** - Done!
-**Frontend makes WebSocket connection** - Done!
-**Data sent over WebSocket connection** - Done!
-**WebSocket data displayed** - Counter is displayed in real time.

# React Deliverable
For this deliverable I converted the application over to use React.
-**Bundled and transpiled** - Done!
-**Components** - Converted all of my different pages to components.
-**Router** - Added routing between all the different components.
-**Hooks** - Properly used useState and effects to make changes to properties.