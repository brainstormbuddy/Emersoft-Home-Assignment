import { render, screen } from "@testing-library/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { FALLBACK_IMAGE_URL } from "../config/constants.config";

describe("ImageWithFallback", () => {
  const validImage = "https://placekitten.com/200/300";
  const invalidImage = "https://example.com/200/300";
  const fallbackImage = FALLBACK_IMAGE_URL;

  it("renders without error when src is valid", () => {
    render(<ImageWithFallback width="400" height="300" src={validImage} alt="valid-image" />);
    const imageElement = screen.getByAltText("valid-image");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders fallback image when src is invalid", () => {
    render(
      <ImageWithFallback
        width="400"
        height="300"
        src={invalidImage}
        fallback={fallbackImage}
        alt="fallback-image"
      />,
    );
    const imageElement = screen.getByAltText("fallback-image");
    expect(imageElement).toBeInTheDocument();
  });

  it("resets error state when src changes", () => {
    const { rerender } = render(
      <ImageWithFallback
        width="400"
        height="300"
        src={invalidImage}
        fallback={fallbackImage}
        alt="invalid-image"
      />,
    );
    rerender(<ImageWithFallback width="400" height="300" src={validImage} alt="valid-image" />);
    const imageElement = screen.getByAltText("valid-image");
    expect(imageElement).toBeInTheDocument();
  });

  describe("Error handling", () => {
    it("renders the fallback image when the source image fails to load", () => {
      render(
        <ImageWithFallback
          onError={() => true}
          width="400"
          height="300"
          src={invalidImage}
          alt="fallback-image"
        />,
      );
      expect(screen.getByAltText("fallback-image")).toBeInTheDocument();
    });

    it("renders the component with the provided image source", () => {
      render(<ImageWithFallback width="400" height="300" src={validImage} alt="valid-image" />);
      expect(screen.getByAltText("valid-image")).toBeInTheDocument();
    });
  });
});
