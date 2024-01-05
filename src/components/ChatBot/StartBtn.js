import React from "react";

export default function StartBtn() {
    return (
        <div>
            <button 
                className="bg-61045F text-black py-2 px-4 rounded-full border-none cursor-pointer ml-12"
                onClick={() => handleButtonClick("start")}
            >
                Let's Get Started
            </button>
        </div>
    )
}
