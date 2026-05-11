// Temporary demo data.
// Replace this file with Supabase-backed hosts, stays, POIs, links, and feedback
// once real hosts and partner listings are available.

export type GuestVibe = "burned_out" | "energetic" | "curious";

export type DemoPoi = {
  id: string;
  name: string;
  category:
    | "Eat"
    | "Drink"
    | "Relax"
    | "Explore"
    | "Shop"
    | "Practical"
    | "Local Secret"
    | "Avoid";
  hostTip: string;
  whyRecommended: string;
  bestFor: string[];
  avoidIf: string;
  bestTime: string;
  vibes: GuestVibe[];
  hostConfidence: "Must-go" | "Reliable" | "Niche pick" | "Only if nearby";
  affiliation: "No affiliation" | "Host partner" | "Friend of host" | "Discount available";
  lastConfirmed: string;
  guestSignals: string[];
  mapUrl: string;
};

export type DemoStay = {
  id: string;
  name: string;
  hostName: string;
  location: string;
  neighborhood: string;
  category: string;
  mood: string;
  price: string;
  sleeps: string;
  filterTags: string[];
  bestFor: string[];
  description: string;
  imageUrl: string;
  imageCredit: string;
  imageSourceUrl: string;
  trust: string[];
  warnings: string[];
  links: {
    label: string;
    url: string;
  }[];
  poiIds: string[];
};

export const demoPois: DemoPoi[] = [
  {
    id: "taberna-late-window",
    name: "Taberna Late Window",
    category: "Eat",
    hostTip:
      "Ask for the counter seat by the window and order the daily fish if it is still on the chalkboard.",
    whyRecommended:
      "It is close enough for a first night, small enough to feel local, and reliable when guests arrive tired.",
    bestFor: ["First-night dinner", "Solo travellers", "Low-effort evenings"],
    avoidIf: "You need a large table or a very fast meal.",
    bestTime: "Before 7:30pm",
    vibes: ["burned_out", "curious"],
    hostConfidence: "Must-go",
    affiliation: "No affiliation",
    lastConfirmed: "May 2026",
    guestSignals: ["18 guests marked worth it", "2 guests said book ahead"],
    mapUrl: "https://www.google.com/maps/search/restaurants+near+Alfama+Lisbon"
  },
  {
    id: "penny-cellar",
    name: "The Penny Cellar",
    category: "Drink",
    hostTip: "Tell Ana you are staying nearby and ask what bottle is open off-menu.",
    whyRecommended:
      "It feels like a neighbourhood room rather than a tourist bar, and the staff explain the local wines well.",
    bestFor: ["Curious drinks", "Date night", "After dinner"],
    avoidIf: "You want loud music or cocktails with a view.",
    bestTime: "After 8:30pm",
    vibes: ["curious"],
    hostConfidence: "Reliable",
    affiliation: "Friend of host",
    lastConfirmed: "April 2026",
    guestSignals: ["11 guests marked worth it", "1 guest said it was full"],
    mapUrl: "https://www.google.com/maps/search/wine+bar+Lisbon+Portugal"
  },
  {
    id: "north-steps-walk",
    name: "North Steps Walk",
    category: "Explore",
    hostTip:
      "Start at the blue tiled church, take the steps up slowly, then loop back through the small flower market.",
    whyRecommended:
      "It gives guests a real sense of the neighbourhood without needing a full-day plan.",
    bestFor: ["Morning energy", "Views", "Getting oriented"],
    avoidIf: "You dislike steep streets or it is raining heavily.",
    bestTime: "Before 10am",
    vibes: ["energetic", "curious"],
    hostConfidence: "Must-go",
    affiliation: "No affiliation",
    lastConfirmed: "May 2026",
    guestSignals: ["22 guests marked worth it", "4 guests warned about hills"],
    mapUrl: "https://www.google.com/maps/search/viewpoint+walk+Lisbon+Portugal"
  },
  {
    id: "quiet-reading-room",
    name: "Quiet Reading Room",
    category: "Relax",
    hostTip:
      "Take the upstairs table by the back shelves; it is the calmest place nearby when the streets are busy.",
    whyRecommended:
      "It gives burned-out guests somewhere warm, quiet, and useful without needing to plan anything.",
    bestFor: ["Rainy afternoons", "Reading", "Resetting after travel"],
    avoidIf: "You need strong Wi-Fi calls or a full lunch menu.",
    bestTime: "2pm to 5pm",
    vibes: ["burned_out"],
    hostConfidence: "Reliable",
    affiliation: "No affiliation",
    lastConfirmed: "March 2026",
    guestSignals: ["9 guests marked worth it", "Recently confirmed open"],
    mapUrl: "https://www.google.com/maps/search/bookstore+cafe+Lisbon+Portugal"
  },
  {
    id: "square-menu-trap",
    name: "Main Square Photo Menu Strip",
    category: "Avoid",
    hostTip:
      "Walk two streets past the square before choosing dinner; the picture-menu places rush guests and overcharge.",
    whyRecommended:
      "Avoid notes are part of the trust layer: guests need to know what not to waste time on.",
    bestFor: ["Avoiding tourist traps", "Saving money", "First-time visitors"],
    avoidIf: "This is itself a warning rather than a place to visit.",
    bestTime: "Any dinner hour",
    vibes: ["burned_out", "energetic", "curious"],
    hostConfidence: "Must-go",
    affiliation: "No affiliation",
    lastConfirmed: "May 2026",
    guestSignals: ["7 guests said this saved them time"],
    mapUrl: "https://www.google.com/maps/search/tourist+restaurants+near+Lisbon+main+square"
  },
  {
    id: "harbour-slow-loop",
    name: "Harbour Slow Loop",
    category: "Explore",
    hostTip:
      "Do the loop clockwise so the wind is behind you on the way back, then stop at the tiny kiosk near the slipway.",
    whyRecommended:
      "It is the easiest way to feel the coast without committing to a long hike.",
    bestFor: ["Coastal air", "Gentle walks", "Burned-out mornings"],
    avoidIf: "The weather warning mentions high winds.",
    bestTime: "Late morning",
    vibes: ["burned_out", "energetic"],
    hostConfidence: "Reliable",
    affiliation: "No affiliation",
    lastConfirmed: "April 2026",
    guestSignals: ["13 guests marked worth it", "2 guests noted windy days"],
    mapUrl: "https://www.google.com/maps/search/harbour+walk+Cornwall+United+Kingdom"
  },
  {
    id: "porto-work-cafe",
    name: "Back Room Work Cafe",
    category: "Practical",
    hostTip:
      "Use the back room, not the front tables. The signal is stronger and they do not mind laptops before 4pm.",
    whyRecommended:
      "Remote-work guests need practical local intelligence as much as restaurants.",
    bestFor: ["Laptop mornings", "Long stays", "Solo guests"],
    avoidIf: "You need video calls after 4pm; it gets noisy.",
    bestTime: "9am to 1pm",
    vibes: ["curious", "burned_out"],
    hostConfidence: "Reliable",
    affiliation: "No affiliation",
    lastConfirmed: "May 2026",
    guestSignals: ["6 guests confirmed Wi-Fi was strong"],
    mapUrl: "https://www.google.com/maps/search/work+cafe+Porto+Portugal"
  }
];

export const demoStays: DemoStay[] = [
  {
    id: "atelier-loft-lisbon",
    name: "Atelier Loft",
    hostName: "Maya",
    location: "Lisbon, Portugal",
    neighborhood: "Alfama edge",
    category: "Boutique Airbnb",
    mood: "Curious weekends",
    price: "From GBP 142/night",
    sleeps: "Sleeps 2",
    filterTags: ["Boutique"],
    bestFor: ["Design-led weekends", "First-time Lisbon", "Food-led trips"],
    description:
      "A fictional design-led apartment used to show how a stay listing can carry a host-approved Shadow Map before real inventory exists.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lisboa%2C%20Portugal%20%28Unsplash%29.jpg",
    imageCredit: "Demo image: Lisboa, Portugal on Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Lisboa,_Portugal_(Unsplash).jpg",
    trust: ["Host verified", "Guide updated this month", "No hidden partnerships"],
    warnings: ["Steep streets nearby", "Better without a car"],
    links: [
      { label: "Sample Airbnb search", url: "https://www.airbnb.com/s/Lisbon--Portugal/homes" },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Lisbon%2C%20Portugal"
      },
      { label: "Area map", url: "https://www.google.com/maps/search/Lisbon+Portugal+apartments" }
    ],
    poiIds: [
      "taberna-late-window",
      "penny-cellar",
      "north-steps-walk",
      "quiet-reading-room",
      "square-menu-trap"
    ]
  },
  {
    id: "slow-house-cornwall",
    name: "The Slow House",
    hostName: "Elliot",
    location: "Cornwall, United Kingdom",
    neighborhood: "Harbour village",
    category: "Romantic Stay",
    mood: "Burned-out escapes",
    price: "From GBP 188/night",
    sleeps: "Sleeps 2-4",
    filterTags: ["Romantic", "Pet-Friendly"],
    bestFor: ["Quiet weekends", "Coastal walks", "Rainy-day reading"],
    description:
      "A fictional coastal stay for showing calm-trip recommendations, warning notes, and practical guest trust signals.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cornwall%2C%20United%20Kingdom%20%28Unsplash%29.jpg",
    imageCredit: "Demo image: Cornwall, United Kingdom on Wikimedia Commons",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Cornwall,_United_Kingdom_(Unsplash).jpg",
    trust: ["Guest validated", "Walkable food map", "Rainy day edit"],
    warnings: ["Some restaurants close early", "Tides affect coastal paths"],
    links: [
      {
        label: "Sample Airbnb search",
        url: "https://www.airbnb.com/s/Cornwall--United-Kingdom/homes"
      },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Cornwall%2C%20United%20Kingdom"
      },
      { label: "Area map", url: "https://www.google.com/maps/search/Cornwall+coastal+cottage" }
    ],
    poiIds: ["harbour-slow-loop", "quiet-reading-room"]
  },
  {
    id: "workroom-porto",
    name: "Workroom Porto",
    hostName: "Rui",
    location: "Porto, Portugal",
    neighborhood: "Bonfim",
    category: "Remote Work Stay",
    mood: "Long-stay rhythm",
    price: "From GBP 96/night",
    sleeps: "Sleeps 1-2",
    filterTags: ["Remote Work"],
    bestFor: ["Remote work", "Long stays", "Solo city rhythm"],
    description:
      "A fictional work-friendly stay for showing how Shadow Map can include practical local knowledge, not just sightseeing.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Porto%2C%20Portugal%20%28Unsplash_MNvXUgNcGfQ%29.jpg",
    imageCredit: "Demo image: Porto, Portugal on Wikimedia Commons",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Porto,_Portugal_(Unsplash_MNvXUgNcGfQ).jpg",
    trust: ["Fast Wi-Fi checked", "Quiet workspace", "Late food nearby"],
    warnings: ["Front street is lively at weekends", "Some cafes close on Mondays"],
    links: [
      { label: "Sample Airbnb search", url: "https://www.airbnb.com/s/Porto--Portugal/homes" },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Porto%2C%20Portugal"
      },
      { label: "Area map", url: "https://www.google.com/maps/search/Porto+Portugal+apartments" }
    ],
    poiIds: ["porto-work-cafe", "penny-cellar", "north-steps-walk"]
  },
  {
    id: "glasshouse-cabin-lake-district",
    name: "Glasshouse Cabin",
    hostName: "Nora",
    location: "Lake District, United Kingdom",
    neighborhood: "Woodland edge",
    category: "Unique Stay",
    mood: "Quiet nature reset",
    price: "From GBP 164/night",
    sleeps: "Sleeps 2",
    filterTags: ["Unique", "Romantic"],
    bestFor: ["Nature stays", "Slow mornings", "Offline weekends"],
    description:
      "A fictional cabin listing for testing unique stays, quiet recommendations, and host warnings before real partners are added.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cornwall%2C%20United%20Kingdom%20%28Unsplash%29.jpg",
    imageCredit: "Demo image: Cornwall, United Kingdom on Wikimedia Commons",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Cornwall,_United_Kingdom_(Unsplash).jpg",
    trust: ["Host verified", "Weather caveats included", "Guest feedback monitored"],
    warnings: ["Car recommended", "Patchy phone signal near the trail"],
    links: [
      {
        label: "Sample Airbnb search",
        url: "https://www.airbnb.com/s/Lake-District--United-Kingdom/homes"
      },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Lake%20District%2C%20United%20Kingdom"
      },
      {
        label: "Area map",
        url: "https://www.google.com/maps/search/Lake+District+cabin+stay"
      }
    ],
    poiIds: ["harbour-slow-loop", "quiet-reading-room"]
  },
  {
    id: "courtyard-family-house-barcelona",
    name: "Courtyard Family House",
    hostName: "Clara",
    location: "Barcelona, Spain",
    neighborhood: "Gracia",
    category: "Family Stay",
    mood: "Easy family base",
    price: "From GBP 211/night",
    sleeps: "Sleeps 5",
    filterTags: ["Family"],
    bestFor: ["Families", "Long weekends", "Walkable food"],
    description:
      "A fictional family stay used to preview how Shadow Map can guide guests toward easy meals, parks, pharmacy stops, and honest avoid notes.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lisboa%2C%20Portugal%20%28Unsplash%29.jpg",
    imageCredit: "Demo image: Lisboa, Portugal on Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Lisboa,_Portugal_(Unsplash).jpg",
    trust: ["Family-friendly guide", "Practical stops mapped", "No hidden partnerships"],
    warnings: ["Nap-time quiet hours", "Main plaza gets crowded after 6pm"],
    links: [
      { label: "Sample Airbnb search", url: "https://www.airbnb.com/s/Barcelona--Spain/homes" },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Barcelona%2C%20Spain"
      },
      { label: "Area map", url: "https://www.google.com/maps/search/Barcelona+family+apartment" }
    ],
    poiIds: ["taberna-late-window", "quiet-reading-room", "square-menu-trap"]
  },
  {
    id: "garden-mews-bath",
    name: "Garden Mews",
    hostName: "Imogen",
    location: "Bath, United Kingdom",
    neighborhood: "Widcombe",
    category: "Pet-Friendly Stay",
    mood: "Walkable with a dog",
    price: "From GBP 132/night",
    sleeps: "Sleeps 2 plus pet",
    filterTags: ["Pet-Friendly", "Boutique"],
    bestFor: ["Pet-friendly trips", "Quiet cafes", "Gentle walks"],
    description:
      "A fictional pet-friendly stay to show how listings can include dog walks, practical stops, and avoid-if caveats.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lisbon%2C%20Portugal%20%28Unsplash_dRNT_zPMZ6k%29.jpg",
    imageCredit: "Demo image: Lisbon, Portugal on Wikimedia Commons",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lisbon,_Portugal_(Unsplash_dRNT_zPMZ6k).jpg",
    trust: ["Pet-friendly notes checked", "Walkable guide", "Guest validated"],
    warnings: ["Some pubs require booking with pets", "Avoid the steep lane after rain"],
    links: [
      { label: "Sample Airbnb search", url: "https://www.airbnb.com/s/Bath--United-Kingdom/homes" },
      {
        label: "Sample Booking.com search",
        url: "https://www.booking.com/searchresults.html?ss=Bath%2C%20United%20Kingdom"
      },
      { label: "Area map", url: "https://www.google.com/maps/search/Bath+pet+friendly+stay" }
    ],
    poiIds: ["harbour-slow-loop", "quiet-reading-room", "porto-work-cafe"]
  }
];

export const demoGuide = {
  hostId: "demo-host",
  hostName: "Maya",
  stayName: "Atelier Loft",
  location: "Lisbon, Portugal",
  guideCode: "DEMO-HOST",
  lastUpdated: "May 2026",
  summary:
    "A fictional host-approved guide showing how real POIs, trust signals, caveats, maps, and guest feedback will look once Supabase data replaces this demo file.",
  poiIds: demoStays[0].poiIds
};

export function getStayById(id: string) {
  return demoStays.find((stay) => stay.id === id) ?? demoStays[0];
}

export function getPoisForStay(stayId: string) {
  const stay = getStayById(stayId);

  return stay.poiIds
    .map((poiId) => demoPois.find((poi) => poi.id === poiId))
    .filter((poi): poi is DemoPoi => Boolean(poi));
}

export function getDemoGuidePois() {
  return demoGuide.poiIds
    .map((poiId) => demoPois.find((poi) => poi.id === poiId))
    .filter((poi): poi is DemoPoi => Boolean(poi));
}
