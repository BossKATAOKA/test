import React from "react";
import { Button } from "../../components/ui/button";
import { CardsByAnima } from "./sections/CardsByAnima";
import { CardsWrapperByAnima } from "./sections/CardsWrapperByAnima";
import { CopyByAnima } from "./sections/CopyByAnima";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { NavigationByAnima } from "./sections/NavigationByAnima";
import { NavigationFooterByAnima } from "./sections/NavigationFooterByAnima";
import { SectionByAnima } from "./sections/SectionByAnima/SectionByAnima";
import { TextByAnima } from "./sections/TextByAnima";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px]">
        {/* Navigation */}
        <NavigationByAnima />

        {/* Hero Section */}
        <div className="w-full px-20 mt-[80px]">
          <div
            className="w-full h-[640px] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url(..//hero-image.png)" }}
          />
        </div>

        {/* First Section */}
        <section className="w-full px-20 mt-[149px]">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] mb-8">
            Section heading
          </h2>
          <FrameByAnima />
        </section>

        {/* Second Section */}
        <section className="w-full px-20 mt-[149px] flex flex-col">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] mb-8">
            Section heading
          </h2>
          <div className="flex flex-row">
            <div className="flex-1">
              <TextByAnima />
              <div className="flex items-center gap-4 mt-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-2xl py-3 px-6 rounded-lg shadow-button-shadow"
                >
                  Button
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-2xl py-3 px-6 rounded-lg shadow-button-shadow bg-[#e6e6e6] text-black"
                >
                  Secondary button
                </Button>
              </div>
            </div>
            <div
              className="w-[704px] h-[704px] rounded-[8px_0px_0px_8px] bg-cover bg-center"
              style={{ backgroundImage: "url(..//image.png)" }}
            />
          </div>
        </section>

        {/* Third Section */}
        <section className="w-full px-20 mt-[149px]">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] mb-8">
            Section heading
          </h2>
          <SectionByAnima />
        </section>

        {/* Fourth Section */}
        <section className="w-full px-20 mt-[149px]">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] mb-8">
            Section heading
          </h2>
          <CardsWrapperByAnima />
        </section>

        {/* Cards Section */}
        <CardsByAnima />

        {/* Copy Section */}
        <CopyByAnima />

        {/* Footer */}
        <NavigationFooterByAnima />
      </div>
    </div>
  );
};
