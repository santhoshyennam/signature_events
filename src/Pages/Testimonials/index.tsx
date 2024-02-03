import Banner from "../../Molecules/Banner";
import TestimonialsCarousel from "../../Molecules/TestimonialsCarousel";
import TestimonialsHeading from "../../Molecules/TestimonialsHeading";
import TestimonialsPeople from "../../Molecules/TestimonialsPeople";
import SubmitForm from "../../Organisms/SubmitForm";
import data from '../../Utils/data.json'

function Testimonials() {
  return (
    <div>
      <Banner title1={data.banner.testimonials.title1} title2={data.banner.testimonials.title2} />
      <TestimonialsHeading title={data.testimonials.title} />
      <TestimonialsCarousel />
      <TestimonialsPeople />
      <SubmitForm />
    </div>
  );
}

export default Testimonials;
