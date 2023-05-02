// Write your code here.
import './index.css'

const NavBar = () => {
  const click = () => {}
  return (
    <nav className="app-navbar">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="header-nav">EmojiGame</p>
      </div>
      <div className="score-container">
        <p className="score">
          Score: <span id="score">0</span>
        </p>
        <p className="score">
          Total Score: <span id="total-score">0</span>
        </p>
      </div>
    </nav>
  )
}
export default NavBar
