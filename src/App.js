import React, {useState, useEffect} from 'react';
import Editor from './Components/Editor';

function App() {

  const[html,setHtml]=useState("");
  const[css,setCss]=useState("");
  const[js,setJs]=useState("");

  const srcDoc = `
                <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                </html>
                `

  useEffect(()=>{
    const htmlLocal = localStorage.getItem("codepen-html")
    const cssLocal = localStorage.getItem("codepen-css")
    const jsLocal = localStorage.getItem("codepen-js")

    setHtml(JSON.parse(htmlLocal))
    setCss(JSON.parse(cssLocal))
    setJs(JSON.parse(jsLocal))

    }, [])

  useEffect(()=>{
      localStorage.setItem("codepen-html", JSON.stringify(html));
      localStorage.setItem("codepen-css", JSON.stringify(css));
      localStorage.setItem("codepen-js", JSON.stringify(js));
    },[html,css,js])

  return (
    <div className="App">
      <div className= "panel top" >
        <Editor lang="xml" title="HTML" value={html} onChange={setHtml}></Editor>
        <Editor lang="css" title="CSS" value={css} onChange={setCss}></Editor>
        <Editor lang="javascript" title="JS" value={js} onChange={setJs}></Editor>
      </div>

      <div className= "panel bottom" >
        <iframe 
          srcDoc={srcDoc}
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
