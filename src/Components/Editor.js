import React from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled} from "react-codemirror2"

export default function Editor({title,lang,onChange,value}) {

    function handlechange(editor,data,value){
        onChange(value)
    }

    return (
        <div className="editors-container">

            <div className="title">
                {title}
                <button>O</button>
            </div>

            <Controlled onBeforeChange={handlechange}
             value={value} 
             className="code-mirror-wrapper" 
             options={{
                lineWrapping: true,
                lint: true,
                mode: lang,
                theme: "material",
                lineNumbers: true
                }}></Controlled>
        </div>
    )
}
