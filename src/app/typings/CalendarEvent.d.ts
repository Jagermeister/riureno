declare interface CalendarEvent {
    key: number;
    isFiltered?: boolean;
    dayTrack?: number;
    identifier?: string;    
    name: string;
    isLiveCoverage?: boolean;
    satellite?: {
        identifier: string;
        name: string;
        buyin?: {
            total?: number,
            rebuy?: number,
            prize?: number,
            bounty?: number,
            isInvitational?: boolean,
            isCash?: boolean
        };
    };
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
        isCash?: boolean
    };
    prizes?: string[];
    gtd?: {
        prize?: number
    },
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
