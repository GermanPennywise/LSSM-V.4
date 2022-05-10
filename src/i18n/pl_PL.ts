const modules = {
    appstore: {
        save: 'Zapisz',
        reset: 'Reset',
        noMapkit:
            'Ten moduł nie działa z mapą typu „Mapkit” z powodu ograniczeń Mapkit!',
        dev: 'Ten moduł jest obecnie nadal rozwijany. Aktywacja może prowadzić do niekompletnych i błędnych funkcji!',
        closeWarning: {
            title: 'Niezapisane zmiany',
            text: 'Wprowadziłeś zmiany w App Store, które nie zostały jeszcze zapisane. Zresetuj je lub zapisz, aby zamknąć App Store.',
            close: 'Zamknij',
            saveAndExit: 'Zapisz i wyjdź',
            exit: 'Wyjdź bez zapisywania',
            abort: 'Anuluj',
        },
    },
    settings: {
        name: 'Ustawienia',
        save: 'Zapisz',
        discard: 'Anuluj',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        appendableList: {
            unique: {
                title: 'podwójna wartość',
                text: 'W kolumnie {title} nie może być zduplikowanych wartości. Wartość {value} już istnieje!',
                confirm: 'Potwierdź',
            },
        },
        resetWarning: {
            title: 'Resetuj ustawienia',
            text: 'Czy na pewno chcesz zresetować ustawienia do wartości domyślnych? Tego nie można cofnąć!',
            close: 'Anuluj',
            total: 'Wszystkie ustawienia',
            module: 'Tylko dla tego modułu',
        },
        resetWarningSetting: {
            title: 'Resetuj ustawienia',
            text: 'Czy na pewno chcesz zresetować to ustawienie<b>{setting}</b>modułu<b>{module}</b>do jego wartości domyślnej?',
            close: 'Anuluj',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Niezapisane zmiany',
            text: 'Dokonałeś zmian w ustawieniach, które nie zostały jeszcze zapisane. Zresetuj je, odrzuć lub zapisz, aby zamknąć ustawienia.',
            close: 'Zamknij',
            saveAndExit: 'Zapisz i wyjdź',
            exit: 'Wyjdź bez zapisywania',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Wybierz pozycję',
            zoom: 'Wybierz pozycję i zoom',
            sync: 'użyj aktualnej pozycji',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    error: {
        title: 'Menedżer LSS: błąd',
        msg: 'Jeśli ten błąd występuje często, zgłoś go zespołowi LSSM!',
        requestIssue: {
            title: 'Błędne żądanie: Status {status}',
            text: `Ouch, unfortunately an error occurred with this server request:<br>
<b>Status</b>: <code>{status}</code> <code>{statusText}</code><br>
<b>URL</b>: <em><code>{method}</code></em> <code>{url}</code><br>
<b>Feature</b>: <code>{feature}</code><br>
<b>Duration</b>: <code>{duration}ms</code><br>
<b>User</b>: <code>{uid}</code><br>
<b>Timestamp</b>: <code>{timestamp}</code>
<br>
Please try to perform the desired action again.<br>
If several requests fail in a short time, this could be due to server problems. Please try again at a later time.`,
            close: 'Odrzuć',
        },
    },
    warnings: {
        version: {
            title: 'Zła wersja LSS Manager',
            text: 'Drogi użytkowniku, niestety odkryliśmy, że nie masz najnowszej wersji LSS Manager. Najnowsza wersja to {version}, ale ty masz {curver}. Proszę przeładować grę  (Ctrl + F5, na urządzeniach Apple polecenie + R), to powinno naprawić błąd. Jeśli błąd będzie się powtarzał, zgłoś go zespołowi! W przypadku użycia złej wersji nie możemy zagwarantować pełnej funkcjonalności LSS-Manager.',
            close: 'Zamknij wiadomość i przeładuj grę (zalecane)',
            abort: 'Zmaknij wiadomość bez przeładowania',
        },
    },
    anniversary1: {
        closeNote: 'Tip: You can also click on the balloons to close!',
        title: '🎉 There is reason to celebrate! 🎉',
        content:
            'Wow, how fast time flies!<br>It\'s been <b>one year</b> since the LSS Manager V.4 went online! A lot has happened this year, of course, and so on this special occasion we would like to say a special thank you to you, the users. The joy with which you test our new features inspires us again and again and gives us new motivation to continue. Also, a big thank you goes out to our translators who volunteer their time to make the LSSM usable in other versions of the game.</br>To celebrate, we\'d like to share a few facts and figures here:<ul><li><code>February 10th 2020</code>: The First Commit on GitHub was made: <a href="https://github.com/LSS-Manager/LSSM-V.4/commit/6e95836" target="_blank">6e95836</a>. Since then we have made over 5,600 commits!</li><li><code>September 19th, 2020</code>: V.4 was officially announced for the first time on the forum: <a href="https://forum.leitstellenspiel.de/index.php?thread/19176-lss-manager-v-4/" target="_blank">LSS Manager V.4</a>. With this, the application phase for beta testers has also started</li><li><code>October 17th 2020</code>: Beta testers have been given access to V.4 for the first time. The 4-week beta phase has thus started</li><li><code>November 21st 2020</code>: LSS Manager V.4 goes online for everyone!</li><li>Our telemetry currently records around 5,000 users in the past 6 months. Of these, over 2,200 were active in the last 14 days. The dark figure (number of users who have deactivated telemetry) can not be estimated.</li><li>Our thread in the forum has now reached almost 1,200 messages. That\'s quite a bit, but the V.3 thread, which is currently scratching the 3,500 responses, is far from catching up.</li><li>For more stats, check out our thread in the forum:<a href="https://forum.leitstellenspiel.de/index.php?thread/19176-lss-manager-v-4/" target="_blank">LSS Manager V.4</a></li></ul><br>We\'re looking forward to many more great moments in the time of LSSM V.4!<br>Your LSSM Team<br>Jan, Sanni & Ron',
    },
    globalSettings: {
        name: 'Ustawienia główne',
        labelInMenu: {
            title: 'Etykieta zamiast ikony w menu',
            description:
                'Wyświetla prostą etykietę na pasku nawigacji zamiast logo LSSM',
        },
        allowTelemetry: {
            description:
                'Kontroluje, czy LSS-Manager może wysyłać dane, które pomagają nam w rozwijaniu tego rozszerzenia.',
            title: 'Zezwól na telemetrię',
        },
        iconBg: {
            description: 'Zmień tło likony LSSM!',
            title: 'Tło likony LSSM',
        },
        iconBgAsNavBg: {
            description:
                'Pokoloruj cały pasek nawigacyjny w kolorze tła ikony LSSM!',
            title: 'Pokoloruj pasek nawigacyjny',
        },
        loadingIndicator: {
            description:
                'Jeśli to ustawienie jest aktywne, LSSM wyświetla małe kółko ładowania w prawym dolnym rogu, gdy ładuje własne pliki.',
            title: 'Pokaż postęp ładowania',
        },
        osmDarkTooltip: {
            description:
                'To ustawienie przyciemnia podpowiedzi na mapie, jeśli włączyłeś tryb ciemny.',
            title: 'Ciemne podpowiedzi na mapie',
        },
        osmDarkControls: {
            description:
                'To ustawienie przyciemnia przyciski na mapie, jeśli włączyłeś tryb ciemny.',
            title: 'Ciemne przyciski na mapie',
        },
        v3MenuAsSubmenu: {
            title: 'V3 Menu jako podmenu',
            description:
                'Przenosi menu LSSM V3 do menu V4, aby zaoszczędzić trochę miejsca na pasku nawigacyjnym.',
        },
    },
    vehicles: {
        0: {
            caption: 'Ciężki samochód gaśniczy',
            color: '#990000',
            coins: 25,
            credits: 7500,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 5000,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        1: {
            caption: 'Średni samochód gaśniczy',
            color: '#990000',
            coins: 25,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 2500,
            ftank: 250,
            possibleBuildings: [0, 18],
        },
        2: {
            caption: 'SD',
            color: '#990000',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 3 remiz',
        },
        3: {
            caption: 'SLOp',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 6 remiz',
        },
        4: {
            caption: 'SRt',
            color: '#990000',
            coins: 25,
            credits: 12_180,
            minPersonnel: 3,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 4 remiz',
        },
        5: {
            caption: 'Ambulans P',
            color: '#FFFFCC',
            coins: 25,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [2, 20],
        },
        6: {
            caption: 'SCCn',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 25_000,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 7 remiz',
        },
        7: {
            caption: 'Srchem',
            color: '#990000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            schooling: 'Szkoła Pożarnicza',
            shownSchooling:
                'Wymaga specjalnej edukacji (Ratownictwo chemiczne)',
            special: 'Wymagane po zbudowaniu 11 remiz',
        },
        8: {
            caption: 'Radiowóz OPI',
            color: '#93B7FF',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
        },
        9: {
            caption: 'Śmigłowiec LPR',
            color: '#FFFFCC',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            possibleBuildings: [5],
        },
        10: {
            caption: 'Spgaz',
            color: '#990000',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 5 remiz',
        },
        11: {
            caption: 'SDł',
            color: '#990000',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            schooling: 'Szkoła Pożarnicza',
            shownSchooling:
                'Wymaga specjalnej edukacji (Szkolenie w dowodzeniu)',
            special: 'Wymagane po zbudowaniu 13 remiz',
        },
        12: {
            caption: 'GBARt',
            color: '#990000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 3000,
            ftank: 250,
            possibleBuildings: [0, 18],
            special: 'Potrzebujesz przynajmniej stopnia: Kapitan',
        },
        13: {
            caption: 'SH',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
        },
        14: {
            caption: 'Helikopter Policyjny',
            color: '#93B7FF',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [13],
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (Lotnictwo policyjne)',
        },
        15: {
            caption: 'Opancerzony Pojazd SPKP',
            color: '#93B7FF',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            possibleBuildings: [6, 19],
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (SPKP)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
        },
        16: {
            caption: 'Jednostka K-9',
            color: '#93B7FF',
            coins: 25,
            credits: 7000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (K-9)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
        },
        17: {
            caption: 'Motocykl Policyjny',
            color: '#93B7FF',
            coins: 18,
            credits: 2500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [6, 18],
            schooling: 'Akademia Policyjna',
            shownSchooling:
                'Wymaga specjalnej edukacji (Funkcjonariusz na motocyklu)',
        },
        18: {
            caption: 'SUV SPKP',
            color: '#93B7FF',
            coins: 23,
            credits: 7000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (SPKP)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
        },
        19: {
            caption: 'S.WOPR',
            color: '#F9D74A',
            coins: 25,
            credits: 8500,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [15],
            schooling:
                'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling:
                'Wymaga specjalnej edukacji (Szybkie ratownictwo wodne)',
        },
        20: {
            caption: 'Quad',
            color: '#F9D74A',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [15],
            schooling:
                'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling:
                'Wymaga specjalnej edukacji (Szybkie ratownictwo wodne)',
        },
        21: {
            caption: 'L.Ratownicza',
            color: '#F9D74A',
            coins: 12,
            credits: 12_600,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [15],
            special:
                'Potrzebna laweta (S.WOPR, Samochód SLRw, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
        22: {
            caption: 'Ponton',
            color: '#F9D74A',
            coins: 12,
            credits: 9000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [15],
            special:
                'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
        23: {
            caption: 'Skuter',
            color: '#F9D74A',
            coins: 12,
            credits: 7500,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [15],
            special:
                'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
        24: {
            caption: 'Samochód SLRw',
            color: '#F9D74A',
            coins: 25,
            credits: 10_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [15],
            schooling:
                'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Kurs Nurka MSWiA)',
        },
        25: {
            caption: 'SCDź',
            color: '#990000',
            coins: 25,
            credits: 14_500,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
        },
        26: {
            caption: 'Łódź SP',
            color: '#F9D74A',
            coins: 12,
            credits: 6000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [15],
            special:
                'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
        27: {
            caption: 'SRWys',
            color: '#990000',
            coins: 25,
            credits: 7200,
            minPersonnel: 3,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            schooling: 'Szkoła Pożarnicza',
            shownSchooling:
                'Wymaga specjalnej edukacji (Ratownictwo Wysokościowe)',
            special: 'Wymagane po zbudowaniu 12 remiz',
        },
        28: {
            caption: 'SLRr',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Wymagane po zbudowaniu 6 remiz',
        },
        29: {
            caption: 'Lekki samochód gaśniczy',
            color: '#990000',
            coins: 25,
            credits: 2500,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 1000,
            ftank: 100,
            possibleBuildings: [0, 18],
        },
        30: {
            caption: 'Radiowóz WRD',
            color: '#93B7FF',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (Szkolenie WRD)',
        },
        31: {
            caption: 'Ambulans S',
            color: '#FFFFCC',
            coins: 25,
            credits: 20_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling: 'Ratownictwo - Lekarz',
            shownSchooling: 'Lekarz',
            possibleBuildings: [2, 20],
        },
        32: {
            caption: 'Samochód Lekarza',
            color: '#FFFFCC',
            coins: 20,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Ratownictwo - Lekarz',
            shownSchooling: 'Lekarz',
            possibleBuildings: [2, 20],
        },
        33: {
            caption: 'Motoambulans',
            color: '#FFFFCC',
            coins: 20,
            credits: 6000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Ratownictwo - Motoambulans',
            shownSchooling: 'Motoambulans',
            possibleBuildings: [2, 20],
        },
        34: {
            caption: 'Ambulans T',
            color: '#FFFFCC',
            coins: 12,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [2, 20],
        },
        35: {
            caption: 'SLRmed',
            color: '#FFFFCC',
            coins: 20,
            credits: 4000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
        },
        36: {
            caption: 'SCKn',
            color: '#990000',
            coins: 15,
            credits: 50_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0],
        },
        37: {
            caption: 'SCRd',
            color: '#990000',
            coins: 25,
            credits: 40_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
        },
        38: {
            caption: 'GCBARt',
            color: '#990000',
            coins: 25,
            credits: 27_000,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 6500,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        39: {
            caption: 'GLBARt',
            color: '#990000',
            coins: 25,
            credits: 14_500,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 1500,
            ftank: 100,
            possibleBuildings: [0, 18],
        },
        40: {
            caption: 'Kontener inżynieryjno - techniczny',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        41: {
            caption: 'Kontener dekontaminacyjny',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        42: {
            caption: 'Kontener z AODO',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        43: {
            caption: 'Kontener dowodzeniowy',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        44: {
            caption: 'Kontener do przewozu środków gaśniczych',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            ftank: 800,
            possibleBuildings: [0],
        },
        45: {
            caption: 'Kontener socjalno - sanitarny',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        46: {
            caption: 'Kontener powodziowo - pompowy',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
        47: {
            caption: 'Kontener - cysterna',
            color: '#990000',
            coins: 8,
            credits: 5000,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 15_000,
            possibleBuildings: [0],
        },
        48: {
            caption: 'Przyczepa pompowa',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        49: {
            caption: 'Przyczepa chemiczno - ekologiczna',
            color: '#990000',
            coins: 8,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        50: {
            caption: 'Przyczepa dekontaminacyjna',
            color: '#990000',
            coins: 8,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        51: {
            caption: 'Przyczepa przeciwpowodziowa',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        52: {
            caption: 'Przyczepa ze sprzętem AODO',
            color: '#990000',
            coins: 8,
            credits: 8000,
            minPersonnel: 0,
            maxPersonnel: 0,

            possibleBuildings: [0, 18],
        },
        53: {
            caption: 'Przyczepa ze sprzętem medycznym',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        54: {
            caption: 'Przyczepa z łódką strażacką',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        55: {
            caption: 'GCBAPr',
            color: '#990000',
            coins: 15,
            credits: 45_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 6000,
            ftank: 1500,
            possibleBuildings: [0],
        },
        56: {
            caption: 'GBAPr',
            color: '#990000',
            coins: 15,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 2500,
            ftank: 750,
            possibleBuildings: [0],
        },
        57: {
            caption: 'GCPr',
            color: '#990000',
            coins: 10,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            ftank: 6000,
            possibleBuildings: [0],
        },
        58: {
            caption: 'GPr',
            color: '#990000',
            coins: 10,
            credits: 25_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            ftank: 3000,
            possibleBuildings: [0],
        },
        59: {
            caption: 'GLPr',
            color: '#990000',
            coins: 10,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            ftank: 750,
            possibleBuildings: [0],
        },
        60: {
            caption: 'Przyczepa ze środkiem pianotwórczym',
            color: '#990000',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            ftank: 450,
            possibleBuildings: [0, 18],
        },
        61: {
            caption: 'SW',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        62: {
            caption: 'Przyczepa wężowa',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        63: {
            caption: 'Przyczepa wielofunkcyjna',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0, 18],
        },
        64: {
            caption: 'Kontener wężowy',
            color: '#990000',
            coins: 8,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [0],
        },
    },
    buildingCategories: {
        ['Straż pożarna']: {
            buildings: [0, 1, 18],
            color: '#990000',
        },
        'Pogotowie ratunkowe': {
            buildings: [2, 3, 5, 20],
            color: '#FFFFCC',
        },
        'Policja': {
            buildings: [6, 8, 13, 19],
            color: '#93B7FF',
        },
        'WOPR': {
            buildings: [3, 15],
            color: '#F9D74A',
        },
        'Inne': {
            buildings: [7, 4, 14, 21, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire engines': [0, 1, 16],
                'Water Carrier': [6],
                'Aerial Trucks': [2, 17],
                'Special Vehicles': [3, 4, 7, 14, 15, 18, 23],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 31, 32, 33, 34],
                'HEMS': [9],
                'First Responder': [10, 19, 21, 22],
                'Other EMS Vehicle': [20],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'ARP': [13],
                'Police helicopter': [11],
                'DSU': [12],
                'Traffic Cars': [24, 25],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 15, 18, 19, 20],
    cellBuildings: [6, 19],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
        '19_1',
        '19_2',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        ['Posterunek straży pożarnej']: [
            {
                caption: 'Ratownictwo chemiczne',
                duration: '3 Dni',
            },
            {
                caption: 'Szkolenie w dowodzeniu',
                duration: '5 Dni',
            },
            {
                caption: 'Szkolenie SP LSP',
                duration: '3 Dni',
            },
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
            },
            {
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
            },
            {
                caption: 'Nawigacja oceaniczna',
                duration: '5 Dni',
            },
            {
                caption: 'Ratownictwo wysokościowe',
                duration: '5 Dni',
            },
        ],
        Policja: [
            {
                caption: 'Lotnictwo policyjne',
                duration: '7 Dni',
            },
            {
                caption: 'SPKP',
                duration: '5 Dni',
            },
            {
                caption: 'K-9',
                duration: '5 Dni',
            },
            {
                caption: 'Motocykl Policyjny',
                duration: '3 Dni',
            },
            {
                caption: 'Szkolenie WRD',
                duration: '3 Dni',
            },
        ],
        Ratownictwo: [
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
            },
            {
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
            },
            {
                caption: 'Lekarz',
                duration: '3 Dni',
            },
            {
                caption: 'Motoambulans',
                duration: '2 Dni',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Kredyty',
    coins: 'Monety',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'clinic-medical',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'helicopter',
        'building',
        '',
        'ship',
        'ship',
        'fire',
        'stethoscope',
        'shield-alt',
        'clinic-medical',
        'plane',
        'shield-alt',
    ],
    pois: [
        'Park',
        'Jezioro',
        'Szpital',
        'Las',
        'Przystanek autobusowy',
        'Przystanek tramwajowy',
        'Dworzec kolejowy (ruch podmiejski)',
        'Dworzec kolejowy (ruch podmiejski i dalekobieżny)',
        'Stacja towarowa',
        'Supermarket (mały)',
        'Supermarket (duży)',
        'Stacja paliw',
        'Szkoła',
        'Muzeum',
        'Centrum handlowe',
        'Warsztat samochodowy',
        'Zjazd z autostrady',
        'Jarmark Bożonarodzeniowy',
        'Dyskoteka',
        'Stadion',
        'Gospodarstwo rolne',
        'Biurowiec',
        'Basen',
        'Przejazd kolejowy',
        'Teatr',
        'Teren wystawowy',
        'Rzeka',
        'Mały port lotniczy (pas startowy)',
        'Duży port lotniczy (pas startowy)',
        'Terminal portu lotniczego',
        'Bank',
        'Magazyn',
        'Most',
        'Bar szybkiej obsługi',
        'Cargo-port',
        'Centrum segregacji odpadów',
        'Wieżowiec',
        'Dok dla wycieczkowców',
        'Marina',
        'Przejazd kolejowo-drogowy',
        'Tunel',
        'Chłodnia składowa',
        'Elektrownia',
        'Fabryka',
        'Składowisko złomu',
        'Stacja metra',
        'Mały zbiornik na substancje chemiczne',
        'Duży zbiornik na substancje chemiczne',
        'Hotel',
        'Bar',
        'Składowisko odpadów',
        'Parking',
        'Silos',
        'Centrum Miasta',
    ],
    only_alliance_missions: [57, 74, 351],
    transfer_missions: [373],
    ranks: {
        missionchief: {
            0: 'Nowy',
            200: 'Strażak',
            10_000: 'Starszy strażak',
            100_000: 'Ogniomistrz',
            1_000_000: 'Aspirant',
            5_000_000: 'Kapitan',
            20_000_000: 'Starszy kapitan',
            50_000_000: 'Szef brygady',
            1_000_000_000: 'Nadbrygadier',
            2_000_000_000: 'Zastępca komendanta głównego',
            5_000_000_000: 'Komendant główny',
        },
    },
};
