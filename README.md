# Gym Registering API
### Software developed for registering people at the gym - also use API and database concepts

## Technologies used: 
* JavaScript - for using nodeJs
* ExpressJS - for creating routes
* MongoDB - for NoSQL database
* MVC pattern - for working with data in a organized and correct way - the purpose of this project was only working with the back-end, so views were not included

## How to use it:
1. Install MongoDB and create a database called **gym-cadastration**
2. Clone the repository with `git clone https://github.com/uricampos/gym-cadastration-API.git `or `git clone git@github.com:uricampos/gym-cadastration-API.git`
3. Enter the directory and use `npm install` to install all depedencies
4. Use `npm run dev` to start the server with nodemon - you can change it in the script if you want
5. Use a software to send requisitions - e.g *Postman* or *Insomnia*

## Structure:
The database was developed thinking that the gym will have a student with name, email, phone, adress, goal and workout. The workout will be compose by a name, the exercises included and all the students that make this workout. The exercise will have a name, a muscle that it enfases and a description.</br></br>
All that said, you can find students and see their informations and workouts. Also, you can find workouts and see their names, their exercises and the students that make them. Finally, you cand find exercises and see their names, the muscles that they activate and the descriptions.</br><br>
You cand find specific things as well - searching by their ids.
