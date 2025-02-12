import {useEffect, useState} from "react";
import {GifModel} from "../mapper/giphy.model.ts";
import { fetchGifs } from "./GiphyService.ts";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<GifModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async (category: string) => {
    const response = await fetchGifs(category);
    setGifs(response.data);
    setIsLoading(false);
  }
  useEffect(() => {
    getGifs(category);
  }, []);

  return { gifs, isLoading };
}
