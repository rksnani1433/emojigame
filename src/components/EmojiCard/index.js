// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachcard, onUpdaationimage} = props
  const {id, emojiName, emojiUrl} = eachcard
  const updateid = () => {
    onUpdaationimage(id)
  }

  return (
    <div className="emoji-card-main-container">
      <li onClick={updateid} className="list-container">
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </li>
    </div>
  )
}
export default EmojiCard
