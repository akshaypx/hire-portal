#Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim as build

#Information around who maintains the image
MAINTAINER gagankumar03

# Add the application's jar to the container
COPY target/Jobs-0.0.1-SNAPSHOT.jar Jobs-0.0.1-SNAPSHOT.jar

#execute the application
ENTRYPOINT ["java","-jar","/Jobs-0.0.1-SNAPSHOT.jar"]