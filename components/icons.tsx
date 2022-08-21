import { THEME } from "../constant/colors";

export const MypageIcon = ({ selected }: { selected: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
  >
    <path
      d="M14.5167 5.5905C14.5167 8.08498 12.4945 10.1072 10 10.1072C7.50557 10.1072 5.4834 8.08498 5.4834 5.5905C5.4834 3.09603 7.50557 1.07385 10 1.07385C12.4945 1.07385 14.5167 3.09603 14.5167 5.5905ZM8.65777 13.0598H11.3422C15.571 13.0598 18.9991 16.4879 18.9991 20.7167C18.9991 21.8502 18.0803 22.769 16.9468 22.769H3.05316C1.91971 22.769 1.00085 21.8502 1.00085 20.7167C1.00085 16.4879 4.42897 13.0598 8.65777 13.0598Z"
      stroke={selected ? THEME.primary : THEME.black400}
      strokeWidth="1.5"
    />
  </svg>
);

export const ActivityIcon = ({ selected }: { selected: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="27"
    viewBox="0 0 26 27"
    fill="none"
  >
    <path
      d="M11.2235 23.2697L11.2821 23.2088L11.2006 23.1867C10.4395 22.9808 9.68944 22.6437 8.95709 22.1769C7.78624 21.4306 6.71412 20.39 5.77088 19.0827C3.95776 16.57 2.87605 13.385 2.87605 10.5652C2.87605 4.76537 7.41944 0.05 13 0.05C18.5805 0.05 23.1239 4.76537 23.1239 10.5652C23.1239 13.3849 22.0422 16.57 20.2291 19.0827C19.2859 20.39 18.2138 21.4307 17.0429 22.1769L17.0698 22.219L17.0429 22.1769C16.3105 22.6437 15.5605 22.9809 14.7994 23.1867L14.7179 23.2088L14.7765 23.2697L15.5074 24.0287C16.5464 25.1077 15.8042 26.95 14.3445 26.95H11.9011C10.3497 26.95 9.56407 24.9929 10.6662 23.8484L11.2235 23.2697ZM13.036 23.8083L13 23.7709L12.964 23.8083C12.6765 24.1068 12.4559 24.334 12.2872 24.5078C12.0793 24.7219 11.9501 24.855 11.8713 24.9406C11.8355 24.9795 11.8093 25.0096 11.7905 25.0336C11.7721 25.0569 11.7586 25.0774 11.7509 25.0968C11.7422 25.119 11.7415 25.1392 11.7471 25.1589C11.7495 25.1671 11.7526 25.1742 11.7548 25.1791C11.7554 25.1805 11.756 25.1817 11.7565 25.1828C11.7581 25.1864 11.7594 25.1891 11.7607 25.1924C11.7776 25.235 11.8032 25.2619 11.8336 25.2762C11.8612 25.2892 11.8876 25.2892 11.8999 25.2891H11.9011H14.1631C14.2779 25.2891 14.3275 25.1495 14.2522 25.0714L13.036 23.8083ZM12.9998 21.7674H12.9998H12.9998H12.9998H12.9998H12.9998H12.9999H12.9999H12.9999H12.9999H12.9999H12.9999H13H13H13H13H13H13H13H13.0001H13.0001H13.0001H13.0001H13.0001H13.0001H13.0001H13.0002C15.3433 21.7673 17.476 20.1827 19.02 17.9976C20.5647 15.8114 21.5282 13.0135 21.5282 10.5652C21.5282 5.68468 17.7042 1.71085 12.9999 1.71085C8.29567 1.71085 4.47169 5.68468 4.47169 10.5652C4.47169 13.0113 5.43437 15.8092 6.97861 17.9959C8.52217 20.1817 10.6549 21.7673 12.9998 21.7674Z"
      fill={selected ? THEME.primary : THEME.black400}
      stroke="white"
      strokeWidth="0.1"
    />
    <path
      d="M12.3032 4.69945C12.3032 4.23901 12.6622 3.869 13.101 3.869C16.8116 3.869 19.8336 7.0045 19.8337 10.8625C19.8337 11.323 19.4747 11.693 19.0358 11.693C18.5969 11.693 18.238 11.3229 18.238 10.8625C18.238 7.92387 15.9353 5.52991 13.101 5.52991C12.6621 5.52991 12.3032 5.1599 12.3032 4.69945Z"
      fill={selected ? THEME.primary : THEME.black400}
      stroke="white"
      strokeWidth="0.1"
    />
  </svg>
);

export const ListIcon = ({ selected }: { selected: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="25"
    viewBox="0 0 22 25"
    fill="none"
  >
    <path
      d="M6.68066 1.48059V23.9713"
      stroke={selected ? THEME.primary : THEME.black400}
      strokeWidth="1.5"
    />
    <rect
      x="1.38379"
      y="1.33093"
      width="19.2327"
      height="22.79"
      rx="2.25"
      stroke={selected ? THEME.primary : THEME.black400}
      strokeWidth="1.5"
    />
  </svg>
);

export const MainIcon = ({ selected }: { selected: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="26"
    viewBox="0 0 28 26"
    fill="none"
  >
    <path
      d="M11.2971 2.24206L10.7904 1.68919V1.68919L11.2971 2.24206ZM2.91868 9.92231L3.42548 10.4752H3.42548L2.91868 9.92231ZM16.7029 2.24206L17.2097 1.68919L17.2097 1.68919L16.7029 2.24206ZM25.0814 9.92231L24.5746 10.4752L25.0814 9.92231ZM17.7353 24.5213H16.9853V25.2713H17.7353V24.5213ZM10.2648 24.5213V25.2713H11.0148V24.5213H10.2648ZM10.7904 1.68919L2.41189 9.36945L3.42548 10.4752L11.8039 2.79492L10.7904 1.68919ZM17.2097 1.68919C15.3937 0.024502 12.6064 0.0245005 10.7904 1.68919L11.8039 2.79492C13.0465 1.65592 14.9536 1.65592 16.1961 2.79492L17.2097 1.68919ZM25.5882 9.36945L17.2097 1.68919L16.1961 2.79492L24.5746 10.4752L25.5882 9.36945ZM27.1285 12.8709C27.1285 11.5395 26.5697 10.2691 25.5882 9.36945L24.5746 10.4752C25.2462 11.0908 25.6285 11.9599 25.6285 12.8709H27.1285ZM27.1285 20.5213V12.8709H25.6285V20.5213H27.1285ZM22.3785 25.2713C25.0019 25.2713 27.1285 23.1447 27.1285 20.5213H25.6285C25.6285 22.3163 24.1734 23.7713 22.3785 23.7713V25.2713ZM17.7353 25.2713H22.3785V23.7713H17.7353V25.2713ZM16.9853 18.2732V24.5213H18.4853V18.2732H16.9853ZM16.7353 18.0232C16.8734 18.0232 16.9853 18.1351 16.9853 18.2732H18.4853C18.4853 17.3067 17.7018 16.5232 16.7353 16.5232V18.0232ZM11.2648 18.0232H16.7353V16.5232H11.2648V18.0232ZM11.0148 18.2732C11.0148 18.1351 11.1267 18.0232 11.2648 18.0232V16.5232C10.2983 16.5232 9.51479 17.3067 9.51479 18.2732H11.0148ZM11.0148 24.5213V18.2732H9.51479V24.5213H11.0148ZM5.62159 25.2713H10.2648V23.7713H5.62159V25.2713ZM0.871582 20.5213C0.871582 23.1447 2.99824 25.2713 5.62159 25.2713V23.7713C3.82666 23.7713 2.37158 22.3162 2.37158 20.5213H0.871582ZM0.871582 12.8709V20.5213H2.37158V12.8709H0.871582ZM2.41189 9.36945C1.4304 10.2691 0.871582 11.5395 0.871582 12.8709H2.37158C2.37158 11.9599 2.75393 11.0908 3.42548 10.4752L2.41189 9.36945Z"
      fill={selected ? THEME.primary : THEME.black400}
    />
  </svg>
);

export const NewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
  >
    <path
      d="M5.01807 14.284C4.14213 15.5368 2.80433 16.3904 1.29908 16.6571V16.6571C0.983024 16.7131 0.681401 16.5022 0.625417 16.1862V16.1862C0.358779 14.6809 0.70111 13.1313 1.57708 11.8785L7.30372 3.68793L10.7448 6.09338L5.01807 14.284ZM11.4311 5.11153L7.99007 2.70608L9.16393 1.02685C9.28426 0.855789 9.4674 0.739298 9.67335 0.702819C9.87929 0.666339 10.0913 0.712836 10.2631 0.832154L12.4103 2.33315C12.5813 2.45349 12.6978 2.63663 12.7343 2.84257C12.7708 3.04851 12.7243 3.26052 12.605 3.43229L11.4311 5.11153Z"
      fill="#FCBA58"
    />
  </svg>
);

export const Emoji = {
  happy: ({ onClick }: { onClick: Function }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={() => onClick()}
    >
      <circle cx="27" cy="27" r="27" fill="#FCDE58" />
      <path
        d="M12.6077 40.3449C16.7856 40.3449 20.1724 36.9581 20.1724 32.7802C20.1724 28.6024 16.7856 25.2156 12.6077 25.2156C8.4299 25.2156 5.04309 28.6024 5.04309 32.7802C5.04309 36.9581 8.4299 40.3449 12.6077 40.3449Z"
        fill="#F7D02F"
      />
      <path
        d="M41.8577 40.3449C46.0356 40.3449 49.4224 36.9581 49.4224 32.7802C49.4224 28.6024 46.0356 25.2156 41.8577 25.2156C37.6799 25.2156 34.2931 28.6024 34.2931 32.7802C34.2931 36.9581 37.6799 40.3449 41.8577 40.3449Z"
        fill="#F7D02F"
      />
      <path
        d="M32.8693 31.6284H21.456C21.456 31.6284 20.0454 40.8709 27.3268 41.0763C34.9199 41.2901 32.8665 31.6284 32.8665 31.6284H32.8693Z"
        fill="#6A5600"
      />
      <path
        d="M29.9005 31.6284H25.2094V33.0277H29.9005V31.6284Z"
        fill="white"
      />
      <path
        d="M12.0767 22.5846C14.641 22.6558 20.3004 23.6349 23.0778 26.9431C23.2175 27.1094 23.1254 27.3585 22.9137 27.407C20.3632 27.9918 16.021 29.2123 13.4081 31.8808"
        stroke="#6A5600"
        strokeWidth="2"
      />
      <path
        d="M41.9233 22.5846C39.359 22.6558 33.6996 23.6349 30.9222 26.9431C30.7825 27.1094 30.8746 27.3585 31.0863 27.407C33.6368 27.9918 37.979 29.2123 40.5919 31.8808"
        stroke="#6A5600"
        strokeWidth="2"
      />
    </svg>
  ),
  surprised: ({ onClick }: { onClick: Function }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={() => onClick()}
    >
      <circle cx="27" cy="27" r="27" fill="#FCBA58" />
      <ellipse cx="27" cy="37.52" rx="3.5" ry="4.73977" fill="#4F2F00" />
      <path
        d="M14.0127 40.3449C18.1905 40.3449 21.5773 36.9581 21.5773 32.7802C21.5773 28.6024 18.1905 25.2156 14.0127 25.2156C9.83481 25.2156 6.448 28.6024 6.448 32.7802C6.448 36.9581 9.83481 40.3449 14.0127 40.3449Z"
        fill="#FFAC2F"
      />
      <path
        d="M40.2368 40.3449C44.4146 40.3449 47.8014 36.9581 47.8014 32.7802C47.8014 28.6024 44.4146 25.2156 40.2368 25.2156C36.0589 25.2156 32.6721 28.6024 32.6721 32.7802C32.6721 36.9581 36.0589 40.3449 40.2368 40.3449Z"
        fill="#FFAC2F"
      />
      <path
        d="M18.8036 33.2845C22.9815 33.2845 26.3683 29.8977 26.3683 25.7198C26.3683 21.542 22.9815 18.1552 18.8036 18.1552C14.6258 18.1552 11.239 21.542 11.239 25.7198C11.239 29.8977 14.6258 33.2845 18.8036 33.2845Z"
        fill="white"
      />
      <path
        d="M34.9415 33.2845C39.1194 33.2845 42.5062 29.8977 42.5062 25.7198C42.5062 21.542 39.1194 18.1552 34.9415 18.1552C30.7637 18.1552 27.3769 21.542 27.3769 25.7198C27.3769 29.8977 30.7637 33.2845 34.9415 33.2845Z"
        fill="white"
      />
      <path
        d="M33.9329 31.2672C36.9967 31.2672 39.4803 28.7835 39.4803 25.7198C39.4803 22.656 36.9967 20.1724 33.9329 20.1724C30.8692 20.1724 28.3855 22.656 28.3855 25.7198C28.3855 28.7835 30.8692 31.2672 33.9329 31.2672Z"
        fill="#4F2F00"
      />
      <path
        d="M19.8122 31.2672C22.876 31.2672 25.3597 28.7835 25.3597 25.7198C25.3597 22.656 22.876 20.1724 19.8122 20.1724C16.7485 20.1724 14.2648 22.656 14.2648 25.7198C14.2648 28.7835 16.7485 31.2672 19.8122 31.2672Z"
        fill="#4F2F00"
      />
      <path
        d="M35.9501 14.1207C37.4631 13.1121 40.4889 13.112 42.0019 16.1379"
        stroke="#E68C05"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.2993 14.1207C16.7864 13.1121 13.7605 13.112 12.2476 16.1379"
        stroke="#E68C05"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  ordinary: ({ onClick }: { onClick: Function }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={() => onClick()}
    >
      <circle cx="27" cy="27" r="27" fill="#66CC99" />
      <path
        d="M12.375 40.3449C16.5529 40.3449 19.9397 36.9581 19.9397 32.7802C19.9397 28.6024 16.5529 25.2156 12.375 25.2156C8.19718 25.2156 4.81036 28.6024 4.81036 32.7802C4.81036 36.9581 8.19718 40.3449 12.375 40.3449Z"
        fill="#4FBF87"
      />
      <path
        d="M41.625 40.3449C45.8029 40.3449 49.1897 36.9581 49.1897 32.7802C49.1897 28.6024 45.8029 25.2156 41.625 25.2156C37.4472 25.2156 34.0604 28.6024 34.0604 32.7802C34.0604 36.9581 37.4472 40.3449 41.625 40.3449Z"
        fill="#4FBF87"
      />
      <path
        d="M18.9477 33.2845C23.1255 33.2845 26.5123 29.8977 26.5123 25.7198C26.5123 21.542 23.1255 18.1552 18.9477 18.1552C14.7698 18.1552 11.383 21.542 11.383 25.7198C11.383 29.8977 14.7698 33.2845 18.9477 33.2845Z"
        fill="white"
      />
      <path
        d="M35.0856 33.2845C39.2634 33.2845 42.6502 29.8977 42.6502 25.7198C42.6502 21.542 39.2634 18.1552 35.0856 18.1552C30.9077 18.1552 27.5209 21.542 27.5209 25.7198C27.5209 29.8977 30.9077 33.2845 35.0856 33.2845Z"
        fill="white"
      />
      <path
        d="M34.077 31.2672C37.1407 31.2672 39.6244 28.7835 39.6244 25.7198C39.6244 22.656 37.1407 20.1724 34.077 20.1724C31.0132 20.1724 28.5295 22.656 28.5295 25.7198C28.5295 28.7835 31.0132 31.2672 34.077 31.2672Z"
        fill="#013A1E"
      />
      <path
        d="M19.9563 31.2672C23.02 31.2672 25.5037 28.7835 25.5037 25.7198C25.5037 22.656 23.02 20.1724 19.9563 20.1724C16.8925 20.1724 14.4089 22.656 14.4089 25.7198C14.4089 28.7835 16.8925 31.2672 19.9563 31.2672Z"
        fill="#013A1E"
      />
      <path
        d="M23.9908 35.3018H30.5468"
        stroke="#013A1E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  sad: ({ onClick }: { onClick: Function }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={() => onClick()}
    >
      <circle cx="27" cy="27" r="27" fill="#59D2F7" />
      <path
        d="M14.2814 40.888C18.4592 40.888 21.846 37.5012 21.846 33.3233C21.846 29.1455 18.4592 25.7587 14.2814 25.7587C10.1035 25.7587 6.71674 29.1455 6.71674 33.3233C6.71674 37.5012 10.1035 40.888 14.2814 40.888Z"
        fill="#1DC8FC"
      />
      <path
        d="M40.5055 40.888C44.6834 40.888 48.0702 37.5012 48.0702 33.3233C48.0702 29.1455 44.6834 25.7587 40.5055 25.7587C36.3277 25.7587 32.9409 29.1455 32.9409 33.3233C32.9409 37.5012 36.3277 40.888 40.5055 40.888Z"
        fill="#1DC8FC"
      />
      <path
        d="M19.0723 33.8276C23.2501 33.8276 26.6369 30.4407 26.6369 26.2629C26.6369 22.0851 23.2501 18.6982 19.0723 18.6982C14.8944 18.6982 11.5076 22.0851 11.5076 26.2629C11.5076 30.4407 14.8944 33.8276 19.0723 33.8276Z"
        fill="white"
      />
      <path
        d="M35.2102 33.8276C39.3881 33.8276 42.7749 30.4407 42.7749 26.2629C42.7749 22.0851 39.3881 18.6982 35.2102 18.6982C31.0324 18.6982 27.6456 22.0851 27.6456 26.2629C27.6456 30.4407 31.0324 33.8276 35.2102 33.8276Z"
        fill="white"
      />
      <path
        d="M34.2017 33.8276C37.2654 33.8276 39.7491 31.344 39.7491 28.2802C39.7491 25.2164 37.2654 22.7328 34.2017 22.7328C31.1379 22.7328 28.6542 25.2164 28.6542 28.2802C28.6542 31.344 31.1379 33.8276 34.2017 33.8276Z"
        fill="#003B4D"
      />
      <path
        d="M20.0809 33.8276C23.1447 33.8276 25.6283 31.344 25.6283 28.2802C25.6283 25.2164 23.1447 22.7328 20.0809 22.7328C17.0172 22.7328 14.5335 25.2164 14.5335 28.2802C14.5335 31.344 17.0172 33.8276 20.0809 33.8276Z"
        fill="#003B4D"
      />
      <path
        d="M12.7684 15.6898C14.2944 16.7071 17.3464 16.7072 18.8723 13.6551"
        stroke="#0C9CC8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M41.062 15.6898C39.536 16.7071 36.484 16.7072 34.9581 13.6551"
        stroke="#0C9CC8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.6593 36.5384C24.6315 35.7838 27.6593 34.0385 30.6593 36.5384"
        stroke="#003B4D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  angry: ({ onClick }: { onClick: Function }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      onClick={() => onClick()}
    >
      <circle cx="27" cy="27" r="27" fill="#FFA8A8" />
      <path
        d="M40.621 12.5239C40.1675 11.6513 39.9125 10.2689 41.7828 9.77725"
        stroke="#F57D7D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40.7736 7.7384C39.8698 8.12593 38.4723 8.27767 38.1207 6.37605"
        stroke="#F57D7D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M35.7068 12.3353C36.5343 11.804 37.8876 11.4237 38.5481 13.2413"
        stroke="#F57D7D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M35.8866 7.34495C36.4433 8.15563 36.8652 9.49656 35.069 10.213"
        stroke="#F57D7D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.6939 40.888C17.8718 40.888 21.2586 37.5012 21.2586 33.3233C21.2586 29.1455 17.8718 25.7587 13.6939 25.7587C9.51608 25.7587 6.12927 29.1455 6.12927 33.3233C6.12927 37.5012 9.51608 40.888 13.6939 40.888Z"
        fill="#FF9191"
      />
      <path
        d="M39.9181 40.888C44.096 40.888 47.4828 37.5012 47.4828 33.3233C47.4828 29.1455 44.096 25.7587 39.9181 25.7587C35.7403 25.7587 32.3535 29.1455 32.3535 33.3233C32.3535 37.5012 35.7403 40.888 39.9181 40.888Z"
        fill="#FF9191"
      />
      <path
        d="M18.9311 35.8448C23.1089 35.8448 26.4957 32.458 26.4957 28.2801C26.4957 24.1023 23.1089 20.7155 18.9311 20.7155C14.7532 20.7155 11.3664 24.1023 11.3664 28.2801C11.3664 32.458 14.7532 35.8448 18.9311 35.8448Z"
        fill="white"
      />
      <path
        d="M35.069 35.8448C39.2468 35.8448 42.6336 32.458 42.6336 28.2801C42.6336 24.1023 39.2468 20.7155 35.069 20.7155C30.8911 20.7155 27.5043 24.1023 27.5043 28.2801C27.5043 32.458 30.8911 35.8448 35.069 35.8448Z"
        fill="white"
      />
      <path
        d="M34.3125 33.8276C37.3762 33.8276 39.8599 31.344 39.8599 28.2802C39.8599 25.2164 37.3762 22.7328 34.3125 22.7328C31.2487 22.7328 28.7651 25.2164 28.7651 28.2802C28.7651 31.344 31.2487 33.8276 34.3125 33.8276Z"
        fill="#003B4D"
      />
      <path
        d="M20.1918 33.8276C23.2556 33.8276 25.7392 31.344 25.7392 28.2802C25.7392 25.2164 23.2556 22.7328 20.1918 22.7328C17.1281 22.7328 14.6444 25.2164 14.6444 28.2802C14.6444 31.344 17.1281 33.8276 20.1918 33.8276Z"
        fill="#003B4D"
      />
      <path
        d="M18.6854 16.6488L23.8319 18.6538"
        stroke="#D25959"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34.9267 16.6488L29.7801 18.6538"
        stroke="#D25959"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24.4231 37.6647L26.7464 36.0298C27.0865 35.7904 27.5393 35.7866 27.8834 36.0201L30.307 37.6647"
        stroke="#003B4C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="20"
    height="20"
    viewBox="0 0 90 90"
  >
    <defs></defs>
    <g>
      <path
        d="M 37.882 90 c -0.338 0 -0.676 -0.086 -0.981 -0.258 c -0.629 -0.354 -1.019 -1.02 -1.019 -1.742 V 45.354 L 3.923 3.208 C 3.464 2.604 3.388 1.791 3.726 1.11 S 4.758 0 5.517 0 h 78.966 c 0.76 0 1.453 0.43 1.791 1.11 s 0.262 1.493 -0.197 2.098 L 54.118 45.354 V 79.37 c 0 0.699 -0.365 1.348 -0.963 1.71 l -14.237 8.63 C 38.601 89.903 38.241 90 37.882 90 z M 9.543 4 l 29.932 39.474 c 0.264 0.348 0.406 0.772 0.406 1.208 v 39.767 l 10.236 -6.205 V 44.682 c 0 -0.437 0.143 -0.861 0.406 -1.208 L 80.457 4 H 9.543 z M 52.118 79.37 h 0.01 H 52.118 z"
        transform=" matrix(1 0 0 1 0 0) "
      />
    </g>
  </svg>
);

export const MenuIcon = () => (
  <svg
    width="11"
    height="6"
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L4.83564 4.40945C5.21452 4.74624 5.78548 4.74624 6.16436 4.40945L10 1"
      stroke="#FCBA58"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ToggleIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="22"
      height="22"
      rx="15"
      stroke="#DEDEDE"
      strokeWidth="2"
    />
    <path
      d="M6.24314 11.0487L9.89319 15.2102C10.3031 15.6775 11.0355 15.6616 11.4247 15.1769L16.5856 8.74992"
      stroke="#DEDEDE"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ToggleIconToggled = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="21"
      height="21"
      rx="10.5"
      stroke="#FCBA58"
      strokeWidth="2"
    />
    <path
      d="M6.24314 11.0487L9.89319 15.2102C10.3031 15.6775 11.0355 15.6616 11.4247 15.1769L16.5856 8.74992"
      stroke="#FCBA58"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const PickedIcon = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: Function;
}) =>
  selected ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <g clipPath="url(#clip0_75_3556)">
        <path
          d="M0.5 5.10061V5.10052C0.499895 4.48967 0.622265 3.88486 0.860038 3.3214C1.09781 2.75793 1.44627 2.24702 1.88518 1.81862C2.3241 1.39022 2.84469 1.05292 3.41658 0.826587C3.98848 0.600254 4.60012 0.489473 5.21573 0.500787L5.21573 0.500829L5.22218 0.500864C5.96174 0.504922 6.69197 0.664626 7.36478 0.969368C8.03758 1.27411 8.63761 1.71692 9.12548 2.26849L9.5 2.6919L9.87452 2.26849C10.3624 1.71692 10.9624 1.27411 11.6352 0.969368C12.308 0.664626 13.0383 0.504922 13.7778 0.500864V0.500905L13.7843 0.500787C14.3999 0.489473 15.0115 0.600254 15.5834 0.826587C16.1553 1.05292 16.6759 1.39022 17.1148 1.81862C17.5537 2.24702 17.9022 2.75793 18.14 3.3214C18.3777 3.88486 18.5001 4.48967 18.5 5.10052V5.10061C18.5 6.68311 17.7747 8.16016 16.3901 9.81192C15.0034 11.4662 13.0114 13.2318 10.5627 15.4023L10.5476 15.4157C10.5473 15.4159 10.547 15.4162 10.5467 15.4165C9.95126 15.9381 9.05075 15.9328 8.45454 15.4036L8.12265 15.7776L8.4539 15.4031C5.9975 13.2305 3.9996 11.4628 2.60975 9.80651C1.22517 8.15647 0.5 6.68063 0.5 5.10061Z"
          fill="#FCBA58"
          stroke="#FCBA58"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_3556">
          <rect width="20" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <g clipPath="url(#clip0_75_3556)">
        <path
          d="M0.5 5.10061V5.10052C0.499895 4.48967 0.622265 3.88486 0.860038 3.3214C1.09781 2.75793 1.44627 2.24702 1.88518 1.81862C2.3241 1.39022 2.84469 1.05292 3.41658 0.826587C3.98848 0.600254 4.60012 0.489473 5.21573 0.500787L5.21573 0.500829L5.22218 0.500864C5.96174 0.504922 6.69197 0.664626 7.36478 0.969368C8.03758 1.27411 8.63761 1.71692 9.12548 2.26849L9.5 2.6919L9.87452 2.26849C10.3624 1.71692 10.9624 1.27411 11.6352 0.969368C12.308 0.664626 13.0383 0.504922 13.7778 0.500864V0.500905L13.7843 0.500787C14.3999 0.489473 15.0115 0.600254 15.5834 0.826587C16.1553 1.05292 16.6759 1.39022 17.1148 1.81862C17.5537 2.24702 17.9022 2.75793 18.14 3.3214C18.3777 3.88486 18.5001 4.48967 18.5 5.10052V5.10061C18.5 6.68311 17.7747 8.16016 16.3901 9.81192C15.0034 11.4662 13.0114 13.2318 10.5627 15.4023L10.5476 15.4157C10.5473 15.4159 10.547 15.4162 10.5467 15.4165C9.95126 15.9381 9.05075 15.9328 8.45454 15.4036L8.12265 15.7776L8.4539 15.4031C5.9975 13.2305 3.9996 11.4628 2.60975 9.80651C1.22517 8.15647 0.5 6.68063 0.5 5.10061Z"
          stroke="#D2D2D2"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_3556">
          <rect width="20" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

export const HappyIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#FCDE58" />
    <path
      d="M7.0041 22.4138C9.32512 22.4138 11.2067 20.5322 11.2067 18.2112C11.2067 15.8902 9.32512 14.0086 7.0041 14.0086C4.68308 14.0086 2.80151 15.8902 2.80151 18.2112C2.80151 20.5322 4.68308 22.4138 7.0041 22.4138Z"
      fill="#F7D02F"
    />
    <path
      d="M23.2543 22.4138C25.5754 22.4138 27.4569 20.5322 27.4569 18.2112C27.4569 15.8902 25.5754 14.0086 23.2543 14.0086C20.9333 14.0086 19.0518 15.8902 19.0518 18.2112C19.0518 20.5322 20.9333 22.4138 23.2543 22.4138Z"
      fill="#F7D02F"
    />
    <path
      d="M18.2605 17.5714H11.9198C11.9198 17.5714 11.1361 22.7061 15.1813 22.8202C19.3997 22.939 18.2589 17.5714 18.2589 17.5714H18.2605Z"
      fill="#6A5600"
    />
    <path d="M16.6115 17.5714H14.0054V18.3487H16.6115V17.5714Z" fill="white" />
    <path
      d="M6.70923 12.5471C8.09323 12.5855 11.1 13.1 12.6852 14.8144C12.8326 14.9739 12.7412 15.2225 12.5299 15.2729C11.0948 15.6146 8.83429 16.2967 7.44888 17.7116"
      stroke="#6A5600"
      strokeWidth="2"
    />
    <path
      d="M23.2908 12.5471C21.9068 12.5855 18.9 13.1 17.3148 14.8144C17.1674 14.9739 17.2588 15.2225 17.4701 15.2729C18.9052 15.6146 21.1657 16.2967 22.5511 17.7116"
      stroke="#6A5600"
      strokeWidth="2"
    />
  </svg>
);

export const SurprisedIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#FCBA58" />
    <ellipse
      cx="15.0001"
      cy="20.8445"
      rx="1.94444"
      ry="2.6332"
      fill="#4F2F00"
    />
    <path
      d="M7.78486 22.4138C10.1059 22.4138 11.9874 20.5322 11.9874 18.2112C11.9874 15.8902 10.1059 14.0086 7.78486 14.0086C5.46384 14.0086 3.58228 15.8902 3.58228 18.2112C3.58228 20.5322 5.46384 22.4138 7.78486 22.4138Z"
      fill="#FFAC2F"
    />
    <path
      d="M22.354 22.4138C24.675 22.4138 26.5565 20.5322 26.5565 18.2112C26.5565 15.8902 24.675 14.0086 22.354 14.0086C20.0329 14.0086 18.1514 15.8902 18.1514 18.2112C18.1514 20.5322 20.0329 22.4138 22.354 22.4138Z"
      fill="#FFAC2F"
    />
    <path
      d="M10.4465 18.4914C12.7675 18.4914 14.6491 16.6098 14.6491 14.2888C14.6491 11.9677 12.7675 10.0862 10.4465 10.0862C8.12546 10.0862 6.2439 11.9677 6.2439 14.2888C6.2439 16.6098 8.12546 18.4914 10.4465 18.4914Z"
      fill="white"
    />
    <path
      d="M19.4121 18.4914C21.7331 18.4914 23.6146 16.6098 23.6146 14.2888C23.6146 11.9677 21.7331 10.0862 19.4121 10.0862C17.091 10.0862 15.2095 11.9677 15.2095 14.2888C15.2095 16.6098 17.091 18.4914 19.4121 18.4914Z"
      fill="white"
    />
    <path
      d="M18.8517 17.3706C20.5538 17.3706 21.9336 15.9908 21.9336 14.2887C21.9336 12.5867 20.5538 11.2068 18.8517 11.2068C17.1496 11.2068 15.7698 12.5867 15.7698 14.2887C15.7698 15.9908 17.1496 17.3706 18.8517 17.3706Z"
      fill="#4F2F00"
    />
    <path
      d="M11.0069 17.3706C12.709 17.3706 14.0888 15.9908 14.0888 14.2887C14.0888 12.5867 12.709 11.2068 11.0069 11.2068C9.30486 11.2068 7.92505 12.5867 7.92505 14.2887C7.92505 15.9908 9.30486 17.3706 11.0069 17.3706Z"
      fill="#4F2F00"
    />
    <path
      d="M19.9724 7.84484C20.8129 7.2845 22.494 7.28446 23.3345 8.96553"
      stroke="#E68C05"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.1665 7.84484C9.32599 7.2845 7.64495 7.28446 6.80443 8.96553"
      stroke="#E68C05"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const NeutralIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#66CC99" />
    <path
      d="M6.87495 22.4138C9.19597 22.4138 11.0775 20.5323 11.0775 18.2113C11.0775 15.8902 9.19597 14.0087 6.87495 14.0087C4.55393 14.0087 2.67236 15.8902 2.67236 18.2113C2.67236 20.5323 4.55393 22.4138 6.87495 22.4138Z"
      fill="#4FBF87"
    />
    <path
      d="M23.1249 22.4138C25.446 22.4138 27.3275 20.5323 27.3275 18.2113C27.3275 15.8902 25.446 14.0087 23.1249 14.0087C20.8039 14.0087 18.9224 15.8902 18.9224 18.2113C18.9224 20.5323 20.8039 22.4138 23.1249 22.4138Z"
      fill="#4FBF87"
    />
    <path
      d="M10.5266 18.4914C12.8476 18.4914 14.7291 16.6098 14.7291 14.2888C14.7291 11.9677 12.8476 10.0862 10.5266 10.0862C8.20554 10.0862 6.32397 11.9677 6.32397 14.2888C6.32397 16.6098 8.20554 18.4914 10.5266 18.4914Z"
      fill="white"
    />
    <path
      d="M19.4919 18.4914C21.8129 18.4914 23.6945 16.6098 23.6945 14.2888C23.6945 11.9677 21.8129 10.0862 19.4919 10.0862C17.1709 10.0862 15.2893 11.9677 15.2893 14.2888C15.2893 16.6098 17.1709 18.4914 19.4919 18.4914Z"
      fill="white"
    />
    <path
      d="M18.9315 17.3706C20.6336 17.3706 22.0134 15.9908 22.0134 14.2887C22.0134 12.5867 20.6336 11.2068 18.9315 11.2068C17.2294 11.2068 15.8496 12.5867 15.8496 14.2887C15.8496 15.9908 17.2294 17.3706 18.9315 17.3706Z"
      fill="#013A1E"
    />
    <path
      d="M11.0865 17.3706C12.7886 17.3706 14.1684 15.9908 14.1684 14.2887C14.1684 12.5867 12.7886 11.2068 11.0865 11.2068C9.38445 11.2068 8.00464 12.5867 8.00464 14.2887C8.00464 15.9908 9.38445 17.3706 11.0865 17.3706Z"
      fill="#013A1E"
    />
    <path
      d="M13.3284 19.6121H16.9706"
      stroke="#013A1E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const SadIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#59D2F7" />
    <path
      d="M7.93428 22.7155C10.2553 22.7155 12.1369 20.834 12.1369 18.513C12.1369 16.1919 10.2553 14.3104 7.93428 14.3104C5.61325 14.3104 3.73169 16.1919 3.73169 18.513C3.73169 20.834 5.61325 22.7155 7.93428 22.7155Z"
      fill="#1DC8FC"
    />
    <path
      d="M22.5034 22.7155C24.8244 22.7155 26.706 20.834 26.706 18.513C26.706 16.1919 24.8244 14.3104 22.5034 14.3104C20.1823 14.3104 18.3008 16.1919 18.3008 18.513C18.3008 20.834 20.1823 22.7155 22.5034 22.7155Z"
      fill="#1DC8FC"
    />
    <path
      d="M10.5959 18.7931C12.9169 18.7931 14.7985 16.9116 14.7985 14.5905C14.7985 12.2695 12.9169 10.3879 10.5959 10.3879C8.27487 10.3879 6.39331 12.2695 6.39331 14.5905C6.39331 16.9116 8.27487 18.7931 10.5959 18.7931Z"
      fill="white"
    />
    <path
      d="M19.5617 18.7931C21.8827 18.7931 23.7643 16.9116 23.7643 14.5905C23.7643 12.2695 21.8827 10.3879 19.5617 10.3879C17.2407 10.3879 15.3591 12.2695 15.3591 14.5905C15.3591 16.9116 17.2407 18.7931 19.5617 18.7931Z"
      fill="white"
    />
    <path
      d="M19.0011 18.7931C20.7032 18.7931 22.083 17.4133 22.083 15.7112C22.083 14.0091 20.7032 12.6293 19.0011 12.6293C17.299 12.6293 15.9192 14.0091 15.9192 15.7112C15.9192 17.4133 17.299 18.7931 19.0011 18.7931Z"
      fill="#003B4D"
    />
    <path
      d="M11.1566 18.7931C12.8587 18.7931 14.2385 17.4133 14.2385 15.7112C14.2385 14.0091 12.8587 12.6293 11.1566 12.6293C9.45452 12.6293 8.07471 14.0091 8.07471 15.7112C8.07471 17.4133 9.45452 18.7931 11.1566 18.7931Z"
      fill="#003B4D"
    />
    <path
      d="M7.09375 8.71654C7.94151 9.28171 9.63704 9.28175 10.4848 7.58619"
      stroke="#0C9CC8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22.8125 8.71654C21.9647 9.28171 20.2692 9.28175 19.4214 7.58619"
      stroke="#0C9CC8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.1445 20.2992C13.6847 19.8799 15.3668 18.9103 17.0334 20.2992"
      stroke="#003B4D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const AngryIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#FFA8A8" />
    <path
      d="M22.5672 6.95773C22.3153 6.47295 22.1736 5.70493 23.2127 5.43181"
      stroke="#F57D7D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M22.6521 4.29904C22.15 4.51433 21.3736 4.59863 21.1783 3.54217"
      stroke="#F57D7D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M19.8371 6.8529C20.2968 6.5577 21.0487 6.34645 21.4156 7.3562"
      stroke="#F57D7D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M19.9372 4.08047C20.2465 4.53084 20.4809 5.27581 19.4829 5.67381"
      stroke="#F57D7D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7.60786 22.7155C9.92888 22.7155 11.8104 20.8339 11.8104 18.5129C11.8104 16.1919 9.92888 14.3103 7.60786 14.3103C5.28684 14.3103 3.40527 16.1919 3.40527 18.5129C3.40527 20.8339 5.28684 22.7155 7.60786 22.7155Z"
      fill="#FF9191"
    />
    <path
      d="M22.177 22.7155C24.498 22.7155 26.3795 20.8339 26.3795 18.5129C26.3795 16.1919 24.498 14.3103 22.177 14.3103C19.8559 14.3103 17.9744 16.1919 17.9744 18.5129C17.9744 20.8339 19.8559 22.7155 22.177 22.7155Z"
      fill="#FF9191"
    />
    <path
      d="M10.517 19.9138C12.8381 19.9138 14.7196 18.0322 14.7196 15.7112C14.7196 13.3902 12.8381 11.5086 10.517 11.5086C8.19602 11.5086 6.31445 13.3902 6.31445 15.7112C6.31445 18.0322 8.19602 19.9138 10.517 19.9138Z"
      fill="white"
    />
    <path
      d="M19.4829 19.9138C21.8039 19.9138 23.6854 18.0322 23.6854 15.7112C23.6854 13.3902 21.8039 11.5086 19.4829 11.5086C17.1618 11.5086 15.2803 13.3902 15.2803 15.7112C15.2803 18.0322 17.1618 19.9138 19.4829 19.9138Z"
      fill="white"
    />
    <path
      d="M19.0626 18.7931C20.7647 18.7931 22.1445 17.4133 22.1445 15.7112C22.1445 14.0091 20.7647 12.6293 19.0626 12.6293C17.3605 12.6293 15.9807 14.0091 15.9807 15.7112C15.9807 17.4133 17.3605 18.7931 19.0626 18.7931Z"
      fill="#003B4D"
    />
    <path
      d="M11.2179 18.7931C12.92 18.7931 14.2998 17.4133 14.2998 15.7112C14.2998 14.0091 12.92 12.6293 11.2179 12.6293C9.5158 12.6293 8.13599 14.0091 8.13599 15.7112C8.13599 17.4133 9.5158 18.7931 11.2179 18.7931Z"
      fill="#003B4D"
    />
    <path
      d="M10.3809 9.24933L13.2401 10.3632"
      stroke="#D25959"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19.4038 9.24933L16.5446 10.3632"
      stroke="#D25959"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.5686 20.9248L14.6081 20.1933C14.9483 19.954 15.401 19.9501 15.7451 20.1836L16.8374 20.9248"
      stroke="#003B4C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Logo = () => (
  <svg
    width="257"
    height="233"
    viewBox="0 0 257 233"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_250_97)">
      <path
        d="M248.653 119.425C248.593 102.083 238.364 87.1762 223.695 80.4331C225.593 75.5395 226.638 70.215 226.616 64.6369C226.534 40.9183 207.441 21.7387 183.969 21.7983C179.156 21.8129 174.538 22.6419 170.228 24.1437C163.185 10.1413 148.784 0.558077 132.187 0.600839C115.856 0.644815 101.715 9.9984 94.6469 23.6751C90.9469 22.6238 87.0495 22.0538 83.0187 22.0664C59.5467 22.126 40.5869 41.4051 40.6695 65.1237C40.6869 70.4778 41.6831 75.5953 43.4699 80.3201C28.1489 86.8392 17.4178 102.176 17.4821 120.028C17.5402 137.004 27.3433 151.652 41.5174 158.586C41.1826 160.782 41.0084 163.032 41.0169 165.324C41.0995 189.043 60.1916 208.222 83.6637 208.163C88.631 208.15 93.3951 207.269 97.824 205.671C105.521 216.944 118.398 224.318 132.968 224.283C147.858 224.245 160.924 216.465 168.476 204.728C173.459 206.782 178.91 207.914 184.621 207.9C208.093 207.84 227.052 188.561 226.97 164.843C226.96 162.297 226.721 159.807 226.293 157.383C239.655 150.12 248.717 135.837 248.661 119.425L248.653 119.425Z"
        fill="#FCDE58"
      />
      <path
        d="M102.686 129.133C112.317 124.938 116.728 113.703 112.538 104.037C108.349 94.3718 97.1443 89.9367 87.513 94.1312C77.8817 98.3258 73.4705 109.561 77.6604 119.227C81.8502 128.892 93.0544 133.327 102.686 129.133Z"
        fill="#F7D02F"
      />
      <path
        d="M185.847 128.916C195.479 124.722 199.89 113.486 195.7 103.82C191.51 94.155 180.306 89.7199 170.675 93.9145C161.043 98.109 156.632 109.345 160.822 119.01C165.012 128.675 176.216 133.111 185.847 128.916Z"
        fill="#F7D02F"
      />
      <path
        d="M119.936 109.542C132.463 104.087 138.201 89.4724 132.751 76.9006C127.301 64.3287 112.728 58.5601 100.2 64.0159C87.673 69.4717 81.9354 84.086 87.3851 96.6578C92.8348 109.23 107.408 114.998 119.936 109.542Z"
        fill="white"
      />
      <path
        d="M172.989 109.405C185.516 103.949 191.254 89.3351 185.804 76.7633C180.354 64.1915 165.781 58.4228 153.253 63.8786C140.726 69.3344 134.988 83.9487 140.438 96.5205C145.888 109.092 160.461 114.861 172.989 109.405Z"
        fill="white"
      />
      <path
        d="M120.157 102.413C128.765 98.6637 132.707 88.6218 128.963 79.9832C125.218 71.3447 115.204 67.3808 106.596 71.1297C97.9879 74.8785 94.0453 84.9205 97.79 93.5591C101.535 102.198 111.549 106.161 120.157 102.413Z"
        fill="#351C03"
      />
      <path
        d="M167.179 102.309C175.787 98.5598 179.729 88.5178 175.985 79.8793C172.24 71.2407 162.226 67.2768 153.618 71.0257C145.01 74.7746 141.067 84.8166 144.812 93.4551C148.557 102.094 158.571 106.058 167.179 102.309Z"
        fill="#351C03"
      />
      <path
        d="M152.361 115.669L122.126 115.748C122.126 115.748 118.478 140.376 137.77 140.875C157.061 141.374 152.362 115.673 152.362 115.673L152.361 115.669Z"
        fill="#351C03"
      />
      <path
        d="M142.613 122.397L131.664 122.425C131.255 122.426 130.923 122.097 130.922 121.686L130.902 115.723L143.328 115.691L143.349 121.654C143.35 122.064 143.022 122.397 142.613 122.397Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_250_97">
        <rect width="257" height="233" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoText = () => (
  <svg
    width="153"
    height="46"
    viewBox="0 0 153 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.8105 4.53702C9.8105 1.76215 7.63039 0.00117617 4.90525 0.00117617C2.18011 0.00117617 0 1.76215 0 4.53702V41.4642C0 44.239 2.18011 46 4.90525 46C7.63039 46 9.8105 44.239 9.8105 41.4642V31.7521L15.9693 25.7221L29.1045 43.9188C30.7396 46.2135 33.3557 46.5336 35.5358 45.0395C37.7704 43.4919 38.043 40.7704 36.5714 38.7426L22.5097 19.3185L34.3368 7.7388C36.3534 5.76437 36.2989 3.20295 34.3913 1.33525C32.4837 -0.532452 29.6495 -0.372366 27.8509 1.38861L9.8105 19.0517V4.53702Z"
      fill="#FCBA58"
    />
    <path
      d="M59.9756 9.12623C62.3193 9.12623 63.6818 7.04508 63.6818 4.91056C63.6818 2.72268 62.3193 0.694895 59.9756 0.694895H44.8239C42.4802 0.694895 41.1177 2.77605 41.1177 4.91056C41.1177 7.09844 42.4802 9.12623 44.8239 9.12623H47.4945V36.8749H44.8239C42.4802 36.8749 41.1177 38.9561 41.1177 41.0906C41.1177 43.2785 42.4802 45.3063 44.8239 45.3063H59.9756C62.3193 45.3063 63.6818 43.2251 63.6818 41.0906C63.6818 38.9027 62.3193 36.8749 59.9756 36.8749H57.305V9.12623H59.9756Z"
      fill="#FCBA58"
    />
    <path
      d="M86.6641 45.3063C100.78 45.3063 108.193 35.9144 108.193 22.9472C108.193 9.98004 100.78 0.694895 86.7186 0.694895H75.6546C72.3844 0.694895 70.2043 2.82941 70.2043 6.03118V39.97C70.2043 43.1718 72.3844 45.3063 75.6546 45.3063H86.6641ZM85.9011 9.12623C95.0576 9.12623 98.4912 14.5159 98.4912 22.9472C98.4912 31.3786 95.0031 36.8749 85.9011 36.8749H79.9058V9.12623H85.9011Z"
      fill="#FCBA58"
    />
    <path
      d="M143.295 42.8516C144.33 45.3596 147.11 46.587 149.835 45.6265C152.342 44.7193 153.596 42.1579 152.724 40.0234L137.136 3.4164C136.209 1.22852 134.356 0.00117617 131.795 0.00117617C129.451 0.00117617 127.489 1.22852 126.562 3.4164L110.865 40.0234C109.939 42.1045 111.247 44.7727 113.809 45.6265C116.588 46.587 119.368 45.413 120.403 42.8516L122.802 36.8216H140.842L143.295 42.8516ZM131.795 14.6226L137.408 28.497H126.181L131.795 14.6226Z"
      fill="#FCBA58"
    />
  </svg>
);
