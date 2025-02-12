import {GifModel} from "../mapper/giphy.model.ts";

export const GitGridItem = ({title, images: {original: image}}: GifModel) => {
  return (
    <article className="grid grid-cols-1 grid-rows-1 bg-gray-200 rounded-lg overflow-hidden">
      <img
        className="aspect-video rounded-lg w-full col-start-1 row-start-1"
        width={image.width}
        height={image.height}
        src={image.url}
        alt={title}/>
      <div className="col-start-1 row-start-1 self-end bg-gray-900 opacity-90 rounded-lg">
        <p className="text-sm italic p-2 text-white opacity-100">{title}</p>
      </div>
    </article>
  );
};
