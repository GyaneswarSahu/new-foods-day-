-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2024 at 02:10 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foods_day`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerdetails`
--

CREATE TABLE `customerdetails` (
  `customerid` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `emailid` varchar(150) NOT NULL,
  `address` varchar(500) NOT NULL,
  `mobileno` varchar(150) NOT NULL,
  `area` varchar(150) NOT NULL,
  `landmark` varchar(150) NOT NULL,
  `customerstatus` varchar(150) NOT NULL,
  `orderdate` date NOT NULL,
  `ordertime` varchar(150) NOT NULL,
  `delhiverydate` date NOT NULL,
  `delhiverytime` varchar(150) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customerdetails`
--

INSERT INTO `customerdetails` (`customerid`, `name`, `emailid`, `address`, `mobileno`, `area`, `landmark`, `customerstatus`, `orderdate`, `ordertime`, `delhiverydate`, `delhiverytime`, `city`) VALUES
(13, 'azad', 'azad@gmail.com', 's', '3216549870', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '09:00:15', '2024-06-23', '10:30', 'rupali'),
(14, 'john', 'john@email.com', 'bbsr', '3216549870', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '09:09:06', '2024-06-22', '10:30', 'sabarsahi'),
(15, 'doe', 'doe@gmail.com', 'xxxx', '1231231230', 'Bhubaneshwar,Odisha', 'zzzz', 'active', '2024-06-24', '09:15:43', '2024-06-20', '10:30', 'yyyy'),
(16, 'MahakaaL Gaming', 'gyan@gmail.com', 'Fulta, Dhia Street', '07381972959', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:13:53', '2024-06-24', '13:13', 'Fulta, Dhia Street'),
(17, 'MahakaaL Gaming', 'john@email.com', 'Fulta, Dhia Street', '07381972959', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:17:49', '2024-03-10', '10:30', 'Fulta, Dhia Street'),
(18, 'MahakaaL Gaming', 'mahakalcoc350@gmail.com', 'Fulta, Dhia Street', '07381972959', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:19:26', '2024-06-10', '20:22', 'Fulta, Dhia Street'),
(19, 'demo', 'john@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:26:00', '2024-06-20', '10:10', 'demo'),
(20, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:27:27', '2024-02-10', '08:30', 'demo'),
(21, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:43:06', '2024-06-10', '12:02', 'demo'),
(22, 'demo', 'jhyn@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:44:27', '2024-06-10', '20:25', 'demo'),
(23, 'demo', 'jhyn@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:46:45', '2024-06-10', '20:25', 'demo'),
(24, 'demo', 'bhjn@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '13:49:18', '2024-05-10', '10:15', 'demo'),
(25, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'rtn  ', 'maharsi college', 'active', '2024-06-24', '2024-06-24 16:31:07', '2024-06-24', '10:20', 'demo'),
(26, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'rtn  ', 'maharsi college', 'active', '2024-06-24', '2024-06-24 16:33:25', '2024-06-24', '10:20', 'demo'),
(27, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '2024-06-24 16:33:53', '2024-06-10', '10:20', 'demo'),
(28, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '2024-06-24 16:36:55', '2024-06-10', '10:20', 'demo'),
(29, 'demo', 'demo@gmail.com', 'demo', '0000000000', 'Bhubaneshwar,Odisha', 'maharsi college', 'active', '2024-06-24', '2024-06-24 16:39:46', '2024-06-10', '10:20', 'demo'),
(30, 'demo', 'demo@gmail.com', 'demo', '', 'khbg', 'hnuh', 'active', '2024-06-24', '13:22:56', '2024-06-20', '04:23', 'demo'),
(31, 'demo', 'demo@gmail.com', 'demo', '', 'khbg', 'maharsi college', 'active', '2024-06-24', '13:36:41', '0000-00-00', '10:30', 'demo'),
(32, 'demo', 'demo@gmail.com', 'demo', '', 'khbg', 'maharsi college', 'active', '2024-06-24', '13:40:18', '0000-00-00', '10:30', 'demo'),
(33, 'demo', 'demo@gmail.com', 'demo', '', 'khbg', 'maharsi college', 'active', '2024-06-24', '13:40:34', '0000-00-00', '10:30', 'demo'),
(34, 'demo', 'demo@gmail.com', 'demo', '', 'khbg', 'maharsi college', 'active', '2024-06-24', '13:50:20', '2024-10-01', '20:22', 'demo');

-- --------------------------------------------------------

--
-- Table structure for table `itemdetails`
--

CREATE TABLE `itemdetails` (
  `itemid` int(11) NOT NULL,
  `itemname` varchar(50) NOT NULL,
  `itemtype` varchar(50) NOT NULL,
  `itemstatus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `itemdetails`
--

INSERT INTO `itemdetails` (`itemid`, `itemname`, `itemtype`, `itemstatus`) VALUES
(1, 'Apppetizers', 'Veg', 'Active'),
(2, 'Main Course', 'Non-Veg', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `orderid` int(11) NOT NULL,
  `customerid` int(11) NOT NULL,
  `subitemid` int(11) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `totalprice` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subitemdetails`
--

CREATE TABLE `subitemdetails` (
  `subitemid` int(11) NOT NULL,
  `subitemname` varchar(100) NOT NULL,
  `itemprice` float NOT NULL,
  `subitemimage` varchar(150) NOT NULL,
  `subitemstatus` varchar(50) NOT NULL,
  `itemid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subitemdetails`
--

INSERT INTO `subitemdetails` (`subitemid`, `subitemname`, `itemprice`, `subitemimage`, `subitemstatus`, `itemid`) VALUES
(1, 'Rosted penaut', 99, 'uploads/rostedpeanut.jpg', 'Active', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customerdetails`
--
ALTER TABLE `customerdetails`
  ADD PRIMARY KEY (`customerid`);

--
-- Indexes for table `itemdetails`
--
ALTER TABLE `itemdetails`
  ADD PRIMARY KEY (`itemid`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `customerid` (`customerid`),
  ADD KEY `subitemid` (`subitemid`);

--
-- Indexes for table `subitemdetails`
--
ALTER TABLE `subitemdetails`
  ADD PRIMARY KEY (`subitemid`),
  ADD KEY `itemid` (`itemid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customerdetails`
--
ALTER TABLE `customerdetails`
  MODIFY `customerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `itemdetails`
--
ALTER TABLE `itemdetails`
  MODIFY `itemid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subitemdetails`
--
ALTER TABLE `subitemdetails`
  MODIFY `subitemid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customerdetails` (`customerid`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`subitemid`) REFERENCES `subitemdetails` (`subitemid`);

--
-- Constraints for table `subitemdetails`
--
ALTER TABLE `subitemdetails`
  ADD CONSTRAINT `subitemdetails_ibfk_1` FOREIGN KEY (`itemid`) REFERENCES `itemdetails` (`itemid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
