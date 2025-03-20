import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import { MenuOverview } from './components/Menu/MenuOverview';
import { FullMenu } from './components/Menu/FullMenu';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import GetRecipe from './components/GetRecipe/GetRecipe';
import RegistrationForm from './components/Registration/RegistrationForm';
import OrderConfirmed from './components/OrderConfirmed/OrderConfirmed'; //  OrderConfirmed import

function App() {
  return (
    <Router>
      <Routes>
   
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <MenuOverview />
              <AboutUs />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Header />
              <FullMenu />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />
        <Route
          path="/get-recipe"
          element={
            <>
              <Header />
              <GetRecipe />
              <Footer />
            </>
          }
        />

      
        <Route
          path="/order-confirmed"
          element={
            <>
              <Header />
              <OrderConfirmed />
              <Footer />
            </>
          }
        />

    
        <Route path="/login" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
