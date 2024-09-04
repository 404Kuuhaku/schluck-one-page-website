// import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import { RECOMMEND_MENU } from "@/libs/constants/constats";

// const RecommendMenuWrapper = async ({ children }: { children: React.ReactNode }) => {
// 	return (
// 		<>
// 			<Box sx={{ display: "block", py: 5 }}>
// 				<Box
// 					sx={{
// 						display: "flex",
// 						justifyContent: "center",
// 						alignItems: "center",
// 						padding: {
// 							xs: "2% 2%",
// 							sm: "2% 5%",
// 							md: "2% 10%",
// 							lg: "2% 20%",
// 						},
// 						maxWidth: 500,
// 						margin: "0 auto",
// 					}}
// 				>
// 					{children}
// 				</Box>
// 			</Box>
// 		</>
// 	);
// };

const RecommendMenuCard = async ({ params }: any) => {
	return (
		<>
			<Card sx={{ maxWidth: 500 }}>
				<CardMedia
					component="img"
					height={300}
					image={RECOMMEND_MENU[0].img}
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="h4">
						{RECOMMEND_MENU[0].name}
					</Typography>
					<Typography
						variant="body2"
						// sx={{ color: "text.secondary" }}
					>
						{RECOMMEND_MENU[0].des}
					</Typography>
				</CardContent>
				{/* <CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions> */}
			</Card>
		</>
	);
};

const RecommendMenu = async ({ params }: any) => {
	return (
		<>
			<RecommendMenuCard />
			<Typography>
				นอกจากอาหารและขนมแล้ว
				ทางร้านยังมีผลิตภัณฑ์กาแฟสินค้าจากจังหวัดกาญจนบุรี
				กาแฟสาละวะไล่โว่ (กาแฟออร์แกนิค) ภายใต้โครงการมูลนิธิภูมิบดินทร์
				เพื่อส่งเสริมและพัฒนาชุมชนในเขตรักษาพันธุ์สัตว์ป่าทุ่งใหญ่
				ซึ่งจำหน่ายที่ร้าน Schluck ที่เดียวในกาญจนบุรี
			</Typography>
		</>
	);
};

export default RecommendMenu;
