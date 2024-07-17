import React from 'react';

export default function Loader({ height }) {

    return (
        <div className={`absolute top-0 left-0 w-full ${height ? `h-[${height}]`: `h-full`} bg-transparent flex flex-row items-center justify-center`}>
            <div className="w-3 h-3 bg-rose900 m-[5px] rounded-full animate-load-1 scale-0"></div>
            <div className="w-3 h-3 bg-rose900 m-[5px] rounded-full animate-load-2 scale-0"></div>
            <div className="w-3 h-3 bg-rose900 m-[5px] rounded-full animate-load-3 scale-0"></div>
        </div>
    );
};
