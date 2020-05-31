FROM adoptopenjdk/openjdk14:alpine-jre

# Refer to Maven build -> finalName
ARG JAR_FILE=target/EmployeeRegistry-0.0.1-SNAPSHOT.jar

# cd /opt/app
WORKDIR /opt/app

# cp target/EmployeeRegistry.jar /opt/app/app.jar
COPY ${JAR_FILE} app.jar

# java -jar /opt/app/app.jar
ENTRYPOINT ["java","-jar","app.jar"]
