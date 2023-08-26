import { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";


const Home = () => {
const [type, setType] = useState("video");
  return (
    <div className='w-screen p-10'>
          <ReactMediaRecorder
     {...type}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
        <div className="flex   w-full p-2 bg-gray-800 rounded   mb-2 justify-center items-center gap-4">
       <div className="flex  gap-4 w-40 p-2 rounded font-medium bg-white">
       <h4>Status : </h4>
       <p className="text-blue-600">{type}</p>
       </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={startRecording}>Start </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"  onClick={stopRecording}>Stop </button>

          <select  onChange ={(e)=> setType(e.target.value)} id="country" name="country" autocomplete="country-name" class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
              <option value={"video"}>video</option>
              <option value={"audio"}>audio</option>
              <option value={"screen"}>screen</option>
            </select>

        </div>
          <video  className='w-full ' src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
    </div>
  )
}

export default Home
