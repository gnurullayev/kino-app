import Head from "next/head";
import { FC } from "react";

interface IProps {
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  datePublished?: string;
  genre?: string;
  type?: string;
}
const NAME = "Topmovie - ";
const year = new Date().getFullYear();

const pageSchemaData = {
  name: `Eng yangi Tarjima kinolar ${year} Uzbek Tilida va eng yaxshi kinolar va seriallar`,
  description:
    NAME +
    `${year} yilning eng yangi uzbek kinolari ro'yxati. Eng yaxshi komediya, jangari va fantastik kinolarni kashf eting. Yangi filmlar, seriallar va eski klassikalarni HD formatida tomosha qilish imkoniyati!`,
  keywords: `${year} - yildagi kinolar, ${year}-tarjima kinolar, ramantik kinolar, hind kinolar, ${year}-hind kinolar, tarjima kinolar, yangi kinolar, eng sara filimlar, kinolar, yangi kinolar, mashhur filmlar, HD filmlar, eng yaxshi seriallar`,
  robots: "index, follow",
  author: "Topmovie",
  url: "https://topmovie.me/",
  datePublished: "2024-11-1",
  type: "Tarjima kinolar",

  genre: [
    "drama",
    "jangari",
    "tarjimakinolar",
    "fantastik",
    "ramantik",
    "Qo'rqinchli",
  ],
};

const PageSchema: FC<IProps> = ({
  name = pageSchemaData.name,
  description = pageSchemaData.description,
  image = "https://topmovie.me/favicon.ico",
  url = pageSchemaData.url,
  datePublished = pageSchemaData.datePublished,
  genre = pageSchemaData.genre,
}) => {
  const imagePath = image.replace("http", "https");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            name,
            description,
            director: {
              "@type": "Person",
              name: "G'ayrat Nurullayev",
            },
            datePublished: datePublished,
            genre: genre,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "8.5",
              reviewCount: "1500",
            },
            url,
            image,
          }),
        }}
      ></script>
    </>
  );
};

export default PageSchema;
