
export default function Navbar({ themeColour, lightMode, title, menuIcon, rightIcons, compact, extraTop }) {
    return (
        <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: compact ? "10px 28px 0px 28px" : "10px 28px 320px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingTop: extraTop ? "8%" : "10px" }}>
            <div>
                {menuIcon ?
                    <svg style={{ margin: "0 62px 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    :
                    <svg style={{ margin: "0 62px 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                }
            </div>
            <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: rightIcons ? "20px 0" : "20px 120px 20px 0" }}>{title}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {rightIcons ?
                    <>
                        <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    </>
                    :
                    ""
                }
            </div>
        </div>


    );
} 