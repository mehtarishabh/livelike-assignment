import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import "./Layout.scss";
const Products = lazy(() => import('../../pages/Products/Products'));
const ContactUs = lazy(() => import('../../pages/ContactUs'));

function Layout() {
  return (
    <div className="Layout">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route exact path="/contact" element={<ContactUs />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
