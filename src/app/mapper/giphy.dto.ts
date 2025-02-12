import {Nullable} from "../utils.ts";

export enum GiphyType {
  GIF = "gif",
  STICKER = "sticker",
}

export interface GifSearchDto {
  data: GifDto[];
  pagination: PaginationDto;
  meta: MetaDto;
}

export interface GifDto {
  readonly type: string;
  readonly id: string;
  readonly slug: string;
  readonly url: string;
  readonly bitly_url: string;
  readonly embed_url: string;
  readonly username: string;
  readonly source: string;
  readonly rating: string;
  readonly content_url: string;
  readonly user?: Nullable<UserDto>;
  readonly source_tld: string;
  readonly source_post_url: string;
  readonly update_datetime: string;
  readonly create_datetime: string;
  readonly import_datetime: string;
  readonly trending_datetime: string;
  readonly images: Nullable<ImageDto>;
  readonly title: string;
  readonly alt_text: string;
}

export interface MetaDto {
  readonly status: number;
  readonly msg: string;
  readonly response_id: string;
}

export interface PaginationDto {
  readonly total_count: number;
  readonly count: number;
  readonly offset: number;
}

export interface UserDto {
  readonly avatar_url: string;
  readonly banner_url: string;
  readonly profile_url: string;
  readonly username: string;
  readonly display_name: string;
}

export interface ImageFixedStillDto {
  url: string;
  width: number;
  height: number;
}

export interface ImageFixedDto extends ImageFixedStillDto {
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface ImageFixedDownsampledDto extends ImageFixedDto {
  size: string;
  webp_size: string;
}

export interface DownsizedDto extends ImageFixedStillDto{
  size: string;
}

export interface DownsizedSmallDto extends ImageFixedStillDto{
  mp4_size: string;
}

//eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DownsizedStillDto extends ImageFixedStillDto {}

//eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface OriginalImageDto extends ImageFixedStillDto {}

export interface LoopingImageDto {
  mp4: string;
}

export interface PreviewImageDto {
  mp4: string;
  mp4_size: string;
  width: number;
  height: number;
}

export interface ImageDto {
  fixed_height: ImageFixedDto,
  fixed_height_still: ImageFixedStillDto,
  fixed_height_downsampled: ImageFixedDownsampledDto,
  fixed_width: ImageFixedDto,
  fixed_width_still: ImageFixedStillDto,
  fixed_width_downsampled: ImageFixedDownsampledDto,
  fixed_height_small: ImageFixedDto,
  fixed_height_small_still: ImageFixedStillDto,
  fixed_width_small: ImageFixedDto,
  fixed_width_small_still: ImageFixedStillDto,
  downsized: DownsizedDto,
  downsized_still: DownsizedStillDto,
  downsized_large: DownsizedDto,
  downsized_medium: DownsizedDto,
  downsized_small: DownsizedSmallDto,
  original: OriginalImageDto,
  looping: LoopingImageDto,
  preview: PreviewImageDto,
  preview_gif: ImageFixedStillDto,
}
