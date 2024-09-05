"use client";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ModernMap: React.FC = () => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.7 });

	useEffect(() => {
		if (isInView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: {
					type: "spring",
					stiffness: 100,
					damping: 20,
					duration: 1.5,
				},
			});
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					maxWidth: "600px",
					height: "400px",
					borderRadius: "20px",
					overflow: "hidden",
					boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
				}}
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.6902201424388!2d99.51553300020454!3d14.032183456436362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e374ea3bc806f7%3A0x9ff94380fa5941f5!2z4Lir4LmJ4Lit4LiH4Lit4Liy4Lir4Liy4Lij4LiK4Lil4Li44LiE!5e0!3m2!1sth!2sth!4v1725439492658!5m2!1sth!2sth"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					loading="lazy"
				></iframe>
			</Box>
		</motion.div>
	);
};

const BookTableSection: React.FC = () => {
	return (
		<>
			<Box
				sx={{ bgcolor: "#212121", py: 5 }}
				// sx={{bgcolor: "#2a3139"}}
			>
				<Typography
					variant="h2"
					component="div"
					sx={{ textAlign: "center" , fontWeight:"500"}}
				>
					จองโต๊ะ/สั่งอาหาร
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						p: 5,
					}}
				>
					<Grid
						container
						spacing={{ xs: 4, md: 10, lg: 20 }}
						justifyContent="center"
						alignItems="center"
					>
						<Grid size={{ xs: 12, md: 6 }}>
							<Typography
								variant="h5"
								component="div"
								gutterBottom
								sx={{ textAlign: { xs: "center", md: "left" } }}
							>
								เบอร์โทร 081-355-9477
							</Typography>
							<Typography
								variant="h5"
								component="div"
								gutterBottom
								sx={{ textAlign: { xs: "center", md: "left" } }}
							>
								เวลาเปิด-ปิด 11.00-21.00น.
							</Typography>
							<Typography
								variant="h5"
								component="div"
								gutterBottom
								sx={{ textAlign: { xs: "center", md: "left" } }}
							>
								ร้านหยุด วันอังคาร
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<ModernMap />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default BookTableSection;
