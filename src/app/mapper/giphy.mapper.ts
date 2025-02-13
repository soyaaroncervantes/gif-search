import {createMap, forMember, mapFrom, MappingProfile} from "@automapper/core";
import {PojosMetadataMap} from "@automapper/pojos";
import {
  DownsizedModel,
  DownsizedSmallModel,
  DownsizedStillModel,
  GifModel,
  GifSearchModel,
  ImageFixedDownsampledModel,
  ImageFixedModel,
  ImageStillModel,
  ImageModel,
  LoopingImageModel,
  MetaModel,
  OriginalImageModel,
  PaginationModel,
  PreviewImageModel,
  UserModel
} from "./giphy.model.ts";
import {
  DownsizedDto,
  DownsizedSmallDto,
  DownsizedStillDto,
  GifDto,
  GifSearchDto,
  ImageDto,
  ImageFixedDownsampledDto,
  ImageFixedDto,
  ImageFixedStillDto,
  LoopingImageDto,
  MetaDto,
  OriginalImageDto,
  PaginationDto,
  PreviewImageDto,
  UserDto
} from "./giphy.dto.ts";

function createImageMetadata() {
  /// region Image Models
  PojosMetadataMap.create<ImageFixedStillDto>('ImageFixedStillDto', {
    url: String,
    width: Number,
    height: Number,
  });
  PojosMetadataMap.create<ImageFixedDto>('ImageFixedDto', {
    url: String,
    width: Number,
    height: Number,
    size: String,
    mp4: String,
    mp4_size: String,
    webp: String,
    webp_size: String,
  });
  PojosMetadataMap.create<ImageFixedDownsampledDto>('ImageFixedDownsampledDto', {
    url: String,
    width: Number,
    height: Number,
    size: String,
    webp_size: String,
  });
  PojosMetadataMap.create<DownsizedDto>('DownsizedDto', {
    url: String,
    width: Number,
    height: Number,
    size: String,
  });
  PojosMetadataMap.create<DownsizedSmallDto>('DownsizedSmallDto', {
    url: String,
    width: String,
    height: String,
    mp4_size: String,
  });
  PojosMetadataMap.create<DownsizedStillDto>('DownsizedStillDto', {
    url: String,
    width: String,
    height: String
  });
  PojosMetadataMap.create<OriginalImageDto>('OriginalImageDto', {
    url: String,
    width: String,
    height: String,
    size: String,
    frames: String,
    mp4: String,
    mp4_size: String,
    webp: String,
    webp_size: String,
  });
  PojosMetadataMap.create<LoopingImageDto>('LoopingImageDto', {
    mp4: String,
  });
  PojosMetadataMap.create<PreviewImageDto>('PreviewImageDto', {
    mp4: String,
    mp4_size: String,
    width: String,
    height: String
  });
  PojosMetadataMap.create<ImageDto>('ImageDto', {
    fixed_height: 'ImageFixedDto',
    fixed_height_still: 'ImageFixedStillDto',
    fixed_height_downsampled: 'ImageFixedDownsampledDto',
    fixed_width: 'ImageFixedDto',
    fixed_width_still: 'ImageFixedStillDto',
    fixed_width_downsampled: 'ImageFixedDownsampledDto',
    fixed_height_small: 'ImageFixedDto',
    fixed_height_small_still: 'ImageFixedStillDto',
    fixed_width_small: 'ImageFixedDto',
    fixed_width_small_still: 'ImageFixedStillDto',
    downsized: 'DownsizedDto',
    downsized_still: 'DownsizedStillDto',
    downsized_large: 'DownsizedDto',
    downsized_medium: 'DownsizedDto',
    downsized_small: 'DownsizedSmallDto',
    original: 'OriginalImageDto',
    looping: 'LoopingImageDto',
    preview: 'PreviewImageDto',
    preview_gif: 'ImageFixedStillDto',
  });
  /// endregion
  /// region Image Models
  PojosMetadataMap.create<ImageStillModel>('ImageFixedStillModel', {
    url: String,
    width: Number,
    height: Number,
  });
  PojosMetadataMap.create<ImageFixedModel>('ImageFixedModel', {
    url: String,
    width: Number,
    height: Number,
    size: String,
    mp4: String,
    mp4_size: String,
    webp: String,
    webp_size: String,
  });
  PojosMetadataMap.create<ImageFixedDownsampledModel>('ImageFixedDownsampledModel', {
    url: String,
    width: Number,
    height: Number,
    size: String,
    webp_size: String,
  });
  PojosMetadataMap.create<DownsizedModel>('DownsizedModel', {
    url: String,
    width: Number,
    height: Number,
    size: String,
  });
  PojosMetadataMap.create<DownsizedSmallModel>('DownsizedSmallModel', {
    url: String,
    width: String,
    height: String,
    mp4_size: String,
  });
  PojosMetadataMap.create<DownsizedStillModel>('DownsizedStillModel', {
    url: String,
    width: String,
    height: String
  });
  PojosMetadataMap.create<OriginalImageModel>('OriginalImageModel', {
    url: String,
    width: String,
    height: String,
    size: String,
    frames: String,
    mp4: String,
    mp4_size: String,
    webp: String,
    webp_size: String,
  });
  PojosMetadataMap.create<LoopingImageModel>('LoopingImageModel', {
    mp4: String,
  });
  PojosMetadataMap.create<PreviewImageModel>('PreviewImageModel', {
    mp4: String,
    mp4_size: String,
    width: String,
    height: String
  });
  PojosMetadataMap.create<ImageModel>('ImageModel', {
    fixed_height: 'ImageFixedModel',
    fixed_height_still: 'ImageFixedStillModel',
    fixed_height_downsampled: 'ImageFixedDownsampledModel',
    fixed_width: 'ImageFixedModel',
    fixed_width_still: 'ImageFixedStillModel',
    fixed_width_downsampled: 'ImageFixedDownsampledModel',
    fixed_height_small: 'ImageFixedModel',
    fixed_height_small_still: 'ImageFixedStillModel',
    fixed_width_small: 'ImageFixedModel',
    fixed_width_small_still: 'ImageFixedStillModel',
    downsized: 'DownsizedModel',
    downsized_still: 'DownsizedStillModel',
    downsized_large: 'DownsizedModel',
    downsized_medium: 'DownsizedModel',
    downsized_small: 'DownsizedSmallModel',
    original: 'OriginalImageModel',
    looping: 'LoopingImageModel',
    preview: 'PreviewImageModel',
    preview_gif: 'ImageFixedStillModel',
  });
  /// endregion
}

function createUserMetadata() {
  PojosMetadataMap.create<UserDto>('UserDto', {
    avatar_url: String,
    banner_url: String,
    profile_url: String,
    username: String,
    display_name: String,
  });
  PojosMetadataMap.create<UserModel>('UserModel', {
    avatar_url: String,
    banner_url: String,
    profile_url: String,
    username: String,
    display_name: String,
  });
}

function createGifMetadata() {
  /// region Gif Dto
  PojosMetadataMap.create<GifDto>('GifDto', {
    type: String,
    id: String,
    slug: String,
    url: String,
    bitly_url: String,
    embed_url: String,
    username: String,
    source: String,
    rating: String,
    content_url: String,
    user: 'UserDto',
    source_tld: String,
    source_post_url: String,
    update_datetime: String,
    create_datetime: String,
    import_datetime: String,
    trending_datetime: String,
    images: 'ImageDto',
    title: String,
    alt_text: String,
  })
  PojosMetadataMap.create<MetaDto>('MetaDto', {
    msg: String,
    status: Number,
    response_id: String,
  });
  PojosMetadataMap.create<PaginationDto>('PaginationDto', {
    count: Number,
    offset: Number,
    total_count: Number,
  });
  PojosMetadataMap.create<GifSearchDto>('GifSearchDto', {
    data: ['GifDto'],
    meta: 'MetaDto',
    pagination: 'PaginationDto',
  });
  /// endregion
  /// region Gif Models
  PojosMetadataMap.create<GifModel>('GifModel', {
    type: String,
    id: String,
    slug: String,
    url: String,
    bitly_url: String,
    embed_url: String,
    username: String,
    source: String,
    rating: String,
    content_url: String,
    user: 'UserModel',
    source_tld: String,
    source_post_url: String,
    update_datetime: String,
    create_datetime: String,
    import_datetime: String,
    trending_datetime: String,
    images: 'ImageModel',
    title: String,
    alt_text: String,
  })
  PojosMetadataMap.create<MetaModel>('MetaModel', {
    msg: String,
    status: Number,
    response_id: String,
  });
  PojosMetadataMap.create<PaginationModel>('PaginationModel', {
    count: Number,
    offset: Number,
    total_count: Number,
  });
  PojosMetadataMap.create<GifSearchModel>('GifSearchModel', {
    data: ['GifModel'],
    meta: 'MetaModel',
    pagination: 'PaginationModel',
  });
  /// endregion
}

export function createGiphyMetadata() {
  createImageMetadata();
  createUserMetadata();
  createGifMetadata();
}

export const giphyMapperProfile: MappingProfile = (mapper) => {
  createMap<ImageFixedStillDto, ImageStillModel>(mapper, 'ImageFixedStillDto', 'ImageFixedStillModel');
  createMap<ImageFixedDto, ImageFixedModel>(mapper, 'ImageFixedDto', 'ImageFixedModel');
  createMap<ImageFixedDownsampledDto, ImageFixedDownsampledModel>(mapper, 'ImageFixedDownsampledDto', 'ImageFixedDownsampledModel');
  createMap<DownsizedDto, DownsizedModel>(mapper, 'DownsizedDto', 'DownsizedModel');
  createMap<DownsizedSmallDto, DownsizedSmallModel>(mapper, 'DownsizedSmallDto', 'DownsizedSmallModel');
  createMap<DownsizedStillDto, DownsizedStillModel>(mapper, 'DownsizedStillDto', 'DownsizedStillModel');
  createMap<OriginalImageDto, OriginalImageModel>(mapper, 'OriginalImageDto', 'OriginalImageModel');
  createMap<LoopingImageDto, LoopingImageModel>(mapper, 'LoopingImageDto', 'LoopingImageModel');
  createMap<PreviewImageDto, PreviewImageModel>(mapper, 'PreviewImageDto', 'PreviewImageModel');
  createMap<ImageDto, ImageModel>(mapper, 'ImageDto', 'ImageModel');
  createMap<UserDto, UserModel>(mapper, 'UserDto', 'UserModel');
  createMap<GifDto, GifModel>(mapper, 'GifDto', 'GifModel');
  createMap<MetaDto, MetaModel>(mapper, 'MetaDto', 'MetaModel');
  createMap<PaginationDto, PaginationModel>(mapper, 'PaginationDto', 'PaginationModel');
  createMap<GifDto, GifModel>(mapper, 'GifDto', 'GifModel');
  createMap<MetaDto, MetaModel>(mapper, 'MetaDto', 'MetaModel');
  createMap<PaginationDto, PaginationModel>(mapper, 'PaginationDto', 'PaginationModel');
  createMap<GifSearchDto, GifSearchModel>(
    mapper,
    'GifSearchDto',
    'GifSearchModel',
    forMember(x => x.data, mapFrom(x => mapper.mapArray(x.data,'GifDto','GifModel')))
  );

}
