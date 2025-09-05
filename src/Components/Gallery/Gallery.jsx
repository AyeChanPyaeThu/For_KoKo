import "./Gallery.css";
import ko1 from "/assets/images/koko1.jpg";
import ko2 from "/assets/images/koko2.jpg";
import ko3 from "/assets/images/koko3.jpg";
import ko4 from "/assets/images/koko4.jpg";
import ko5 from "/assets/images/koko5.jpg";
import ko6 from "/assets/images/koko6.jpg";
import ko7 from "/assets/images/koko7.jpg";
import ko8 from "/assets/images/koko8.jpg";
import ko9 from "/assets/images/koko9.jpg";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiPartyHat } from "react-icons/gi";

export default function Gallery() {
  const [message, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    let msg = "";

    switch (id) {
      case 1:
        msg =
          "သဲကိုကို ဆွဲဆောင်မှုအပြည့်ပဲ။ ဒီပုံမြင်မြင်ချင်း ရင်ခွင်ထဲ ချက်ချင်းတိုးဝင်ချင်စိတ်တွေ တဖွားဖွားပေါ်လာတာ";
        break;

      case 2:
        msg =
          "မရင်းနှီးခင်ကတည်းက friend suggestions မှာ ခဏခဏတွေ့ပြီး ရင်ခုန်ခဲ့ရတဲ့ ပုံလေး။ အဲ့တည်းက မိုက်လိုက်တဲ့ body";
        break;

      case 3:
        msg =
          "snap shot မှာလည်း သဘာဝဆန်ဆန်လေးကို ချောနေတာ။ အဲ့လိုအပြုံးတွေကြောင့် တခြားကောင်မလေးတွေရှေ့ ရယ်မှာ ပြုံးမှာ တအားစိုးရိမ်တာပဲ။";
        break;

      case 4:
        msg = "စတိုင်မိုက်တယ်။ ဒါမျိုးက သဲအကြိုက် gentleman type ";
        break;

      case 5:
        msg =
          "ဒီငါးပြတိုက်ရောက်တော့ သဲကို သတိရတယ်မလား။ သဲနဲ့လည်း ထပ်သွားမယ်နော်။ coming very soon..";
        break;

      case 6:
        msg =
          "သဲမကြိုက်တာ အဲ့အပြုံးတွေပေါ့။ မြင်တာနဲ့ ရင်ခုန်ရတယ်။ တခြားသူတွေကို ပြုံးပြမှာ သိပ်စိုးရိမ်တာပဲ။ တည်တည်ငြိမ်ငြိမ်ပြုံးတာကိုက ဆွဲဆောင်မှုအပြည့်။ သဲက ကိုကို team မို့လို့လားမသိဘူး တည်ငြိမ်ရင့်ကျက်တဲ့ပုံစံဆို အရမ်းကြွေ ";
        break;

      case 7:
        msg =
          "capital ဒိတ်မှာ ရိုက်ခဲ့တဲ့ ပုံလေး။ သဲကိုကိုလေ ဘယ်လိုနေနေကို ချောနေရော။ စတိုင်မလိုင်အပြည့်နဲ့။ ကြွေလိုက်တာဆိုတာ";
        break;

      case 8:
        msg =
          "သဲမဟုတ်တဲ့ တခြားတယောက်နဲ့ ရိုက်တဲ့ပုံ။ တခြားကောင်မလေးရိုက်ပေးတာကို ပြုံးပြီး အိုက်တင်ပေးနေလိုက်တာများ အမြင်ကပ်စရာ။ အတော်ကျေနပ်နေပုံပဲ";
        break;

      case 9:
        msg =
          "အဲ့တုန်းက အိပ်နေတာ နှစ်နှစ်ခြိုက်ခြိုက်ပဲ။ နေမကောင်းချင်တာတောင် သဲဆီ လာတွေ့တာ။ ချစ်ဖို့ကောင်းလိုက်တာ သဲအမြတ်နိုးရဆုံး သဲကိုပဲ အမြဲဦးတည်ကြည့်နေတဲ့ မျက်လုံးလေးတွေပေါ့။ ခုတော့ အိပ်နေလို့ မှိတ်ထားတယ်";
        break;

      default:
        msg = "You've clicked out of range but still I love u!";
    }

    setMsg(msg);
    setShow(true);
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <h3 className="text-5xl text-center mb-4 font-burmese font-extrabold mr-25">
          <span className="text-8xl">🎉</span> Happy Birthday Ko Ko
        </h3>
        {/* <GiPartyHat className="text-8xl text-pink-600" /> */}
      </div>
      <h3 className="text-5xl text-center mb-3 font-burmese font-extrabold">
        Here's my handsome man <span className="text-6xl">😎</span>
      </h3>

      <div className="galleryWholeContainer flex flex-row p-10">
        <div className="galleryColOne flex flex-col p-3">
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko1} alt="" onClick={() => handleClick(1)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko9} alt="" onClick={() => handleClick(9)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko3} alt="" onClick={() => handleClick(3)} />
          </div>
        </div>

        <div className="galleryColTwo flex flex-col p-3">
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko4} alt="" onClick={() => handleClick(4)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko5} alt="" onClick={() => handleClick(5)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko6} alt="" onClick={() => handleClick(6)} />
          </div>
        </div>

        <div className="galleryColThree flex flex-col p-3">
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko2} alt="" onClick={() => handleClick(2)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko8} alt="" onClick={() => handleClick(8)} />
          </div>
          <div className="rounded-lg hover:scale-104 transition duration-600 ease-in-out cursor-pointer bg-transparent bg-linear-150 from-white/30 to-white/50 backdrop-blur-xl p-6 outline-white outline-1 mb-4">
            <img src={ko7} alt="" onClick={() => handleClick(7)} />
          </div>
          <p className="text-6xl text-center text-pink-600 modak">I Love You</p>
        </div>
      </div>

      <div className="font-burmese mx-auto font-bold text-xl text-center p-5 ">
        <p>ကြူးတာလေးတွေ တွေ့ချင်ပါက ပုံကို နှိပ်ကြည့်ပါ 🤫</p>
      </div>

      {/* Alert-like popup */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
          <div className="bg-white p-16 rounded-2xl shadow-lg text-center max-w-sm  outline-1 font-burmese">
            <p className="mb-10">{message}</p>
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="PageArrows flex justify-between items-center absolute -bottom-10 right-0">
        {/* <span className="leftArrow ">
          <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
        </span> */}
        <Link to="/fortune">
          <span className="rightArrow cursor-pointer">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
