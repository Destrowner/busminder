const fetchBuses = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: 1,
                        image: require('../assets/images/bus.png'),
                        name: 'EX 1-2',
                        route: 'Kaduwela - Matara',
                        seats: [
                            {
                                id: 1,
                                seats: [
                                    {
                                        id: 1,
                                        isAvailable: false,
                                        name: '1',
                                    },
                                    {
                                        id: 2,
                                        isAvailable: true,
                                        name: '2',
                                    },
                                    {
                                        id: 3,
                                        isAvailable: true,
                                        name: '3',
                                    },
                                    {
                                        id: 4,
                                        isAvailable: true,
                                        name: '4',
                                    },
                                    {
                                        id: 5,
                                        isAvailable: true,
                                        name: '5',
                                    },
                                    {
                                        id: 6,
                                        isAvailable: true,
                                        name: '6',
                                    },
                                    {
                                        id: 7,
                                        isAvailable: true,
                                        name: '7',
                                    },
                                    {
                                        id: 8,
                                        isAvailable: true,
                                        name: '8',
                                    },
                                    {
                                        id: 9,
                                        isAvailable: true,
                                        name: '9',
                                    },
                                    {
                                        id: 10,
                                        isAvailable: true,
                                        name: '10',
                                    },
                                    {
                                        id: 11,
                                        isAvailable: true,
                                        name: '11',
                                    },
                                    {
                                        id: 12,
                                        isAvailable: true,
                                        name: '12',
                                    },
                                    {
                                        id: 13,
                                        isAvailable: true,
                                        name: '13',
                                    },
                                    {
                                        id: 14,
                                        isAvailable: true,
                                        name: '14',
                                    },
                                ],
                            },
                            {
                                id: 2,
                                seats: [
                                    {
                                        id: 15,
                                        isAvailable: true,
                                        name: '1',
                                    },
                                    {
                                        id: 16,
                                        isAvailable: true,
                                        name: '2',
                                    },
                                    {
                                        id: 17,
                                        isAvailable: true,
                                        name: '3',
                                    },
                                    {
                                        id: 18,
                                        isAvailable: true,
                                        name: '4',
                                    },
                                    {
                                        id: 19,
                                        isAvailable: true,
                                        name: '5',
                                    },
                                    {
                                        id: 20,
                                        isAvailable: true,
                                        name: '6',
                                    },
                                    {
                                        id: 21,
                                        isAvailable: true,
                                        name: '7',
                                    },
                                    {
                                        id: 22,
                                        isAvailable: true,
                                        name: '8',
                                    },
                                    {
                                        id: 23,
                                        isAvailable: true,
                                        name: '9',
                                    },
                                    {
                                        id: 24,
                                        isAvailable: true,
                                        name: '10',
                                    },
                                    {
                                        id: 25,
                                        isAvailable: true,
                                        name: '11',
                                    },
                                    {
                                        id: 26,
                                        isAvailable: true,
                                        name: '12',
                                    },
                                    {
                                        id: 27,
                                        isAvailable: true,
                                        name: '13',
                                    },
                                    {
                                        id: 28,
                                        isAvailable: false,
                                        name: '14',
                                    },
                                ],
                            },
                        ],
                        speed: '200kmph',
                    },
                    {
                        id: 2,
                        image: require('../assets/images/bus.png'),
                        name: 'EX 1-25',
                        route: 'Panadura - Matara',
                        seats: [
                            {
                                id: 1,
                                seats: [
                                    {
                                        id: 1,
                                        isAvailable: false,
                                        name: '1',
                                    },
                                    {
                                        id: 2,
                                        isAvailable: true,
                                        name: '2',
                                    },
                                    {
                                        id: 3,
                                        isAvailable: true,
                                        name: '3',
                                    },
                                    {
                                        id: 4,
                                        isAvailable: true,
                                        name: '4',
                                    },
                                    {
                                        id: 5,
                                        isAvailable: true,
                                        name: '5',
                                    },
                                    {
                                        id: 6,
                                        isAvailable: true,
                                        name: '6',
                                    },
                                    {
                                        id: 7,
                                        isAvailable: true,
                                        name: '7',
                                    },
                                    {
                                        id: 8,
                                        isAvailable: true,
                                        name: '8',
                                    },
                                    {
                                        id: 9,
                                        isAvailable: true,
                                        name: '9',
                                    },
                                    {
                                        id: 10,
                                        isAvailable: true,
                                        name: '10',
                                    },
                                    {
                                        id: 11,
                                        isAvailable: true,
                                        name: '11',
                                    },
                                    {
                                        id: 12,
                                        isAvailable: true,
                                        name: '12',
                                    },
                                    {
                                        id: 13,
                                        isAvailable: true,
                                        name: '13',
                                    },
                                    {
                                        id: 14,
                                        isAvailable: true,
                                        name: '14',
                                    },
                                ],
                            },
                            {
                                id: 2,
                                seats: [
                                    {
                                        id: 15,
                                        isAvailable: true,
                                        name: '1',
                                    },
                                    {
                                        id: 16,
                                        isAvailable: true,
                                        name: '2',
                                    },
                                    {
                                        id: 17,
                                        isAvailable: true,
                                        name: '3',
                                    },
                                    {
                                        id: 18,
                                        isAvailable: true,
                                        name: '4',
                                    },
                                    {
                                        id: 19,
                                        isAvailable: true,
                                        name: '5',
                                    },
                                    {
                                        id: 20,
                                        isAvailable: true,
                                        name: '6',
                                    },
                                    {
                                        id: 21,
                                        isAvailable: true,
                                        name: '7',
                                    },
                                    {
                                        id: 22,
                                        isAvailable: true,
                                        name: '8',
                                    },
                                    {
                                        id: 23,
                                        isAvailable: true,
                                        name: '9',
                                    },
                                    {
                                        id: 24,
                                        isAvailable: true,
                                        name: '10',
                                    },
                                    {
                                        id: 25,
                                        isAvailable: true,
                                        name: '11',
                                    },
                                    {
                                        id: 26,
                                        isAvailable: true,
                                        name: '12',
                                    },
                                    {
                                        id: 27,
                                        isAvailable: true,
                                        name: '13',
                                    },
                                    {
                                        id: 28,
                                        isAvailable: false,
                                        name: '14',
                                    },
                                ],
                            },
                        ],
                        speed: '200kmph',
                    },
                ]
            )
        }, 500)
    })
}

const API = {
    fetchBuses,
}

export default API
