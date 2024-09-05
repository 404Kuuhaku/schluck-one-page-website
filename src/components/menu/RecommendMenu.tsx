"use client";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { RECOMMEND_MENU } from "@/libs/constants/constats";

import { motion, useInView } from "framer-motion";
import React, { useMemo, useRef } from "react";
import PopUp from "./PopUp";
import { IPopUpProps } from "@/libs/interface/interface";

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
								pt: { xs: 0, md: 7 },
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
								mx: "auto",
								width: { xs: "95%", md: "100%" },
								height: { xs: 300 },
								position: { xs: "static", md: "absolute" },
								left: 0,
								bottom: 0,
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

const PizzaSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Box
				sx={{
					pt: { xs: 2, md: 5 },
					pb: 3,
					bgcolor: "#14100d",
					height: { xs: 400, md: 650 },
				}}
			>
				<Grid container spacing={{ xs: 0, md: 4 }}>
					<Grid
						size={{ xs: 12, md: 6 }}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					>
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
								fontWeight: { xs: 500, md: 700 },
								pt: { xs: 0, md: 8 },
							}}
						>
							{RECOMMEND_MENU[1].name}
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
							}}
						>
							{RECOMMEND_MENU[1].des}
						</Typography>
					</Grid>
					<Grid size={{ xs: 12, md: 7 }}>
						<Box
							sx={{
								mx: "auto",
								width: { xs: 300, sm: 400, md: 600, lg: 800 },
								height: { xs: 225, sm: 300, md: 450, lg: 600 },
							}}
						>
							<motion.div
								ref={ref}
								initial={{ x: -300, opacity: 0 }}
								animate={{
									x: isInView ? 0 : -100,
									opacity: isInView ? 1 : 0,
								}}
								transition={{ duration: 0.8 }}
								style={{
									width: "100%",
									height: "100%",
									backgroundImage: `url(${RECOMMEND_MENU[1].img[2].src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							/>
						</Box>
					</Grid>
					<Grid
						size={{ xs: 12, md: 4 }}
						sx={{
							display: { xs: "none", md: "block" },
							alignItems: "center",
						}}
					>
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
								fontWeight: { xs: 500, md: 700 },
								pt: { xs: 0, md: 17, lg: 25 },
							}}
						>
							{RECOMMEND_MENU[1].name}
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "left" },
							}}
						>
							{RECOMMEND_MENU[1].des}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

const FiletMignon: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Box
				sx={{
					pt: { xs: 0, md: 5 },
					pb: 6,
					height: { xs: 400, md: 650 },
				}}
			>
				<Typography
					variant="h3"
					gutterBottom
					sx={{
						textAlign: { xs: "center" },
						fontWeight: { xs: 500, md: 700 },
					}}
				>
					{RECOMMEND_MENU[2].name}
				</Typography>
				<Typography
					variant="h5"
					gutterBottom
					sx={{
						textAlign: { xs: "center" },
					}}
				>
					{RECOMMEND_MENU[2].des}
				</Typography>
				<Box
					sx={{
						mx: "auto",
						width: { xs: 300, sm: 400, md: 600, lg: 600 },
						height: { xs: 225, sm: 300, md: 450, lg: 450 },
					}}
				>
					<motion.div
						ref={ref}
						initial={{ y: -300, opacity: 0 }}
						animate={{
							y: isInView ? 0 : -100,
							opacity: isInView ? 1 : 0,
						}}
						transition={{ duration: 0.8 }}
						style={{
							width: "100%",
							height: "100%",
							backgroundImage: `url(${RECOMMEND_MENU[2].img[0].src})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							boxShadow: "20px 20px 0px #3d251e",
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

const GarlicBreadSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Box
				sx={{
					pt: { xs: 2, md: 5 },
					pb: 6,
					display: "flex",
					justifyContent: "center",
					bgcolor: "#14100d",
					height: { xs: 400, md: 650 },
				}}
			>
				<Grid
					container
					spacing={{ xs: 0, md: 4 }}
					sx={{ width: "90vw" }}
				>
					<Grid
						size={{ xs: 12, md: 5 }}
						sx={{
							alignItems: "center",
						}}
					>
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "right" },
								fontWeight: { xs: 500, md: 700 },
								pt: { xs: 0, md: 7, lg: 25 },
							}}
						>
							{RECOMMEND_MENU[5].name}
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								textAlign: { xs: "center", md: "right" },
							}}
						>
							{RECOMMEND_MENU[5].des}
						</Typography>
					</Grid>

					<Grid size={{ xs: 12, md: 7}}>
						<Box
							sx={{
								mx: "auto",
								width: { xs: 300, sm: 400, md: 400, lg: 500 },
								height: { xs: 225, sm: 300, md: 300, lg: 500 },
							}}
						>
							<motion.div
								ref={ref}
								initial={{ x: 30, opacity: 0 }}
								animate={{
									x: isInView ? 0 : 30,
									opacity: isInView ? 1 : 0,
								}}
								transition={{ duration: 0.8 }}
								style={{
									width: "100%",
									height: "100%",
									backgroundImage: `url(${RECOMMEND_MENU[5].img[1].src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

const NormalSection: React.FC = () => {
	const popUpData = useMemo(() => {
		const data: IPopUpProps[] = [
			{
				name: RECOMMEND_MENU[3].name,
				imgSrc: RECOMMEND_MENU[3].img[2].src,
			},
			{
				name: RECOMMEND_MENU[4].name,
				imgSrc: RECOMMEND_MENU[4].img[1].src,
			},
		];

		return data;
	}, []);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					pt: { xs: 5, md: 5 },
					pb: 5,
					height: { xs: "auto", md: 650 },
				}}
			>
				<Grid container spacing={{ xs: 0, md: 4 }}>
					{popUpData.map((data, index) => (
						<Grid size={{ xs: 12, md: 6 }} key={index}>
							<PopUp name={data.name} imgSrc={data.imgSrc} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

const RecommendMenu: React.FC = () => {
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
			<TBoneSection />
			<PizzaSection />
			<FiletMignon />
			<GarlicBreadSection />
			<NormalSection />

			{/* <Typography>
				นอกจากอาหารและขนมแล้ว
				ทางร้านยังมีผลิตภัณฑ์กาแฟสินค้าจากจังหวัดกาญจนบุรี
				กาแฟสาละวะไล่โว่ (กาแฟออร์แกนิค) ภายใต้โครงการมูลนิธิภูมิบดินทร์
				เพื่อส่งเสริมและพัฒนาชุมชนในเขตรักษาพันธุ์สัตว์ป่าทุ่งใหญ่
				ซึ่งจำหน่ายที่ร้าน Schluck ที่เดียวในกาญจนบุรี
			</Typography> */}
		</>
	);
};

export default RecommendMenu;
