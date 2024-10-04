import cn from "classnames";

const Hr = ({ className = "" }) => {
  return <hr className={cn(className, "w-full text-stroke-light")} />;
};

export default Hr;
