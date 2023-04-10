import { useDispatch, useSelector } from "react-redux";

import { AppButton } from "7shared/ui/AppButton/AppButton";
import { counterActions } from "../model/slices/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {}
{
  /* eslint-disable  i18next/no-literal-string*/
}

export const Counter = (props: CounterProps) => {
  const {} = props;
  const counterValue = useSelector(getCounterValue);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment);
  };
  const decrement = () => {
    dispatch(counterActions.decrement);
  };
  return (
    <div>
      <h1>value={counterValue}</h1>
      <AppButton onClick={increment}>increment</AppButton>
      <AppButton onClick={decrement}>decrement</AppButton>
    </div>
  );
};
