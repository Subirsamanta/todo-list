"use client";
import React, { useState } from "react";

const page = () => {
  const [tusk, settusk] = useState("");
  const [desc, setdesc] = useState("");
  const [displayTask, setdisplayTask] = useState([]);
  const submitHandaler = (e) => {
    e.preventDefault();
    // console.log(tusk);
    // console.log(desc);
    setdisplayTask([...displayTask, { tusk, desc }]);
    settusk("");
    setdesc("");
    console.log(displayTask);
  };
  const deletHandler = (i) => {
    let copytask = [...displayTask];
    copytask.splice(i, 1);
    setdisplayTask(copytask);
  };
  let renderTask = <h2>No task available</h2>;
  if (displayTask.length > 0) {
    renderTask = displayTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-1/2">
            <h3 className="text-2xl font-semibold">{t.tusk}</h3>
            <h5 className="text-xl font-semibold">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deletHandler(i);
            }}
            className="bg-red-600 text-white rounded font-bold p-2 mb-4"
          >
            {" "}
            Delet
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-4 text-5xl font-bold text-center">
        TODO LIST
      </h1>

      <form onSubmit={submitHandaler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
          placeholder="Enter your tusk"
          value={tusk}
          onChange={(e) => {
            // console.log(e.target.value);
            settusk(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white py-2 px-4 rounded">
          Add Tusk
        </button>
      </form>
      <div className="p-8 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
