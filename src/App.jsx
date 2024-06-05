import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);


  async function fetchButton(count) {
    const response = await fetch(
      `https://meowfacts.herokuapp.com/?count=${count}`
    );
    const fact = await response.json();
    const data = fact.data;
    setData(data);
    // data.forEach((element) => {
    //   console.log(element);
    // });
  }

  return (
    <div className="min-h-screen w-full bg-gray-400 flex flex-col justify-center items-center p-4">
  <div className="w-full max-w-2xl flex flex-wrap justify-center mb-4">
    <div className="w-3/5 sm:w-1/2 md:w-1/4 px-2 py-2 flex flex-col">
      <label>Count of cat facts:</label>
      <input
        className="px-2 py-1 rounded-md"
        type="number"
        id="count"
        name="count"
        required
        defaultValue={1}
        min={1}
        max={5}
        autoComplete="off"
        onChange={(e) => setCount(e.target.value)}
      />
    </div>

    <div className="w-1/3 sm:w-1/2 md:w-1/5 px-2 py-4">
      <button
        type="button"
        className="bg-green-500 w-full h-full rounded-md hover:bg-green-700 hover:text-white"
        onClick={() => fetchButton(count)}
      >
        Fetch
      </button>
    </div>
  </div>
  <div className="w-full max-w-3xl bg-blue-100 rounded-md p-4 overflow-y-auto h-96">
    {data &&
      data.map((item, index) => (
        <div key={index} className="mb-2">
          <p>
            {index + 1}. {item}
          </p>
        </div>
      ))}
  </div>
</div>

  );
}

export default App;
