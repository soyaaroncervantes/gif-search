import {mapper} from "../mapper.ts";
import {GifSearchDto} from "../mapper/giphy.dto.ts";
import {GifSearchModel} from "../mapper/giphy.model.ts";

const urlString = `https://api.giphy.com/v1/gifs/search`
const url = new URL(urlString);
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

export const fetchGifs = async (category: string) => {
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('q', category);
  url.searchParams.set('limit', '10');
  const fetchedGifs = await fetch(url);
  const data = await fetchedGifs.json();
  return mapper.map<GifSearchDto, GifSearchModel>(data, 'GifSearchDto', 'GifSearchModel');
}
