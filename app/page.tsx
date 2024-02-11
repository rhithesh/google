"use client";
import { useState } from "react";
import Image from "next/image";
import Hello from "./google.png";
import Search from "./search.png";
import voice from "./voice.png";
import camera from "./camera.webp";
import { useRouter } from "next/navigation";

export default function Home() {
	const [query, setquery] = useState("");
	const router = useRouter();

	function search() {
		const url = `https://www.google.com/search?q=${query}`;

		router.push(url);
	}
	return (
		<div className="flex flex-col min-h-screen w-screen  ">
			<div className="h-[5vh]   space-x-3 flex justify-end pt-2 mr-3">
				<h1 className=""> Gmail</h1>
				<h1 className=""> Images</h1>
			</div>
			<div className="h-[95vh]  flex justify-center items-center  my-5 ">
				<div className=" flex space-y-4 flex-col  ">
					<Image
						className="mx-auto"
						src={Hello}
						alt="Google image"
						width={200}
						height={200}
					/>
					<div className=" flex  rounded-3xl border  py-2   ">
						<Image
							className=" h-[30px] ml-3    "
							src={Search}
							alt="Google search"
							width={35}
							onClick={() => {
								search();
							}}
						/>
						<input
							value={query}
							onChange={(e) => setquery(e.target.value)}
							type="text"
							className=" pl-2  basis-[80%] w-[350px] sm:w-[430px]  rounded-3xl   outline-none"
						/>

						<Image
							className=" h-[30px] mr-2    "
							alt="Google voice"
							width={35}
							src={voice}
							onClick={() => {
								search();
							}}
						/>
						<Image
							className=" mr-4  scale-125  "
							alt="Google camers"
							width={25}
							height={45}
							src={camera}
							onClick={() => {
								search();
							}}
						/>
					</div>
					<div className=" flex  justify-evenly ">
						<button className="bg-blue-500 text-white px-3 py-1  rounded-sm">
							Google Search
						</button>
						<button className="bg-blue-500 text-white px-3 py-1 rounded-sm ">
							{"I'm felling good"}
						</button>
					</div>
					<div className=" flex  ">
						<h1 className=" px-2">Google offered in:</h1>
						<div className=" text-blue-500 flex space-x-2">
							<p>हिन्दी </p>
							<p> বাংলা</p>
							<p>తెలుగు</p>
							<p>मराठी</p>
							<p>தமிழ்</p>
							<p>ગુજરાતી</p>
							<p>ಕನ್ನಡ</p>
							<p>ਪੰਜਾਬੀ</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
