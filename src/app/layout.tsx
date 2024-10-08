import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

export const metadata: Metadata = {
	title: "Schluck",
	description: "Fusion Style Restaurant And French Desserts",
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{props.children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
