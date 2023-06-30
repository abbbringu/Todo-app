import Image from "next/image";
import Main_Nav from "@/components/Navbar";
import {
	HeroSection,
	DividingTodo,
	Sponsors,
	Pricing,
	Footer,
} from "@/components/mainPage";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col w-full justify-start gap-5 bg-blue-gray-50/50">
			<div className="w-full pt-5">
				<Main_Nav />
			</div>
			<div className="flex flex-row justify-center w-full overflow-x-hidden">
				<div className="max-w-screen-xl w-full space-y-20">
					<HeroSection />
					<Sponsors />
					<DividingTodo />
					<Pricing />
					<Footer />
				</div>
			</div>
		</main>
	);
}
