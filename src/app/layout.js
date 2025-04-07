import "../styles/globals.css";
import Navbar from "../components/Navbar";
import StarsBackground from "../components/StarsBackground";

export const metadata = {
  title: "Joseph Zazzi | Developer Portfolio",
  description: "Full-stack MERN developer with an AI twist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <Navbar />
        <StarsBackground />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
