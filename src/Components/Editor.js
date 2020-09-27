import React ,{useState}from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled} from "react-codemirror2"
import { CgExpand } from "react-icons/cg";

export default function Editor({title,lang,onChange,value}) {

    const[open,setOpen] = useState(true);

    const handlechange = (editor,data,value)=>onChange(value)

    return (
        <div className={`editors-container ${open? '' : 'closed'}`}>

            <div className="title">
                {title}
                <button type="button" onClick={()=> setOpen(!open)} className="btn"><CgExpand size={16}></CgExpand></button>
            </div>

            <Controlled onBeforeChange={handlechange}
             value={value} 
             className="code-mirror-wrapper" 
             options={{
                lineWrapping: true,
                lint: true,
                mode: lang,
                theme: "base16-dark",
                lineNumbers: true
                }}></Controlled>
        </div>
    )
}
