// park post data for development
const category = {
  1: "all",
  2: "community",
  3: "child friendly",
  4: "dog park",
  5: "large park",
  6: "nature",
  7: "skatepark",
  8: "sports"
}

const feature = {
  1: "all",
  2: "accessible",
  3: "basketball",
  4: "bbq",
  5: "bins",
  6: "botanical",
  7: "cultural",
  8: "educational",
  9: "events",
  10: "exercise",
  11: "fenced",
  12: "food nearby",
  13: "farm"
}

const parks = [
  {
    id: 1,
    category_id: category[2],
    feature_id: feature[8],
    updated_at: new Date("2000-09-20"),
    address_id: 1,
    park_name: "Royal Park",
    park_icon: "👑",
    cheese_pair: "Blue Cheese",
    wine_pair: "Merlot",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 2,
    category_id: category[1],
    feature_id: feature[2],
    updated_at: new Date("2021-08-30"),
    address_id: 1,
    park_name: "St Kilda Gardens",
    park_icon: "🌴",
    cheese_pair: "Mozarella",
    wine_pair: "Cab Sav",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 3,
    category_id: category[1],
    feature_id: feature[3],
    updated_at: new Date("2018-02-10"),
    address_id: 1,
    park_name: "Bundoora Parklands",
    park_icon: "🥯",
    cheese_pair: "Babybel",
    wine_pair: "Non Alcoholic Wine",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 4	,
    category_id: category[2],
    feature_id: feature[3],
    updated_at: new Date("2021-01-30"),
    address_id: 1,
    park_name: "All Nations Park",
    park_icon: "🌏",
    cheese_pair: "Brie",
    wine_pair: "Fruity Lexia",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 5	,
    category_id: category[2],
    feature_id: feature[2],
    updated_at: new Date("2020-12-19"),
    address_id: 1,
    park_name: "Carlton Gardens",
    park_icon: "🌴",
    cheese_pair: "Hard Cow Cheese",
    wine_pair: "Orange Wine",
    latitude: -37.830203,
    longitude: 144.974998
  },  
  {
    id: 6,
    category_id: category[2],
    feature_id: feature[3],
    updated_at: new Date("2020-09-20"),
    address_id: 1,
    park_name: "Royal Botanical Gardens",
    park_icon: "🤴",
    cheese_pair: "Parmasan Regiano",
    wine_pair: "Sparkling",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 7,
    category_id: category[3],
    feature_id: feature[1],
    updated_at: new Date("2019-08-30"),
    address_id: 1,
    park_name: "Albert Park Lake",
    park_icon: "🏞",
    cheese_pair: "Smoked Cheese",
    wine_pair: "Pinot Noir",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 8,
    category_id: category[3],
    feature_id: feature[2],
    updated_at: new Date("2019-01-30"),
    address_id: 1,
    park_name: "Gasworks Park",
    park_icon: "⛽️",
    cheese_pair: "String Cheese",
    wine_pair: "Passion Pop",
    latitude: -37.830203,
    longitude: 144.974998
  },
  {
    id: 9	,
    category_id: category[3],
    feature_id: feature[3],
    updated_at: new Date("2021-04-27"),
    address_id: 1,
    park_name: "Catani Gardens",
    park_icon: "🐈",
    cheese_pair: "Goats Cheese",
    wine_pair: "Chardonay",
    latitude: -37.830203,
    longitude: 144.974998
  }
]

export default parks