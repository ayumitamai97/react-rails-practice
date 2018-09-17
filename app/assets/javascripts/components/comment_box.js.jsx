var CommentBox = createReactClass({
  loadCommentsFromServer() {
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
  },
  getInitialState() {
    return {data: []};
  },
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: this.state.data.concat([data])});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        {/* ここでcallback渡す！ */}
      </div>
    );
  }
});

var CommentList = createReactClass({
  render() {
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
  handleSubmit(e){
    e.preventDefault();
    var title = this.title.value.trim();
    var description = this.title.value.trim();
    if (!title || !description) {
      return;
    }
    this.props.onCommentSubmit({title: title, description: description});
    // ↑ここでcallback実行する！
    this.title.value = "";
    this.description.value = "";
    return;
  },
  render(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref={(inputText) => { this.title = inputText; }} />
        <input type="text" placeholder="Description" ref={(inputText) => { this.description = inputText; }} />
        <input type="submit" value="Post" />
      </form>
    )
  }
});

var Comment = createReactClass({
  render() {
    return (
      <div className="comment">
        <h2 className="commentTitle">
          {this.props.data}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
