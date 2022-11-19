import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TextUtils } from "./components/TextUtils";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const ToggleMode = () => {
        if (mode.color === "black") {
            setMode({
                color: "white",
                backgroundColor: "black",
            });
            showAlert("Dark mode enabled!!");
            timeOut();
            document.body.style.backgroundColor = "black";
        } else {
            setMode({
                color: "black",
                backgroundColor: "white",
            });
            showAlert("Light mode enabled!!");
            timeOut();
            document.body.style.backgroundColor = "white";
        }
    };

    const [alert, setAlert] = useState(null);
    const showAlert = (msg) => {
        setAlert({
            message: msg,
        });
    };

    const timeOut = () => {
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar mode={mode} toggleMode={ToggleMode} />

                <Alert alert={alert} />
                <Routes>
                    <Route
                        path="/"
                        element={<TextUtils mode={mode} showAlert={showAlert} timeOut={timeOut} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
