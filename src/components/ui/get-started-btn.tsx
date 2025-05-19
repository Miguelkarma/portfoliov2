import { UserSearch } from "lucide-react";
import styled from "styled-components";

interface HeroButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  children = "Ask Spacious AI",
  className = "",
  onClick,
}) => {
  return (
    <StyledWrapper className={className}>
      <div className="outer-cont flex" onClick={onClick}>
        <UserSearch />

        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flex {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .outer-cont {
    padding: 12px 20px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    background: linear-gradient(
      90deg,
      #5bfcc4,
      hsl(190, 49.1%, 45.5%),
      rgb(183, 97, 240)
    );
    border-radius: 12px;
    color: #fff;
    transition: all 0.3s ease;
    box-shadow: inset 0px 0px 5px #ffffffa9, inset 0px 35px 30px #061129,
      0px 5px 10px rgba(8, 51, 68, 0.8);
    text-shadow: 1px 1px 1px #083344;
  }
  .outer-cont::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 12px;
    filter: blur(0);
    z-index: -1;
    box-shadow: none;
    background: conic-gradient(
      #00000000 80deg,
      #f34ad7,
      #40baf7,
      #5bfcc4,
      #00000000 280deg
    );
    transition: all 0.3s ease;
  }
  .outer-cont:hover::before {
    filter: blur(15px);
  }
  .outer-cont:active::before {
    filter: blur(5px);
    transform: translateY(1px);
  }
  .outer-cont:active {
    box-shadow: inset 0px 0px 5px #ffffffa9, inset 0px 35px 30px #083344;
    margin-top: 3px;
  }
`;

export default HeroButton;
