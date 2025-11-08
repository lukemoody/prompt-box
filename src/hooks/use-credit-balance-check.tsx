import React from "react";

export const useCreditBalanceCheck = ({
  balance,
  creditCost,
}: {
  creditCost: number;
  balance: number;
}) => {
  const [creditsAvailable, setCreditsAvailable] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (creditCost > balance) {
      setCreditsAvailable(false);
    } else {
      setCreditsAvailable(true);
    }
  }, [balance, creditCost]);

  return creditsAvailable;
};
