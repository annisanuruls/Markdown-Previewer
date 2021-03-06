import React from 'react';
import {marked} from "marked";
import './App.css';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
return `<a target="_blank" href="${href}">${text}</a>`;
};

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {text: defaultText};

      this.updateText = this.updateText.bind(this);
  };

  updateText(event){
      this.setState({text: event.target.value});
  }

  render(){
      return(
          <div className="container">
              <h1 className="title">Markdown Previewer</h1>
              <div className="wrapper">
                  <div className="editor-wrapper">
                      <h1 className="title-box title-box-editor">Editor</h1>
                      <textarea name="editor" id="editor" value={this.state.text} onChange={this.updateText} >
                      </textarea>
                  </div>
                  <div className="preview-wrapper">
                      <h1 className="title-box">Preview</h1>
                      <div dangerouslySetInnerHTML={{__html: marked(this.state.text, {renderer: renderer})}} id="preview"></div>
                  </div>
              </div>
              <div>
                  <p className="footer">&#169; 2022 Annisa Nurul S</p>
              </div>
          </div>
      );
  };
};

export default App;
