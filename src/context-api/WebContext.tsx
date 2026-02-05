"use client";
import { createContext, useContext, useState } from "react";

interface WebContextProps {
  current: number;
  roomCurrent?: number;
  total: number;
  roomTotal?: number;
  setCurrent: (value: number) => void;
  setRoomCurrent: (value: number) => void;
  setTotal: (value: number) => void;
  setRoomTotal: (value: number) => void;
}

export const WebContext = createContext<WebContextProps>({
  current: 1,
  roomCurrent: 1,
  total: 0,
  roomTotal: 0,
  setCurrent: () => {},
  setRoomCurrent: () => {},
  setTotal: () => {},
  setRoomTotal: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider: React.FC<WebProviderProps> = ({ children }) => {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [roomCurrent, setRoomCurrent] = useState(1);
  const [roomTotal, setRoomTotal] = useState(0);
  return (
    <WebContext.Provider
      value={{
        current,
        total,
        setCurrent,
        setTotal,
        roomCurrent,
        roomTotal,
        setRoomCurrent,
        setRoomTotal,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};
