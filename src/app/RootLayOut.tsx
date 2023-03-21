'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/main.css';

export default function Layout({ children }: any) {
  return (
    <html>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          className="absolute top-0 right-0"
        />
      </body>
    </html>
  );
}
