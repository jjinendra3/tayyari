"use client";
import React, { useContext, useState } from "react";
import Context from "./ContextAPI";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
const Home: React.FC = () => {
  const [serverStatus, setServerStatus] = useState<string>("Server is asleep");
  const context = useContext(Context);
  const wakeServer = async () => {
    setServerStatus("Server waking Up");
    await context.wakeserver();
  };
  return (
    <Context.Provider value={context}>
      <div className="bg-white p-4">
        <div className="flex justify-between font-bold text-2xl">
          <h1>Tayyari Internship Assignment by Jinendra Jain</h1>
          <a href="https://github.com/jjinendra3/tayyari.git" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className=" min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {serverStatus}
          </h1>
          <Button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={wakeServer}
          >
            Wake up server
          </Button>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
