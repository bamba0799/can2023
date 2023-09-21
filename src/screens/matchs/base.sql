-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 19, 2023 at 05:48 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `can2023`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('SU_ADMIN','ADMIN','POI') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ADMIN'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `GoodDeal`
--

CREATE TABLE `GoodDeal` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `interestPointId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `GoodDeal`
--

INSERT INTO `GoodDeal` (`id`, `label`, `photo`, `interestPointId`) VALUES
('03f62ae7-5c1b-41a6-9b3e-99a09be166da', 'Jumia food', 'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/343189301_1302314390365477_4121415247473343064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_ohc=VRJWDq08ogEAX_Whc13&_nc_ht=scontent.fabj3-2.fna&oh=00_AfBIejSa85_Ng57lvTHf7ALAuKwKyktynpaBrGojlrztTQ&oe=650DDB1B', NULL),
('39c72191-e5bb-4458-874e-fdb443578e27', 'Le KFC', 'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/344693400_897400758022018_2706677821071136366_n.jpg?stp=c98.0.1034.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=52f669&_nc_ohc=6saPCKVyJE4AX_5HIX9&_nc_ht=scontent.fabj3-2.fna&oh=00_AfBoYyX5pmaseMRBPUUPHtma_y33oY440An0EdtqWKYXrA&oe=650E9308', NULL),
('598210d6-c9f0-4133-87d0-1170215d5c04', 'Frit', 'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/370616397_622096000046472_6070497163224338792_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=qA22TarA5M4AX_O2zox&_nc_ht=scontent.fabj3-2.fna&oh=00_AfCnc3OWOJc0TTMBuImjhlJcCluX_tfibBAPxpzsO4SPGw&oe=650CD7EC', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Group`
--

CREATE TABLE `Group` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` enum('a','b','c','d','e','f') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Group`
--

INSERT INTO `Group` (`id`, `label`) VALUES
('44b10651-ec22-42f0-8e36-170d29c267fc', 'b'),
('5072ed5a-2f30-4290-8587-a46acb03939d', 'f'),
('67742df0-1351-4583-8161-c28a97ec8a52', 'a'),
('6a16b3f7-5bc9-49d1-90f0-97bddb2b6855', 'c'),
('8f27e073-6cfc-4999-90e0-28c2e8281743', 'e'),
('fe2c6e65-a2a9-45c6-9cb3-1d4dba9741ec', 'd');

-- --------------------------------------------------------

--
-- Table structure for table `InterestPoint`
--

CREATE TABLE `InterestPoint` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci,
  `shortDescription` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `vip` tinyint(1) NOT NULL DEFAULT '0',
  `interestPointCategoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `InterestPoint`
--

INSERT INTO `InterestPoint` (`id`, `name`, `location`, `contact`, `photo`, `shortDescription`, `longDescription`, `vip`, `interestPointCategoryId`) VALUES
('2a5f4d3d-4ea9-44b8-8a30-912f35a56abd', 'Golf Hotel', '5.344911228945155,-4.004182811947439', '0506836055', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hotel_du_golf.jpg', 'Abidjan', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, 'ae31ed66-5465-452c-b4a8-62a61d7ef8ea'),
('35a5b8b9-b665-4763-b39b-846f5e228b15', 'Orange Village', '5.3149112284155,-4.209182511947439', '0506836055', 'https://afriquemagazine.com/sites/default/files/inline-images/img4%20%287%29.jpg', 'Abidjan', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, 'e16d3b5b-946f-4ff2-8a0f-aa2041ebc1cb'),
('5fcf204b-0e06-4e3c-be9c-b195a91a99c6', 'Orange Village', '5.3149112284155,-4.209182511947439', '0506836055', 'https://images.adsttc.com/media/images/62d5/468d/2467/e401/65b8/8064/newsletter/orange-village-koffi-and-diabate-architectes_6.jpg?1658144499', 'Abidjan', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, 'e16d3b5b-946f-4ff2-8a0f-aa2041ebc1cb'),
('bfc9d8f0-4474-44f4-822e-8db7aecc3a8a', 'Mamiezi', '5.344911228945145,-4.004172811947439', '0799083717', 'https://www.mamiezi.com/uploads/images/abidjan-piscine_bl.jpg', 'Ce pays d’Afrique ', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, 'ae31ed66-5465-452c-b4a8-62a61d7ef8ea'),
('ca6feaad-e763-47af-ac4d-6008047ecf81', 'Azalay resto', '5.3449112244155,-4.204182811947439', '0506836055', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/ee/ea/8d/restaurant-le-banco.jpg', 'Abidjan', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, '2d9b52dc-37c5-4283-8d07-130d7c4ce739'),
('dafb023e-4c06-4c23-a7b6-7023d538e188', 'Bassam resto', '5.3449112284155,-4.209182811947439', '0506836055', 'https://hotel-la-madrague-grand-bassam.hotelmix.fr/data/Photos/OriginalPhoto/13342/1334209/1334209394/Hotel-La-Madrague-Grand-Bassam-Exterior.JPEG', 'Abidjan', 'Toutes ces caractéristiques font ce pays un incontournable du continent. En Côte d\'Ivoire, chacun trouve matière à satisfaire ', 1, '2d9b52dc-37c5-4283-8d07-130d7c4ce739');

-- --------------------------------------------------------

--
-- Table structure for table `InterestPointCategory`
--

CREATE TABLE `InterestPointCategory` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `InterestPointCategory`
--

INSERT INTO `InterestPointCategory` (`id`, `label`) VALUES
('2d9b52dc-37c5-4283-8d07-130d7c4ce739', 'Restaurant'),
('ae31ed66-5465-452c-b4a8-62a61d7ef8ea', 'Hotel'),
('e16d3b5b-946f-4ff2-8a0f-aa2041ebc1cb', 'Village Orange');

-- --------------------------------------------------------

--
-- Table structure for table `Match`
--

CREATE TABLE `Match` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `time` datetime(3) NOT NULL,
  `status` enum('next','live','over') COLLATE utf8mb4_unicode_ci NOT NULL,
  `stadiumId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Match`
--

INSERT INTO `Match` (`id`, `date`, `time`, `status`, `stadiumId`) VALUES
('1acd1597-7d45-4c5b-9aeb-10afe1f1f6fa', '2024-01-12', '2024-01-12 13:00:00.000', 'over', 'adc8e751-2b42-43d7-b6ac-203935809aca'),
('24c30a14-da53-4422-8bd3-463f7ae2b4b3', '2024-01-13', '2024-01-12 13:00:00.000', 'next', 'adc8e751-2b42-43d7-b6ac-203935809aca'),
('508f1cd3-1f38-43e3-9fb5-3ad5c2677ea6', '2024-01-12', '2024-01-12 19:00:00.000', 'over', 'adc8e751-2b42-43d7-b6ac-203935809aca'),
('5ee39a62-9571-413b-aee2-431792353358', '2024-01-15', '2024-01-15 13:00:00.000', 'next', 'adc8e751-2b42-43d7-b6ac-203935809aca'),
('66e77297-5819-44e9-aecf-771bcd6d0704', '2024-01-13', '2024-01-13 19:00:00.000', 'next', 'd96b20c4-d680-43cd-8814-215cd72c17fe'),
('676e0e91-8dc5-47ba-911d-c54af5fb6427', '2024-01-14', '2024-01-14 16:00:00.000', 'next', 'adc8e751-2b42-43d7-b6ac-203935809aca'),
('b69d7f66-914f-470e-8e2f-3766c12e37c5', '2024-01-15', '2024-01-15 20:00:00.269', 'next', 'd96b20c4-d680-43cd-8814-215cd72c17fe'),
('e70d3ef5-88d5-4922-a90a-7627c9a87749', '2024-01-14', '2024-01-14 13:00:00.000', 'next', 'adc8e751-2b42-43d7-b6ac-203935809aca');

-- --------------------------------------------------------

--
-- Table structure for table `MatchStageTeam`
--

CREATE TABLE `MatchStageTeam` (
  `matchId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stageId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teamId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isWinner` tinyint(1) DEFAULT NULL,
  `goals` int(11) DEFAULT NULL,
  `possession` int(11) DEFAULT NULL,
  `corners` int(11) DEFAULT NULL,
  `fouls` int(11) DEFAULT NULL,
  `assists` int(11) DEFAULT NULL,
  `offsides` int(11) DEFAULT NULL,
  `redCards` int(11) DEFAULT NULL,
  `yellowCard` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `MatchStageTeam`
--

INSERT INTO `MatchStageTeam` (`matchId`, `stageId`, `teamId`, `isWinner`, `goals`, `possession`, `corners`, `fouls`, `assists`, `offsides`, `redCards`, `yellowCard`) VALUES
('1acd1597-7d45-4c5b-9aeb-10afe1f1f6fa', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '1d7d397b-3702-4133-b410-5815ac4ac3be', 0, 1, 60, 2, 0, 0, 0, 0, 1),
('1acd1597-7d45-4c5b-9aeb-10afe1f1f6fa', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '1e52fcd8-a450-4d7a-90c5-bfd8e8997c2e', 1, 2, 40, 1, 0, 0, 0, 0, 1),
('24c30a14-da53-4422-8bd3-463f7ae2b4b3', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'af0c84d5-6974-4195-bc86-46d663db1551', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('24c30a14-da53-4422-8bd3-463f7ae2b4b3', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'd259201c-9ada-459a-9df6-e01902933ce9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('508f1cd3-1f38-43e3-9fb5-3ad5c2677ea6', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '4e2b4735-7185-48f4-bffa-64f2e6179b2e', 0, 1, 40, 10, 0, NULL, 0, 0, 2),
('508f1cd3-1f38-43e3-9fb5-3ad5c2677ea6', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'ad5ca887-b998-473b-99f3-48d4c475df8c', 1, 3, 60, 2, 0, 0, 0, 0, 2),
('5ee39a62-9571-413b-aee2-431792353358', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'e5480298-ca4e-498f-a2c5-7420c79a04aa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('5ee39a62-9571-413b-aee2-431792353358', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'f5eb46d5-f400-42d5-a4ab-634af02ca2a7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('66e77297-5819-44e9-aecf-771bcd6d0704', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '1d7d397b-3702-4133-b410-5815ac4ac3be', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('66e77297-5819-44e9-aecf-771bcd6d0704', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '4e2b4735-7185-48f4-bffa-64f2e6179b2e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('676e0e91-8dc5-47ba-911d-c54af5fb6427', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '09838ef8-c2d7-4f84-ab26-196fba4e96fe', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('676e0e91-8dc5-47ba-911d-c54af5fb6427', '93c123db-757f-4ff2-b059-65f6d5c42b6c', '3f3bab02-286c-4f8a-94c7-706419c80e64', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('b69d7f66-914f-470e-8e2f-3766c12e37c5', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '202d5c03-b071-4233-8cfa-fb551b5e93c7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('b69d7f66-914f-470e-8e2f-3766c12e37c5', '38ea3cf3-c548-432b-855b-2c0dcd40d646', '59b89488-8f56-4f3d-b768-5330e537d69a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('e70d3ef5-88d5-4922-a90a-7627c9a87749', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'a13f69c7-0b03-4fa9-a55b-da36fae6042a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('e70d3ef5-88d5-4922-a90a-7627c9a87749', '38ea3cf3-c548-432b-855b-2c0dcd40d646', 'bf5eaabe-ccf8-4733-859f-7feaa03d5613', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `MatchTicketUser`
--

CREATE TABLE `MatchTicketUser` (
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ticketId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matchId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `point` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OTP`
--

CREATE TABLE `OTP` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userContact` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OTP`
--

INSERT INTO `OTP` (`id`, `value`, `userContact`) VALUES
('clm7fg6g40000jyoxrop9k9e0', '0812', '0799083717'),
('clm7hr3dh0000jyrbcoosnm62', '3701', '0799083717'),
('clm7kw0cq0000jy9nlc8vu3e7', '4159', '0799083717'),
('clm7ocmy70000jy14sc1luctq', '2450', '0709068899'),
('clm7ofu280001jy14lc2z4oih', '5464', '0708998766'),
('clm7qv2270002jy140b6stykd', '5985', '0799083717'),
('clm7thr7h0003jy14r1nx00b9', '4811', '0799083717'),
('clm7y5bjc0000jyif4ziwz0h4', '8132', '0767201000'),
('clmaanqs50000jylsa0s0os1y', '6371', '0799083717'),
('clmaddmmv0000jysq4zeqsga8', '8574', '0799083717'),
('clmaeo6900001jysqz1rexbwy', '1385', '0799083718'),
('clmagvc030000jykksr7sj1s0', '9602', '0788554433'),
('clmaj9h6u0000jy3me8eddmb7', '6407', '0799887766'),
('clmaj9sqv0001jy3mq8kfyhhd', '8575', '0799083717'),
('clmajbnq80002jy3mibpmj45z', '0202', '0799887766'),
('clmak53yp0003jy3mg8vehmdw', '6366', '0766554433'),
('clmaoc5m00000jyvtqbih0son', '3596', '0777777777'),
('clmaqmsdf0000jypol9kbbdmj', '2648', '0788888888'),
('clmarg8ta0000jyyj5lny3bx1', '1270', '0709083717'),
('clmarh6600001jyyj1qa64ryd', '1939', '0799083717'),
('clmg7sgtu0000jyqxzpi5wr6g', '0035', '0799083717'),
('clmgm6rgu0001jyqxqty1kg2c', '0617', '0799083717'),
('clmjjvyid0000jyau9t08jgtk', '3809', '0799083717'),
('clmjk2j1g0001jyau5mgkx4il', '0473', '0799083717'),
('clmkgkhc30002jyau4ko0ycv4', '3321', '0799083717'),
('clmkjrtvf0003jyau37vl6nrb', '5355', '0799083717'),
('clmkrgwxn0000jyzsj9vaw3j3', '1803', '0799083717'),
('clmkveetw0000jyedxjg4dbq9', '7551', '0799083717'),
('clmnw1wvr0000jy4e76pbx8rh', '7254', '0799083717'),
('clmo2uz2w0001jy4eq36cu7tp', '5916', '0799083717'),
('clmo5tcp30002jy4eoqs1pz7c', '3461', '0799083717'),
('clmo81m1g0000jy1jsjbrttm3', '9330', '0799083717'),
('clmo8xrv50000jyt30rnhyrg1', '5915', '0799083717'),
('clmodcgrc0000jykxonn5hkxn', '5908', '0799083717'),
('clmoy1e0t0001jykx5as166jg', '3119', '0799083717'),
('clmoyhh3s0002jykx9r6uvn3g', '2449', '0799083717'),
('clmozkkch0000jyydtu5kzi6c', '2436', '0799083717'),
('clmp1mlmt0000jy813yzjkf4t', '8394', '0799083717'),
('clmp9mrlo0000jyp94n16pg32', '4241', '0799083717'),
('clmpau6ef0000jypcafsmeqf5', '5379', '0799083717'),
('clmpd0m260000jyanugw8zppg', '4426\'\'', '0799083717'),
('clmpgaagc0000jybhma79jupa', '4853', '0799083717'),
('clmpizbm30000jyj3wdkun5r0', '5174', '0799083717'),
('clmpkfy9l0000jywglj05j4el', '5833', '0799083717'),
('clmplhj7v0000jyrokbtm4hf6', '8764', '0799083717'),
('clmpli0fv0001jyroxqu0om0j', '7118', '0799083717'),
('clmplrqzb0000jyzzp830wcwv', '9963', '0799083717'),
('clmpny8h50000jyl9pzk00939', '7869', '0799083717'),
('clmq0krqo0000jy2afc7sljro', '2025', '0799083717'),
('clmq3h3gg0000jyttjzgo4pxt', '2329', '0799083717');

-- --------------------------------------------------------

--
-- Table structure for table `Player`
--

CREATE TABLE `Player` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jerseyNumber` tinyint(4) NOT NULL,
  `position` enum('goalkeeper','defender','midfielder','stricker') COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `intlCareerGoals` int(11) DEFAULT NULL,
  `club` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci,
  `teamId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Question`
--

CREATE TABLE `Question` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Question`
--

INSERT INTO `Question` (`id`, `label`, `quizId`, `duration`) VALUES
('1', 'Qui est le manager de l\'Orange Digital Academy?', '1', 10),
('2', 'Où se trouve le siège d\'Orange Digital Academy ?', '1', 10),
('3', 'Quel poste occupe Touré Vassindou au sein de l\'ODC?', '1', 10),
('4', 'Qui est le directeur général d\'Orange Côte d\'Ivoire?', '1', 10),
('5', 'Quel Pays a organisé La première CAN?', '2', 10),
('6', 'Quel pays a remporté la CAN 2019?', '2', 10),
('7', 'Qui est le meilleur buteur de la CAN 2017?', '2', 10),
('8', 'En Quelle année la Côte d\'Ivoire a remporté sa recente CAN?', '2', 10);

-- --------------------------------------------------------

--
-- Table structure for table `QuestionQuizResponseUser`
--

CREATE TABLE `QuestionQuizResponseUser` (
  `questionId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responseId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `QuestionQuizResponseUser`
--

INSERT INTO `QuestionQuizResponseUser` (`questionId`, `quizId`, `responseId`, `userId`, `point`) VALUES
('2', '1', '7', '562fbbad-77aa-4410-8a0b-01e75ad4b693', 0),
('3', '1', '11', '562fbbad-77aa-4410-8a0b-01e75ad4b693', 60),
('4', '1', '15', '562fbbad-77aa-4410-8a0b-01e75ad4b693', 40);

-- --------------------------------------------------------

--
-- Table structure for table `Quiz`
--

CREATE TABLE `Quiz` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Quiz`
--

INSERT INTO `Quiz` (`id`, `label`, `date`) VALUES
('1', 'Connaissance générale d\'Orange Côte d\'Ivoire', '2023-08-29 10:25:09'),
('2', 'La Coupe d\'Afrique des Nations ', '2023-08-29 10:25:09');

-- --------------------------------------------------------

--
-- Table structure for table `Response`
--

CREATE TABLE `Response` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isCorrect` tinyint(1) NOT NULL,
  `questionId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Response`
--

INSERT INTO `Response` (`id`, `value`, `isCorrect`, `questionId`) VALUES
('1', 'Moussa Nabla', 0, '1'),
('10', 'Sécrétaire', 0, '3'),
('11', 'Responsable technique', 1, '3'),
('12', 'Agent de securité', 0, '3'),
('13', 'Diarra yaya', 0, '4'),
('14', 'Brou Yao ', 0, '4'),
('15', 'Mamadou Bamba', 1, '4'),
('16', 'Erwin Sittie', 0, '4'),
('2', 'Sehi David', 0, '1'),
('3', 'Touré Vassindou', 0, '1'),
('4 ', 'Léonce Koné', 1, '1'),
('5', 'Yopougon Selmer', 0, '2'),
('6', 'Plateau Indenié', 0, '2'),
('7', 'Cocody Riviera Golf', 1, '2'),
('8', 'Treichville Arras', 0, '2'),
('9', 'Stagiaire', 0, '3');

-- --------------------------------------------------------

--
-- Table structure for table `Seat`
--

CREATE TABLE `Seat` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `row` int(11) NOT NULL,
  `stadiumId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Stadium`
--

CREATE TABLE `Stadium` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int(11) NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Stadium`
--

INSERT INTO `Stadium` (`id`, `name`, `city`, `capacity`, `location`, `photo`) VALUES
('adc8e751-2b42-43d7-b6ac-203935809aca', 'Stade Charles Konan Banny', 'Yamoussoukro', 20000, '6.829383686947648, -5.2463504089738295', 'https://www.gouv.ci/photos/GALERIESTDYAKRO05062022.JPG'),
('d96b20c4-d680-43cd-8814-215cd72c17fe', 'Stade Olympique d\'Ébimpé', 'Ébimpé', 60012, '5.480841784936946, -4.074608077680399', 'https://www.supersportci.net/fr/wp-content/uploads/2020/09/1574166621-4182.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Stage`
--

CREATE TABLE `Stage` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` enum('group','sixteen','quarter','semi','final') COLLATE utf8mb4_unicode_ci NOT NULL,
  `debut` datetime(3) NOT NULL,
  `end` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Stage`
--

INSERT INTO `Stage` (`id`, `label`, `debut`, `end`) VALUES
('38ea3cf3-c548-432b-855b-2c0dcd40d646', 'group', '2024-01-13 00:00:00.000', '2024-01-24 23:59:59.000'),
('93c123db-757f-4ff2-b059-65f6d5c42b6c', 'sixteen', '2024-01-26 00:00:00.000', '2024-02-04 23:59:59.000'),
('93c609fc-92fe-4588-9211-5bb70f78fc3c', 'quarter', '2024-02-05 00:00:00.000', '2024-02-06 23:59:59.000'),
('c0a506b6-22ff-4f0b-ab8a-05597fdc06a0', 'semi', '2024-02-07 00:00:00.000', '2024-02-08 23:59:59.000'),
('c5693034-e587-48f8-97c8-ea2e0eb088a5', 'final', '2024-02-13 00:00:00.000', '2024-02-13 23:59:59.000');

-- --------------------------------------------------------

--
-- Table structure for table `Team`
--

CREATE TABLE `Team` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flag` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isMemberOfCurrentCAN` tinyint(1) NOT NULL,
  `isDiqualified` tinyint(1) NOT NULL,
  `groupId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Team`
--

INSERT INTO `Team` (`id`, `name`, `code`, `flag`, `isMemberOfCurrentCAN`, `isDiqualified`, `groupId`) VALUES
('09838ef8-c2d7-4f84-ab26-196fba4e96fe', ' Libya', 'LBY', 'https://flagcdn.com/w320/ly.png', 1, 1, '8f27e073-6cfc-4999-90e0-28c2e8281743'),
('1d7d397b-3702-4133-b410-5815ac4ac3be', 'Afrique Du Sud', 'ZAF', 'https://flagcdn.com/w320/za.png', 1, 1, '44b10651-ec22-42f0-8e36-170d29c267fc'),
('1e52fcd8-a450-4d7a-90c5-bfd8e8997c2e', 'Sénégal', 'SNG', 'https://flagcdn.com/w320/sn.png', 1, 1, '67742df0-1351-4583-8161-c28a97ec8a52'),
('202d5c03-b071-4233-8cfa-fb551b5e93c7', 'Mali', 'MLI', 'https://flagcdn.com/w320/ml.png', 1, 1, '67742df0-1351-4583-8161-c28a97ec8a52'),
('28304e42-7568-4e4f-a700-5816920ab9a6', 'Tunisie', 'TUN', 'https://flagcdn.com/w320/tn.png', 1, 1, '44b10651-ec22-42f0-8e36-170d29c267fc'),
('3f3bab02-286c-4f8a-94c7-706419c80e64', 'Algerie', 'DZA', 'https://flagcdn.com/w320/dz.png', 1, 1, '6a16b3f7-5bc9-49d1-90f0-97bddb2b6855'),
('4e2b4735-7185-48f4-bffa-64f2e6179b2e', 'Cameroun', 'CMR', 'https://flagcdn.com/w320/cm.png', 1, 1, '67742df0-1351-4583-8161-c28a97ec8a52'),
('59b89488-8f56-4f3d-b768-5330e537d69a', 'Cape Verde', 'CVP', 'https://flagcdn.com/w320/cv.png', 1, 1, 'fe2c6e65-a2a9-45c6-9cb3-1d4dba9741ec'),
('a13f69c7-0b03-4fa9-a55b-da36fae6042a', 'Nigeria', 'NGA', 'https://flagcdn.com/w320/ng.png', 1, 1, '8f27e073-6cfc-4999-90e0-28c2e8281743'),
('ad5ca887-b998-473b-99f3-48d4c475df8c', 'Côte d\'Ivoire', 'CIV', 'https://flagcdn.com/w320/ci.png', 1, 1, '67742df0-1351-4583-8161-c28a97ec8a52'),
('af0c84d5-6974-4195-bc86-46d663db1551', 'Burkina Faso', 'BFA', 'https://flagcdn.com/w320/bf.png', 1, 1, 'fe2c6e65-a2a9-45c6-9cb3-1d4dba9741ec'),
('ba9c5084-b569-47fc-a39a-b406a445efa0', 'Angola', 'AGO', 'https://flagcdn.com/w320/ao.png', 1, 1, '6a16b3f7-5bc9-49d1-90f0-97bddb2b6855'),
('bf5eaabe-ccf8-4733-859f-7feaa03d5613', 'GABON', 'GAB', 'https://flagcdn.com/w320/gn.png', 1, 1, '44b10651-ec22-42f0-8e36-170d29c267fc'),
('d259201c-9ada-459a-9df6-e01902933ce9', 'Maroc', 'MAR', 'https://flagcdn.com/w320/ma.png', 1, 1, '44b10651-ec22-42f0-8e36-170d29c267fc'),
('daf8dff4-bde2-4d6c-a2e0-8628bc7d34dc', 'Comorres', 'COM', 'https://flagcdn.com/w320/km.png', 1, 1, '6a16b3f7-5bc9-49d1-90f0-97bddb2b6855'),
('df516f87-4ccc-49c6-89ad-5e27f619ae2c', 'Chad', 'TCD', 'https://flagcdn.com/w320/td.png', 1, 1, 'fe2c6e65-a2a9-45c6-9cb3-1d4dba9741ec'),
('e29d7f87-411d-4418-a35b-88f2cca48de6', ' Namibie', 'NAM', 'https://flagcdn.com/w320/na.png', 1, 1, '8f27e073-6cfc-4999-90e0-28c2e8281743'),
('e44445d4-9968-42a3-8802-64f83895b21e', ' Mauritanie', 'MRT', 'https://flagcdn.com/w320/mr.png', 1, 1, '8f27e073-6cfc-4999-90e0-28c2e8281743'),
('e5480298-ca4e-498f-a2c5-7420c79a04aa', 'Botswana', 'BWA', 'https://flagcdn.com/w320/bw.png', 1, 1, '6a16b3f7-5bc9-49d1-90f0-97bddb2b6855'),
('f5eb46d5-f400-42d5-a4ab-634af02ca2a7', 'Burundi', 'BDI', 'https://flagcdn.com/w320/bi.png', 1, 1, 'fe2c6e65-a2a9-45c6-9cb3-1d4dba9741ec');

-- --------------------------------------------------------

--
-- Table structure for table `TeamUser`
--

CREATE TABLE `TeamUser` (
  `teamId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `followedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `TeamUser`
--

INSERT INTO `TeamUser` (`teamId`, `userId`, `followedAt`) VALUES
('09838ef8-c2d7-4f84-ab26-196fba4e96fe', '562fbbad-77aa-4410-8a0b-01e75ad4b693', '2023-09-19 11:44:12.227');

-- --------------------------------------------------------

--
-- Table structure for table `Ticket`
--

CREATE TABLE `Ticket` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matricule` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seatId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TicketCategory`
--

CREATE TABLE `TicketCategory` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `residence` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationality` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `firstName`, `lastName`, `address`, `residence`, `nationality`, `contact`, `photo`) VALUES
('06bccbd5-ca62-4ab4-bb35-e4765afc9954', NULL, NULL, NULL, NULL, NULL, '0767201000', NULL),
('402b24ed-8645-4c4c-a049-daa86653e6c7', NULL, NULL, NULL, NULL, NULL, '0788888888', NULL),
('562fbbad-77aa-4410-8a0b-01e75ad4b693', 'Bamba ', 'Moussa', 'Yopougon', NULL, NULL, '0799083717', 'data:image/jpeg;base64,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'),
('56304200-bd33-4cdc-8aff-ea7246f248b5', 'Bamba', 'Moussa', NULL, NULL, NULL, '0709083717', NULL),
('670558d5-a38b-4c60-a9ab-5bcd723bce4f', NULL, NULL, NULL, NULL, NULL, '0777777777', NULL),
('7391ab30-d868-441e-bca9-f1acc2c8b3db', NULL, NULL, NULL, NULL, NULL, '0709068899', NULL),
('977dd5eb-2116-424e-82ca-9b9a2e6c6271', NULL, NULL, NULL, NULL, NULL, '0788554433', NULL),
('a39bf551-fbab-4f95-a28e-f50b7dcb42a8', NULL, NULL, NULL, NULL, NULL, '0766554433', NULL),
('a8892134-6beb-4998-90c0-8796d3f28dad', NULL, NULL, NULL, NULL, NULL, '0799083718', NULL),
('cc463071-74e6-4c93-8700-83dc54ddc37d', NULL, NULL, NULL, NULL, NULL, '0708998766', NULL),
('f78faec9-36ca-4d5e-bec3-9011d59e6bfe', NULL, NULL, NULL, NULL, NULL, '0799887766', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Admin_username_key` (`username`);

--
-- Indexes for table `GoodDeal`
--
ALTER TABLE `GoodDeal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GoodDeal_interestPointId_fkey` (`interestPointId`);

--
-- Indexes for table `Group`
--
ALTER TABLE `Group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `InterestPoint`
--
ALTER TABLE `InterestPoint`
  ADD PRIMARY KEY (`id`),
  ADD KEY `InterestPoint_interestPointCategoryId_fkey` (`interestPointCategoryId`);

--
-- Indexes for table `InterestPointCategory`
--
ALTER TABLE `InterestPointCategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Match`
--
ALTER TABLE `Match`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Match_stadiumId_fkey` (`stadiumId`);

--
-- Indexes for table `MatchStageTeam`
--
ALTER TABLE `MatchStageTeam`
  ADD UNIQUE KEY `MatchStageTeam_matchId_stageId_teamId_key` (`matchId`,`stageId`,`teamId`),
  ADD KEY `MatchStageTeam_stageId_fkey` (`stageId`),
  ADD KEY `MatchStageTeam_teamId_fkey` (`teamId`);

--
-- Indexes for table `MatchTicketUser`
--
ALTER TABLE `MatchTicketUser`
  ADD UNIQUE KEY `MatchTicketUser_matchId_ticketId_userId_key` (`matchId`,`ticketId`,`userId`),
  ADD KEY `MatchTicketUser_userId_fkey` (`userId`),
  ADD KEY `MatchTicketUser_ticketId_fkey` (`ticketId`);

--
-- Indexes for table `OTP`
--
ALTER TABLE `OTP`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OTP_userContact_fkey` (`userContact`);

--
-- Indexes for table `Player`
--
ALTER TABLE `Player`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Player_teamId_fkey` (`teamId`);

--
-- Indexes for table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Question_quizId_fkey` (`quizId`);

--
-- Indexes for table `QuestionQuizResponseUser`
--
ALTER TABLE `QuestionQuizResponseUser`
  ADD UNIQUE KEY `QuestionQuizResponseUser_questionId_quizId_responseId_userId_key` (`questionId`,`quizId`,`responseId`,`userId`),
  ADD KEY `QuestionQuizResponseUser_quizId_fkey` (`quizId`),
  ADD KEY `QuestionQuizResponseUser_responseId_fkey` (`responseId`),
  ADD KEY `QuestionQuizResponseUser_userId_fkey` (`userId`);

--
-- Indexes for table `Quiz`
--
ALTER TABLE `Quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Response`
--
ALTER TABLE `Response`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Response_questionId_fkey` (`questionId`);

--
-- Indexes for table `Seat`
--
ALTER TABLE `Seat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Seat_stadiumId_fkey` (`stadiumId`);

--
-- Indexes for table `Stadium`
--
ALTER TABLE `Stadium`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Stadium_name_key` (`name`);

--
-- Indexes for table `Stage`
--
ALTER TABLE `Stage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Team`
--
ALTER TABLE `Team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Team_name_key` (`name`),
  ADD UNIQUE KEY `Team_code_key` (`code`),
  ADD KEY `Team_groupId_fkey` (`groupId`);

--
-- Indexes for table `TeamUser`
--
ALTER TABLE `TeamUser`
  ADD UNIQUE KEY `TeamUser_teamId_userId_key` (`teamId`,`userId`),
  ADD KEY `TeamUser_userId_fkey` (`userId`);

--
-- Indexes for table `Ticket`
--
ALTER TABLE `Ticket`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Ticket_matricule_key` (`matricule`),
  ADD UNIQUE KEY `Ticket_seatId_key` (`seatId`),
  ADD KEY `Ticket_categoryId_fkey` (`categoryId`);

--
-- Indexes for table `TicketCategory`
--
ALTER TABLE `TicketCategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_contact_key` (`contact`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `GoodDeal`
--
ALTER TABLE `GoodDeal`
  ADD CONSTRAINT `GoodDeal_interestPointId_fkey` FOREIGN KEY (`interestPointId`) REFERENCES `InterestPoint` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `InterestPoint`
--
ALTER TABLE `InterestPoint`
  ADD CONSTRAINT `InterestPoint_interestPointCategoryId_fkey` FOREIGN KEY (`interestPointCategoryId`) REFERENCES `InterestPointCategory` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Match`
--
ALTER TABLE `Match`
  ADD CONSTRAINT `Match_stadiumId_fkey` FOREIGN KEY (`stadiumId`) REFERENCES `Stadium` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `MatchStageTeam`
--
ALTER TABLE `MatchStageTeam`
  ADD CONSTRAINT `MatchStageTeam_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `MatchStageTeam_stageId_fkey` FOREIGN KEY (`stageId`) REFERENCES `Stage` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MatchStageTeam_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `MatchTicketUser`
--
ALTER TABLE `MatchTicketUser`
  ADD CONSTRAINT `MatchTicketUser_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MatchTicketUser_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MatchTicketUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `OTP`
--
ALTER TABLE `OTP`
  ADD CONSTRAINT `OTP_userContact_fkey` FOREIGN KEY (`userContact`) REFERENCES `User` (`contact`) ON UPDATE CASCADE;

--
-- Constraints for table `Player`
--
ALTER TABLE `Player`
  ADD CONSTRAINT `Player_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Question`
--
ALTER TABLE `Question`
  ADD CONSTRAINT `Question_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `QuestionQuizResponseUser`
--
ALTER TABLE `QuestionQuizResponseUser`
  ADD CONSTRAINT `QuestionQuizResponseUser_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `QuestionQuizResponseUser_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `QuestionQuizResponseUser_responseId_fkey` FOREIGN KEY (`responseId`) REFERENCES `Response` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `QuestionQuizResponseUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Response`
--
ALTER TABLE `Response`
  ADD CONSTRAINT `Response_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Seat`
--
ALTER TABLE `Seat`
  ADD CONSTRAINT `Seat_stadiumId_fkey` FOREIGN KEY (`stadiumId`) REFERENCES `Stadium` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Team`
--
ALTER TABLE `Team`
  ADD CONSTRAINT `Team_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `TeamUser`
--
ALTER TABLE `TeamUser`
  ADD CONSTRAINT `TeamUser_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `TeamUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Ticket`
--
ALTER TABLE `Ticket`
  ADD CONSTRAINT `Ticket_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `TicketCategory` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Ticket_seatId_fkey` FOREIGN KEY (`seatId`) REFERENCES `Seat` (`id`) ON UPDATE CASCADE;
