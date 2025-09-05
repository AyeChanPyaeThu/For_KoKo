import "./Logout.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import love from "/assets/images/love.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login/AuthContext";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-14 font-umoe">
      <div className="text-center text-5xl font-extrabold logoutText ">
        <div className="animate-bounce">
          <p>Thank U so much</p>
          <p className="mb-5">
            For entering into my life babee ( &gt; 3 &lt; ){" "}
          </p>
        </div>
        <img
          src={love}
          alt=""
          className="rounded-full p-3 outline-1 w-85 h-85 bg-cover mx-auto"
        />
      </div>

      <div className="PageArrows flex justify-between items-center -mt-10">
        <Link to="/reminder">
          <span className="leftArrow cursor-pointer ">
            <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
          </span>
        </Link>

        <p
          className="logoutBtn p-4 rounded-xl outline-2 cursor-pointer hover:bg-pink-500 transition duration-300"
          onClick={handleLogout}
        >
          Exit
        </p>
      </div>
    </div>
  );
}
