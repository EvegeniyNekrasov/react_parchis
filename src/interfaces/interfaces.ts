import { Player } from '../data/data';

export interface PlayableRectangleProps {
    players: Player[];
}

export interface CellCircleProps {
    color: number | null;
}

export interface MainInnerRectangleProps {
    children: React.ReactNode;
}

export interface PlayableRectangleProps {
    children: React.ReactNode;
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
    selectedColors: number[];
    handlePlayersCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setPlayerName: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    setPlayerColor: (colorIndex: number, playerIndex: number) => void;
    setReady: (ready: boolean) => void;
}