import React from 'react';

import { MainWrapper } from './styles';
import Introduce from './introduce';

const intro = [
  {
    id: 1,
    title: '비전공자의 개발자 도전기',
    content: `배움을 갈망하며, 성장과 발전을 이루는 디자인 전공의 개발자입니다. 국가지원 웹 퍼블리싱 개발자 육성 프로그램을
    계기로 개발자로 전향하였으며, html, CSS, JS를 활용할 수 있게 되었습니다. 쇼핑몰 관리 업무 경험으로 Makeshop 등 개발
    솔루션을 이용했습니다. 하지만 개발 솔루션은 이미 많은 기능이 구현 되어있어 그 기능을 사용하여 업무를 처리하는
    일상이 저의 성장을 더디게 하는 것 같았습니다. 그래서 퇴근 후 학원 수강 및 자기주도적인 학습을 통해 JS,
    ReactJS, NodeJS 등 활용하여 블로그를 직접 구현했습니다. 작은 만족감이 쌓이기도 하고, 어떤 부족함이 있는지
    스스로 느끼며 흥미가 되었고, 그 결과 어제보다 더 나은 웹 프론트엔드 개발자의 목표를 이뤄가고 있습니다.`,
  },
  {
    id: 2,
    title: '기억보다는 기록하자',
    content: `실제 서비스 개발을 하며 느꼈던 교훈이 있습니다. 경험을 기록할 때 비로소 자신의 것이 된다는 사실이었습니다.
    처음에는 그저 다른 블로그의 기록을 참고하여 개발 했었습니다. 하지만, 참고했던 내용은 제 지식으로 흡수가 되지
    않았습니다. 그저 코드를 따라치는 수준이었고, 이해와 응용으로 이뤄지지 않았습니다. 그래서 그 날 새롭게 익히는
    내용을 기록하기 시작했습니다. 지금은 해당 기술 및 라이브러리의 공식문서를 토대로 개발을 진행합니다. 그래도
    부족한 지식은 강의를 듣거나 공신력 있는 블로그의 내용으로 보완합니다. 최종적으로 기술 블로그에 기록하며 새롭게
    알게 된 사실과 추후 응용할 수 있도록 정리합니다. 사소한 습관일 수도 있지만, 이 습관을 토대로 개발에 흥미를
    이어갈 수 있었고, 프론트엔드 개발자의 꿈을 이어갈 수 있었습니다. 지금 기록하는 이 글들이 결국 저의 실력으로
    이어질 날이 올 것이라 확신합니다.`,
  },
  {
    id: 3,
    title: '조직에 기여하는 능동형 인재',
    content: `불명확한 업무 프로세스상의 문제를 주도적으로 해결했던 경험이 있습니다.
    이전 직장에서의 업무였던 자사몰 관리는 모두 혼자 진행했었습니다. 다만, 혼자 진행하기에는 마케팅팀, MD팀 등의 명확한 요구사항이 없었기에
    처음 의도와 다른 컨셉으로 변경이 되거나 많은 수정 작업을 해야 했습니다.
    이를 확인 후 각 팀 분들께 면담을 요청하여 업무요청서를 제안드려 중복되거나 불필요한 요구사항에 대해 각 팀에서
    최종검토 후 요구사항 전달할 수 있도록 부탁드렸습니다. 그 후로 불필요한 작업은 줄었으며, 타 팀에서도 업무요청서를 활용하여, 더 나은 업무 프로세스로 발전하였습니다.
    맡은바 책임감과 능동적인 의사소통 통해 타 팀간의 업무를 효율적으로 처리 할 수 있도록 해결할 수 있었습니다.
    어떤 어려움 속에서도 포기하지 않고 소통을 통해 능동적으로 조직의 문화에 기여하겠습니다.`,
  },
  {
    id: 4,
    title: '열등감 : 성장촉진제',
    content: `저에게 열등감은 성장 촉진제입니다. 자기 스스로의 부족함을 인정하고, 배움의 자세로 한 걸음씩 성장해왔습니다.
    재학 시절 당시, 주변의 공모전 입상 소식을 들으면 자존감이 낮아지곤 했습니다. 그때 저는 ‘나도
    할 수 있다’라는 정신으로 도전하여 15년도 서울특별시에서 주관한 ‘좋은 간판 디자인 공모전’ 최우수상을 입상하였습니다.
    이 처럼 열등감을 극복하여 입상 경험은 웹 퍼블리싱 개발자로 전향에 큰 힘이 되었고, 더 나아가 웹 퍼블리싱
    개발자에서 프론트 엔드 개발자의 역량도 발전시키고 있습니다. 전공 출신 개발자에게 대학 시절부터 쌓았던
    배경지식이 있다면, 저에겐 진정성과 포기하지 않는 끈기있는 열정이 있습니다. 부족함을 그 누구보다 빠르게 파악하고, 받아들이는
    자세로, 하나씩 배워가며 끊임없는 발전으로 조직의 성장에 기여하겠습니다.`,
  },
];

const Main = () => {
  return (
    <MainWrapper>
      <div className="inner">
        <div className="intro-title">
          <h1>안녕하세요.</h1>
          <h2>
            <strong>웹 디자이너</strong><br /><strong>최현욱</strong> 입니다.
          </h2>
        </div>
        <div className="intro-content">
          <h1>자신을 소개해주세요!</h1>
          <ul className="list-wrapper">
            {intro.map((item) => (
              <Introduce key={item.id} title={item.title} content={item.content} />
            ))}
          </ul>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;
