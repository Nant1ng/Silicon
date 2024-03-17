import { createContext, useContext } from "react";

const FetchStore = createContext();

export const useFetchStore = () => useContext(FetchStore);

export const FetchStoreProvider = ({ children }) => {
  const getData = async (endpoint) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    return await res.json();
  };

  return (
    <FetchStore.Provider value={{ getData }}>{children}</FetchStore.Provider>
  );
};
