import Image from "next/image";
import Main_Nav from "@/components/Navbar";
import { HeroSection, DividingTodo, Sponsors } from "@/components/mainPage";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col w-full justify-start gap-5 bg-blue-gray-50">
			<div className="w-full pt-5">
				<Main_Nav />
			</div>
			<div className="flex flex-row justify-center w-full overflow-hidden">
				<div className="max-w-screen-xl w-full space-y-20">
					<HeroSection />
					<Sponsors />
					<DividingTodo />
				</div>
			</div>
		</main>
	);
}
