import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';
import {redirects} from './redirects';
import llmsTxtPlugin from './plugins/llms-txt';
import schrittkettePlugin from './plugins/schrittkette';

// Solange keine eigene Domain eingetragen ist, läuft die Site unter
// https://ecarup.github.io/ecarup-wiki/. SITE_URL/BASE_URL setzt der
// Deploy-Workflow; kommt eine Custom Domain dazu, ändert man beides dort und
// hier die Vorgaben.
const url = process.env.SITE_URL ?? 'https://ecarup.github.io';
const baseUrl = process.env.BASE_URL ?? '/ecarup-wiki/';

const config: Config = {
  title: 'eCarUp Support',
  tagline: 'Dokumentation und Support für eCarUp',
  // Im Tab ist für die Wortmarke kein Platz – dort steht die Bildmarke
  // allein. Die Kopfzeile zeigt beide zusammen (siehe navbar.logo).
  favicon: 'img/ecarup-icon.png',

  url,
  baseUrl,
  organizationName: 'eCarUp',
  projectName: 'ecarup-wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // Klappt eine verlinkte FAQ-Antwort beim Aufruf auf.
  clientModules: ['./src/clientModules/openAnchorDetails.ts'],

  future: {
    v4: true,
    faster: true,
  },

  i18n: {
    defaultLocale: 'de',
    // Reihenfolge im Sprachmenü: zuerst die Landessprachen der Schweiz,
    // Englisch zuletzt. Die Liste bestimmt nur die Anzeige, nicht die
    // Adressen — jede Sprache behält ihr Kürzel im Pfad.
    locales: ['de', 'fr', 'it', 'en'],
    localeConfigs: {
      de: {label: 'Deutsch', htmlLang: 'de-CH'},
      en: {label: 'English', htmlLang: 'en'},
      fr: {label: 'Français', htmlLang: 'fr-CH'},
      it: {label: 'Italiano', htmlLang: 'it-CH'},
    },
  },

  markdown: {
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Docs-only-Modus: Dokumentation liegt direkt unter /
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Dateinamen wie "1-phasen-zaehler.md" stammen aus den alten URLs.
          // Ohne diese Zeile würde Docusaurus die "1-" als Positionspräfix deuten.
          numberPrefixParser: false,
          // Kein `editUrl`: Ohne ihn erscheint unter den Seiten kein
          // "Diese Seite bearbeiten". Das Wiki wird innerhalb der Organisation
          // gepflegt; ein Bearbeiten-Link lädt Aussenstehende dazu ein, es zu
          // versuchen, und weckt den Eindruck, sie könnten hier mitschreiben.
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [
            // Unveraenderte Design Tokens, danach die Zuordnung auf Docusaurus.
            // Poppins bringt tokens.css selbst mit: die @font-face-Angaben am
            // Dateiende zeigen auf src/css/fonts/ und werden mitgebaut – keine
            // Anfragen an Google Fonts.
            './src/css/tokens.css',
            './src/css/custom.css',
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['de', 'en', 'fr', 'it'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  plugins: [
    // Erzeugt llms.txt und llms-full.txt je Sprache im Build-Ordner.
    llmsTxtPlugin,

    // Sammelt die Schrittkette aus dem Frontmatter für den Wegweiser am
    // Seitenfuss (src/theme/DocItem/Paginator).
    schrittkettePlugin,

    // Weiterleitungen (etwa nach einem Umzug einer Seite) in redirects.ts.
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],

  themeConfig: {
    // Das Bild, das beim Teilen eines Links erscheint: die Wortmarke in Weiss
    // auf surface-deep, wie es die Guidelines auf der Karte „Logo" zeigen.
    image: 'img/ecarup-social-card.png',
    // Kein Dark Mode. Die Guidelines beschreiben ihn nicht, und die
    // semantischen Farbquartette (Hinweise, FAQ-Klappblöcke) sind auf hellen
    // Grund gerechnet: Auf dunklem Grund stand dort weisse Schrift auf
    // hellblauer Fläche. `disableSwitch` nimmt den Schalter aus der Kopfzeile,
    // `respectPrefersColorScheme: false` sorgt dafür, dass auch eine dunkel
    // eingestellte Systemoberfläche nicht umschaltet.
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // Bildmarke und Wortmarke gehören zusammen und werden nicht verändert;
      // der Alt-Text lautet immer „eCarUp". Der Titel daneben ergänzt sie zu
      // „eCarUp Support" – deshalb nur „Support".
      title: 'Support',
      logo: {
        alt: 'eCarUp',
        src: 'img/ecarup-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          type: 'custom-rollenWahl',
          position: 'right',
        },
        {
          type: 'custom-landWahl',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // Kein Link auf das Repository: Die Seite richtet sich an Besucher,
        // nicht an Mitschreibende.
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'eCarUp',
          items: [
            {label: 'ecarup.com', href: 'https://www.ecarup.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eCarUp AG`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
