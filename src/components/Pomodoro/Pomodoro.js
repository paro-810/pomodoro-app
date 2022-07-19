import Button from "../Button/Button";

const Pomodoro = () => {
  return (
    <div className="  w-3/4 h-1/2 flex items-center justify-center">
      <Button className=" flex items-center justify-center  rounded-[50%] w-full h-full  shadow-outerShadow ">
        <div className="relative flex items-center justify-center w-full h-full rounded-[50%] ">
          <span className="text-5xl text-textColor font-bold">0</span>
          <span className="text-5xl text-textColor font-bold">0</span>
          <span className="text-5xl text-textColor font-bold">:</span>
          <span className="text-5xl text-textColor font-bold">0</span>
          <span className="text-5xl text-textColor font-bold">0</span>
          <span className="absolute bottom-16  text-textColor uppercase font-bold tracking-[0.5rem]">
            restart
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="70vw"
          height="70vw"
          className="absolute"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#70f3f8" />
              <stop offset="100%" stop-color="#70f3f8" />
            </linearGradient>
          </defs>
          <circle
            className="fill-[none] stroke-[url(#GradientColor)] stroke-[0.5rem]"
            cx="50%"
            cy="50%"
            r="45%"
            style={{ strokeLinecap: "round", strokeDasharray: 770 }}
          />
        </svg>
      </Button>
    </div>
  );
};

export default Pomodoro;
