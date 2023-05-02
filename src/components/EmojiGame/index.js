/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {curImage: null, wonlossStatus: false, score: 0}

  scoreUpdate = () => {
    this.setState(prev => ({
      score: prev.score + 1,
    }))
  }

  check = () => {
    const {curImage} = this.state
    this.setState(prev => {
      if (curImage === prev.curImage) {
        return {wonlossStatus: !prev.wonlossStatus}
      }
      this.scoreUpdate()

      return null // return null to indicate no state update is necessary
    })
  }

  onUpdaationimage = id => {
    this.setState(prev => ({
      curImage: id,
    }))
    this.check()
  }

  render() {
    const {curImage, score, wonlossStatus} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="app-container">
        <NavBar />
        <div className="main-cotnainer">
          <ul className="ul-container">
            {shuffledEmojisList().map(each => (
              <EmojiCard
                onUpdaationimage={this.onUpdaationimage}
                eachcard={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
        <WinOrLossCard />
      </div>
    )
  }
}
export default EmojiGame
