import BookTableSection from "@/components/bookTable/BookTableSection";
import FooterSection from "@/components/footer/FooterSection";
import MainSection from "@/components/main/MainSection";
import RecommendMenu from "@/components/menu/RecommendMenu";
import ResponsiveNavbar from "@/components/navbar/Navbar";

const HomePage = async ({ params }: any) => {
	return (
		<>
			<ResponsiveNavbar />
			<MainSection />
			<RecommendMenu />
			<BookTableSection />
			<FooterSection />
		</>
	);
};

export default HomePage;
