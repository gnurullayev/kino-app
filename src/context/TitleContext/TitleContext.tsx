import { createContext, useState, ReactNode } from "react";
export interface ITitleContextData {
  title: string;
  url: string | number | null;
}

export interface ValueType extends ITitleContextData {
  changeTitle: (a: ITitleContextData) => void;
}

interface IProps {
  children: ReactNode;
}

export const TitleContext = createContext<ValueType>({
  title: "",
  changeTitle: (a: ITitleContextData): void => {},
  url: "",
});

const TitleContextProvider = ({ children }: IProps) => {
  const [data, setData] = useState<ITitleContextData>({ title: "", url: "" });
  const changeTitle = (value: ITitleContextData): void => {
    setData(value);
  };

  const value: ValueType = {
    title: data.title,
    url: data.url,
    changeTitle,
  };
  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
};

export default TitleContextProvider;
