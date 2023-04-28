import {Prisma, PrismaClient} from "@prisma/client"
const client = new PrismaClient();
const getGuide =():Prisma.GuideCreateInput[]=>[

    {
        First_name: "anand",
        Last_name: "kumar",
        ID_Proof:"11k",
        Mail_ID: "anandkumar@gmail.com",
        Password:"123abc",
        Address:"Tcpalya",
        City:"Bangalore",
        Phone_number:1234567890,
        Experience:"5"
    },
    {
        First_name: "Joyce",
        Last_name: "J",
        ID_Proof:"12k",
        Mail_ID: "Joyce@gmail.com",
        Password:"123abc",
        Address:"mysuru",
        City:"mysuru",
        Phone_number:1264567899,
        Experience:"5"
    },
    {
        First_name: "Richard",
        Last_name: "S",
        ID_Proof:"13k",
        Mail_ID: "rs0003@gmail.com",
        Password:"123abc",
        Address:"RM nagar",
        City:"Bangalore",
        Phone_number:12345678,
        Experience:"10"
    },
    {
        First_name: "Pooja",
        Last_name: "Ramu",
        ID_Proof:"15k",
        Mail_ID: "poojaramu@gmail.com",
        Password:"123rrabc",
        Address:"TinFactory",
        City:"Bangalore",
        Phone_number:1555245678,
        Experience:"9"
    },
    ]
    const main = () => {
        return Promise.all(getGuide().map((GuideInput) => client.guide.create({
            data: GuideInput
        })))
    }
    main().then(() => {
        console.log("Successfully seeded")
    }).catch((e) => {
        console.log(e)
    })