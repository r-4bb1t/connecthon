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
      stroke={selected ? "#FCBA58" : "#DEDEDE"}
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
      fill={selected ? "#FCBA58" : "#DEDEDE"}
      stroke="white"
      strokeWidth="0.1"
    />
    <path
      d="M12.3032 4.69945C12.3032 4.23901 12.6622 3.869 13.101 3.869C16.8116 3.869 19.8336 7.0045 19.8337 10.8625C19.8337 11.323 19.4747 11.693 19.0358 11.693C18.5969 11.693 18.238 11.3229 18.238 10.8625C18.238 7.92387 15.9353 5.52991 13.101 5.52991C12.6621 5.52991 12.3032 5.1599 12.3032 4.69945Z"
      fill={selected ? "#FCBA58" : "#DEDEDE"}
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
      stroke={selected ? "#FCBA58" : "#DEDEDE"}
      strokeWidth="1.5"
    />
    <rect
      x="1.38379"
      y="1.33093"
      width="19.2327"
      height="22.79"
      rx="2.25"
      stroke={selected ? "#FCBA58" : "#DEDEDE"}
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
      fill={selected ? "#FCBA58" : "#DEDEDE"}
    />
  </svg>
);

export const NewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 55.25 55.25"
    width="20"
    height="20"
  >
    <path d="M52.618,2.631c-3.51-3.508-9.219-3.508-12.729,0L3.827,38.693C3.81,38.71,3.8,38.731,3.785,38.749  c-0.021,0.024-0.039,0.05-0.058,0.076c-0.053,0.074-0.094,0.153-0.125,0.239c-0.009,0.026-0.022,0.049-0.029,0.075  c-0.003,0.01-0.009,0.02-0.012,0.03l-3.535,14.85c-0.016,0.067-0.02,0.135-0.022,0.202C0.004,54.234,0,54.246,0,54.259  c0.001,0.114,0.026,0.225,0.065,0.332c0.009,0.025,0.019,0.047,0.03,0.071c0.049,0.107,0.11,0.21,0.196,0.296  c0.095,0.095,0.207,0.168,0.328,0.218c0.121,0.05,0.25,0.075,0.379,0.075c0.077,0,0.155-0.009,0.231-0.027l14.85-3.535  c0.027-0.006,0.051-0.021,0.077-0.03c0.034-0.011,0.066-0.024,0.099-0.039c0.072-0.033,0.139-0.074,0.201-0.123  c0.024-0.019,0.049-0.033,0.072-0.054c0.008-0.008,0.018-0.012,0.026-0.02l36.063-36.063C56.127,11.85,56.127,6.14,52.618,2.631z   M51.204,4.045c2.488,2.489,2.7,6.397,0.65,9.137l-9.787-9.787C44.808,1.345,48.716,1.557,51.204,4.045z M46.254,18.895l-9.9-9.9  l1.414-1.414l9.9,9.9L46.254,18.895z M4.961,50.288c-0.391-0.391-1.023-0.391-1.414,0L2.79,51.045l2.554-10.728l4.422-0.491  l-0.569,5.122c-0.004,0.038,0.01,0.073,0.01,0.11c0,0.038-0.014,0.072-0.01,0.11c0.004,0.033,0.021,0.06,0.028,0.092  c0.012,0.058,0.029,0.111,0.05,0.165c0.026,0.065,0.057,0.124,0.095,0.181c0.031,0.046,0.062,0.087,0.1,0.127  c0.048,0.051,0.1,0.094,0.157,0.134c0.045,0.031,0.088,0.06,0.138,0.084C9.831,45.982,9.9,46,9.972,46.017  c0.038,0.009,0.069,0.03,0.108,0.035c0.036,0.004,0.072,0.006,0.109,0.006c0,0,0.001,0,0.001,0c0,0,0.001,0,0.001,0h0.001  c0,0,0.001,0,0.001,0c0.036,0,0.073-0.002,0.109-0.006l5.122-0.569l-0.491,4.422L4.204,52.459l0.757-0.757  C5.351,51.312,5.351,50.679,4.961,50.288z M17.511,44.809L39.889,22.43c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0  L16.097,43.395l-4.773,0.53l0.53-4.773l22.38-22.378c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L10.44,37.738  l-3.183,0.354L34.94,10.409l9.9,9.9L17.157,47.992L17.511,44.809z M49.082,16.067l-9.9-9.9l1.415-1.415l9.9,9.9L49.082,16.067z" />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
