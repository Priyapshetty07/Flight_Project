create database Flight_project;
use Flight_project;

CREATE TABLE `register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `flights`(
 `id` int NOT NULL,
 `startPoint` varchar(30) Not Null,
 `destination` varchar(30) Not Null,
 `arrival` varchar(30) Not Null,
 `departure` varchar(30) Not Null,
 `amount` int Not Null,
 PRIMARY KEY (`id`)
  );


-- CREATE TABLE `passenger_details`(
--  `id` int NOT NULL AUTO_INCREMENT,
--   `firstname` varchar(25) NOT NULL,
--   `lastname` varchar(25) NOT NULL,
--   `phoneNumber` numeric(10) NOT NULL,
--   `email` varchar(25) NOT NULL,
--  `startPoint` varchar(30) Not Null,
--  `destination` varchar(30) Not Null,
--  `arrival` varchar(30) Not Null,
--  `departure` varchar(30) Not Null,
--  `bookingDate` varchar(30) NOT NULL,
--  `amount` int Not Null,
--   PRIMARY KEY (`id`)
-- );

drop database Flight_project;