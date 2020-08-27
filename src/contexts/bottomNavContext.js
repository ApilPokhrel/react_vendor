import React, { createContext } from "react";

export const FootContext = createContext();

const FootContextProvider = ({ children }) => {
  const [isHome, setIsHome] = React.useState(true);
  const [isClaimed, setIsClaimed] = React.useState(false);
  const [isTransaction, setIsTransaction] = React.useState(false);
  const [isSetting, setIsSetting] = React.useState(false);

  return (
    <FootContext.Provider
      value={{
        isHome,
        setIsHome,
        isClaimed: isHome && isClaimed,
        setIsClaimed,
        setIsTransaction,
        isTransaction,
        isSetting,
        setIsSetting
      }}
    >
      {children}
    </FootContext.Provider>
  );
};

export default FootContextProvider;
