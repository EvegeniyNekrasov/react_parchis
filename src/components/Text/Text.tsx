import styled from 'styled-components';
import { TextProps } from '../../interfaces/interfaces';

const TextSpan = styled.span<{ color: string; size: string }>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;

const Text: React.FC<TextProps> = ({ text, color = '#000', size = '1rem', ...props }) => {
    return (
        <TextSpan color={color} size={size} {...props}>
            {text}
        </TextSpan>
    );
};

export default Text;
