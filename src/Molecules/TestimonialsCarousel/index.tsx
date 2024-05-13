import { Carousel, Container } from "react-bootstrap";
import CarouselImage from "../CarouselImage";
import { useState } from "react";
import data from '../../Utils/data.json'

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        data.testimonials.carousel.map((item)=> {
          return (
            <Carousel.Item>
            <CarouselImage eventName= {item.eventName} title={item.title} description={item.description} imageUrl={item.imageUrl} />
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default TestimonialsCarousel;

