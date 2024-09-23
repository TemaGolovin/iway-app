import { theme, ThemeConfig } from "antd";

import { getCSSVariable } from "@/utils";

export const themeConfig: ThemeConfig ={
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: getCSSVariable("--primary"),
    colorBgBase: getCSSVariable("--base-200"),
    colorTextBase: "#fff",
    colorText: getCSSVariable("--neutral"),
    colorBgContainer: getCSSVariable("--base-300"),
    colorSuccess: getCSSVariable("--success"),
    colorError: getCSSVariable("--error"),
    colorWarning:  getCSSVariable("--warning"),
    colorInfo: getCSSVariable("--info"),
    controlOutlineWidth: 0,
  },
};
