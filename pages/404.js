import { useRouter } from "next/router";
import classes from "../styles/404.module.scss";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.neon} onClick={() => router.back}>
          404
        </div>
        <div className={classes.flux} onClick={() => router.back}>
          PAGE NOT FOUND
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
