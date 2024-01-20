import { Button, TextField } from "@mui/material";

function ChildComponent ({data,updated}:{data:any, updated:Function}) {

    const sendData = () => {
        const sendInVal = (document.getElementById("outlined-basicNew")as HTMLInputElement).value;
        updated(sendInVal);
    }
    
    return (<>
        <div className="bg-slate-400 flex flex-col gap-5 justify-center items-center p-10">
            <h1 className="text-purple-800 font-bold text-2xl underline">Child Component</h1>
            <p className="text-green-800 font-bold">{data}</p>

            <TextField id="outlined-basicNew" variant="outlined" placeholder="Enter Text" sx={{display:"block"}} />
            <Button variant="contained" onClick={sendData} sx={{width:"220px"}}>Change data</Button>
        </div>
    </>)
}

export default ChildComponent;