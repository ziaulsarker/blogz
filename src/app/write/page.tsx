import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
  const c = cookies();
  console.log({ c });

  return <div>This is the write page {c.get("user") ?? "testing"} </div>;
}
