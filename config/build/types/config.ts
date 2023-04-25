export type BuildMode = "production" | "development";
export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}
export interface BuildPaths {
  entry: string;
  buildDev: string;
  buildProd: string;
  html: string;
  favicon: string;
  src: string;
}
export interface BuildOptions {
  buildMode: BuildMode;
  buildPaths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest";
}
