import { PageError } from "widgets/PageError";
import React, {
  ErrorInfo,
  ReactNode,
  Suspense,
} from "react";

interface ErrorBoundryProps {
  children: ReactNode;
}
interface ErrorBoundryState {
  hasError: ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}
