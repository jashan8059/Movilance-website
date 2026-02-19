import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: object; // For custom JSON-LD
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl = window.location.href,
  schema
}) => {
  const siteTitle = "Movilance | Enterprise Facility Movement & Vigilance Platform";
  const finalTitle = title === "Movilance" ? siteTitle : `${title} | Movilance`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://movilance.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://movilance.com/og-image.jpg" />
      
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};