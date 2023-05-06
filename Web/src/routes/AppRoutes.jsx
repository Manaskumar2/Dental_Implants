
import React, { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import {HomePage, Services, ServicesPost} from "./importPages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />

      <Route path="/services" element={
        <Suspense>
          <Services/>
        </Suspense>
      }
      />

      <Route path="/services/:slug" element={
        <Suspense>
          <ServicesPost/>
        </Suspense>
      }
      />

    </Routes>
  );
};
