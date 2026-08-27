import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://praquel.shop";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praquel | Barra de silicona para cicatrices",
    template: "%s | Praquel",
  },
  description: "Descubre la barra de silicona Praquel para el cuidado localizado de cicatrices cerradas. Fórmula sin fragancia, aplicación práctica y rutina de 8 a 12 semanas.",
  keywords: [
    "Praquel Scar Solutions",
    "barra de silicona para cicatrices",
    "silicona para cicatrices",
    "cuidado de cicatrices",
    "barra para cicatrices",
    "Praquel cicatrices",
  ],
  authors: [{ name: "Praquel" }],
  creator: "Praquel",
  publisher: "Praquel",
  category: "Cuidado de la piel",
  alternates: {
    canonical: "/",
    languages: { es: "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Praquel",
    title: "Praquel | Barra de silicona para cicatrices",
    description: "Cuidado localizado, aplicación práctica y una rutina sencilla para acompañar la apariencia de cicatrices cerradas.",
    url: "/",
    images: [{ url: "/images/praquel/producto-principal.jpg", width: 1536, height: 1536, alt: "Praquel, barra de silicona para cicatrices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praquel | Soluciones para cicatrices",
    description: "Barra de silicona para el cuidado localizado de cicatrices cerradas.",
    images: ["/images/praquel/producto-principal.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Praquel, barra de silicona para cicatrices",
  brand: { "@type": "Brand", name: "Praquel" },
  description: "Barra de silicona para el cuidado localizado de cicatrices completamente cerradas.",
  category: "Cuidado de la piel",
  url: siteUrl,
  image: [`${siteUrl}/images/praquel/producto-principal.jpg`, `${siteUrl}/images/praquel/soluciones-cicatrices.jpg`],
  offers: [
    { "@type": "Offer", priceCurrency: "EUR", price: "20.99", url: "https://praquel.shop/cart/43065860489312:1", availability: "https://schema.org/InStock" },
    { "@type": "Offer", priceCurrency: "EUR", price: "37.78", url: "https://praquel.shop/cart/43101788536928:1", availability: "https://schema.org/InStock" },
    { "@type": "Offer", priceCurrency: "EUR", price: "52.97", url: "https://praquel.shop/cart/43101789061216:1", availability: "https://schema.org/InStock" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      </body>
    </html>
  );
}
