import React from "react";
import { Button } from "../../../../components/ui/button";

export const SectionByAnima = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-5xl font-semibold tracking-[-0.96px] text-black font-['Inter',Helvetica]">
          Section heading
        </h2>

        <div className="flex items-center gap-6">
          <Button className="px-8 py-5 bg-black text-white rounded-lg shadow-button-shadow text-2xl font-medium leading-9 h-auto">
            Button
          </Button>

          <Button
            variant="outline"
            className="px-8 py-5 bg-[#e6e6e6] text-[#000000e6] rounded-lg shadow-button-shadow text-2xl font-medium leading-9 h-auto border-0"
          >
            Secondary button
          </Button>
        </div>
      </div>
    </section>
  );
};
