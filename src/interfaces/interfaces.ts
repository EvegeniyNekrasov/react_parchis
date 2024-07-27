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
