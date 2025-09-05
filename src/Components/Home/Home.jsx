import React from "react";
import "./Home.css";
import FortunePage from "../FortunePage/FortunePage";
import LuckyCharm from "../LuckyCharm/LuckyCharm";
import Testing from "../Testing";
import Reminder from "../Reminder/Reminder";
import Wishing from "../Wishing/Wishing";
import Logout from "../Logout/Logout";
import Gallery from "../Gallery/Gallery";

export default function Home() {
  return (
    <div className="HomeContainer p-14">
      {/* BirthdayPhotoPage FortuneTellingPage BirthdayWishPage RemainderPage */}
      {/* <FortunePage /> */}
      {/* <LuckyCharm /> */}
      {/* <Testing /> */}
      {/* <Reminder /> */}
      {/* <Wishing /> */}
      <Gallery />
      {/* <Logout /> */}
    </div>
  );
}
