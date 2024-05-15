import { useState, useEffect } from "react";
export default function Joke() {
  let [newJoke, setNewJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/jokes/random";

  let GenerateJoke = async () => {
    let response = await fetch(URL);
    let JsonResponse = await response.json();
    setNewJoke({
      setup: JsonResponse.setup,
      punchline: JsonResponse.punchline,
    });
  };

  useEffect(() => {
    GenerateJoke();
  }, []);

  return (
    <div className="h-screen w-full leading-6 flex justify-center items-center flex-col bg-skin-400 bg-red-50">
      <h1 className="font-bold uppercase text-2xl ">Hahaha... New Joke</h1>
	  <div className="m-10">

      <h2 className="font-semibold text-xl mb-1">{newJoke.setup}</h2>
      <h2 className="font-semibold text-xl">{newJoke.punchline}</h2>
	  </div>
	  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute h-3 w-3 rounded-full bg-red-400 ml-[70px] mt-1"></span>
  <span class="absolute  rounded-full h-3 w-3 bg-red-500 ml-[70px] mt-1"></span>

</span>
      <button onClick={GenerateJoke} className="bg-sky-500 p-2 w-[170px] rounded-full  transition-all ease-in-out duration-100  hover:bg-sky-400
	  ">Get Joke</button>
    </div>
  );
}
