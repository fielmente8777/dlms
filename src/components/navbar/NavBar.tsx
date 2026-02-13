import { contact } from "@/utils/constent";
import { FillCallIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";

const NavBar = () => {
  return (
    <header className="bg-secondary max_screen_width py-4">
      <Container className="flex items-center justify-between">
        <div className="md:w-43 w-31 relative aspect-2/1">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`tel:${contact.phone[0]}`}
          className="w-fit bg-primary flex items-center gap-2 text-secondary text-lg md:px-8 md:py-3 p-4 transition-all duration-300 ease-in-out hover:scale-95 rounded-full hover:shadow-lg"
        >
          <span className="max-md:hidden">Inquire Now</span>
          {/* <IoCall size={25} /> */}
          <span className="max-md:hidden">
            <ArrowIcon />
          </span>
          <span className="md:hidden">
            <FillCallIcon />
          </span>
        </Link>
      </Container>
    </header>
  );
};

export default NavBar;

export const ArrowIcon = () => (
  <svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7695 0.634306C11.0763 0.946722 11.0763 1.45326 10.7695 1.76567L1.86473 10.8323C1.5579 11.1447 1.06041 11.1447 0.753565 10.8323C0.446728 10.5199 0.446728 10.0134 0.753565 9.70103L9.65838 0.634306C9.9652 0.32189 10.4626 0.32189 10.7695 0.634306Z"
      fill="#1D2320"
    />
    <path
      d="M0 1.19999C0 0.75817 0.35178 0.399994 0.785714 0.399994H10.2143C10.6482 0.399994 11 0.75817 11 1.19999V10.8C11 11.2418 10.6482 11.6 10.2143 11.6C9.78034 11.6 9.42857 11.2418 9.42857 10.8V1.99999H0.785714C0.35178 1.99999 0 1.64182 0 1.19999Z"
      fill="#1D2320"
    />
  </svg>
);
