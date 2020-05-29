# Employee-Registry
This is a simple Angular / Java-Spring application designed to store employee data.
All employee data is stored in a mySQL database which is handled using Hibernate and JPA.
The UI primarily was built with Bootstrap and the frontend was built using Angular.

## Running the Demo
### Prerequisites
You will need the following installed:
* A mySQL database
* JDK 11+ (built and tested with JDK 14)
* A Java IDE
* Node / Node Package Manager

### Running Demo
1. Change the `application.properties` file in `src/main/resources/` to match your mySQL database details.
2. Start up the API by running `EmployeeRegistry.java`.
3. `cd` into the `src/web` directory via Terminal and run `npm install` and then `npm start`.
4. Visit `localhost:4200` via your browser.
