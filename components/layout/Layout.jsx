import classes from "./Layout.module.scss";
import img from "../../public/img/profile.webp";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const onClickToPage = (page) => {
    router.push(`${page}`);
  };
  return (
    <div className={classes.layout}>
      <div className={classes.nav}>
        <Image className={classes.profile} src={img} alt="profile_picture" />
        <div className={classes.home} onClick={() => onClickToPage("/")}>
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
        <div className={classes.top_menu}>
          <div
            className={classes.posts}
            onClick={() => onClickToPage("/posts/allcategory")}
          >
            Posts
          </div>
          <div
            className={classes.about}
            onClick={() => onClickToPage("/about")}
          >
            About
          </div>
        </div>
        <div className={classes.category} onClick={() => onClickToPage("/")}>
          Main
        </div>
        <div
          className={classes.category}
          onClick={() => onClickToPage("/posts/allcategory")}
        >
          Posts
        </div>
        <div
          className={classes.category}
          onClick={() => onClickToPage("/about")}
        >
          About
        </div>
        <div className={classes.copyright}>
          <p>Copyright 2023 by Hwirin</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className={classes.contents}>{children}</div>
    </div>
  );
};
export default Layout;
