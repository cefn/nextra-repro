import type { MetaRecord } from "nextra";

const standardTheme: MetaRecord[string] = {
  theme: {
    breadcrumb: false,
    collapsed: true,
  },
};

export default {
  "*": standardTheme,
} satisfies MetaRecord;
