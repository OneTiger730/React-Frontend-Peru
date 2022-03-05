import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
// import './bootstrap.min.css';
import ViewSignalProviderPage from "./pages/signal-provider/view-signal-provider";
import { PagesLayout } from "./components/layouts/PagesLayout";
import { useState } from "react";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import JoinCopyTraderPage from "./pages/copy-trading/join-copy-trader";
import { ViewCopyTraderListPage } from "./pages/copy-trading/view-copy-trader-list";
import { ViewCopyTraderSignalPage } from "./pages/copy-trading/view-copy-trader-signal";
import { CreateNewSignalPage } from "./pages/signal-provider/create-signal";
import PriceComparisonPage from "./pages/price-comparison";
import { PortfolioPerformancePage } from "./pages/portfolio-performance";
import { ExchangeAccountPage } from "./pages/exchange-account/exchange-account";
import { FavouritesPages } from "./pages/favourites";
import { ViewSuscribersPage } from "./pages/copy-trading/view-suscribers";
import { ViewSignalSuscribersPage } from "./pages/signal-provider/view-suscribers";
import { TradeTerminalPage } from "./pages/trade-terminal/trade-terminal";
import AdminLogin from "../src/pages/admin/login";
import ActivateSignalProviderPage from "./pages/admin/signal-provider/activate-signal-provider";
import { AdminPagesLayout } from "./components/layouts/AdminPagesLayout";
import { CreateAdminPage } from "./pages/admin/administrator/create-admin";
import { ViewAdminPage } from "./pages/admin/administrator/view-admin";
import { ViewCopyTrader } from "./pages/admin/traders/view-copy-trader";
import { ViewTrader } from "./pages/admin/traders/view-trader";
import { AdminDashboardPage } from "./pages/admin/dashboard";
import { AdminViewSignalProviderPage } from "./pages/admin/signal-provider/view-signal-provider";
import { FromSignalProviderPage } from "./pages/admin/trade-signals/from-signal-provider";
import { FromCopyTraderPage } from "./pages/admin/trade-signals/from-copy-trader";
import { ExecutedSignalProviderPage } from "./pages/admin/trade-executed/executed-signal-provider";
import { ExecutedCopyTraderPage } from "./pages/admin/trade-executed/executed-copy-trader";
import { AddTradeSymbolPage } from "./pages/admin/trading-symbols/add-trade-symbol";
import { ViewTradeSymbolsPage } from "./pages/admin/trading-symbols/view-trade-symbols"; 
import { GAuthPage } from "./pages/admin/g-auth"; 
import { LoginLogsPage } from "./pages/admin/login-logs";

function App() {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />
        <Route
          path="/favourites"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <FavouritesPages />
            </PagesLayout>
          }
        />
        {/* copy trading */}
        <Route
          path="/copy-trading/join-copy-trader"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <JoinCopyTraderPage />
            </PagesLayout>
          }
        />
        <Route
          path="/copy-trading/view-copy-trader-list"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderListPage />
            </PagesLayout>
          }
        />
        <Route
          path="/copy-trading/view-suscribers"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewSuscribersPage />
            </PagesLayout>
          }
        />
        {/* Signal Provider */}
        <Route
          path="/signal-provider/view-signal-provider"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewSignalProviderPage />
            </PagesLayout>
          }
        />
        <Route
          path="/signal-provider/view-suscribers"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewSignalSuscribersPage />
            </PagesLayout>
          }
        />
        {/* Price Comparison */}
        <Route
          path="/price-comparison"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <PriceComparisonPage />
            </PagesLayout>
          }
        />
        {/* Trade Terminal */}
        <Route
          path="/trade-terminal"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <TradeTerminalPage />
            </PagesLayout>
          }
        />
        {/* Portfolio Performance */}
        <Route
          path="/portfolio-performance"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <PortfolioPerformancePage />
            </PagesLayout>
          }
        />
        {/* Reports */}
        <Route
          path="/reports/trade-signals"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        <Route
          path="/reports/my-trades"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        {/* Exchange Account */}
        <Route
          path="/exchange-account/exchange-account"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ExchangeAccountPage />
            </PagesLayout>
          }
        />
        <Route
          path="/admin/login"
          element={
            <DefaultLayout>
              <AdminLogin />
            </DefaultLayout>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <AdminDashboardPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="/admin/administrator/create-admin"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <CreateAdminPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="/admin/administrator/view-admin"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewAdminPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/signal-provider/activate-signal-provider"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ActivateSignalProviderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/signal-provider/view-signal-provider"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <AdminViewSignalProviderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/traders/view-copy-trader"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTrader />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/traders/view-trader"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewTrader />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trade-signals/from-signal-provider"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <FromSignalProviderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trade-signals/from-copy-trader"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <FromCopyTraderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trade-executed/executed-signal-provider"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ExecutedSignalProviderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trade-executed/executed-copy-trader"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ExecutedCopyTraderPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trading-symbols/add-trade-symbol"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <AddTradeSymbolPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/trading-symbols/view-trade-symbols"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewTradeSymbolsPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/g-auth"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <GAuthPage />
            </AdminPagesLayout>
          }
        />
        <Route
          path="admin/login-logs"
          element={
            <AdminPagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <LoginLogsPage />
            </AdminPagesLayout>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
