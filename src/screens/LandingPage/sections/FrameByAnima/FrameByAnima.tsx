import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  // Data for the cards to enable mapping
  const cardData = [
    {
      id: 1,
      image: "..//image-1.png",
      title: "Subheading",
      description:
        "Body text for whatever you'd like to add more to the subheading.",
    },
    {
      id: 2,
      image: "..//image-2.png",
      title: "Subheading",
      description:
        "Body text for whatever you'd like to expand on the main point.",
    },
    {
      id: 3,
      image: "..//image-3.png",
      title: "Subheading",
      description: "Body text for whatever you'd like to share more.",
    },
  ];

  return (
    <section className="flex flex-wrap w-full items-center gap-8 py-12 px-20">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="flex-1 min-w-[300px] border-none shadow-none"
        >
          <CardContent className="flex flex-col items-start gap-6 p-0">
            <div
              className="relative w-full h-[405px] rounded-lg"
              style={{ background: `url(${card.image}) 50% 50% / cover` }}
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="self-stretch mt-[-1.00px] font-medium text-black text-2xl leading-9">
                {card.title}
              </h3>
              <p className="self-stretch font-normal text-[#828282] text-2xl leading-9">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
