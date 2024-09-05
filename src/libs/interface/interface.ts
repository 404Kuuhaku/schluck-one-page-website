export interface IRecommendMenu {
    id: number;
    name: string;
    des: string;
    img: IImageRecommendMenu[];
}

export interface IImageRecommendMenu {
    src : string
}