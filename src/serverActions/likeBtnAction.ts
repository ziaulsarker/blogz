'use server'

import { signIn } from "auth";
import React from "react";

export const likeAction = async () => {


const user = await signIn("google")

console.log({user})

setTimeout(() => {console.log({user})}, 500)
}