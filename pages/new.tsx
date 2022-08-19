import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/layout";
import { useAlertContext } from "../hooks/useAlertContext";

const New: NextPage = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.back();
  };
  const { push } = useAlertContext();

  return (
    <Layout>
      <div>New Diary</div>
      <div>Issue 1</div>
      <Textarea />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      <CancleButton
        onClick={() => {
          push({
            message: (
              <>
                정말 삭제하시겠어요?
                <br />
                작성한 내용이 모두 사라져요.
              </>
            ),
            twoButton: true,
            buttonText: "삭제",
            onClose: () => {},
          });
        }}
      >
        취소
      </CancleButton>
    </Layout>
  );
};

export default New;

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const SubmitButton = styled.button``;

const CancleButton = styled(SubmitButton)``;
