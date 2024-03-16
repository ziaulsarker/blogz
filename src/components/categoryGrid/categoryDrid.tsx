import Pill from "../pill/pill";

interface ICatProps {
  categories: string[];
  active?: string;
}

export default function CategoryGrid({ categories = [], active }: ICatProps) {
  return (
    categories.length > 0 && (
      <div
        className="flex flex-row flex-wrap px-4 pl-0 my-8 mt-4"
        style={{
          columnGap: "1rem",
          rowGap: "1rem",
        }}
      >
        <div>
          <Pill
            text="all"
            isActive={active === "all" || !active}
            href={{
              pathname: "/",
              query: { category: "all" },
            }}
          />
        </div>

        {categories.map((text) => {
          return (
            <div key={text}>
              <Pill
                text={text}
                isActive={active === text}
                href={{
                  pathname: "/",
                  query: { category: text },
                }}
              />
            </div>
          );
        })}
      </div>
    )
  );
}
