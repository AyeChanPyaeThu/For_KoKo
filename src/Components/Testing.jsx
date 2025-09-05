// import React, { useState } from "react";
// import luck2 from "../../public/assets/images/luck2.jfif";

// const CustomAlert = ({ message, imgUrl, onClose }) => {
//   const alertStyles = {
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "4px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   };

//   const closeButtonStyle = {
//     background: "none",
//     border: "none",
//     fontSize: "1.2em",
//     cursor: "pointer",
//   };

//   return (
//     <div style={alertStyles}>
//       <span>{message}</span>
//       <img src={imgUrl} alt="" />
//       <button style={closeButtonStyle} onClick={onClose}>
//         OK
//       </button>
//     </div>
//   );
// };

// function Testing() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleShowAlert = () => {
//     setShowAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div>
//       <button onClick={handleShowAlert}>Show Custom Alert</button>
//       {showAlert && (
//         <CustomAlert
//           message="Keep this always with u"
//           imgUrl={luck2}
//           onClose={handleCloseAlert}
//         />
//       )}
//     </div>
//   );
// }

// export default Testing;

import React, { useState } from "react";

export default function Testing() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="relative">
      {/* Main Page */}
      <div className={showAlert ? "blur-sm" : ""}>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <button
            onClick={() => setShowAlert(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
          >
            Show Alert
          </button>
        </div>
      </div>

      {/* Alert Box */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
            <h2 className="text-lg font-bold mb-3">Custom Alert</h2>
            <p className="mb-4">This is an alert message!</p>
            <button
              onClick={() => setShowAlert(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
