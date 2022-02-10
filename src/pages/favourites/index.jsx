import search_icon from "./../../assets/img/icons/search-icon.svg";
import listView_icon from "./../../assets/img/icons/list-view.svg";
import gridView_icon from "./../../assets/img/icons/grid-view.svg";
import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";

import user_icon_1 from "./../../assets/img/user-icon/user-1.svg";
import { useState } from "react";
import { ShowBreadcrumbs } from "../../components/ShowBreadcrumbs";

export const FavouritesPages = () => {
  const [listView, setListView] = useState("list");
  return (
    <div className="container-fluid p-0">
      <div className="card mb-0 d-xl-block d-none">
        <div className="card-body">
          <a href="/" className="text-dull">
            TraderPro &gt;{" "}
          </a>
          <a href="/" className="theme-color font-bold">
            <ShowBreadcrumbs />
          </a>
        </div>
      </div>
      <div className="card grey-card mb-0">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-7">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback">
                  <img src={search_icon} alt="" className="img-fluid" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-5 text-end">
              <div className="dropdown d-xl-inline d-none">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      XLS
                    </a>
                  </li>
                </ul>
              </div>
              <button
                href="#0"
                className="btn"
                onClick={() => setListView("list")}
              >
                <img src={listView_icon} alt="" className="img-fluid " />
              </button>
              <button
                href="#0"
                className="btn"
                onClick={() => setListView("grid")}
              >
                <img src={gridView_icon} alt="" className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-0 card-light-grey">
        <div className="card-body mob-pad-0">
          {listView === "list" ? (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="bg-white">
                  <tr>
                    <th scope="col">
                      Name
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Subscribers
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Membership
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Signals Sent
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Profit
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Action
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                    <th scope="col" className="text-center">
                      Configure
                      <img src={tableArrow_icon} alt="" className="img-fluid" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            src={user_icon_1}
                            alt=""
                            className="img-fluid table-pic"
                          />
                        </div>
                        <div>
                          <a href="/" className="flex-column">
                            <span className="font-12">username</span>
                            <div className="divider"></div>
                            <span className="font-bold font-13">
                              Richard Stroud
                            </span>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">20156</td>
                    <td className="text-center">Free</td>
                    <td className="text-center">12</td>
                    <td className="text-center">
                      <img
                        src="img/uploads/profit-up.svg"
                        alt=""
                        className="img-fluid"
                      />
                      <span className="text-green">59.28% </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-primary">Subscribe</button>
                    </td>
                    <td className="text-center">
                      <a href="trade-configuration.html">
                        <button className="btn btn-success">Configure</button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div className="row gx-3">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-3 mt-3">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="card mb-0 special-card-body">
                    <img
                      src="img/uploads/card/4.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row gx-2 pt-2">
                        <div className="col-xl-6 col-lg-6 col-6">
                          <p className="font-16 font-bold text-dark mb-2">
                            Micheal |
                            <span className="font-regular font-12">
                              Micheal Crist
                            </span>
                          </p>
                          <p className="card-text font-12 mb-0">
                            India
                            <img
                              src="img/uploads/india.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6 text-end my-auto">
                          <a
                            href="#0"
                            className="btn btn-primary font-12 border-radius-none"
                          >
                            Subscribe
                          </a>
                          <a
                            href="trade-configuration.html"
                            className="btn btn-success font-12 border-radius-none"
                          >
                            Configure
                          </a>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row gx-4 pb-2">
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2250</h5>
                            <p className="font-12 mb-0">Subscriber</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">7109</h5>
                            <p className="font-12 mb-0">Copies</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3 border-right">
                          <div className="text-center">
                            <h5 className="mb-0 font-24">2389</h5>
                            <p className="font-12 mb-0">Signals</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="text-center">
                            <h5 className="mb-0 font-24 text-green">89%</h5>
                            <p className="font-12 mb-0">Profit (12m)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-3 col-12 my-auto">
              <p className="mb-0 d-none d-sm-block">
                Showing 1 to 10 of 57 entries
              </p>
            </div>
            <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
              <div className="btn-group">
                <a href="/" className="btn btn-light">
                  Previous
                </a>
                <a href="/" className="btn btn-light active">
                  1
                </a>
                <a href="/" className="btn btn-light">
                  2
                </a>
                <a href="/" className="btn btn-light">
                  3
                </a>
                <a href="/" className="btn btn-light">
                  4
                </a>
                <a href="/" className="btn btn-light">
                  5
                </a>
                <a href="/" className="btn btn-light">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
