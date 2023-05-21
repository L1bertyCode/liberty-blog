export interface SidebarItemInterface {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
}
