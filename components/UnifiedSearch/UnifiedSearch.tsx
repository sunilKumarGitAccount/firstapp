import React, { useState } from 'react'

export default function UnifiedSearch() {
    const [searchData, setsearchData] = useState<string | undefined>();
    const [searchData1, setsearchData1] = useState<string | undefined>();
    const [searchData2, setsearchData2] = useState<string | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setsearchData(e.target.value)
        setsearchData1(e.target.value)
        setsearchData2(e.target.value)
        setAlert();
    }

    const setAlert = ()=>{
        
    }

    console.log(searchData);
    return (
        <div>
            <h1>
                Entered Data is - 1 {searchData} 2. {searchData1} 3. {searchData2}
            </h1>
            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
            <input
                value={searchData}
                onChange={(e) => {handleChange(e)}}
            />
        </div>
    )
}
