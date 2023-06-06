import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

//intializing the client
const Prisma = new PrismaClient();

async function main() {
  await Prisma.favourites.deleteMany();
  await Prisma.histories.deleteMany();
  await Prisma.reviews.deleteMany();
  await Prisma.places.deleteMany();
  await Prisma.destinations.deleteMany();
  await Prisma.guides.deleteMany();
  await Prisma.tourists.deleteMany();

  //create many records in tourist
  for (let i = 0; i < 6; i++) {
    await Prisma.tourists.create({
      data: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        interest_Place: faker.address.cityName(),
        mail: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.number("+91 ##### #####"),
      },
    });
  }

  //create many records in guides
  for (let i = 0; i < 6; i++) {
    await Prisma.guides.create({
      data: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        mail: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.number("+91 ##### #####"),
        experience: faker.random.numeric() + " year",
        id_proof: faker.random.alphaNumeric(10),
      },
    });
  }

  const guides = await Prisma.guides.findMany();

  await Promise.all(
    guides.map(async (guide: { id: any; }) => {
      await Prisma.destinations.createMany({
        data: [
          {
            guidesId: guide.id,
            name: faker.address.cityName(),
          },
          {
            guidesId: guide.id,
            name: faker.address.cityName(),
          },
          {
            guidesId: guide.id,
            name: faker.address.cityName(),
          },
        ],
      });
    })
  );

  const destinations = await Prisma.destinations.findMany();

  await Promise.all(
    destinations.map(async (destination: { id: any; guidesId: any; }) => {
      const seasons = ["Summer", "Winter", "Mansoon", "Spring", "Autumn"];
      const randomIndex = Math.floor(Math.random() * seasons.length);

      await Prisma.places.createMany({
        data: [
          {
            name: faker.address.city(),
            best_season: seasons[randomIndex],
            temperature: parseInt(faker.random.numeric(2)),
            best_time: faker.date.weekday(),
            humidity: parseInt(faker.random.numeric(2)),
            destinationId: destination.id,
            guidesId: destination.guidesId,
            image_url: [faker.image.city(), faker.image.city()],
          },
          {
            name: faker.address.city(),
            best_season: seasons[randomIndex],
            temperature: parseInt(faker.random.numeric(2)),
            best_time: faker.date.weekday(),
            humidity: parseInt(faker.random.numeric(2)),
            destinationId: destination.id,
            guidesId: destination.guidesId,
            image_url: [faker.image.city(), faker.image.city()],
          },
        ],
      });
    })
  );

  const places = await Prisma.places.findMany();
  const tourists = await Prisma.tourists.findMany();

  await Promise.all(
    tourists.map(async (tourist: { id: any; }, index: string | number) => {
      await Prisma.reviews.createMany({
        data: [
          {
            placesId: places[index].id,
            touristsId: tourist.id,
            rating: parseInt(faker.random.numeric()),
            review_content: faker.lorem.words(),
            memories: [
              faker.image.city(),
              faker.image.city(),
              faker.image.city(),
            ],
          },
          {
            placesId: places[0].id,
            touristsId: tourist.id,
            rating: parseInt(faker.random.numeric()),
            review_content: faker.lorem.words(),
            memories: [
              faker.image.city(),
              faker.image.city(),
              faker.image.city(),
            ],
          },
        ],
      });
    })
  );

  const reviews = await Prisma.reviews.findMany();

  await Promise.all(
    reviews.map(async (review: { id: any; touristsId: any; }) => {
      await Prisma.histories.create({
        data: {
          reviewsId: review.id,
          touristsId: review.touristsId,
        },
      });
    })
  );

  await Promise.all(
    tourists.map(async (tourist: { id: any; }) => {
      const randomIndex = Math.floor(Math.random() * places.length);
      await Prisma.favourites.createMany({
        data: [
          {
            placeId: places[randomIndex].id,
            touristsId: tourist.id,
          },
          {
            placeId: places[randomIndex].id,
            touristsId: tourist.id,
          },
          {
            placeId: places[randomIndex].id,
            touristsId: tourist.id,
          },
          {
            placeId: places[randomIndex].id,
            touristsId: tourist.id,
          },
        ],
      });
    })
  );

  console.log("=>==>==>==>==> Data sent ==>==>");
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await Prisma.$disconnect();
  });
