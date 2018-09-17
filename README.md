# README

react-railsのバージョンは2.4.7
対応するReact.jsのバージョンは16.4.2

https://github.com/reactjs/react-rails/blob/master/VERSIONS.md#bundled-versions

## Qiitaとかで見る書き方との相違
reference: https://qiita.com/joe-re/items/96f12dda4a62470d1d7c
### `React.createClass` => `createReactClass` になった
- v16かららしい
### String Refが使えなくなった
- 行き当たりばったりで解決
```before.js
  // BEFORE
  handleSubmit(e){
    e.preventDefault();
    var title = ReactDOM.findDOMNode(this.refs.title).value;
    // ...
    return;
  },
  render(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref="title" />
      </form>
    )
  }
  // ...
```

```after.js
  // AFTER
  handleSubmit(e){
    e.preventDefault();
    var title = this.title.value.trim();
    // ...
    return;
  },
  render(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref={(inputText) => { this.title = inputText; }} />
      </form>
    )
  }
  // ...
```

### `: function` の記述がいらなくなった
```before.js
  // BEFORE
  render: function() { // <=ここ
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
```

```after.js
  // AFTER
  render() { // <=ここ
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
```
