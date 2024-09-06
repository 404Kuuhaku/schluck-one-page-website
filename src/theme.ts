// /src/theme.ts

"use client";
import { Noto_Sans_Thai, Mali, Anuphan } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red, teal, lightBlue, brown, grey } from "@mui/material/colors";

// const noto_sans_thai = Noto_Sans_Thai({
// 	weight: ["100", "300", "400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// });

// const mali = Mali({
// 	weight: ["200", "300", "400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// });

const anuphan = Anuphan({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: brown[300],
			main: brown["A700"],
			dark: brown[900],
		},

		secondary: {
			light: grey[900],
			main: grey[500],
			dark: grey[200],
		},
	},
	typography: {
		fontFamily: anuphan.style.fontFamily,
	},
	// components: {
	// 	MuiAlert: {
	// 		styleOverrides: {
	// 			root: ({ ownerState }) => ({
	// 				...(ownerState.severity === "info" && {
	// 					backgroundColor: "#004d40",
	// 				}),
	// 			}),
	// 		},
	// 	},
	// },
});
export default theme;
