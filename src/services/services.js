import { URLS } from "../models/constants";

export async function fetchAllBreeds() {
  try {
    const response = await fetch(URLS.allBreeds);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`An error has occured in fetchAllBreeds service: ${error}`);
  }
}

export async function fetchBreedImages(breedName) {
  const url = URLS.breedImages.replace("name", breedName);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`An error has occured in fetchBreedImages service: ${error}`);
  }
}
