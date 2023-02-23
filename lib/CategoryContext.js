import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [category, setCategory] = useState("All Category");
  const [value, setValue] = useState("allcategory");
  return (
    <MyContext.Provider value={{ category, setCategory, value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
