import { useSelector } from "react-redux";

import { AppButton } from "@/shared/ui/AppButton";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
interface CounterProps {}
{
  /* eslint-disable  i18next/no-literal-string*/
}
import { counterActions } from "../model/slices/counterSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const Counter = (props: CounterProps) => {
  const {} = props;
  const counterValue = useSelector(getCounterValue);

  const dispatch = useAppDispatch();
  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">
        value={counterValue}
      </h1>
      <AppButton
        data-testid="increment-btn"
        onClick={incrementCounter}
      >
        increment
      </AppButton>
      <AppButton
        data-testid="decrement-btn"
        onClick={decrementCounter}
      >
        decrement
      </AppButton>
    </div>
  );
};
