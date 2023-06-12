import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack = (props: HStackProps) => {
  // const {  } = props;
  //@ts-ignore
  return <Flex {...props} direction="row" />;
};
