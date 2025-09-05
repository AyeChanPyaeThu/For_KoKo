import "./LuckyCharm.css";
import luck2 from "../../../public/assets/images/luck2.jfif";
import luck1 from "../../../public/assets/images/luck1.jfif";
import love1 from "/assets/images/love1.jpg";
import love2 from "/assets/images/love2.jpg";
import bee from "../../../public/assets/images/bee.jfif";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomCharm = ({ title, imgUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full z-50">
      <div className="CustomCharmContainer bg-amber-300 px-25 py-13 rounded-2xl">
        <h3 className="customTitle font-burmese text-lg mb-3 font-bold ">
          {title}
        </h3>
        <img
          src={imgUrl}
          alt=""
          className="customImg w-90 h-90 p-3 bg-cover mx-auto mb-4"
        />
        <button
          className="customClose font-rib text-xl bg-green-600 text-white px-10 py-2 rounded-2xl mx-auto block cursor-pointer border-1 border-emerald-800 hover:bg-green-400 transition duration-400"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default function LuckyCharm() {
  const [showCharm, setShowCharm] = useState(false);
  const [handleShowCharm, setHandleShowCharm] = useState({ id: "" });

  const handleShowCharm1 = (event) => {
    setHandleShowCharm({ id: "charm1" });
    setShowCharm(true);
  };

  const handleShowCharm2 = (event) => {
    setHandleShowCharm({ id: "charm2" });
    setShowCharm(true);
  };

  const handleCloseCharm = () => {
    setShowCharm(false);
  };

  return (
    <div className="LuckyCharmContainer relative p-14">
      <div className={showCharm ? "blur-sm" : ""}>
        <div className="toBringLuck font-burmese w-fit mt-2 mx-auto mb-8 border-1 py-3 px-6 rounded-2xl animate-bounce ">
          <h3 className="toBringLuckTitle text-2xl mb-1.5 font-bold">
            ယတြာ 🌟 :
          </h3>
          <p className="toBringLuckText text-lg">
            ကောင်မလေးအား အရမ်းချစ်တယ်ပြော၍ အာဘွားသုံးခါ နေ့တိုင်းပေးပါက
            အဆိုးအညံ့မှန်သမျှ အကုန်အရှင်းပျောက်ပါလိမ့်မည်။
          </p>
        </div>

        <div className="CharmContainer text-center ">
          <h3 className="charmTitle font-burmese text-3xl mb-2">
            အသက်ရှူသွင်းရှူထုတ်လုပ်၍ နှစ်သက်ရာ<b>အဆောင်</b>တစ်ခုရွေးပါ
          </h3>

          <div className="charms flex justify-center p-4 ">
            <img
              src={luck2}
              alt=""
              id="charm1"
              className="charm1 w-55 border-2 p-2 rounded-2xl mr-8 cursor-pointer hover:scale-108 transition duration-600"
              onClick={handleShowCharm1}
            />
            <img
              src={luck2}
              alt=""
              id="charm2"
              className="charm2 w-55 border-2 p-2 rounded-2xl cursor-pointer hover:scale-108 transition duration-600"
              onClick={handleShowCharm2}
            />
          </div>

          <Link to="/fortune">
            <button className="charmDone absolute outline-1 p-3 bg-green-400 text-white rounded-2xl right-25 -bottom-5 cursor-pointer font-rib">
              Done
            </button>
          </Link>
        </div>
      </div>
      {showCharm && (
        <CustomCharm
          title="ကံကောင်းမှုများ ပိုင်ဆိုင်ရန် ကိုယ်နဲ့မကွာ အမြဲဆောင်ထားပါ"
          imgUrl={handleShowCharm.id === "charm1" ? love1 : love2}
          onClose={handleCloseCharm}
        />
      )}
    </div>
  );
}
