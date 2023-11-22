<div className="1" style={{ marginRight: 20 }}>
    <div style={{ zoom: 0.3 }}>
        <div ref={elementRef}
            style={{ backgroundColor: "#ffffff" }}>
            <div
                style={{
                    fontFamily: "Lato, Arial, Helvetica, sans-serif",
                    width: shotWidth,
                    height: shotHeight,
                    backgroundColor: themeColour + 20,
                    overflow: "hidden",
                    position: "relative",
                }}
            ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 80px" }}>Welcome to {appName}!</h1>
                {/* device */}
                <div style={{
                    width: deviceWidth,
                    height: tablet ? 3500 : 2042,
                    backgroundColor: "white",
                    margin: "0 auto",
                    borderRadius: 36,
                    outline: "72px solid rgba(240,240,240, 0.7)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 100,
                    transform: tablet ? "scale(0.8)" : "",
                    marginTop: tablet ? "-480px" : "",
                }}>
                    <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 160px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff" }}>
                        <div>
                            <svg style={{ margin: "0 62px 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </div>
                        <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: "20px 0" }}>{homeTitle}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        </div>
                    </div>
                    <div className="app-body" style={{ padding: "0 40px 0", marginTop: "-180px", color: "#fff", fontWeight: 600 }}>
                        <label htmlFor="featuredImage" style={{ "&:hover": { borderRadius: "3000px" } }}>
                            <div className="featured-image" style={{ position: 'relative' }}>
                                <img src={file ? file : 'plus.png'} style={{ width: "100%", height: tablet ? "1600px" : "760px", objectFit: "cover", borderRadius: "16px" }} />
                                <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "64px", margin: 0, zIndex: 20 }}>{featuredTitle}</p>
                                <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                {/* <div style={{ width: "100%", height: "760px", backgroundSize: "cover", borderRadius: "16px", backgroundImage: `url(${file} ? ${file} : 'https://placehold.co/1200x1200'` }}>test</div> */}
                            </div>
                        </label>
                        <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                            <label htmlFor="listImage1" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage1 ? listimage1 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile1Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                            <label htmlFor="listImage2" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage2 ? listimage2 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile2Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                        </div>
                        <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                            <label htmlFor="listImage3" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage3 ? listimage3 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile3Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                            <label htmlFor="listImage4" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage4 ? listimage4 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile4Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                        </div>
                        <div className="featured-tiles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", marginTop: "28px" }}>
                            <label htmlFor="listImage5" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box", marginRight: "4%" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage5 ? listimage5 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile5Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                            <label htmlFor="listImage6" style={{ maxWidth: "48%", minWidth: "48%", boxSizing: "border-box" }}>
                                <div className="tile-image" style={{ position: 'relative' }}>
                                    <img src={listimage6 ? listimage6 : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }} />
                                    <p style={{ position: "absolute", bottom: "5%", left: "5%", fontSize: "40px", margin: 0, zIndex: 20 }}>{featuredTile6Title}</p>
                                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "16px" }}>&nbsp;</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                {/* device */}
                <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", bottom: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "30%" }}>&nbsp;</div>

            </div>
        </div>
    </div>
    <button onClick={htmlToImageConvert} className="download-btn">Download Image</button>
</div>

{/* second */ }
<div className="2" style={{ marginRight: 20 }}>
    <div style={{ zoom: 0.3 }}>
        <div ref={elementRef2}
            style={{ backgroundColor: "#ffffff" }}>
            <div
                style={{
                    fontFamily: "Lato, Arial, Helvetica, sans-serif",
                    width: shotWidth,
                    height: shotHeight,
                    backgroundColor: themeColour + 20,
                    overflow: "hidden",
                    position: "relative"
                }}
            ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 80px", "zIndex": 20, position: "relative" }}>Get instant updates and<br />notifications</h1>
                {/* device */}
                <div style={{
                    width: deviceWidth,
                    height: tablet ? 3500 : 2042,
                    backgroundColor: "white",
                    margin: "0 auto",
                    borderRadius: 36,
                    outline: "72px solid rgba(240,240,240, 0.7)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 100,
                    transform: tablet ? "scale(0.8)" : "",
                    marginTop: tablet ? "-480px" : "",
                }}>
                    <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 160px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff" }}>
                        <div>
                            <svg style={{ margin: "0 0 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                        </div>
                        <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: "20px 60px 20px 0" }}>Notifications</p>
                        <div>
                            &nbsp;
                        </div>
                    </div>
                    <div className="app-body" style={{ padding: "0 40px 0", marginTop: "-180px", color: "#fff", fontWeight: 600 }}>
                        <div style={{ backgroundColor: "#F0F7FF", borderRadius: "16px", display: "block", color: "#666", padding: "16px 40px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 24px 1px" }}>
                            <p style={{ fontSize: 36, fontWeight: 500 }} contenteditable="true" spellcheck="false">"Great feedback from ACME Corp!"</p>
                            <p style={{ fontSize: 28, fontWeight: 500, opacity: "0.7" }} contenteditable="true" spellcheck="false">1 day</p>
                        </div>
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", display: "block", color: "#666", padding: "16px 40px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 24px 1px", marginTop: 28 }}>
                            <p style={{ fontSize: 36, fontWeight: 500 }} contenteditable="true" spellcheck="false">"Leave feedback on the new {appName} app!"</p>
                            <p style={{ fontSize: 28, fontWeight: 500, opacity: "0.7" }} contenteditable="true" spellcheck="false">1 day</p>
                        </div>
                        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", display: "block", color: "#666", padding: "16px 40px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 24px 1px", marginTop: 28 }}>
                            <p style={{ fontSize: 36, fontWeight: 500 }} contenteditable="true" spellcheck="false">"Great feedback from ACME Corp!"</p>
                            <p style={{ fontSize: 28, fontWeight: 500, opacity: "0.7" }} contenteditable="true" spellcheck="false">1 day</p>
                        </div>
                    </div>
                </div>
                {/* device */}
                <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", top: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "8%" }}>&nbsp;</div>

            </div>
        </div>
    </div>
    <button onClick={htmlToImageConvert2} className="download-btn">Download Image</button>
</div>
{/* second end */ }

{/* third */ }
<div className="2" style={{ marginRight: 20 }}>
    <div style={{ zoom: 0.3 }}>
        <div ref={elementRef2}
            style={{ backgroundColor: "#ffffff" }}>
            <div
                style={{
                    fontFamily: "Lato, Arial, Helvetica, sans-serif",
                    width: shotWidth,
                    height: shotHeight,
                    backgroundColor: themeColour + 20,
                    overflow: "hidden",
                    position: "relative"
                }}
            ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 80px" }}>Be part of the conversation</h1>
                {/* device */}
                <div style={{
                    width: deviceWidth,
                    height: tablet ? 3500 : 2042,
                    backgroundColor: "white",
                    margin: "0 auto",
                    borderRadius: 36,
                    outline: "72px solid rgba(240,240,240, 0.7)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 100,
                    transform: tablet ? "scale(0.8)" : "",
                    marginTop: tablet ? "-480px" : "",
                }}>
                    <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 0px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff" }}>
                        <div>
                            <svg style={{ margin: "0 62px 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                        </div>
                        <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: "20px 0" }}>Updates from the Team</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <svg style={{ margin: "0 12px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        </div>
                    </div>


                    <div className="app-body" style={{ padding: "0", color: "#fff", fontWeight: 600 }}>
                        <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "20px 40px 0 40px" }} contenteditable="true" spellcheck="false">Congratulations to each and every one of you on a fantastic quarter. I am immensely proud to lead such a talented and dedicated team.</p>
                        <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, padding: "40px 40px 40px 40px" }} contenteditable="true" spellcheck="false">Here's to our continued success!</p>
                        <div style={{ display: "flex", marginTop: 30, backgroundColor: "#F6F6F6", padding: "40px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                            <img src="person-1.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                            <div>
                                <p style={{ color: "#666", fontSize: 36, fontWeight: 600, paddingLeft: 20, margin: 0, marginTop: 10 }} contenteditable="true" spellcheck="false">Joseph Smith</p>
                                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%", margin: 0 }} contenteditable="true" spellcheck="false">Client Executive</p>
                                <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, margin: 0, marginTop: 10 }} contenteditable="true" spellcheck="false">Great stuff everybody!</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: 30, padding: "40px" }}>
                            <img src="person-2.png" style={{ width: 100, height: 100, borderRadius: 60 }} />
                            <p style={{ color: "#666", fontSize: 36, fontWeight: 500, paddingLeft: 20, opacity: "60%" }}>Write a comment</p>
                        </div>
                    </div>
                </div>
                {/* device */}
                <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", bottom: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "12%" }}>&nbsp;</div>

            </div>
        </div>
    </div>
    <button onClick={htmlToImageConvert2} className="download-btn">Download Image</button>
</div>
{/* third end */ }

{/* fourth */ }
<div className="2" style={{ marginRight: 20 }}>
    <div style={{ zoom: 0.3 }}>
        <div ref={elementRef2}
            style={{ backgroundColor: "#ffffff" }}>
            <div
                style={{
                    fontFamily: "Lato, Arial, Helvetica, sans-serif",
                    width: shotWidth,
                    height: shotHeight,
                    backgroundColor: themeColour + 20,
                    overflow: "hidden",
                    position: "relative"
                }}
            ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 80px", "zIndex": 20, position: "relative" }}>Search for and find<br />the information you need</h1>
                {/* device */}
                <div style={{
                    width: deviceWidth,
                    height: tablet ? 3500 : 2042,
                    backgroundColor: "white",
                    margin: "0 auto",
                    borderRadius: 36,
                    outline: "72px solid rgba(240,240,240, 0.7)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 100,
                    transform: tablet ? "scale(0.8)" : "",
                    marginTop: tablet ? "-480px" : "",
                }}>
                    <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 10px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff" }}>
                        <div>
                            <svg style={{ margin: "0 0 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                        </div>
                        <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: "20px 60px 20px 0" }}>Search</p>
                        <div>
                            &nbsp;
                        </div>
                    </div>
                    <div classNameName="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 5px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", background: "rgba(255,255,255,0.3)", marginRight: 30, borderRadius: 12 }}>
                            <svg style={{ padding: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search</p>
                        </div>
                        <div style={{ padding: "0 0.5rem 0" }}>
                            <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div className="app-body" style={{ padding: "0 40px 0", color: "#fff", fontWeight: 600 }}>
                        <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                        <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
                    </div>
                </div>
                {/* device */}
                <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", top: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "8%" }}>&nbsp;</div>
            </div>
        </div>
    </div>
    <button onClick={htmlToImageConvert2} className="download-btn">Download Image</button>
</div>
{/* fourth end */ }

{/* fifth */ }
<div className="2" style={{ marginRight: 20 }}>
    <div style={{ zoom: 0.3 }}>
        <div ref={elementRef2}
            style={{ backgroundColor: "#ffffff" }}>
            <div
                style={{
                    fontFamily: "Lato, Arial, Helvetica, sans-serif",
                    width: shotWidth,
                    height: shotHeight,
                    backgroundColor: themeColour + 20,
                    overflow: "hidden",
                    position: "relative"
                }}
            ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 80px", "zIndex": 20, position: "relative" }}>Search for and find<br />the information you need</h1>
                {/* device */}
                <div style={{
                    width: deviceWidth,
                    height: tablet ? 3500 : 2042,
                    backgroundColor: "white",
                    margin: "0 auto",
                    borderRadius: 36,
                    outline: "72px solid rgba(240,240,240, 0.7)",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 100,
                    transform: tablet ? "scale(0.8)" : "",
                    marginTop: tablet ? "-480px" : "",
                }}>
                    {/* <div className="header" style={{ backgroundColor: themeColour, width: "100%", padding: "10px 28px 10px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff" }}>
                        <div>
                          <svg style={{ margin: "0 0 0 12px" }} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                        </div>
                        <p style={{ fontSize: 42, fontWeight: 600, textAlign: "center", height: 120, display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: "20px 60px 20px 0" }}>Search</p>
                        <div>
                          &nbsp;
                        </div>
                      </div> */}
                    <div classNameName="header" style={{ backgroundColor: themeColour, width: "100%", padding: "38px 28px 28px 28px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", color: lightMode ? "#000" : "#fff", paddingBottom: "28px" }}>
                        <div style={{ display: "flex", flexGrow: 1, alignItems: "center", marginRight: 30, borderRadius: 12 }}>
                            <svg style={{ margin: "0 20px 0" }} xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H‰313Z" fill="currentColor" /></svg>
                            <p style={{ fontSize: 42, fontWeight: 500, textAlign: "left", display: "flex", alignItems: "center", justifyContent: "center", color: lightMode ? "#000" : "#fff", margin: "30px 0px" }}>Search {appName
                            }</p>
                        </div>
                        <div style={{ padding: "12px 1rem 0px" }}>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M67.8799 38.9479C67.8799 40.1901 66.8078 41.2401 65.536 41.2401H35.582C34.8425 41.2401 34.0366 41.6394 33.6373 42.2901C32.432 44.1978 30.3542 45.4474 27.9437 45.4474C25.5332 45.4474 23.3815 44.1978 22.2428 42.2901C21.8435 41.6394 21.1041 41.2401 20.2981 41.2401H15.344C14.0722 41.2401 13 40.1901 13 38.9479C13 37.7056 14.0722 36.6483 15.344 36.6483H20.2981C21.0375 36.6483 21.8435 36.2564 22.2428 35.5983C23.448 33.6906 25.5258 32.4483 27.9437 32.4483C30.3616 32.4483 32.432 33.6906 33.6373 35.5983C34.0366 36.2564 34.776 36.6483 35.582 36.6483H65.536C66.8078 36.6483 67.8799 37.6982 67.8799 38.9479ZM67.8799 54.8307C67.8799 56.0803 66.8078 57.1303 65.536 57.1303H61.1808C60.4414 57.1303 59.6354 57.5222 59.2361 58.1803C58.0308 60.088 55.9531 61.3302 53.5351 61.3302C51.1172 61.3302 48.9803 60.088 47.8416 58.1803C47.4423 57.5222 46.7029 57.1303 45.8969 57.1303H15.344C14.0722 57.1303 13 56.0803 13 54.8307C13 53.5811 14.0722 52.5385 15.344 52.5385H45.8969C46.6363 52.5385 47.4423 52.1392 47.8416 51.4811C49.0468 49.5808 51.1246 48.3312 53.5351 48.3312C55.9457 48.3312 58.0308 49.5808 59.2361 51.4811C59.6354 52.1392 60.3748 52.5385 61.1808 52.5385H65.536C66.8078 52.5385 67.8799 53.5885 67.8799 54.8307ZM67.8799 24.4995C67.8799 25.7492 66.8078 26.7991 65.5286 26.7991H61.1734C60.3674 26.7991 59.628 27.191 59.2213 27.8491C58.0826 29.7568 55.9383 30.9991 53.5204 30.9991C51.1024 30.9991 49.0247 29.7568 47.8194 27.8491C47.4127 27.191 46.6141 26.7991 45.8747 26.7991H15.344C14.0722 26.7991 13 25.7492 13 24.4995C13 23.2499 14.0722 22.2073 15.344 22.2073H45.9413C46.7472 22.2073 47.4793 21.808 47.886 21.1573C49.0247 19.2496 51.1764 18 53.5869 18C55.9974 18 58.0826 19.2496 59.2878 21.1573C59.6945 21.808 60.5005 22.2073 61.2399 22.2073H65.5286C66.8078 22.2073 67.8799 23.2573 67.8799 24.4995Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div className="app-body" style={{ padding: "0 40px 0", color: "#fff", fontWeight: 600 }}>
                        <img src="no_results.png" style={{ width: "240px", display: "block", margin: "300px auto 40px" }} />
                        <p style={{ color: "#343D4C", opacity: "30%", fontSize: "36px", fontWeight: 500, textAlign: 'center' }}>Search for any content across {appName}</p>
                    </div>
                </div>
                {/* device */}
                <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", top: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "8%" }}>&nbsp;</div>
            </div>
        </div>
    </div>
    <button onClick={htmlToImageConvert2} className="download-btn">Download Image</button>
</div>
{/* fifth end */ }
