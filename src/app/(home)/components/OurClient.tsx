import { OurClientProps } from "@/@types/type";
import { Container, Section } from "@/components/sectionComponants";
import SectorSection from "@/components/sliders/SectorSection";
import { SectionHeading } from "@/components/typography";

const OurClient: React.FC<OurClientProps> = ({
  title,
  subtitle,
  description,
  sectors,
  link,
}) => {
  return (
    <Section defaultPadding={false} className="bg-white">
      <div className="bg-secondary py-12">
        <Container className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="md:space-y-2.5 space-y-2">
            <SectionHeading
              title={title}
              subTitle={subtitle}
              titleColor="white"
              subTitleColor="white"
            />
            <div className="md:w-25 w-16 h-0.5 bg-primary" />
          </div>
          <p className="text-white">{description}</p>
        </Container>
      </div>
      <SectorSection sectors={sectors} link={link} />
    </Section>
  );
};

export default OurClient;
