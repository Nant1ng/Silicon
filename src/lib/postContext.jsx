import { createContext, useContext } from "react";

const PostStore = createContext();

export const usePostStore = () => useContext(PostStore);

export const PostStoreProvider = ({ children }) => {
  const postData = async (endpoint, body = undefined) => {
    const config =
      body !== undefined
        ? {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(body),
          }
        : { method: "post" };
    const res = await fetch(`${API_BASE_URL}${endpoint}`, config);

    return res;
  };

  return (
    <PostStore.Provider value={{ postData }}>{children}</PostStore.Provider>
  );
};
