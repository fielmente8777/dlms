import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex justify-center items-center h-dvh">
      <SectionWithContainer>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative max-w-96 w-full aspect-square bg-secondary">
            <Image
              src={"/logo.png"}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-xl mx-auto">
            <div className="space-y-4 flex flex-col items-center">
              <h2 className="text-secondary md:text-lg font-semibold">
                THANK YOU FOR SUBMITTING
              </h2>
              <h3 className="md:text-4xl text-2xl font-bold text-center">
                We will get back to you shortly!
              </h3>

              <div>
                <LinkButton
                  href="/"
                  label="Go to Home Page"
                  showSecureBadge={false}
                  className="bg-white text-secondary flex items-center rounded-full justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg capitalize"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
