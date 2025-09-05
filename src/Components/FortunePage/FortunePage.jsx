import "./FortunePage.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React from "react";
import { Link } from "react-router-dom";

export default function FortunePage() {
  return (
    <div className="FortuneContainer p-14">
      <h1 className="FortuneHeading text-6xl font-extrabold text-center mb-2 font-rib">
        Fortune-telling For Ko Ko
      </h1>
      <p className="text-right text-lg text-gray-800 font-rib">
        based on Chatgpt & deekseep
      </p>

      <div className="FortuneTellContainer p-14 font-burmese font-bold">
        <div className="HealthContainer p-10 rounded-2xl mb-5  bg-linear-to-tr from-white/30 to-white/90 hover:scale-102 transition duration-600 ease-in-out">
          <h3 className="Title text-2xl mb-1">Health 🩺 :</h3>
          <p className="FortunePara text-xl ">
            ✨ ၂၀၂၅ ခုနှစ်မှာ တာဝန်ယူမှုတွေနဲ့ အလုပ်များတာတွေကြောင့်
            ဖိစီးမှုအနည်းငယ် ခံစားရနိုင်ပါတယ်။ <br />✨ ကြီးမားတဲ့
            ပြဿနာတော့မဟုတ်ပေမယ့် အိပ်ရေးမဝတာနဲ့ မညီမျှတဲ့ အစားအစာတွေက
            စွမ်းအင်ကို နည်းစေနိုင်ပါတယ်။
          </p>
          <hr className="hr my-5" />
          <h3 className="Title text-2xl mb-1">Suggestion :</h3>
          <p className="FortunePara text-xl">
            မနက်ခင်းမှာ အနည်းဆုံး ၁၅ မိနစ်လောက် လေ့ကျင့်ခန်း သို့မဟုတ်
            လမ်းလျှောက်ပါ။ စိတ်ကိုအနားပေးဖို့ ဂီတသံနားထောင်တာ၊ စာဖတ်တာ၊
            တရားထိုင်တာတွေ လုပ်ဆောင်ပါ။ အဆီများတဲ့ အစားအစာတွေ၊ အစပ်များတဲ့
            အစားအစာတွေကို လျှော့စားပြီး သန့်ရှင်းမျှတတဲ့ အစားအစာတွေ စားသုံးပါ။
          </p>
        </div>

        <div className="EducationContainer p-10  rounded-2xl mb-5 bg-linear-to-tr from-white/30 to-white/90 hover:scale-102 transition duration-600 ease-in-out">
          <h3 className="Title text-2xl mb-1">Education 🎓 :</h3>
          <p className="FortunePara text-xl">
            ✨ သင်ယူမှုနဲ့ ကြီးထွားမှုအတွက် အလားအလာကောင်းတဲ့ နှစ်တစ်နှစ်ပါ။
            ကြာသပတေးဂြိုဟ်က စာသင်ခန်း၊ စာမေးပွဲတွေနဲ့ careerကဲ့သို့သော
            အခွင့်အလမ်းတွေကို အားပေးထောက်မပါတယ်။ <br />✨ လုံ့လဝီရိယနဲ့
            ပုံမှန်ကြိုးစားမယ်ဆိုရင် ရလဒ်က ကောင်းမွန်ပါလိမ့်မယ်။
          </p>
          <hr className="hr my-5" />
          <h3 className="Title text-2xl mb-1">Suggestion :</h3>
          <p className="FortunePara text-xl">
            ပျင်းရိငြီးငွေ့နေတဲ့နေ့တွေမှာတောင် အနည်းဆုံး မိနစ် ၂၀ လောက်
            စာကျက်ပါ။ ပုံမှန်လုပ်ဆောင်ခြင်းက ပြင်းထန်မှုထက် ပိုအရေးကြီးပါတယ်။
            ဆရာသမားတွေ ဒါမှမဟုတ် senior တွေဆီက မေးမြန်းဖို့ မရှက်ပါနဲ့။
            အနာဂတ်အတွက် ပညာရေးအခြေခံကောင်းတွေ ချမှတ်ဖို့ ဒီနှစ်ကို အသုံးချပါ။
          </p>
        </div>

        <div className="WealthContainer p-10  rounded-2xl mb-5  bg-linear-to-tr from-white/30 to-white/90 hover:scale-102 transition duration-600 ease-in-out">
          <h3 className="Title text-2xl mb-1">Money 💰 :</h3>
          <p className="FortunePara text-xl">
            ✨ ဒါဟာ ငွေကြေးအများကြီးရမယ့်နှစ်ထက်
            အခြေခံအုတ်မြစ်ချမယ့်နှစ်ပိုဖြစ်ပါတယ်။ တိုးတက်မှုက
            တည်ငြိမ်နိုင်ပေမယ့် သိသိသာသာကြီးတော့ မဟုတ်နိုင်ပါဘူး။ <br />✨
            ငွေကြေးတည်ငြိမ်မှုက စည်းကမ်းရှိမှုကနေ လာပါတယ်၊ ဖြတ်လမ်းနည်းတွေကနေ
            မဟုတ်ပါဘူး။ တာဝန်ယူမှုနဲ့ အသင်းအဖွဲ့နဲ့လုပ်ဆောင်မှုကနေ
            အသိအမှတ်ပြုခံရမှာပါ။
          </p>
          <hr className="hr my-5" />
          <h3 className="Title text-2xl mb-1">Suggestion :</h3>
          <p className="FortunePara text-xl">
            သင်ယူမှုအပေါ် ငွေကုန်ကြေးကျခံပါ (စာအုပ်၊ အတတ်ပညာ၊ သင်တန်း) - ဒါတွေက
            နောက်ပိုင်းမှာ အကျိုးကျေးဇူးပေးပါလိမ့်မယ်။ ချက်ချင်းချေးငွေတွေ
            ဒါမှမဟုတ် စွန့်စားရတဲ့ ရင်းနှီးမြှုပ်နှံမှုတွေကို ရှောင်ပါ။
            ဒီနှစ်ကို အလုပ်အကိုင်နဲ့ ငွေကြေးရင့်ကျက်မှုအတွက်
            လေ့ကျင့်ရေးကွင်းပြင်အဖြစ် မှတ်ယူပါ။
          </p>
        </div>

        <div className="LoveContainer p-10  rounded-2xl mb-5  bg-linear-to-tr from-white/30 to-white/90 hover:scale-102 transition duration-600 ease-in-out">
          <h3 className="Title text-2xl mb-1">Love ❤️ :</h3>
          <p className="FortunePara text-xl">
            ✨ ဒီနှစ်မှာ အာရုံက မိသားစုနဲ့ ရေရှည်ဆက်ဆံရေးဘက်ကို ရွေ့သွားပါမယ်။{" "}
            <br />
            ✨ ချစ်သူရှိပြီးသားသူတွေအတွက် - တာဝန်ဝတ္တရားတွေ ပိုများလာပြီး
            တည်ငြိမ်မှုနဲ့ပတ်သက်တဲ့ ဆုံးဖြတ်ချက်တွေ ချမှတ်ရနိုင်ပါတယ်။ <br />✨
            လူပျိုလူလွတ်တွေအတွက် - သူတို့ကို နက်ရှိုင်းစွာနားလည်သူတစ်ဦးနဲ့
            တွေ့ဆုံခွင့် အခွင့်အရေးရှိပါတယ်။
          </p>
          <hr className="hr my-5" />
          <h3 className="Title text-2xl mb-1">Suggestion :</h3>
          <p className="FortunePara text-xl">
            ရှင်းရှင်းလင်းလင်း ဆက်သွယ်ပြောဆိုပါ - အခြားသူတွေက သင့်စိတ်ကို
            ဖတ်နိုင်တယ်လို့ မယူဆပါနဲ့။ ခံစားချက်တွေကို ထိန်းသိမ်းထားတာထက်
            ပြသဖို့ သတ္တိရှိပါ။ မိသားစုနဲ့ အချစ်ရေး ဆက်ဆံရေးကြားက အချိန်ကို
            မျှမျှတတ ခွဲဝေသုံးစွဲပါ။
          </p>
        </div>

        <div className="SummaryContainer p-10  rounded-2xl mb-8  bg-linear-to-tr from-white/30 to-white/90 hover:scale-102 transition duration-600 ease-in-out">
          <h3 className="Title text-2xl mb-1">Summary 💫 :</h3>
          <p className="FortunePara text-xl">
            ✨ ၂၀၂၅ ခုနှစ်သည် တာဝန်ယူမှုနှင့် အခြေခံအုတ်မြစ်ချရမည့်နှစ်ဖြစ်သည်။
            ဒါဟာ မြန်မြန်ဆန်ဆန်ရနိုင်တဲ့ ရလဒ်တွေအကြောင်းမဟုတ်ဘဲ ကျန်းမာရေး၊
            ပညာရေး၊ အလုပ်အကိုင်၊ အချစ်ရေးတို့မှာ ခိုင်မာတဲ့
            အုတ်မြစ်တွေစိုက်ထူပြီး နောက်ပိုင်းမှာ ရေရှည်ချမ်းသာကြွယ်ဝမှုကို
            ယူဆောင်လာမယ့်နှစ်ပါ။
          </p>
        </div>

        <Link to="/lucky">
          <button className="Charm p-5 mx-auto block outline-1 rounded-2xl items-center cursor-pointer hover:bg-green-300 transition duration-500">
            ယတြာ နှင့် အဆောင်
          </button>
        </Link>
      </div>

      <div className="PageArrows flex justify-between items-center -mt-12">
        <Link to="/">
          <span className="leftArrow cursor-pointer">
            <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
        <Link to="/wishing">
          <span className="rightArrow cursor-pointer">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
