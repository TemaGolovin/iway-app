import { Provider as StoreProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, DatePicker, theme } from "antd";

import styles from "./app.module.scss";
import { store } from "./store";
import { getCSSVariable } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <DatePicker />
      </div>
    ),
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
]);

export const App = () => (
  <StoreProvider store={ store }>
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: getCSSVariable("--primary"),
        colorBgBase: getCSSVariable("--base-200"),
        colorTextBase: "#fff",
        colorBgContainer: getCSSVariable("--base-300"),
        colorSuccess: getCSSVariable("--success"),
        colorError: getCSSVariable("--error"),
        colorWarning:  getCSSVariable("--warning"),
        colorInfo: getCSSVariable("--info"),
      }
    }}>
      <div className={ styles.app_container }>
        <RouterProvider router={ router } />
      </div>
    </ConfigProvider>
  </StoreProvider>

);
