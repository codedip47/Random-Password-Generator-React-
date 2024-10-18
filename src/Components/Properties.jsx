import React from "react";

function Properties({length, setLength , setNumAllowed, numAllowed, setcharAllowed, charAllowed})
{
    return(
        <div className="flex gap-3">
            <input className="accent-blue-900" type="range" min="8" max="20" value={length} onChange={(e) => setLength(e.target.value)}/>
            <h3 className="font-semibold text-xl">Length: {length}</h3>
            <input className="font-semibold w-6 h-6 checkbox accent-blue-500" type="checkbox" onChange={() => setNumAllowed(!numAllowed)} />
            <h3 className="font-semibold text-xl">Numbers</h3>
            <input className="font-semibold w-6 h-6 checkbox accent-blue-500" type="checkbox" onChange={() => setcharAllowed(!charAllowed)} />
            <h3 className="font-semibold text-xl">Special Characters</h3>
        </div>
    );
}

export default Properties;