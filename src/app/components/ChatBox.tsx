import AnswerMessage from "./atom/AnswerMessage"
import QuestionMessage from "./atom/QuestionMessage"


const ChatBox = () => {
  return (
    <div className="mb-2">
      <div className="
      border-2 w-full h-[80vh] px-5 py-2
      flex flex-col-reverse
      ">
        <QuestionMessage/>
        <AnswerMessage/>
        <QuestionMessage/>
        <AnswerMessage/>
        <QuestionMessage/>
        <AnswerMessage/>
      </div>
    </div>
  )
}

export default ChatBox