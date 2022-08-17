Der Einsatzhelfer zeigt dir ganz persönlich anpassbar zu jedem Einsatz die benötigten Einsatzmittel und vieles Weitere an.

## Einsatzname

Zeigt den Einsatznamen, z.B. "Mülleimerbrand" als Titel an.

Folgende beiden Einstelllungen sind nur mit dem `Einsatzname` kombiniert möglich:
### Einsatz ID
Zeigt die ID des Einsatzes neben dem Titel an, die ganz individuelle Kennung dieses einen Einsatzes.
### Typ Nummer
Zeigt die ID des Einsatzes neben dem Titel an. Sie zeigt an was für ein Einsatz das ist. Z.B.: Gartenlaubenbrand= `6`

## POI

**P**oint **o**f **i**nterest zeigt dem Spiel einen wichtigen Punkt an, da es die Karte selber nicht deuten kann. Solche Punkte sind wichtig für Einsätze
die nicht überall auftreten sollen. So braucht der Einsatz `Personalienaufnahme von Schwarzfahrer` zum Beispiel einen der POI *Bushaltestelle*, *Straßenbahnhaltestelle*,
*Bahnhof (Regionalverkehr)* oder *Bahnhof (Regional und Fernverkehr)* um aufzutreten.
Diese Einstellung zeigt euch den erforderlichen POI für diesen Einsatz an, sollte er einen benötigen.

## Vorraussetzungen

Damit Spieler nur solche Einsätze erhalten, die sie auch bewerkstelligen können, haben alle Einsätze eine Mindestvorraussetzung an Wachen. Verfügt man nicht über
diese, tritt der Einsatz auch nicht auf. 
Diese Mindestvorraussetzungen werden hiermit angezeigt

## Fahrzeuge (Titel)

Zeigt die Überschrift "Fahrzeuge" über den Fahrzeuganforderungen an.

## Fahrzeuganforderungen

Wohl wichtigste Einstellung des `Einsatzhelfer`. Hiermit werden dir alle Fahrzeuge angezeigt, die es benötigt diesen Einsatz abzuarbeiten.

### Sortierung der Fahrzeuganforderungen

So kann man auswählen, in welcher Reihenfolge die angeforderten Fahrzeuge aufgelistet werden. Zur Auswahl stehen:
 * Name der Anforderung (alphabetisch)
 * Anzahl der benötigten Fahrzeuge
 * Wahrscheinlichkeit

Mit `Fahrzeuge absteigend sortieren` kann man diese Auswahl invertieren, also umdrehen.

## LNA & OrgL extra erwähnen

Sind aktuell mehr als 5 bzw. 10 Patienten am Einsatzort, werden LNA & OrgL automatisch am Anfang der Fahrzeuganforderungen gelistet.

## x nach Anzahl 

Packt ein x hinter die Anzahl wie oft das Fahrzeug benötigt wird.

## Wahrscheinlichkeiten anzeigen

Zeigt, mit welcher Wahrscheinlichkeit ein Fahrzeug angefordert werden kann.

### 100% Wahrscheinlichkeit explizit erwähnen

Zeigt auch Wahrscheinlichkeiten von 100% an.

## Zweifach genutzte Fahrzeuge

### Rüstwagen einfach werten 

Zieht die Zahl der benötigten LF von den RW ab und blendet RW aus, falls die Anzahl unter 0 sinkt. Diese Funktion ist für Leute gedacht,
die ein reines HLF-System fahren.

### ELW 1 einfach werten

Zieht die Zahl der benötigten ELW 2 von den ELW 1 ab und blendet ELW 1 aus, falls die Anzahl unter 0 sinkt.

#### ELW 1 ausblenden ***🏗️Noch in Entwicklung🏗️***

Blendet ELW 1 komplett aus und zeigt nur ELW 2 an.

### FuStW einfach werten

Zieht die Zahl der benötigten FuStW von den FuStW (DGL) ab und blendet FuStW aus, falls die Anzahl unter 0 sinkt.

### DLK einfach werten

Zieht die Zahl der benötigten TM 50 von den DLK ab und blendet DLK aus, falls die Anzahl unter 0 sinkt.

### RW / GKW statt LF anzeigen   

Zeigt an, wenn statt eines LF auch Rüstwagen oder GKW am Einsatzort möglich sind.

### Anzeigen, wenn FLF als LF erlaubt sind

Zeigt an, wenn statt eines LF auch FLF am Einsatzort möglich sind.

## KTW statt RTW

Zeigt ob ein KTW anstatt eines RTWs genutzt werden kann.

## Patienten (Titel)

Zeigt die Überschrift "Patienten" über den Details über mögliche Patienten an.

### Details zu möglichen Patienten

Zeigt weitere Details zu den Patienten an:
 * Min/Max Anzahl
 * Transportwahrscheinlichkeit (%)
 * Benötigte Fachrichtung des KH
 * Wahrscheinlichkeit für einen Notarzt (%)
 
 ### Patienten-Details nur bei Bedarf anzeigen   
 
 Blendet die Patienten-Details aus, wenn keine Patienten mehr vorhanden sind und Patienten nicht erst am Ende des Einsatzes auftreten.
 
 ### Zahl der aktuellen Patienten
 
 Zeigt oben im Einsatzhelfer an, wie viele Patienten der Einsatz gerade hat.
 
 ### First Responder Wahrscheinlichkeit 
 
 Zeigt mit wieviel % ein beliebiges Fahrzeug zum behandeln ausreicht.
 
 ## Gefangene (Titel)
 
 Zeigt die Überschrift "Gefangene" über den Details über mögliche Gefangene an. 
  
 ### Details zu möglichen Gefangenen
 
 Zeigt Details über mögliche Gefangene an, wie die maximale Anzahl.
 
 ### Zahl der aktuellen Gefangenen 
 
 Zeigt oben im Einsatzhelfer an, wie viele Gefangenen der Einsatz gerade hat. 
 
 ## Besondere Anforderungen
 
 Lege hier fest, welche besonderen Anforderungen angezeigt werden sollen, falls vorhanden.
  * Feuerwehrleute Ø mind. benötigt
  * Polizisten Ø mind. benötigt
  * Min. Pumpenleistung
  * Pumpeneinsatz
  * Wasser abzupumpen (in Litern)
  * Wasserbedarf
 
 ## Generiert von (Gebäudetyp) 
 
 Zeigt an, von welchem Gebäudetyp dieser Einsatz generiert werden kann. 
 
 ## Credits
 
 Gibt an, wie viele Credits Verdienst man durchschnittlich für den Einsatz erhält.
 
 ## Zusätzliche Auflistungen von
  * Ausbreitungen
  * Anschlusseinsätze
  * Folgeeinsätze
  
 ## Tooltips
 
 Tooltips für die Buttons wie:
  * Maximale Anforderungen (de-)aktivieren
  * Overlay
  * Reload
  * Ein/Ausklappen 
  
 ## Optionale Diensthunde
  
 Zeigt an, wenn der DHuFüKW nur gefordert wird, wenn vorhanden.
  
 ## Optionale Außenlastbehälter
  
 Zeigt an, wenn der Außenlastbehälter nur gefordert wird, wenn vorhanden.
  
 ## Anzeige ob FuStW ersetzt werden können ***🏗️Noch in Entwicklung🏗️***
  
 Zeigt an, wieviele Zivilstreifenwagen, Funkstreifenwagen ersetzen können 
