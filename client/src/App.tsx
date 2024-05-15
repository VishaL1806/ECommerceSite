import { Route, Routes } from "react-router-dom";
import { Footer, Header, SignInForm, SignUpForm } from "./components";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { About, Account, Authentication, Cart, ContactUs, Home, ProductDetail, Wishlist } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-account/cart" element={<Cart />} />
          <Route path="/:category/:productname" element={<ProductDetail />} />
        </Route>

        <Route path="/" element={<Authentication />}>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
