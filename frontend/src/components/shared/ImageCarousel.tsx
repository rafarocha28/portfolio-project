import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

export interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel(props: ImageCarouselProps) {
  return (
    <Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
      <CarouselContent>
        {props.images.map((image) => (
          <CarouselItem key={image} className="relative h-96 w-full">
            <Image src={image} alt="Imagem" fill className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
