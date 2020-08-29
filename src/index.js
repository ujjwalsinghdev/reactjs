import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Warning</h1>
          Are you sure??
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4 PM" content="Today is great day" avatar={faker.image.avatar()}></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 6 PM" content="You are great" avatar={faker.image.avatar()}></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Dam" timeAgo="Today at 10 PM" content="Ok bye" avatar={faker.image.avatar()}></CommentDetail>
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App></App>, document.querySelector("#root"))
