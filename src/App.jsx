import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
                <Route path="produtos" element={<Layout/>}>
                    <Route index element={<ProductListingPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;