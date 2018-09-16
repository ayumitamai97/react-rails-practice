var CommentBox = createReactClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({data: result.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    console.log(this.state.data);
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = createReactClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment data={comment.title}>
          {comment.description}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
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
          {this.props.data}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
