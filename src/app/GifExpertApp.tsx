import {useState} from "react";
import {AddCategory} from "./components/AddCategory.tsx";
import {GitGrid} from "./components/GitGrid.tsx";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onSubmit = (value: string) => {
    const invalidKey = categories.some(x => x.toLowerCase() === value.toLowerCase());
    if (invalidKey) return;
    setCategories(x => [value, ...x]);
  };

  return (
    <main className="@container flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-light text-teal-950">Giphy Search</h1>
        <AddCategory onAddCategories={onSubmit}/>
      </div>
      {categories.map(category => <GitGrid key={category} category={category}/>)}
    </main>
  );
}

