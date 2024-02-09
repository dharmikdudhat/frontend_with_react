import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberallow, setNumberAllow] = useState(false);
  const [charallow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //ref variable
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += "0123456789";
    if (charallow) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallow, charallow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator(length);
  }, [length, numberallow, charallow, passwordGenerator]);
  return (
    <>
      <div className="w-500px max-w-lg items-center mx-auto px-4 my-8 text-red-700 bg-gray-800 rounded-lg">
        <h1 className="text-4xl text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5 ">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 outline-none  "
            placeholder="passowrd"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="cursor-copy text-center bg-blue-400 hover:bg-blue-700 px-4"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mb-4 ml-7 items-center">
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={numberallow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
