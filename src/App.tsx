import React from 'react';
import { Button } from "antd";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button type="primary">1234</Button>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
