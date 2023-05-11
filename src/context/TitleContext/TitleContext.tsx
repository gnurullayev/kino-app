import { createContext, useState, ReactNode } from "react";
interface IData {
  title: string;
  url: string;
}

export interface ValueType extends IData {
  changeTitle: (a: IData) => void;
}

interface IProps {
  children: ReactNode;
}

export const TitleContext = createContext<ValueType>({
  title: "",
  changeTitle: (a: IData): void => {},
  url: "",
});

const TitleContextProvider = ({ children }: IProps) => {
  const [data, setData] = useState<IData>({ title: "", url: "" });
  const changeTitle = (value: IData): void => {
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
