import { Space_Mono } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import { Josefin_Slab } from "next/font/google";

export const space_mono = Space_Mono({
    subsets: ["latin"],
    variable: "--ff-mono",
    weight: ["400", "700"],
});

export const comfortaa = Comfortaa({
    subsets: ["latin"],
    variable: "--ff-comfortaa",
    weight: ["300", "400", "700"],
});

export const be_vietname_pro = Be_Vietnam_Pro({
    subsets: ["latin"],
    variable: "--ff-sansSerif",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const josefin_slab = Josefin_Slab({
    subsets: ["latin"],
    variable: "--ff-serif",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

function generateWeights(start, end) {
    const weights = [];
    for (let i = start; i <= end; i += 100) {
        weights.push(i);
    }

    return weights;
}
