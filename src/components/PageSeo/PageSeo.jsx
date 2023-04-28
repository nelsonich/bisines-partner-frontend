import React, { useMemo } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

const appName = 'BisinesPartner';

function PageSeo({ title, keywords, description, image, children }) {
  const { asPath: url } = useRouter();

  const keywordsParsed = useMemo(() => {
    if (Array.isArray(keywords)) {
      return keywords.join(',');
    }

    return keywords;
  }, [keywords]);

  const finalTitle = useMemo(() => {
    if (!title) {
      return appName;
    }

    return `${appName} - ${title}`;
  }, [title]);

  return (
    <NextHead>
      {/* common */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

      {/* website */}
      <meta itemProp="name" content={finalTitle} />
      <meta name="name" content={finalTitle} />
      <link rel="canonical" href={url} />
      <title>{finalTitle}</title>
      {keywordsParsed && <meta name="keywords" content={keywordsParsed} />}
      {description && <meta name="description" content={description} />}
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      {image && <meta name="twitter:image:src" content={image} />}

      {/* facebook - open graph */}
      <meta name="og:type" content="website" />
      <meta name="og:title" content={finalTitle} />
      <meta name="og:url" content={url} />
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image} />}

      {/* other meta tags */}
      {children}
    </NextHead>
  );
}

export default PageSeo;
