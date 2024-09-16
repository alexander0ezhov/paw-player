import React from "react";

const App: React.FC = () => {
  return (
    <div>
      test <button onClick={(e) => alert("alerting")}>BUTTON</button>
    </div>
  );
};
export default App;
