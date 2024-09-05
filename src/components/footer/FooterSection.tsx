"use client";
import { PropsWithChildren, useMemo } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import SocialButton from "@/components/button/socialButton/SocialButton";

const ContentWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					display: { xs: "flex", md: "block" },
					justifyContent: { xs: "center", md: "start" },
				}}
			>
				{children}
			</Box>
		</>
	);
};

const ContactWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<>
			<Box sx={{ mt: 2, display: "flex" }}>{children}</Box>
		</>
	);
};

const FooterSection: React.FC = () => {
	const footerTitle = useMemo(() => {
		return { textAlign: { xs: "center", md: "left" } };
	}, []);

	const socialData = useMemo(
		() => [
			{
				icon: <FacebookIcon />,
				label: "Schluck",
				url: "https://www.facebook.com/SchluckRestaurant/",
			},
			{
				icon: <InstagramIcon />,
				label: "schluck1993",
				url: "https://www.instagram.com/schluck1993/",
			},
		],
		[]
	);

	return (
		<>
			<Box sx={{py:5}}>
				<Grid
					container
					spacing={{ xs: 4 }}
					justifyContent="center"
					alignItems="center"
				>
					<Grid size={{ xs: 12, md: 4 }}>
						<Box
							sx={{
								backgroundImage: "url('/images/logo.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								width: 100,
								height: 100,
								mx: "auto",
							}}
						></Box>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Typography
							variant="h4"
							component="h4"
							sx={footerTitle}
						>
							ติดตามเราได้ที่
						</Typography>

						{socialData.map((social, index) => (
							<ContentWrapper key={index}>
								<SocialButton
									icon={social.icon}
									label={social.label}
									url={social.url}
								/>
							</ContentWrapper>
						))}
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Typography
							variant="h4"
							component="h4"
							sx={footerTitle}
						>
							ช่องทางการติดต่อ
						</Typography>
						<ContentWrapper>
							<ContactWrapper>
								<PhoneEnabledIcon sx={{ mr: 1 }} />
								<Typography variant="body1">
									0813559477
								</Typography>
							</ContactWrapper>
						</ContentWrapper>
						<ContentWrapper>
							<ContactWrapper>
								<LocationOnIcon
									sx={{ mr: 1, mt: { xs: 1.5, md: 0 } }}
								/>
								<Typography
									variant="body1"
									sx={{
										display: { xs: "none", md: "block" },
									}}
								>
									222 ม.4 ถ.มหาดไทย ต.ท่ามะขาม
									อ.เมืองกาญจนบุรี จ.กาญจนบุรี
								</Typography>
								<Box
									sx={{
										display: { xs: "block", md: "none" },
									}}
								>
									<Typography variant="body1">
										222 ม.4 ถ.มหาดไทย ต.ท่ามะขาม
									</Typography>
									<Typography variant="body1">
										อ.เมืองกาญจนบุรี จ.กาญจนบุรี
									</Typography>
								</Box>
							</ContactWrapper>
						</ContentWrapper>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default FooterSection;
