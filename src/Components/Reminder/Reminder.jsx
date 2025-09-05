import "./Reminder.css";
import song1 from "/assets/images/song1.jfif";
import song2 from "/assets/images/song2.jpg";
import music1 from "../../../public/music/AKyinNarNya.mp3";
import music2 from "../../../public/music/EainPyanChain.mp3";
import {
  IoPlayBack,
  IoPlayCircleOutline,
  IoPlayForward,
  IoPauseCircleOutline,
} from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";

export default function Reminder() {
  const audio1 = useRef(null);
  const audio2 = useRef(null);
  const [isPlaying, setIsPlaying] = useState({ music1: false, music2: false });

  const [track1, setTrack1] = useState({ current: 0, duration: 0 });
  const [track2, setTrack2] = useState({ current: 0, duration: 0 });

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  //solution2
  const handlePlayClick1 = () => {
    if (isPlaying.music1) {
      audio1.current.pause();
    } else {
      audio2.current.pause();
      audio1.current.play();
    }
    setIsPlaying({ music1: !isPlaying.music1, music2: false });
  };

  const handlePlayClick2 = () => {
    if (isPlaying.music2) {
      audio2.current.pause();
    } else {
      audio1.current.pause();
      audio2.current.play();
    }
    setIsPlaying({ music1: false, music2: !isPlaying.music2 });
  };

  return (
    <div className="p-14 font-burmese">
      <h1 className="text-5xl font-extrabold text-center ">
        Daily Reminder For Ko Ko
      </h1>
      <div className="ReminderListContainer px-40">
        <ul className="ReminderList py-15 px-10 m-auto w-full text-xl ">
          <li className="Reminder hover:scale-105 transition duration-300 ease-in-out bg-linear-to-bl from-white/30 bg-transparent backdrop-blur-2xl to-white/80  odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            😉 | Everyday is a blessing so stay happy
          </li>
          <li className="Reminder hover:scale-105 transition duration-300 ease-in-out bg-linear-to-tr from-white/30 bg-transparent backdrop-blur-2xl to-white/80 odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            Eat healthy food regularly even if you'are busy | 😋
          </li>
          <li className="Reminder hover:scale-105 transition duration-300 ease-in-out bg-linear-to-bl from-white/30 bg-transparent backdrop-blur-2xl to-white/80  odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            💦 | Don't forget to drink water
          </li>
          <li className="Reminder hover:scale-105 transition duration-300 ease-in-out bg-linear-to-tr from-white/30 bg-transparent backdrop-blur-2xl to-white/80 odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            One step at a time will take to your final goal | 🏆
          </li>
          <li className="Reminder hover:scale-105 transition duration-300 ease-in-out bg-linear-to-bl from-white/30 bg-transparent backdrop-blur-2xl to-white/80  odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            😎 | Hard Work + Dream + Dedication = Success
          </li>
          {/* <li className="reaminder odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            When you are tired, remember you have my shoulders to lend
          </li>
          <li className="Reminder bg-linear-to-bl from-white/30 bg-transparent backdrop-blur-2xl to-white/80  odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            Tell me everything! I want to hear every beans you faced
          </li>
          <li className="Reminder odd:text-left even:text-right px-12 py-2 odd:border-l-2 even:border-r-2 mb-5 rounded-lg border-b-2 ">
            Last, bear in mind to love me every single breath
          </li> */}
        </ul>
      </div>

      <div className="SongContainer">
        <h2 className="songTitle text-3xl font-extrabold text-center mb-5">
          Songs that remind me of u
        </h2>

        <div className="Songs flex justify-center mb-25">
          <div className="songBox rounded-2xl text-center p-10 bg-amber-200 mr-5">
            <img src={song1} alt="" className="song w-60 h-60 bg-cover mb-4" />

            {/* Track bar */}
            <div className="mt-3 w-60">
              <input
                type="range"
                min="0"
                max={track1.duration}
                value={track1.current}
                onChange={(e) => {
                  audio1.current.currentTime = e.target.value;
                  setTrack1({ ...track1, current: e.target.value });
                }}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-sm">
                <span>{formatTime(track1.current)}</span>
                <span>{formatTime(track1.duration)}</span>
              </div>
            </div>

            <audio
              src={music1}
              ref={audio1}
              onTimeUpdate={() =>
                setTrack1({
                  ...track1,
                  current: audio1.current.currentTime,
                })
              }
              onLoadedMetadata={() =>
                setTrack1({
                  ...track1,
                  duration: audio1.current.duration,
                })
              }
            ></audio>

            <span className="songControl flex justify-evenly items-center ">
              <IoPlayBack className="text-2xl text-gray-700" />
              <button className="playBtn" onClick={handlePlayClick1}>
                {isPlaying.music1 ? (
                  <IoPauseCircleOutline className="text-5xl cursor-pointer" />
                ) : (
                  <IoPlayCircleOutline className="text-5xl cursor-pointer" />
                )}
              </button>
              <IoPlayForward className="text-2xl text-gray-700" />
            </span>
          </div>

          <div className="songBox rounded-2xl text-center p-10 bg-amber-200">
            <img src={song2} alt="" className="song w-60 h-60 bg-cover mb-4" />

            {/* Track bar */}
            <div className="mt-3 w-60">
              <input
                type="range"
                min="0"
                max={track2.duration}
                value={track2.current}
                onChange={(e) => {
                  audio2.current.currentTime = e.target.value;
                  setTrack2({ ...track2, current: e.target.value });
                }}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-sm">
                <span>{formatTime(track2.current)}</span>
                <span>{formatTime(track2.duration)}</span>
              </div>
            </div>

            <audio
              src={music2}
              ref={audio2}
              onTimeUpdate={() =>
                setTrack2({
                  ...track2,
                  current: audio2.current.currentTime,
                })
              }
              onLoadedMetadata={() =>
                setTrack2({
                  ...track2,
                  duration: audio2.current.duration,
                })
              }
            ></audio>
            <span className="songControl flex justify-evenly items-center ">
              <IoPlayBack className="text-2xl text-gray-700" />
              <button className="playBtn" onClick={handlePlayClick2}>
                {isPlaying.music2 ? (
                  <IoPauseCircleOutline className="text-5xl cursor-pointer" />
                ) : (
                  <IoPlayCircleOutline className="text-5xl cursor-pointer" />
                )}
              </button>
              <IoPlayForward className="text-2xl text-gray-700" />
            </span>
          </div>
        </div>
      </div>

      <div className="PageArrows flex justify-between items-center -mt-12">
        <Link to="/wishing">
          <span className="leftArrow cursor-pointer ">
            <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
        <Link to="/logout">
          <span className="rightArrow cursor-pointer">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
