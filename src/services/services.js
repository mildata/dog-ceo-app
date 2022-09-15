import { URLS } from "../models/constants";

export async function fetchAllBreeds() {
  const response = await fetch(URLS.allBreeds);
  if (!response.ok) {
    const message = `An error has occured in fetchAllBreeds service: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}

export async function fetchBreedImages(breedName) {
  const url = URLS.breedImages.replace("name", breedName);
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured in fetchBreedImage service: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}
