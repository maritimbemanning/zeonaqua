export const COMPANY = {
  name: "Zeon Aqua AS",
  tagline: "Servicebåt for havbruk",
  phone: "+47 481 28 453",
  phoneClean: "+4748128453",
  email: "post@zeonaqua.no",
  orgNr: "934 626 125",
  address: "Finkavikhaugen 47",
  postalCode: "9105 Kvaløya",
  location: "Tromsø",
  established: "2024",
  description: "Servicebåtrederi med base i Tromsø. Fortøyning, frakt og ROV-støtte til havbruksnæringen i Nord-Norge.",
  socials: {
    facebook: "https://www.facebook.com/zeonaqua.as",
    linkedin: "https://www.linkedin.com/company/zeon-aqua/posts/?feedView=all",
  },
};

export const VESSEL = {
  name: "MS Akva Fighter",
  tagline: "Arbeidsbåt for havbruk i Nord-Norge",
  specs: [
    {
      label: "Lengde",
      value: "22,5 m",
      context: "Stabil arbeidsplattform",
    },
    {
      label: "Bredde",
      value: "6 m",
      context: "God plass på dekk",
    },
    {
      label: "Kran",
      value: "12 t Palfinger",
      context: "For fortøyning og løft",
    },
    {
      label: "Dekk",
      value: "40 m²",
      context: "Plass til utstyr og last",
    },
    {
      label: "Fart",
      value: "20 kn",
      context: "Rask transport mellom anlegg",
    },
    {
      label: "Dypgang",
      value: "2,5 m",
      context: "Går inn på grunne områder",
    },
  ],
  equipment: [
    "Palfinger-kran 12 t/m",
    "Hydraulisk vinsj",
    "A-ramme",
    "Arbeidslys",
    "VHF og AIS",
    "Dekk for containerlast",
  ],
};

export const USE_CASES = [
  {
    id: "fortoyning",
    title: "Fortøyningsarbeid",
    description: "Inspeksjon, utskifting og setting av fortøyninger.",
    passerNar: "Fortøyninger skal settes, inspiseres eller skiftes",
    eksempel: "Bytte bunnkjetting på merd",
  },
  {
    id: "frakt",
    title: "Frakt og logistikk",
    description: "Transport av utstyr og materialer til anlegg.",
    passerNar: "Utstyr skal ut til anlegg",
    eksempel: "Levering av generator eller materialer",
  },
  {
    id: "rov",
    title: "ROV-støtte",
    description: "Plattform for ROV-operasjoner og undervannsarbeid.",
    passerNar: "Inspeksjon eller arbeid under vann",
    eksempel: "ROV-inspeksjon av bunnring",
  },
  {
    id: "not",
    title: "Notservice",
    description: "Støtte ved notskift og notarbeid.",
    passerNar: "Not skal løftes, skiftes eller inspiseres",
    eksempel: "Assistanse under notskift",
  },
];

export const METADATA = {
  home: {
    title: "Zeon Aqua | Servicebåt for havbruk i Nord-Norge",
    description: "MS Akva Fighter - arbeidsbåt og mannskap til havbruksnæringen. Fortøyning, frakt og ROV-støtte i Troms og Nordland.",
  },
  vessel: {
    title: "MS Akva Fighter | Zeon Aqua",
    description: "22,5m arbeidsbåt med 12-tonns kran. Servicebåt for havbruk i Nord-Norge.",
  },
  contact: {
    title: "Kontakt | Zeon Aqua",
    description: "Ta kontakt for å sjekke tilgjengelighet. Ring eller send e-post.",
  },
  history: {
    title: "Om oss | Zeon Aqua",
    description: "Servicebåtrederi i Tromsø. Fortøyning, frakt og ROV-støtte til havbruksnæringen.",
  },
  career: {
    title: "Karriere | Zeon Aqua",
    description: "Jobb hos Zeon Aqua. Send åpen søknad.",
  },
};

export const NAV_LINKS = [
  { href: "/akva-fighter", label: "MS Akva Fighter" },
  { href: "/var-historie", label: "Vår Historie" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/karriere", label: "Karriere" },
];
