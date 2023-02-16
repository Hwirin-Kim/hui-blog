import classes from "./Layout.module.scss";
import img from "../../public/img/profile.webp";
import {
  AiOutlineBars,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const onClickToPage = (page) => {
    router.push(`/${page}`);
  };
  return (
    <layout className={classes.layout}>
      <nav className={classes.nav}>
        <Image className={classes.profile} src={img} alt="profile_picture" />
        <div className={classes.home} onClick={() => onClickToPage("")}>
          김휘린의 블로그
        </div>
        <div className={classes.icons}>
          <AiOutlineInstagram
            onClick={() =>
              window.open("https://www.instagram.com/whi___riririn")
            }
          />
          <AiOutlineGithub
            onClick={() => window.open("https://github.com/Hwirin-Kim")}
          />
          <AiOutlineMail
            onClick={() =>
              (document.location.href = "mailto:kimhwirin@gmail.com")
            }
          />
        </div>
        <div className={classes.hamburger}>hamburger</div>
        <div
          className={classes.category}
          onClick={() => onClickToPage("posts")}
        >
          Posts
        </div>
        <div className={classes.category}>About</div>
      </nav>
      <div className={classes.contents}>{children}</div>
    </layout>
  );
};
export default Layout;
