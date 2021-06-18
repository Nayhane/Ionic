import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Toast from "./components/Toast";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    }
  }, [showToast]);

  const onClick = () => {
    setShowToast(true);
  };

  return (
    <div className="App">
      <h1>Hello Ionic world</h1>
      <Button onClick={onClick}>Ionic button</Button>
      <Toast isOpen={showToast} message={"Ionic toast component"} />
    </div>
  );
};

export default App;
