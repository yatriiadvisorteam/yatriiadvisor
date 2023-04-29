import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();
async function main() {
    const Tourist = await Prisma.tourist.create({
        data: {
            First_name: "Anand",
            Last_name: "Kumar",
            Phone_number: 8867121853,
            Mail_ID: "anand@hmail.com",
            Password: "anand123",
            City: "bengaluru",
            Address: "Tcpalya",
            Interest_Place: "Ladhak"
        },
    });
    const Guide = await Prisma.guide.create({
        data: {
            First_name: "Vishal",
            Last_name: "Shetty",
            ID_Proof: "11k",
            Mail_ID: "VS123@gmail.com",
            Password: "123abc",
            Address: "Silkinstution",
            City: "Banglore",
            Phone_number: 9916757403,
            Experience: "10"
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
            Rating: 5,
            Review: "excellent",
            Destination: "goa",
            T_ID: Tourist.id
        },
    });
 
    const Weather = await Prisma.weather.create({
        data: {      
            Temperature:"25 degree C",
            Humidity:20,
            Date:new Date(),
            Day:"thurday",
            Place_name:Places.ID
        },
    });
    const  Favorites = await Prisma.favorites.create({
        data: {
            T_ID:Tourist.id,
            D_ID:Destination.ID    
        },
    });   

console.log("Data sent====>");
}
main()
.catch((e)=>console.error(e))
.finally(async()=>{
    await Prisma.$disconnect();
});