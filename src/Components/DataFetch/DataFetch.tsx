import React from 'react';

type DataFetchProps ={
status: "loading" | "error" | "success"

}

const DataFetch = ({status}: DataFetchProps) => {
    if(status === "loading"){
        return <h2>Data is loading</h2>
    }
    else if( status ==="error"){
         return <h2>Error Data</h2>
    }
    return (
        <div>
            <h2>Data fetch</h2>
        </div>
    );
};

export default DataFetch;