export const COMPANY = {
  name: "Zeon Aqua AS",
  phone: "+47 481 28 453",
  phoneClean: "+4748128453",
  email: "post@zeonaqua.is",
  orgNr: "934 626 125",
  address: "Finkavikhaugen 47",
  postalCode: "9105 Kvaløya",
  location: "Kvaløya, Troms",
  established: "2024",
  description: "Zeon Aqua AS er et servicebåtrederi som tilbyr spesialiserte tjenester til havbruksnæringen og kystnær industri.",
  socials: {
    facebook: "https://www.facebook.com/zeonaqua.as",
    linkedin: "https://www.linkedin.com/company/zeon-aqua/posts/?feedView=all",
  },
};

export const VESSEL = {
  name: "MS Akva Fighter",
  specs: [
    {
      label: "Lengde",
      value: "15 m",
      context: "Stabil plattform, kommer til i trange anlegg",
    },
    {
      label: "Bredde",
      value: "6 m",
      context: "God arbeidsflate på dekk",
    },
    {
      label: "Kran",
      value: "12 t/m",
      context: "Løfter mort, fôrflåter, mindre arbeidsbåter",
    },
    {
      label: "Dekksplass",
      value: "40 m²",
      context: "Plass til utstyr, materialer, ROV-container",
    },
    {
      label: "Hastighet",
      value: "20 kn",
      context: "Rask mobilisering mellom lokaliteter",
    },
    {
      label: "Dypgang",
      value: "2,5 m",
      context: "Kan operere i grunne områder",
    },
  ],
  equipment: [
    "Palfinger-kran, 12 t/m",
    "Hydraulisk vinsj",
    "A-ramme",
    "Arbeidslys for nattoperasjoner",
    "VHF og AIS",
    "Dekk tilrettelagt for kontainerlast",
  ],
};

export const USE_CASES = [
  {
    id: "fortoyning",
    title: "Fortøyningsarbeid",
    description: "Inspeksjon, utskifting og nyinstallasjon av fortøyninger",
    passerNar: "Nye fortøyninger skal settes, eksisterende skal inspiseres eller skiftes",
    eksempel: "Utskifting av bunnkjetting på merd – krankapasitet og dekksplass for kjetting og lodd",
  },
  {
    id: "frakt",
    title: "Frakt og logistikk",
    description: "Rask levering av utstyr og materialer til anlegg",
    passerNar: "Utstyr eller materialer skal raskt ut til anlegg",
    eksempel: "Levering av nødgenerator under strømbrudd – hastighet og lastekapasitet avgjør",
  },
  {
    id: "rov",
    title: "Dykker- og ROV-støtte",
    description: "Stabil plattform for undervannsoperasjoner",
    passerNar: "Inspeksjon, notarbeid eller reparasjon under vann",
    eksempel: "ROV-inspeksjon av bunnring før avlusning – stabil plattform, plass til container",
  },
  {
    id: "not",
    title: "Notservice",
    description: "Støtte ved notskift, inspeksjon og reparasjon",
    passerNar: "Not skal løftes, skiftes, eller inspiseres",
    eksempel: "Støtte under notskift vår/høst – kran og mannskap som kan jobben",
  },
];

export const METADATA = {
  home: {
    title: "Zeon Aqua – Servicebåt for havbruk i Nord-Norge",
    description: "MS Akva Fighter leverer fortøyning, frakt og ROV-støtte i Troms og Nordland. Ring oss direkte.",
  },
  vessel: {
    title: "MS Akva Fighter – Servicebåt | Zeon Aqua",
    description: "15m arbeidsbåt med 12-tonns kran og 40m² dekk. Spesialisert på havbruksservice i Nord-Norge.",
  },
  contact: {
    title: "Kontakt Zeon Aqua – Ring +47 XXX XX XXX",
    description: "Trenger du servicebåt? Vi svarer innen 2 timer. Ring eller send forespørsel.",
  },
  about: {
    title: "Om Zeon Aqua AS – Servicebåtrederi i Nord-Norge",
    description: "Servicebåtrederi basert i [STED]. Leverer båt og mannskap til havbruksnæringen.",
  },
};

export const NAV_LINKS = [
  { href: "/akva-fighter", label: "MS Akva Fighter" },
  { href: "/om-oss", label: "Om oss" },
];
