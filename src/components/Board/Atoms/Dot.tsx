import styled from "styled-components";

interface DotProps {
  top: string;
  left: string;
}

type DotContainerProps = {
  top: string;
  left: string;
};

const DotContainer = styled.div<DotContainerProps>`
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    transform: translate(-50%, -50%);
`;

const Dot: React.FC<DotProps> = ({ top, left }) => {
  return <DotContainer top={top} left={left} />;
};

export default Dot;
