"use client";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { useCallback } from "react";

const RecommendMenuCard = async ({ params }: any) => {
	return (
		<>
			<Box>
				<Typography>dasdasdsa</Typography>
			</Box>
		</>
	);
};

const FooterSection = ({ params }: any) => {
	const videoClick = () => {
		window.open(
			"https://www.tiktok.com/@pantawan.farm",
			"_blank",
			"noopener,noreferrer"
		);
	};
	const handleFacebook = useCallback(() => {
		window.open(
			"https://www.facebook.com/SchluckRestaurant/",
			"_blank",
			"noopener,noreferrer"
		);
	}, []);
	const handleIG = useCallback(() => {
		window.open(
			"https://www.instagram.com/schluck1993/",
			"_blank",
			"noopener,noreferrer"
		);
	}, []);
	return (
		<>
			<Box>
				<Typography variant="h5" component="h5">
					ติดตามเราได้ที่
				</Typography>
				<Button startIcon={<FacebookIcon />} onClick={handleFacebook}>
					<Typography>Schluck</Typography>
				</Button>
				<Button startIcon={<InstagramIcon />} onClick={handleIG}>
					<Typography>schluck1993</Typography>
				</Button>
			</Box>
			<Box>
				<Typography variant="h5" component="h5">
					ช่องทางการติดต่อ
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Typography
						variant="h6"
						component="div"
						sx={{ display: "flex", alignItems: "center" }}
					>
						<PhoneIcon sx={{ mr: 1 }} />
						เบอร์โทร
					</Typography>
					<Typography variant="body1">0813559477</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography
						variant="h6"
						component="div"
						sx={{ display: "flex", alignItems: "center" }}
					>
						<HomeIcon sx={{ mr: 1 }} />
						ที่อยู่
					</Typography>
					<Typography variant="body1">
						222 ม.4 ถ.มหาดไทย ต.ท่ามะขาม อ.เมืองกาญจนบุรี
						จ.กาญจนบุรี
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default FooterSection;
