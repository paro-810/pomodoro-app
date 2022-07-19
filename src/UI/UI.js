import Header from "../components/Header/Header";
import Pomodoro from "../components/Pomodoro/Pomodoro";
import SettingComponent from "../components/SettingComponent/SettingComponent";

const UI = () => {
  return <main className="border-2 border-gray-900 h-screen w-screen bg-lessDarkBg flex flex-col items-center justify-around">
    <Header/>
    <Pomodoro/>
    <SettingComponent/>
  </main>;
};

export default UI;

