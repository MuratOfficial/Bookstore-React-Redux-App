import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import ErrorBoundry from "./components/error-boundry";
import store from "./store";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import BookstoreService from "./services/BookstoreService";
import { BrowserRouter as Router } from "react-router-dom";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
