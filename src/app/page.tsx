import MainSection from "@/components/main/MainSection";
import RecommendMenu from "@/components/menu/RecommendMenu";
import { Typography } from "@mui/material";

const HomePage = async ({ params }: any) => {
	return (
		<>
			<MainSection />
			<RecommendMenu />
			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.6902201424388!2d99.51553300020454!3d14.032183456436362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e374ea3bc806f7%3A0x9ff94380fa5941f5!2z4Lir4LmJ4Lit4LiH4Lit4Liy4Lir4Liy4Lij4LiK4Lil4Li44LiE!5e0!3m2!1sth!2sth!4v1725439492658!5m2!1sth!2sth"
				width="600"
				height="450"
				// style="border:0;"
				// allowfullscreen=""
				loading="lazy"
				// referrerpolicy="no-referrer-when-downgrade"
			></iframe> */}
		</>
	);
};

export default HomePage;
