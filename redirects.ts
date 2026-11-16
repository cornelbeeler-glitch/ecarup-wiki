/**
 * Weiterleitungen innerhalb des Wikis.
 *
 * Zieht eine Seite an eine andere Adresse um, gehört ihre alte Adresse hier
 * hinein — sonst laufen Links aus Mails, Angeboten und Suchmaschinen ins
 * Leere. Der `slug` einer Seite ist ihre Adresse und sollte sich deshalb
 * möglichst nie ändern; wenn doch, dann mit einem Eintrag hier.
 *
 *     {from: '/alte/adresse', to: '/neue/adresse'},
 *
 * `from` nimmt auch eine Liste, wenn mehrere alte Adressen auf dieselbe neue
 * Seite zeigen sollen.
 *
 * Eingehängt ist die Liste in `docusaurus.config.ts` über
 * `@docusaurus/plugin-client-redirects`.
 */
export type Redirect = {from: string | string[]; to: string};

export const redirects: Redirect[] = [];
