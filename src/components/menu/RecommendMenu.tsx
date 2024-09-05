"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { RECOMMEND_MENU } from "@/libs/constants/constats";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

// const RecommendMenuWrapper = async ({ children }: { children: React.ReactNode }) => {
// 	return (
// 		<>
// 			<Box sx={{ display: "block", py: 5 }}>
// 				<Box
// 					sx={{
// 						display: "flex",
// 						justifyContent: "center",
// 						alignItems: "center",
// 						padding: {
// 							xs: "2% 2%",
// 							sm: "2% 5%",
// 							md: "2% 10%",
// 							lg: "2% 20%",
// 						},
// 						maxWidth: 500,
// 						margin: "0 auto",
// 					}}
// 				>
// 					{children}
// 				</Box>
// 			</Box>
// 		</>
// 	);
// };

const TBoneSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					pt: { xs: 0, md: 5 },
					pb: 5,
				}}
			>
				<Grid container spacing={{ xs: 4 }}>
					<Grid
						size={{ xs: 12, md: 6 }}
						sx={{
							position: { xs: "static", md: "relative" },
						}}
					>
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
								fontWeight: { xs: 500, md: 700 },
							}}
						>
							{RECOMMEND_MENU[0].name}
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
							}}
						>
							{RECOMMEND_MENU[0].des}
						</Typography>
						<Box
							sx={{
								display: { xs: "flex", md: "block" },
								mx: "auto",
								width: { xs: "95%", md: "100%" },
								height: { xs: 300 },
								position: { xs: "static", md: "absolute" },
								left: 0,
								bottom: 0,
								// borderRadius: 2,
								// boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)",
							}}
						>
							<motion.div
								ref={ref}
								initial={{ y: 100, opacity: 0 }}
								animate={{
									y: isInView ? 0 : 100,
									opacity: isInView ? 1 : 0,
								}}
								transition={{ duration: 0.8 }}
								style={{
									width: "100%",
									height: "100%",
									backgroundImage: `url(${RECOMMEND_MENU[0].img[1].src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									borderRadius: "1rem",
									boxShadow:
										"5px 10px 10px rgba(0, 0, 0, 0.2)",
								}}
							/>
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box
							sx={{
								display: { xs: "flex", md: "block" },
								mx: "auto",
								width: { xs: "95%", md: 400 },
								height: { xs: 400, md: 600 },
							}}
						>
							<motion.div
								initial={{ y: -100, opacity: 0 }}
								animate={{
									y: isInView ? 0 : -100,
									opacity: isInView ? 1 : 0,
								}}
								transition={{ duration: 0.8 }}
								style={{
									width: "100%",
									height: "100%",
									backgroundImage: `url(${RECOMMEND_MENU[0].img[0].src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									borderRadius: "1rem",
									boxShadow:
										"5px 10px 10px rgba(0, 0, 0, 0.2)",
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

const RecommendMenuCard: React.FC = ({ params }: any) => {
	return (
		<>
			<TBoneSection />
			<Card sx={{ maxWidth: 500 }}>
				<CardMedia
					component="img"
					height={300}
					image={RECOMMEND_MENU[0].img[0].src}
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="h4">
						{RECOMMEND_MENU[0].name}
					</Typography>
					<Typography
						variant="body2"
						// sx={{ color: "text.secondary" }}
					>
						{RECOMMEND_MENU[0].des}
					</Typography>
				</CardContent>
				{/* <CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions> */}
			</Card>
		</>
	);
};

const RecommendMenu: React.FC = ({ params }: any) => {
	return (
		<>
			<Typography
				variant="h1"
				sx={{
					textAlign: "center",
					fontWeight: 600,
					fontSize: { xs: 50, md: 80 },
					py: { xs: 5, md: 10 },
				}}
			>
				เมนูแนะนำ
			</Typography>
			<RecommendMenuCard />
			<Typography>
				นอกจากอาหารและขนมแล้ว
				ทางร้านยังมีผลิตภัณฑ์กาแฟสินค้าจากจังหวัดกาญจนบุรี
				กาแฟสาละวะไล่โว่ (กาแฟออร์แกนิค) ภายใต้โครงการมูลนิธิภูมิบดินทร์
				เพื่อส่งเสริมและพัฒนาชุมชนในเขตรักษาพันธุ์สัตว์ป่าทุ่งใหญ่
				ซึ่งจำหน่ายที่ร้าน Schluck ที่เดียวในกาญจนบุรี
			</Typography>
		</>
	);
};

export default RecommendMenu;
