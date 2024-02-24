// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 1.2 - Accueil et TP1",
      id: "cours/accueil",
    },
    {
      type: "doc",
      label: "2.1 2.2 - Impératif",
      id: "cours/imperatif",
    },
    {
      type: "doc",
      label: "3.1 - Librairies",
      id: "cours/librairies",
    },
    {
      type: "doc",
      label: "4.1 - Structure",
      id: "cours/structure",
    },
    {
      type: "doc",
      label: "4.2 - Intégration",
      id: "cours/integration-1",
      className: "remise-tp1",
    },
    {
      type: "doc",
      label: "5.1 - Formatif",
      id: "cours/formatif-intra",
    },
    {
      type: "doc",
      label: "5.2 - Examen Intra (30%)",
      id: "cours/examen-intra",
      className: "examen",
    },
    {
          type: "doc",
          label: "6.1 - Intro Android",
          id: "cours/intro-android",
        },
    {
      type: "doc",
      label: "7.1 7.2 7.3 7.4 - RecyclerView",
      id: "cours/recycler",
    },
    {
      type: "doc",
      label: "10.1 - Intégration",
      id: "cours/integration-2",
      className: "remise-tp2",
    },
    {
      type: "doc",
      label: "X.X - Menu",
      id: "cours/menu",
    },
    {
      type: "doc",
      label: "11.1 11.2 12.1 - Tiroir",
      id: "cours/tiroir",
    },
    {
      type: "doc",
      label: "12.2 13.1 - Tests",
      id: "cours/tests",
    },
    {
      type: "doc",
      label: "14.1 - Librairies Android",
      id: "cours/librairies-android",
    },
    {
      type: "doc",
      label: "14.2 - Intégration",
      id: "cours/integration-3",
      className: "remise-tp3",
    },
    {
      type: "doc",
      label: "15.1 - Formatif",
      id: "cours/formatif-final",
    },
    {
      type: "doc",
      label: "15.2 - Examen Final (30%)",
      id: "cours/examen-final",
      className: "examen",
    },
  ],
  tp: [
    { type: "doc", label: "TP1 - KotCrawler", id: "tp/tp1" },
    { type: "doc", label: "TP2 - Interface graphique Android", id: "tp/tp2" },
    { type: "doc", label: "TP3 - Appli Android", id: "tp/tp3" },
  ],
};

module.exports = sidebars;
