'use server'
import {newsLetterFormValidationType} from '../../types/index'
import { ZodError } from "zod";

export const NewsLetterFormServerAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  let isValidated;

  try {
    isValidated = newsLetterFormValidationType.parse(data)
  }  catch (err) {
    if (err instanceof ZodError) {
      return JSON.stringify(err);
    }
  }

  console.log({isValidated})

  return {isValidated, data};

}


