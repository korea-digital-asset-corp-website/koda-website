import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

type Props = {
  description?: string;
  lang: string;
  keywords: string[];
  thumnail?: string;
  title?: string;
};

function SEO({ description, lang, keywords, thumnail, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            og_image
          }
        }
      }
    `
  );
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = site.siteMetadata.siteUrl;
  const metaImage = thumnail || site.siteMetadata.og_image;
  const metaKeywords = (
    keywords || ["koda", "henesis", "blockchain", "haechilabs"]
  ).join(",");

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
    >
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="한국디지털에셋(KODA)" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content="한국디지털에셋(KODA, 코다)" />
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
}

SEO.defaultProps = {
  keywords: [],
  lang: `en`,
  meta: [],
};

export default SEO;
