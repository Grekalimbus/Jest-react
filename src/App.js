import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);
  return (
    <div>
      {toggle === true && <div data-testid="toggle-elem">Toggle</div>}
      {data && <div style={{ color: 'red' }}>Data</div>}
      <h1>Hello World</h1>
      <h2 data-testid="value-elem">{value}</h2>
      <button data-testid="toggle-btn" onClick={onClick}>
        Click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value"
        value={value}
      ></input>
    </div>
  );
}

export default App;
