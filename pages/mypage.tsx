import type { NextPage } from "next";
import { useState } from "react";
import styled, { css } from "styled-components";
import Card from "../components/card";
import Layout from "../components/layout";
import { THEME } from "../constant/colors";
const Data: any = [
  {
    id: "1",
    image: "https://picsum.photos/200",
    title: "강릉 수영장",
    description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
  },
  {
    id: "2",
    image: "https://picsum.photos/200",
    title: "레고랜드",
    description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
  },
  {
    id: "3",
    image: "https://picsum.photos/200",
    title: "강릉 수영장",
    description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
  },
  {
    id: "4",
    image: "https://picsum.photos/200",
    title: "레고랜드",
    description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
  },
  {
    id: "5",
    image: "https://picsum.photos/200",
    title: "강릉 수영장",
    description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
  },
  {
    id: "6",
    image: "https://picsum.photos/200",
    title: "레고랜드",
    description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
  },
  {
    id: "7",
    image: "https://picsum.photos/200",
    title: "강릉 수영장",
    description: "아이들과 부모들이 함꼐 즐길 수 있는 신나는 액티비티",
  },
  {
    id: "8",
    image: "https://picsum.photos/200",
    title: "레고랜드",
    description: "아이들이 좋아하는 레고로 만들어진 꿈같은 놀이동산",
  },
];

enum TAB {
  wishlist,
  history,
}

const Home: NextPage = () => {
  const [tab, setTab] = useState(TAB.wishlist);
  const [title, setTitle] = useState("즐거운 우리집");
  return (
    <Layout title="마이홈">
      <Profile>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="173"
          height="107"
          viewBox="0 0 173 107"
          fill="none"
        >
          <g clipPath="url(#clip0_75_4477)">
            <path
              d="M164.322 83.1274H113.477V106.994H164.322V83.1274Z"
              fill="#66CC99"
            />
            <path
              d="M131.942 87.0686C137.815 87.0686 142.576 82.2791 142.576 76.371C142.576 70.4628 137.815 65.6733 131.942 65.6733C126.069 65.6733 121.307 70.4628 121.307 76.371C121.307 82.2791 126.069 87.0686 131.942 87.0686Z"
              fill="#66CC99"
            />
            <path
              d="M156.78 96.8713C162.654 96.8713 167.415 92.0818 167.415 86.1737C167.415 80.2656 162.654 75.4761 156.78 75.4761C150.907 75.4761 146.146 80.2656 146.146 86.1737C146.146 92.0818 150.907 96.8713 156.78 96.8713Z"
              fill="#66CC99"
            />
            <path
              d="M144.921 87.0745C149.714 87.0745 153.599 83.1659 153.599 78.3445C153.599 73.523 149.714 69.6145 144.921 69.6145C140.128 69.6145 136.243 73.523 136.243 78.3445C136.243 83.1659 140.128 87.0745 144.921 87.0745Z"
              fill="#66CC99"
            />
            <path
              d="M164.322 107C169.115 107 173 103.091 173 98.27C173 93.4486 169.115 89.54 164.322 89.54C159.529 89.54 155.643 93.4486 155.643 98.27C155.643 103.091 159.529 107 164.322 107Z"
              fill="#66CC99"
            />
            <path
              d="M6.30986 106.994H43.2971V89.629H6.30986V106.994Z"
              fill="#66CC99"
            />
            <path
              d="M129.98 81.782C129.98 81.782 144.762 96.9661 172.994 98.27C172.994 98.27 173.112 105.536 165.895 107H127.205L129.98 81.7879V81.782Z"
              fill="#53BC85"
            />
            <path
              d="M29.8702 92.4975C34.1425 92.4975 37.6059 89.0135 37.6059 84.7158C37.6059 80.4181 34.1425 76.9341 29.8702 76.9341C25.598 76.9341 22.1346 80.4181 22.1346 84.7158C22.1346 89.0135 25.598 92.4975 29.8702 92.4975Z"
              fill="#66CC99"
            />
            <path
              d="M11.8008 99.6271C16.0731 99.6271 19.5364 96.1432 19.5364 91.8454C19.5364 87.5477 16.0731 84.0637 11.8008 84.0637C7.52854 84.0637 4.06519 87.5477 4.06519 91.8454C4.06519 96.1432 7.52854 99.6271 11.8008 99.6271Z"
              fill="#66CC99"
            />
            <path
              d="M20.426 92.5034C23.9141 92.5034 26.7418 89.6589 26.7418 86.15C26.7418 82.6411 23.9141 79.7966 20.426 79.7966C16.938 79.7966 14.1103 82.6411 14.1103 86.15C14.1103 89.6589 16.938 92.5034 20.426 92.5034Z"
              fill="#66CC99"
            />
            <path
              d="M6.31576 107C9.80386 107 12.6315 104.155 12.6315 100.647C12.6315 97.1377 9.80386 94.2932 6.31576 94.2932C2.82766 94.2932 0 97.1377 0 100.647C0 104.155 2.82766 107 6.31576 107Z"
              fill="#66CC99"
            />
            <path
              d="M129.803 47.5259L80.9973 10.1287L32.1915 47.5259H32.0207V99.5857H129.98V47.5259H129.803Z"
              fill="#FCDE58"
            />
            <path
              d="M129.986 89.9253H32.0207V101.31H129.986V89.9253Z"
              fill="#F7D548"
            />
            <path
              d="M32.3977 97.5173H129.603C132.095 97.5173 134.116 99.5502 134.116 102.057V107H27.8848V102.057C27.8848 99.5502 29.9056 97.5173 32.3977 97.5173Z"
              fill="#F7A73C"
            />
            <path
              d="M61.5963 52.1606C69.6855 52.1606 76.2545 58.7689 76.2545 66.9062V97.5174H46.944V66.9062C46.944 58.7689 53.5131 52.1606 61.6022 52.1606H61.5963Z"
              fill="#FCBA58"
            />
            <path
              d="M72.8374 80.1997H50.5614V93.9555H72.8374V80.1997Z"
              fill="#F7A73C"
            />
            <path
              d="M61.6965 55.6692C67.8414 55.6692 72.8316 60.6891 72.8316 66.8706V76.78H50.5555V66.8706C50.5555 60.6891 55.5457 55.6692 61.6906 55.6692H61.6965Z"
              fill="#F7A73C"
            />
            <path
              d="M69.7915 74.5396H67.9475C67.4952 74.5396 67.1285 74.9084 67.1285 75.3634V81.3197C67.1285 81.7746 67.4952 82.1435 67.9475 82.1435H69.7915C70.2438 82.1435 70.6105 81.7746 70.6105 81.3197V75.3634C70.6105 74.9084 70.2438 74.5396 69.7915 74.5396Z"
              fill="#FCDE58"
            />
            <path
              d="M32.0207 60.1023L80.9973 23.9971L129.98 60.9676L129.803 47.5259L80.9973 10.1287L32.0207 47.5259V60.1023Z"
              fill="#F7D548"
            />
            <path
              d="M29.6523 47.6562L80.7027 8.22021L131.747 47.6562"
              stroke="#F7A73C"
              strokeWidth="12"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <rect x="85" y="52" width="14" height="23" rx="2" fill="white" />
            <path
              d="M85 54C85 52.8954 85.8954 52 87 52H97C98.1046 52 99 52.8954 99 54V56H85V54Z"
              fill="#FCBA58"
            />
            <path d="M85 63H99V67H85V63Z" fill="#FFF5C7" />
            <rect x="103" y="52" width="14" height="23" rx="2" fill="white" />
            <path
              d="M103 54C103 52.8954 103.895 52 105 52H115C116.105 52 117 52.8954 117 54V56H103V54Z"
              fill="#FCBA58"
            />
            <path d="M103 63H117V67H103V63Z" fill="#FFF5C7" />
          </g>
          <path
            d="M108 8C108 5.23858 110.239 3 113 3H117C119.761 3 122 5.23858 122 8V34H108V8Z"
            fill="#F7A73C"
          />
          <defs>
            <clipPath id="clip0_75_4477">
              <rect width="173" height="107" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Title>
          <div>이름</div>
          <GhostInput
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Title>
      </Profile>
      <Tab>
        <TabItem
          selected={tab === TAB.wishlist}
          onClick={() => setTab(TAB.wishlist)}
        >
          함께 해요
        </TabItem>
        <TabItem
          selected={tab === TAB.history}
          onClick={() => setTab(TAB.history)}
        >
          함께 했어요
        </TabItem>
      </Tab>
      <LikedList>
        {Data.map((each: any) => (
          <Card
            key={each.id}
            image={`/images/dummy_activity.svg`}
            title={each.title}
            description={each.description}
          />
        ))}
      </LikedList>
    </Layout>
  );
};

export default Home;

const Tab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  top: 4rem;
  position: sticky;
  min-height: 52px;
  padding: 0 3rem;
  border-bottom: 1px solid ${THEME.black200};
  background: white;
`;

const TabItem = styled.div<{ selected: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: visible;
  font-weight: 500;
  color: ${THEME.black600};
  ${(p) =>
    p.selected &&
    css`
      font-weight: 600;
      color: ${THEME.black900};
      :after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 40px;
        height: 3px;
        border-radius: 9999px;
        background: ${THEME.darker};
      }
    `}
`;

const LikedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 0 20px;
  padding-bottom: 8rem;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.div`
  background: ${THEME.lighter};
  border-radius: 9999px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    font-size: 1.2rem;
    color: ${THEME.darker};
    flex-shrink: 0;
  }
`;

const GhostInput = styled.input`
  width: 100%;
  outline: none;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  background: none;
  text-align: right;
`;
