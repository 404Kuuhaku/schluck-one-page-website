import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const RecommendMenuCard = async ({ params }: any) => {
	return (
		<>
			<Box>
				<Typography>dasdasdsa</Typography>
			</Box>
		</>
	);
};

const BookTableSection = async ({ params }: any) => {
	return (
		<>
			<Typography
				variant="h2"
				component="div"
				sx={{ textAlign: "center" }}
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
					spacing={4}
					justifyContent="center"
					alignItems="center"
				>
					<Grid size={{ xs: 12, md: 6 }}>
						{/* <Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box>

							</Box>
						</Box> */}
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
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
							}}
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.6902201424388!2d99.51553300020454!3d14.032183456436362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e374ea3bc806f7%3A0x9ff94380fa5941f5!2z4Lir4LmJ4Lit4LiH4Lit4Liy4Lir4Liy4Lij4LiK4Lil4Li44LiE!5e0!3m2!1sth!2sth!4v1725439492658!5m2!1sth!2sth"
								width="500"
								height="375"
								style={{ border: 0, borderRadius: 20 }}
								loading="lazy"
							></iframe>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default BookTableSection;
