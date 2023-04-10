import { useDispatch, useSelector } from "react-redux";

import { AppButton } from "7shared/ui/AppButton/AppButton";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
// import { counterActions } from "../model/slices/counterSlice";
interface CounterProps {}
{
  /* eslint-disable  i18next/no-literal-string*/
}
import { increment, decrement } from "../model/slices/counterSlice";

export const Counter = (props: CounterProps) => {
  const {} = props;
  const counterValue = useSelector(getCounterValue);

  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>value={counterValue}</h1>
      <AppButton onClick={incrementCounter}>increment</AppButton>
      <AppButton onClick={decrementCounter}>decrement</AppButton>
    </div>
  );
};
