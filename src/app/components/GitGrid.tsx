import {GitGridItem} from "./GitGridItem.tsx";
import {useFetchGifs} from "./useFetchGifs.ts";

interface GitGridProps {
  category: string;
}

export const GitGrid = ({category}: GitGridProps) => {
  const {gifs, isLoading} = useFetchGifs(category);
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">{category}</h3>
      {isLoading && <p className="text-sm italic text-gray-500">Loading...</p>}
      {!isLoading &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {gifs.map((gif) =>
            <GitGridItem key={gif.id} {...gif} />)
          }
        </div>
      }
    </section>
  );
};
