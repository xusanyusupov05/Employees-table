import { ConfigProvider } from "antd";
import '../theme.css'

const AntdConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: { controlHeight: 40, borderRadius: 999 },
          Input: { controlHeight: 40, borderRadius: 999 },
          Button: { controlHeight: 40, borderRadius: 999 },

          Table: {
            cellPaddingBlock: 8,
            rowHoverBg: "var(--sds-color-table-hover-tertiary)",
            rowExpandedBg: "var(--sds-color-table-hover-tertiary)",
            rowSelectedHoverBg: "var(--sds-color-table-hover-tertiary)",
          },

          Pagination: {
            itemActiveColor: "var(--sds-color-text-default-default)",
          },

          Checkbox: {
                colorBorder: "var(--sds-color-border-brand-tertiary)",
                colorPrimary: "var(--sds-color-border-brand-tertiary)",
                colorPrimaryHover: "var(--sds-color-border-brand-tertiary)",
                borderRadius: 4,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfig;
