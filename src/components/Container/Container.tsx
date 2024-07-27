import styled from 'styled-components';

interface ContainerProps {
    children: React.ReactNode;
    width: string;
    height: string;
    orientation?: 'row' | 'column';
    'data-testid'?: string;
}

const ContainerDiv = styled.div<{ width: string, height: string, orientation: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #f8f9fa;
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => props.orientation};
    gap: 1rem;
`;

const Container: React.FC<ContainerProps> = ({ children, width = "100%", height = "100%", orientation = "row" , ...props }) => {
    return <ContainerDiv width={width} height={height} orientation={orientation} {...props}>{children}</ContainerDiv>;
};

export default Container;