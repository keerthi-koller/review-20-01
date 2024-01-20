import { TextField } from "@mui/material";
import ChildComponent from "./ChildComponent";
import { useState } from "react";

function ParentComponent () {

    const [inputVal, setInputVal] = useState<string>("");
    const [updatedInput, setUpdatedInput] = useState<string>("");

    const handleChange = () => {
        const val = (document.getElementById("outlined-basic")as HTMLInputElement).value;
        setInputVal(val);
    }

    const updatedValue:Function = (updated:string) => {
        setUpdatedInput(updated);
        // setInputVal(updated);
        // (document.getElementById("outlined-basic")as HTMLInputElement).value = updated;
    }

    return (<>
        <div className="bg-slate-200 flex flex-col gap-5 justify-center items-center w-full p-10">
            <h1 className="text-purple-800 font-bold text-2xl underline">Parent Component</h1>
            {updatedInput != null ? <h1 className="text-green-800 font-bold">{updatedInput}</h1> : ""}
            <TextField id="outlined-basic" variant="outlined" onChange={handleChange} placeholder="Enter Text" sx={{width:"250px"}} />
        </div>
        <hr className="h-1 bg-black" />
        <ChildComponent data={inputVal} updated={updatedValue} />
    </>)
}

export default ParentComponent;