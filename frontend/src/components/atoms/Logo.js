import React from "react";


export default function AppLogo() {
    return (
        <a
            className="navbar-brand"
            href="/"
            style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: "2rem",
                fontFamily: "Noto Serif Khojki, serif",
                position: "relative", // Add relative positioning
            }}
        >
            <span className="half-text" style={{ 
    background: "linear-gradient(90deg, green 60%, #F2BE22 40%)",
    backgroundClip: "text",
    webkitBackgroundClip: "text",
    color: "transparent",
    position: "relative",
    zIndex: "1",
    }}>
        Groceries
        </span>
        </a>
    );
}
