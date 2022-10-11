export type ImageItem = {
    url: string,
    breed: string | undefined
};

export type FavoriteImages = {
    favoriteImages: ImageItem[],
    handleImage: (item: ImageItem, type: string) => void
};

export type Option = {
    value: string,
    label: string
};