import { useRouter } from "next/router";
import styled from "styled-components";
import { THEME } from "../constant/colors";

const Header = ({
  title,
  hasBackButton,
}: {
  title?: string;
  hasBackButton: boolean;
}) => {
  const router = useRouter();
  return (
    <Main>
      {router.asPath === "/main" ? (
        <Logo>
          <img src="/icon.png" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 158 50"
            fill="none"
          >
            <path
              d="M10.4906 5.65198C10.4906 2.73998 8.25064 0.891981 5.45064 0.891981C2.65064 0.891981 0.410645 2.73998 0.410645 5.65198V44.404C0.410645 47.316 2.65064 49.164 5.45064 49.164C8.25064 49.164 10.4906 47.316 10.4906 44.404V34.212L16.8186 27.884L30.3146 46.98C31.9946 49.388 34.6826 49.724 36.9226 48.156C39.2186 46.532 39.4986 43.676 37.9866 41.548L23.5386 21.164L35.6906 9.01198C37.7626 6.93998 37.7066 4.25198 35.7466 2.29198C33.7866 0.331982 30.8746 0.49998 29.0266 2.34798L10.4906 20.884V5.65198Z"
              fill="#FCBA58"
            />
            <path
              d="M62.0338 10.468C64.4418 10.468 65.8418 8.28398 65.8418 6.04398C65.8418 3.74798 64.4418 1.61998 62.0338 1.61998H46.4658C44.0578 1.61998 42.6578 3.80398 42.6578 6.04398C42.6578 8.33998 44.0578 10.468 46.4658 10.468H49.2098V39.588H46.4658C44.0578 39.588 42.6578 41.772 42.6578 44.012C42.6578 46.308 44.0578 48.436 46.4658 48.436H62.0338C64.4418 48.436 65.8418 46.252 65.8418 44.012C65.8418 41.716 64.4418 39.588 62.0338 39.588H59.2898V10.468H62.0338Z"
              fill="#FCBA58"
            />
            <path
              d="M89.4555 48.436C103.959 48.436 111.575 38.58 111.575 24.972C111.575 11.364 103.959 1.61998 89.5115 1.61998H78.1435C74.7835 1.61998 72.5435 3.85998 72.5435 7.21998V42.836C72.5435 46.196 74.7835 48.436 78.1435 48.436H89.4555ZM88.6715 10.468C98.0795 10.468 101.607 16.124 101.607 24.972C101.607 33.82 98.0235 39.588 88.6715 39.588H82.5115V10.468H88.6715Z"
              fill="#FCBA58"
            />
            <path
              d="M147.642 45.86C148.706 48.492 151.562 49.78 154.362 48.772C156.938 47.82 158.226 45.132 157.33 42.892L141.314 4.47598C140.362 2.17998 138.458 0.891981 135.826 0.891981C133.418 0.891981 131.402 2.17998 130.45 4.47598L114.322 42.892C113.37 45.076 114.714 47.876 117.346 48.772C120.202 49.78 123.058 48.548 124.122 45.86L126.586 39.532H145.122L147.642 45.86ZM135.826 16.236L141.594 30.796H130.058L135.826 16.236Z"
              fill="#FCBA58"
            />
          </svg>
        </Logo>
      ) : (
        <>
          {hasBackButton && (
            <Back onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="8 8 32 32"
                fill="none"
              >
                <path
                  d="M28 16L20.3536 23.6464C20.1583 23.8417 20.1583 24.1583 20.3536 24.3536L28 32"
                  stroke="#3C3C3C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </Back>
          )}
          {title}
        </>
      )}
    </Main>
  );
};

export default Header;

const Main = styled.header`
  height: 4rem;
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  /* background-color: #fbfbfb; */
  background-color: white;
  display: flex;
  align-items: center;
  color: ${THEME.black900};
  font-size: 20px;
  font-weight: 700;
  gap: 0.5rem;
  svg {
    margin-top: 4px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    height: 32px;
  }
  svg {
    height: 24px;
    margin-bottom: 2px;
  }
`;

const Back = styled.button`
  background: none;
  border: none;
  padding: 0;
`;
