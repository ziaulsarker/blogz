import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LoginForm from "src/components/loginForm/LoginForm";

export default async function Page() {
  return (
    <>
      <h1>Login in bitch</h1>
      <LoginForm />
    </>
  );
}
