import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Errorpage from './ErrorPage.jsx';
import { UserContextProvider } from './UserContext.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './Checkout.jsx';
import { sidebarAction } from './Checkout.jsx';
import { loader } from './UserAddresses.jsx';
import Cart from './Cart.jsx';
import Home from './Home.jsx';
import { deleteAction } from './destroy.jsx';
import { OrderSummary } from './OrderSummary.jsx';

const router = createBrowserRouter([
  {
    path: "/:locale",
    element : <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "checkout",
        element: <Checkout/>,
        loader: loader,
        action: sidebarAction || (alert('second checkout handler')),
        children: [
          {
            path: "orderSummary",
            element: <OrderSummary/>
          },
          {
            path: ":dataType",
            action: sidebarAction,
            children: [
              {
                path: ":actionType",
              },
              {
                path: "destroy/:addressID",
                action: deleteAction
              },
              {
                path: ":actionType/:addressID",
                action: sidebarAction,
              },
            ]
          }
        ]
      },
      {
        path: "cart",
        element: <Cart/>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router}/>
  </UserContextProvider>
)