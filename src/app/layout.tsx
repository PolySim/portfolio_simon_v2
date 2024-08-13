import type { Metadata } from "next";
import "./globals.css";
import WindowSizeInitializer from "@/initializer/WindowSizeInitializer";

export const metadata: Metadata = {
  title: {
    template: "%s | Simon Desdevises",
    default: "Simon Desdevises",
  },
  description:
    "Bienvenue sur mon site professionnel, je réalise tous les sites internet dont vous avez besoin. Cela vous intéresse ? Rendez-vous directement dans la partie contact !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <WindowSizeInitializer />
        {children}
      </body>
    </html>
  );
}
