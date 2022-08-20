import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/footer";

const DiaryDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const [diary, setDiary] = useState(null as any);

  const fetchData = useCallback(async () => {
    const result = await (
      await fetch(`${process.env.NEXT_APP_API_HOST ?? "/api"}/diary/${id}`)
    ).json();
    setDiary(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <img src={diary?.emotion} alt="emotion" />
      <div>{diary?.question}</div>
      <div>{diary?.answer}</div>
      <Footer />
    </>
  );
};

export default DiaryDetail;
