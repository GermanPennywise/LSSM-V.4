import type { InternalBuilding } from '../../../typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill('0').map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Fire station',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Ambulance extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                unlocksVehicleTypes: [5, 10],
                givesParkingLots: 0,
                isVehicleExtension: true,
            },
            null,
            {
                caption: 'Foam Extension',
                credits: 150_000,
                coins: 15,
                duration: '5 Days',
                unlocksVehicleTypes: [35, 36, 37, 38],
                givesParkingLots: 0,
                isVehicleExtension: true,
            },
            {
                caption: 'Swap Body Parking Space',
                credits: 50_000,
                coins: 20,
                duration: '7 Days',
                unlocksVehicleTypes: [
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [
                    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                ],
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Swap Body Parking Space',
                    credits: 50_000,
                    coins: 20,
                    duration: '7 Days',
                    unlocksVehicleTypes: [
                        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                    ],
                    givesParkingLots: 1,
                    isVehicleExtension: true,
                    parkingLotReservations: [
                        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                    ],
                    cannotDisable: true,
                },
                11
            ),
            null,
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
        maxBuildings: '6.000 together with small fire stations',
        maxLevel: 24,
        special:
            'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    1: {
        caption: 'Fire academy',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "Finance Admins and admins can (expand) fire department schools with the help of credits from the association's funds. Alliance Educators and admins can start training courses at association fire- brigade schools.",
        startClassrooms: 1,
    },
    2: {
        caption: 'Ambulance station',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [
            {
                caption: 'Mass Casualty Extension',
                credits: 150_000,
                coins: 20,
                duration: '5 Days',
                unlocksVehicleTypes: [33, 34],
                givesParkingLots: 2,
                isVehicleExtension: true,
                parkingLotReservations: [33, 34],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-19. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 19,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['Ambulance'],
        schoolingTypes: ['Rescue'],
    },
    3: {
        caption: 'Rescue (EMS) Academy',
        color: '#8c852c',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "Finance Admins and admins can (expand) association rescue schools with the help of credits from the association's funds. Alliance Educators and admins can start training courses at association rescue schools.",
        startClassrooms: 1,
    },
    4: {
        caption: 'Hospital',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        extensions: [
            {
                caption: 'General Internal',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'General Surgeon',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'Gynecology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurosurgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Cardiology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Cardiac Surgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'No limit',
        maxLevel: 20,
        special:
            'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
        startBeds: 10,
    },
    5: {
        caption: 'Medical Helicopter station',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1.000.000 / 50 Coins'],
        maxBuildings: 'see specials',
        maxLevel: 2,
        special:
            'Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
        startPersonnel: 1,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: ['Rescue'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    6: {
        caption: 'Police station',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Police & Public Order Extension',
                credits: 100_000,
                coins: 15,
                duration: '7 Days',
                unlocksVehicleTypes: [53, 54, 55, 56],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [54],
            },
            {
                caption: 'Additional Detention Van Parking Spaces',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                givesParkingLots: 2,
                isVehicleExtension: true,
                parkingLotReservations: [54, 54],
                requiredExtensions: [10],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-19. 100.000'],
        maxBuildings: '1.700 together with small police stations',
        maxLevel: 19,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Incident response vehicle'],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
    },
    7: {
        caption: 'Dispatch Center',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings:
            'For every 25 buildings, you can build one control center',
        maxLevel: 0,
        special: 'The control center is the administrative center.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
    },
    8: {
        caption: 'Police training centre',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "Finance Admins and admins can (expand) association police schools with the help of credits from the association's Funds. Alliance Educators and admins can start training courses at association police schools.",
        startClassrooms: 1,
    },
    13: {
        caption: 'Police Aviation',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1-5. 1.000.000 Credits / 50 Coins'],
        maxBuildings: 'see specials',
        maxLevel: 5,
        special:
            'Up to 6 landing sites can be built per station (expansion stages). Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
        startPersonnel: 3,
        startVehicles: [],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    14: {
        caption: 'Staging area',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 4,
        maxLevel: 0,
        special:
            'You can station as many of your own vehicles as you like at a staging area, members of the alliance can use the staging area. A staging area remains for 24 hours, but you can reset it to 24 hours at any time.With Premium Account you can have 8 staging areas at the same time',
        isStagingArea: true,
        maxBuildingsFunction: (): number => 4,
    },
    16: {
        caption: 'Prison',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 50_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                10
            ),
        ],
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
        startCells: 0,
    },
    18: {
        caption: 'Fire station (Small station) ',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Ambulance extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                unlocksVehicleTypes: [5, 10],
                givesParkingLots: 0,
                isVehicleExtension: true,
            },
            {
                caption: 'Airport extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
            },
            {
                caption: 'Foam Extension',
                credits: 150_000,
                coins: 15,
                duration: '5 Days',
                unlocksVehicleTypes: [35, 36, 37, 38],
                givesParkingLots: 0,
                isVehicleExtension: true,
            },
            {
                caption: 'Swap Body Parking Space',
                credits: 50_000,
                coins: 20,
                duration: '7 Days',
                unlocksVehicleTypes: [
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                cannotDisable: true,
            },
            {
                caption: 'Swap Body Parking Space',
                credits: 50_000,
                coins: 20,
                duration: '7 Days',
                unlocksVehicleTypes: [
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                cannotDisable: true,
            },
            {
                caption: 'Water rescue expansion',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversion to normal stations: difference price to normal stations',
        ],
        maxBuildings: '6.000 together with fire stations',
        maxLevel: 5,
        special:
            'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    19: {
        caption: 'Police station (Small station)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Police & Public Order Extension',
                credits: 100_000,
                coins: 15,
                duration: '7 Days',
                unlocksVehicleTypes: [53, 54, 55, 56],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [54],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversion to normal station: difference price to normal station',
        ],
        maxBuildings: '1.700 together with police stations',
        maxLevel: 5,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Incident response vehicle'],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
    },
    20: {
        caption: 'Ambulance station (Small station)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'Mass Casualty Extension',
                credits: 150_000,
                coins: 20,
                duration: '5 Days',
                unlocksVehicleTypes: '33, 34',
                givesParkingLots: '2',
                isVehicleExtension: true,
                parkingLotReservations: '33, 34',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversion to normal station: difference price to normal station',
        ],
        maxBuildings: 'No limit',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulance'],
        schoolingTypes: ['Rescue'],
        startParkingLots: 1,
    },
    21: {
        caption: 'Clinic',
        color: '#e2e53b',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'General Internal',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
        ],
        levelcost: ['1-5. 20.000'],
        maxBuildings: 'No limit',
        maxLevel: 5,
        special: '',
        startPersonnel: 0,
        startVehicles: ['None. You can buy a max of 2 Vehicles'],
        schoolingTypes: ['Rescue'],
        startParkingLots: 2,
        startBeds: 5,
        parkingLotsPerLevel: 0,
    },
    22: {
        caption: 'Home Response Location',
        color: '#eeb611',
        coins: 10,
        credits: 10_000,
        extensions: [],
        levelcost: ['not expandable'],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            'It can only Store: Fire Officer, Rapid Response Vehicle, Operational Team Leader, General Practitioner, Community First Responder, Ambulance Officer and the Dog Support Unit (DSU)',
        startPersonnel: 1,
        startVehicles: [''],
        schoolingTypes: ['Rescue', 'Police', 'Fire'],
        startParkingLots: 1,
    },
    23: {
        caption: 'Large complex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Too Expensive'],
        maxBuildings: 'No Limit',
        maxLevel: 5,
        special: "TOO EXPENSIVE, DON'T BUY IT, DON'T EXPAND IT",
        startPersonnel: 0,
        startVehicles: [''],
        schoolingTypes: [],
        startParkingLots: 0,
    },
    24: {
        caption: 'Small complex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Too Expensive'],
        maxBuildings: 'No Limit',
        maxLevel: 5,
        special: "TOO EXPENSIVE, DON'T BUY IT, DON'T EXPAND IT",
        startPersonnel: 0,
        startVehicles: [''],
        schoolingTypes: [],
        startParkingLots: 0,
    },
    25: {
        caption: 'HART Base',
        color: '#eeb611',
        coins: 25,
        credits: 400_000,
        extensions: [
            {
                caption: 'Mass Casualty Extension',
                credits: 150_000,
                coins: 20,
                duration: '5 Days',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 25.000',
            '3. 50.000',
            '4.-9. 100.000',
            '10.-14. 150.000',
            '15.-20. 200.000',
        ],
        maxBuildings: 'No limit',
        maxLevel: 20,
        special: '',
        startPersonnel: 10,
        startVehicles: [],
        schoolingTypes: ['Rescue'],
        startParkingLots: 5,
    },
    26: {
        caption: 'Large Police Depot',
        color: '#116611',
        coins: 50,
        credits: 1_000_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                39
            ),
            {
                caption: 'Police & Public Order Extension',
                credits: 100_000,
                coins: 15,
                duration: '7 Days',
                unlocksVehicleTypes: [53, 54, 55, 56],
                givesParkingLots: 1,
                isVehicleExtension: true,
                parkingLotReservations: [54],
            },
            {
                caption: 'Additional Detention Van Parking Spaces',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                givesParkingLots: 2,
                isVehicleExtension: true,
                parkingLotReservations: [54, 54],
                requiredExtensions: [40],
            },
        ],
        levelcost: [
            '1. 20.000',
            '2. 50.000',
            '3. 100.000',
            '4. 150.000',
            '5.-9. 200.000',
            '10.-14. 300.000',
            '15.-20. 400.000',
        ],
        maxBuildings: 'no limit',
        maxLevel: 20,
        special:
            'You Can build every 50 Police Stations. Each level gives two more parking lots.',
        startPersonnel: 20,
        startVehicles: [],
        schoolingTypes: ['Police'],
        startParkingLots: 10,
        startCells: 0,
        parkingLotsPerLevel: 2,
    },
} as Record<number, InternalBuilding>;
