
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {HomePage} from "./importPages";


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
    </Routes>
  );
};
