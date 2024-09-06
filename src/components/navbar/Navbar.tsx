"use client";
import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";
import { SCHLUCK_LOGO, SECTION_DATA } from "@/libs/constants/constats";
// const pages = ["Home", "เมนูแนะนำ", "ของหวาน", "กาแฟ", "จองโต๊ะ/สั่งอาหาร"];

const MainLogo: React.FC = () => {
	return (
		<>
			<Box
				sx={{
					display: { xs: "none", md: "flex" },
					mr: 1,
					width: { xs: 70, md: 100 },
					height: { xs: 70, md: 100 },
					position: "relative",
				}}
			>
				<Image
					alt="SCHLUCK_LOGO"
					src={SCHLUCK_LOGO}
					// width={100}
					// height={100}
					layout="fill"
					objectFit="cover"
				/>
			</Box>
			<Typography
				variant="h4"
				noWrap
				component="a"
				href="#app-bar-with-responsive-menu"
				sx={{
					mr: 2,
					display: { xs: "none", md: "flex" },
					fontWeight: 700,
					color: "inherit",
					textDecoration: "none",
				}}
			>
				Schluck
			</Typography>
		</>
	);
};

const MenuButtonMDScreen: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const scrollToSection = useCallback((id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const handleClick = useCallback(
		(id: string) => () => {
			scrollToSection(id);
			setAnchorElNav(null);
		}, // Creates a stable reference
		[scrollToSection]
	);
	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					display: { xs: "flex", md: "none" },
				}}
			>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{ display: { xs: "block", md: "none" } }}
				>
					{SECTION_DATA.map((section) => (
						<MenuItem
							key={section.id}
							// onClick={handleCloseNavMenu}
							onClick={handleClick(section.id)}
						>
							<Typography sx={{ textAlign: "center" }}>
								{section.name}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</>
	);
};

const LogoMDScreen: React.FC = () => {
	return (
		<>
			<Box
				sx={{
					display: { xs: "flex", md: "none" },
					mr: 1,
					ml: { xs: -6, md: -9 },
				}}
			>
				<Image
					alt="SCHLUCK_LOGO"
					src={SCHLUCK_LOGO}
					width={70}
					height={70}
				/>
			</Box>
			<Typography
				variant="h5"
				noWrap
				component="a"
				href="#app-bar-with-responsive-menu"
				sx={{
					mr: 2,
					display: { xs: "flex", md: "none" },
					flexGrow: 1,
					fontWeight: 700,
					color: "inherit",
					textDecoration: "none",
				}}
			>
				Schluck
			</Typography>
		</>
	);
};

const PageLGScreen: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const scrollToSection = useCallback((id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const handleClick = useCallback(
		(id: string) => () => scrollToSection(id), // Creates a stable reference
		[scrollToSection]
	);
	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					display: { xs: "none", md: "flex" },
					justifyContent: "end",
				}}
			>
				{SECTION_DATA.map((section) => (
					<Button
						key={section.id}
						// onClick={handleCloseNavMenu}
						onClick={handleClick(section.id)}
						size="large"
						sx={{
							my: 2,
							color: "white",
							display: "block",
							mx: { md: 1, lg: 2 },
							fontSize: { md: 17, lg: 20 },
						}}
					>
						{section.name}
					</Button>
				))}
			</Box>
		</>
	);
};

const ResponsiveAppBar: React.FC = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MainLogo />
					<MenuButtonMDScreen />
					<LogoMDScreen />
					<PageLGScreen />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default ResponsiveAppBar;
