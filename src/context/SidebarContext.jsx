import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
