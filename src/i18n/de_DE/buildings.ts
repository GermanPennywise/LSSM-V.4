import type { Building, InternalBuilding } from '../../../typings/Building';

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
        caption: 'Feuerwache',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Rettungsdienst-Erweiterung',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [28, 29, 38, 73, 74],
            },
            ...multiplyExtension(
                {
                    caption: 'Abrollbehälter-Stellplatz',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Tage',
                    isVehicleExtension: true,
                    givesParkingLots: 1,
                    unlocksVehicleTypes: [47, 48, 49, 54, 62, 71, 77, 78],
                    parkingLotReservations: [[47, 48, 49, 54, 62, 71, 77, 78]],
                    cannotDisable: true,
                },
                5
            ),
            {
                caption: 'Wasserrettungs-Erweiterung',
                credits: 400_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [64, 63, 70],
            },
            {
                caption: 'Abrollbehälter-Stellplatz',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [47, 48, 49, 54, 62, 71, 77, 78],
                parkingLotReservations: [[47, 48, 49, 54, 62, 71, 77, 78]],
                cannotDisable: true,
            },
            {
                caption: 'Flughafen-Erweiterung',
                credits: 300_000,
                coins: 25,
                duration: '7 Tage',
                maxExtensionsFunction: (
                    buildingsByType: Record<number, Building[]>
                ): number =>
                    Math.floor(
                        ((buildingsByType[0]?.length ?? 0) +
                            (buildingsByType[18]?.length ?? 0)) /
                            10
                    ),
                canBuyByAmount: (boughtExtensionsAmountByType, maxExtensions) =>
                    (boughtExtensionsAmountByType[0][8] ?? 0) +
                        (boughtExtensionsAmountByType[18][4] ?? 0) <
                    maxExtensions,
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [75, 76],
            },
            {
                caption: 'Großwache',
                credits: 1_000_000,
                coins: 50,
                duration: '7 Tage',
                maxExtensionsFunction: (
                    buildingsByType: Record<number, Building[]>
                ): number =>
                    Math.floor(
                        ((buildingsByType[0]?.length ?? 0) +
                            (buildingsByType[18]?.length ?? 0)) /
                            10
                    ),
                canBuyByAmount: (boughtExtensionsAmountByType, maxExtensions) =>
                    (boughtExtensionsAmountByType[0][9] ?? 0) < maxExtensions,
                isVehicleExtension: true,
                givesParkingLots: 10,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Abrollbehälter-Stellplatz',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Tage',
                    isVehicleExtension: true,
                    givesParkingLots: 1,
                    unlocksVehicleTypes: [47, 48, 49, 54, 62, 71, 77, 78],
                    parkingLotReservations: [[47, 48, 49, 54, 62, 71, 77, 78]],
                    cannotDisable: true,
                },
                3
            ),
            {
                caption: 'Werkfeuerwehr',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [83, 84, 85, 86],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: '6.000 mit kleinen Feuerwachen zusammen',
        maxLevel: 16,
        special:
            'Ab der 24. Feuerwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>100.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Feuerwachen − 22)</code>. Der Coins-Preis bleibt konstant!',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [
            'LF 20',
            'LF 10',
            'LF 8/6',
            'LF 20/16',
            'LF 10/6',
            'LF 16-TS',
            'KLF',
            'MLF',
            'TSF-W',
            '(HLF 20 und HLF 10 ab Dienstgrad "Gruppenführer(in)" => Baukosten 20.000 höher)',
        ],
        schoolingTypes: ['Feuerwehr'],
        maxBuildingsFunction: (): number => 6000,
    },
    1: {
        caption: 'Feuerwehrschule',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Weiterer Klassenraum',
                credits: 400_000,
                coins: 40,
                duration: '7 Tage',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        startClassrooms: 1,
        special:
            'Finanzminister und Admins können Verbands-Feuerwehrschulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen. Lehrgangsmeister und Admins können Lehrgänge an Verbands-Feuerwehrschulen starten.',
    },
    2: {
        caption: 'Rettungswache',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 14,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['RTW'],
        schoolingTypes: ['Rettungsdienst'],
    },
    3: {
        caption: 'Rettungsschule',
        color: '#ddc722',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Weiterer Klassenraum',
                credits: 400_000,
                coins: 40,
                duration: '7 Tage',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special:
            'Finanzminister und Admins können Verbands-Rettungsschulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen. Lehrgangsmeister und Admins können Lehrgänge an Verbands-Rettungsschulen starten.',
        startClassrooms: 1,
    },
    4: {
        caption: 'Krankenhaus',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        extensions: [
            {
                caption: 'Allgemeine Innere',
                credits: 10_000,
                coins: 10,
                duration: '7 Tage',
                cannotDisable: true,
            },
            {
                caption: 'Allgemeine Chirurgie',
                credits: 10_000,
                coins: 10,
                duration: '7 Tage',
                cannotDisable: true,
            },
            {
                caption: 'Gynäkologie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urologie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Unfallchirurgie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurologie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurochirurgie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Kardiologie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Kardiochirurgie',
                credits: 70_000,
                coins: 15,
                duration: '7 Tage',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 20,
        special:
            'Finanzminister und Admins können Verbands-Krankenhäuser mit Hilfe von Credits aus der Verbandskasse (aus-)bauen.',
        startBeds: 10,
    },
    5: {
        caption: 'Rettungshubschrauber-Station',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1.-7. 1.000.000 Credits / 50 Coins'],
        maxBuildings: 'siehe Besonderheiten',
        maxLevel: 6,
        special:
            'Pro Station können bis zu 7 Landeplätze gebaut werden (Ausbaustufen). Bis zum 125. Gebäude (aller Art) können insgesamt max. 4 Landeplätze gebaut werden. Danach wächst die Zahl alle 25 Gebäude um 1 (Beginnend beim 125.).',
        startPersonnel: 0,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: ['Rettungsdienst'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    6: {
        caption: 'Polizeiwache',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Zelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Zelle',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Tage',
                    newCells: 1,
                    requiredExtensions: [0],
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Diensthundestaffel',
                credits: 100_000,
                coins: 10,
                duration: '5 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [94],
                parkingLotReservations: [[94]],
            },
            {
                caption: 'Kriminalpolizei-Erweiterung',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                givesParkingLots: 0,
                unlocksVehicleTypes: [98],
            },
            {
                caption: 'Dienstgruppenleitung-Erweiterung',
                credits: 200_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [103],
                parkingLotReservations: [[103]],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
        maxBuildings: '1.700 mit kleinen Polizeiwachen zusammen',
        maxLevel: 14,
        special:
            'Ab der 24. Polizeiwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>100.000+200.000*LOG<sub>2</sub>(Anzahl der vorhandenen Polizeiwache − 22)</code>. Der Coins-Preis bleibt konstant!',
        startPersonnel: 2,
        startParkingLots: 1,
        startCells: 0,
        startVehicles: ['FuStW'],
        schoolingTypes: ['Polizei'],
        maxBuildingsFunction: (): number => 1700,
    },
    7: {
        caption: 'Leitstelle',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Alle 25 Gebäude eine Leitstelle',
        maxLevel: 0,
        special: 'Die Leitstelle ist die Verwaltungszentrale.',
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
        isDispatchCenter: true,
    },
    8: {
        caption: 'Polizeischule',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Weiterer Klassenraum',
                credits: 400_000,
                coins: 40,
                duration: '7 Tage',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special:
            'Finanzminister und Admins können Verbands-Polizeischulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen. Lehrgangsmeister und Admins können Lehrgänge an Verbands-Polizeischulen starten.',
        startClassrooms: 1,
    },
    9: {
        caption: 'THW-Ortsverband',
        color: '#000f76',
        coins: 35,
        credits: 200_000,
        extensions: [
            {
                caption: '1. Technischer Zug: Bergungsgruppe 2',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [41],
                parkingLotReservations: [[41]],
            },
            {
                caption: '1. Technischer Zug: Zugtrupp',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [40],
                parkingLotReservations: [[40]],
            },
            {
                caption: 'Fachgruppe Räumen',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 4,
                unlocksVehicleTypes: [42, 43, 44, 45],
                parkingLotReservations: [[42], [43], [44], [45]],
                requiredExtensions: [0, 1],
            },
            {
                caption: 'Fachgruppe Wassergefahren',
                credits: 500_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [65, 66, 67, 68, 69],
                parkingLotReservations: [[65], [66], [67], [68], [69]],
                requiredExtensions: [0, 1],
            },
            {
                caption: '2. Technischer Zug - Grundvoraussetzungen',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [39],
                parkingLotReservations: [[39]],
                requiredExtensions: [0, 1],
            },
            {
                caption: '2. Technischer Zug: Bergungsgruppe 2',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [41],
                parkingLotReservations: [[41]],
                requiredExtensions: [4],
            },
            {
                caption: '2. Technischer Zug: Zugtrupp',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [40],
                parkingLotReservations: [[40]],
                requiredExtensions: [4],
            },
            {
                caption: 'Fachgruppe Ortung',
                credits: 450_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [92, 93],
                parkingLotReservations: [[92], [93]],
                giftsVehicles: [92, 93],
                requiredExtensions: [0, 1],
            },
            {
                caption: 'Fachgruppe Wasserschaden/Pumpen',
                credits: 200_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 4,
                unlocksVehicleTypes: [99, 100, 101, 102],
                parkingLotReservations: [[99], [100], [101], [102]],
                requiredExtensions: [0, 1],
            },
        ],
        levelcost: [],
        maxBuildings: 'Keine Grenze bekannt',
        maxLevel: 0,
        special:
            'Mit dem Bau eines THW-Ortsverbands bekommt man einen GKW und 9 Mitglieder geschenkt. Baukosten für weitere THW-Liegenschaften: 2. Ortsverband 300.000 Credits/ 35 Coins, 3. Ortsverband 358.496 Credits/ 35 Coins, 4. Ortsverband 432.193 Credits/ 35 Coins, 5. Ortsverband 458.496 Credits/ 35 Coins. Formel: <code>200.000+100.000*LOG<sub>2</sub>(Anzahl der vorhandenen Wachen + 1)</code>',
        startPersonnel: 9,
        startParkingLots: 1,
        startVehicles: ['GKW'],
        schoolingTypes: ['THW'],
    },
    10: {
        caption: 'THW Bundesschule',
        color: '#222d54',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            index => ({
                caption: 'Weiterer Klassenraum',
                credits: 400_000,
                coins: 40,
                duration: '7 Tage',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special:
            'Finanzminister und Admins können Verbands-THW-Schulen mit Hilfe von Credits aus der Verbandskasse (aus-)bauen. Lehrgangsmeister und Admins können Lehrgänge an Verbands-THW-Schulen starten.',
        startClassrooms: 1,
    },
    11: {
        caption: 'Bereitschaftspolizei',
        color: '#227722',
        coins: 50,
        credits: 500_000,
        extensions: [
            {
                caption: '2. Zug der 1. Hundertschaft',
                coins: 5,
                credits: 25_000,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 4,
                unlocksVehicleTypes: [35, 50],
                parkingLotReservations: [[35], [50], [50], [50]],
            },
            {
                caption: '3. Zug der 1. Hundertschaft',
                coins: 5,
                credits: 25_000,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [35, 50, 51],
                parkingLotReservations: [[35], [50], [50], [50], [51]],
                requiredExtensions: [0],
            },
            {
                caption: 'Sonderfahrzeug: Gefangenenkraftwagen',
                coins: 5,
                credits: 25_000,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [52],
                parkingLotReservations: [[52]],
                requiredExtensions: [1],
            },
            {
                caption: 'Technischer Zug: Wasserwerfer',
                coins: 5,
                credits: 25_000,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 4,
                unlocksVehicleTypes: [35, 72],
                parkingLotReservations: [[35], [72], [72], [72]],
            },
            {
                caption: 'SEK: 1. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 79, 80],
                parkingLotReservations: [[51], [79], [79], [79], [80]],
            },
            {
                caption: 'SEK: 2. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 79, 80],
                parkingLotReservations: [[51], [79], [79], [79], [80]],
                requiredExtensions: [4],
            },
            {
                caption: 'MEK: 1. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 81, 82],
                parkingLotReservations: [[51], [81], [81], [81], [82]],
            },
            {
                caption: 'MEK: 2. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 81, 82],
                parkingLotReservations: [[51], [81], [81], [81], [82]],
                requiredExtensions: [6],
            },
            {
                caption: 'Diensthundestaffel',
                credits: 100_000,
                coins: 10,
                duration: '5 Tage',
                isVehicleExtension: true,
                givesParkingLots: 3,
                unlocksVehicleTypes: [94],
                parkingLotReservations: [[94], [94], [94]],
            },
        ],
        levelcost: ['Keine Ausbaustufen möglich'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special:
            'Mit dem Bau einer Bereitschaftspolizei bekommt man automatisch 4 Stellplätze für einen Zug (3 GruKw & 1 leBefKw) geschenkt. Die Wache generiert noch keine Einsätze. Um Einsätze zu erhalten muss man die erste Ausbaustufe bauen.',
        startPersonnel: 0,
        startParkingLots: 3,
        startParkingLotReservations: [[35], [50], [50], [50]],
        startVehicles: [],
        schoolingTypes: ['Polizei'],
    },
    12: {
        caption: 'Schnelleinsatzgruppe (SEG)',
        color: '#e05b00',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Führung',
                coins: 5,
                credits: 25_000,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [59],
                parkingLotReservations: [[59]],
            },
            {
                caption: 'Sanitätsdienst',
                coins: 5,
                credits: 25_500,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 4,
                unlocksVehicleTypes: [28, 58, 60],
                parkingLotReservations: [[28], [58], [58], [60]],
            },
            {
                caption: 'Wasserrettungs-Erweiterung',
                coins: 25,
                credits: 500_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 3,
                unlocksVehicleTypes: [63, 64, 70],
                parkingLotReservations: [
                    [63, 64, 70],
                    [63, 64, 70],
                    [63, 64, 70],
                ],
            },
            {
                caption: 'Rettungshundestaffel',
                coins: 25,
                credits: 350_000,
                duration: '7 tage',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [91],
                parkingLotReservations: [[91], [91]],
            },
        ],
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special: 'SEGs können ab der 5. Rettungswache gebaut werden.',
        startPersonnel: 0,
        startParkingLots: 1,
        startVehicles: ['KTW Typ B'],
        schoolingTypes: ['Rettungsdienst'],
    },
    13: {
        caption: 'Polizeihubschrauberstation',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [
            {
                caption: 'Außenlastbehälter-Erweiterung',
                credits: 200_000,
                coins: 15,
                duration: '3 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                givesParkingLotsPerLevel: 1,
                unlocksVehicleTypes: [96],
                parkingLotReservations: [[96]],
            },
        ],
        levelcost: ['1.-7. 1.000.000 Credits / 50 Coins'],
        maxBuildings: 'siehe Besonderheiten',
        maxLevel: 6,
        special:
            'Pro Station können bis zu 7 Landeplätze gebaut werden (Ausbaustufen). Bis zum 125. Gebäude (aller Art) können insgesamt max. 4 Landeplätze gebaut werden. Danach wächst die Zahl alle 25 Gebäude um 1 (Beginnend beim 125.).',
        startPersonnel: 0,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: ['Polizei'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    14: {
        caption: 'Bereitstellungsraum',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 1,
        maxLevel: 0,
        special:
            'An einem Bereitstellungsraum kann man selbst beliebig viele der eigenen Fahrzeuge stationieren, Verbandsmitglieder können den Raum mitnutzen. Ein Bereitstellungsraum bleibt 24 Stunden bestehen, man kann ihn aber jederzeit wieder auf 24h zurücksetzen.',
        maxBuildingsFunction: (): number => 1,
        isStagingArea: true,
    },
    15: {
        caption: 'Wasserrettung',
        color: '#7fffd4',
        coins: 50,
        credits: 500_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special:
            'Beim Bau bekommst du 10 Leute sowie ein GW-Wasserrettung geschenkt.',
        startPersonnel: 6,
        startParkingLots: 1,
        startVehicles: ['GW-Wasserrettung'],
        schoolingTypes: ['Rettungsdienst'],
    },
    16: {
        caption: 'Verbandszellen',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Zelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Zelle',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Tage',
                    newCells: 1,
                    requiredExtensions: [0],
                    cannotDisable: true,
                },
                9
            ),
        ],
        levelcost: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special:
            'Dieses Gebäude kann nur von Admins und Finanzministern mit Credits aus der Verbandskasse gebaut und ausgebaut werden. Die gebauten Zellen stehen allen Verbandsmitgliedern zur Verfügung.',
        startCells: 1,
    },
    17: {
        caption: 'Polizei-Sondereinheiten',
        color: '#1a7e23',
        coins: 40,
        credits: 400_000,
        extensions: [
            {
                caption: 'SEK: 1. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 79, 80],
                parkingLotReservations: [[51], [79], [79], [79], [80]],
            },
            {
                caption: 'SEK: 2. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 79, 80],
                parkingLotReservations: [[51], [79], [79], [79], [80]],
                requiredExtensions: [0],
            },
            {
                caption: 'MEK: 1. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 81, 82],
                parkingLotReservations: [[51], [81], [81], [81], [82]],
            },
            {
                caption: 'MEK: 2. Zug',
                coins: 10,
                credits: 100_000,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 5,
                unlocksVehicleTypes: [51, 81, 82],
                parkingLotReservations: [[51], [81], [81], [81], [82]],
                requiredExtensions: [2],
            },
            {
                caption: 'Diensthundestaffel',
                credits: 100_000,
                coins: 10,
                duration: '5 Tage',
                isVehicleExtension: true,
                givesParkingLots: 3,
                unlocksVehicleTypes: [94],
                parkingLotReservations: [[94], [94], [94]],
            },
        ],
        levelcost: ['Keine Ausbaustufen möglich'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 0,
        special: '',
        startPersonnel: 0,
        startParkingLots: 0,
        startVehicles: [],
        schoolingTypes: ['Polizei'],
    },
    18: {
        caption: 'Feuerwache (Kleinwache)',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Rettungsdienst-Erweiterung',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [28, 29, 38, 73, 74],
            },
            ...multiplyExtension(
                {
                    caption: 'Abrollbehälter-Stellplatz',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Tage',
                    isVehicleExtension: true,
                    givesParkingLots: 1,
                    unlocksVehicleTypes: [47, 48, 49, 54, 62, 71, 77, 78],
                    parkingLotReservations: [[47, 48, 49, 54, 62, 71, 77, 78]],
                    cannotDisable: true,
                },
                2
            ),
            {
                caption: 'Wasserrettungs-Erweiterung',
                credits: 400_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [64, 63, 70],
            },
            {
                caption: 'Flughafen-Erweiterung',
                credits: 300_000,
                coins: 25,
                duration: '7 Tage',
                maxExtensionsFunction: (
                    buildingsByType: Record<number, Building[]>
                ): number =>
                    Math.floor(
                        ((buildingsByType[0]?.length ?? 0) +
                            (buildingsByType[18]?.length ?? 0)) /
                            10
                    ),
                canBuyByAmount: (boughtExtensionsAmountByType, maxExtensions) =>
                    (boughtExtensionsAmountByType[0][8] ?? 0) +
                        (boughtExtensionsAmountByType[18][4] ?? 0) <
                    maxExtensions,
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [75, 76],
            },
            {
                caption: 'Werkfeuerwehr',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [83, 84, 85, 86],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Umbau zur normalen Wache: Differenz-Preis zur normalen Wache',
        ],
        maxBuildings: '6.000 mit Feuerwachen zusammen',
        maxLevel: 5,
        special:
            'Ab der 24. Feuerwache steigen die Kosten für den Neubau einer Wache nach folgender Formel: <code>(50.000+100.000*LOG<sub>2</sub>(Anzahl der vorhandenen Feuerwachen − 22)) / 2</code>. max. 1 Million Credits. Der Coins-Preis bleibt konstant!',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [
            'LF 20',
            'LF 10',
            'LF 8/6',
            'LF 20/16',
            'LF 10/6',
            'LF 16-TS',
            'KLF',
            'MLF',
            'TSF-W',
            '(HLF 20 und HLF 10 ab Dienstgrad "Gruppenführer(in)" => Baukosten 15.000 höher)',
        ],
        schoolingTypes: ['Feuerwehr'],
        maxBuildingsFunction: (): number => 6000,
    },
    19: {
        caption: 'Polizeiwache (Kleinwache)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Zelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Zelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Tage',
                newCells: 1,
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Diensthundestaffel',
                credits: 100_000,
                coins: 10,
                duration: '5 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [94],
                parkingLotReservations: [[94]],
            },
            {
                caption: 'Kriminalpolizei-Erweiterung',
                credits: 100_000,
                coins: 20,
                duration: '7 Tage',
                givesParkingLots: 0,
                unlocksVehicleTypes: [98],
            },
            {
                caption: 'Dienstgruppenleitung-Erweiterung',
                credits: 200_000,
                coins: 25,
                duration: '7 Tage',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [103],
                parkingLotReservations: [[103]],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Umbau zur normalen Wache: Differenz-Preis zur normalen Wache',
        ],
        maxBuildings: '1.700 mit Polizeiwachen zusammen',
        maxLevel: 4,
        special:
            'Ab der 24. Polizeiwache berechnen sich die Kosten für den Neubau einer Wache nach folgender Formel: <code>(50.000+100.000*LOG<sub>2</sub>(Anzahl der vorhandenen Polizeiwachen − 22)) / 2</code>. Der Coins-Preis bleibt konstant!',
        startPersonnel: 2,
        startParkingLots: 1,
        startCells: 0,
        startVehicles: ['FuStW'],
        schoolingTypes: ['Polizei'],
        maxBuildingsFunction: (): number => 1700,
    },
    20: {
        caption: 'Rettungswache (Kleinwache)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Umbau zur normalen Wache: Differenz-Preis zur normalen Wache',
        ],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['RTW'],
        schoolingTypes: ['Rettungsdienst'],
    },
    21: {
        caption: 'Rettungshundestaffel',
        color: '#663300',
        coins: 50,
        credits: 450_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: '',
        startPersonnel: 10,
        startParkingLots: 2,
        startVehicles: ['Rettungshundefahrzeug'],
        schoolingTypes: ['Rettungsdienst'],
    },
    22: {
        caption: 'Großer Komplex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        levelcost: ['Zu Teuer'],
        extensions: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'ZU TEUER, KAUFT ES NICHT, BAUT ES NICHT AUS',
        startPersonnel: -1,
        startParkingLots: 0,
        startVehicles: [''],
        schoolingTypes: [],
    },
    23: {
        caption: 'Kleiner Komplex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        levelcost: ['Zu Teuer'],
        extensions: [],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'ZU TEUER, KAUFT ES NICHT, BAUT ES NICHT AUS',
        startPersonnel: -1,
        startParkingLots: 0,
        startVehicles: [''],
        schoolingTypes: [],
    },
} as Record<number, InternalBuilding>;