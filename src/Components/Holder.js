import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import Device from "./Device";
import hexToRgba from 'hex-to-rgba';

export default function Holder({ shotWidth, shotHeight, themeColour, lightMode, appName, deviceWidth, tablet, displayText, backgroundColor, children, imageName, background, marginOffset }) {

    const elementRef = useRef(null);

    const htmlToImageConvert = () => {
        toPng(elementRef.current, { cacheBust: false, pixelRatio: 1 })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = appName.replace(' ', '-').toLowerCase() + '--' + imageName + '.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const bgColor = hexToRgba(themeColour, '0.035');

    return (
        <div className="1" style={{ marginRight: 20 }}>
            <div style={{ zoom: 0.3 }}>
                <div
                    ref={elementRef}
                    style={{ backgroundColor: "#ffffff" }}>
                    <div
                        style={{
                            fontFamily: "Lato, Arial, Helvetica, sans-serif",
                            width: shotWidth,
                            height: shotHeight,
                            backgroundColor: bgColor,
                            overflow: "hidden",
                            position: "relative",
                            // display: "flex",
                            // flexDirection: "column",
                            // alignItems: "center"
                        }}
                    ><h1 style={{ color: lightMode ? "#000" : themeColour, fontSize: 64, textAlign: "center", height: 780, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 20%" }}>{displayText}!</h1>

                        <Device deviceWidth={deviceWidth} tablet={tablet} backgroundColor={backgroundColor} themeColour={themeColour} children={children} marginOffset={marginOffset} />
                        {background == 'top' ?
                            <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", top: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "4%" }}>&nbsp;</div>
                            :
                            <div className="circle" style={{ "background": themeColour, "width": "2580px", "height": "2580px", "position": "absolute", bottom: "-50%", left: "-645px", borderRadius: "50%", "zIndex": 1, opacity: "4%" }}>&nbsp;</div>
                        }
                    </div>
                </div>
            </div>
            <button onClick={htmlToImageConvert} className="download-btn download">Download Image</button>
        </div>
    );
}