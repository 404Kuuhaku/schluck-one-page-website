export interface IRecommendMenu {
	id: number;
	name: string;
	des: string;
	img: IImageRecommendMenu[];
}

export interface IImageRecommendMenu {
	src: string;
}

export interface IPopUpProps {
	name: string;
	imgSrc: string;
	// ptValues: { xs: number; md: number; lg: number };
}

export interface IGalleryItem {
	name: string;
	imgSrc: string;
}

export interface IGalleryProps {
	itemData: IGalleryItem[];
}

export interface SocialButtonProps {
	icon: React.ReactNode;
	label: string;
	url: string;
}
