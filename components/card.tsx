import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { THEME } from "../constant/colors";
import { ActivityTypes, CardType } from "../constant/types";
import { useLoading } from "../hooks/useLoadingContext";
import { useToken } from "../hooks/useTokenContext";
import { PickedIcon } from "./icons";

const Card = ({
  _id,
  image,
  title,
  url,
  target,
  activityType,
  location,
  liked = true,
  like = [],
  type = "list",
  diaryId,
}: CardType) => {
  const [localLiked, setLocalLiked] = useState(liked);
  const { token } = useToken();
  const router = useRouter();
  const { load } = useLoading();

  const toggleLike = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST || "/api"}/activity/${_id}`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLocalLiked(liked);
  }, [liked]);

  return (
    <CardContainer>
      <a href={url} rel="noreferrer" target="_blank">
        <CardImage src={image} />
      </a>
      <CardDetail>
        <CardDetailTop>
          {!(type === "list") ? (
            <LikerList>
              {like.map((l: "child" | "parent", i) => (
                <Liker type={l} key={i}>
                  {{ child: "아이", parent: "부모" }[l]}
                </Liker>
              ))}
            </LikerList>
          ) : (
            <ActivityType type={activityType}>{activityType}</ActivityType>
          )}
          {!(type === "history") && (
            <PickedIcon
              selected={localLiked}
              onClick={() => {
                setLocalLiked((s) => !s);
                toggleLike();
              }}
            />
          )}
        </CardDetailTop>
        <CardTitleContainer>
          <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
        </CardTitleContainer>
        <CardDescription>
          <CardTarget>{target}</CardTarget>
          <CardLandmark>{location}</CardLandmark>
        </CardDescription>
        <ButtonContainer>
          {type === "wishlist" && (
            <WishlistButton
              onClick={() => {
                load();
                router.push(`/new?activity_id=${_id}&activity_name=${title}`);
              }}
            >
              다녀왔어요
            </WishlistButton>
          )}
          {type === "history" && (
            <HistoryButton
              onClick={() => {
                load();
                router.push(`/diary/${diaryId}`);
              }}
            >
              일기보기
            </HistoryButton>
          )}
        </ButtonContainer>
      </CardDetail>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 43vw;
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 8rem;
  object-fit: cover;
  background: ${THEME.black200};
`;

const CardDetail = styled.div``;

const CardDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`;

const CardTitleContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 0 12px;
  margin-bottom: 8px;
  margin-top: 8px;
  color: #3c3c3c;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTarget = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  width: 100%;
  align-items: center;
  color: #999999;
  margin: 0;
  padding: 0 12px;
  margin-bottom: 5px;
  padding-top: 0;

  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CardLandmark = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #d2d2d2;
  margin: 0;
  padding: 12px;
  padding-top: 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const WishlistButton = styled.button`
  border: none;
  background: ${THEME.darker};
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  border-radius: 9999px;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;

const HistoryButton = styled(WishlistButton)`
  background: #fdf2e1;
  color: #e8a034;
`;

const activityTypes = {
  공원탐방: { background: "#d3f7e5", color: "#06592e" },
  교육체험: { background: "#fff5d0", color: "#ca9d00" },
  전시관람: { background: "#d3f7f4", color: "#065945" },
  문화행사: { background: "#ffe3e3", color: "#c15151" },
  농장체험: { background: "#efd7bb", color: "#987041" },
  키즈카페: { background: "#d3daf7", color: "#31469b" },
};

const ActivityType = styled.div<{ type: ActivityTypes }>`
  //@ts-ignore
  background: ${(p) =>
    p.type in activityTypes ? activityTypes[p.type].background : "#fefefe"};
  //@ts-ignore
  color: ${(p) =>
    p.type in activityTypes ? activityTypes[p.type].color : "#777777"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;

  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
  display: flex;
  align-items: center;
  text-align: center;
`;

const LikerList = styled.div`
  display: flex;
  gap: 8px;
`;

const Liker = styled.div<{ type: "child" | "parent" }>`
  background: ${(p) => (p.type === "child" ? "#FFF6D2" : "#FFE5F0")};
  color: ${(p) => (p.type === "child" ? "#A65F00" : "#CA4980")};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 22px;
  font-weight: 600;
  font-size: 12px;
  line-height: 137%;
`;

export default Card;
