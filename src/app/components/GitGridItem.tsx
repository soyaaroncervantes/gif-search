import {GifModel} from "../mapper/giphy.model.ts";

export const GitGridItem = ({title, images: {original: image}}: GifModel) => {
  return (
    <article className="grid grid-cols-1 grid-rows-1 bg-gray-200 rounded-lg overflow-hidden">
      <video
        className="aspect-video rounded-lg w-full col-start-1 row-start-1 h-auto bg-teal-700"
        width={image.width}
        height={image.height}
        controls={false}
        muted={true}
        autoPlay={true}
        title={title}
        loop={true}>
        <source src={image.webp} type="video/webp" />
        <source src={image.mp4} type="video/mp4"/>
      </video>
      <div className="col-start-1 row-start-1 self-end bg-teal-950 opacity-90 rounded-lg">
        <p className="text-sm italic p-2 text-teal-50 opacity-100">{title}</p>
      </div>
    </article>
  );
};
