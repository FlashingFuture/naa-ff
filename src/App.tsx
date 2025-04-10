import { JSX } from "react";
import bars from "./bars.svg";
import home from "./home.svg";
import "./style.css";

export const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio">
      <div className="highbar">
        <img className="img" alt="Home" src={home} />

        <div className="blog-title">
          <div className="text-wrapper">Naa-FlashingFuture</div>
        </div>

        <img className="img" alt="Bars" src={bars} />
      </div>

      <div className="title">
        <div className="div">About Me</div>
      </div>

      <div className="main">
        <div className="div-wrapper">
          <p className="p">
            <span className="span">
              책임감있게 나아가는 프론트엔드 개발자,
              <br />
            </span>

            <span className="text-wrapper-2">정기영</span>

            <span className="span">입니다.</span>
          </p>
        </div>

        <div className="profile-and">
          <div className="descrpition">
            <div className="descrpition-set">
              <div className="div-wrapper">
                <div className="text-wrapper-3">
                  개발에 책임감과 보람을 느낍니다.
                </div>
              </div>

              <div className="div-wrapper">
                <p className="text-wrapper-4">
                  프론트엔드 개발자로써 책임질 수 있는, 유지보수가 용이한 코드를
                  작성하기 위해 배우고 노력하고 있습니다.
                </p>
              </div>

              <div className="div-wrapper">
                <p className="text-wrapper-4">
                  제품이 완성되어 목표한 기능이 작동하고, 목표를 위해 쌓아온
                  팀의 노력이 인정받을 때 그 무엇보다도 보람을 느낍니다.
                </p>
              </div>

              <div className="div-wrapper">
                <p className="text-wrapper-4">
                  기능 하나, 사용한 라이브러리 하나 하나 사용 이유를 댈 수
                  있다는 것을 이상적으로 생각하고, 근거있는 개발자가 되기 위해
                  항상 학습하면서 학습한 부분을 적용하고자 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="title-and-contents">
              <div className="div-wrapper-2">
                <div className="text-wrapper-5">Certificates</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-6">OPIC(영어) : IH</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-6">TOEIC: 895</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-6">SQLD</div>
              </div>
            </div>

            <div className="title-and-contents">
              <div className="div-wrapper-2">
                <div className="text-wrapper-5">Experiences</div>
              </div>

              <div className="div-wrapper-2">
                <p className="text-wrapper-6">웹 풀스택 데브코스 7기 수료 중</p>
              </div>

              <div className="div-wrapper-2">
                <p className="text-wrapper-6">
                  삼성 청년 SW 아카데미 11기 수료
                </p>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-6">
                  동국대학교 전자전기공학부 졸업
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <Portfolio />;
}
