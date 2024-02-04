export default async function SignupForm() {
  return (
    <>
      <form>
        <input type="text" name="userName" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="signup" />
      </form>
    </>
  );
}
