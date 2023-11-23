export default function SmallList({ date, tablet, gradients, showIcons, displayDates, image, title }) {
    return (
        <>
            <label className="smallList" htmlFor="listImage1" style={{ width: "100%", boxSizing: "border-box", display: "flex", justifyContent: "space-between", boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 24px 1px", borderRadius: "1.5rem", backgroundColor: '#fff', margin: "1rem 0" }}>
                <div className="tile-image" style={{ position: 'relative', display: "flex", alignItems: "center", width: "28%", marginRight: "4%" }}>
                    <img src={image ? image : 'plus.png'} style={{ width: "100%", objectFit: "cover", borderRadius: "12px 0 0 12px", height: tablet ? "24rem" : "14rem" }} alt="" />
                    <div className='gradient' style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 37.13%)", zIndex: 2, opacity: gradients ? "90%" : "0", borderRadius: "12px 0 0 12px" }}>&nbsp;</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "64%", marginRight: "4%", padding: "1rem 0" }}>
                    <p style={{ fontSize: "40px", margin: 0, zIndex: 20, color: '#343D4C', fontWeight: 500 }}>{title}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#808080" }}>
                        <div style={{ display: showIcons ? "flex" : "none", alignItems: "center" }}>
                            <svg style={{ marginRight: "0.5rem", marginTop: "0.75rem" }} width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" fill="currentColor" />
                            </svg>
                            <p style={{ fontSize: "28px", fontWeight: "500", margin: 0, zIndex: 20, display: "block", width: "100%", marginTop: "0.75rem" }}>View List</p>
                        </div>
                        <div style={{ display: displayDates ? "flex" : "none", zIndex: 20, minWidth: "30%", textAlign: showIcons ? "right" : "left" }}>
                            <p style={{ fontWeight: "500", fontSize: "28px", margin: 0, display: "block", width: "100%", marginTop: "0.75rem" }}>{date}</p>
                        </div>
                    </div>
                </div>
            </label>
        </>
    )
}