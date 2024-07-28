import { Player } from '@/data/data';

// export interface PlayableRectangleProps {
//     players: Player[];
// }

export interface CellCircleProps {
    color: number | null;
    'data-testid'?: string;
}

export interface MainInnerRectangleProps {
    children: React.ReactNode;
}

export interface PlayableRectangleProps {
    children: React.ReactNode;
    players: Player[] | null;
    index: number;
}

export interface PlayerCircleProps {
    selected: boolean;
    data: Player;
    onClick?: () => void;
}

export interface StartPointProps {
    children: React.ReactNode;
}

export interface RadioProps {
    name: string;
    value: number | string;
    disabled: boolean;
    text: string;
    color: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContainerProps {
    children: React.ReactNode;
    width: string;
    height: string;
    orientation?: 'row' | 'column';
    bgColor?: string;
    padding?: string;
    gap?: string;
    'data-testid'?: string;
}

export interface TextProps {
    text: string;
    color?: string;
    size?: string;
    'data-testid'?: string;
}

export interface StartScreenProps {
    playersData: null | Player[];
    playersCount: null | number;
    ready: boolean;
    selectedColors: number[];
    handlePlayersCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setPlayerName: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    setPlayerColor: (colorIndex: number, playerIndex: number) => void;
    setReady: (ready: boolean) => void;
}

export interface TextFieldProps {
    id?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    icon: boolean;
    value?: string;
    width?: string;
    height?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    'data-testid'?: string;
    disabled?: boolean;
}

export interface ButtonProps {
    text: string;
    width?: string;
    height?: string;
    bgColor?: string;
    color?: string;
    border?: string;
    onClick?: () => void;
    disabled?: boolean;
}
