import { Plus_Jakarta_Sans } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const customTheme = extendTheme({
  fonts: {
    heading: plusJakartaSans.style.fontFamily,
    body: plusJakartaSans.style.fontFamily,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
