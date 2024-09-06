import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IGalleryItem, IGalleryProps } from "@/libs/interface/interface";

const Gallery: React.FC<IGalleryProps> = ({ itemData }) => {
	return (
		<Box
			sx={{
				width: 500,
				height: 450,
				overflow: "scroll",
				"::-webkit-scrollbar": {
					display: "none",
				},
				msOverflowStyle: "none" /* IE and Edge */,
				scrollbarWidth: "none" /* Firefox */,
			}}
		>
			<ImageList variant="masonry" cols={2} gap={8}>
				{itemData.map((item: IGalleryItem, index: number) => (
					<ImageListItem key={index}>
						<img
							srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.imgSrc}?w=248&fit=crop&auto=format`}
							alt={item.name}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
