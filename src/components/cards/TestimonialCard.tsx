import { TestimonialsDataType } from "@/@types/type";

const TestimonialCard: React.FC<TestimonialsDataType["testimonials"][0]> = ({
  name,
  text: description,
}) => {
  return (
    <div className="space-y-4">
      <p className="text-light text-2xl">{description}</p>
      <h3 className="text-secondary font-semibold text-[1.063rem]" >{name}</h3>
    </div>
  );
};

export default TestimonialCard;
