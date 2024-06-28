import "./App.css";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalModal from "./component/modal/GlobalModal";
import DevelopProjects from "./pages/projects/DevelopProjects";
import DevelopDetail from "./pages/projects/DevelopDetail";
import Sales from "./pages/projects/Sales";
import SalesDetail from "./pages/projects/SalesDetail";
import History from "./pages/about/CompanyHistory";
import NewsRoom from "./pages/news/NewsRoom";
import NewsDetail from "./pages/news/NewsDetail";
import SaleApartment from "./pages/news/SaleApartment";
import SaleApartmentDetail from "./pages/news/SaleApartmentDetail";
import Directions from "./pages/contact/Directions";
import PromoVideo from "./pages/news/PromoVideo";
import ContactUsForm from "./pages/contact/ContactUsForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmpInfo from "./pages/contact/EmpInfo";
import BusinessPhilosophy from "./pages/about/BusinessPhilosophy";
import DevelopmentBusiness from "./pages/business/DevelopmentBusiness";
import OfferBusiness from "./pages/business/OfferBusiness";
import SalesBusiness from "./pages/business/SalesBusiness";
import Greeting from "./pages/about/Greeting";
import AboutUs from "./pages/about/AboutUs";
import NotFound from "./pages/NotFound";
import RouteLayout from "./component/route/RouteLayout";
import AuthLayout from "./component/admin/AuthLayout";
import Contents from "./pages/admin/Contents";
import PostEditor from "./pages/admin/PostEditor";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";

function setScreenSize() {
  let vh = 0;
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
  }, [window.innerHeight]);

  return (
    <div className="App">
      <RecoilRoot>
        <ToastContainer limit={1} />

        <Routes>
          <Route element={<RouteLayout footer={false} topBtn={false} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<RouteLayout />}>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/greeting" element={<Greeting />} />
            <Route path="/about/philosophy" element={<BusinessPhilosophy />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/business/develop" element={<DevelopmentBusiness />} />
            <Route path="/business/offer" element={<OfferBusiness />} />
            <Route path="/business/sales" element={<SalesBusiness />} />
            <Route path="/project/development" element={<DevelopProjects />} />
            <Route
              path="/project/development/:id"
              element={<DevelopDetail />}
            />
            <Route path="/project/sales" element={<Sales />} />
            <Route path="/project/sales/:id" element={<SalesDetail />} />
            <Route path="/news" element={<NewsRoom />} />
            <Route path="/news/pageDetail" element={<NewsDetail />} />
            <Route path="/news/salesApt" element={<SaleApartment />} />
            <Route path="/news/promotion" element={<PromoVideo />} />
            <Route
              path="/news/salesApt/pageDetail"
              element={<SaleApartmentDetail />}
            />
            <Route path="/contact" element={<ContactUsForm />} />
            <Route path="/contact/empInfo" element={<EmpInfo />} />
            <Route path="/contact/directions" element={<Directions />} />
          </Route>
          <Route path="/admin" element={<Login />} />
          <Route element={<AuthLayout />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/posts" element={<Contents />} />
            <Route path="/admin/posts/create" element={<PostEditor />} />
            <Route path="/admin/posts/edit/:id" element={<PostEditor />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <GlobalModal />
      </RecoilRoot>
    </div>
  );
}

export default App;
