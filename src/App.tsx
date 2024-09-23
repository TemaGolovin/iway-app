import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

import styles from "./app.module.scss";
import { store } from "./store";
import { themeConfig } from "./lib";
import { router } from "./routes";
import { InitAppContainer } from "./components";

export const App = () => {

  return (
    <StoreProvider store={ store }>
      <ConfigProvider theme={ themeConfig }>
        <div className={ styles.app_container }>
          <InitAppContainer>
            <RouterProvider router={ router } />
          </InitAppContainer>
        </div>
      </ConfigProvider>
    </StoreProvider>
  );};
