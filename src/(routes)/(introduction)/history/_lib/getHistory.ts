import axios from 'axios';
import { QueryFunction } from '@tanstack/react-query';

const histories: any = [
    {
        year: 2021,
        activities: [
            {
                title: '수상 및 대외활동 내역',
                details: [
                    '2020년 창업동아리',
                    '2020년 충청권 인공지능 교육 프로그램 고급과정',
                    '2020년 디지털혁신 캠퍼스 챌린지(NH농협은행)',
                    '2020년 충북대학교 SW중심대학사업단 1학기 마일리지 장학생',
                    '2020년 지역대학교와 초, 중, 고 연계 동아리 멘토링 프로그램',
                    '2021년 소프트웨어학과 컴퓨터비전 패턴인식 연구실(최경주 교수님) 연구생 활동',
                    '2021년 정보통신공학부 응용전자파 연구실(안병철 교수님) 연구생 활동',
                    '2021년 충북대학교 전공알림단(소프트웨어학과)',
                    '2021년 기상기후분야 청년창업 지원 및 창업경연대회',
                    '2021년 제 7회 대한민국 SW융합 해커톤 대회',
                    '2021년 HUAWEI KOREA ICT Challenge 2020',
                    '2021년 CK 연구실 인턴십',
                    '2021년 ‘ISO/PAS 21448 표준을 고려한 군집주행의 VENTOS 시뮬레이션’ 논문 작성',
                    '2021년 KISTI-충북대학교 SW중심대학사업단 HPC 여름학교',
                    '2021년 충북대학교 SW중심대학사업단 OSS센터 운영보조원',
                    '2021년 충북대학교 SW중심대학사업단 봉사단 2기',
                    '2021년 학생 창업유망팀 300(교육부 주관, 최종선정)',
                    '2021년 SW중심대학사업단 창업 액셀러레이션',
                    '2021년 보이스피싱 예방 앱 개발',
                    '2021년 삼성전자 생활가전사업부 인턴',
                    '2021년 소프트웨어 마에스트로 11기 수료',
                    '2021년 오픈소스 SW 커뮤니티 프로그램 최우수상 수상',
                    '2021년 오픈소스 SW 동아리 발표회 최우수상 수상',
                    '2021년 KT 모바일 퓨처리스트 18기 수료',
                    '2021년 SK 하이닉스 스포츠 콘텐츠 크리에이터 3기',
                    '2021년 오픈캠퍼스 교육(한국고용정보원, 공공기관 실무 및 취업컨설팅)',
                    '2021년 파라미터 청년활동 동아리- 소프트웨어 게임 멘토링',
                    '2021년 청년활동 지원사업',
                    '2021년 삼성증권 대학생 봉사단',
                ],
            },
        ],
    },
    {
        year: 2019,
        activities: [
            {
                title: '수상내역',
                details: [
                    '2019년 청소년 동아리 우수사례 선정 - 청소년활동진흥원 이사장상 수상',
                    '2019년 예비창업패키지 선정 - 4,500만원 지원금',
                    '2019년 U300 (학생 창업유망팀) 3팀 선정 - 최종 40팀 내 1팀 선정',
                    '2019년 소프트웨어중심대학 오픈소스 해커톤 - 대상, 최우수상',
                    '2019년 Ningbo Open Source Space CN-KR 해커톤 - 2등 수상',
                    '2019년 제 2회 패스파인더 해커톤 - 스폰서 트랙상 수상',
                    '2019년 교내 Open Source SW Presentation - 2등 수상',
                    '2019년 충북대학교 소프트웨어학과 캡스톤 디자인 전시회 - 우수상 수상',
                    '2019년 충북대학교 소프트웨어학과 캡스톤 디자인 전시회 - 장려상 수상',
                    '2019년 산학 초청 세미나 - 최우수상',
                    '2019년 청소년 어울림 마당 동아리 우수사례 - 우수상',
                    '2019년 Ningbo OpenSource Space CN-KR - 2등 입선',
                    '2019년 the 7th Summer Program for Innovative Engineering Design 2019 - Technical Excellence, Idea 상 수상',
                    '2019년 Open Source Software Project Presentation - 2위',
                    '2019년 2019 Hi-Tech 공학콘서트 창업 동아리 경진대회 - 장려상',
                    '2019년 글로벌 캡스톤 디자인 대회 - 최우수상',
                    '2019년 2019 충북권 대학 캡스톤 디자인 경진대회 -최우수상',
                    '2019년 소프트웨어 알고리즘 경진대회 - 최우수상, 장려상',
                    '2019년 2019 캡스톤 디자인 경진대회 - 우수상, 장려상',
                    '2019년 오픈소 스 SW 커뮤니티 - 금상, 동상',
                    '2019년 인간컴퓨터상호작용 프로그래밍 교과 프로젝트 작품 전시회 - 최우수상',
                    '2019년 학생설계전공 제안 경진대회 - 대상',
                    '2019년 창업 시제품 경진대회 - 우수상',
                ],
            },
            {
                title: '대외활동',
                details: [
                    '2019년 충북 파라미타 청소년 협회 청소년 동아리 활동지원사업 - 선정 (100만원 지원)',
                    '2019년 충청북도 기업 진흥원 취업 동아리 활동지원사업 - 선정 (60만원 지원)',
                    '2018년 제7기 BOB(차세대 보안리더 양성프로그램) - 1명 수료',
                    '2019년 제8기 BOB(차세대 보안리더 양성프로그램) - 1명 참여중',
                    '2019년 제10기 SW마에스트로   - 교육 이수',
                    '2019년 배달의민족 우아한테크코스 - 1기 교육 이수',
                    'Microsoft Student Partners [MSP Evangelism] - 1명 수료',
                    'Samsung SDS 대학생 알고리즘 특강  - 2명 수료',
                    'Samsung SDS PRO - 1명 취득',
                    '2019년 19회 해킹캠프 - 3명 참여 / 1명 발표 (메모리보호 & 우회기법)',
                    '2019년 20회 해킹캠프 - 1명 참여',
                    '2019년 글로벌캡스톤디자인대회 SPIED - 2명 수료',
                    '2019년 KISTI GSDC 데이터 컴퓨팅 School  - 1명 수료',
                    '국민대학교와 함께하는 OSS개발자 포럼 - 2명 수료',
                    '2019년 평화경제 얼리버드 청년 아이디어톤 - 1명 수료',
                    '제 10회 창의문제해결능력경진대회(CPS) - 5명 참여 / 2명 본선진출',
                    '2019년 POC 주최 19회 해킹캠프 참가 - 3팀',
                    '2019년 2019 학생 창업 유망팀 300 경진대회 - 교육부장관 인증',
                    '2019년 Samsung 소프트웨어 역량 테스트 - A+, Pro 자격증 취득',
                    '2019년 PeopleSpace(PS) Winter 2020 Program: AI Training Program - 참가',
                ],
            },
            {
                title: '컨퍼런스 참관',
                details: [
                    '2019년 MS Azure DevOps Community Launch - 8명 참관',
                    '2019년 Google IO Conference - 1명 참관',
                    '2019년 PYCON - 1명 참관',
                    '2019년 If Kakao - 1명 참관',
                    '2019년 Open Secure Lab - 2명 참관',
                    '2019년 제 1회 대전충청세미나 - 3명 참관',
                ],
            },
        ],
    },
];

const getHistory: QueryFunction<any, [_1: string]> = ({ queryKey }) => {
    // return axios.get(``).then(response => response.data.response);
    return Promise.resolve(histories);
};

export default getHistory;