"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";

const MainSection = ({ params }: any) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isZoomIn, setIsZoomIn] = useState(true);

	const images = useMemo(
		() => [
			"/images/schluck1.jpg",
			"/images/schluck2.jpg",
			"/images/schluck3.jpg",
			"/images/schluck4.jpg",
			"/images/schluck5.jpg",
		],
		[]
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setIsZoomIn((prev) => !prev);
			setCurrentImage((prevImage) =>
				prevImage === images.length - 1 ? 0 : prevImage + 1
			);
		}, 4000);

		return () => clearInterval(interval);
	}, [images.length]);

	const nameStyle = useMemo(
		() => ({
			fontSize: {
				xs: 60,
				sm: 70,
				md: 100,
				lg: 150,
			},
			fontWeight: "500",
		}),
		[]
	);

	const descriptionStyle = useMemo(
		() => ({
			fontSize: {
				xs: 15,
				sm: 20,
				md: 25,
				lg: 30,
			},
		}),
		[]
	);

	return (
		<Box
			sx={{
				position: "relative",
				minHeight: { xs: 300, sm: 400, md: 400, lg: "100vh" },
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<AnimatePresence>
				{images.map(
					(image, index) =>
						index === currentImage && (
							<motion.div
								key={image}
								initial={{
									opacity: 0,
									scale: isZoomIn ? 1.05 : 1,
								}}
								animate={{
									opacity: 1,
									scale: isZoomIn ? 1 : 1.05,
								}}
								exit={{
									opacity: 0,
									scale: isZoomIn ? 1.05 : 1,
								}}
								transition={{
									opacity: { duration: 1, ease: "easeInOut" },
									scale: { duration: 4, ease: "easeInOut" },
								}}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundImage: `url(${image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									// filter: "blur(4px)",
									zIndex: 1,
								}}
							></motion.div>
						)
				)}
			</AnimatePresence>

			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					maxWidth: {
						xs: "95%",
						sm: "85%",
						md: "75%",
						lg: "65%",
					},
					textAlign: "center",
					color: "white",
					backdropFilter: "blur(10px)",
					backgroundColor: "rgba(0, 0, 0, 0.3)",
					padding: {
						xs: 2,
						sm: 3,
						md: 7,
						lg: 7,
					},
					borderRadius: {
						xs: 4,
						sm: 4,
						md: 7,
						lg: 7,
					},
				}}
			>
				<Typography variant="h2" component="div" sx={nameStyle}>
					Schluck
				</Typography>
				<Typography variant="h5" component="h5" sx={descriptionStyle}>
					ร้านอาหารสไตล์ฟิวชั่นและขนมสไตล์ฝรั่งเศส
				</Typography>
				<Typography variant="h5" component="h5" sx={descriptionStyle}>
					ร้านได้เปิดบริการมาเข้าปีที่ 31
				</Typography>
				<Typography variant="h5" component="h5" sx={descriptionStyle}>
					โดยเจ้าของร้านได้ทำอาหารเอง
					บรรยากาศสไตล์ครอบครัวเหมือนทานอาหารอยู่ที่บ้าน
				</Typography>
				<Typography variant="h5" component="h5" sx={descriptionStyle}>
					ร้านตัังอยู่บนถนนมหาดไทย เชิงสะพานสุดใจ แม่น้ำแควใหญ่
					อ.เมือง จ.กาญจนบุรี
				</Typography>

				{/* <Typography>เวลาเปิด-ปิด 11.00-21.00น.</Typography>
				<Typography>ร้านหยุด วันอังคาร</Typography>
				<Typography>เบอร์โทร 081-355-9477</Typography> */}
			</Box>
		</Box>
	);
};

export default MainSection;
