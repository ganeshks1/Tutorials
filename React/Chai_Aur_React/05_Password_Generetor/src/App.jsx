import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { use } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passCopyReference = useRef(null);

  //password generator functionality
  const passGenerator = useCallback(() => {
    let pass = "";

    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) string += "1234567890";
    if (char) string += "~!@#$%^&*()_+{}|:>?[],./`";

    for (let i = 1; i <= length; i++) {
      let temp = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(temp);
    }

    setPassword(pass);
  }, [length, num, char, setPassword]);

  //password generator execution functionality
  useEffect(() => {
    passGenerator();
  }, [length, num, char, passGenerator]);

  //password copy functionality
  const copyPasswordToClip = useCallback(() => {
    passCopyReference.current?.select(); //to select input filed content
    passCopyReference.current?.setSelectionRange(0,20) // to select specific place of content
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passCopyReference}
          />
          <button
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClip}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="NumberImput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="CharacterImput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Charecter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
