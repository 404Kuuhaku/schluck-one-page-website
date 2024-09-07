import { IRecommendMenu } from "../interface/interface";

export const RECOMMEND_MENU: IRecommendMenu[] = [
	{
		id: 1,
		name: "T-bone steak",
		des: "สเต็กแบบหมักและย่างเตาถ่านหอมๆ",
		img: [
			{ src: "/images/menu/valid_background/t-bone_steak_1.jpg" },
			{ src: "/images/menu/valid_background/t-bone_steak_2.jpg" },
		],
	},

	{
		id: 2,
		name: "พิซซ่าอบเตาถ่าน",
		des: "แป้งทางร้านทำเอง รวมถึงซอส ชีสนำเข้าจากต่างประเทศ",
		img: [
			{ src: "/images/menu/valid_background/charcoal_stove_pizza_1.jpg" },
			{ src: "/images/menu/valid_background/charcoal_stove_pizza_2.jpg" },
			{
				src: "/images/menu/transparent_background/charcoal_stove_pizza_1.png",
			},
			{
				src: "/images/menu/transparent_background/charcoal_stove_pizza_2.png",
			},
		],
	},
	{
		id: 3,
		name: "Filet Mignon",
		des: "สเต็กสันในนุ่มๆ เสิร์ฟกับโฮมเมดเบคอน",
		img: [{ src: "/images/menu/valid_background/filet_mignon.jpg" }],
	},
	{
		id: 4,
		name: "ผักโขมอบชีส",
		des: "",
		img: [
			{
				src: "/images/menu/valid_background/baked_spinach_with_cheese_1.jpg",
			},
			{
				src: "/images/menu/valid_background/baked_spinach_with_cheese_2.jpg",
			},
			{
				src: "/images/menu/transparent_background/baked_spinach_with_cheese_1.png",
			},
		],
	},
	{
		id: 5,
		name: "ลาซานญ่า",
		des: "",
		img: [
			{ src: "/images/menu/valid_background/lasagna.jpg" },
			{ src: "/images/menu/transparent_background/lasagna.png" },
		],
	},
	{
		id: 6,
		name: "ขนมปังกระเทียม",
		des: "ทางร้านได้นวดทำขนมปังเองและอบเองสไตล์ทางร้าน",
		img: [
			{ src: "/images/menu/valid_background/garlic_bread.jpg" },
			{ src: "/images/menu/transparent_background/garlic_bread.png" },
		],
	},
	{
		id: 7,
		name: "Pepper Steak",
		des: "สเต็กสันใน ราดซอสโฮมเมดพริกไทยสด สำหรับคนชอบแบบเผ็ดร้อน มีเสิร์ฟทั้งหมูและเนื้อ",
		img: [{ src: "/images/menu/valid_background/pepper_steak.jpg" }],
	},
];

export const SCHLUCK_LOGO = "/images/logo.png";

export const SECTION_DATA = [
	{ name: "Home", id: "main-section" },
	{ name: "เมนูแนะนำ", id: "recommend-menu-section" },
	{ name: "ของหวาน", id: "dessert-section" },
	{ name: "กาแฟ", id: "coffee-section" },
	{ name: "จองโต๊ะ/สั่งอาหาร", id: "book-table-section" },
];
