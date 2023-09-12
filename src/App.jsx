import { useEffect } from 'react';
import './App.css'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom';

function App() {

  const location  = useLocation()
  const checkoutRegex = /FR\/checkout/
  const homeRegex = /FR\/home/

  return (
    <>
      {console.log('++ App ++')}
      {!checkoutRegex.test(location.pathname) && <Header isHome={homeRegex.test(location.pathname)}></Header>}
        <main>
          <div id="main">
            <Outlet/>
          </div>
        </main>
    </>
  )
}

export default App