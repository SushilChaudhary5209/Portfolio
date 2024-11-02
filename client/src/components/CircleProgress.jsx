import React from 'react';

const CircleProgress = ({ percent, colorFrom, colorTo, children, className }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <svg height="120" width="120" className="rotate-[-90deg] rounded-full">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="lightgray"
                    strokeWidth="8"
                    fill="none"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeWidth="8"
                    stroke={`url(#grad${colorFrom.replace('#', '')}${colorTo.replace('#', '')})`}
                    fill="none"
                />
                <defs>
                    <linearGradient id={`grad${colorFrom.replace('#', '')}${colorTo.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: colorFrom, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: colorTo, stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute">
                {children}
            </div>
        </div>
    );
};

export default CircleProgress;
