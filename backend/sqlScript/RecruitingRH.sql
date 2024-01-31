CREATE TABLE `applicants` (
   `id` INT AUTO_INCREMENT,
   `dni` VARCHAR(255),
   `firstName` VARCHAR(255),
   `lastName` VARCHAR(255),
   `email` VARCHAR(255),
   `cellphone` VARCHAR(255),
   `image` VARCHAR(255),
   `gender` VARCHAR(100),
   `birthdate` DATE,
   PRIMARY KEY (`id`)
);

CREATE TABLE `professions` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `applicants_professions` (
   `applicant_id` INT,
   `profession_id` INT,
   PRIMARY KEY (`applicant_id`, `profession_id`)
);


ALTER TABLE `applicants_professions` ADD CONSTRAINT `FK_096798bb-8717-42f0-8e69-d3b4611eef4c` FOREIGN KEY (`applicant_id`) REFERENCES `applicants`(`id`)  ;

ALTER TABLE `applicants_professions` ADD CONSTRAINT `FK_c5df186d-70a5-44d2-aa7d-982ad961a4e0` FOREIGN KEY (`profession_id`) REFERENCES `professions`(`id`)  ;
