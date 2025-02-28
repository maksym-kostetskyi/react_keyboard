import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleKeypress(e: KeyboardEvent) {
    this.setState({ pressedKey: e.key });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', (e: KeyboardEvent) =>
      this.handleKeypress(e),
    );
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (e: KeyboardEvent) =>
      this.handleKeypress(e),
    );
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
