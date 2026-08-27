import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Praquel · Barra de silicona para cicatrices",
    short_name: "Praquel",
    description: "Barra de silicona para el cuidado localizado de cicatrices cerradas.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdfb",
    theme_color: "#163f3d",
    lang: "es",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
