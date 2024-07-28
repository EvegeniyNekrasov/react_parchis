import React from 'react';
import styled from 'styled-components';

import { UserCircle } from '@phosphor-icons/react';
import Container from '../Container/Container';
import { TextFieldProps } from '../../interfaces/interfaces';

const Input = styled.input<{ $width: string; $height: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid #ced4da;
    margin-bottom: 1rem;
`;

const TextField: React.FC<TextFieldProps> = ({
    value = '',
    icon = false,
    type = 'text',
    width = '100%',
    height = 'auto',
    ...props
}) => {
    return (
        <Container width="100%" height="auto">
            {icon ? <UserCircle data-testid="icon" size={34} /> : null}
            <Input value={value} type={type} $width={width} $height={height} {...props} />
        </Container>
    );
};

export default TextField;
