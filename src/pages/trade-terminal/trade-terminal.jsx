import { useState } from "react";
import { RealTimeChartWidget } from "react-tradingview-widgets";

export const TradeTerminalPage = () => {
  const [fullMenu, setFullMenu] = useState(true);
  const [currentRightMenu, setCurrentRightMenu] = useState("");

  const handleRightButton = (event) => {
    const buttonValue = event.target.getAttribute("data-value");
    currentRightMenu !== buttonValue
      ? setCurrentRightMenu(buttonValue)
      : setCurrentRightMenu("");
  };
  return (
    <div className="tt-wrapper">
      <div className="tt-chart-wrapper">
        <div className="tt-osciloscope">
          <RealTimeChartWidget
            symbol="BITFINEX:BTCUSD"
            locale="en"
            interval="D"
            autosize="true"
          />
        </div>

        <div className="tt-right-column tt-right-column-expanded">
          {/* toolbar start */}
          <ul>
            {/*  */}
            <li className={`${fullMenu ? "tt-toolbar-li-active" : ""}`}>
              <button
                onClick={() => setFullMenu(!fullMenu)}
                className={`${fullMenu ? "tt-toolbar-button-active" : ""}`}
              >
                <i className="hamburger"></i>
              </button>
            </li>
            {/*  */}
            <li
              className={`${
                currentRightMenu === "coin-info" ? "tt-toolbar-li-active" : ""
              }`}
            >
              <button
                onClick={handleRightButton}
                data-value={"coin-info"}
                className={`${
                  currentRightMenu === "coin-info"
                    ? "tt-toolbar-button-active"
                    : ""
                }`}
              >
                $
              </button>
            </li>
            {/*  */}
          </ul>
          {/* toolbar ends */}

          <div
            className={`wrapper-with-fade wrapper-visible ${
              fullMenu ? "" : "d-none"
            }`}
          >
            {currentRightMenu === "coin-info" ? (
              <>
                <h1>BTCUSDT</h1>
                <h2>Bitcoin / TetherUS</h2>
                <h3>BINANCE</h3>
                <legend>Crypto</legend>
                <div className="price-values">
                  <span className="current-price">36658.93</span>
                  <span className="current-coin">USD</span>
                  <div className="price-current-ticker">-507.17 (1.35%)</div>
                  <div className="market-status">MARKET OPEN</div>
                </div>
              </>
            ) : (
              <BuySellForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BuySellForm = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="frontend"
        role="tabpanel"
        aria-labelledby="frontend-tab"
      >
        <div className="row mt-3">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-12 my-auto">
                <label htmlFor="" className="font-13">
                  Trading Symbol *
                </label>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue={""}>Select Trading Symbol</option>
                  <option value="btc-usdt">BTC/USDT</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3 col-lg-3 col-12 my-auto">
                <label htmlFor="" className="font-13">
                  Market Type *
                </label>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue="">Spot</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3 col-lg-3 col-12 my-auto">
                <label htmlFor="" className="font-13">
                  Position *
                </label>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  disabled=""
                >
                  <option defaultValue="">Long</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-12 col-lg-12 col-12">
                <label htmlFor="" className="font-13">
                  Execution
                </label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                <div className="input-group">
                  <span
                    className="input-group-text p-0 border-0 bg-primary"
                    id="basic-addon1"
                  >
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue={""} value="limit">
                        Limit
                      </option>
                      <option value="market">Market</option>
                    </select>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    placeholder="Buy Price"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3 col-lg-3 col-12 pt-2">
                <label htmlFor="" className="font-13">
                  Investment *
                </label>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mob-mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="USDT / USD"
                />
                <div className="form-text mt-3 text-danger">(Minimum $35)</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <label className="mb-3">Stop-Loss Price *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="100%"
                  disabled=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <label className="mb-3 mob-mt-3">Stop-Loss Quantity *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="all"
                  disabled=""
                />
              </div>
            </div>
            <div className="row mt-3 pb-3">
              <div className="col-xl-12 col-lg-12 col-12 mob-mt-3">
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Submit Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
