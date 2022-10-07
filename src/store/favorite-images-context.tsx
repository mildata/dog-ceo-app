import { createContext } from "react";
import { FavoriteImages } from "../models/types";

const FavoriteImagesContext = createContext<FavoriteImages | null>(null) ;
export default FavoriteImagesContext;