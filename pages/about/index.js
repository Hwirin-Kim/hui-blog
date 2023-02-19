import classes from "./about.module.scss";

const About = () => {
  return (
    <div className={classes.container}>
      <h1>김휘린</h1>
      <br />
      <br />
      <p>Front-end web developer | kimhwirin@gmail.com | 1992-12-17</p>
      <br />
      <p>
        새로운 지식 학습, 의견 나누기, 직접 해보기를 좋아하는 프론트엔드
        개발자입니다. 천천히 발전하는 것을 두려워하지 않고, 멈추는 것을 경계하며
        끊임없이 지식 습득을 위해 노력하고 있습니다. 저는 javascript, React.js,
        React-query, Next.js, Redux, Recoil을 사용하여 개발하고 있습니다.
      </p>
      <br />
      <br />
      <br />
      <h1 className={classes.section_title}>프로젝트 경험</h1>
      <div className={classes.project}>
        <div className={classes.project_title}>
          <h2>1. 일탈 (일상의 방탈출)</h2>
          <h3>2022.11~2022.12</h3>
        </div>
        <div className={classes.desc}>
          <p>Description</p>
          <p>
            방탈출 업체와 그 업체의 테마정보를 모아서 원하는 카테고리별로 선택해
            보여주는 서비스
          </p>
          <p>Tech Stack</p>
          <p>React / React-query / Recoil / Styled-components</p>
          <p>Github</p>
          <a href="https://github.com/il-tal/il-tal_front">
            https://github.com/il-tal/il-tal_front
          </a>
          <p>link</p>
          <a href="https://il-tal.com">https://il-tal.com</a>
        </div>
        <ul className={classes.list}>
          <li>
            React-query를 이용한 서버상태관리로 List page, Detail page, Search
            page 구현
          </li>
          <li>Recoil로 필터, 페이지등의 전역상태를 관리하여 필터 기능 구현</li>
          <li>Styled-components를 이용한 조건부 스타일링 적용</li>
          <li>공통컴포넌트를 만들어 코드 간소화</li>
          <li>
            Image lazy loading을 적용 하여 페이지 로드시간을 약 200ms 단축시킴
          </li>
        </ul>
      </div>
      <div className={classes.project}>
        <div className={classes.project_title}>
          <h2>title-academy</h2>
          <h3>2022.10~2022.11</h3>
        </div>
        <div className={classes.desc}>
          <p>Description</p>
          <p>이미지를 올리면 유저들이 참신한 제목을 지어 댓글에 적는 서비스</p>
          <p>Tech Stack</p>
          <p>React / Redux toolkit / Styled-components</p>
          <p>Github</p>
          <a href="https://github.com/Hwirin-Kim/title-academy">
            https://github.com/Hwirin-Kim/title-academy
          </a>
        </div>
        <ul className={classes.list}>
          <li>
            Redux toolkit의 미들웨어(thunk)를 이용하여 비동기통신 및
            전역상태관리
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />

      <h1 className={classes.section_title}>기타사항</h1>

      <div className={classes.project}>
        <div className={classes.project_title}>
          <h2>1. 교육사항</h2>
        </div>
        <ul className={classes.list}>
          <li>스파르타 코딩클럽 항해99 9기 수료 (2022.09 - 2022.12)</li>
          <li>대만 동해대학교 중국어 어학당 수료 (2019.06-2020.01)</li>
          <li>군산대학교 물리학 전공 (학점 4.02) (2011.03 - 2017.02)</li>
        </ul>
      </div>
      <div className={classes.project}>
        <div className={classes.project_title}>
          <h2>2. 개발 외 업무 경험</h2>
        </div>
        <ul className={classes.list}>
          <li>
            한국 (주) 티티에스 연구개발팀 Plasma coating part (대리, 신제품 개발
            업무) (2020.04 - 2022.08)
          </li>
          <li>
            중국 광진과기 Plasma coating team (사원, 공장 set-up 및 안정화,
            생산관리) (2017.07 - 2019.05)
          </li>
          <li>
            대만 Global Material Science Plasma coating team (사원, 신제품 개발
            업무) (2017.03 - 2017.07)
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
