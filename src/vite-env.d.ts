/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_AUTHOR: string
  readonly VITE_APP_URI: string
  readonly VITE_APP_CLIENT_ID
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}