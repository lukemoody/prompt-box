import React from "react";

export const useCredits = (imgQty: number) => {
  const [creditCost, setCreditCost] = React.useState<number>(0);

  React.useEffect(() => {
    let credits: number;

    switch (imgQty) {
      case 1:
        credits = 3;
        break;
      case 2:
        credits = 6;
        break;
      case 3:
        credits = 9;
        break;
      case 4:
        credits = 12;
        break;
      case 5:
        credits = 15;
        break;
      default:
        credits = 15; // Fallback inline with promptImgQty default.
        break;
    }
    setCreditCost(credits);
  }, [imgQty]);

  return creditCost;
};
