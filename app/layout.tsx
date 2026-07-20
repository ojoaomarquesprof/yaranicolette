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
    title: "Yara Nicolette | Psicóloga Infantil em Londrina",
    description:
      "Psicologia infantil em Londrina para compreender emoções, comportamentos e desafios do desenvolvimento, com participação da família.",
    keywords: [
      "psicóloga infantil em Londrina",
      "psicologia infantil",
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
      title: "Yara Nicolette | Psicóloga Infantil em Londrina",
      description:
        "Psicologia infantil para compreender o que seu filho ainda não consegue dizer.",
      siteName: "Yara Nicolette — Psicóloga Infantil",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Yara Nicolette — Psicóloga Infantil em Londrina",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yara Nicolette | Psicóloga Infantil em Londrina",
      description:
        "Psicologia infantil para compreender o que seu filho ainda não consegue dizer.",
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
