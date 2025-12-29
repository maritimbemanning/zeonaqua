export const COMPANY = {
  name: "Zeon Aqua AS",
  tagline: "Maritime Services",
  phone: "+47 481 28 453",
  phoneClean: "+4748128453",
  email: "post@zeonaqua.no",
  orgNr: "934 626 125",
  address: "Finkavikhaugen 47",
  postalCode: "9105 Kvaløya",
  location: "Tromsø, Norge",
  established: "2024",
  description: "Zeon Aqua AS er et servicebåtrederi som leverer spesialiserte maritime tjenester til havbruksnæringen i Nord-Norge. Med MS Akva Fighter tilbyr vi fortøyning, frakt, ROV-støtte og notservice.",
  socials: {
    facebook: "https://www.facebook.com/zeonaqua.as",
    linkedin: "https://www.linkedin.com/company/zeon-aqua/posts/?feedView=all",
  },
};

export const VESSEL = {
  name: "MS Akva Fighter",
  tagline: "Bygget for nordnorske forhold",
  specs: [
    {
      label: "Lengde",
      value: "22,5 m",
      context: "Stabil plattform for krevende operasjoner",
    },
    {
      label: "Bredde",
      value: "6 m",
      context: "God arbeidsflate og stabilitet",
    },
    {
      label: "Kran",
      value: "12 t Palfinger",
      context: "Løfter fortøyningsutstyr, fôrflåter og arbeidsbåter",
    },
    {
      label: "Dekksplass",
      value: "40 m²",
      context: "Plass til utstyr, materialer og ROV-container",
    },
    {
      label: "Hastighet",
      value: "20 kn",
      context: "Rask mobilisering mellom lokaliteter",
    },
    {
      label: "Dypgang",
      value: "2,5 m",
      context: "Opererer i grunne og krevende farvann",
    },
  ],
  equipment: [
    "Palfinger-kran, 12 t/m",
    "Hydraulisk vinsj",
    "A-ramme",
    "Arbeidslys for nattoperasjoner",
    "VHF og AIS",
    "Dekk tilrettelagt for containerlast",
  ],
};

export const USE_CASES = [
  {
    id: "fortoyning",
    title: "Fortøyningsarbeid",
    description: "Inspeksjon, utskifting og nyinstallasjon av fortøyninger. Komplett service fra planlegging til dokumentasjon.",
    passerNar: "Nye fortøyninger skal settes, eksisterende skal inspiseres eller skiftes",
    eksempel: "Utskifting av bunnkjetting på merd — krankapasitet og dekksplass for kjetting og lodd",
  },
  {
    id: "frakt",
    title: "Frakt og logistikk",
    description: "Rask og pålitelig levering av utstyr og materialer til anlegg. 40 m² dekksareal og 20 knops marsjfart.",
    passerNar: "Utstyr eller materialer skal raskt ut til anlegg",
    eksempel: "Levering av nødgenerator under strømbrudd — hastighet og lastekapasitet avgjør",
  },
  {
    id: "rov",
    title: "Dykker- og ROV-støtte",
    description: "Stabil plattform for undervannsoperasjoner. Plass til ROV-container og tilrettelagt dekk for effektiv gjennomføring.",
    passerNar: "Inspeksjon, notarbeid eller reparasjon under vann",
    eksempel: "ROV-inspeksjon av bunnring før avlusning — stabil plattform, plass til container",
  },
  {
    id: "not",
    title: "Notservice",
    description: "Profesjonell støtte ved notskift, inspeksjon og reparasjon. Erfaren mannskap og riktig utstyr.",
    passerNar: "Not skal løftes, skiftes eller inspiseres",
    eksempel: "Støtte under notskift vår/høst — kran og mannskap som kan jobben",
  },
];

export const METADATA = {
  home: {
    title: "Zeon Aqua | Maritim servicepartner for havbruk i Nord-Norge",
    description: "Servicebåt og mannskap til havbruksnæringen. MS Akva Fighter leverer fortøyning, frakt og ROV-støtte i Troms, Nordland og Finnmark.",
  },
  vessel: {
    title: "MS Akva Fighter | Servicebåt for havbruk",
    description: "22,5m arbeidsbåt med 12-tonns Palfinger-kran og 40m² dekk. Spesialisert på krevende maritime operasjoner i Nord-Norge.",
  },
  contact: {
    title: "Kontakt Zeon Aqua | Forespørsel og tilgjengelighet",
    description: "Ta kontakt for tilgjengelighet og pristilbud. Vi svarer innen 2 timer i arbeidstid.",
  },
  history: {
    title: "Vår Historie | Zeon Aqua",
    description: "Servicebåtrederi basert i Tromsø. Bygget på erfaring fra havbruk og maritime operasjoner i Nord-Norge.",
  },
  career: {
    title: "Karriere | Jobb hos Zeon Aqua",
    description: "Bli en del av Zeon Aqua. Vi søker dyktige fagfolk med erfaring fra maritime operasjoner og havbruk.",
  },
};

export const NAV_LINKS = [
  { href: "/akva-fighter", label: "MS Akva Fighter" },
  { href: "/var-historie", label: "Vår Historie" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/karriere", label: "Karriere" },
];
