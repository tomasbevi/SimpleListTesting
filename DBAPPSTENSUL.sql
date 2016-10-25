-- phpMyAdmin SQL Dump
-- version 4.0.10.15
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 20, 2016 at 01:56 AM
-- Server version: 5.6.31-log
-- PHP Version: 5.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `c0130353_stensul`
--

-- --------------------------------------------------------

--
-- Table structure for table `lista`
--

CREATE TABLE IF NOT EXISTS `lista` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `orden` varchar(255) DEFAULT NULL,
  `img` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `lista`
--

INSERT INTO `lista` (`id`, `nombre`, `descripcion`, `orden`, `img`) VALUES
(24, 'Proin id purus commodo, condimentum justo at, ornare nisi. Vestibulum ante ipsum primis in faucibus ', 'Curabitur tempus ligula nec felis vulputate, sed pellentesque mauris vehicula. In sit amet magna in lorem consectetur vestibulum. Nam a libero eget magna maximus semper. Nulla facilisi. Nam ut eros mauris. Proin egestas quis enim iaculis hendrerit. Etiam quis dignissim augue. Integer maximus tellus ', '1', 'assets/jQuery-File-Upload/server/php/files/2 (1).jpg'),
(25, 'Curabitur tempus ligula nec felis vulputate, sed pellentesque mauris vehicula. In sit amet magna in ', 'Fusce bibendum placerat vulputate. Vestibulum vehicula fermentum blandit. Etiam justo lacus, laoreet et vestibulum non, tristique sit amet nisl. Nunc vulputate ligula a libero aliquet, eget dictum purus maximus. Vivamus odio diam, mattis non tempus eget, scelerisque sed nibh. Ut non convallis elit', '2', 'assets/jQuery-File-Upload/server/php/files/1.jpg'),
(26, 'Quisque vel diam vitae purus lobortis mattis vitae ut orci. Sed ornare, lacus ut pretium aliquet, ma', 'Nulla id molestie risus. Quisque massa leo, volutpat ut laoreet quis, congue vel tellus. Sed ullamcorper vitae enim vel pharetra. Duis mattis lacinia pretium. Nam arcu nisi, rutrum ac metus et, tincidunt sollicitudin ligula. Curabitur non lectus diam. Cras tincidunt sapien quis ultricies pellentesqu', '4', 'assets/jQuery-File-Upload/server/php/files/4.jpg'),
(27, 'In orci massa, finibus ut erat non, tincidunt mattis nulla. Aliquam lacinia tortor sed ex hendrerit,', 'In orci massa, finibus ut erat non, tincidunt mattis nulla. Aliquam lacinia tortor sed ex hendrerit, eget commodo metus blandit. Morbi massa libero, viverra in odio at, finibus ultrices lorem. Phasellus ut ex sit amet nisl congue sollicitudin. Nam a lacinia justo. Donec non mauris ex.', '3', 'assets/jQuery-File-Upload/server/php/files/6.jpg'),
(28, 'test', 'Test', '5', 'assets/jQuery-File-Upload/server/php/files/3 (1).jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
