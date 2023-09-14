import { Link } from 'react-router-dom'

const Header = ({isHome}) => {

  const menuItems = ["Nouveautés", "Homme", "Femme", "Chaussures", "Accessoires", "Enfants", "Explore Kenzo"]
  const menuIcons = [["checkout", "favoritesIcon"], ["user", "userIcon"], ["cart", "cartIcon"]]

  return (
    <nav>
      <div className={isHome ? 'homeHeaderContainer' : 'headerContainer'} >
        <div className='header'>
          <div className='logoContainer'>
            <Link to="/FR/home">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/KENZO-PARIS_LOGO.svg/2560px-KENZO-PARIS_LOGO.svg.png"></img>
            </Link>
          </div>
          <div className='menu'>
            <ul>
              {menuItems.map(item => <li className='headerItem' key={`menuItem-${item}`}>{item}</li>)}
            </ul>
          </div>
          <div id="search">
            RECHERCHER
          </div>
          {menuIcons.map(([route, id]) =>
            <Link
              key={`header-${id}`}
              to={route}>
              <div className='menuIcon' id={id}></div>
            </Link>
          )}
        </div>
      </div>
      <h3>Click the heart shaped icon to get to the checkout</h3>
    </nav>
  )
}

export default Header
