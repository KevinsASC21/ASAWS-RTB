// fetch("https://www.gstatic.com/charts/loader.js")
//         .then(function(response) {
//         return response.json();
//         })
//         .then(function(data) {
//         console.log(data);
//         });

// https://www.yahoofinanceapi.com/

class Stock {
  constructor(
    country,
    img_link,
    title,
    ticker,
    counterpart,
    graphID,
    price,
    prev_price,
    todaysHighP,
    todaysLowP,
    at_high_price,
    at_low_price,
    change_money,
    change_percent,
    market_cap,
    revenue,
    net_income,
    debt,
    liq_assets,
    owned_shares
  ) {
    this.country = country;
    this.img_link = img_link;
    this.title = title;
    this.ticker = ticker;
    this.counterpart = counterpart;
    this.graphID = graphID;
    this.price = price;
    this.prev_price = prev_price;
    this.todaysHighP = todaysHighP;
    this.todaysLowP = todaysLowP;
    this.at_high_price = at_high_price;
    this.at_low_price = at_low_price;
    this.change_money = change_money;
    this.change_percent = change_percent;
    this.market_cap = market_cap;
    this.revenue = revenue;
    this.net_income = net_income;
    this.debt = debt;
    this.liq_assets = liq_assets;
    this.owned_shares = owned_shares;
  }

  setTicker(ticker) {
    this.ticker = ticker;
  }
  setCountry(country) {
    this.country = country;
  }
  setImgLink(img_link) {
    this.img_link = img_link;
  }
  setCounterpart(counterpart) {
    this.counterpart = counterpart;
  }
  setGraphID(graphID) {
    this.graphID = graphID;
  }
  setPrice(price) {
    this.price = price;
  }
  setTodaysHighP(todaysHighP) {
    this.todaysHighP = todaysHighP;
  }
  setTodaysLowP(todaysLowP) {
    this.todaysLowP = todaysLowP;
  }
  setATHP(at_high_price) {
    this.at_high_price = at_high_price;
  }
  setATLP(at_low_price) {
    this.at_high_price = at_low_price;
  }
  setChangeM(change_money) {
    this.change_money = change_money;
  }
  setChangeP(change_percent) {
    this.change_percent = change_percent;
  }
  setRevenue(revenue) {
    this.revenue = revenue;
  }
  setMarketCap(market_cap) {
    this.market_cap = market_cap;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
  setTicker(ticker) {
    this.ticker = ticker;
  }
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    "X-RapidAPI-Key": "3ffc3eda29msh3f12b98083e2b4dp1511a6jsndcf9c35359c1",
  },
};

// fetch('https://yh-finance.p.rapidapi.com/market/v2/get-summary?region=US', options) get summary
fetch(
  "https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=MSFT",
  options
) // get quotes
  .then(function (response) {
    return response.json();
  })

  // .then(function(json) {
  // console.log(json);
  // });

  .then(function (json) {
    console.log(json.quoteResponse.result[0].longName); //IT WORKS!!!!!
  });

let userCashBal = 500;
let userMoolaBal = 750;
let ppt = "prompt";
let st = "StockSheet";
let pho = "photo";
let na = "compName";
let sts = "stats";
let gph = "graph";
let pr = "price";
let n2 = "tocker";
let tj = "text/javascript";
let standardChart = "width: 900px; height: 500px;";
let gcAPI = "https://www.gstatic.com/charts/loader.js";
let curre = "current";
let pack = "packages";
let cc = "corechart";

let transactionlog = ``;

let CCO = "CCO";
let ATHP = "ATHP";
let ATLP = "ATLP";
let changeMoney = "changeMoney";
let changePercent = "changePercent";
let marketCap = "marketCap";
let revenue = "revenue";
let OPIncome = "OPIncome";
let Debt = "Debt";
let COH = "COH";

let dayCounter = 0;
let accountBal = 500000;
let portfolioValue = 0;
let username = "KC123";
let pin = 1234;

// Cookies.set('arrow',`MACROSOFT = {
//           Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
//           img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
//           title:"Macrosoft Corporation",
//           ticker:"$MS",
//           counterpart: "Microsoft",
//           graphID: "chart_MS",
//           price:248.19 }`);

// console.log(Cookies.get('arrow'));

let arrow = "▼";

let MACROSOFT = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
  title: "Macrosoft Corporation",
  ticker: "$MS",
  counterpart: "MICROSOFT",
  graphID: "chart_div0",
  price: 248.19,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

console.log(MACROSOFT.toString());

let SONY = {
  Country: "https://images.emojiterra.com/twitter/v13.1/512px/1f1ef-1f1f5.png",
  img_link: "https://pngimg.com/uploads/sony_logo/sony_logo_PNG8.png",
  title: "Samsony Incorporated",
  ticker: "$SMS",
  counterpart: "Sony",
  graphID: "chart_div1",
  price: 148.19,
  prev_price: 200.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 190.34,
  at_low_price: 100.13,
  change_money: 17.4,
  change_percent: 11,
  market_cap: 100000000,
  revenue: 10043121,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "B+",
  stype: "Value",
  sentiment: "HOLD",
  sector: "TECH/ELECTRONICS"
};

let JP = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/KC_Logo_Black.png/880px-KC_Logo_Black.png",
  title: "KC Warren & Co.",
  ticker: "$KC",
  counterpart: "J.P. Morgan & Chase Co.",
  graphID: "chart_div2",
  price: 134.16,
  prev_price: 200.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 213.55,
  at_low_price: 109.1,
  change_money: 52.3,
  change_percent: 35,
  market_cap: 100000000,
  revenue: 10043121,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "B-",
  stype: "Income",
  sentiment: "SELL",
  sector: "FINANCE"
};

let Intellect = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://www.pikpng.com/pngl/b/90-907472_intel-clipart-png-logo-intel-inside-circle-transparent.png",
  title: "Intellect LTD.",
  ticker: "$INTL",
  counterpart: "Intel",
  graphID: "chart_div3",
  price: 78.19,
  prev_price: 200.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 208.9,
  at_low_price: 114.33,
  change_money: 1300,
  change_percent: 35,
  market_cap: 4593000000,
  revenue: 10043121,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "C",
  stype: "Growth",
  sentiment: "BUY",
  sector: "TECH"
};

let eOS = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/EOS_Logo_2022.png",
  title: "eOS Corporation",
  ticker: "$EOS",
  counterpart: "Apple.",
  graphID: "chart_div4",
  price: 4167.17,
  prev_price: 200.19,
  todaysHighP: 0,
  todaysLowP: 0,
  at_high_price: 300.15,
  stock_volume: 6500000000,
  at_low_price: 243.12,
  change_money: 1300,
  change_percent: 35,
  market_cap: 132000000000,
  revenue: 10043121,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  rating: "SSS+",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let MV = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://www.frc.edu/businessservices/files/images/FRC_OnlyMountains_RGB_Color.png",
  title: "MountainView Technologies",
  ticker: "$MTV",
  counterpart: "Google",
  graphID: "chart_div5",
  price: 2198.19,
  todaysHighP: 0,
  todaysLowP: 0,
  prev_price: 200.19,
  stock_volume: 6500000000,
  at_high_price: 3310.37,
  at_low_price: 1789.1,
  change_money: 1300,
  change_percent: 35,
  market_cap: 175700000000,
  revenue: 10043121,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
};

let tech_stocks = [MACROSOFT, Intellect, eOS, SONY, MV, JP];

let theMouse = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2485px-Mickey_Mouse_head_and_ears.svg.png",
  title: "Mouse Incorporated",
  ticker: "$WALT",
  counterpart: "Walt Disney Co.",
  graphID: "0",
  price: 267.61,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let MidFlix = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://yt3.ggpht.com/fli98_BcJUHIZ2P545uEIXx7l6DvowQhU_FwY07wjdc51zgHfilR7VZ_nJ7QKXhDMoCDxtTS=s900-c-k-c0x00ffffff-no-rj",
  title: "MidFlix Incorporated",
  ticker: "$WALT",
  counterpart: "Netflix",
  graphID: "chart_KC",
  price: 368.17,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let Columbia = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Viacom_V_of_Doom.PNG",
  title: "Columbia Global",
  ticker: "$CGB",
  counterpart: "ViacomCBs/Paramount",
  graphID: "chart_KC",
  price: 39.19,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let Turner = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "http://static1.squarespace.com/static/5aeb5b62620b85880e854fd0/t/5afdd6fa0e2e720e3b71f1d8/1526585087745/FaviconT.png?format=1500w",
  title: "Turner Bros. Discovery",
  ticker: "$TM",
  counterpart: "Warner Bros Discovery",
  graphID: "1",
  price: 128.01,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let Concast = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://www.pngkey.com/png/full/225-2251718_comedy-central-logo-comcast-cable-logo-c.png",
  title: "Concast Ventures",
  ticker: "$CCV",
  counterpart: "Comcast/NBCUniversal",
  graphID: "2",
  price: 113.11,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth/Value Hybrid",
  sentiment: "BUY",
  sector: "TECH"
};

let EA = {
  Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
  img_link:
    "https://seeklogo.com/images/E/ea-electronic-arts-logo-24CACE2F89-seeklogo.com.png",
  title: "Exceedingly-Average Software",
  ticker: "$EA",
  counterpart: "Electronic Arts",
  graphID: "3",
  price: 168.79,
  prev_price: 400.19,
  todaysHighP: 0,
  todaysLowP: 0,
  stock_volume: 6500000000,
  at_high_price: 300,
  at_low_price: 280,
  change_money: 130.41,
  change_percent: 35,
  market_cap: 2630000000000,
  revenue: 121400560210,
  expenses: 1010010,
  net_income: 10000000,
  debt: 10202011,
  liq_assets: 1000010,
  owned_shares: 0,
  rating: "S",
  stype: "Growth",
  sentiment: "BUY",
  sector: "ENTERTAINMENT"
};

let ent_stocks = [theMouse, Concast, Turner, MidFlix, Columbia, EA];

// let MidFlix = {
//           Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
//           img_link: "https://yt3.ggpht.com/fli98_BcJUHIZ2P545uEIXx7l6DvowQhU_FwY07wjdc51zgHfilR7VZ_nJ7QKXhDMoCDxtTS=s900-c-k-c0x00ffffff-no-rj",
//           title:"MidFlix Incorporated",
//           ticker:"$WALT",
//           graphID: "chart_MS",
//           price: 248.19,
//           prev_price: 400.19,
//           todaysHighP: 0,
//           todaysLowP: 0,
//           stock_volume: 6500000000,
//           at_high_price: 300,
//           at_low_price: 280,
//           change_money: 130.41,
//           change_percent: 35,
//           market_cap: 2630000000000,
//           revenue: 121400560210,
//           expenses: 1010010,
//           net_income: 10000000,
//           debt: 10202011,
//           liq_assets: 1000010,
//           owned_shares: 0,
// }

// let Columbia = {
//           Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
//           img_link: "https://static.wikia.nocookie.net/diamondwindows/images/6/6b/V_of_Doom_%28HD%29.png/revision/latest?cb=20211016011000",
//           title:"Columbia Global",
//           ticker:"$CGB",
//           graphID: "chart_MS",
//           price: 248.19,
//           prev_price: 400.19,
//           todaysHighP: 0,
//           todaysLowP: 0,
//           stock_volume: 6500000000,
//           at_high_price: 300,
//           at_low_price: 280,
//           change_money: 130.41,
//           change_percent: 35,
//           market_cap: 2630000000000,
//           revenue: 121400560210,
//           expenses: 1010010,
//           net_income: 10000000,
//           debt: 10202011,
//           liq_assets: 1000010,
//           owned_shares: 0,
// }

// let Turner = {
//           Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
//           img_link: "http://static1.squarespace.com/static/5aeb5b62620b85880e854fd0/t/5afdd6fa0e2e720e3b71f1d8/1526585087745/FaviconT.png?format=1500w",
//           title:"Turner Media",
//           ticker:"$TM",
//           graphID: "chart_MS",
//           price: 248.19,
//           prev_price: 400.19,
//           todaysHighP: 0,
//           todaysLowP: 0,
//           stock_volume: 6500000000,
//           at_high_price: 300,
//           at_low_price: 280,
//           change_money: 130.41,
//           change_percent: 35,
//           market_cap: 2630000000000,
//           revenue: 121400560210,
//           expenses: 1010010,
//           net_income: 10000000,
//           debt: 10202011,
//           liq_assets: 1000010,
//           owned_shares: 0,
// }

// let Concast = {
//           Country: "https://images.emojiterra.com/twitter/512px/1f1fa-1f1f8.png",
//           img_link: "https://upload.wikimedia.org/wikipedia/en/6/64/Comcast_Ventures_logo.png",
//           title:"Concast Ventures",
//           ticker:"$TM",
//           graphID: "chart_MS",
//           price: 248.19,
//           prev_price: 400.19,
//           todaysHighP: 0,
//           todaysLowP: 0,
//           stock_volume: 6500000000,
//           at_high_price: 300,
//           at_low_price: 280,
//           change_money: 130.41,
//           change_percent: 35,
//           market_cap: 2630000000000,
//           revenue: 121400560210,
//           expenses: 1010010,
//           net_income: 10000000,
//           debt: 10202011,
//           liq_assets: 1000010,
//           owned_shares: 0,
// }

let scroller = "";

let TECH = { title: "TECH", stocks: tech_stocks };
let INDUST = { title: "INDUSTRIAL", stocks: ent_stocks };
let ENTER = { title: "ENTERTAINMENT", stocks: ent_stocks };

let sectors = [TECH, INDUST, ENTER];

sectors.forEach(function (sector) {
  scroller += '<span style="color:blue;"> ' + sector.title + "</span> |";

  sector.stocks.forEach(function (stock) {
    if (stock.price < 200) {
      arrow = "▼";
      scroller +=
        ' <span style="color:red;">' +
        stock.ticker +
        " " +
        stock.price +
        "▼ </span> |";
    } else {
      arrow = "▲";
      scroller +=
        ' <span style="color:green;">' +
        stock.ticker +
        " " +
        stock.price +
        "▲ </span> |";
    }
  });
});

let scrollers = `
BREAKING RIGHT NOW: FED CHAIR JAY POWELL EXPECTED TO ANNOUNCE FURTHER INTEREST RATE CLIMBS, EXPERTS EXPECT A RAISE OVER HALF A PERCENTAGE POINT | MACROSOFT IS SET TO ACQUIRE ABK FOR A RECORD $69 BILLION, DEAL EXPECTED TO CLOSE NEXT FISCAL YEAR |  GAS PRICES REACH NEW ALL-TIME HIGH, WHITE HOUSE CITES PANDEMIC AND SUPPLY CHAIN ISSUES FOR CURRENT WOES AT THE PUMP | AMERICANS ARE MISSING MORTGAGE PAYMENTS AT RECORD LEVELS, KCW & CO. TO DIVEST REAL ESTATE ASSETS | MOUSE CORPORATION ANNOUNCES NEW STREAMING SERVICE AIMED AT TACKLING MARKET LEADER MIDFLIX
`;

$(".stockScroll").css("font-size", "20px");
$(".stockScroll").css("font-weight", "800");
$(".stockScroll").css("border", "5px solid black");
$(".stockScroll").css("loop", "-1");
$(".stockScroll").css("margin", "0px");
$(".stockScroll").html(scroller);

$(".newsScroll").css("font-size", "20px");
$(".newsScroll").css("font-weight", "800");
$(".newsScroll").css("border", "5px solid red");
$(".newsScroll").css("background-color", "red");
$(".newsScroll").css("color", "white");
$(".newsScroll").css("margin", "0px");
$(".newsScroll").css("loop", "-1");
$(".newsScroll").html(scrollers);


// $(".bigPrompt").append(`
// <div class=${ppt}>
// <div class=${st}>
// <div class=${pho}>
// </div><img src=${MACROSOFT.img_link}>
// <div id=${na} class=${pho} ${na}>
// ${MACROSOFT.title}</div>
// <div id=${pho} class=${n2}>${MACROSOFT.ticker}</div>
// <div id=${pr} class=${pho}>${arrow + MACROSOFT.price}</div>
// <div class=${gph}>IMAGINE A GRAPH HERE FUC</div>
// <div class=${sts}>
// <table>
//   <tr>
//     <th>Country Of Origin</th>
//     <th>All-time High</th>
//     <th>All-time Low</th>
//     <th>Change ($)</th>
//     <th>Change (%)</th>
//     <th>Market Cap</th>
//     <th>Revenue</th>
//     <th>Operating Income</th>
//     <th>Debt</th>
//     <th>Cash-On-Hand</th>
//   </tr>
//   <tr>
//     <td class=${CCO}> <img src=${MACROSOFT.Country}> </td>
//     <td class=${ATHP}>${MACROSOFT.at_high_price}</td>
//     <td class=${ATLP}>${MACROSOFT.at_low_price}</td>
//     <td class=${changeMoney}>${MACROSOFT.change_money}</td>
//     <td class=${changePercent}>${MACROSOFT.change_percent}%</td>
//     <td class=${marketCap}>${MACROSOFT.market_cap}</td>
//     <td class=${revenue}>${MACROSOFT.revenue}</td>
//     <td class=${OPIncome}>${MACROSOFT.net_income}</td>
//     <td class=${Debt}>${MACROSOFT.debt}</td>
//     <td class=${COH}>${MACROSOFT.liq_assets}</td>
//   </tr>
//     </table>
// </div>
// </div>
// </div>`);

// <div id=${stock.graphID}" style=${standardChart}>


tech_stocks.forEach(function (stock) {
  
    if (stock.price < 200) {
      arrow = `<span style="color:red;"> ▼`;
 
    } else {
      arrow = ` <span style="color:green;"> ▲`;
    }
  
  
  $(".tech_bigPrompt").append(`
<div class=${ppt}>
<div class=${st}>
<div class=${pho}>
</div><img src=${stock.img_link}>
<div id=${na} class=${pho} ${na}>
${stock.title}</div>
<div id=${pho} class=${n2}>${stock.ticker}</div>
<div id=${pr} class=${pho}>${arrow + stock.price}</div>
<div class=${gph}>

</div>
</div>
<div class=${sts}>
<table>
  <div class="graph">
      <div id=${stock.graphID} style="width: 900px; height: 500px;"></div>
      </div>
      <div class="stats">
        <p>
        IRL COUNTERPART: ${stock.counterpart}
        </p>
        <p>
        SECTOR: ${stock.sector}
        </p>
        <p>
        RATING: ${stock.rating}
        </p>
        <p>     
        MARKET SENTIMENT: ${stock.sentiment}
        </p>
        <p>
        STOCK TYPE: ${stock.stype}
        </p>
      </div>
  </div>
  <h2> You own ${stock.owned_shares} shares of ${stock.title} </h2>
  <h2> Value of Current Stake: $${stock.owned_shares * stock.price} </h2>
    <th>Country Of Origin</th> 
    <th>All-time High</th>
    <th>All-time Low</th>
    <th>Change ($)</th>
    <th>Change (%)</th>
    <th>Market Cap</th>
    <th>Revenue</th>
    <th>Operating Income</th>
    <th>Debt</th>
    <th>Cash-On-Hand</th>
  </tr>
  <tr>
    <td class=${CCO}> <img src=${stock.Country}> </td>
    <td class=${ATHP}>${stock.at_high_price}</td>
    <td class=${ATLP}>${stock.at_low_price}</td>
    <td class=${changeMoney}>${stock.change_money}</td>
    <td class=${changePercent}>${stock.change_percent}%</td>
    <td class=${marketCap}>${stock.market_cap}</td>
    <td class=${revenue}>${stock.revenue}</td>
    <td class=${OPIncome}>${stock.net_income}</td>
    <td class=${Debt}>${stock.debt}</td>
    <td class=${COH}>${stock.liq_assets}</td>
  </tr>
<form style="border: 2px solid red; color: red;">
  <input id="stockName_input" style="display: inline-block;" placeholder="Ticker Symbol">
  <input id="shares_input" style="display: inline-block;" placeholder="Amount Of Shares">
  <button class="BUY" type="button"> Purchase </button>
  <button class="SELL" type="button"> Sell </button>
</form>
    </table>
</div>
</div>
</div>`);
  

});



let bttm = "helpbttm";

$("techBody").append(`<div class=${bttm}> </div>`);

ent_stocks.forEach(function (stock) {
  // $(".ent_bigPrompt").empty();
$(".ent_bigPrompt").append(`
<div class=${ppt}>
<div class=${st}>
<div class=${pho}>
</div><img src=${stock.img_link}>
<div id=${na} class=${pho} ${na}>
${stock.title}</div>
<div id=${pho} class=${n2}>${stock.ticker}</div>
<div id=${pr} class=${pho}>${arrow + stock.price}</div>
<div class=${gph}>

</div>
</div>
<div class=${sts}>
<table>
  <div class="graph">
      <div class="chart_div" style="width: 900px; height: 500px;"></div>
      </div>
      <div class="stats">
        <p>
        IRL COUNTERPART: ${stock.counterpart}
        </p>
        <p>
        SECTOR: ${stock.sector}
        </p>
        <p>
        RATING: ${stock.rating}
        </p>
        <p>     
        MARKET SENTIMENT: ${stock.sentiment}
        </p>
        <p>
        STOCK TYPE: ${stock.stype}
        </p>
      </div>
  </div>
  <h2> You own ${stock.owned_shares} shares of ${stock.title} </h2>
  <h2> Value of Current Stake: $${stock.owned_shares * stock.price} </h2>
    <th>Country Of Origin</th> 
    <th>All-time High</th>
    <th>All-time Low</th>
    <th>Change ($)</th>
    <th>Change (%)</th>
    <th>Market Cap</th>
    <th>Revenue</th>
    <th>Operating Income</th>
    <th>Debt</th>
    <th>Cash-On-Hand</th>
  </tr>
  <tr>
    <td class=${CCO}> <img src=${stock.Country}> </td>
    <td class=${ATHP}>${stock.at_high_price}</td>
    <td class=${ATLP}>${stock.at_low_price}</td>
    <td class=${changeMoney}>${stock.change_money}</td>
    <td class=${changePercent}>${stock.change_percent}%</td>
    <td class=${marketCap}>${stock.market_cap}</td>
    <td class=${revenue}>${stock.revenue}</td>
    <td class=${OPIncome}>${stock.net_income}</td>
    <td class=${Debt}>${stock.debt}</td>
    <td class=${COH}>${stock.liq_assets}</td>
  </tr>
<form style="border: 2px solid red; color: red;">
  <input id="stockName_input" style="display: inline-block;" placeholder="Ticker Symbol">
  <input id="shares_input" style="display: inline-block;" placeholder="Amount Of Shares">
  <button class="BUY" type="button"> Purchase </button>
  <button class="SELL" type="button"> Sell </button>
</form>
    </table>
</div>
</div>
</div>`);
  
  
});



$("#log").click(function () {
  let usernameG = $("#Uname").val();
  let passwordG = $("#Pass").val();
  console.log(passwordG);
  console.log(usernameG);

  if (usernameG == username && passwordG == pin) {
    $(".popup").text("");
    window.location.replace("atm.html");
  } else if (usernameG == "" || passwordG == "") {
    $(".popup").text("");
    $(".popup").css("color", "red");
    $(".popup").css("text-align", "center");
    $(".popup").css("display", "flex");
    $(".popup").css("justify-content", "center");
    $(".popup").text("PLEASE SPECIFY ALL LOGIN CREDENTINALS.");
  } else {
    $(".popup").css("color", "red");
    $(".popup").css("text-align", "center");
    $(".popup").css("display", "flex");
    $(".popup").css("justify-content", "center");
    $(".popup").text("INVALID USERNAME AND/OR PASSWORD. PLEASE TRY AGAIN.");
  }
});

//AUDIOS
var startSound = new Audio(
  "https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/missnote1_4402b.ogg?v=1654012062872"
);
var homeSound = new Audio(
  "https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/mixkit-sci-fi-click-900.wav?v=1652804373817"
);

$("#start").click(function () {
  audio.pause();
  startSound.play();

  $("body").empty();
  $("body").css(
    "background",
    `url('http://www.stadtteilschule-oejendorf.de/Unterricht/files/stacks_image_2936.png')`
  );
  $("body").css("background-color", "black");
  $("body").append(`
<div class="fulltitle">
<div>
<h1 class="btitle">A SHIFT AT WALL STREET: ROAD TO</h1>
</div>
<div class="bigloser">
<h1 id="lose">BANKRUPTCY
</h1>
</div>
</div>

<iframe style="border: 2px solid red;" width="1080" height="480"
src="https://www.youtube.com/embed/RcXNJRw-YrQ?autoplay=1">
</iframe>

<button id="continueB"> CONTINUE </button>
`);
});

$("#NSBN").click(function () {
  window.location.replace("nsbn.html");
  $("body").css("background-img", "none");

  console.log("This is going through.");
});

$("#Robin").click(function () {
  window.location.replace("stocks.html");
  $("body").css("background-img", "none");

  console.log("This is going through.");
});

$("#Clock").click(function () {
  window.location.replace("dashboard.html");
  $("body").css("background-img", "none");

  console.log("This is going through.");
});

$("#KC").click(function () {
  window.location.replace("crypto.html");
  $("body").css("background-img", "none");
  console.log(transactionlog);

  console.log("This is going through.");
});

$("#Settings").click(function () {
  window.location.replace("index.html");
  $("body").css("background-img", "none");

  console.log("This is going through.");
});

$("#Game").click(function () {
  window.location.replace("mcronalds.html");
  $("body").css("background-img", "none");

  console.log("This is going through.");
});

$(".homeb").click(function () {
  homeSound.play();
  setTimeout(() => {
    window.location.replace("homeScreen.html");
    $("body").css("background-img", "none");
  }, 500);

  console.log("This is going through.");
});

$(document).on('click','#continueB',function(){
    showMakeAndHold();    
});

function showMakeAndHold() {
  window.location.replace("homeScreen.html");
  $("body").css("background-img", "none");
  window.location.replace("homeScreen.html");
  $("body").css("background-img", "none");
  console.log("This is going through.");
}

$("#reload").click(function () {
  window.location.replace("index.html");
});

$("#witt").click(function () {
  $(".atm_content").empty();
  $(".atm_content").append(`
<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189); font-style:bold;">
  <h2> Your Current Account Balance is $${userMoolaBal} </h2>
  <h2> You have $${0} cash on hand</h2>
  <input id="witt_input" style="display: inline-block;" placeholder="Withdrawal Amount">
  <button class="witt_confirm" type="button"> Confirm </button>
</form>

`);
});

$(".BUY").click(function () {
  ent_stocks.forEach(function (stock) {
    if ($("#stockName_input").val() == stock.ticker) {
      stock.owned_shares += 1;
      console.log(stock.owned_shares);
      transactionlog += '<button class="custG"id="witt"> TESTING </button> ';
      console.log(transactionlog);
      return;
    }
  });
});

$("document").on("click", ".witt_confirm", function () {
  console.log("test");

  if ($("#witt_input").val() > userMoolaBal) {
    $(".atm_content").empty();
    console.log("works");
    $(".atm_content").append(`
<form style="border: 2px solid red; color: red;">
  <h2> You know you're too broke for that, please enter an acceptable amount. </h2>
  <input style="display: inline-block;" placeholder="Withdrawal Amount">
  <button id="witt_confirm" type="button"> Confirm </button>
</form>
`);
  }
});

$("#depp").click(function () {
  $(".atm_content").empty();
  $(".atm_content").append(`<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189);">
<h2> Your Current Account Balance is $${userMoolaBal} </h2>
<h2> You have $${0} cash on hand</h2>
  <input id="witt_input" style="display: inline-block;" placeholder="Deposit Amount">
  <button class="witt_confirm" type="button"> Confirm </button>
</form>
`);
});

$("#loans").click(function () {
  $(".atm_content").empty();
  $(".atm_content").append(`<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189);">
<h2> Current Interest Rates Stand At 5.788% </h2>
  <input id="witt_input" style="display: inline-block;" placeholder="Loan Amount">
  <button class="witt_confirm" type="button"> Confirm </button>
</form>
`);
});

$("#accsum").click(function () {
  $(".atm_content").empty();
  $(".atm_content").append(`<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189);">
<h2> Your Current Account Balance is $${userMoolaBal} </h2>`);
  $(".atm_content").append(`<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189);">
<h2> Your Currently Owe $${0} </h2>`);
    $(".atm_content").append(`<form style="border: 5px solid rgb(0,92,189); color: rgb(0,92,189);">
<h2> Your Next Expected Interest Payment is Due in ${"N/A"} time segements</h2>`);
});

$("#tlog").click(function () {
  $(".atm_content").empty();
  console.log("YES THIS IS WORKING");
  console.log(transactionlog);
  $(".atm_content").append("<span> </span>" + transactionlog + ``);
});

$("#mcash").click(function () {
  window.location.replace("mcgame.html");
  // window.alert("sometext");
});

$("#mcdiv").click(function () {
  window.location.replace("mcstore.html");
});

// let filletHTML = `<span class="fillet MCitem" title="Fillet Burger | $2.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   fillet burger</span>`;

// let beefburgHTML = `<span class="beefBurg MCitem" title="All-Beef Meatlovers' Burger | $3.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   all-beef meatlovers' burger</span>`;

// let wingsHTML = `<span class="wings MCitem" title="Chicken Wings | $4.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   side of wings</span>`;

// let baconburgHTML = `<span class="bacon MCitem" title="O-Bacon Burger | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   o-bacon burger</span>`;

// let chicburgHTML = `<span class="chic MCitem" title="Chicken Sandwich | $3.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   chicken burger</span>`;

// let shrimpHTML = `<span class="cajun MCitem" title="Cajun Shrimp Sub | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   cajun shrimp sub</span>`;

// let impossibleHTML = `<span class="imposs MCitem" title="All-Vegan Impossible Burger | $4.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   impossible burger</span>`;

// let dsbeefburgHTML = `<span class="dsbeef MCitem" title="Double-Stacked Meatlovers' Burger | $4.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   double-stacked meatlovers' burger</span>`;

// let nuggetHTML = `<span class="nugget MCitem" title="Nuggets | $2.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   side of nuggets </span>`;

// let friesHTML = `<span class="fries MCitem" title="French Fries | $1.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   side of fries</span>`;

// let ribBurgHTML = `<span class="ribBurg MCitem" title="BigRib-Supreme Burger | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   bigRib-Supreme burger</span>`;

// let sodaHTML = `<span class="soda MCitem" title="Fillet-Burger | $1.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   can of soda </span>`;

// let coffeeHTML = `<span class="coffee MCitem" title="Cup Of Coffee | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   cup of coffee </span>`;

// let waterHTML = `<span class="water MCitem" title="Cup OF Water | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   cup of water </span>`;

// let milkshakeHTML = `<span class="mshake MCitem" title="Milkshake | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
//   milkshake </span>`;
$("#garbageDump").append('<h1> thats crazy</h1>')

// $("#garbageDump").append(`
//     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
//     <script type="text/javascript">
//       google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(drawChart);

//   function drawChart() {
//     let today = "Mon"
//     let todaysHigh = ${stock.};
//     let todaysLow = ${};
//     let todaysClose = ${};
//     let todaysOpen = ${};
    
//     var data = google.visualization.arrayToDataTable([
//       [today, todaysHigh, todaysLow, todaysClose, todaysOpen],
//       ['Tue', 0, 0, 0, 0],
//       ['Wed', 0, 0, 0, 0],
//       ['Thu', 0, 0, 0, 0],
//       ['Fri', 0, 0, 0, 0]
//       // Treat first row as data as well.
//     ], true);

//     var options = {
//       legend:'none'
//     };

//     var chart = new google.visualization.CandlestickChart(document.getElementById('$graphID'));

//     chart.draw(data, options);
//   }
//     </script>
// `);