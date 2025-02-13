import {Nullable} from "../utils.ts";

export enum GiphyType {
  GIF = "gif",
  STICKER = "sticker",
}

export interface GifSearchModel {
  data: GifModel[];
  pagination: PaginationModel;
  meta: MetaModel;
}

export interface GifModel {
  readonly type: GiphyType;
  readonly id: string;
  readonly slug: string;
  readonly url: string;
  readonly bitly_url: string;
  readonly embed_url: string;
  readonly username: string;
  readonly source: string;
  readonly rating: string;
  readonly content_url: string;
  readonly user?: Nullable<UserModel>;
  readonly source_tld: string;
  readonly source_post_url: string;
  readonly update_datetime: string;
  readonly create_datetime: string;
  readonly import_datetime: string;
  readonly trending_datetime: string;
  readonly images: ImageModel;
  readonly title: string;
  readonly alt_text: string;
}

export interface MetaModel {
  readonly status: number;
  readonly msg: string;
  readonly response_id: string;
}

export interface PaginationModel {
  readonly total_count: number;
  readonly count: number;
  readonly offset: number;
}

export interface UserModel {
  readonly avatar_url: string;
  readonly banner_url: string;
  readonly profile_url: string;
  readonly username: string;
  readonly display_name: string;
}

export interface ImageStillModel {
  url: string;
  width: number;
  height: number;
}
export interface OriginalStillModel {
  url: string;
  width: number;
  height: number;
}

export interface ImageFixedModel extends ImageStillModel {
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}
export interface ImageFixedDownsampledModel extends ImageFixedModel {
  size: string;
  webp_size: string;
}
export interface DownsizedModel extends ImageStillModel {
  size: string;
}
export interface DownsizedSmallModel extends ImageStillModel {
  mp4_size: string;
}
//eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DownsizedStillModel extends ImageStillModel {}
export interface OriginalImageModel {
  width: number;
  height: number;
  size: string;
  frames: string;
  url: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}
export interface LoopingImageModel {
  mp4: string;
}
export interface PreviewImageModel {
  mp4: string;
  mp4_size: string;
  width: number;
  height: number;
}
export interface ImageModel {
  fixed_height: ImageFixedModel,
  fixed_height_still: ImageStillModel,
  fixed_height_downsampled: ImageFixedDownsampledModel,
  fixed_width: ImageFixedModel,
  fixed_width_still: ImageStillModel,
  fixed_width_downsampled: ImageFixedDownsampledModel,
  fixed_height_small: ImageFixedModel,
  fixed_height_small_still: ImageStillModel,
  fixed_width_small: ImageFixedModel,
  fixed_width_small_still: ImageStillModel,
  downsized: DownsizedModel,
  downsized_still: DownsizedStillModel,
  downsized_large: DownsizedModel,
  downsized_medium: DownsizedModel,
  downsized_small: DownsizedSmallModel,
  original: OriginalImageModel,
  original_still: OriginalStillModel,
  looping: LoopingImageModel,
  preview: PreviewImageModel,
  preview_gif: ImageStillModel,
}
