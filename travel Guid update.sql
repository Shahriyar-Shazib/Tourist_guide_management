-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 07:43 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel guide`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` varchar(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userid`, `name`, `address`, `email`, `number`, `gender`, `dob`) VALUES
(1, 'Shahriyar', 'shahriyar shazib', 'Gazipur,Dhaka', 'shazib.shahriyar@gmail.com', '01956424568', 'Male', '1999-02-16');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `postid` varchar(20) NOT NULL,
  `comment` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `userid`, `postid`, `comment`) VALUES
(1, 'shahadat', '2', 'lovely place for holyday in low cost!!'),
(2, 'shahadat', '2', 'beautifull!!'),
(4, 'shazib01', '2', 'thanks for Review'),
(5, 'shazib01', '2', 'thanks for Review'),
(6, 'shahriyar', '2', 'WOW'),
(7, 'shahriyar', '2', 'thanks for Review');

-- --------------------------------------------------------

--
-- Table structure for table `generaluser`
--

CREATE TABLE `generaluser` (
  `id` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` varchar(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `generaluser`
--

INSERT INTO `generaluser` (`id`, `userid`, `name`, `address`, `email`, `number`, `gender`, `dob`) VALUES
(1, 'shahadat', 'shahadat Hossain', 'Tangail,Bangladesh', 'shahadat@gmail.com', '01910057462', 'Male', '1998/1/1'),
(3, 'ishrat', 'Ishrat Jahan', 'Bashabo,Dhaka', 'ishrat@gmail.com', '01620705918', 'Female', '1998-05-19');

-- --------------------------------------------------------

--
-- Table structure for table `pendingpost`
--

CREATE TABLE `pendingpost` (
  `postid` int(10) NOT NULL,
  `UserId` varchar(11) NOT NULL,
  `country` varchar(70) NOT NULL,
  `visiting_Place` varchar(70) NOT NULL,
  `short_history` varchar(5000) NOT NULL,
  `travel_medium` varchar(500) NOT NULL,
  `cost` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pendingpost`
--

INSERT INTO `pendingpost` (`postid`, `UserId`, `country`, `visiting_Place`, `short_history`, `travel_medium`, `cost`) VALUES
(1, 'shahadat', 'India', 'Agra- TAjMahal', 'Choice of holiday destinations in India seems to be infinite – from scenic destinations to historically and culturally soaked sites, from cities bustling with chaos and confusion to destinations offering laid-back and relaxed stays. Amidst this huge list of vacation destinations, there is always confusion regarding choosing the best place to visit in India. Well! We relieve you of this dilemma and present the list of top 20 destinations in India for all kinds of travellers.', 'by route/by Air', 'Route:15000,Air:--'),
(2, 'shazib01', 'India', 'Places to Visit in Goa', 'Goa is a verdant natural paradise bounded on the one side by the foothills of the Sahyadri range and on the other by the Arabian Sea. \r\nThe old adage is true: Living in Goa is a 365-day vacation. Beaches, scenic sunsets, historical forts and an easygoing life make Goa one of the best beach destinations in India. Whether you want to witness the majestic 600-m-high Dudhsagar Falls or try your luck in Casino Royale, Goa serves travelers of varied tastes. From the famed Fort Aguada to the blue waters of Dona Paula and Sinquerim beaches, there\'s no dearth of points of interest in Goa.\r\n\r\nIf you want to get the same feel of that of Las Vegas and Miami, staying in India, visit Goa. The nightlife in Goa has to be experienced close to the beaches in North Goa - Baga and Calangute - where most of the bars and restaurants offer live music accompanied by amazing coastal cuisine. Even if you can\'t make it to Goa Carnival, which is held every year, you can always feel the carnivalesque atmosphere and a cosmopolitan crowd making the most of their visit.', 'by air,by route', 'air-25000,route-10000'),
(4, 'shazib01', ' USA', 'Niagara Falls', 'Situated along the Canada-US border, Niagara Falls is one of the most famous waterfalls in the world. The water from Lake Erie flows into Lake Ontario over these massive waterfalls, known for the great quantity of water that is constantly tumbling over the vertical drop. The amount of water going over the falls is actually reduced in winter, when more water is used to produce hydroelectric power. Most visitors will not notice a difference.  Niagara Falls is actually a set of three falls, consisting of the largest section known as Horseshoe Falls, a second section on the American side of the river known as the American Falls, and a much thinner section located next to the American Falls, known as Bridal Veil Falls. On clear days, the plume of mist rising from Niagara Falls can be seen from as far away as the CN Tower in downtown Toronto, Canada, on the opposite shore of Lake Ontario.', 'air,road', 'air:5000$,road:2500$'),
(6, '51', 'fbOSEHFVLHSx', 'KJEFBOHBDV', 'KDFBOWHB LF', 'KJEFHW vhb', 'jsbfobv o');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `postid` int(10) NOT NULL,
  `UserId` varchar(20) NOT NULL,
  `country` varchar(70) NOT NULL,
  `visiting_Place` varchar(70) NOT NULL,
  `short_history` varchar(5000) NOT NULL,
  `travel_medium` varchar(500) NOT NULL,
  `cost` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`postid`, `UserId`, `country`, `visiting_Place`, `short_history`, `travel_medium`, `cost`) VALUES
(2, 'shazib01', 'India', 'Agra- TAjMahal', 'Choice of holiday destinations in India seems to be infinite – from scenic destinations to historically and culturally soaked sites, from cities bustling with chaos and confusion to destinations offering laid-back and relaxed stays. Amidst this huge list of vacation destinations, there is always confusion regarding choosing the best place to visit in India. Well! We relieve you of this dilemma and present the list of top 20 destinations in India for all kinds of travellers.', 'by route/by Air', 'Route:15000,Air:--'),
(3, 'Shazib01', 'India', 'Mcleodganj – Heaven Amidst The Hills', 'The majestic mountains can call tourists to experience the best of what nature has to offer at Mcleodganj – one of the most beautiful places in India. Triund offers a spectacular view of the Dhauladhar ranges. Experience bliss while camping under billions of stars with your friends in Triund. This is among the loveliest Indian destinations for camping, regardless of which season you’re coming in. No wonder it’s among the top 10 places to visit in India.', 'By air: Gaggal Airport (18 km away) is the nearest airport.\r\nBy rail: The nearest railhead is Pathankot Railway Station (89 km away)\r\nBy road: Numerous state government & private buses ply between Mcleodganj and various cities of north India like Delhi, Chandigarh, Dharamshala, etc. on a regular basis. Passengers can take a bus to the Mcleodganj bus stand and then hire a taxi.', 'air:15000,road:5000');

-- --------------------------------------------------------

--
-- Table structure for table `scout`
--

CREATE TABLE `scout` (
  `id` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` varchar(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scout`
--

INSERT INTO `scout` (`id`, `userid`, `name`, `address`, `email`, `number`, `gender`, `dob`) VALUES
(1, 'Shazib01', 'Shazib', 'Dhaka,Bangladesh', 'shazib@gamil.com', '01861670601', 'Male', '1998-02-16');

-- --------------------------------------------------------

--
-- Table structure for table `signup_req`
--

CREATE TABLE `signup_req` (
  `id` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` varchar(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup_req`
--

INSERT INTO `signup_req` (`id`, `userid`, `name`, `address`, `email`, `number`, `gender`, `dob`, `password`) VALUES
(1, 'kabir', 'kabir Ahmed', 'bishwaspara, Shafipur, kaliakoir, gazipur, Dhaka', 'kamal@mai.com', '01956424568', 'Male', '1999-02-16', '123');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userid`, `password`, `type`) VALUES
(1, 'shahadat', '12', 'Guser'),
(2, 'Shahriyar', '1', 'Admin'),
(3, 'Shazib01', '1234', 'SCOUT');

-- --------------------------------------------------------

--
-- Table structure for table `whitelist`
--

CREATE TABLE `whitelist` (
  `id` int(10) NOT NULL,
  `postid` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whitelist`
--

INSERT INTO `whitelist` (`id`, `postid`, `userid`) VALUES
(1, 2, 'shahadat'),
(4, 3, 'shahadat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`,`userid`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generaluser`
--
ALTER TABLE `generaluser`
  ADD PRIMARY KEY (`id`,`userid`);

--
-- Indexes for table `pendingpost`
--
ALTER TABLE `pendingpost`
  ADD PRIMARY KEY (`postid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postid`);

--
-- Indexes for table `scout`
--
ALTER TABLE `scout`
  ADD PRIMARY KEY (`id`,`userid`);

--
-- Indexes for table `signup_req`
--
ALTER TABLE `signup_req`
  ADD PRIMARY KEY (`id`,`userid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`userid`);

--
-- Indexes for table `whitelist`
--
ALTER TABLE `whitelist`
  ADD PRIMARY KEY (`id`,`postid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `generaluser`
--
ALTER TABLE `generaluser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pendingpost`
--
ALTER TABLE `pendingpost`
  MODIFY `postid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `scout`
--
ALTER TABLE `scout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `signup_req`
--
ALTER TABLE `signup_req`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `whitelist`
--
ALTER TABLE `whitelist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
