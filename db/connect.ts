import prisma from '../prisma';

export const connectToDb = async () => {
  try {
    await prisma.$connect()
  } catch (err) { 
    throw new Error('could not connect to db');
  }
}

export const disConnectFromDb = async () => {
  try {
    await prisma.$disconnect()
  } catch (err) { 
    throw new Error('could not disconnect from db');
  }
}