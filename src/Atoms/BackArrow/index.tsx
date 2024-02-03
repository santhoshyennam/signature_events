interface BackArrowProps {
    color?: string;
  }
  
  const BackArrow: React.FC<BackArrowProps> = ({ color = "white" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
        <path d="M9 1L1 9L9 17" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  };
  
  export default BackArrow;
  