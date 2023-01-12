import { notFound } from "next/navigation"
export default function Page(props) {
  console.log({props: props.params.slug})


  return <h1>SlUG</h1>;
}