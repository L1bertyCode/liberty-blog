import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack = (props: HStackProps) => {
  // const {  } = props;
  return (
  //@ts-ignore
    <Flex
      {...props}
      direction="row"
    />
  );
};
