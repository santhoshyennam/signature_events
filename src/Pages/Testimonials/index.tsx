import { Container } from "react-bootstrap";
import Banner from "../../Molecules/Banner";
import TestimonialsCarousel from "../../Molecules/TestimonialsCarousel";
import TestimonialsHeading from "../../Molecules/TestimonialsHeading";
import TestimonialsPeople from "../../Molecules/TestimonialsPeople";
import GallerySuggestions from "../../Organisms/GallerySuggestions";
import SubmitForm from "../../Organisms/SubmitForm";
import data from '../../Utils/data.json'

function Testimonials() {
  return (
    <div>
      <Banner title1={data.banner.testimonials.title1} title2={data.banner.testimonials.title2} />
      <TestimonialsHeading title={data.testimonials.title} />
      <TestimonialsCarousel />
      <TestimonialsPeople />
      <Container>
      <div style={{ width: '100%',height: '1px',backgroundColor: '#c59771',marginTop: '40px'}}></div>
      <GallerySuggestions title="Our Gallery" showAll={true} />
      </Container>
      {/* <SubmitForm /> */}
    </div>
  );
}

export default Testimonials;
