import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import routes from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
<QueryClientProvider client={queryClient}>
<RouterProvider router={routes} />
<ReactQueryDevtools initialIsOpen={false} />


</QueryClientProvider>
      <ToastContainer />
    </FirebaseProvider>
  </React.StrictMode>,
)
