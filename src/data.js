const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const heroImage = img("1419242902214-272b3f66ee7a");

const sections = [
  {
    id: "sky",
    title: "The Sky",
    color: "#eef0fb",
    image: img("1462331940025-496dfbfc7564"),
    text: "Look up in Lumora and you will never see the same sky twice.",
    cards: [
      ["Colourful Moon", "The moon has a new colour every night. Pink, blue, gold and more."],
      ["Two Suns", "There are two suns in the sky. One is big and orange, one is small and white."],
      ["Wishing Stars", "Every person has their own star. It shines brighter on their birthday."],
      ["Night Rainbows", "Rainbows come out at night too, and they glow softly in the dark."],
    ],
  },
  {
    id: "land",
    title: "The Land",
    color: "#e8f5ec",
    image: img("1506905925346-21bda4d32df4"),
    text: "Green hills, clear water and islands that float above the clouds.",
    cards: [
      ["Floating Islands", "Small green islands float in the air above the valleys."],
      ["Glowing Trees", "When the sun goes down, the fruits on the trees start to glow."],
      ["Clear Rivers", "The water is so clean that you can see the fish at the bottom."],
      ["Flower Roads", "Instead of plain roads, there are paths covered with soft flowers."],
    ],
  },
  {
    id: "sounds",
    title: "Sounds",
    color: "#e7f1fb",
    image: img("1470071459604-3b5ec3a7fe05"),
    text: "Lumora is never fully silent, but it is always peaceful.",
    cards: [
      ["Wind Chimes", "Every house has wind chimes, so the whole town sings when the wind blows."],
      ["Train Whistles", "Old steam trains whistle far away in the hills every evening."],
      ["Singing Rain", "The rain falls like music on the rooftops."],
      ["Humming Flowers", "Flowers hum a little tune when you walk past them."],
    ],
  },
  {
    id: "smells",
    title: "Smells",
    color: "#fcf1e7",
    image: img("1490750967868-88aa4486c946"),
    text: "Every part of the day has its own sweet smell.",
    cards: [
      ["Morning", "The mornings smell like fresh bread and wet soil."],
      ["Evening", "The evenings smell like jasmine flowers and the sea."],
      ["Rain", "The rain smells different every time, like a new perfume."],
      ["Festivals", "Festival nights smell like sweets and candles."],
    ],
  },
  {
    id: "rules",
    title: "Rules of Nature",
    color: "#f3effb",
    image: img("1501785888041-af3ef285b470"),
    text: "Nature follows its own gentle rules here.",
    cards: [
      ["Light Gravity", "Things are lighter here, so jumping feels like flying."],
      ["Nothing Breaks", "When something falls, it comes down slowly like a leaf."],
      ["Upside Rain", "On the first day of spring, the rain falls up into the sky."],
      ["Slow Time", "Near some ponds, time moves slowly, so happy moments last longer."],
    ],
  },
  {
    id: "life",
    title: "Life Here",
    color: "#eaf6f6",
    image: img("1441974231531-c6227db76b6e"),
    text: "People, animals and nature all live together in harmony.",
    cards: [
      ["Talking Animals", "Animals can talk, and they love to tell old stories."],
      ["No Goodbyes", "Friends who move away are always just one bridge away."],
      ["Free Libraries", "Every street has a small library where anyone can take a book."],
      ["Kind Weather", "It never gets too hot or too cold. The weather is always gentle."],
    ],
  },
  {
    id: "memory",
    title: "Memory Day",
    color: "#fcedf1",
    image: img("1469474968028-56623f02e42e"),
    text: "Every year on 31st December, the sky turns into a big screen. Everyone can watch and live their happiest memories again.",
    cards: [
      ["First Day of School", "The new bag, the new friends and the shared lunch."],
      ["Grandma's House", "Warm food and long stories by the window."],
      ["Rainy Holidays", "Paper boats and jumping in puddles."],
      ["Summer Evenings", "Playing outside until the street lights came on."],
    ],
  },
];

export default sections;
