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
                        isFirst: true,
                        date: new Date(2018, 9, 19),
                        events: [
                            {
                                key: 1,
                                identifier: "1",
                                name: "No Limit Hold'em",
                                speed: "Turbo",
                                /* tags: ['Kickoff Event']*/
                                notes: [
                                    "Starting Chips: 12,000",
                                    "Big Blind Ante only! Prior to posting blinds",
                                    "Registration and re-entries close prior to the start of level nine (9)",
                                    "10 min break at the completion of every two hours"
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
                                identifier: "2",
                                name: "Mini Main Event Mega",
                                satellite: {
                                    identifier: "3",
                                    name: "Mini Main Event Day 1",
                                    buyin: { total: 440, prize: 400 },
                                },
                                notes: [
                                    "Starting Chips: 6,000",
                                    "Registration and re-entries through the first six (6) levels",
                                    "No breaks."
                                ],
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
                                notes: [
                                    "Turkey Burger!",
                                    "Meeting",
                                    "Greeting",
                                    "Eating"
                                ],
                                type: "social",
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                            },
                            {
                                key: 4,
                                name: "Charity Event",
                                notes: [
                                    "11th Annual “All in for Childhood Cancer”",
                                    "Starting Chips: 2,000",
                                    "Registration and re-entries through the first four (4) levels",

                                    /*"Doors & Registration open at 6:00 including cocktail and hor d’oeurves",
                                    "?? 2 drink tickets, 1 food ticket with entry ??",
                                    "At 7:00/7:15 poker starts in the Capri room in the Peppermill",
                                    "Dress to impress – Cocktail attire",*/
                                    /*"https://www.nvchildrenscancer.org/d4events/all-in-for-childhood-cancer-poker-tournament/"*/
                                ],
                                format: {
                                    levelMinutes: 15,
                                },
                                prizes: [
                                    "1 raffle ticket for each $25+ RIU store purchase during event",
                                    "5 seats to Event #32 - Platinum Pass Invite."
                                ],
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
                        date: new Date(2018, 9, 20),
                        events: [
                            {
                                key: 54,
                                name: "SNG Mini Main Event Satellite",
                                satellite: {
                                    identifier: "3",
                                    name: "Mini Main Event Day 1",
                                    buyin: { total: 440, prize: 400 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                                buyin: { total: 85, prize: 75 },
                                prizes: [
                                    "Winners receive Mini Main Event (Day 1) entry",
                                    "Event #3",
                                    "1 in 6 win"
                                ],
                            },
                            {
                                key: 5,
                                identifier: "3",
                                name: "Mini Main Event",
                                subtitle: "Day 1",
                                notes: [
                                    "Starting Chips: 20,000",
                                    "Registration and re-entries close at the start of level 12",
                                    "15 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 12",
                                    "Ends at level 20 or 16 players",
                                    "30 minute levels through level 20",
                                    "40 minute levels from level 21 through completion of tournament"
                                ],
                                type: "MainEvent",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 10, minutes: 0 },
                                buyin: { total: 440, prize: 400 },
                                gtd: {
                                    prize: 50
                                },
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
                                identifier: "4",
                                name: "Main Event Satellite",
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels"
                                ],
                                prizes: [
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
                                identifier: "5",
                                name: "6-max H.O.R.S.E.",
                                notes: [
                                    "Hold'em, Omaha 8+, Razz, Stud, Stud 8+",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every six (6) levels",
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 7, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 10
                                },
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
                                identifier: "6",
                                name: "Thursday Thrilla Satellite",
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { total: 165, prize: 140 },
                                satellite: {
                                    identifier: "20",
                                    name: "Thursday Thrilla",
                                    buyin: { total: 1100, prize: 500, bounty: 500 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                    "60 min dinner break at the end of level 12",
                                ],
                                prizes: [
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
                                dayTrack: 2,
                                name: "Hangout",
                                type: "social",
                                notes: [
                                    "Cash games to be determined"
                                ],
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { isCash: true },
                            }
                        ]
                    },
                    {
                        name: 'Sunday',
                        date: new Date(2018, 9, 21),
                        events: [
                            {
                                key: 55,
                                name: "SNG NLH Black Chip Bounty Satellite",
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                                buyin: { total: 90, prize: 80 },
                                satellite: {
                                    identifier: "7",
                                    name: "Black Chip Bounty",
                                    buyin: { total: 235, prize: 100, bounty: 100 },
                                },
                                prizes: [
                                    "Winners receive NLH Black Chip Bounty entry",
                                    "Event #7",
                                    "2 in 6 win"
                                ],
                            },
                            {
                                key: 10,
                                identifier: "7",
                                name: "Black Chip Bounty",
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 11, minutes: 0 },
                                buyin: { total: 235, prize: 100, bounty: 100 },
                                notes: [
                                    "Starting Chips: 15,000",
                                    "Registration and re-entries through first nine (9) levels",
                                    "10 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 18",
                                ],
                                gtd: {
                                    prize: 30
                                },
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
                                identifier: "8",
                                dayTrack: 1,
                                name: "Main Event Satellite",
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels"
                                ],
                                prizes: [
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
                                identifier: "3",
                                dayTrack: 20,
                                name: "Mini Main Event Day 2",
                                isLiveCoverage: true,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 10, minutes: 40 },
                                prizes: [
                                    "$50k GTD"
                                ],
                                notes: [
                                    "15 min break at the completion of every two (2) hours",
                                    "60 min dinner break to be determined",
                                    "40 minute levels from level 21 through completion of tournament"
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
                                identifier: "9",
                                name: "Partner Event",
                                notes: [
                                    "Starting Chips: 8,000",
                                    "2 Player Teams",
                                    "1 Player to a hand - no coaching or advising at the table",
                                    "May tag in/out anytime not actively in a hand",
                                    "Registration and re-entries through first eight (8) levels",
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 7, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 5
                                },
                                prizes: [  
                                    "Funniest costume will win entry to Event #32 - Platinum Pass Invite."
                                ],
                                gameType: "No Limit Hold'em",
                                registrationLevelClose: 9,
                                format: {
                                    levelMinutes: 20
                                }
                            },
                            {
                                key: 14,
                                name: "Taiwanese Hangout",
                                dayTrack: 2,
                                notes: [
                                    "rake free",
                                    "point value should be low to encourage learning"
                                ],
                                type: "social",
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { isCash: true },
                                gameType: "Taiwanese",
                            }
                        ]
                    },
                    {
                        name: 'Monday',
                        date: new Date(2018, 9, 22),
                        events: [
                            {
                                key: 56,
                                name: "SNG 6 Max Shootout Satellite",
                                satellite: {
                                    identifier: "10",
                                    name: "6 Max Shootout Round 1",
                                    buyin: { total: 235, prize: 200 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                                buyin: { total: 90, prize: 80 },
                                prizes: [
                                    "Winners receive 6 Max Shootout entry",
                                    "Event #10",
                                    "2 in 6 win"
                                ],
                            },
                            {
                                key: 15,
                                identifier: "10",
                                name: "6 Max Shootout",
                                subtitle: "Round 1",
                                isLiveCoverage: true,
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { total: 235, prize: 200 },
                                notes: [
                                    "Starting Chips: 10,000",
                                    "Registration through first three (3) levels or 216 player cap",
                                    "Re-entry not permitted",
                                    "Win your table to advance",
                                    "60 min dinner break at the end of level 12",
                                ],
                                gtd: {
                                    prize: 30
                                },
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
                                identifier: "11",
                                name: "Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                ],
                                prizes: [
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
                                identifier: "10",
                                name: "6 Max Shootout",
                                subtitle: "Round 2",
                                notes: [
                                    "216 Player Maximum",
                                    "Win your table to advance"
                                ],
                                time: { hours: 16, minutes: 30 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { isInvitational: true },
                                gtd: {
                                    prize: 30
                                },
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
                                identifier: "12",
                                name: "Taiwanese Poker",
                                dayTrack: 1,
                                notes: [
                                    "Starting Chips: 10,000",
                                    "House Rules Apply",
                                    "5 Handed",
                                    "Players paid out maximum of current stack",
                                    "Players are eliminated if they cannot pay",
                                    "Board is evaluated from Top, Middle, Bottom"
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 5
                                },
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
                                notes: [
                                    "'a circuit of doing gambling-based activities around the peppermill (play an orbit of cash, place a sports bet, play a hand of blackjack, etc). if you complete everything you get a raffle ticket, and those who get their names drawn get an entry into the plat pass event at the end of the series'",
                                ],
                                prizes: [
                                    "3 seats to Event #32 - Platinum Pass Invite"
                                ],
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                            },
                            {
                                key: 53,
                                identifier: "10",
                                name: "6 Max Shootout",
                                subtitle: "Round 3",
                                notes: [
                                    "216 Player Maximum",
                                    "Win your table to advance"
                                ],
                                time: { hours: 21, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { isInvitational: true },
                                gtd: {
                                    prize: 30
                                },
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
                        date: new Date(2018, 9, 23),
                        events: [
                            {
                                key: 19,
                                identifier: "13",
                                name: "Moneymaker Spectacular",
                                isLiveCoverage: true,
                                notes: [
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first nine (9) levels",
                                    "10 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 24",
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
                                identifier: "14",
                                name: "Win the Button",
                                notes: [
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every six (6) levels",
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
                                identifier: "15",
                                name: "Thursday Thrilla Satellite",
                                dayTrack: 1,
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 5, minutes: 0 },
                                buyin: { total: 165, prize: 140 },
                                satellite: {
                                    identifier: "20",
                                    name: "Thursday Thrilla",
                                    buyin: { total: 1100, prize: 500, bounty: 500 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                    "60 min dinner break at the end of level 12",
                                ],
                                prizes: [
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
                                name: "Hangout",
                                dayTrack: 2,
                                type: "social",
                                notes: [
                                    "Cash games to be determined"
                                ],
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { isCash: true },
                            },
                        ]
                    },
                    {
                        name: 'Wednesday',
                        date: new Date(2018, 9, 24),
                        events: [
                            {
                                key: 57,
                                name: "SNG 6-MAX 8 Game Satellite",
                                satellite: {
                                    identifier: "16",
                                    name: "6 MAX 8-Game",
                                    buyin: { total: 235, prize: 200 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 1, minutes: 30 },
                                buyin: { total: 90, prize: 80 },
                                prizes: [
                                    "Winners receive 6 MAX 8-Game entry",
                                    "Event #16",
                                    "2 in 6 win"
                                ],
                            },
                            {
                                key: 23,
                                identifier: "16",
                                name: "6 MAX 8-Game",
                                isLiveCoverage: true,
                                notes: [
                                    "Deuce to Seven TD, H.O.R.S.E., NLH, PLO",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first nine (9) levels",
                                    "10 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 15",
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 14, minutes: 30 },
                                buyin: { total: 235, prize: 200 },
                                gtd: {
                                    prize: 20
                                },
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
                                identifier: "17",
                                name: "Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                ],
                                prizes: [
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
                                identifier: "18",
                                name: "ALL in or FOLD",
                                notes: [
                                    "Starting Chips: 4,000",
                                    "Player action must be all in or fold",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every six (6) levels",
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100, rebuy: 50 },
                                gtd: {
                                    prize: 10
                                },
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
                                identifier: "19",
                                name: "Thursday Thrilla Mega Satellite",
                                dayTrack: 1,
                                time: { hours: 19, minutes: 30 },
                                duration: { hours: 6, minutes: 15 },
                                buyin: { total: 165, prize: 140 },
                                satellite: {
                                    identifier: "20",
                                    name: "Thursday Thrilla",
                                    buyin: { total: 1100, prize: 500, bounty: 500 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                ],
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
                                name: "Live Survivor Viewing Party",
                                dayTrack: 15,
                                type: "social",
                                notes: [
                                    "Rob Cesternino is a former two-time Survivor contestant",
                                    'Jeff Probst once called him “the smartest player to never win Survivor.”',
                                    "http://robhasawebsite.com/"
                                ],
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Thursday',
                        date: new Date(2018, 9, 25),
                        events: [
                            {
                                key: 28,
                                name: "SNG Thursday Thrilla Bounty Satellite",
                                satellite: {
                                    identifier: "20",
                                    name: "Thursday Thrilla Bounty",
                                    buyin: { total: 1100, prize: 500, bounty: 500 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 195, prize: 180 },
                                prizes: [
                                    "Winners receive Thursday Thrilla Bounty entry",
                                    "Event #20",
                                    "1 in 6 win"
                                ],
                            },
                            {
                                key: 29,
                                identifier: "20",
                                name: "Thursday Thrilla",
                                isLiveCoverage: true,
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 14, minutes: 0 },
                                buyin: { total: 1100, prize: 500, bounty: 500 },
                                notes: [
                                    "Starting Chips: 20,000",
                                    "Registration and re-entries through first ten (10) levels",
                                    "10 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 12",
                                ],
                                gtd: {
                                    prize: 100
                                },
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
                                identifier: "21",
                                name: "6 MAX PLO",
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 150, prize: 100, bounty: 25 },
                                gtd: {
                                    prize: 5
                                },
                                notes: [
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every six (6) levels",
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
                                identifier: "22",
                                name: "Super Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 5,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every eight (8) levels",
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
                                prizes: [
                                    "Best solo and/or duet performance will win entry to Event #32 - Platinum Pass Invite."
                                ],
                                time: { hours: 22, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                            },
                        ]
                    },
                    {
                        name: 'Friday',
                        date: new Date(2018, 9, 26),
                        events: [
                            {
                                key: 33,
                                name: "SNG Main Event Satellite",
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event 1A",
                                    buyin: { total: 600, prize: 550 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 110, prize: 100 },
                                prizes: [
                                    "Winners receive Main Event 1A entry",
                                    "Event #23",
                                    "1 in 6 win"
                                ],
                            },
                            {
                                key: 34,
                                identifier: "23",
                                name: "Main Event",
                                subtitle: "1A",
                                type: "MainEvent",
                                notes: [
                                    "Starting Chips: 25,000",
                                    "Registration and re-entries open through day 1 action",
                                    "15 min break at the completion of every two (2) hours",
                                    "60 min dinner break at the end of level 9",
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 9, minutes: 20 },
                                buyin: { total: 600, prize: 550 },
                                gtd: {
                                    prize: 200
                                },
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
                                identifier: "24",
                                name: "Main Event Turbo Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 4, minutes: 20 },
                                buyin: { total: 120, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 6,000",
                                    "Registration and re-entries through first six (6) levels",
                                ],
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
                                identifier: "25",
                                name: "6 MAX N.O.R.S.E.",
                                notes: [
                                    "No Limit Omaha + O.R.S.E.",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every six (6) levels",
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 5
                                },
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
                                notes: [
                                    "Your favorite RIU streamers are available for your questions"
                                ],
                                time: { hours: 18, minutes: 30 },
                                duration: { hours: 1, minutes: 30 },
                            },
                            {
                                key: 38,
                                identifier: "26",
                                name: "Main Event Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                prizes: [
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
                                name: "Hangout",
                                dayTrack: 2,
                                type: "social",
                                notes: [
                                    "Cash games to be determined"
                                ],
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { isCash: true },
                            },
                        ]
                    },
                    {
                        name: 'Saturday',
                        date: new Date(2018, 9, 27),
                        events: [
                            {
                                key: 40,
                                name: "SNG Main Event Satellite",
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event 1B",
                                    buyin: { total: 600, prize: 550 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 110, prize: 100 },
                                prizes: [
                                    "Winners receive Main Event 1B entry",
                                    "Event #23",
                                    "1 in 6 win"
                                ],
                            },
                            {
                                key: 41,
                                identifier: "23",
                                name: "Main Event",
                                subtitle: "1B",
                                type: "MainEvent",
                                notes: [
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 9, minutes: 20 },
                                buyin: { total: 600, prize: 550 },
                                gtd: {
                                    prize: 200
                                },
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
                                identifier: "27",
                                name: "Main Event Turbo Satellite",
                                dayTrack: 1,
                                type: "MainEvent",
                                time: { hours: 14, minutes: 0 },
                                duration: { hours: 4, minutes: 20 },
                                buyin: { total: 120, prize: 100 },
                                satellite: {
                                    identifier: "23",
                                    name: "Main Event Day 1",
                                    buyin: { total: 600, prize: 550 },
                                },
                                notes: [
                                    "Starting Chips: 6,000",
                                    "Registration and re-entries through first six (6) levels",
                                ],
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
                                identifier: "28",
                                name: "6 Max 'Short Deck' Ante Only",
                                notes: [
                                    "All cards 2-5 will be removed from the deck",
                                    "Flushes beat Full Houses",
                                    "A-6-7-8-9 makes a Straight",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first nine (9) levels",
                                    "10 min break at the completion of every six (6) levels",
                                ],
                                time: { hours: 17, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 5
                                },
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
                                identifier: "29",
                                name: "PLO Championship Satellite",
                                dayTrack: 1,
                                time: { hours: 19, minutes: 0 },
                                duration: { hours: 6, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                satellite: {
                                    identifier: "30",
                                    name: "6 MAX PLO Championship",
                                    buyin: { total: 550, prize: 500 },
                                },
                                notes: [
                                    "Starting Chips: 8,000",
                                    "Registration and re-entries through first six (6) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                ],
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
                        date: new Date(2018, 9, 28),
                        events: [
                            {
                                key: 58,
                                name: "SNG 6 MAX PLO Championship Satellite",
                                satellite: {
                                    identifier: "30",
                                    name: "6 MAX PLO Championship",
                                    buyin: { total: 550, prize: 500 },
                                },
                                time: { hours: 10, minutes: 0 },
                                duration: { hours: 2, minutes: 0 },
                                buyin: { total: 105, prize: 95 },
                                prizes: [
                                    "Winners receive 6 MAX PLO Championship entry",
                                    "Event #30",
                                    "1 in 6 win"
                                ],
                            },
                            {
                                key: 45,
                                identifier: "23",
                                name: "Main Event",
                                subtitle: "Day 2",
                                isLiveCoverage: true,
                                type: "MainEvent",
                                notes: [
                                    "Play continues until level 14 or 20% + 1 of the field",
                                    "Players may play multiple flights, but must forfeit smallest stack when advancing to Day 2"
                                ],
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 13, minutes: 20 },
                                buyin: { isInvitational: true },
                                gtd: {
                                    prize: 200
                                },
                                gameType: "No Limit Hold'em",
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
                                identifier: "30",
                                name: "6 MAX PLO Championship",
                                time: { hours: 15, minutes: 0 },
                                duration: { hours: 12, minutes: 0 },
                                buyin: { total: 550, prize: 500 },
                                gtd: {
                                    prize: 20
                                },
                                notes: [
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first nine (9) levels",
                                    "10 min break at the completion of every two (2) hours",
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
                                identifier: "31",
                                name: "No-Limit 3 Card Super Hold'em",
                                dayTrack: 1,
                                notes: [
                                    "Players receive three (3) hole cards",
                                    "Players may use 0, 1, 2, or 3 hold cards to make a 5 card hand",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every eight (8) levels",
                                    "60 min dinner break at the end of level 12",
                                ],
                                time: { hours: 18, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 10
                                },
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
                                name: "Hangout",
                                dayTrack: 2,
                                type: "social",
                                notes: [
                                    "Cash games to be determined"
                                ],
                                time: { hours: 20, minutes: 0 },
                                duration: { hours: 4, minutes: 0 },
                                buyin: { isCash: true },
                            },
                        ]
                    },
                    {
                        name: 'Monday',
                        isLast: true,
                        date: new Date(2018, 9, 29),
                        events: [
                            {
                                key: 49,
                                identifier: "32",
                                name: "Platinum Pass Invite",
                                isLiveCoverage: true,
                                time: { hours: 12, minutes: 0 },
                                duration: { hours: 8, minutes: 0 },
                                buyin: { isInvitational: true },
                                notes: [
                                    "Starting Chips: 10,000",
                                    "There is no re-entry available",
                                ],
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
                                identifier: "33",
                                name: "6-max 5-card",
                                dayTrack: 1,
                                notes: [
                                    "Players must use two (2) hole cards to form the best 5 card hand",
                                    "Starting Chips: 10,000",
                                    "Registration and re-entries through first eight (8) levels",
                                    "10 min break at the completion of every six (6) levels",
                                    "60 min dinner break at the end of level 12",
                                ],
                                time: { hours: 13, minutes: 0 },
                                duration: { hours: 9, minutes: 0 },
                                buyin: { total: 125, prize: 100 },
                                gtd: {
                                    prize: 5
                                },
                                gameType: "Pot Limit Omaha",
                                format: {
                                    levelMinutes: 20,
                                    levelPerBreak: 6,
                                    breakMinutes: 10,
                                }
                            },
                            {
                                key: 51,
                                identifier: "34",
                                name: "5 Max Double Board Taiwanese Poker",
                                notes: [
                                    "Starting Chips: 10,000",
                                    "10 min break at the completion of every six (6) levels",
                                ],
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