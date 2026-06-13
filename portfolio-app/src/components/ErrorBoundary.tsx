import { Component, type ReactNode } from "react"

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h2>Widget Unavailable</h2>
          <p>Something went wrong</p>
          <p>but the rest of the app is still working.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary