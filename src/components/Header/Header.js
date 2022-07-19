import Button from "../Button/Button";

const Header = () => {
  return (
    <header className=" border-gray-900 text-2xl flex flex-col gap-6">
      <h1 className="text-center text-textColor lowercase">Pomodoro</h1>
      <div className="flex items-center justify-center p-2 rounded-3xl gap-3 bg-darkBg text-xs   ">
        <Button className="p-2 lowercase text-slate-400 rounded-3xl font-semibold focus:bg-violet active:bg-violet focus:text-darkBg">
          Pomodoro
        </Button>
        <Button className="p-2 lowercase text-slate-400 rounded-3xl font-semibold focus:bg-orange active:bg-orange focus:text-darkBg">
          short break
        </Button>
        <Button className="p-2 lowercase text-slate-400 rounded-3xl font-semibold focus:bg-blue active:bg-blue focus:text-darkBg">
          long break
        </Button>
      </div>
    </header>
  );
};

export default Header;
