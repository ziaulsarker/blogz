const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error("no data");
  }
};

export default async function About() {
  // const {data} = await getData();

  return <div>About {false ?? "none"}</div>;
}
