import { useSelector } from "react-redux";

import { AppButton } from "@/shared/ui/deprecated/AppButton";
import {
  getCounterValue,
  useCounterValue,
} from "../model/selectors/getCounterValue/getCounterValue";
interface CounterProps {}
{
  /* eslint-disable  i18next/no-literal-string*/
}
import {
  counterActions,
  useCounterActions,
} from "../model/slices/counterSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const Counter = (props: CounterProps) => {
  const {} = props;
  const counterValue = useCounterValue();
  const { addSome, decrement, increment } = useCounterActions();

  const dispatch = useAppDispatch();
  const incrementCounter = () => {
    increment();
  };
  const decrementCounter = () => {
    decrement();
  };
  const addSomeCounter = () => {
    addSome(5);
  };
  return (
    <div>
      <h1 data-testid="value-title">value={counterValue}</h1>
      <AppButton
        data-testid="increment-btn"
        onClick={incrementCounter}>
        increment
      </AppButton>
      <AppButton
        data-testid="decrement-btn"
        onClick={decrementCounter}>
        decrement
      </AppButton>{" "}
      <AppButton
        data-testid="addSomeCounter-btn"
        onClick={addSomeCounter}>
        addSome
      </AppButton>
    </div>
  );
};
