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
                                gameType: "Mixed Game",
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
                    },
                    {
                        name: 'Sunday',
                        date: new Date(2018, 10, 21),
                        events: [
                            {
                                key: 10,
                                identifer: "7",
                                name: "Black Chip Bounty",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 11, minutes: 0 },
                                buyin: { total: 235, prize: 100, bounty: 100 },
                                prizes: [
                                    "$30k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 10,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                    breaks: [
                                        { level: 18, minutes: 50 }
                                    ]
                                }
                            },
                            {
                                key: 11,
                                identifer: "8",
                                dayTrack: 1,
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
                            /*{
                                key: 12,
                                identifer: "3",
                                dayTrack: 20,
                                name: "Mini Main Event Day 2",
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 10, minutes: 40 },
                                prizes: [
                                    "$50k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                format: {
                                    levelMinutes: 40,
                                    levelPerBreak: 3,
                                    breakMinutes: 15
                                }
                            },*/
                            {
                                key: 13,
                                identifer: "9",
                                name: "Partner Event",
                                notes: [
                                    "2 Player Teams",
                                    "1 Player to a hand - no coaching or advising at the table",
                                    "May tag in/out anytime not actively in a hand"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 7, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$5k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20
                                }
                            },
                            {
                                key: 14,
                                name: "Taiwanese Cash Game Hangout",
                                notes: ["rake free"],
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                gameType: "Taiwanese",
                            }
                        ]
                    },
                    {
                        name: 'Monday',
                        date: new Date(2018, 10, 22),
                        events: [
                            {
                                key: 15,
                                identifer: "10",
                                name: "6 Max Shootout Round 1",
                                notes: [
                                    "216 Player Maximum",
                                    "Win your table to advance"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { total: 235, prize: 200 },
                                prizes: [
                                    "$30k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 4,
                                format: {
                                    levels: [
                                        { levels: 9, minutes: 20 },
                                        { levels: 8, minutes: 15 }
                                    ],
                                    breaks: [
                                        { level: 6, minutes: 10 }
                                    ]
                                }
                            },
                            {
                                key: 16,
                                identifer: "11",
                                name: "Main Event Satellite",
                                dayTrack: 1,
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
                                key: 52,
                                identifer: "10",
                                name: "6 Max Shootout Round 2",
                                notes: [
                                    "216 Player Maximum",
                                    "Win your table to advance"
                                ],
                                time: { hours: 16, minutes: 30 },
                                duration: { hours: 5, minutes: 0 },
                                prizes: [
                                    "$30k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                format: {
                                    levels: [
                                        { levels: 9, minutes: 20 },
                                        { levels: 8, minutes: 15 }
                                    ],
                                    breaks: [
                                        { level: 6, minutes: 10 }
                                    ]
                                }
                            },
                            {
                                key: 17,
                                identifer: "12",
                                name: "Taiwanese Poker",
                                dayTrack: 1,
                                notes: [
                                    "5 Handed",
                                    "Players paid out maximum of current stack",
                                    "Players are eliminated if they cannot pay",
                                    "Board is evaluated from Top, Middle, Bottom"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$5k GTD"
                                ],
                                gameType: "Taiwanese",
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 18,
                                name: "Scavenger Hunt",
                                type: "social",
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                            },
                            {
                                key: 53,
                                identifer: "10",
                                name: "6 Max Shootout Round 3",
                                notes: [
                                    "216 Player Maximum",
                                    "Win your table to advance"
                                ],
                                time: { hours: 21, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                prizes: [
                                    "$30k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                format: {
                                    levels: [
                                        { levels: 9, minutes: 20 },
                                        { levels: 8, minutes: 15 }
                                    ],
                                    breaks: [
                                        { level: 6, minutes: 10 }
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        name: 'Tuesday',
                        date: new Date(2018, 10, 23),
                        events: [
                            {
                                key: 19,
                                identifer: "13",
                                name: "Moneymaker Spectacular",
                                notes: [
                                    "Begins 10 handed, reduced to 8 when space allows",
                                    "Final table is 9 handed with 30 minute levels"
                                ],
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 10, minutes: 0 },
                                buyin: { total: 86, prize: 70 },
                                prizes: [
                                    "Platinum Pass valued at $30k",
                                    "Cash starts at 2nd place"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 10,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                    breaks: [
                                        { level: 24, minutes: 50 }
                                    ]
                                }
                            },
                            {
                                key: 20,
                                identifer: "14",
                                name: "Win the Button",
                                notes: [
                                    "Button will be awarded to the winner",
                                    "Chop pot, button awarded to player in worst position"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 21,
                                identifer: "15",
                                name: "Thursday Thrilla Satellite",
                                dayTrack: 1,
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
                                key: 22,
                                name: "Cash Game Hangout",
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Wednesday',
                        date: new Date(2018, 10, 24),
                        events: [
                            {
                                key: 23,
                                identifer: "16",
                                name: "6 MAX 8-Game",
                                notes: [
                                    "Deuce to Seven TD, H.O.R.S.E., NLH, PLO"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 14, minutes: 30 },
                                buyin: { total: 235, prize: 200 },
                                prizes: [
                                    "$20k GTD"
                                ],
                                gameType: "Mixed Game",
                                registrationLevelClose: 10,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                    breaks: [
                                        { level: 15, minutes: 50 }
                                    ]
                                }
                            },
                            {
                                key: 24,
                                identifer: "17",
                                name: "Main Event Satellite",
                                dayTrack: 1,
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
                                key: 25,
                                identifer: "18",
                                name: "ALL in or FOLD",
                                notes: [
                                    "Player action must be all in or fold"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100, rebuy: 50 },
                                prizes: [
                                    "$10k GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 7,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 26,
                                identifer: "19",
                                name: "Thursday Thrilla Mega Satellite",
                                dayTrack: 1,
                                time: { hours: 19, minutes: 30 },
                                duration: { hours: 6, minutes: 15 },
                                buyin: { total: 165, prize: 140 },
                                prizes: [
                                    "1 Winner per $1,100 prize pool; 5 GTD"
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
                                key: 27,
                                name: "RHAP Live Survivor Viewing Party",
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Thursday',
                        date: new Date(2018, 10, 25),
                        events: [
                            {
                                key: 28,
                                name: "Thursday Thrilla SNGs on Demand",
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 195, prize: 180 }
                            },
                            {
                                key: 29,
                                identifer: "20",
                                name: "Thursday Thrilla $100K GTD",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 14, minutes: 0 },
                                buyin: { total: 1100, prize: 500, bounty: 500 },
                                prizes: [
                                    "$100k GTD includes $500 Bounties"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 11,
                                format: {
                                    levelMinutes: 30,
                                    levelPerBreak: 4,
                                    breakMinutes: 10,
                                    breaks: [
                                        { level: 12, minutes: 50 }
                                    ]
                                }
                            },
                            {
                                key: 30,
                                identifer: "21",
                                name: "6 MAX PLO",
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 150, prize: 100, bounty: 25 },
                                prizes: [
                                    "$5k GTD"
                                ],
                                gameType: "Pot Limit Omaha",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 31,
                                identifer: "22",
                                name: "Super Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                notes: [
                                    "Single or Double Add-on at end of Level 8"
                                ],
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 6, minutes: 30 },
                                buyin: { total: 150, prize: 100, rebuy: 50 },
                                prizes: [
                                    "1 Winner per $600 prize pool; 20 GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 11,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 8,
                                    breakMinutes: 10,
                                }
                            },
                            {
                                key: 32,
                                name: "KARAOKE PARTY @ EDGE",
                                type: "social",
                                time: { hours: 22, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Friday',
                        date: new Date(2018, 10, 26),
                        events: [
                            {
                                key: 33,
                                name: "Main Event SNGs on Demand",
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 110, prize: 100 }
                            },
                            {
                                key: 34,
                                identifer: "23",
                                name: "Main Event 1A",
                                type: "MainEvent",
                                notes: [
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 9, minutes: 20 },
                                buyin: { total: 600, prize: 5500 },
                                prizes: [
                                    "$200K GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 15,
                                format: {
                                    levelMinutes: 40,
                                    levelPerBreak: 3,
                                    breakMinutes: 15,
                                    breaks: [
                                        { level: 9, minutes: 45 }
                                    ]
                                }
                            },
                            {
                                key: 35,
                                identifer: "24",
                                name: "Main Event Turbo Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 4, minutes: 20 },
                                buyin: { total: 120, prize: 100 },
                                prizes: [
                                    "1 Winner per $600 prize pool",
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 7,
                                format: {
                                    levelMinutes: 10
                                }
                            },
                            {
                                key: 36,
                                identifer: "25",
                                name: "6 MAX N.O.R.S.E.",
                                notes: [
                                    "No Limit Omaha + O.R.S.E."
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$5K GTD",
                                ],
                                gameType: "Mixed Game",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 37,
                                name: "Streamer Q&A + Meet and Greet",
                                type: "social",
                                time: { hours: 18, minutes: 30 },
                                duration: { hours: 1, minutes: 30 },
                            },
                            {
                                key: 38,
                                identifer: "26",
                                name: "Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 19, minutes: 0 },
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
                                key: 39,
                                name: "Cash Game Hangout",
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Saturday',
                        date: new Date(2018, 10, 27),
                        events: [
                            {
                                key: 40,
                                name: "Main Event SNGs on Demand",
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 110, prize: 100 }
                            },
                            {
                                key: 41,
                                identifer: "23",
                                name: "Main Event 1B",
                                type: "MainEvent",
                                notes: [
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 9, minutes: 20 },
                                buyin: { total: 600, prize: 5500 },
                                prizes: [
                                    "$200K GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 15,
                                format: {
                                    levelMinutes: 40,
                                    levelPerBreak: 3,
                                    breakMinutes: 15,
                                    breaks: [
                                        { level: 9, minutes: 45 }
                                    ]
                                }
                            },
                            {
                                key: 42,
                                identifer: "27",
                                name: "Main Event Turbo Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 4, minutes: 20 },
                                buyin: { total: 120, prize: 100 },
                                prizes: [
                                    "1 Winner per $600 prize pool",
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 7,
                                format: {
                                    levelMinutes: 10
                                }
                            },
                            {
                                key: 43,
                                identifer: "28",
                                name: "6 Max 'Short Deck' Ante Only",
                                notes: [
                                    "All cards 2-5 will be removed from the deck",
                                    "Flushes beat Full Houses",
                                    "A-6-7-8-9 makes a Straight"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$5K GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 10,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10
                                }
                            },
                            {
                                key: 44,
                                identifer: "29",
                                name: "PLO Championship Satellite",
                                dayTrack: 1,
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "1 Winner per $550 prize pool",
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 10,
                                format: {
                                    levelMinutes: 15,
                                    levelPerBreak: 8,
                                    breakMinutes: 10
                                }
                            },
                        ]
                    },
                    {
                        name: 'Sunday',
                        date: new Date(2018, 10, 28),
                        events: [
                            {
                                key: 45,
                                identifer: "23",
                                name: "Main Event Day 2",
                                type: "MainEvent",
                                notes: [
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 13, minutes: 20 },
                                buyin: { total: 600, prize: 550 },
                                prizes: [
                                    "$200K GTD"
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 15,
                                format: {
                                    levelMinutes: 40,
                                    levelPerBreak: 3,
                                    breakMinutes: 15,
                                    breaks: [
                                        { level: 9, minutes: 45 }
                                    ]
                                }
                            },
                            {
                                key: 46,
                                identifer: "30",
                                name: "6 MAX PLO Championship",
                                time: { hours: 15, minutes: 0 },
                                duration: { hours: 12, minutes: 0 },
                                buyin: { total: 550, prize: 500 },
                                prizes: [
                                    "$20K GTD"
                                ],
                                gameType: "Pot Limit Omaha",
                                registrationLevelClose: 10,
                                format: {
                                    levels: [
                                        { levels: 9, minutes: 20 },
                                        { levels: 18, minutes: 30 }
                                    ],
                                    breaks: [
                                        { level: 6, minutes: 10 },
                                        { level: 11, minutes: 10 },
                                        { level: 15, minutes: 10 },
                                        { level: 19, minutes: 10 },
                                        { level: 23, minutes: 10 },
                                    ]
                                }
                            },
                            {
                                key: 47,
                                identifer: "31",
                                name: "No-Limit 3 Card Super Hold'em",
                                dayTrack: 1,
                                notes: [
                                    "Players receive three (3) hole cards",
                                    "Players may use 0, 1, 2, or 3 hold cards to make a 5 card hand"
                                ],
                                time: { hours: 18, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$10K GTD"
                                ],
                                gameType: "Super Hold'em",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 8,
                                    breakMinutes: 10,
                                }
                            },
                            {
                                key: 48,
                                name: "Cash Game Hangout",
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Monday',
                        date: new Date(2018, 10, 29),
                        events: [
                            {
                                key: 49,
                                identifer: "32",
                                name: "Platinum Pass Invite",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { isInvitational: true },
                                prizes: [
                                    "Platinum Pass valued at $30k",
                                ],
                                gameType: "No Limit Hold'em",
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                }
                            },
                            {
                                key: 50,
                                identifer: "33",
                                name: "6-max 5-card",
                                dayTrack: 1,
                                notes: [
                                    "Players must use two (2) hole cards to form the best 5 card hand"
                                ],
                                time: { hours: 13, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                prizes: [
                                    "$5k GTD",
                                ],
                                gameType: "Pot Limit Omaha",
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                }
                            },
                            {
                                key: 51,
                                identifer: "34",
                                name: "5 Max Double Board Taiwanese Poker",
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gameType: "Taiwanese",
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                }
                            },
                        ]
                    }
                ]
            );
        });

        return observe;
    }
}