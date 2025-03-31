import React from "react";
import { Button } from "../../../../components/ui/button";

export const CopyByAnima = (): JSX.Element => {
  return (
    <section className="w-full max-w-[844px] gap-10 flex flex-col items-start py-12">
      <div className="flex flex-col items-start gap-6 w-full">
        <h1 className="font-['Inter',Helvetica] font-bold text-black text-[64px] tracking-[-1.28px] leading-tight">
          Landing page title
        </h1>

        <p className="font-subheading font-[number:var(--subheading-font-weight)] text-[#000000bf] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep scrolling.
        </p>
      </div>

      <Button className="px-8 py-5 bg-black rounded-lg shadow-button-shadow font-['Inter',Helvetica] font-medium text-white text-2xl leading-9 h-auto">
        Button
      </Button>
    </section>
  );
};
