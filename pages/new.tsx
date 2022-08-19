import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../components/layout";

const New: NextPage = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.back();
  };

  return (
    <Layout>
      <div>New Diary</div>
      <div>Issue 1</div>
      <Textarea />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </Layout>
  );
};

export default New;

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const SubmitButton = styled.button``;
