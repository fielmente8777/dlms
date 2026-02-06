"use client";
import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";
import Form1 from "../forms/Form1";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }

  const data = footerData;
  return (
    <footer className="max_screen_width bg-secondary">
      <Container>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
          <div className=" flex flex-col gap-3">
            <div
              className={`relative 
                  w-full aspect-[4/1.9] md:max-w-45`}
            >
              <Image
                src={data.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <p className="text-white max-md:text-center">{data.description}</p>
          </div>
          {data.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <div className="md:space-y-4 space-y-2">
                <h2 className="md:text-5xl text-white font-eb  text-3xl">
                  {list.title}
                </h2>
                <div className="w-28 h-0.5 bg-primary" />
              </div>
              <ul className={`flex flex-col gap-2`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-mont text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-7"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="md:space-y-4 space-y-2">
              <h2 className="md:text-5xl text-white font-eb text-3xl">
                Contact Us
              </h2>
              <div className="w-28 h-0.5 bg-primary" />
            </div>
            <Form1 />
          </div>
        </div>
      </Container>
      <div className="bg-primary h-0.5 w-full max_width" />
      <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
        <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white md:text-lg">
          {" "}
          <span className="text-white">
            © {new Date().getFullYear()} DLMS Furnishings
          </span>
          <span className="md:block hidden">|</span>
          <span className="text-white">All Rights Reserved</span>
          {/* <span className="md:block hidden">|</span> */}
        </div>
        <p className="text-white!">Crafted with care by <b>Eazotel</b></p>
      </Container>
    </footer>
  );
};

export default Footer;
