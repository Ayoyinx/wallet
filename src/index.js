import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import AuthProvider from "./Context/AuthContext/AuthContext";
import TransProvider from "./Context/TransContext/TransContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientID } from "./Routes/url";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientID}>
    <TransProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TransProvider>
  </GoogleOAuthProvider>
);