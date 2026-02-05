import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { TickIcon } from "@/utils/icons";

interface WhyPartnerProps {
  title: string;
  link: {
    href: string;
    label: string;
  };
  points: string[];
}
const WhyPartner: React.FC<WhyPartnerProps> = ({ title, link, points }) => {
  return (
    <SectionWithContainer>
      <div className="rounded-4xl border border-primary md:px-10 md:py-14 py-8 px-5.5 box-shadow bg-white grid md:grid-cols-[1.2fr_2fr] grid-cols-1 items-center gap-6">
        <div className="space-y-4">
          <SectionHeading
            subTitle={title}
            subLevel={2}
            subTitleClassName="md:text-[2rem]!"
          />
          <LinkButton
            href={link.href}
            label={link.label}
            className="bg-primary text-secondary w-fit rounded-full max-md:hidden"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 space-y-3">
          {points.map((point, index) => (
            <div key={index} className="flex gap-3">
              <span className="">
                <TickIcon />
              </span>
              <p
                className="text-[0.9375rem]!"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            </div>
          ))}
        </div>
        <LinkButton
          href={link.href}
          label={link.label}
          className="bg-primary text-secondary max-md:w-full justify-between rounded-full md:hidden"
        />
      </div>
    </SectionWithContainer>
  );
};

export default WhyPartner;
