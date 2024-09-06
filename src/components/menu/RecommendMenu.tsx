"use client";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { RECOMMEND_MENU, SECTION_DATA } from "@/libs/constants/constats";

import { motion, useInView } from "framer-motion";
import React, { useMemo, useRef } from "react";
import PopUp from "./PopUp";
import {
	IGalleryItem,
	IPopUpProps,
	ISteakProps,
} from "@/libs/interface/interface";
import Gallery from "./Gallery";

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
					pt: { xs: 4, md: 5 },
					pb: { xs: 2, md: 5 },
					bgcolor: "#14100d",
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

const SteakComponent: React.FC<ISteakProps> = ({ name, des, img }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Typography
				variant="h3"
				gutterBottom
				sx={{
					textAlign: { xs: "center" },
					fontWeight: { xs: 500, md: 700 },
					// pt: { xs: 10, md: 0 },
				}}
			>
				{name}
			</Typography>
			<Typography
				variant="h5"
				gutterBottom
				sx={{
					textAlign: { xs: "center" },
					wordBreak: "keep-all", // Prevent breaking Thai words
					whiteSpace: "normal", // Allow line breaks between phrases
					maxWidth: "70%",
					mx: "auto",
				}}
			>
				{des}
			</Typography>
			<Box
				sx={{
					mx: "auto",
					width: { xs: 225, sm: 250, md: 300, lg: 450 },
					height: { xs: 225, sm: 250, md: 300, lg: 450 },
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
						backgroundImage: `url(${img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						boxShadow: "20px 20px 0px #3d251e",
					}}
				/>
			</Box>
		</>
	);
};

const SteakSection: React.FC = () => {
	const steakData = useMemo(() => {
		const data: ISteakProps[] = [
			{
				name: RECOMMEND_MENU[2].name,
				des: RECOMMEND_MENU[2].des,
				img: RECOMMEND_MENU[2].img[0].src,
			},
			{
				name: RECOMMEND_MENU[6].name,
				des: RECOMMEND_MENU[6].des,
				img: RECOMMEND_MENU[6].img[0].src,
			},
		];
		return data;
	}, []);
	return (
		<>
			<Box
				sx={{
					pt: { xs: 4, md: 5 },
					pb: { xs: 7, md: 8 },
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Grid
					container
					spacing={{ xs: 0, md: 4 }}
					sx={{ width: "90vw" }}
				>
					{steakData.map((data, index) => (
						<Grid
							size={{ xs: 12, md: 6 }}
							sx={{
								alignItems: "center",
								mb: { xs: index === 0 ? 10 : 0, md: 0 },
							}}
							key={index}
						>
							<SteakComponent
								name={data.name}
								des={data.des}
								img={data.img}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

const GarlicBreadSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	// const theme = useTheme();
	// const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
	// console.log("isSmallScreen:", isSmallScreen);

	return (
		<>
			<Box
				sx={{
					pt: { xs: 4, md: 5 },
					pb: { xs: 2, md: 5 },
					display: "flex",
					justifyContent: "center",
					bgcolor: "#14100d",
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

					<Grid size={{ xs: 12, md: 7 }}>
						<Box
							sx={{
								mx: "auto",
								width: { xs: 300, sm: 400, md: 400, lg: 500 },
								height: { xs: 225, sm: 300, md: 300, lg: 500 },
							}}
						>
							<motion.div
								ref={ref}
								// initial={{ x: 100, opacity: 0 }}
								// animate={{
								// 	x: isInView ? 0 : 50,
								// 	opacity: isInView ? 1 : 0,
								// }}
								initial={{ x: 30, opacity: 0 }}
								animate={{
									x: isInView ? 0 : 30,
									opacity: isInView ? 1 : 0,
								}}
								// initial={{
								// 	x: initialX,
								// 	opacity: 0,
								// }}
								// animate={{
								// 	x: isInView ? 0 : animateX,
								// 	opacity: isInView ? 1 : 0,
								// }}
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

const DessertSection: React.FC = () => {
	const galleryData = useMemo(() => {
		const data: IGalleryItem[] = [
			{
				name: "mille feuille",
				imgSrc: "/images/menu/valid_background/mille_feuille.jpg",
			},
			{
				name: "brownie cheesecake",
				imgSrc: "/images/menu/valid_background/brownie_cheesecake.jpg",
			},
			{
				name: "japanese cheesecake",
				imgSrc: "/images/menu/valid_background/japanese_cheesecake.jpg",
			},
			{
				name: "banoffee",
				imgSrc: "/images/menu/valid_background/banoffee.jpg",
			},
			{
				name: "croissant",
				imgSrc: "/images/menu/valid_background/croissant.jpg",
			},
			{
				name: "tiramisu",
				imgSrc: "/images/menu/valid_background/tiramisu.jpg",
			},
		];
		return data;
	}, []);

	return (
		<>
			<Box
				id={SECTION_DATA[2].id}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					px: { xs: 2, md: 10 },
					// mx: "auto",
				}}
			>
				<Grid container spacing={{ xs: 0, md: 4 }}>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={{ display: { xs: "none", md: "block" } }}>
							<Typography
								variant="h3"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
									fontWeight: { xs: 500, md: 700 },
									pt: { xs: 0, sm: 10, md: 12, lg: 15 },
								}}
							>
								ขนมเค้กและของหวานต่างๆ
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								หมุนเวียนไปมาในแต่ละวัน พลาดไม่ได้กับ ทิรามิสุ
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								ไวท์ช็อคโกแลตชีสเค้ก และ เครม บรูเล่
							</Typography>
						</Box>
						<Box sx={{ display: { xs: "block", md: "none" } }}>
							<Typography
								variant="h3"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
									fontWeight: { xs: 500, md: 700 },
									pt: { xs: 0, sm: 10, md: 12, lg: 15 },
								}}
							>
								ขนมเค้กและของหวานต่างๆ
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								หมุนเวียนไปมาในแต่ละวัน
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								พลาดไม่ได้กับ ทิรามิสุ
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								ไวท์ช็อคโกแลตชีสเค้ก
							</Typography>
							<Typography
								variant="h5"
								gutterBottom
								sx={{
									textAlign: { xs: "center", md: "left" },
								}}
							>
								และ เครม บรูเล่
							</Typography>
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						{/* <Gallery itemData={galleryData} /> */}
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Gallery itemData={galleryData} />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

const CoffeeData: React.FC = () => {
	const TitleStyle = useMemo(() => {
		return {
			textAlign: { xs: "center", md: "left" },
			fontWeight: { xs: 500, md: 700 },
			fontSize: { xs: 40, sm: 45, md: 50 },
		};
	}, []);
	const SecTitleStyle = useMemo(() => {
		return {
			textAlign: { xs: "center", md: "left" },
			fontWeight: { xs: 500, md: 700 },
			fontSize: { xs: 30, sm: 35, md: 40 },
		};
	}, []);
	const DesStlye = useMemo(() => {
		return {
			textAlign: { xs: "center", md: "left" },
			fontSize: { xs: 15, sm: 20, md: 25 },
		};
	}, []);
	return (
		<>
			<Typography variant="h3" gutterBottom sx={TitleStyle}>
				กาแฟสาละวะไล่โว่
			</Typography>
			<Typography variant="h3" gutterBottom sx={SecTitleStyle}>
				(กาแฟออร์แกนิค)
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				นอกจากอาหารและขนมแล้ว
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				ทางร้านยังมีผลิตภัณฑ์กาแฟสินค้าจากจังหวัดกาญจนบุรี
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				กาแฟสาละวะไล่โว่ (กาแฟออร์แกนิค)
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				ภายใต้โครงการมูลนิธิภูมิบดินทร์
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				เพื่อส่งเสริมและพัฒนาชุมชนในเขตรักษาพันธุ์สัตว์ป่าทุ่งใหญ่
			</Typography>
			<Typography variant="h5" gutterBottom sx={DesStlye}>
				ซึ่งจำหน่ายที่ร้าน Schluck ที่เดียวในกาญจนบุรี
			</Typography>
		</>
	);
};

const CoffeeSection: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<Box
				id={SECTION_DATA[3].id}
				sx={{
					pt: { xs: 4, md: 5 },
					pb: { xs: 2, md: 5 },
					bgcolor: "#14100d",
				}}
			>
				<Grid container spacing={{ xs: 0, md: 4 }}>
					<Grid
						size={{ xs: 12, md: 6 }}
						// sx={{
						// 	display: { xs: "block", md: "none" },
						// }}
						sx={{
							display: { xs: "flex", md: "none" },
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<CoffeeData />
					</Grid>
					<Grid size={{ xs: 12, md: 7 }}>
						<Box
							sx={{
								mx: "auto",
								height: { xs: 225, sm: 300, md: 450, lg: 600 },
								width: { xs: 225, sm: 300, md: 450, lg: 600 },
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
									backgroundImage: `url(/images/menu/valid_background/coffee.jpg)`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							/>
						</Box>
					</Grid>
					<Grid
						size={{ xs: 12, md: 4 }}
						// sx={{
						// 	display: { xs: "none", md: "block" },
						// 	alignItems: "center",
						// }}
						sx={{
							display: { xs: "none", md: "flex" },
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<CoffeeData />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

const RecommendMenu: React.FC = () => {
	return (
		<>
			<Typography
				id={SECTION_DATA[1].id}
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
			<SteakSection />
			<GarlicBreadSection />
			<NormalSection />
			<DessertSection />
			<CoffeeSection />
		</>
	);
};

export default RecommendMenu;
