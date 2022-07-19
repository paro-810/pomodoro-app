import settings from "../../assets/icon-settings.svg";
import Button from "../Button/Button";

const SettingComponent = () => {
  return (
    <div>
      <Button className = "">
        <img src={settings} />
      </Button>
    </div>
  );
};

export default SettingComponent;
