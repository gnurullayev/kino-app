import Head from "next/head";
import { FC } from "react";

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  author?: string;
}
const TITLE = "Bestmedia - ";

const metaData = {
  title: "Eng Yaxshi Kinolar va Seriallar",
  description:
    "Bestmedia sayti orqali eng yangi, mashhur va yuqori sifatdagi kinolarni bepul ko'ring. Yangi filmlar, seriallar va eski klassikalarni HD formatida tomosha qilish imkoniyati!",
  keywords:
    "kinolar, yangi kinolar, mashhur filmlar, HD filmlar, eng yaxshi seriallar, online kino, yuqori sifatli kino",
  robots: "index, follow",
  author: "Bestmedia Team",
};

const MetaData: FC<IProps> = ({
  title = metaData.title,
  description = metaData.description,
  keywords = metaData.keywords,
  robots = metaData.robots,
  author = metaData.author,
}) => {
  return (
    <Head>
      <meta name="title" content={TITLE + title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://bestmedia.com/bestmedia.webp"
      />
      <meta property="og:url" content="https://bestmedia.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uz_UZ" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://bestmedia.com/bestmedia.webp"
      />
      <meta name="twitter:site" content="@Bestmedia" />
      <title>{TITLE + title}</title>
    </Head>
  );
};

export default MetaData;
