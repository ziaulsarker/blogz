'use server'

import { auth, signIn } from "auth";


export const likeAction = async () => {
  const session = await auth();
  if (session && session.user) return session.user;
  const user = await signIn("google")
  return user;

}