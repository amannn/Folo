import { defineConfig } from "@eloqnt/cli"

export default defineConfig({
  messages: {
    path: ["./locales/{namespace}/{locale}", "./locales/mobile/{namespace}/{locale}"],
    locales: "infer",
    sourceLocale: "en",
    format: { codec: "@eloqnt/format-i18next-json", extension: ".json" },
  },
})
