declare interface CalendarEvent {
    key: number;
    isFiltered?: boolean;
    dayTrack?: number;
    identifer?: string;    
    name: string;
    subtitle?: string;
    speed?: string;
    notes?: string[];
    type?: string;
    time: {
        hours: number,
        minutes: number
    };
    duration: {
        hours: number,
        minutes: number
    };
    buyin?: {
        total?: number,
        rebuy?: number,
        prize?: number,
        bounty?: number,
        isInvitational?: boolean,
    };
    prizes?: string[];
    gameType?: string;
    registrationLevelClose?: number;
    format?: {
        levelMinutes?: number,
        levelPerBreak?: number,
        breakMinutes?: number,
        breaks?: {
            level: number,
            minutes: number
        }[],
        levels?: {
            levels: number,
            minutes: number
        }[]
    };
}
