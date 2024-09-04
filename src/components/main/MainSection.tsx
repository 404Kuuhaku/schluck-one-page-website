// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// const MainSection = async ({ params }: any) => {
// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					backgroundImage: "url(/images/schluck.jpg)",
// 					backgroundSize: "cover",
// 					backgroundPosition: "center",
// 					padding: 4, // Add some padding to your content
// 					// color: "white",
// 					minHeight: { xs: 300, sm: 400, md: 400, lg: "100vh" },

// 					//set up for text
// 					display: "flex", // Use flexbox
// 					justifyContent: "center", // Center horizontally
// 					alignItems: "center", // Center vertically
// 				}}
// 			>
// 				<Box
// 					sx={{
// 						// maxWidth: "50%",
// 						maxWidth: {
// 							xs: "95%",
// 							sm: "85%",
// 							md: "75%",
// 							lg: "65%",
// 						},
// 						textAlign: "center",
// 						// color: "white",
// 					}}
// 				>
// 					<Box>
// 						<Typography
// 							variant="h2"
// 							component="div"
// 							sx={{
// 								fontSize: {
// 									xs: 60,
// 									sm: 70,
// 									md: 100,
// 									lg: 150,
// 								},
// 								fontWeight: "500",
// 							}}
// 						>
// 							Schluck
// 						</Typography>
// 						<Typography
// 							variant="h5"
// 							component="h5"
// 							sx={{
// 								fontSize: {
// 									xs: 15,
// 									sm: 20,
// 									md: 25,
// 									lg: 30,
// 								},
// 							}}
// 						>
// 							ร้านอาหารสไตล์ฟิวชั่นและขนมสไตล์ฝรั่งเศส
// 						</Typography>
// 						<Typography
// 							variant="h5"
// 							component="h5"
// 							sx={{
// 								fontSize: {
// 									xs: 15,
// 									sm: 20,
// 									md: 25,
// 									lg: 30,
// 								},
// 							}}
// 						>
// 							ร้านได้เปิดบริการมาเข้าปีที่ 31
// 						</Typography>
// 						<Typography
// 							variant="h5"
// 							component="h5"
// 							sx={{
// 								fontSize: {
// 									xs: 15,
// 									sm: 20,
// 									md: 25,
// 									lg: 30,
// 								},
// 							}}
// 						>
// 							โดยเจ้าของร้านได้ทำอาหารเอง
// 							บรรยากาศสไตล์ครอบครัวเหมือนทานอาหารอยู่ที่บ้าน
// 						</Typography>
// 						<Typography
// 							variant="h5"
// 							component="h5"
// 							sx={{
// 								fontSize: {
// 									xs: 15,
// 									sm: 20,
// 									md: 25,
// 									lg: 30,
// 								},
// 							}}
// 						>
// 							ร้านตัังอยู่บนถนนมหาดไทย เชิงสะพานสุดใจ
// 							แม่น้ำแควใหญ่ อ.เมือง จ.กาญจนบุรี
// 						</Typography>

// 						<Typography>เวลาเปิด-ปิด 11.00-21.00น.</Typography>
// 						<Typography>ร้านหยุด วันอังคาร</Typography>
// 						<Typography>เบอร์โทร 081-355-9477</Typography>
// 					</Box>
// 				</Box>
// 			</Box>
// 		</>
// 	);
// };

// export default MainSection;

"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";

const images = [
	"/images/schluck1.jpg",
	"/images/schluck2.jpg",
	"/images/schluck3.jpg",
	"/images/schluck4.jpg",
	"/images/schluck5.jpg",
];

const MainSection = ({ params }: any) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [animationStyle, setAnimationStyle] = useState({
		initial: { opacity: 0, scale: 1.05 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 1.05 },
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimationStyle((prevStyle) => {
				if (
					prevStyle.initial.scale === 1.05 &&
					prevStyle.animate.scale === 1
				) {
					return {
						initial: { opacity: 0, scale: 1 },
						animate: { opacity: 1, scale: 1.05 },
						exit: { opacity: 0, scale: 1 },
					};
				} else {
					return {
						initial: { opacity: 0, scale: 1.05 },
						animate: { opacity: 1, scale: 1 },
						exit: { opacity: 0, scale: 1.05 },
					};
				}
			});
			setCurrentImage((prevImage) =>
				prevImage === images.length - 1 ? 0 : prevImage + 1
			);
		}, 4000);

		return () => clearInterval(interval);
	}, []);
	return (
		<Box
			sx={{
				position: "relative",
				minHeight: { xs: 300, sm: 400, md: 400, lg: "100vh" },
				overflow: "hidden",
				display: "flex", // Use flexbox
				justifyContent: "center", // Center horizontally
				alignItems: "center", // Center vertically
			}}
		>
			<AnimatePresence>
				{images.map(
					(image, index) =>
						index === currentImage && (
							<motion.div
								key={image}
								initial={animationStyle.initial}
								animate={animationStyle.animate}
								exit={animationStyle.exit}
								transition={{
									opacity: { duration: 1, ease: "easeInOut" }, // Short duration for image fade
									scale: { duration: 4, ease: "easeInOut" }, // Longer duration for zoom
									// repeatType: "reverse",
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
									filter: "blur(4px)",
									zIndex: 1,
								}}
							></motion.div>
						)
				)}
			</AnimatePresence>

			<Box
				sx={{
					position: "relative",
					zIndex: 2, // Place the text on top
					maxWidth: {
						xs: "95%",
						sm: "85%",
						md: "75%",
						lg: "65%",
					},
					textAlign: "center",
					color: "white",
					padding: 4, // Optional: add padding inside the text container
				}}
			>
				<Typography
					variant="h2"
					component="div"
					sx={{
						fontSize: {
							xs: 60,
							sm: 70,
							md: 100,
							lg: 150,
						},
						fontWeight: "500",
					}}
				>
					Schluck
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					sx={{
						fontSize: {
							xs: 15,
							sm: 20,
							md: 25,
							lg: 30,
						},
					}}
				>
					ร้านอาหารสไตล์ฟิวชั่นและขนมสไตล์ฝรั่งเศส
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					sx={{
						fontSize: {
							xs: 15,
							sm: 20,
							md: 25,
							lg: 30,
						},
					}}
				>
					ร้านได้เปิดบริการมาเข้าปีที่ 31
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					sx={{
						fontSize: {
							xs: 15,
							sm: 20,
							md: 25,
							lg: 30,
						},
					}}
				>
					โดยเจ้าของร้านได้ทำอาหารเอง
					บรรยากาศสไตล์ครอบครัวเหมือนทานอาหารอยู่ที่บ้าน
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					sx={{
						fontSize: {
							xs: 15,
							sm: 20,
							md: 25,
							lg: 30,
						},
					}}
				>
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
