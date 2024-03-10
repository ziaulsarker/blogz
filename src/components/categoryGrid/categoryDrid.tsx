import Pill, { IPill } from "../pill/pill";

interface ICatProps {
  categories: string[];
  active?: string;
}

export default function CategoryGrid({ categories, active }: ICatProps) {
  return (
    <div className="flex flex-row px-4 md:pl-0 my-8 mt-4">
      <div className="mr-3">
        <Pill text="all" isActive={active === "all" || !active} />
      </div>
      {categories.map((text) => {
        return (
          <div key={text} className="mr-3">
            <Pill text={text} isActive={active === text} />
          </div>
        );
      })}
    </div>
  );
}
