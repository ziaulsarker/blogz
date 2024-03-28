'use server'
import prisma from "../../prisma";
import {newsLetterFormValidationType} from '../../types/index'
import { connectToDb, disConnectFromDb } from "../../db/connect";
import { ZodError } from "zod";

export const NewsLetterFormServerAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  let isValidatedData;

  try {
    isValidatedData = newsLetterFormValidationType.parse(data)
  }  catch (err) {
    if (err instanceof ZodError) {
      return JSON.stringify(err);
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

    return JSON.stringify(newSubscriber)
  }
  catch(err) {
    console.log({err})
    if (err instanceof Error) {
      return JSON.stringify({err: err.message })
    }
    return JSON.stringify({ err })
  }
  finally {
    await disConnectFromDb()
  }
}
