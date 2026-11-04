import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(
    host ? `${protocol}://${host}` : "http://localhost:3000",
  );

  return {
    metadataBase,
    title: "Yara Nicolette | Neuropsicóloga Infantil em Londrina",
    description:
      "Psicoterapia infantojuvenil, avaliação neuropsicológica de 6 a 16 anos e psicoeducação parental em Londrina. Conheça o trabalho de Yara Nicolette.",
    keywords: [
      "psicóloga infantil em Londrina",
      "psicologia infantil",
      "avaliação neuropsicológica em Londrina",
      "psicoeducação parental",
      "terapia infantil",
      "Yara Nicolette",
      "desenvolvimento emocional infantil",
    ],
    authors: [{ name: "Yara Nicolette" }],
    creator: "Yara Nicolette",
    icons: {
      icon: "/media/yara-seal.png",
      shortcut: "/media/yara-seal.png",
      apple: "/media/yara-seal.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: "Yara Nicolette | Neuropsicóloga Infantil em Londrina",
      description:
        "Por trás de cada comportamento, existe uma criança que precisa ser compreendida.",
      siteName: "Yara Nicolette — Neuropsicóloga Infantil",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Yara Nicolette — Neuropsicóloga Infantil em Londrina",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yara Nicolette | Neuropsicóloga Infantil em Londrina",
      description:
        "Por trás de cada comportamento, existe uma criança que precisa ser compreendida.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
