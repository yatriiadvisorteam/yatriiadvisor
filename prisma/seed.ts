import { Prisma, PrismaClient } from "@prisma/client"
const client = new PrismaClient();
const getGuide = (): Prisma.GuideCreateInput[] => [

    {
        First_name: "anand",
        Last_name: "kumar",
        ID_Proof: "11k",
        Mail_ID: "anandkumar@gmail.com",
        Password: "123abc",
        Address: "Tcpalya",
        City: "Bangalore",
        Phone_number: 1234567890,
        Experience: "5"
    },
    {
        First_name: "Joyce",
        Last_name: "J",
        ID_Proof: "12k",
        Mail_ID: "Joyce@gmail.com",
        Password: "123abc",
        Address: "mysuru",
        City: "mysuru",
        Phone_number: 1264567899,
        Experience: "5"
    },
    {
        First_name: "Richard",
        Last_name: "S",
        ID_Proof: "13k",
        Mail_ID: "rs0003@gmail.com",
        Password: "123abc",
        Address: "RM nagar",
        City: "Bangalore",
        Phone_number: 12345678,
        Experience: "10"
    },
    {
        First_name: "Pooja",
        Last_name: "Ramu",
        ID_Proof: "15k",
        Mail_ID: "poojaramu@gmail.com",
        Password: "123rrabc",
        Address: "TinFactory",
        City: "Bangalore",
        Phone_number: 1555245678,
        Experience: "9"
    },
];
const getTourist = (): Prisma.TouristCreateInput[] => [
    {
        First_name: "vishal",
        Last_name: "shetty",
        Phone_number: 8792304675,
        Mail_ID: "vishalshetty@gmail.com",
        Password: "legend003",
        City: "Bangalore",
        Address: "kudlu gate",
        Interest_Place: "Goa"
    },
    {
        First_name: "manu",
        Last_name: "kumar",
        Phone_number: 9792304775,
        Mail_ID: "manu@gmail.com",
        Password: "manu123",
        City: "Bangalore",
        Address: "silk board",
        Interest_Place: "kerala"
    },
    {
        First_name: "richard",
        Last_name: "S",
        Phone_number: 8794304905,
        Mail_ID: "richard@gmail.com",
        Password: "cool12#",
        City: "Bangalore",
        Address: "MG road",
        Interest_Place: "jamu and kashmir"
    },
    {
        First_name: "anand",
        Last_name: "v",
        Phone_number: 8792307582,
        Mail_ID: "anandv@gmail.com",
        Password: "devilkin56",
        City: "Bangalore",
        Address: "krpuram",
        Interest_Place: "assam"
    }
];

const getreview = (touristId: Prisma.TouristWhereUniqueInput): Prisma.ReviewCreateInput[] => [
    {
        Rating: 5,
        Review: "excellent",
        Destination: "goa",
        Tourist: {
            connect: touristId
        }
    },

    {
        Rating: 3,
        Review: "best",
        Destination: "mumbhai",
        Tourist: {
            connect: touristId
        }
    },

    {
        Rating: 4,
        Review: "good",
        Destination: "assam",
        Tourist: {
            connect: touristId
        }
    }
];

const getdestination = (): Prisma.DestinationCreateInput[] => [
    {
        Name: "bangalore",
        Best_time: "10:30 AM",
        Best_season: "winter",
        Hotels: "taj",
    },

    {
        Name: "kerala",
        Best_time: "6:00 AM",
        Best_season: "summer",
        Hotels: "MS mess",
    },

    {
        Name: "assam",
        Best_time: "6:45 AM",
        Best_season: "raniny",
        Hotels: "raja",
    }
]

const getplace = (destinationid: Prisma.DestinationWhereUniqueInput): Prisma.PlacesCreateInput[] => [
    {
        Place_Name: "lag bag",
        Image: "image.jpeg",
        Destination: {
            connect: destinationid
        }
    },

    {
        Place_Name: "tea gardens",
        Image: "image.jpeg",
        Destination: {
            connect: destinationid
        }
    },

    {
        Place_Name: "guwahati",
        Image: "image.jpeg",
        Destination: {
            connect: destinationid
        }
    }

]

const gethistory = (
    destinationid: Prisma.DestinationWhereUniqueInput,
    touristId: Prisma.TouristWhereUniqueInput):
    Prisma.historyCreateInput[] => [
        {
            Trip_status: true,
            Tourist: {
                connect: touristId
            },
            Destination: {
                connect: destinationid
            }
        },

        {
            Trip_status: false,
            Tourist: {
                connect: touristId
            },
            Destination: {
                connect: destinationid
            }
        },

        {
            Trip_status: true,
            Tourist: {
                connect: touristId
            },
            Destination: {
                connect: destinationid
            }
        }
    ]



const main = async () => {

    const Guide = await client.guide.createMany({
        data: getGuide()
    })
    const Tourist = await client.tourist.createMany({
        data: getTourist()
    })


};
main().then(() => {
    console.log("Successfully seeded")
}).catch((e) => {
    console.log(e)
})