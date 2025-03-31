import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TextByAnima = (): JSX.Element => {
  // Data for the text blocks to enable mapping
  const textBlocks = [
    {
      id: 1,
      subheading: "Subheading",
      bodyText:
        "Body text for whatever you'd like to expand on the main point.",
    },
    {
      id: 2,
      subheading: "Subheading",
      bodyText:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.",
    },
    {
      id: 3,
      subheading: "Subheading",
      bodyText:
        "Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-full max-w-[516px]">
      {textBlocks.map((block) => (
        <Card key={block.id} className="border-none shadow-none">
          <CardContent className="flex flex-col items-start justify-center gap-2 p-0">
            <h3 className="font-medium text-black text-2xl leading-9 font-['Inter',Helvetica] w-full">
              {block.subheading}
            </h3>
            <p className="font-normal text-[#828282] text-2xl leading-9 font-['Inter',Helvetica] w-full">
              {block.bodyText}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
