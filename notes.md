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

        