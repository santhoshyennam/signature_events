interface LeafProps {
  color?: string;
  width?: string;
  height?: string;
}

const Leaf: React.FC<LeafProps> = ({
  color = "white",
  width = "35",
  height = "65",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 35 65"
      fill="none"
    >
      <path
        d="M18.8951 18.826C8.83796 34.2798 5.21318 53.9744 4.53589 64.0348C4.49971 64.5722 3.89596 64.6846 3.7889 64.1566C3.53641 62.9114 3.6482 61.4065 3.81691 59.2209C4.01538 56.6499 2.26084 52.5579 1.33813 50.7912C1.32358 50.7633 1.31183 50.735 1.30229 50.7051C-1.11228 43.1326 0.780679 36.8237 2.44434 33.8104C2.66884 33.4038 3.25228 33.5039 3.4183 33.9375C3.95335 35.3349 4.67691 36.1281 5.30713 36.5408C5.68332 36.7872 5.96904 36.3848 5.75963 35.9877C4.52446 33.6454 4.34392 31.2084 4.43042 30.0769C4.4369 29.9921 4.46346 29.9147 4.5099 29.8433C6.99393 26.0221 14.1849 17.0361 17.8311 12.5769C17.9944 12.3772 18.3119 12.4249 18.4103 12.6631C18.5527 13.0077 19.0675 12.9062 19.0675 12.5335V11.5943C19.0675 11.4619 19.1176 11.3344 19.2078 11.2371L23.6926 6.40581C28.9114 1.37591 32.5505 0.363483 34.2498 0.5139C34.6091 0.545702 34.7192 0.948103 34.5137 1.24345C31.4799 5.60288 29.4868 15.9327 28.8332 20.8631C28.8227 20.9421 28.7963 21.0148 28.7506 21.0801C28.1716 21.9075 26.6446 23.2907 25.3926 24.3512C24.9991 24.6844 25.2306 25.2457 25.7272 25.1047C26.2256 24.9632 26.6986 24.7733 27.1073 24.5794C27.5373 24.3755 28.0827 24.7304 28.0147 25.2001L26.3257 36.869C26.3204 36.9055 26.3116 36.941 26.2988 36.9756C25.2298 39.8583 22.0671 42.9254 19.7743 44.7842C19.3531 45.1257 19.6009 45.7504 20.1265 45.6142C21.5599 45.2429 22.9368 44.5641 23.9766 43.9374C24.4245 43.6674 24.9845 44.0727 24.7632 44.5454C22.2248 49.9667 14.307 54.1161 9.79385 55.8395C9.44022 55.9746 9.07009 55.712 9.0805 55.3348C9.40479 43.5938 15.2004 28.7372 19.7145 19.3248C20.0024 18.7244 19.2584 18.2677 18.8951 18.826Z"
        fill={color}
      />
    </svg>
  );
};

export default Leaf;
