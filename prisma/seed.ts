import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();
async function main() {
    const Tourist = await Prisma.tourist.create({
        data: {
            First_name: "Tejas",
            Last_name: "J",
            Phone_number: 886744567,
            Mail_ID: "Tejas@gmail.com",
            Password: "Tejas123",
            City: "bengaluru",
            Address: "Hoskota",
            Interest_Place: "Mumbai"
        }
        
    });
    const Guide = await Prisma.guide.create({
        data: {
            First_name: "raj",
            Last_name: "kumar",
            ID_Proof: "13k",
            Mail_ID: "RK133mail.com",
            Password: "13Raj",
            Address: "Trinity",
            City: "Banglore",
            Phone_number: 9916881230,
            Experience: "10 years"
        },
    });
    const Destination = await Prisma.destination.create({
        data: {
            Name: "bangalore",
            Best_time: "10:30 AM",
            Best_season: "winter",
            Hotels: "taj",
        },
    });
    const Places = await Prisma.places.create({
        data: {
            Place_Name: "lag bag",
            Image: "image.jpeg",
            Destination_Id: Destination.ID
        },
    });
    const Review = await Prisma.review.create({
        data: {
            Date:new Date(),
            Rating: 5,
            Review: "excellent",
            Destination: "goa",
            T_ID: Tourist.id
        },
    });
 
    const Weather = await Prisma.weather.create({
        data: {     
            date:new Date(), 
            Temperature:"25 degree C",
            Humidity:20,
            Day:"thurday",
            Place_Id:Places.ID
        },
    });
    const  Favorites = await Prisma.favorites.create({
        data: {
            T_ID:Tourist.id,
            D_ID:Destination.ID    
        },
    });   
    const History = await Prisma.history.create({
        data: {
            T_ID:Tourist.id,
            Review_ID:Review.ID
            
         
        },
    }); 

console.log("=>==>==>==>==> Data sent ==>==>");
}
main()
.catch((e)=>console.error(e))
.finally(async()=>{
    await Prisma.$disconnect();
});