import React, { useEffect, useState, useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import "./../../assets/css/price-comparison.scss";
import "./../../assets/css/price-style.scss";
import binanceicon from "./../../assets/img/exchnages-binance.png";
import ftxicon from "./../../assets/img/exchnages-ftx.png";
import coinbaseicon from "./../../assets/img/exchnages-coinbase.png";
import huobiglobalicon from "./../../assets/img/exchnages-huobiglobal.png";
import bitmexicon from "./../../assets/img/exchnages-bitmex.png";
import krakenicon from "./../../assets/img/exchnages-kraken.png";
import arrowleft from "./../../assets/img/uploads/left-arrow.svg";
import arrowright from "./../../assets/img/uploads/right-arrow.svg";
import PriceItemList from "./../../components/price-comparison/comparison";
import BinaceList from "./../../components/price-comparison/binance";
import FtxList from "./../../components/price-comparison/ftx";
import BitmexList from "./../../components/price-comparison/bitmex";
import CoinBaseList from "./../../components/price-comparison/coinbase";
import HuobiList from "./../../components/price-comparison/huobi";
import KrakenList from "./../../components/price-comparison/kraken";
import Pagination from "./../../components/price-comparison/pagination";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";

const pako = require("pako");

const PriceComparisonPage = () => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  const [loading, setLoading] = useState(false);
  const [pricedata, setPriceData] = useState([]);
  const [pagesize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  let huobiwebsocket;
  let bitmexwebsocket;
  let krakenwebsocket;
  let coinbasewebsocket;
  let Ftxwebsocket;
  var id;
  var ping;
  var allcoin;

  var lastCol = document.getElementById("last-col");
  var firstCol = document.getElementById("first-col");

  function isElementVisible(el) {
    var rect = el.getBoundingClientRect(),
      vWidth = window.innerWidth || document.documentElement.clientWidth,
      vHeight = window.innerHeight || document.documentElement.clientHeight,
      efp = function (x, y) {
        return document.elementFromPoint(x, y);
      };

    // Return false if it's not in the viewport
    if (
      rect.right < 0 ||
      rect.bottom < 0 ||
      rect.left > vWidth ||
      rect.top > vHeight
    )
      return false;

    // Return true if any of its four corners are visible
    return (
      el.contains(efp(rect.left, rect.top)) ||
      el.contains(efp(rect.right, rect.top)) ||
      el.contains(efp(rect.right, rect.bottom)) ||
      el.contains(efp(rect.left, rect.bottom))
    );
  }

  const prevEvent = () => {
    const ele = document.getElementById("container");
    let items = document.querySelector(".items");
    let itemWidth = items.offsetWidth;
    isElementVisible(firstCol)
      ? (ele.scrollLeft = itemWidth * 5)
      : (ele.scrollLeft -= items.offsetWidth);
  };

  const nextEvent = () => {
    const ele = document.getElementById("container");
    let items = document.querySelector(".items");

    isElementVisible(lastCol)
      ? (ele.scrollLeft = 0)
      : (ele.scrollLeft += items.offsetWidth);
  };
  const bitmexWebSocketGet = () => {
    bitmexwebsocket = new WebSocket(
      "wss://www.bitmex.com/realtime?subscribe=instrument"
    );
    bitmexwebsocket.onopen = function (evt) {
      onOpenbitmex(evt);
    };
    bitmexwebsocket.onmessage = function (evt) {
      onMessagebitmex(evt);
    };
    bitmexwebsocket.onerror = function (evt) {
      //onError(evt);
    };
  };
  const onOpenbitmex = () => {
    fetch(
      "http://" +
        process.env.REACT_APP_HOST +
        ":" +
        process.env.REACT_APP_PORT +
        "/coins/"
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            for (var btx in data.coins) {
              var market = data.coins[btx].symbol + "-USDT";

              var obj = { op: "subscribe", channel: "ticker", market: market };
              var myJSON = JSON.stringify(obj);
              bitmexwebsocket.send(myJSON);
            }
          });
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  const onMessagebitmex = (evt) => {
    try {
      var payloadB = JSON.parse(evt.data);

      if ((payloadB.action = "update" && payloadB.data[0].askPrice != null)) {
        var priceBit = parseFloat(payloadB.data[0].askPrice);
        var priceBitb = parseFloat(payloadB.data[0].bidPrice);
        id = payloadB.data[0].symbol;

        document.getElementById(id).innerText = priceBit;
        document.getElementById(id).style.color =
          parseFloat(document.getElementById("o" + id).innerText) > priceBit
            ? "black"
            : priceBit > parseFloat(document.getElementById("o" + id).innerText)
            ? "green"
            : "red";
        setInterval(function () {
          try {
            document.getElementById(id).style.color = "black";
          } catch (err) {
            //console.log(err)
          }
        }, 5000);
        document.getElementById("o" + id).innerText = priceBit;

        document.getElementById(id + "b").innerText = priceBitb;
        document.getElementById(id + "b").style.color =
          parseFloat(document.getElementById("o" + id + "b").innerText) >
          priceBitb
            ? "black"
            : priceBitb >
              parseFloat(document.getElementById("o" + id + "b").innerText)
            ? "green"
            : "red";
        setInterval(function () {
          try {
            document.getElementById(id + "b").style.color = "black";
          } catch (err) {
            //console.log(err)
          }
        }, 5000);
        document.getElementById("o" + id + "b").innerText = priceBitb;
      }
    } catch (e) {}
  };
  const huobiWebSocketGet = () => {
    try {
      huobiwebsocket = new WebSocket("wss://api.huobi.pro/feed");
      huobiwebsocket.onopen = (evt) => {
        onOpenhuobi(evt);
      };
      huobiwebsocket.onerror = () => {};

      huobiwebsocket.onmessage = (evt) => {
        onMessagehuobi(evt);
      };
      huobiwebsocket.onclose = (evt) => {};
    } catch (e) {}
  };
  const onOpenhuobi = (evt) => {
    var marketss = [
      "btcusdt",
      "ethusdt",
      "bnbusdt",
      "usdtusdt",
      "solusdt",
      "adausdt",
      "xrpusdt",
      "usdcusdt",
      "lunausdt",
      "avaxusdt",
      "dotusdt",
      "dogeusdt",
      "shibusdt",
      "maticusdt",
      "crousdt",
      "wbtcusdt",
      "uniusdt",
      "ltcusdt",
      "linkusdt",
      "ustusdt",
      "daiusdt",
      "algousdt",
      "nearusdt",
      "bchusdt",
      "trxusdt",
      "xlmusdt",
      "fttusdt",
      "vetusdt",
      "hbarusdt",
      "sandusdt",
      "filusdt",
      "icpusdt",
      "etcusdt",
      "thetausdt",
      "ftmusdt",
      "xtzusdt",
      "xmrusdt",
      "miotausdt",
      "galausdt",
      "leousdt",
      "aaveusdt",
      "grtusdt",
      "eosusdt",
      "lrcusdt",
      "oneusdt",
      "flowusdt",
      "bttusdt",
      "mkrusdt",
      "enjusdt",
      "bsvusdt",
      "ksmusdt",
      "crvusdt",
      "zecusdt",
      "xecusdt",
      "batusdt",
      "arusdt",
      "chzusdt",
      "wavesusdt",
      "htusdt",
      "dashusdt",
      "hotusdt",
      "compusdt",
      "nexousdt",
      "xemusdt",
      "tusdusdt",
      "iotxusdt",
      "1inchusdt",
      "yfiusdt",
      "dcrusdt",
      "icxusdt",
      "qtumusdt",
      "rvnusdt",
      "lptusdt",
      "omgusdt",
    ];
    for (var i in marketss) {
      var objh = {
        sub: "market." + marketss[i] + ".mbp.150",
        id: marketss[i],
      };
      var myJSONh = JSON.stringify(objh);

      huobiwebsocket.send(myJSONh);
    }
  };
  const onMessagehuobi = (evt) => {
    var blob = evt.data;
    var reader = new FileReader();
    reader.onload = function (e) {
      var ploydata = new Uint8Array(e.target.result);
      var msg = pako.inflate(ploydata, { to: "string" });
      var datah = JSON.parse(msg);
      if (msg.search("ping") > 0) {
        huobiwebsocket.send(JSON.stringify({ pong: datah.ping }));
        return;
      } else if (typeof datah.tick != "undefined") {
        var idBh = datah.ch.split(".")[1].toUpperCase() + "h";
        var idBhb = datah.ch.split(".")[1].toUpperCase() + "hb";
        var priceBh = parseFloat(datah.tick.asks[0]);
        var priceBhb = parseFloat(datah.tick.bids[0]);

        if (
          priceBh != null &&
          isNaN(priceBh) === false &&
          document.getElementById(idBh) != null
        ) {
          document.getElementById(idBh).innerText = priceBh;

          document.getElementById(idBh).style.color =
            parseFloat(document.getElementById("o" + idBh).innerText) ===
            priceBh
              ? "black"
              : priceBh >
                parseFloat(document.getElementById("o" + idBh).innerText)
              ? "green"
              : "red";
          setInterval(function () {
            try {
              document.getElementById(idBh).style.color = "black";
            } catch (e) {}
          }, 5000);

          document.getElementById("o" + idBh).innerText = priceBh;
        }
        if (
          priceBhb != null &&
          isNaN(priceBhb) === false &&
          document.getElementById(idBhb) != null
        ) {
          document.getElementById(idBhb).innerText = priceBhb;

          document.getElementById(idBhb).style.color =
            parseFloat(document.getElementById("o" + idBhb).innerText) ===
            priceBhb
              ? "black"
              : priceBhb >
                parseFloat(document.getElementById("o" + idBhb).innerText)
              ? "green"
              : "red";
          setInterval(function () {
            if (document.getElementById(idBhb)) {
              document.getElementById(idBhb).style.color = "black";
            }
          }, 5000);
          if (document.getElementById("o" + idBhb)) {
            document.getElementById("o" + idBhb).innerText = priceBhb;
          }
        }
      }
    };
    reader.readAsArrayBuffer(blob, "utf-8");
  };
  const krakenWebSocketGet = () => {
    krakenwebsocket = new WebSocket("wss://ws.kraken.com");
    krakenwebsocket.onopen = function (evt) {
      onOpenkraken(evt);
    };
    krakenwebsocket.onmessage = function (evt) {
      onMessagekraken(evt);
    };
    krakenwebsocket.onerror = function (evt) {
      //onError(evt);
    };
  };
  const onOpenkraken = (evt) => {
    var marketskr = [
      "XBT/USD",
      "ETH/USD",
      "USDT/USD",
      "XRP/USD",
      "ADA/USD",
      "USD/USD",
      "DOT/USD",
      "LTC/USD",
      "DAI/USD",
      "LINK/USD",
      "BCH/USD",
      "EOS/USD",
    ];
    var obj = {
      event: "subscribe",
      pair: marketskr,
      subscription: { name: "ticker" },
    };
    var myJSON = JSON.stringify(obj);

    krakenwebsocket.send(myJSON);
  };
  const onMessagekraken = (evt) => {
    try {
      var payload = JSON.parse(evt.data);

      if (payload[1].a[0]) {
        var idK = payload[3];
        var priceK = parseFloat(payload[1].a[0]);
        var priceKb = parseFloat(payload[1].b[0]);
        if (document.getElementById(idK)) {
          document.getElementById(idK).innerText = priceK;
          document.getElementById(idK).style.color =
            parseFloat(document.getElementById("o" + idK).innerText) > priceK
              ? "black"
              : priceK >
                parseFloat(document.getElementById("o" + idK).innerText)
              ? "green"
              : "red";
          setInterval(function () {
            if (document.getElementById(idK)) {
              document.getElementById(idK).style.color = "black";
            }
          }, 5000);
        }
        if (document.getElementById("o" + idK)) {
          document.getElementById("o" + idK).innerText = priceK;
        }

        if (document.getElementById(idK + "b")) {
          document.getElementById(idK + "b").innerText = priceKb;
          document.getElementById(idK + "b").style.color =
            parseFloat(document.getElementById("o" + idK + "b").innerText) >
            priceKb
              ? "black"
              : priceKb >
                parseFloat(document.getElementById("o" + idK + "b").innerText)
              ? "green"
              : "red";
          setInterval(function () {
            if (document.getElementById(idK + "b")) {
              document.getElementById(idK + "b").style.color = "black";
            }
          }, 5000);
        }
        if (document.getElementById(idK + "b")) {
          document.getElementById(idK + "b").innerText = priceKb;
        }
      }
    } catch (e) {
      //console.log(e);
    }
  };
  const coinbaseWebSocketGet = () => {
    coinbasewebsocket = new WebSocket("wss://ws-feed.pro.coinbase.com");
    coinbasewebsocket.onopen = function (evt) {
      onOpencoinbase(evt);
    };
    coinbasewebsocket.onmessage = function (evt) {
      onMessagecoinbase(evt);
    };
    coinbasewebsocket.onerror = function (evt) {
      //onError(evt);
    };
  };
  const onOpencoinbase = (evt) => {
    var marketsCb = [
      "ETH-USD",
      "BTC-USD",
      "BNB-USD",
      "USDT-USD",
      "SOL-USD",
      "XRP-USD",
      "ADA-USD",
      "USDC-USD",
      "LUNA-USD",
      "AVAX-USD",
      "DOGE-USD",
      "SHIB-USD",
      "MATIC-USD",
      "CRO-USD",
      "WBTC",
      "LTC-USD",
      "UNI-USD",
      "LINK-USD",
      "UST-USD",
      "DAI-USD",
      "ALGO",
      "BCH-USD",
      "TRX-USD",
      "NEAR-USD",
      "XLM-USD",
      "AXS-USD",
      "ATOM-USD",
      "MANA-USD",
      "FIL-USD",
      "ETC-USD",
      "ICP-USD",
      "XTZ-USD",
      "GRT-USD",
      "EOS-USD",
      "GALA-USD",
      "LRC-USD",
      "AAVE-USD",
      "MKR-USD",
      "CRV-USD",
      "ENJ-USD",
      "QNT-USD",
      "AMP-USD",
      "BAT-USD",
      "CGLC-USD",
      "DASH-USD",
      "COMP-USD",
      "IOTX-USD",
      "YFI-USD",
      "1INCH-USD",
    ];

    var obj = {
      type: "subscribe",
      channels: [{ name: "ticker", product_ids: marketsCb }],
    };
    var myJSON = JSON.stringify(obj);

    coinbasewebsocket.send(myJSON);
  };
  const onMessagecoinbase = (evt) => {
    try {
      var payload = JSON.parse(evt.data);
      if (payload.best_ask) {
        var idcb = payload.product_id;
        var pricecb = parseFloat(payload.best_ask);
        var pricecbb = parseFloat(payload.best_bid);
        document.getElementById(idcb).innerText = pricecb;
        document.getElementById(idcb).style.color =
          parseFloat(document.getElementById("o" + idcb).innerText) > pricecb
            ? "black"
            : pricecb >
              parseFloat(document.getElementById("o" + idcb).innerText)
            ? "green"
            : "red";
        setInterval(function () {
          document.getElementById(idcb).style.color = "black";
        }, 5000);
        document.getElementById("o" + idcb).innerText = pricecb;

        document.getElementById(idcb + "b").innerText = pricecbb;
        document.getElementById(idcb + "b").style.color =
          parseFloat(document.getElementById("o" + idcb + "b").innerText) >
          pricecbb
            ? "black"
            : pricecbb >
              parseFloat(document.getElementById("o" + idcb + "b").innerText)
            ? "green"
            : "red";
        setInterval(function () {
          document.getElementById(idcb + "b").style.color = "black";
        }, 5000);
        document.getElementById("o" + idcb + "b").innerText = pricecbb;
      }
    } catch (e) {
      //console.log(e);
    }
  };
  const FtxWebSocketGet = () => {
    Ftxwebsocket = new WebSocket("wss://ftx.com/ws/");
    Ftxwebsocket.onopen = function (evt) {
      onOpenFTX(evt);
    };
    Ftxwebsocket.onmessage = function (evt) {
      onMessageFTX(evt);
    };

    Ftxwebsocket.onerror = function (evt) {
      //onError(evt);
    };
  };
  const onOpenFTX = (evt) => {
    fetch(
      "http://" +
        process.env.REACT_APP_HOST +
        ":" +
        process.env.REACT_APP_PORT +
        "/coins/"
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            for (let ftx in data.coins) {
              var marketFtx = data.coins[ftx].symbol + "-PERP";
              var obj = {
                op: "subscribe",
                channel: "ticker",
                market: marketFtx,
              };
              var myJSON = JSON.stringify(obj);

              Ftxwebsocket.send(myJSON);
            }
          });
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  const onMessageFTX = (evt) => {
    let payload;

    try {
      payload = JSON.parse(evt.data);
    } catch (e) {}

    if (payload) {
      if (payload.channel === "ticker" && payload.type === "update") {
        var price = parseFloat(payload.data.ask);
        var priceb = parseFloat(payload.data.bid);
        id = payload.market;
        if (document.getElementById(id)) {
          document.getElementById(id).innerText = price;
          document.getElementById(id).style.color =
            parseFloat(document.getElementById("o" + id).innerText) > price
              ? "BLblackACK"
              : price > parseFloat(document.getElementById("o" + id).innerText)
              ? "green"
              : "red";
          setInterval(function () {
            if (document.getElementById(id)) {
              document.getElementById(id).style.color = "black";
            }
          }, 5000);
        }
        if (document.getElementById("o" + id)) {
          document.getElementById("o" + id).innerText = price;
        }
        if (document.getElementById(id + "b")) {
          document.getElementById(id + "b").innerText = priceb;
          if (document.getElementById("o" + id + "b")) {
            document.getElementById(id + "b").style.color =
              parseFloat(document.getElementById("o" + id + "b").innerText) >
              priceb
                ? "black"
                : priceb >
                  parseFloat(document.getElementById("o" + id + "b").innerText)
                ? "green"
                : "red";
          }
          setInterval(function () {
            if (document.getElementById(id + "b")) {
              document.getElementById(id + "b").style.color = "black";
            }
          }, 5000);
        }

        if (document.getElementById(id + "b")) {
          document.getElementById(id + "b").innerText = priceb;
        }
      } else if (payload.type === "pong") ping = "done";
    }
  };
  const handleClick = (number) => {
    setPage(number);
    setLoading(false);
  };
  const CurrencyTable = () => {
    fetch(
      "http://" +
        process.env.REACT_APP_HOST +
        ":" +
        process.env.REACT_APP_PORT +
        "/coins/"
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            allcoin = data.coins;
            setPriceData(allcoin.slice((page - 1) * pagesize, page * pagesize));
            setTotalPages(Math.ceil(allcoin.length / pagesize));
            setLoading(true);
            var marklist = [];
            for (let i = 0; i < allcoin.length; i++) {
              var marketBinance = allcoin[i].symbol.toLowerCase() + "usdt";
              marklist.push(marketBinance + "@ticker");
            }
            if (isFirstLoading) {
              setIsFirstLoading(false);
              const wsbn = new WebSocket(
                "wss://stream.binance.com:9443/ws/" + marklist.join("/")
              );

              wsbn.onmessage = (evt) => {
                var object = JSON.parse(evt.data);

                let priceB = parseFloat(object.a);
                let priceBb = parseFloat(object.b);
                var idB = object.s;
                if (priceB != null) {
                  if (document.getElementById(idB)) {
                    document.getElementById(idB).innerText = priceB;
                    document.getElementById(idB).style.color =
                      parseFloat(
                        document.getElementById("o" + idB).innerText
                      ) === priceB
                        ? "black"
                        : priceB >
                          parseFloat(
                            document.getElementById("o" + idB).innerText
                          )
                        ? "green"
                        : "red";
                    setInterval(function () {
                      if (document.getElementById(idB)) {
                        document.getElementById(idB).style.color = "black";
                      }
                    }, 5000);
                  }
                  if (document.getElementById("o" + idB)) {
                    document.getElementById("o" + idB).innerText = priceB;
                  }
                }
                if (priceBb != null) {
                  if (document.getElementById(idB + "b")) {
                    document.getElementById(idB + "b").innerText = priceBb;
                    document.getElementById(idB + "b").style.color =
                      parseFloat(
                        document.getElementById("o" + idB + "b").innerText
                      ) === priceBb
                        ? "black"
                        : priceBb >
                          parseFloat(
                            document.getElementById("o" + idB + "b").innerText
                          )
                        ? "green"
                        : "red";
                    setInterval(function () {
                      if (document.getElementById(idB + "b")) {
                        document.getElementById(idB + "b").style.color =
                          "black";
                      }
                    }, 5000);
                  }
                  if (document.getElementById("o" + idB + "b")) {
                    document.getElementById("o" + idB + "b").innerText =
                      priceBb;
                  }
                }

                wsbn.onerror = (err) => {
                  console.log(err);
                };
              };
            }
          });
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  const pageChange = (option) => {
    setLoading(false);
    setPage(1);
    setPageSize(option);
  };
  useEffect(() => {
    bitmexWebSocketGet();
    krakenWebSocketGet();
    coinbaseWebSocketGet();
    FtxWebSocketGet();
    huobiWebSocketGet();
  }, []);

  useEffect(() => {
    CurrencyTable();
  }, [page, pagesize]);

  return (
    <section className="exchnages-bg">
      <div className="card mb-0 d-none d-lg-block">
        <div className="card-body">
          <a href="#0" className="text-dull">
            TraderPro &gt;{" "}
          </a>
          <a href="#0" className="theme-color font-bold">
            <ShowBreadcrumbs />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="dropdown mob-ml-10">
            <div className="row">
              <div className="col-2">
                <legend className="small-legend">Currency:</legend>

                <select className="pc-select-input">
                  <option value={"USD"}>USD</option>
                </select>
              </div>
              <div className="ms-5 col-2">
                <legend className="small-legend">Coins per page:</legend>
                <select
                  className="pc-select-input"
                  onChange={(e) => pageChange(e.target.value)}
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
          </div>

          <div className="carouselcontrol">
            <button
              className="carousel-control-prev custom-prev"
              type="button"
              data-bs-target="#carouselCryptoList"
              data-bs-slide="prev"
              id="prev-btn"
              onClick={prevEvent}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">
                <img
                  src={arrowleft}
                  style={{ height: "18px", paddingTop: "5px" }}
                  alt="..."
                />
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next custom-next"
              type="button"
              data-bs-target="#carouselCryptoList"
              data-bs-slide="next"
              id="next-btn"
              onClick={nextEvent}
            >
              <span className="carousel-control-next-icon" aria-hidden="true">
                <img
                  src={arrowright}
                  style={{ height: "18px", paddingTop: "5px" }}
                  alt="..."
                />
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="exchnages-boxs">
            <ul id="coinList" className="coin-lists">
              <li className="border-0" style={{ height: "70px" }}>
                <div className="d-flex not-shown">
                  <div className="my-auto"></div>
                  <div>
                    <div className="flex-column">
                      <span className="font-14 font-bold"></span>
                      <div className="divider"></div>
                      <span className="font-12 d-block"></span>
                    </div>
                  </div>
                </div>
              </li>
              {loading ? <PriceItemList coinList={pricedata} /> : <div></div>}
            </ul>
            <div id="#valueCoinList" className="overflow-scroll-x">
              <div
                className="list-wrapper"
                id="container"
                ref={ref}
                onMouseDown={onMouseDown}
              >
                <div className="items">
                  <div id="first-col" className="first-col-ele">
                    &nbsp;
                  </div>
                  <div className="title">
                    <div className="img bunker-color">
                      <img src={binanceicon} alt="..." />
                    </div>
                    <span>Binance</span>
                  </div>
                  <ul className="itemss">
                    {loading ? (
                      <BinaceList coinList={pricedata} />
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img bunker-color">
                      <img src={ftxicon} alt="..." />
                    </div>
                    <span>FTX</span>
                  </div>
                  <ul className="itemss">
                    {loading ? <FtxList coinList={pricedata} /> : <div></div>}
                  </ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img mirage-color">
                      <img src={coinbaseicon} alt="..." />
                    </div>
                    <span>Coinbase Pro</span>
                  </div>
                  <ul className="itemss">
                    {loading ? (
                      <CoinBaseList coinList={pricedata} />
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img gallery-color">
                      <img src={huobiglobalicon} alt="..." />
                    </div>
                    <span>Huobi Global</span>
                  </div>
                  <ul className="itemss">
                    {loading ? <HuobiList coinList={pricedata} /> : <div></div>}
                  </ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img softpeach-color">
                      <img src={bitmexicon} alt="..." />
                    </div>
                    <span> Bitmex</span>
                  </div>
                  <ul className="itemss">
                    {loading ? (
                      <BitmexList coinList={pricedata} />
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
                <div className="items">
                  <div className="title">
                    <div className="img kraken">
                      <img src={krakenicon} alt="..." />
                    </div>
                    <span>Kraken</span>
                  </div>
                  <div id="last-col" className="last-col-ele">
                    &nbsp;
                  </div>
                  <ul className="itemss">
                    {loading ? (
                      <KrakenList coinList={pricedata} />
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area">
            <Pagination
              totalPages={totalPages}
              handleClick={handleClick}
              page={page}
            />
          </div>

          {!loading ? (
            <div className="button" id="loader">
              <a href="#0" className="btn btn-link">
                Loading...
              </a>
              <div className="loader"></div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};
export default PriceComparisonPage;
