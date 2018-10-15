import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class EventService {

    public fetchEvents(): Observable<CalendarDay[]> {
        const observe = new Observable<CalendarDay[]>((observer) => {
            observer.next (
                [
                    {
                        name: 'Friday',
                        date: new Date(2018, 10, 19),
                        events: [
                            {
                                key: 1,
                                identifer: "1",
                                name: "No Limit Hold'em",
                                speed: "Turbo",
                                notes: [
                                    "Kickoff Event!"
                                ],
                                time: { hours: 11, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 235, prize: 200 },
                                prizes: [
                                    'Top 4 Mini Main Event entry'
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 8,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 2,
                                dayTrack: 1,
                                identifer: "2",
                                name: "Mini Main Event Mega Satellite",
                                speed: "Turbo",
                                type: "MainEvent",
                                time: { hours: 13, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { total: 120, prize: 100 },
                                prizes: [
                                    "1 Winner per $440 prize pool",
                                    "Winners receive Mini Main Event entry"
                                ],
                                registrationLevelClose: 7,
                                gameType: "No Limit Hold'em",
                                format: {
                                    levelMinutes: 10
                                }
                            },
                            {
                                key: 3,
                                name: "Welcome Party",
                                notes: ["Turkey Burger!"],
                                type: "social",
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                            },
                            {
                                key: 4,
                                name: "Charity Event",
                                type: "charity",
                                gameType: "ALL IN Hold'em",
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 2, minutes: 15 },
                                buyin: { total: 160, rebuy: 50, prize: 100 },
                            }
                        ]
                    },
                    {
                        name: 'Saturday',
                        date: new Date(2018, 10, 20),
                        events: [
                            {
                                key: 5,
                                identifer: "3",
                                name: "Mini Main Event Day 1",
                                notes: [
                                    "Ends at level 20 or 16 players"
                                ],
                                type: "MainEvent",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 10, minutes: 0 },
                                buyin: { total: 440, prize: 400 },
                                prizes: [
                                    "$50k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 12,
                                format: {
                                    levelMinutes: 30,
                                    levelPerBreak: 4,
                                    breakMinutes: 15,
                                    breaks: [
                                        { level: 12, minutes: 60 }
                                    ]
                                }
                            },
                            {
                                key: 6,
                                dayTrack: 1,
                                identifer: "4",
                                name: "Main Event Satellite",
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$200k GTD",
                                    "1 Winner per $600 prize pool",
                                    "Winners receive Main Event entry"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 7,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 8,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 7,
                                dayTrack: 2,
                                identifer: "5",
                                name: "6-max H.O.R.S.E.",
                                notes: [
                                    "Hold'em, Omaha 8+, Razz, Stud, Stud 8+"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 7, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$10k GTD",
                                ],
                                gameType: "H.O.R.S.E.",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 8,
                                dayTrack: 3,
                                identifer: "6",
                                name: "Thursday Thrilla Satellite",
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { total: 165, prize: 140 },
                                prizes: [
                                    "$200k GTD",
                                    "1 Winner per $1,100 prize pool",
                                    "Winners receive Thursday Thrilla entry"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 7,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 8,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 9,
                                name: "Cash Game Hangout",
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 }
                            }
                        ]
                    }
                ]
            );
        });

        return observe;
    }
}