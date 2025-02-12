import {addProfile, createMapper} from "@automapper/core";
import {pojos} from "@automapper/pojos";
import {createGiphyMetadata, giphyMapperProfile} from "./mapper/giphy.mapper.ts";

createGiphyMetadata();

export const mapper = createMapper({
  strategyInitializer: pojos(),
})

addProfile(mapper, giphyMapperProfile);
