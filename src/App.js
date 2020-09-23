import React, {useState} from 'react';
import Editor from './Components/Editor';

function App() {

  const[html,setHtml]=useState("");
  const[css,setCss]=useState("");
  const[js,setJs]=useState("");

  return (
    <div className="App">
      <div className= "pannel top" >
        <Editor lang="xml" title="HTML" value={html} onChange={setHtml}></Editor>
        <Editor lang="css" title="CSS" value={css} onChange={setCss}></Editor>
        <Editor lang="javascript" title="JS" value={js} onChange={setJs}></Editor>
      </div>

      <div className= "pannel bottom" >
        <iframe 
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
