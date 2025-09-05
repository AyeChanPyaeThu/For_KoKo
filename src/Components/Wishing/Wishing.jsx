import "./Wishing.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React from "react";
import { Link } from "react-router-dom";

export default function Wishing() {
  return (
    <div className="p-14 font-burmese ">
      <h2 className="WishingHeading text-center text-5xl mb-5 font-burmese font-extrabold">
        🍀 Birthday Wish for Ko Ko <span>🍀</span>
      </h2>

      <div className="wishTextcontainer py-5 px-17 w-fit m-auto font-burmese text-justify leading-8 text-lg mb-15">
        <p className="mb-10">
          Happy birthday ပါ ကိုကိုရေ 🥳။ 22 နှစ်ပြည့်ပြီပေါ့နော်။
          နှစ်ဆယ်ကျော်မှန်းမသိ ကျော်လာပြီနော်။ ကိုလည်း
          အများကြီးလည်းဖြတ်သန်းနေရပြီ။ ကိုလုပ်နေတာတွေ သဲ အရမ်းလေးစားတာ။
          ငယ်ငယ်ရွယ်ရွယ်နဲ့ ကိုယ့်ကိုယ်ကိုရပ်တည်နိုင်တာ၊ ရင့်ကျက်တာတွေပေါ့။
          အဓိကကတော့ ကို ဘယ်လောက်ပင်ပန်း ပင်ပန်း သဲအ‌ပေါ် မဲတာ ဒေါသထွက်တာမျိုး
          မရှိတာကို အလေးစားဆုံးပါပဲရှင်။ တသက်လုံး ဒီလိုပဲစိတ်ရှည်ပေးနော်။ သဲ
          ဘာမှမဟုတ်ပဲ စိတ်ကောက်တာတွေ ရန်ရှာတာတွေကို သည်းခံပေးပါဦး။ ကို့အပေါ်
          ဆိုးလို့ရလို့ ဆိုးနေတာပါ 🥺။ အရမ်းချစ်တာကို‌တော့ သိတယ်မလား ။ မွေးနေ့က
          စပြီးတော့ ဘဝတလျှောက်လုံး(သဲနဲ့ရှိနေသမျှ) ကံကောင်းမှုတွေ အများကြီး
          ပိုင်ဆိုင်နိုင်ပါစေ။ ( သဲနဲ့မဟုတ်ရင်တော့ ကိုယ့်ဘာသာ ဆုတောင်းပေါ့ 👋 )။
          ရည်မှန်းချက်ပန်းတိုင်ဆီလည်း အမြန်ဆုံးရောက်ပါစေရှင့်။ မိဘအပေါ်
          သိတတ်လိမ္မာပြီး ရှယ်‌ကျေးဇူးဆပ်နိုင်တဲ့ ဘောစိဖြစ်ပါစေ။ မိဘတွေ
          ရှိတဲ့အချိန်ကို ဂရုစိုက်နော်။ ဒီနှစ်က မွေးရက် မွေးနေ့ ထပ်တယ်နော်။
          လပြည့်နေ့လည်း ဖြစ်တယ်။ မိဘတွေကိုလည်း သေချာလှမ်းကန်တော့ပါ ၊ ဘုရားလည်း
          ဝတ်တက်ပြီး ကုသိုလ်ကောင်းမှုလုပ်နော်။ ဘယ်လိုအခြေနေဖြစ်ဖြစ်
          ပျော်ပျော်နေပါ။ ပင်ပန်းတာတွေလည်း ဖြတ်ကျော်ပစ်လိုက်။ ကို အများကြီး
          လုပ်နိုင်နေပါပြီ။ ပင်ပန်းလာရင် သဲဓာတ်ပုံလေးတွေ ကြည့်ပြီး
          အာဘွားပေးလိုက် ရှေ့ဆက်ဖို့ အားတွေအများကြီး ရလာလိမ့်မယ် 😉။ သဲ အမြဲတမ်း
          ကို့နောက်ကနေ အားပေးနေမှာနော်။ သဲကြိုးစားဖို့ အားတွေကလည်း ကို့ဆီက
          ရတာပဲ။ အဲဒါကြောင့် အမြဲ ကျေးဇူးတင်နေရပါတယ်ရှင့်။ ကို့အ‌မေကို ပြောပေးပါ
          သဲရဲ့အချစ်ကလေးကို မွေးပေးတာ ကျေးဇူးအများကြီးတင်ပါတယ် 😙လို့။ အများကြီး
          အများကြီး အများးးးကြီး ချစ်ပြီး လေးစားမြတ်နိုးရပါတယ် 💖။ အရင်ကလည်း
          ချစ်တယ်၊ ခုလည်း ချစ်တယ် ၊ နောင်လည်း ချစ်ဦးမှာ။ အရမ်းလည်း
          တွေ့ချင်နေပါပြီ။ အာဘွား အာဘွား အာဘွားးးးးးးးး{" "}
          <span className="text-3xl">😘</span>
        </p>
        <p className="modak text-8xl text-center text-amber-400 text-shadow-lg">
          You're my sunshine 🌞
        </p>
      </div>

      <div className="PageArrows flex justify-between items-center -mt-12">
        <Link to="/fortune">
          <span className="leftArrow cursor-pointer ">
            <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
        <Link to="/reminder">
          <span className="rightArrow cursor-pointer">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
