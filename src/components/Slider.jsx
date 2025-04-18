import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Slider({ images }) {
  return (
    <Splide
      options={{
        autoplay: true,
      }}
    >
      {images.map((image, index) => {
        return (
          <SplideSlide key={index}>
            <div className="relative block">
              <img
                alt={image.description}
                class="h-96 lg:h-[90vh] object-fill w-auto"
                src={image.src}
              />
              <p className="absolute top-0 right-0 left-0 text-zinc-800 p-4 bg-base-100 z-20">
                {image.description}
              </p>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
