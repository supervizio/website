import { Helmet } from "react-helmet-async";
import seoData from "../../data/seo";

export default function Seo({ path }) {
  const meta = seoData[path] || {};
  return (
    <Helmet>
      {meta.title && <title>{meta.title}</title>}
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      {meta.ogTitle && <meta property="og:title" content={meta.ogTitle} />}
      {meta.ogDescription && (
        <meta property="og:description" content={meta.ogDescription} />
      )}
      {meta.ogType && <meta property="og:type" content={meta.ogType} />}
      {meta.ogUrl && <meta property="og:url" content={meta.ogUrl} />}
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      {meta.twitterCard && (
        <meta name="twitter:card" content={meta.twitterCard} />
      )}
    </Helmet>
  );
}
