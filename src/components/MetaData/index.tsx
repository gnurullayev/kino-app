import Head from "next/head";
import { FC } from "react";

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  author?: string;
  image?: string;
}
const TITLE = "Topmovie - ";
const year = new Date().getFullYear();

const metaData = {
  title: `Eng yangi Tarjima kinolar ${year} Uzbek Tilida va eng yaxshi kinolar va seriallar`,
  description:
    TITLE +
    `${year} yilning eng yangi uzbek kinolari ro'yxati. Eng yaxshi komediya, jangari va fantastik kinolarni kashf eting. Yangi filmlar, seriallar va eski klassikalarni HD formatida tomosha qilish imkoniyati!`,
  keywords: `${year} - yildagi kinolar, ${year}-tarjima kinolar, ramantik kinolar, hind kinolar, ${year}-hind kinolar, tarjima kinolar, yangi kinolar, eng sara filimlar, kinolar, yangi kinolar, mashhur filmlar, HD filmlar, eng yaxshi seriallar`,
  robots: "index, follow",
  author: "Topmovie",
};

const MetaData: FC<IProps> = ({
  title = metaData.title,
  description = metaData.description,
  keywords = metaData.keywords,
  robots = metaData.robots,
  author = metaData.author,
  image = "/public/android-chrome-192x192.png",
}) => {
  const imagePath = image.replace("http", "https");
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="ojKGPlxNbjVi1Jb7aS0QCh9njRe-yVG-dAjUQ6K2jSw"
      />
      <meta name="title" content={TITLE + title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:url" content="https://bestmedia.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uz_UZ" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />
      <meta name="twitter:site" content="@Bestmedia" />
      <title>{TITLE + title}</title>
    </Head>
  );
};

export default MetaData;
