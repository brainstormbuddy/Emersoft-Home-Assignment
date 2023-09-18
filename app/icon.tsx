import Logo from "@/components/Logo";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Logo viewBox="0 0 240 110" />, {
    ...size,
  });
}
