declare interface CalendarDay {
    name: string;
    date: Date;
    isFirst?: boolean;
    isLast?: boolean;
    events?: CalendarEvent[];
}