import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const Prisma = new PrismaClient();
const main =async()=>{
    await Prisma.tourist.deleteMany()
    await Prisma.guide.deleteMany()
    for(let i=0; i<10; i++){
        await Prisma.tourist.create({
            data:{
                Mail_ID:faker.internet.email(),
                First_name:faker.internet.userName(),
                Review:{
                    create:{
                        Rating:faker.
                        

                    }
                }
            }
        })
    }
}
