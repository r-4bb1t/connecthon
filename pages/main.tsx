import type { NextPage } from "next";
import Link from "next/link";
import { format } from "date-fns";
import styled, { css } from "styled-components";
import { CharacterImg, CharacterMessage } from "../components/characters";
import {
  DiaryIcon,
  LockIcon,
  NewIcon,
  SleepingCharacter,
} from "../components/icons";
import Layout from "../components/layout";
import { THEME } from "../constant/colors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToken } from "../hooks/useTokenContext";
import { useGame } from "../hooks/useGameContext";
import { Question } from "../constant/types";
import { AnimatePresence, motion } from "framer-motion";
import { useLoading } from "../hooks/useLoadingContext";

const Home: NextPage = () => {
  const [isAnimation, setIsAnimation] = useState(false);

  const { token, user } = useToken();
  const [question, setQuestion] = useState(null as any);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const [invitationCode, setInvitationCode] = useState("---");
  const [nickname, setNickname] = useState("병아리");

  const { exp, gainExp, level, levelUp } = useGame();
  const [cIndex, setCIndex] = useState(level - 1);

  const [invited, setInvited] = useState(false);

  useEffect(() => {
    setTimeout(() => setCIndex(level - 1), 500);
  }, [level]);

  const getQuestion = useCallback(async () => {
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST || "/api"}/question`, {
          headers: {
            Authorization: `${token}`,
          },
        })
      ).json();

      setQuestion(result.data);
      setNickname(result.data.character_name);
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  const getInvitationCode = useCallback(async () => {
    try {
      if (user?.user_type === "parent") {
        const invite = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/user/invite`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
        ).json();
        if (invite.data.invitation_code)
          setInvitationCode(invite.data.invitation_code);
        else {
          const invites = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/user/invite`,
              {
                method: "POST",
                headers: {
                  Authorization: `${token}`,
                },
              }
            )
          ).json();
          if (invites.data.invitation_code)
            setInvited(invites.data.invitation_code);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  const checkInvited = useCallback(async () => {
    try {
      const result = await (
        await fetch(
          `${
            process.env.NEXT_PUBLIC_API_HOST || "/api"
          }/user/invite/${invitationCode}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
      ).json();
      if (result.data) setInvited(true);
      //invited
    } catch (e) {
      console.log(e);
    }
  }, [invitationCode]);

  useEffect(() => {
    getQuestion();
    if (user?.user_type === "parent") getInvitationCode();
  }, [token]);

  useEffect(() => {
    if (user?.user_type === "parent" && invitationCode) checkInvited();
  }, [invitationCode]);

  useEffect(() => {
    if (exp >= 100) {
      gainExp(-100);
      levelUp();
      setIsAnimation(true);
      setTimeout(() => setIsAnimation(false), 1000);
    }
  }, [exp]);

  return (
    <Layout>
      <TodayContainer>
        <TodayDate>오늘은 {format(new Date(), "M월 d일")}</TodayDate>
        <TodayStatus>
          {user?.user_type === "parent" && !invited ? (
            <>
              아직 캐릭터가 깨어나지 않았어요.
              <br />
              <small>
                아이가 가입하면 캐릭터가 깨어나요.
                <br />
                <Colored>초대 코드: {invitationCode}</Colored>
              </small>
            </>
          ) : question?.is_parent_answered ? (
            question?.is_child_read ? (
              <>
                <span>{nickname}</span>는 지금,
                <br />
                사랑으로 잘 자라고 있어요!
              </>
            ) : (
              <>
                <span>{nickname}</span>가
                <br />
                부모님의 답장을 가져왔어요!
              </>
            )
          ) : question?.is_child_answered ? (
            <>
              <span>{nickname}</span>는 지금,
              <br />
              부모님의 답장을 기다려요!
            </>
          ) : (
            <>
              <span>{nickname}</span>는 지금,
              <br />
              {user?.user_type === "parent" ? "아이의 " : ""}일기를 기다리는
              중이에요!
            </>
          )}
          {(user?.user_type === "child" || invited) && (
            <StatusButton onClick={() => setIsStatusOpen((s) => !s)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="9"
                  y="9"
                  width="22"
                  height="22"
                  rx="11"
                  stroke="#FCBA58"
                  strokeWidth="2"
                />
                <path
                  d="M21.5039 13.3594H18.4961L18.75 23.2617H21.25L21.5039 13.3594ZM18.3789 26.0352C18.3594 26.9434 19.1016 27.6758 20.0195 27.6758C20.8887 27.6758 21.6406 26.9434 21.6406 26.0352C21.6406 25.1367 20.8887 24.4043 20.0195 24.4141C19.1016 24.4043 18.3594 25.1367 18.3789 26.0352Z"
                  fill="#FCBA58"
                />
              </svg>
            </StatusButton>
          )}
          <AnimatePresence>
            {isStatusOpen && (
              <StatusContainer
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.2 } }}
              >
                <BetweenEnd>
                  <LevelContainer>
                    <Level>
                      Lv.<span>{level}</span>
                    </Level>
                    <Name>{nickname}</Name>
                  </LevelContainer>
                  <Exp>
                    <span>{exp}</span> / 100
                  </Exp>
                </BetweenEnd>
                <ExpGage percent={exp / 100}></ExpGage>
              </StatusContainer>
            )}
          </AnimatePresence>
        </TodayStatus>
      </TodayContainer>
      <CharacterContainer
        isAnimation={isAnimation}
        onClick={() => gainExp(10)}
        isSleeping={user?.user_type === "parent" && !invited}
      >
        {isAnimation && <ChangeImage src={`/assets/change.gif?${level}`} />}
        <CharacterAnimation>
          {user?.user_type === "parent" && !invited ? (
            <SleepingCharacter width="100%" height="100%" />
          ) : (
            <CharacterImg level={cIndex} />
          )}
        </CharacterAnimation>
        {question?.is_parent_answered && !question?.is_child_read && (
          <>
            <MessageAnimation>
              <CharacterMessage level={cIndex} />
            </MessageAnimation>
            <div>
              <Particle />
              <Particle />
              <Particle />
              <Particle />
            </div>
          </>
        )}
        {question?.is_child_read && (
          <>
            <div>
              <HeartParticle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <path
                    d="M30.3664 39.0876L30.3645 39.0867C25.635 36.9665 21.8334 35.2603 18.9876 33.4371C16.1607 31.626 14.4498 29.8046 13.7121 27.5388L13.712 27.5386C13.427 26.6638 13.3163 25.7425 13.3858 24.8288C13.4553 23.9153 13.7036 23.0285 14.1149 22.2202C14.5261 21.4119 15.0921 20.6982 15.7787 20.1199C16.4652 19.5417 17.2593 19.1099 18.1144 18.8491L18.1223 18.8467L18.1302 18.8442C19.1619 18.5147 20.2537 18.4112 21.3342 18.5411C22.4148 18.6711 23.4604 19.0318 24.4018 19.601L25.6408 20.3502L26.2012 19.0152C26.627 18.0008 27.2598 17.0936 28.0567 16.3524C28.8535 15.6112 29.797 15.0521 30.8249 14.711L30.8328 14.7084L30.8406 14.7057C31.6853 14.4129 32.5814 14.2944 33.4768 14.3576C34.3722 14.4208 35.2499 14.6645 36.0582 15.0757C36.8665 15.4869 37.5893 16.0575 38.1834 16.755C38.7775 17.4526 39.2304 18.2625 39.5151 19.1374L39.5152 19.1376C40.2542 21.4073 39.9439 23.8889 38.726 27.0198C37.5001 30.1712 35.4335 33.7912 32.8617 38.2957C32.8614 38.2962 32.8611 38.2967 32.8608 38.2973L32.8602 38.2985L31.9836 39.8159L30.3664 39.0876Z"
                    fill="#FCBA58"
                    stroke="#FCBA58"
                    strokeWidth="2.5"
                  />
                </svg>
              </HeartParticle>
              <HeartParticle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M12.3908 23.8488L12.3896 23.847C10.0598 20.0806 8.19859 17.0681 7.06473 14.4284C5.94001 11.81 5.61331 9.73873 6.15469 7.82145L6.15474 7.82125C6.36354 7.08133 6.7133 6.39007 7.18265 5.78793C7.65196 5.18584 8.23064 4.68592 8.88341 4.31595C9.53608 3.94605 10.2496 3.7135 10.9819 3.6298C11.7142 3.54611 12.4517 3.61274 13.1521 3.82498L13.1601 3.8274L13.1681 3.82971C14.0239 4.0766 14.8173 4.50756 15.4961 5.09558C16.175 5.68369 16.725 6.4165 17.1077 7.24755L17.72 8.57698L18.9373 7.76415C19.6982 7.25603 20.5502 6.91908 21.4364 6.77293C22.3226 6.6268 23.2242 6.67447 24.0827 6.91162L24.0907 6.91384L24.0988 6.91595C24.8068 7.10139 25.4702 7.43037 26.0505 7.88467C26.6309 8.33903 27.1175 8.91044 27.4803 9.56709C27.8431 10.2238 28.0749 10.9526 28.16 11.7112C28.2451 12.4699 28.1816 13.242 27.9726 13.9819L27.9725 13.9821C27.4302 15.9028 26.0676 17.4989 23.7388 19.1446C21.3914 20.8034 18.2294 22.4001 14.273 24.3973C14.272 24.3978 14.2711 24.3982 14.2702 24.3987L13.0917 24.9861L12.3908 23.8488Z"
                      fill="#FCBA58"
                      stroke="#FCBA58"
                      strokeWidth="2.5"
                    />
                  </g>
                </svg>
              </HeartParticle>
            </div>
          </>
        )}
      </CharacterContainer>
      <TodayQuestion>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M19.3828 20.374L22.752 23.9189L20.6572 25.7793L17.1123 22C16.3408 22.4102 15.5205 22.7275 14.6514 22.9521C13.792 23.1768 12.9033 23.2891 11.9854 23.2891C10.96 23.2891 9.97852 23.1572 9.04102 22.8936C7.14648 22.3467 5.51562 21.3701 4.14844 19.9639C3.50391 19.2998 2.92773 18.5332 2.41992 17.6641C1.94141 16.8242 1.57031 15.9209 1.30664 14.9541C1.04297 13.9873 0.911133 12.9863 0.911133 11.9512C0.911133 10.9062 1.04297 9.90039 1.30664 8.93359C1.83398 6.99023 2.78125 5.32031 4.14844 3.92383C4.8125 3.25 5.55957 2.65918 6.38965 2.15137C7.20996 1.66309 8.09375 1.28711 9.04102 1.02344C9.98828 0.75 10.9697 0.613281 11.9854 0.613281C13.001 0.613281 13.9824 0.745117 14.9297 1.00879C16.8242 1.55566 18.4551 2.52734 19.8223 3.92383C20.4961 4.60742 21.0771 5.37402 21.5654 6.22363C22.0537 7.06348 22.4248 7.9668 22.6787 8.93359C22.9424 9.90039 23.0742 10.9062 23.0742 11.9512C23.0742 12.7812 22.9863 13.5869 22.8105 14.3682C22.6445 15.1494 22.4053 15.9014 22.0928 16.624C21.458 18.0498 20.5547 19.2998 19.3828 20.374ZM20.1738 11.9512C20.1738 11.1895 20.0762 10.4424 19.8809 9.70996C19.4902 8.26465 18.7871 7.01953 17.7715 5.97461C17.2832 5.4668 16.7314 5.02734 16.1162 4.65625C14.8564 3.89453 13.4795 3.51367 11.9854 3.51367C10.8525 3.51367 9.79297 3.73828 8.80664 4.1875C7.82031 4.62695 6.95605 5.22754 6.21387 5.98926C5.47168 6.75098 4.88574 7.64453 4.45605 8.66992C4.03613 9.69531 3.82617 10.7891 3.82617 11.9512C3.82617 13.1133 4.03613 14.207 4.45605 15.2324C4.88574 16.248 5.47168 17.1367 6.21387 17.8984C6.95605 18.6602 7.82031 19.2656 8.80664 19.7148C9.79297 20.1543 10.8525 20.374 11.9854 20.374C13.0498 20.374 14.0557 20.1738 15.0029 19.7734L12.249 16.8145L14.2266 14.8955L17.4053 18.2793C18.2549 17.498 18.9287 16.5654 19.4268 15.4814C19.9248 14.3975 20.1738 13.2207 20.1738 11.9512Z"
            fill="#D8D8D8"
          />
        </svg>
        <QuestionContent>{question?.content || ""}</QuestionContent>
        {user?.user_type === "parent" ? (
          question?.is_child_answered ? (
            question?.is_parent_answered ? (
              <Link href={`/${question.diary_id}`}>
                <NewDiary isColored>
                  <DiaryIcon />
                  아이가 쓴 일기보기
                </NewDiary>
              </Link>
            ) : (
              <Link href={`/${question.diary_id}`}>
                <NewDiary isColored>
                  <NewIcon />
                  아이 일기에 답장쓰기
                </NewDiary>
              </Link>
            )
          ) : (
            <NewDiary>
              <LockIcon />
              아이의 일기를 기다려보세요.
            </NewDiary>
          )
        ) : question?.is_child_answered ? (
          <Link href={`/${question.diary_id}`}>
            <NewDiary isColored>
              <DiaryIcon />
              내가 쓴 일기 보기
            </NewDiary>
          </Link>
        ) : (
          <Link href="/new">
            <NewDiary isColored>
              <NewIcon />
              일기쓰기
            </NewDiary>
          </Link>
        )}
      </TodayQuestion>
    </Layout>
  );
};

export default Home;

const TodayContainer = styled.div`
  padding: 30px;
`;

const TodayDate = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  color: ${THEME.black600};
`;

const TodayStatus = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${THEME.black700};
  position: relative;
  line-height: 1.5;
  margin-top: 10px;
  span {
    font-size: inherit;
    color: ${THEME.black900};
  }
`;

const StatusButton = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
`;

const StatusContainer = styled(motion.div)`
  padding: 1rem 2rem;
  border-radius: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 50px;
  left: -2px;
  box-shadow: 0 0 25px 15px rgba(0, 0, 0, 0.03);
  background-color: white;
  transform-origin: right top;
`;

const BetweenEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

const Level = styled.div`
  color: ${THEME.black400};
  font-weight: 500;
  font-size: 20px;
  span {
    font-size: 20px;
    color: ${THEME.darker};
  }
`;

const Name = styled.div`
  font-size: 17px;
  color: ${THEME.black900};
  font-weight: 700;
`;

const Exp = styled.div`
  color: ${THEME.black500};
  font-weight: 500;
  span {
    color: ${THEME.black800};
  }
`;

const ExpGage = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;
  height: 0.75rem;
  background: ${THEME.black200};
  border-radius: 9999px;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 9999px;
    height: 100%;
    width: ${(p) => p.percent * 100}%;
    background: ${THEME.primary};
    transition: width 0.5s ease;
    @keyframes w {
      from {
        max-width: 0;
      }
      to {
        max-width: ${(p) => p.percent * 100}%;
      }
    }
    animation: w 0.5s ease forwards;
  }
`;

const CharacterContainer = styled.div<{
  isAnimation: boolean;
  isSleeping?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem 5rem;
  transform: scale(0.7);
  > div,
  :after {
    transition: transform 0.2s;
  }
  ${(p) =>
    p.isAnimation &&
    css`
      div:first-child,
      :after {
        transform: scale(0.5);
      }
    `}
  ${(p) =>
    !p.isSleeping &&
    css`
      :after {
        position: absolute;
        bottom: 0;
        width: 6rem;
        content: "";
        background: ${THEME.black300};
        height: 1rem;
        border-radius: 50%;
        @keyframes shadow {
          from,
          to {
            transform: scale(1, 1);
          }
          25% {
            transform: scale(0.9, 1);
          }
          50% {
            transform: scale(1.1, 1);
          }
          75% {
            transform: scale(0.95, 1);
          }
        }
        animation: shadow 1s infinite;
      }
    `}
  ${(p) =>
    !p.isSleeping &&
    css`
      > div:first-child {
        @keyframes gelatine {
          from,
          to {
            transform: scale(1, 1) translateY(0);
          }
          25% {
            transform: scale(0.9, 1.1);
          }
          50% {
            transform: scale(1.1, 0.9) translateY(30px);
          }
          75% {
            transform: scale(0.95, 1.05) translateY(-20px);
          }
        }
        animation: gelatine 1s infinite;
      }
    `}
`;

const CharacterAnimation = styled.div``;

const MessageAnimation = styled.div`
  position: absolute;
  bottom: 20%;
  right: 20%;
  @keyframes message {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const ChangeImage = styled.img`
  position: absolute;
  z-index: 2;
  width: 80%;
  bottom: 1rem;
`;

const Colored = styled.span`
  color: ${THEME.darker};
`;

const TodayQuestion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin-top: 1rem;
`;

const Particle = styled.div`
  @keyframes particle {
    0% {
      transform: translateY(0);
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  border-radius: 9999px;
  animation: particle 2s ease infinite;
  position: absolute;
  :nth-child(1) {
    background-color: rgba(253, 170, 61, 0.2);
    bottom: 10%;
    left: 10%;
    width: 11px;
    height: 11px;
  }
  :nth-child(2) {
    background-color: rgba(253, 170, 61, 0.5);
    bottom: 5%;
    left: 15%;
    width: 14px;
    height: 14px;
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    background-color: rgba(253, 170, 61, 0.5);
    top: 35%;
    right: 15%;
    width: 11px;
    height: 11px;
    animation-delay: 0.1s;
  }
  :nth-child(4) {
    background-color: rgba(253, 170, 61, 1);
    top: 45%;
    right: 20%;
    width: 14px;
    height: 14px;
    animation-delay: 0.4s;
  }
`;

const HeartParticle = styled.div`
  @keyframes particle {
    0% {
      transform: translateY(0);
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  animation: particle 2s ease infinite;
  position: absolute;

  :nth-child(1) {
    bottom: 10%;
    left: 10%;
  }
  :nth-child(2) {
    top: 35%;
    right: 15%;
    animation-delay: 0.2s;
  }
`;

const QuestionContent = styled.div`
  font-size: 1.2rem;
  color: ${THEME.black900};
  text-align: center;
  padding: 0 5rem;
  font-weight: 500;
`;

const NewDiary = styled.a<{ isColored?: boolean }>`
  display: block;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  gap: 1rem;
  color: ${(p) => (p.isColored ? THEME.darker : THEME.black700)};
  font-size: 1.2rem;
  font-weight: 700;
`;
