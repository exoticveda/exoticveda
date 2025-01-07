import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes';
import Loader from './Components/loader/Loader';
import './Components/Css/Mediaq.css'

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
<>
            <Header />

             {!isLoading ? (
                <>

                    <AppRoutes />
                    <Footer />
              </>
            ) : (
          <Loader/>
            )}
            </>
    );
}

export default App;