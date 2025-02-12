import {ChangeEvent, FormEvent, useState} from "react";

interface Props {
  onAddCategories: (value: string) => void;
}

export const AddCategory = ({onAddCategories}: Props) => {
  const [value, setValue] = useState('');
  const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => setValue(target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const key = formData.get('search')?.toString();
    if (!key) return;
    if (key.trim().length <= 1) return;
    onAddCategories(key);
    setValue('');
  }

  return (
    <form
      className="flex flex-col md:flex-row gap-4"
      onSubmit={onSubmit}>
      <input
        className="bg-teal-50 rounded-lg border border-teal-900 text-teal-900 text-md px-4 py-2 outline-0 grow"
        onChange={onInputChange}
        value={value}
        name="search"
        type="text"
        placeholder="Buscar un gif"/>
      <button
        className="border border-teal-900 bg-teal-900 text-teal-50 rounded-lg px-4 py-2"
        type="submit">
        Add category
      </button>
    </form>
  );
};
