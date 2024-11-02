import React from 'react';

const ProgressBar = ({ percent, colorFrom, colorTo }) => {
    return (
        <div className="relative w-full bg-gray-200 rounded-full h-4">
            <div
                className="h-4 rounded-full"
                style={{
                    width: `${percent}%`,
                    background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
                }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                {percent}%
            </div>
        </div>
    );
};

export default ProgressBar;
