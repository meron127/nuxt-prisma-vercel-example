import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    let test = await prisma.user.findMany()
    return test
  } catch (err) {
      return err
  }
})
