import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import {
  FilterIcon,
  MenuIcon,
  ToggleIcon,
  ToggleIconToggled,
} from "../components/icons";
import Layout from "../components/layout";
import ModalCategory from "../components/modalcategory";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Modaldate from "../components/modaldate";
import { ActivityTypes, CardType } from "../constant/types";
import { useToken } from "../hooks/useTokenContext";

const Home: NextPage = () => {
  const [isOpenCategory, setOpenCategory] = useState(false);
  const [isOpenDate, setOpenDate] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([
    "공원탐방",
    "교육체험",
    "문화행사",
    "농장체험",
    "전시관람",
    "키즈카페",
  ] as string[]);
  const [realCategory, setRealCategory] = useState([
    "공원탐방",
    "교육체험",
    "문화행사",
    "농장체험",
    "전시관람",
    "키즈카페",
  ] as string[]);
  const [startDate, setStartDate] = useState(new Date());
  const [activities, setActivities] = useState([] as any[]);
  const { token } = useToken();

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/activities`,
          {
            headers: {
              Authorization: token,
            },
          }
        )
      ).json();
      setActivities(result.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title="활동">
      <Filters>
        <MenuFilter>
          <MenuOpen
            onClick={() => {
              setOpenCategory(!isOpenCategory);
            }}
          >
            {realCategory.length > 1 ? (
              <>
                {realCategory[0]}외 {realCategory.length - 1}
              </>
            ) : realCategory.length == 1 ? (
              <>{realCategory[0]}</>
            ) : (
              <>분류</>
            )}
            <MenuIcon />
          </MenuOpen>

          <DateShow
            onClick={() => {
              setOpenDate(!isOpenDate);
            }}
          >
            {startDate.getFullYear()}.{startDate.getMonth() + 1}.
            {startDate.getDate()}
          </DateShow>
        </MenuFilter>
      </Filters>
      <ActivityCards>
        {activities.filter((a) => realCategory.includes(a.type)).length > 0 ? (
          activities
            .filter((a) => realCategory.includes(a.type))
            .map((each: any) => (
              <Card
                _id={each._id}
                key={each.id}
                image={each.image_url}
                url={each.page_url}
                title={each.title}
                activityType={each.type}
                location={each.location}
                liked={each.is_liked}
                target={each.target}
                description={each.description}
              />
            ))
        ) : (
          <None>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="238"
              height="167"
              viewBox="0 0 238 167"
              fill="none"
            >
              <g clipPath="url(#clip0_212_2670)">
                <g clipPath="url(#clip1_212_2670)">
                  <path
                    d="M87.8977 82.1881C102.938 75.9744 110.275 59.1961 104.285 44.7127C98.2958 30.2293 81.2475 23.5255 66.2072 29.7392C51.1668 35.953 43.8298 52.7313 49.8194 67.2147C55.8091 81.6981 72.8573 88.4019 87.8977 82.1881Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M57.6784 63.9677C64.9637 60.9579 68.4337 52.6278 65.4289 45.3619C62.424 38.096 54.0822 34.6458 46.797 37.6557C39.5117 40.6655 36.0417 48.9956 39.0465 56.2615C42.0514 63.5274 50.3931 66.9776 57.6784 63.9677Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M96.427 46.6113C103.712 43.6014 107.182 35.2713 104.177 28.0055C101.173 20.7396 92.8308 17.2894 85.5455 20.2992C78.2603 23.3091 74.7903 31.6392 77.7951 38.905C80.7999 46.1709 89.1417 49.6211 96.427 46.6113Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M72.094 43.9736C79.3792 40.9638 82.8492 32.6337 79.8444 25.3678C76.8396 18.1019 68.4978 14.6517 61.2125 17.6615C53.9272 20.6714 50.4572 29.0015 53.462 36.2674C56.4669 43.5332 64.8087 46.9834 72.094 43.9736Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M67.9317 73.9833C71.5072 72.5061 73.2101 68.4179 71.7354 64.852C70.2608 61.2861 66.1668 59.5929 62.5914 61.07C59.0159 62.5472 57.313 66.6354 58.7877 70.2013C60.2624 73.7672 64.3563 75.4604 67.9317 73.9833Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M96.2412 62.288C99.8166 60.8108 101.52 56.7226 100.045 53.1567C98.5702 49.5908 94.4763 47.8976 90.9008 49.3747C87.3254 50.8519 85.6224 54.9401 87.0971 58.506C88.5718 62.0719 92.6657 63.7651 96.2412 62.288Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M71.1797 67.3241C75.8305 65.4026 78.0457 60.0848 76.1275 55.4463C74.2092 50.8079 68.8839 48.6054 64.2331 50.5268C59.5823 52.4482 57.3671 57.7661 59.2853 62.4045C61.2036 67.0429 66.5289 69.2455 71.1797 67.3241Z"
                    fill="white"
                  />
                  <path
                    d="M89.2388 59.8631C93.8897 57.9417 96.1049 52.6238 94.1866 47.9854C92.2684 43.347 86.9431 41.1444 82.2922 43.0659C77.6414 44.9873 75.4262 50.3051 77.3445 54.9436C79.2627 59.582 84.588 61.7846 89.2388 59.8631Z"
                    fill="white"
                  />
                  <path
                    d="M71.2171 64.2314C74.4129 62.9111 75.935 59.2571 74.6169 56.0699C73.2988 52.8827 69.6397 51.3692 66.4439 52.6895C63.2482 54.0098 61.7261 57.6638 63.0442 60.851C64.3623 64.0382 68.0214 65.5516 71.2171 64.2314Z"
                    fill="#979797"
                  />
                  <path
                    d="M87.0956 57.1884C90.2913 55.8681 91.8134 52.2141 90.4953 49.0269C89.1772 45.8397 85.5181 44.3263 82.3224 45.6465C79.1267 46.9668 77.6045 50.6208 78.9226 53.808C80.2407 56.9952 83.8999 58.5087 87.0956 57.1884Z"
                    fill="#979797"
                  />
                  <path
                    d="M83.0832 39.5507C83.0832 39.5507 85.3709 37.5947 88.2827 39.4068"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M61.8786 48.3142C61.8786 48.3142 58.8757 48.541 58.0903 51.8777"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M81.9157 68.2065C83.314 67.6288 83.9166 65.8765 83.2615 64.2925C82.6065 62.7086 80.9419 61.8929 79.5436 62.4706C78.1453 63.0483 77.5428 64.8006 78.1978 66.3845C78.8529 67.9685 80.5174 68.7842 81.9157 68.2065Z"
                    fill="#979797"
                  />
                  <path
                    d="M76.4775 147.473C90.2664 145.755 100.054 133.208 98.3399 119.449C96.6253 105.69 84.0573 95.9288 70.2685 97.6471C56.4796 99.3653 46.6915 111.912 48.4061 125.671C50.1207 139.43 62.6887 149.191 76.4775 147.473Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M62.3377 136.29C65.6156 135.881 67.9425 132.899 67.5349 129.628C67.1273 126.357 64.1396 124.036 60.8617 124.445C57.5838 124.853 55.2569 127.836 55.6645 131.107C56.0721 134.378 59.0598 136.698 62.3377 136.29Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M88.2893 133.056C91.5672 132.647 93.894 129.665 93.4864 126.394C93.0789 123.123 90.0912 120.803 86.8132 121.211C83.5353 121.62 81.2085 124.602 81.6161 127.873C82.0237 131.144 85.0114 133.464 88.2893 133.056Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M65.872 129.837C70.1358 129.306 73.1625 125.426 72.6323 121.172C72.1021 116.917 68.2158 113.899 63.952 114.43C59.6881 114.961 56.6614 118.841 57.1916 123.096C57.7218 127.35 61.6081 130.369 65.872 129.837Z"
                    fill="white"
                  />
                  <path
                    d="M82.4285 127.774C86.6923 127.243 89.719 123.363 89.1888 119.109C88.6586 114.854 84.7723 111.836 80.5085 112.367C76.2447 112.898 73.2179 116.778 73.7481 121.033C74.2783 125.287 78.1646 128.306 82.4285 127.774Z"
                    fill="white"
                  />
                  <path
                    d="M66.6045 127.298C69.5343 126.933 71.614 124.267 71.2497 121.344C70.8854 118.42 68.215 116.346 65.2852 116.711C62.3554 117.077 60.2757 119.742 60.64 122.666C61.0043 125.589 63.6747 127.663 66.6045 127.298Z"
                    fill="#979797"
                  />
                  <path
                    d="M81.271 125.086C84.2008 124.721 86.2806 122.055 85.9163 119.131C85.552 116.208 82.8816 114.134 79.9518 114.499C77.022 114.864 74.9422 117.53 75.3065 120.454C75.6709 123.377 78.3413 125.451 81.271 125.086Z"
                    fill="#979797"
                  />
                  <path
                    d="M65.0068 95.5801C65.0068 95.5801 68.598 96.5406 69.0688 100.468"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M69.9863 92.4395C69.9863 92.4395 72.4702 96.2677 72.0755 100.093"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M144.737 141.089C166.721 146.636 188.869 133.97 194.207 112.798C199.544 91.6267 186.05 69.9667 164.066 64.4193C142.083 58.872 119.934 71.538 114.597 92.7096C109.259 113.881 122.753 135.541 144.737 141.089Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M178.312 103.121C188.96 105.808 199.763 99.3765 202.441 88.7554C205.119 78.1342 198.657 67.3458 188.009 64.6587C177.36 61.9717 166.557 68.4036 163.879 79.0248C161.202 89.646 167.663 100.434 178.312 103.121Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M132.514 91.5643C143.162 94.2513 153.965 87.8194 156.643 77.1982C159.321 66.5771 152.859 55.7886 142.211 53.1016C131.562 50.4146 120.759 56.8465 118.082 67.4677C115.404 78.0888 121.865 88.8772 132.514 91.5643Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M182.028 130.188C192.677 132.875 203.48 126.443 206.158 115.822C208.835 105.201 202.374 94.4122 191.725 91.7252C181.077 89.0381 170.274 95.47 167.596 106.091C164.918 116.712 171.38 127.501 182.028 130.188Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M115.717 113.456C126.365 116.143 137.168 109.711 139.846 99.0898C142.524 88.4687 136.062 77.6803 125.414 74.9932C114.765 72.3062 103.962 78.7381 101.284 89.3593C98.6066 99.9804 105.068 110.769 115.717 113.456Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M157.261 87.6512C167.91 90.3382 178.713 83.9063 181.391 73.2852C184.068 62.664 177.607 51.8756 166.958 49.1885C156.31 46.5015 145.507 52.9334 142.829 63.5546C140.151 74.1757 146.613 84.9642 157.261 87.6512Z"
                    fill="#EFEFEF"
                  />
                  <path
                    d="M129.224 115.336C134.45 116.654 139.752 113.498 141.066 108.285C142.38 103.072 139.209 97.7778 133.983 96.4591C128.757 95.1403 123.455 98.2969 122.141 103.51C120.827 108.722 123.998 114.017 129.224 115.336Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M170.602 125.776C175.829 127.095 181.13 123.939 182.445 118.726C183.759 113.513 180.588 108.219 175.362 106.9C170.136 105.581 164.834 108.738 163.519 113.95C162.205 119.163 165.376 124.458 170.602 125.776Z"
                    fill="#DEDEDE"
                  />
                  <path
                    d="M138.391 110.586C145.189 112.301 152.086 108.195 153.795 101.415C155.504 94.6343 151.379 87.7471 144.582 86.0317C137.784 84.3164 130.887 88.4224 129.178 95.2028C127.468 101.983 131.593 108.87 138.391 110.586Z"
                    fill="white"
                  />
                  <path
                    d="M164.783 117.246C171.581 118.962 178.478 114.856 180.187 108.075C181.897 101.295 177.772 94.4077 170.974 92.6924C164.176 90.977 157.279 95.083 155.57 101.863C153.861 108.644 157.986 115.531 164.783 117.246Z"
                    fill="white"
                  />
                  <path
                    d="M141.003 107.159C145.674 108.338 150.413 105.517 151.587 100.858C152.762 96.1986 149.927 91.4662 145.256 90.2875C140.585 89.1088 135.847 91.9302 134.672 96.5892C133.497 101.248 136.332 105.981 141.003 107.159Z"
                    fill="#979797"
                  />
                  <path
                    d="M164.613 112.475C169.284 113.654 174.023 110.832 175.198 106.173C176.372 101.514 173.538 96.7821 168.867 95.6034C164.196 94.4247 159.457 97.2461 158.283 101.905C157.108 106.564 159.942 111.297 164.613 112.475Z"
                    fill="#979797"
                  />
                  <path
                    d="M174.673 87.9934C174.673 87.9934 178.857 87.7068 180.607 92.1522"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M143.68 80.1769C143.68 80.1769 140.134 77.9357 136.482 81.0142"
                    stroke="#C2C2C2"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M146.823 114.738C146.823 114.738 150.231 118.213 155.395 116.901"
                    stroke="#979797"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_212_2670">
                  <rect width="238" height="167" fill="white" />
                </clipPath>
                <clipPath id="clip1_212_2670">
                  <rect
                    width="206"
                    height="174"
                    fill="white"
                    transform="translate(20 -14)"
                  />
                </clipPath>
              </defs>
            </svg>
            <NoneTitle>
              찾는 활동이 없어요.
              <div>재미있는 활동을 찜해보세요!</div>
            </NoneTitle>
          </None>
        )}
      </ActivityCards>
      <ModalCategory
        isOpenCategory={isOpenCategory}
        setOpenCategory={setOpenCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setRealCategory={setRealCategory}
      />
      <Modaldate
        startDate={startDate}
        setStartDate={setStartDate}
        isOpenDate={isOpenDate}
        setOpenDate={setOpenDate}
      />
    </Layout>
  );
};

export default Home;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100000;
  background-color: #fbfbfb;
  width: 100%;
  padding: 0 25px;
  padding-bottom: 12px;
`;

const MenuFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const MenuOpen = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 20px;
  width: auto;
  padding: 10px;
  height: 34px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #999999;
`;

const DateShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dedede;
  border-radius: 20px;
  height: 34px;
  padding: 15px;
  color: #999999;
`;

const ActivityCards = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 4rem;
  padding-bottom: 6rem;
`;

const FreeColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ToggleText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #999999;
`;

const None = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    @keyframes swing {
      0% {
        transform: translateX(0%);
      }
      15% {
        transform: translateX(-15px) rotate(-5deg);
      }
      30% {
        transform: translateX(10px) rotate(3deg);
      }
      45% {
        transform: translateX(-5px) rotate(-3deg);
      }
      60% {
        transform: translateX(5px) rotate(2deg);
      }
      75% {
        transform: translateX(0px) rotate(-1deg);
      }
      100% {
        transform: translateX(0%);
      }
    }
    animation: swing 1.5s ease infinite;
  }
`;

const NoneTitle = styled.div`
  color: #c1c1c1;
  font-size: 17px;
  font-weight: 600;
  line-height: 2;
  margin-top: 2rem;
  text-align: center;
  div {
    color: #dfdfdf;
    font-size: 17px;
  }
`;
