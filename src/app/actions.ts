'use server'
import prisma from "../../prisma";
import {newsLetterFormValidationType} from '../../types/index'
import { connectToDb, disConnectFromDb } from "../../db/connect";
import { ZodError } from "zod";

export const newsLetterFormServerAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  let isValidatedData;

  try {
    isValidatedData = newsLetterFormValidationType.parse(data)
  }  catch (err) {
    if (err instanceof ZodError) {
      return JSON.stringify({err, data: null});
    }
  }

  try {
    await connectToDb();

    const foundSubscriber = await prisma.subscriber.findUnique({
      where: {
        email: data.email as string
      }
    });

    if(foundSubscriber) {
      throw new Error(`opps looks like ${foundSubscriber.email} is already in use`);
    }
    
    const newSubscriber =  await prisma.subscriber.create({
      data: {
        email: data.email as string,
      }
    });

    return JSON.stringify({data: {newSubscriber}, err: null})
  }
  catch(err) {
    if (err instanceof Error) {
      return JSON.stringify({err: err.message, data: null })
    }
    return JSON.stringify({ err, data: null })
  }
  finally {
    await disConnectFromDb()
  }
}
