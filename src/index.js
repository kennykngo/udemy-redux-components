import Faker from "faker";
import React from "react";
import ReactDOM from "react-dom";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 4:45pm"
          content="Nice blog post"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>

      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:00pm"
        content="Nice writing"
        avatar={Faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 3:45pm"
        content="Nice blog post"
        avatar={Faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
