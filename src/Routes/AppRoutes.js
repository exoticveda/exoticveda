import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from './RoutesConfig';
import NotFoundPage from './NotFoundPage';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

const AppRoutes = () => (
  <>

    <ScrollToTop /> {/* Add the ScrollToTop component here */}

    <Routes>
      {routes.map(({ path, element, index }) => (
        <Route key={path} path={path} element={element} index={index} />
      ))}
      {/* Fallback route for undefined paths */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   
  </>
);

export default AppRoutes;
