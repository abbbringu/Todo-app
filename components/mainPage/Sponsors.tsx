"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
const images = [
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12ec2e784a6708ebf43fe_WavelessDefault.svg",
		alt: "Image 1",
	},

	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e417a5df9f29742429b_ProLineDefault.svg",
		alt: "Image 3",
	},
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e29e272fe4e90da123b_PentaDark.svg",
		alt: "Image 4",
	},
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e1a2123d6fb71928727_OrbitcDefault.svg",
		alt: "Image 5",
	},
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e582df47d4de9998ed1_RiseDefault.svg",
		alt: "Image 6",
	},
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e321b3fc64c00701fd4_PinpointDefault.svg",
		alt: "Image 7",
	},

	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e78784f087c65fe2757_SnapShotDefault.svg",
		alt: "Image 9",
	},
	{
		src: "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12dcfc7ae6798c49b2a55_IcebergDefault.svg",
		alt: "Image 10",
	},
];

const Sponsors = () => {
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	async function fetchImages() {
	// 		const response = await fetch(
	// 			"https://jsonplaceholder.typicode.com/photos"
	// 		);
	// 		const data = await response.json();
	// 		setImages(data.slice(0, 10));
	// 	}
	// 	fetchImages();
	// }, []);
	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				<Typography variant="h3" color="gray">
					Sponsors (Not real)
				</Typography>
			</div>
			<div className="grid grid-cols-4 gap-4 max-w-lg">
				{images.map((image, index) => (
					<div key={index}>
						<Image src={image.src} alt={image.alt} width={300} height={300} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Sponsors;
