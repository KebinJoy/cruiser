import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type AppContextFields = {
  state?: any;
  setState?: Dispatch<SetStateAction<any>>;
};

export const AppContext = createContext<AppContextFields>({});

export const useAppContext = () => {
  return useContext(AppContext);
};
