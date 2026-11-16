import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Die Navigation des eCarUp Wikis.
 *
 * Noch steht hier nur das Gerüst: die beiden Einstiegsseiten und der Kontakt.
 * Die Startseite (`docs/index.md`) fehlt bewusst — sie fragt nur nach dem
 * Land und führt dann auf eine der beiden Einstiegsseiten; ein Eintrag dafür
 * wäre ein Verweis auf eine Frage, die man gerade beantwortet hat. Erreichbar
 * bleibt sie über den Namen oben links. Damit die Navigation auf ihr trotzdem
 * steht, trägt `docs/index.md` ein `displayed_sidebar: wikiSidebar`.
 *
 * Zwei Filter hängen an den Einträgen, beide in `customProps`:
 *
 *   laender: ['ch']      – eine Menge. Ohne Angabe gilt ein Eintrag überall.
 *   rolle: 'verwalter'   – eine Schwelle: die niedrigste Rolle, die ihn sehen
 *                          darf (fahrer < verwalter < abrechnung <
 *                          installateur). Ohne Angabe gehört er dem
 *                          Installateur, der ohnehin alles sieht.
 *
 * Die Rolle vererbt sich nach unten, und ein Oberpunkt erscheint, sobald ein
 * Eintrag darunter für die gewählte Rolle sichtbar ist — die Angabe steht
 * deshalb nur dort, wo sie etwas öffnet. Ausgewertet wird beides in
 * `src/theme/DocSidebarItem`; die Hintergründe stehen in `src/rollen` und
 * `src/laender`.
 *
 * Eine neue Seite trägt man als Zeichenkette ein (`'bereich/seite'`) oder,
 * wenn sie eine Kennzeichnung braucht, als Objekt:
 *
 *     {type: 'doc', id: 'bereich/seite', customProps: {laender: ['ch']}},
 *
 * Ganze Bereiche werden zu Kategorien:
 *
 *     {
 *       type: 'category',
 *       label: 'Ladestationen',
 *       link: {type: 'doc', id: 'ladestationen/index'},
 *       items: ['ladestationen/erste-schritte'],
 *     },
 *
 * Wie das im Einzelnen geht, steht in CONTRIBUTING.md.
 */
const sidebars: SidebarsConfig = {
  wikiSidebar: [
    // Die beiden Einstiegsseiten. Wer „Alle Länder" gewählt hat, sieht beide.
    {type: 'doc', id: 'schweiz', customProps: {laender: ['ch'], rolle: 'fahrer'}},
    {type: 'doc', id: 'deutschland', customProps: {laender: ['de'], rolle: 'fahrer'}},

    // Hier kommen die Inhaltsbereiche hin.

    {type: 'doc', id: 'kontakt-schweiz', customProps: {laender: ['ch'], rolle: 'fahrer'}},
    {type: 'doc', id: 'kontakt-deutschland', customProps: {laender: ['de'], rolle: 'fahrer'}},
  ],
};

export default sidebars;
