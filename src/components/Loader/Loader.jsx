import cls from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cls.backrop}>
      <span className={cls.loader}></span>
    </div>
  );
};

export const SmallCardLoader = () => {
  return <span className={cls.smallCardLoader}></span>;
};
