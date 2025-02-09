# PetIt
This is a clone of reddit. Where the community is able to share photos and posts about the creatures they find pettable. 
Users are able to leave comments on posts to give their thoughts about the post. 

Check it out here => http://pettit.herokuapp.com/

## Pettit 

Posts, and Comments allows users to create posts to share images of there favorite cuddly creatures. Users can also comment on posts.

* Posts: Users can create, read, update, and delete posts.
* Comment: Users can create, read, update, and delete comments.
* Users can only edit/update and delete posts and comments that they have created.

## Technologies used:
<img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

 React | Redux | Flask | Postgres |SQLAlchemy | Alembic | CSS | Git | Node.js | NPM | HTML / JSX | Heroku

## Installation
To install Petit on your local machine please clone the project repository.

1 ) `git clone https://github.com/k-dodsonknapp/PetIt.git`

2 ) cd into Pettit and cd into pettit `cd Pettit/` `cd pettit/`

3 ) Install dependencies

 `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
 
4 ) Create a .env file based on the example with proper settings for your development environment

5 ) Setup your PostgreSQL user, password, database, and make sure it matches your .env file

6 ) To setup the backend application...

enter the pipenv shell, migrate your database, seed your database, and run the flask application

• `cd pettit/`

• `pipenv shell` to enter the pipenv shell

• `flask db upgrade`

• `flask seed all`

• `flask run` while in the shell and within the backend (pettit/) directory under localhost:5000

7 ) To run the frontend react application...

• Change into the frontend directory `cd pettit/react-app/`

• Run `npm install` to install all dependencies from the package.json within the frontend directory

• `npm start` within the frontend directory(pettit/react-app) under localhost:3000

## Post Feed

![Screenshot (232)](https://user-images.githubusercontent.com   /85452797/166218786-294db68c-55c4-41a8-b259-0e95f50f3401.png)

## Comment Feed

![Screenshot (234)](https://user-images.githubusercontent.com/85452797/166219867-06df7ba1-1c0b-4d7f-a626-cb5cb4901b47.png)

## Single Post

![Screenshot (230)](https://user-images.githubusercontent.com/85452797/166218643-1c1be73d-85d8-4603-a3a4-b7fe4e2c5d50.png)

## Future implementations

1) I would like to implement a voting system where a user is able to leave an upvote or a downvote on a post or comment. 
2) I would like to be able to implement communities that will allow users to create communities around their favorite creatures. 
