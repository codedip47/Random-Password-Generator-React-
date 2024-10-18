import React from "react";

function CopyText({password, copyClipBoard, copy})
{
    return(
        <div >
            <input className = "w-96 rounded p-2 text-orange-400 font-semibold text-xl" type="text" value={password}/>
            <button onClick={copyClipBoard} className={`font-semibold ${copy === 'copy' ? "bg-blue-400" : "bg-emerald-400"} rounded m-3 p-2`}>{copy}</button>
        </div>
    );
}

export default CopyText;