# eCarUp Support-Wiki

Das Support-Wiki von eCarUp als [Docusaurus](https://docusaurus.io/)-Site.
Es dient zugleich als Datenquelle für AI-Tools (Markdown im Repo + `llms.txt`).

Das Repo ist eine Kopie des smart-me Wikis: dieselbe Technik, derselbe
Arbeitsablauf, aber **noch ohne Inhalt** — es stehen nur die beiden
Einstiegsseiten und zwei Kontaktseiten darin.

## Sprachen

Deutsch ist die **Master-Sprache**. Alle Inhalte werden ausschliesslich unter
`docs/` auf Deutsch gepflegt. Englisch, Französisch und Italienisch entstehen
automatisch über die Übersetzungs-Pipeline (`npm run translate`).

> Die Ordner unter `i18n/` werden **nie von Hand bearbeitet** – siehe
> [CONTRIBUTING.md](./CONTRIBUTING.md).

## Loslegen

```bash
npm ci
npm start          # Vorschau auf http://localhost:3000
npm run build      # baut alle vier Sprachen, bricht bei defekten Links ab
```

Eine neue Seite legst du am bequemsten mit `npm run neue-seite` an; die
Vorlage dafür steht in `vorlagen/seite.md`.

## Was drin ist

| | |
| --- | --- |
| `docs/` | die Inhalte, auf Deutsch |
| `sidebars.ts` | die Navigation, dazu die Länder- und Rollenfilter |
| `src/components/` | die eigenen Bausteine: Kacheln, Ablauf, Menüweg, Embed, Video, Knopf, Unterseiten, NurFuer |
| `src/laender/`, `src/rollen/` | Länderwahl (Schweiz/Deutschland) und Rollenwahl (Installateur, Abrechnungsdienstleister, Verwalter, Fahrer) |
| `src/theme/` | die Stellen, an denen Docusaurus angepasst ist |
| `plugins/` | `llms-txt` (llms.txt für AI-Tools) und `schrittkette` (Wegweiser am Seitenfuss) |
| `scripts/` | Übersetzung, Prüfung, Ankerreparatur, Bildvarianten |
| `.github/workflows/` | Veröffentlichen auf GitHub Pages, automatische Übersetzung |

## Die beiden Workflows

Der Ordner `workflows-vorlage/` enthält `deploy.yml` und `translate.yml`.
**Verschiebe sie von Hand nach `.github/workflows/`** und lösche den Ordner —
Dateien unter `.github/` lassen sich nicht aus einer Cowork-Sitzung heraus
schreiben, deshalb liegen sie vorerst daneben.

## Noch zu erledigen

- [ ] **Logo**: `static/img/ecarup-logo.png` ablegen und in `docusaurus.config.ts`
      als `favicon` und `navbar.logo` eintragen. Solange steht der Name als Text.
- [ ] **Adresse**: Der Deploy-Workflow veröffentlicht nach
      `https://ecarup.github.io/ecarup-wiki/`. Kommt eine eigene Domain dazu,
      `SITE_URL`/`BASE_URL` in `.github/workflows/deploy.yml` und die Vorgaben
      in `docusaurus.config.ts` ändern.
- [ ] **Repository**: `organizationName`/`projectName` in der Konfiguration
      zeigen auf `ecarup/ecarup-wiki` — anpassen, falls es anders heisst.
- [ ] **Secret** `CLAUDE_CODE_OAUTH_TOKEN` für den Übersetzungs-Workflow
      hinterlegen (siehe CONTRIBUTING.md).
- [ ] **Farben und Schrift**: `src/css/tokens.css` und `src/css/custom.css`
      tragen noch das smart-me Branding (Blau `#28599A`, Noto Sans). Die
      eCarUp-Farben dort eintragen.
- [ ] **Glossar** `glossary.md` mit den eCarUp-Begriffen füllen.
- [ ] **Kontaktseiten** mit echten Ansprechpartnern füllen.
