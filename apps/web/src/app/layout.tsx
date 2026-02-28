import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolarNexus",
  description: "Plataforma de Gestão de Energia Solar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
