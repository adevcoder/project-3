
DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (1,'AIDS/HIV Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (2,'Animal Welfare','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (3,'Art','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (4,'Baptist Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (5,'Buddhist Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (6,'Catholic Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (7,'Charter School','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (8,'Child Care','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (9,'Children and Youth','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (10,'Communications','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (11,'Community Building and Renewal','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (12,'Community Organizing / Advocacy','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (13,'Community Service and Volunteering','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (14,'Computers and Technology','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (15,'Consumer Protection','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (16,'Credit Union','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (17,'Crime, Safety, and Victims Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (18,'Deaf and Hard of Hearing','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (19,'Democratic Club','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (20,'Disability Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (21,'Disaster Relief','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (22,'Domestic Violence Support Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (23,'Drug and Alcohol Treatment','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (24,'Economic Development','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (25,'Education and Academia','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (26,'Energy Conservation and Green Living','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (27,'Entrepreneurship','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (28,'Environment and Ecology','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (29,'Family and Parenting','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (30,'Farming and Agriculture','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (31,'Foundations, Fundraising, and Philanthropy','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (32,'Kiwanis Club','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (33,'LGBTQ','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (34,'Government','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (35,'Health and Medicine','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (36,'Hindu Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (37,'Homelessness','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (38,'Housing','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (39,'Human Rights and Civil Liberties','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (40,'Immigration','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (41,'International Relations','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (42,'International Relief Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (43,'Jewish Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (44,'Job Training and Workplace Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (45,'Law and Legal Assistance','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (46,'Legal Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (47,'Library or Resource Center','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (48,'Lutheran Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (49,'Lyons Club','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (50,'Media and Journalism','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (51,'Mens Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (52,'Mental Health','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (53,'Methodist Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (54,'Microcredit','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (55,'Multi-Service Community Agency','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (56,'Museums and   Historical Societies','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (57,'Muslim Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (58,'Network of Nonprofit Organizations','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (59,'Other Religious Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (60,'Other Service Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (61,'Peace, War, and Conflict   Resolution','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (62,'Personal Finance','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (63,'Politics','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (64,'Poverty and Hunger','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (65,'Prison Reform','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (66,'Presbyterian Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (67,'Professional Association','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (68,'Protestant Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (69,'Race and Ethnicity','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (70,'Recovery, Addiction, and Abuse','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (71,'Religion, Spiritual, and Metaphysical Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (72,'Republican Club','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (73,'Research and   Science','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (74,'Rotary Club','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (75,'Rural Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (76,'Seniors and Retirement Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (77,'Service Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (78,'Sexual Abuse Support Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (79,'Social Enterprise and Economic Development','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (80,'Sports, Recreation, and Leisure','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (81,'Teaching','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (82,'Travel and Transportation','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (83,'Urban Affairs','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (84,'Veterans Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (85,'Victim Support Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (86,'Voting, Democracy, and Civic Engagement','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (87,'Wildlife and Animal Welfare','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (88,'Women\'s Issues','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (89,'Youth Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (90,'Medical Research','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (91,'Training','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (92,'Conservation','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (93,'Faith-Based','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (94,'Social Services','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (95,'Gang Prevention and Intervention','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (96,'Fathers','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (97,'Information Technology','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (98,'Cultural Affairs','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (99,'Service Learning','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (100,'English Language Learners (ELL)','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (101,'Affordable Housing','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (102,'Shelter/Emergency Shelter','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (103,'Community College','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (104,'Higher Education','2019-11-22 08:41:57','2019-11-22 08:41:57');
INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES (105,'Parent Organization','2019-11-22 08:41:57','2019-11-22 08:41:57');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-22  8:43:50
