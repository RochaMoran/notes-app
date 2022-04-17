import "./styles.css";
import { useState } from "react";
import Register from "../../components/register";
import Login from "../../components/login";
import Overlay from "../../components/overlay";

function Auth() {
  const [classAuth, setClassAuth] = useState<string>("");

  return (
    <div className="body">
      <div className={`${classAuth} container`} id="container">
        <Register setClassAuth={setClassAuth} />
        <Login setClassAuth={setClassAuth} />
        <Overlay setClassAuth={setClassAuth} />
      </div>
    </div>
  );
}

export default Auth;
