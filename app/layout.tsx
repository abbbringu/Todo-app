import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Juvumi",
	description: "Todo application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<NextAuthProvider>
				<body className={inter.className}>{children}</body>
			</NextAuthProvider>
		</html>
	);
}
