import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"
import Segment from './Segment'
import Message from './Message'

const App = () => {
  return (
    <div className="ui container comments">
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
        </div>
        <div className="ui primary button">
          <h4 className="ui header">For Your Info</h4>
        </div>
      </Segment>

      <Segment>
        <h4 className="ui header">For Your Info</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iusto vel suscipit labore est sunt expedita modi facilis tempore rem.
        </p>
      </Segment>

      <Message header="Attention" text="We just updated privacy policy !!!!"></Message>

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
