INSERT INTO `647-project`.`user` (`username`) VALUES ("barguy123");
INSERT INTO `647-project`.`user` (`username`) VALUES ("definitelyNotAnABC");
INSERT INTO `647-project`.`user` (`username`) VALUES ("johndoe");
INSERT INTO `647-project`.`user` (`username`) VALUES ("hannahmontanafan2000");

INSERT INTO `647-project`.`drivers_license` (`id`, `name`, `birthdate`, `age`, `address`, `drivers_license_num`) VALUES (1, "Billy Bob", "1990-08-19", 30, "123 E Haskell", "K03-24-198");
INSERT INTO `647-project`.`drivers_license` (`id`, `name`, `birthdate`, `age`, `address`, `drivers_license_num`) VALUES (2, "Officer Twinkles", "1987-02-15", 33, "111 E 11th St", "K03-10-505");
INSERT INTO `647-project`.`drivers_license` (`id`, `name`, `birthdate`, `age`, `address`, `drivers_license_num`) VALUES (3, "Joe Schmoe", "1998-08-19", 22, "1902 N Iowa", "K03-64-246");
INSERT INTO `647-project`.`drivers_license` (`id`, `name`, `birthdate`, `age`, `address`, `drivers_license_num`) VALUES (4, "Plain Jane", "2000-08-19", 20, "454 W Ohio", "K03-15-780");

INSERT INTO `647-project`.`bars` (`name`, `address`) VALUES ("The Bourgeois Pig", "6 E 9th St");
INSERT INTO `647-project`.`bars` (`name`, `address`) VALUES ("The Jayhawker", "701 Massachusetts St");
INSERT INTO `647-project`.`bars` (`name`, `address`) VALUES ("Harbor Lights", "1031 Massachusetts St");
INSERT INTO `647-project`.`bars` (`name`, `address`) VALUES ("The Sandbar", "17 E 8th St");

INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (1, 1);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (2, 2);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (3, 3);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (4, 4);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (2, 3);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (2, 4);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (3, 1);
INSERT INTO `647-project`.`user_bars` (`user_id`, `bar_id`) VALUES (4, 2);

INSERT INTO `647-project`.`home_remedy` (`id`, `info`, `recipe`) VALUES (2, "A good nap", "counch or bed");
INSERT INTO `647-project`.`remedy` (`id`) VALUES (2);
INSERT INTO `647-project`.`home_remedy` (`id`, `info`, `recipe`) VALUES (4, "blend ingredients together to a smoothie and enjoy", "1 banana, 1 scoop ice cream, milk");
INSERT INTO `647-project`.`remedy` (`id`) VALUES (4);
INSERT INTO `647-project`.`pharm_remedy` (`id`, `name`, `dose`) VALUES (1, "ibuprofen", "2 pills");
INSERT INTO `647-project`.`remedy` (`id`) VALUES (1);
INSERT INTO `647-project`.`pharm_remedy` (`id`, `name`, `dose`) VALUES (3, "pedialyte", "1 bottle");
INSERT INTO `647-project`.`remedy` (`id`) VALUES (3);