import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      return (
        <div>
          <h2 style={{ color: 'crimson' }}>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <p style={{ color: 'red' }}>{error && error.toString()}</p>
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
