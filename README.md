# Employee-Registry
This is a simple Angular / Java-Spring application designed to store employee data.
All employee data is stored in a mySQL database which is handled using Hibernate and JPA.
The UI primarily was built with Bootstrap and the frontend was built using Angular. The Angular code can be found in `src/web`. 

![](https://i.imgur.com/6xp1i0V.png)

## Running the Demo
### Prerequisites
You will need the following installed:

#### Required for Method 1

* A mySQL database
* JDK 11+ (built and tested with JDK 14)
* A Java IDE
* Node / Node Package Manager

#### Required for Method  2

* Node / Node Package Manager
* Docker

### Running Demo - Method 1

This method requires a local running MySQL server, JDK installed and an IDE.

1. Change the `application.properties` file in `src/main/resources/` to match your mySQL database details.
2. Start up the API by running `EmployeeRegistry.java`.
3. `cd` into the `src/web` directory via Terminal and run `npm install` and then `npm start`.
4. Visit `localhost:4200` via your browser.

### Running a Demo - Method 2

This way may be a bit more simpler but it requires Docker to run the API and the database. This method does not require JDK, an IDE or mySQL running locally but it does require Docker to be installed and properly configured.

1. `cd` into the root project directory. 
2. Run `docker-compose up`.

This will spin up the API and the database and connect the two together. Then you can follow step 3 from method 1. 
