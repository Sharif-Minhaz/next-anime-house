"use client";

import Image from "next/image";
import ScrollToTop from "react-scroll-up";

export default function ScrollUp() {
	return (
		<ScrollToTop showUnder={160} style={{ bottom: "30px" }}>
			<Image width={50} height={50} src="/arrow-up.png" alt="Up" />
		</ScrollToTop>
	);
}
