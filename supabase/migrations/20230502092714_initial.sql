create table "public"."destinations" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "guidesId" uuid not null
);


create table "public"."favourites" (
    "id" uuid not null default gen_random_uuid(),
    "touristsId" uuid,
    "placeId" uuid not null
);


create table "public"."guides" (
    "id" uuid not null default gen_random_uuid(),
    "first_name" text not null,
    "last_name" text not null,
    "id_proof" text not null,
    "mail" text not null,
    "password" text not null,
    "address" text not null,
    "city" text not null,
    "phone_number" text not null,
    "experience" text not null
);


create table "public"."histories" (
    "id" uuid not null default gen_random_uuid(),
    "touristsId" uuid not null,
    "reviewsId" uuid not null
);


create table "public"."places" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "image_url" text[],
    "best_time" text not null,
    "best_season" text not null,
    "destinationId" uuid not null,
    "temperature" double precision not null,
    "humidity" double precision not null,
    "created_at" timestamp with time zone not null default now(),
    "guidesId" uuid not null
);


create table "public"."reviews" (
    "id" uuid not null default gen_random_uuid(),
    "rating" integer not null,
    "review_content" character varying(200) not null,
    "memories" text[],
    "created_at" timestamp with time zone not null default now(),
    "touristsId" uuid not null,
    "placesId" uuid not null
);


create table "public"."tourists" (
    "id" uuid not null default gen_random_uuid(),
    "first_name" text not null,
    "last_name" text not null,
    "phone_number" text not null,
    "mail" text not null,
    "password" text not null,
    "city" text not null,
    "address" text not null,
    "interest_Place" text not null
);


CREATE UNIQUE INDEX destinations_pkey ON public.destinations USING btree (id);

CREATE UNIQUE INDEX favourites_pkey ON public.favourites USING btree (id);

CREATE UNIQUE INDEX guides_pkey ON public.guides USING btree (id);

CREATE UNIQUE INDEX histories_pkey ON public.histories USING btree (id);

CREATE UNIQUE INDEX "histories_reviewsId_key" ON public.histories USING btree ("reviewsId");

CREATE UNIQUE INDEX places_pkey ON public.places USING btree (id);

CREATE UNIQUE INDEX reviews_pkey ON public.reviews USING btree (id);

CREATE UNIQUE INDEX tourists_pkey ON public.tourists USING btree (id);

alter table "public"."destinations" add constraint "destinations_pkey" PRIMARY KEY using index "destinations_pkey";

alter table "public"."favourites" add constraint "favourites_pkey" PRIMARY KEY using index "favourites_pkey";

alter table "public"."guides" add constraint "guides_pkey" PRIMARY KEY using index "guides_pkey";

alter table "public"."histories" add constraint "histories_pkey" PRIMARY KEY using index "histories_pkey";

alter table "public"."places" add constraint "places_pkey" PRIMARY KEY using index "places_pkey";

alter table "public"."reviews" add constraint "reviews_pkey" PRIMARY KEY using index "reviews_pkey";

alter table "public"."tourists" add constraint "tourists_pkey" PRIMARY KEY using index "tourists_pkey";

alter table "public"."destinations" add constraint "destinations_guidesId_fkey" FOREIGN KEY ("guidesId") REFERENCES guides(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."destinations" validate constraint "destinations_guidesId_fkey";

alter table "public"."favourites" add constraint "favourites_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES places(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."favourites" validate constraint "favourites_placeId_fkey";

alter table "public"."favourites" add constraint "favourites_touristsId_fkey" FOREIGN KEY ("touristsId") REFERENCES tourists(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."favourites" validate constraint "favourites_touristsId_fkey";

alter table "public"."histories" add constraint "histories_reviewsId_fkey" FOREIGN KEY ("reviewsId") REFERENCES reviews(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."histories" validate constraint "histories_reviewsId_fkey";

alter table "public"."histories" add constraint "histories_touristsId_fkey" FOREIGN KEY ("touristsId") REFERENCES tourists(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."histories" validate constraint "histories_touristsId_fkey";

alter table "public"."places" add constraint "places_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES destinations(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."places" validate constraint "places_destinationId_fkey";

alter table "public"."places" add constraint "places_guidesId_fkey" FOREIGN KEY ("guidesId") REFERENCES guides(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."places" validate constraint "places_guidesId_fkey";

alter table "public"."reviews" add constraint "reviews_placesId_fkey" FOREIGN KEY ("placesId") REFERENCES places(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."reviews" validate constraint "reviews_placesId_fkey";

alter table "public"."reviews" add constraint "reviews_touristsId_fkey" FOREIGN KEY ("touristsId") REFERENCES tourists(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."reviews" validate constraint "reviews_touristsId_fkey";


