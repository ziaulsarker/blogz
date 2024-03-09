import Pill, { IPill } from "../pill/pill";

interface ICatProps {
  categories: IPill[];
}

export default function CategoryGrid({ categories }: ICatProps) {
  return (
    <div className="flex flex-row px-4 md:pl-0 my-8 mt-4">
      {categories.map((text) => (
        <div key={text} className="mr-3">
          <Pill text={text} />
        </div>
      ))}
    </div>
  );
}
