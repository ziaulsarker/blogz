import handleLogin from "../../serverActions/loginFormAction";

export default function LoginForm() {
  return (
    <form action={handleLogin}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
  );
}
