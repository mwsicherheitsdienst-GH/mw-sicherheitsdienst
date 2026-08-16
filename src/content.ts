// Content copied verbatim (incl. **bold** markers) from the texts supplied for the site.
// Rendered via <ContentBlocks> / the service modal — see App.tsx.

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tagline"; text: string }
  | { type: "heading"; text: string };

export type Service = {
  id: string;
  title: string;
  summary: string;
  blocks: Block[];
};

export const SERVICES: Service[] = [
  {
    id: "objektschutz",
    title: "Objektschutz & Bewachung",
    summary:
      "Zuverlässiger Schutz für Gebäude, Gelände und sensible Bereiche – von Kontrollgängen bis Zutrittskontrolle.",
    blocks: [
      {
        type: "p",
        text: "Wir schützen gewerbliche Objekte, Bürogebäude, Verkaufsflächen, Einrichtungen und weitere sensible Bereiche.",
      },
      {
        type: "p",
        text: "Je nach Auftrag gehören **Kontrollgänge, Zutrittskontrollen, Überwachung, Dokumentation und die frühzeitige Erkennung ungewöhnlicher Situationen** zu unseren Aufgaben.",
      },
      {
        type: "p",
        text: "Vor neuen Aufträgen beschäftigen wir uns möglichst bereits vor dem ersten Gespräch mit dem Objekt, seiner Nutzung, der Umgebung und erkennbaren Risikofaktoren.",
      },
      {
        type: "p",
        text: "Dadurch möchten wir unseren Kunden nicht einfach Sicherheitspersonal, sondern eine **passende Sicherheitslösung** anbieten.",
      },
    ],
  },
  {
    id: "ladensicherheit",
    title: "Einzelhandel & Ladensicherheit",
    summary:
      "Prävention und Erkennung von Ladendiebstahl – aufmerksam, diskret und ohne Vorverurteilung.",
    blocks: [
      {
        type: "p",
        text: "Im Einzelhandel unterstützen wir unsere Auftraggeber bei der **Prävention und Erkennung von Ladendiebstählen** sowie beim Schutz von Mitarbeitern und Kunden.",
      },
      {
        type: "p",
        text: "Aufmerksamkeit, Diskretion und Deeskalation stehen dabei im Mittelpunkt.",
      },
      {
        type: "p",
        text: "Unsere Mitarbeiter sollen typische Vorgehensweisen und aktuelle Methoden von Ladendieben kennen und verdächtige Situationen sachlich beurteilen können.",
      },
      {
        type: "p",
        text: "Menschen werden dabei nicht aufgrund ihrer **Herkunft, Religion, ihres Geschlechts, Alters, Kleidungsstils oder Erscheinungsbildes** pauschal verdächtigt.",
      },
    ],
  },
  {
    id: "doorman",
    title: "Doorman & sichtbare Sicherheitspräsenz",
    summary:
      "Professionelles Auftreten an Eingängen von Geschäften, Hotels und Veranstaltungen.",
    blocks: [
      {
        type: "p",
        text: "Eine professionelle und sichtbare Sicherheitspräsenz kann bereits dazu beitragen, Konflikte und Straftaten zu verhindern.",
      },
      {
        type: "p",
        text: "Unsere Mitarbeiter können beispielsweise an **Eingängen von Geschäften, Hotels, Veranstaltungen und anderen Einrichtungen** eingesetzt werden.",
      },
      {
        type: "p",
        text: "Dabei verbinden wir ein gepflegtes und professionelles Auftreten mit Aufmerksamkeit, Kommunikation und konsequentem, aber deeskalierendem Verhalten.",
      },
    ],
  },
  {
    id: "veranstaltungssicherheit",
    title: "Veranstaltungssicherheit",
    summary:
      "Individuelle Sicherheitskonzepte für Besucherströme, Einlass und Notfallwege.",
    blocks: [
      {
        type: "p",
        text: "Veranstaltungen stellen besondere Anforderungen an Sicherheitskräfte.",
      },
      {
        type: "p",
        text: "**Besucherströme, Einlassbereiche, Flucht- und Rettungswege sowie mögliche Konflikt- und Gefahrenlagen** müssen gemeinsam betrachtet werden.",
      },
      {
        type: "p",
        text: "MWS setzt deshalb auf Vorbereitung, klare Zuständigkeiten, Kommunikation und situationsgerechtes Handeln.",
      },
      {
        type: "p",
        text: "Das Ziel ist, Auffälligkeiten möglichst früh zu erkennen und Eskalationen zu verhindern.",
      },
    ],
  },
  {
    id: "zugbegleitung",
    title: "Begleitung in Zügen & öffentlichem Personenverkehr",
    summary:
      "Sichtbare Sicherheitspräsenz und Deeskalation im öffentlichen Personenverkehr.",
    blocks: [
      {
        type: "p",
        text: "MWS bietet Sicherheits- und Begleitdienstleistungen **in Zügen sowie im öffentlichen Personenverkehr** an.",
      },
      {
        type: "p",
        text: "Unsere Mitarbeiter können zur sichtbaren Sicherheitspräsenz eingesetzt werden und dabei unterstützen, Konflikte und Gefahrensituationen frühzeitig zu erkennen, Fahrgäste und Personal zu unterstützen und bei Störungen deeskalierend zu handeln.",
      },
      { type: "p", text: "Mögliche Einsatzbereiche sind unter anderem:" },
      {
        type: "list",
        items: [
          "Begleitung von Zugverbindungen",
          "Sicherheitspräsenz in Bahnhöfen und Haltebereichen",
          "stark frequentierte Verbindungen",
          "Sonder- und Veranstaltungsverkehre",
          "Begleitung besonders schutzbedürftiger Personen oder Gruppen",
        ],
      },
      {
        type: "p",
        text: "Unsere Sicherheitskräfte ersetzen dabei weder die **Bundespolizei noch die Landespolizei**. Bei Straftaten oder akuten Gefahrenlagen liegt der Schwerpunkt auf frühzeitiger Erkennung, Deeskalation, Alarmierung der zuständigen Stellen und einem angemessenen Handeln im Rahmen der rechtlichen Befugnisse.",
      },
      {
        type: "tagline",
        text: "Sichtbare Präsenz. Frühzeitige Deeskalation. Sicherheit unterwegs.",
      },
    ],
  },
  {
    id: "gemeinschaftsunterkuenfte",
    title: "Flüchtlings- & Gemeinschaftsunterkünfte",
    summary:
      "Respektvoller, professioneller Schutz für Bewohner, Mitarbeiter und Besucher.",
    blocks: [
      {
        type: "p",
        text: "Die Bewachung von Flüchtlings- und Gemeinschaftsunterkünften erfordert neben sicherheitsfachlicher Kompetenz ein besonderes Maß an Respekt, interkulturellem Verständnis, Neutralität und Fingerspitzengefühl.",
      },
      {
        type: "p",
        text: "MWS Sicherheitskonzepte & Sicherheitsdienst begegnet allen Bewohnerinnen und Bewohnern unabhängig von Herkunft, Nationalität, Religion oder kulturellem Hintergrund vorurteilsfrei und respektvoll. Sicherheit bedeutet für uns nicht, bestimmte Personengruppen unter Generalverdacht zu stellen. Sicherheitsmaßnahmen orientieren sich an der jeweiligen Gefährdungslage und am Sicherheitskonzept der Einrichtung.",
      },
      {
        type: "p",
        text: "Gleichzeitig gehört zu professioneller Prävention, mögliche Gefahren geschlechtsunabhängig zu betrachten. Extremistische oder terroristische Motivationen sind kein ausschließlich männliches Phänomen. Unsere Sicherheitskonzepte sollen deshalb Risiken sachlich berücksichtigen, ohne daraus Vorurteile gegenüber Bewohnerinnen oder Bewohnern abzuleiten.",
      },
      {
        type: "heading",
        text: "Weibliches Sicherheitspersonal für weibliche Bewohner",
      },
      {
        type: "p",
        text: "Wo im Rahmen eines rechtlich zulässigen und mit dem Auftraggeber abgestimmten Sicherheitskonzeptes Taschen-, Zugangs- oder vergleichbare Sicherheitskontrollen vorgesehen sind, achten wir besonders auf kulturelle und persönliche Sensibilität.",
      },
      {
        type: "p",
        text: "Insbesondere bei weiblichen Bewohnerinnen oder Besucherinnen streben wir an, entsprechende personenbezogene Kontrollen durch weibliches Sicherheitspersonal durchführen zu lassen. Damit verbinden wir Sicherheitsanforderungen mit dem Schutz der Privatsphäre, der persönlichen Würde sowie der Berücksichtigung kultureller und religiöser Bedürfnisse.",
      },
      { type: "heading", text: "Prävention ohne Vorverurteilung" },
      {
        type: "p",
        text: "Unsere Mitarbeiterinnen und Mitarbeiter werden dafür sensibilisiert, auffälliges Verhalten und konkrete Gefahrenmerkmale zu beurteilen – nicht Herkunft, Religion oder äußeres Erscheinungsbild.",
      },
      {
        type: "p",
        text: "Neben Deeskalation, Konfliktprävention und dem Erkennen ungewöhnlicher Situationen sollen auch außergewöhnliche Gefahrenlagen Bestandteil unserer Schulungen sein. Dazu können beispielsweise Hinweise auf Gewalttaten, extremistisch motivierte Handlungen oder terroristische Bedrohungsszenarien gehören.",
      },
      {
        type: "p",
        text: "Dabei ist unsere Rolle klar abgegrenzt: Private Sicherheitskräfte ersetzen weder Polizei noch andere staatliche Sicherheitsbehörden. Im Ernstfall geht es darum, im Rahmen der eigenen Befugnisse angemessen zu reagieren, Menschen zu schützen, Gefahren zu melden, Rettungs- und Polizeikräfte unverzüglich zu verständigen und deren Maßnahmen bestmöglich zu unterstützen.",
      },
      {
        type: "tagline",
        text: "Unser Anspruch lautet: konsequente Sicherheit, respektvoller Umgang und Prävention ohne Vorurteile.",
      },
    ],
  },
  {
    id: "seniorenheime",
    title: "Senioren- & Pflegeeinrichtungen",
    summary:
      "Zutrittskontrolle und Prävention von Trickdiebstahl – unauffällig in den Alltag integriert.",
    blocks: [
      {
        type: "p",
        text: "Seniorenheime und andere soziale Einrichtungen benötigen Sicherheitskonzepte, die Schutz und einen respektvollen Umgang miteinander verbinden.",
      },
      {
        type: "p",
        text: "Mögliche Schwerpunkte sind **Zutrittskontrollen, Videoüberwachung, die Erkennung unberechtigter Personen sowie die Prävention von Trickdiebstahl und anderen Straftaten gegenüber Bewohnern**.",
      },
      {
        type: "p",
        text: "Sicherheit soll dabei nicht als störender Fremdkörper wahrgenommen werden, sondern sich möglichst unauffällig und respektvoll in den Alltag der Einrichtung integrieren.",
      },
    ],
  },
  {
    id: "praevention",
    title: "Prävention & besondere Gefahrenlagen",
    summary:
      "Sensibilisierung und Schulung für besondere Gefahren- und Bedrohungslagen – frühzeitig erkennen, richtig reagieren.",
    blocks: [
      {
        type: "p",
        text: "Unsere Sicherheitsmitarbeiter können und dürfen **die Arbeit von Polizei, Bundespolizei, Feuerwehr oder Rettungsdiensten nicht ersetzen** und übernehmen keine hoheitlichen Aufgaben.",
      },
      {
        type: "p",
        text: "Private Sicherheitskräfte befinden sich jedoch häufig bereits vor Ort, wenn eine Gefahr entsteht.",
      },
      {
        type: "p",
        text: "Deshalb sollen unsere Mitarbeiter neben alltäglichen Konfliktsituationen auch für **besondere Gefahren- und Bedrohungslagen** sensibilisiert und regelmäßig geschult werden.",
      },
      { type: "p", text: "Dazu gehören beispielsweise:" },
      {
        type: "list",
        items: [
          "schwere Gewalttaten",
          "verdächtige Gegenstände",
          "auffällige oder bedrohliche Verhaltensweisen",
          "akute Gefahrensituationen",
          "mögliche Anschlagslagen",
          "terroristische Bedrohungsszenarien",
        ],
      },
      {
        type: "p",
        text: "Auch Szenarien wie **Terroranschläge oder vergleichbare schwere Bedrohungslagen** in Einkaufszentren, Veranstaltungen, Bahnhöfen, Zügen, Flüchtlingsunterkünften und anderen öffentlich zugänglichen Einrichtungen werden im Rahmen der Schulungen thematisiert.",
      },
      {
        type: "p",
        text: "Dabei geht es ausdrücklich **nicht darum, polizeiliche Einsatzkräfte zu ersetzen oder sich unnötig selbst in Gefahr zu bringen**.",
      },
      { type: "p", text: "Im Vordergrund stehen:" },
      {
        type: "tagline",
        text: "Gefahren erkennen – unverzüglich melden – Menschen warnen – vorhandene Notfallkonzepte umsetzen – Informationen weitergeben – Polizei und Rettungskräfte unterstützen.",
      },
      {
        type: "p",
        text: "Soweit es die Situation, die rechtlichen Befugnisse und der Eigenschutz zulassen, sollen unsere Mitarbeiter in einer akuten Gefahrenlage **schnell, besonnen und verantwortungsvoll handeln**.",
      },
      {
        type: "tagline",
        text: "Erkennen. Melden. Deeskalieren. Schützen. Unterstützen.",
      },
    ],
  },
  {
    id: "technik",
    title: "Sicherheitstechnik & Verkauf",
    summary:
      "Kameras, Alarmtechnik und Zutrittslösungen – abgestimmt auf Ihr individuelles Sicherheitskonzept.",
    blocks: [
      {
        type: "p",
        text: "Moderne Sicherheit besteht aus dem Zusammenspiel von **Menschen, Technik und durchdachten Abläufen**.",
      },
      {
        type: "p",
        text: "Neben klassischen Sicherheitsdienstleistungen bietet MWS deshalb auch Sicherheitstechnik und ausgewählte Sicherheitsprodukte an.",
      },
      { type: "p", text: "Dazu gehört beispielsweise:" },
      {
        type: "list",
        items: [
          "Überwachungskameras",
          "IP- und Netzwerkkameras",
          "Videoüberwachungssysteme",
          "Aufzeichnungsgeräte",
          "Monitoring-Systeme",
          "Bewegungs- und Öffnungssensoren",
          "Alarm- und Meldetechnik",
          "Zutrittslösungen",
          "Video-Türklingeln",
          "Zubehör für Kamera- und Sicherheitssysteme",
        ],
      },
      {
        type: "p",
        text: "Dabei soll nicht der reine Produktverkauf im Vordergrund stehen.",
      },
      {
        type: "p",
        text: "Entscheidend ist die Frage: **Welche Technik ist für den jeweiligen Einsatzort tatsächlich sinnvoll?**",
      },
      {
        type: "p",
        text: "Auf Wunsch können technische Sicherheitsmaßnahmen mit personeller Bewachung zu einem gemeinsamen Sicherheitskonzept verbunden werden.",
      },
    ],
  },
];

export type Section = {
  id: string;
  title: string;
  subtitle?: string;
  blocks: Block[];
};

// Rendered in this order, with the Leistungen (services) block inserted
// between the first ('einsatzgebiet') and second ('philosophie') entries —
// see App.tsx.
export const SECTIONS: Section[] = [
  {
    id: "einsatzgebiet",
    title: "Einsatzgebiet",
    blocks: [
      {
        type: "p",
        text: "Unsere Hauptniederlassung befindet sich in **Kassel**.",
      },
      {
        type: "p",
        text: "Von unserem Standort in der **Leipziger Straße 242, 34123 Kassel** koordinieren wir unsere Sicherheitsdienstleistungen und Einsätze.",
      },
      {
        type: "p",
        text: "Unser Tätigkeitsgebiet endet jedoch nicht an den Grenzen Nordhessens. Für Veranstaltungen, Sicherheitsaufträge und projektbezogene Einsätze stehen wir unseren Auftraggebern grundsätzlich **bundesweit sowie – unter Berücksichtigung der jeweils geltenden rechtlichen Voraussetzungen – auch für Projekte in Österreich und der Schweiz** zur Verfügung.",
      },
      { type: "tagline", text: "Hauptstandort Kassel – flexibel im Einsatz." },
    ],
  },
  {
    id: "philosophie",
    title: "Unsere Philosophie",
    subtitle: "Faire Arbeit. Professionelle Sicherheit.",
    blocks: [
      {
        type: "list",
        items: [
          "Sicherheit entsteht nicht über möglichst billiges Personal",
          "Qualifizierte Mitarbeiter",
          "Faire Arbeitsbedingungen",
          "Regelmäßige Weiterbildung",
          "Gute Vorbereitung",
          "Moderne Technik",
          "Klare Sicherheitskonzepte",
          "Ein Unternehmen, in dem sich Mitarbeiter langfristig weiterentwickeln können",
        ],
      },
      {
        type: "tagline",
        text: "Nicht nur reagieren, wenn etwas passiert – Risiken erkennen, bevor daraus ein Problem entsteht.",
      },
    ],
  },
  {
    id: "konzept",
    title: "Unser Sicherheitskonzept",
    subtitle: "Vorbereitung beginnt vor dem ersten Einsatz",
    blocks: [
      {
        type: "p",
        text: "Unser Anspruch beginnt nicht erst dann, wenn ein Sicherheitsmitarbeiter am Objekt steht.",
      },
      {
        type: "p",
        text: "Vor einem neuen Auftrag möchten wir uns bereits **vor dem ersten Kundengespräch** möglichst umfassend über folgende Punkte informieren:",
      },
      {
        type: "list",
        items: [
          "Objekt und Gebäude",
          "Nutzung des Objekts",
          "Umgebung und Standort",
          "öffentlich zugängliche Bereiche",
          "Besucher- und Kundenaufkommen",
          "erkennbare Risikofaktoren",
          "besondere Anforderungen des Auftraggebers",
        ],
      },
      {
        type: "p",
        text: "Dadurch können wir im Erstgespräch bereits konkrete Fragen stellen und gemeinsam mit dem Auftraggeber ein Sicherheitskonzept entwickeln, das zum tatsächlichen Bedarf passt.",
      },
      {
        type: "tagline",
        text: "Wir möchten nicht einfach Personal bereitstellen – wir möchten Sicherheit planen.",
      },
    ],
  },
  {
    id: "mitarbeiter",
    title: "Unsere Mitarbeiter",
    subtitle: "Sicherheit beginnt beim Menschen",
    blocks: [
      {
        type: "p",
        text: "Technik kann unterstützen – entscheidend bleibt der Mensch dahinter. Deshalb legen wir Wert auf:",
      },
      {
        type: "list",
        items: [
          "Zuverlässigkeit",
          "Aufmerksamkeit",
          "Kommunikationsfähigkeit",
          "professionelles Auftreten",
          "Deeskalationsfähigkeit",
          "Verantwortungsbewusstsein",
          "kontinuierliche Weiterbildung",
          "Inklusive Berufschancen",
        ],
      },
      {
        type: "p",
        text: "Unsere Mitarbeiter sollen lernen, Situationen nicht nur zu beobachten, sondern **richtig einzuschätzen und angemessen darauf zu reagieren**.",
      },
      {
        type: "p",
        text: "Dazu gehören Schulungen zu Deeskalation, Diebstahlsprävention, Objekt- und Veranstaltungssicherheit sowie die Sensibilisierung für besondere Gefahren- und Bedrohungslagen.",
      },
      {
        type: "p",
        text: "Weiterqualifizierungen – beispielsweise von der **Sachkunde nach § 34a GewO** über weiterführende Qualifikationen bis hin zur **Fachkraft für Schutz und Sicherheit** – möchten wir aktiv unterstützen.",
      },
    ],
  },
];
