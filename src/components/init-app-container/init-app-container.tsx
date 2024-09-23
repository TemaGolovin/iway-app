import { FC, ReactNode, useEffect } from "react";

import { useAppDispatch } from "@/store";
import { setUserToken } from "@/store/slices";

interface InitAppContainerProps {
  children: ReactNode
}

export const InitAppContainer: FC<InitAppContainerProps> = ({ children }) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setUserToken({ user: { token } }));
    }
  });

  return (
    <div>
      { children }
    </div>
  );
};
