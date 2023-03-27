export type BuildMode = "production" | "development";
export interface BuildEnv {
  mode: BuildMode;
  port: number;
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
  PORT: number;
}
