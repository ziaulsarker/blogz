interface IPill {
  text?: string | React.ReactNode;
}

export default function Pill({ text = "ZS" }: IPill) {
  return (
    <div className="tag px-2 py-1 inline-flex rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">
      {text}
    </div>
  );
}
