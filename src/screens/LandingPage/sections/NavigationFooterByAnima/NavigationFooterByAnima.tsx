import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const NavigationFooterByAnima = (): JSX.Element => {
  // Navigation data for the footer columns
  const navigationColumns = [
    {
      id: 1,
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      id: 2,
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      id: 3,
      topic: "Topic",
      pages: ["Page", "Page", "Page"],
    },
  ];

  // Social media icons data
  const socialIcons = [
    { id: 1, src: "/icon-1.svg", alt: "Icon" },
    { id: 2, src: "/icon-2.svg", alt: "Icon" },
    { id: 3, src: "/icon.svg", alt: "Icon" },
    { id: 4, src: "/icon-3.svg", alt: "Icon" },
  ];

  return (
    <footer className="w-full bg-white py-12">
      <div className="container mx-auto px-5 md:px-20">
        <Separator className="mb-12" />

        <div className="flex flex-col md:flex-row justify-between">
          {/* Site name and social icons */}
          <div className="mb-8 md:mb-0">
            <h2 className="font-subheading font-[number:var(--subheading-font-weight)] text-black text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              Site name
            </h2>

            <div className="flex items-start gap-2 mt-16">
              {socialIcons.map((icon) => (
                <div key={icon.id} className="relative w-10 h-10 rounded">
                  <div className="relative w-6 h-6 top-2 left-2">
                    <img
                      className={`absolute ${
                        icon.id === 3
                          ? "w-5 h-3.5 top-[5px] left-0.5"
                          : icon.id === 2
                            ? "w-[18px] h-[18px] top-[3px] left-[3px]"
                            : "w-5 h-5 top-0.5 left-0.5"
                      }`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="flex flex-wrap justify-end gap-8 md:gap-8">
            {navigationColumns.map((column) => (
              <div
                key={column.id}
                className="flex flex-col items-end justify-center gap-6 w-full md:w-auto min-w-[187px]"
              >
                <h3 className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                  {column.topic}
                </h3>

                {column.pages.map((page, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                  >
                    {page}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
