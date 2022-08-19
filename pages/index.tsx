import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>Main Page</div>
      <div>Issue 7</div>
      <Link href="/new">
        <a>새 일기</a>
      </Link>
    </Layout>
  );
};

export default Home;
