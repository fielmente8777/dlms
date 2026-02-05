import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { LazyLoadedVideo } from "@/components/Video";

interface AiSolutionProps {
  title: string;
  subtitle: string;
  description: string;
  video: {
    src: string;
    thumbnail: string;
  };
}
const AiSolution: React.FC<AiSolutionProps> = ({
  title,
  subtitle,
  description,
  video,
}) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="md:py-12 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center max-md:gap-4">
        <div className="md:space-y-4 space-y-2">
          <SectionHeading
            title={title}
            subTitle={subtitle}
          />
          <div className="w-20 h-0.5 bg-primary" />
        </div>
        <p className="text-secondary">{description}</p>
      </div>
      <div className="relative md:aspect-4/2 aspect-video w-full md:mt-10 mt-6">
        <LazyLoadedVideo
          src={video.src}
          poster={video.thumbnail}
          loop
          autoPlay
          muted
          controls={false}
        />
      </div>
    </SectionWithContainer>
  );
};

export default AiSolution;
