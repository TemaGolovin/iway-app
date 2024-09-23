import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

import styles from "./app.module.scss";
import { store } from "./store";
import { themeConfig } from "./lib";
import { router } from "./routes";

export const App = () => (
  <StoreProvider store={ store }>
    <ConfigProvider theme={ themeConfig }>
      <div className={ styles.app_container }>
        <RouterProvider router={ router } />
      </div>
    </ConfigProvider>
  </StoreProvider>
);
