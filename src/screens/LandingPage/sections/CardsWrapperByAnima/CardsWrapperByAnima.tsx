import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CardsWrapperByAnima = (): JSX.Element => {
  const cardData = [
    {
      id: 1,
      imagePath: "..//image-4.png",
      subheading: "Subheading",
      bodyText:
        "Body text for whatever you'd like to add more to the subheading.",
    },
    {
      id: 2,
      imagePath: "/image-5.png",
      subheading: "Subheading",
      bodyText:
        "Body text for whatever you'd like to expand on the main point.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-8">
      {cardData.map((card) => (
        <Card key={card.id} className="flex-1 border-none">
          <CardContent className="p-0 flex flex-col items-start gap-8">
            <div
              className="relative w-full h-[341px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imagePath})` }}
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-medium text-black text-2xl leading-9">
                {card.subheading}
              </h3>
              <p className="font-normal text-[#828282] text-2xl leading-9">
                {card.bodyText}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
