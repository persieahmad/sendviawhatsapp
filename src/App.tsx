import React from 'react';
import './App.css';
import { device } from './device';
import { numberCodes } from './numberCodes';

function App() {
  const [number, setNumber] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('+91');

  function redirectToWhatsapp() {
    window.location.replace(`https://api.whatsapp.com/send?phone=${code + number}&text=${text}`);
  }

  function sendMessage() {
    if (number?.trim().length === 10 && text?.trim().length > 0) {
      redirectToWhatsapp();
    } else if (number?.trim().length < 10) {
      alert('Please enter a valid number');
    } else if (text?.trim().length === 0) {
      alert('Please enter a message');
    }
  }

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'beige',
        margin: device().isDesktop ? '7%' : '1%',
        padding: device().isDesktop ? '8%' : '5%',
        marginTop: device().isMobile ? '30%' : '7%',
      }}>
      <h1>Send Whatsapp Message To Any Valid Number</h1>
      <label>Number : </label>
      <br />
      <select
        style={{ height: 20, width: 120 }}
        value={code}
        onChange={(e) => setCode(e.target.value)}>
        {numberCodes.map(({ name, dial_code, code }: any) => {
          return (
            <option key={name} value={dial_code}>
              {name} ({dial_code})
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={number}
        size={20}
        maxLength={10}
        minLength={10}
        onChange={(e: any) => {
          !isNaN(e.target.value) && setNumber(e.target.value);
        }}
      />
      <br />
      <label>Message : </label>
      <br />
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} cols={35} />
      <br />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
