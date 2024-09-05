"use client";
import { Box, Typography } from "@mui/material";
import { easeIn, motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IPopUpProps } from "@/libs/interface/interface";

// interface IPopUpProps {
// 	name: string;
// 	imgSrc: string;
// 	ptValues: { xs: number; md: number; lg: number };
// }

const PopUp: React.FC<IPopUpProps> = ({ name, imgSrc }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<Typography
				variant="h3"
				sx={{
					textAlign: "center",
					fontWeight: { xs: 500, md: 700 },
					// pt: ptValues,
					// pt: { xs: 0, md: 17, lg: 25 },
				}}
			>
				{name}
			</Typography>

			<Box
				sx={{
					mx: "auto",
					width: { xs: 300, sm: 400, md: 500, lg: 600 },
					height: { xs: 225, sm: 300, md: 375, lg: 450 },
				}}
			>
				<motion.div
					ref={ref}
					initial={{ scale: 0.5, opacity: 0 }}
					animate={{
						scale: isInView ? 1 : 0.5,
						opacity: isInView ? 1 : 0,
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					style={{
						width: "100%",
						height: "100%",
						backgroundImage: `url(${imgSrc})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</Box>
		</>
	);
};

export default PopUp;
