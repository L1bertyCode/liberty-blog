declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

// declare module "*.svg" {
//   const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
//   const content: string;

//   export { SVG };
//   export default content;
// }
declare module "*.svg" {
  import React from "react";
  const SVG: React.FunctionComponent<
    React.SVGProps<SVGElement>
  >;
  export default SVG;
}

declare const __IS__DEV__: boolean;
declare const __API__: string;
// type DeepPartial<T> = T extends object
//   ? {
//       [P in keyof T]?: DeepPartial<T[P]>;
//     }
//   : T;
