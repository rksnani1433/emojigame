// Write your code here.
import './index.css'

const WinOrLossCard = () => {
  const win = () => {}
  return (
    <div className="wonloss-status-container">
      <div className="score-container">
        <h1 className="wonloss-header">You Won</h1>
        <p className="bestscore-header">Bestscore</p>
        <p className="user-score">12/12</p>
        <button type="button" className="play-button">
          Play again
        </button>
      </div>
      <div>
        <img
          className="wonloss-image"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won-loss-emoji"
        />
      </div>
    </div>
  )
}
export default WinOrLossCard
