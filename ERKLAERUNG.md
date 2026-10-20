# Sector Seven: Erklärung füer den Unterricht

Hinweis: Die sichtbare Website ist auf Englisch. Diese Datei ist eine offene deutsche Lernhilfe und erklaert den Aufbau Abschnitt fuer Abschnitt.

## Was ist dieses Projekt?

Sector Seven ist ein einfacher, statischer Shop-Prototyp fuer ein F1-inspiriertes T-Shirt. Man kann eine Groesse auswaehlen, das Produkt in einen Warenkorb legen, Eintraege entfernen und die Zwischensumme sehen.

Es ist kein echter Online-Shop: Es gibt keinen Server, keine Datenbank, keine echte Bestellung und keine Zahlungsabwicklung. Der Warenkorb wird nur im Arbeitsspeicher der aktuell geoeffneten Seite gespeichert und ist nach dem Neuladen wieder leer.

## Die drei Dateien

- `index.html` enthaelt die Inhalte und die Struktur der Webseite.
- `style.css` bestimmt Farben, Abstaende, Schriften und die Darstellung auf kleinen Bildschirmen.
- `script.js` enthaelt die Warenkorb-Funktionen.

Diese Aufteilung trennt Inhalt, Aussehen und Verhalten. Das ist ein uebliches Grundprinzip bei Webseiten.

## 1. HTML: Inhalt und Struktur

HTML besteht aus Elementen, die mit Tags geschrieben werden. Zum Beispiel bedeutet `<h1>Shop</h1>` eine grosse Hauptueberschrift. Ein schliessender Tag sieht meistens so aus: `</h1>`.

### Kopfbereich

`<header>` enthaelt den Markennamen und die Navigation. Die Links wie `href="#products"` springen zu einem Element mit `id="products"`.

### Hauptinhalt

`<main>` umfasst den wichtigsten Inhalt. Darin gibt es drei Bereiche:

- `#home`: Begruessung und Projektbeschreibung.
- `#products`: Produktbild, Produktname, Beschreibung, Preis und Groessenauswahl.
- `#cart`: Warenkorb, Anzahl und Gesamtpreis.

`<section>` teilt die Seite in thematische Abschnitte. `id` gibt einem Element einen eindeutigen Namen, damit Links und JavaScript es finden koennen.

### Produkt und Groesse

`<article class="product">` gruppiert alles, was zum T-Shirt gehoert. Das Bild steht in einem `<img>`-Element. `src` ist der Dateipfad zum Bild und `alt` ist eine Textbeschreibung, falls das Bild nicht angezeigt wird oder ein Screenreader die Seite vorliest.

Das `<select id="size">`-Element bietet Groessen an. JavaScript liest spaeter den Wert des ausgewaehlten Eintrags.

Der Button ruft mit `onclick="addToCart()"` eine JavaScript-Funktion auf, wenn er angeklickt wird.

### Warenkorb

`<ul id="cart-list">` ist eine leere Liste. JavaScript fuegt dort Warenkorb-Zeilen ein. Die IDs `cart-count` und `cart-total` markieren die Stellen, deren angezeigte Werte sich aendern.

## 2. CSS: Aussehen

CSS-Regeln bestehen meist aus einem Selektor und Eigenschaften:

```css
button {
  background: red;
  color: white;
}
```

`button` ist der Selektor. Er bedeutet: Diese Regel gilt fuer alle HTML-Buttons. `background` stellt die Hintergrundfarbe ein und `color` die Textfarbe.

### Wichtige Selektoren in `style.css`

- `body`: Grundschrift, Hintergrundfarbe und Textfarbe der ganzen Seite.
- `header`, `main`, `footer`: gemeinsame Breite und Ausrichtung der Hauptbereiche.
- `.product`: Darstellung des Produktbereichs. Der Punkt bedeutet, dass nach einem Klassennamen gesucht wird.
- `#cart-list`: Darstellung fuer das Element mit der eindeutigen ID `cart-list`. Das Rautenzeichen steht fuer eine ID.
- `button:hover`: Stil, solange der Mauszeiger ueber einem Button steht.
- `@media (max-width: 600px)`: Regeln, die auf schmalen Bildschirmen wie Smartphones gelten.

### CSS-Eigenschaften, die hier vorkommen

- `margin`: Abstand ausserhalb eines Elements.
- `padding`: Abstand zwischen Inhalt und Rand.
- `color` und `background`: Text- und Hintergrundfarbe.
- `display: flex`: Elemente nebeneinander oder in einer Reihe anordnen.
- `width`: Breite.
- `border-radius`: abgerundete Ecken.

Die Datei verwendet Farbvariablen am Anfang, zum Beispiel `--red`. Dadurch kann dieselbe Farbe an mehreren Stellen verwendet werden. Wenn die Farbe geaendert wird, muss sie nur an einer Stelle angepasst werden.

## 3. JavaScript: Warenkorb-Verhalten

JavaScript veraendert die Webseite waehrend sie benutzt wird. Die Syntax hat einige Aehnlichkeiten zu Java, aber JavaScript und Java sind verschiedene Programmiersprachen.

### Produktdaten und Warenkorb

Am Anfang von `script.js` stehen `productName` und `productPrice`. Das sind Variablen fuer den Namen und Preis des Beispielprodukts.

`const cart = []` erstellt ein leeres Array. Ein Array ist eine geordnete Liste. Im Warenkorb speichert jeder Eintrag ein Objekt mit Name, Groesse, Preis und Anzahl. Die Liste existiert nur solange die Seite geoeffnet ist.

### `addToCart()`

1. `getElementById("size")` findet die Groessenauswahl im HTML.
2. `.value` liest die ausgewaehlte Groesse.
3. Die `for`-Schleife schaut die bisherigen Warenkorb-Eintraege der Reihe nach an.
4. Wenn dieselbe Groesse gefunden wird, erhoeht sich die Anzahl.
5. Wenn sie noch nicht vorhanden ist, fuegt `cart.push(...)` ein neues Objekt zur Liste hinzu.
6. `renderCart()` aktualisiert die sichtbare Warenkorb-Liste.

### `removeFromCart(itemIndex)`

`splice(itemIndex, 1)` entfernt einen Eintrag aus dem Array. Die `1` bedeutet, dass genau ein Element entfernt werden soll. Danach wird der Warenkorb neu dargestellt.

### `clearCart()`

`cart.length = 0` setzt die Anzahl der Listenelemente auf null und leert damit den Warenkorb. Anschliessend aktualisiert `renderCart()` die Seite.

### `renderCart()`

Diese Funktion baut die sichtbare Warenkorb-Liste neu auf:

1. Sie sucht die drei Ausgabefelder anhand ihrer IDs.
2. Sie setzt die alte Liste mit `textContent = ""` zurueck.
3. Wenn der Warenkorb leer ist, fuegt sie eine Meldung ein.
4. Eine Schleife geht jeden Warenkorb-Eintrag durch.
5. `document.createElement()` erzeugt HTML-Elemente, und `appendChild()` fuegt sie in die Seite ein.
6. Eine weitere Variable summiert die Preise; eine andere zaehlt die Produkte.
7. `toFixed(2)` zeigt Geldbetraege mit zwei Nachkommastellen an.

Der Entfernen-Button merkt sich mit `itemIndex`, welcher Eintrag geloescht werden soll. Sein Klick ruft `removeFromCart()` auf.

### Start beim Laden

`DOMContentLoaded` bedeutet, dass der Browser das HTML fertig eingelesen hat. Dann wird `renderCart()` einmal aufgerufen, damit von Anfang an die Meldung fuer den leeren Warenkorb und der Startpreis angezeigt werden.

## Vergleich mit Java

- `const` und `let` sind Variablen-Deklarationen; ihre Regeln unterscheiden sich etwas von Java.
- `function addToCart()` ist eine Funktion, aehnlich einer Methode.
- `if` und `else` treffen Entscheidungen wie in Java.
- `for` wiederholt Code fuer mehrere Elemente, wie eine Schleife in Java.
- `{ name: productName, price: productPrice }` ist ein Objekt mit Eigenschaften. Das ist nicht genau dasselbe wie eine Java-Klasse, erfuellt hier aber die einfache Aufgabe, zusammengehoerige Daten zu speichern.
- `cart.push(...)` fuegt einen Eintrag zu einer Liste hinzu.

## Was der Prototyp bewusst nicht macht

- Keine echten Zahlungen oder Bestellungen.
- Keine dauerhafte Speicherung. Ein Neuladen leert den Warenkorb.
- Keine Pruefung, ob Produkte wirklich auf Lager sind.
- Keine echten Versandkosten.
- Keine echten Kundendaten oder Datenbank.

Fuer diese Funktionen waere ein Server und eine Datenbank erforderlich. Der Prototyp behauptet daher nicht, ein echter Shop zu sein.

## Kurzvortrag

> Meine Webseite ist ein statischer Shop-Prototyp fuer ein F1-inspiriertes T-Shirt. HTML beschreibt die Bereiche und Eingabeelemente. CSS gestaltet Farben, Abstaende und das Layout. JavaScript liest die ausgewaehlte Groesse, speichert Produkte voruebergehend in einem Array und berechnet daraus die Warenkorb-Anzeige und Zwischensumme. Es gibt keine echte Bestellung oder Zahlung, weil das Projekt kein Backend besitzt.
