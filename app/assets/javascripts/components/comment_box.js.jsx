var CommentBox = createReactClass({
  render: function() {
    return (
      <div>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
});

var CommentList = createReactClass({
  render: function(){
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        {/* author="hogehoge" でpropsの値受け渡し */}
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    )
  }
});

var CommentForm = createReactClass({
  render: function(){
    return (
      <div className="commentForm">
        THIS IS COMMENT FORM
      </div>
    )
  }
});

var Comment = createReactClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
