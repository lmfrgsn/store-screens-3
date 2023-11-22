
import hexToRgba from 'hex-to-rgba';

export default function Device({ themeColour, lightMode, deviceWidth, tablet, children, backgroundColor, marginOffset }) {

    const borderColor = hexToRgba(themeColour, '0.005');

    // console.log(borderColor);

    return (
        <div style={{
            width: deviceWidth,
            height: tablet ? 3500 : 2042,
            backgroundColor: backgroundColor ? backgroundColor : "white",
            borderRadius: "36px 36px 0 0",
            border: "3px solid #D9D9D9",
            marginLeft: marginOffset,
            marginRight: marginOffset,
            display: "block",
            outline: `12px solid ${borderColor}`,
            overflow: "hidden",
            position: "relative",
            zIndex: 100,
            transform: tablet ? "scale(0.8)" : "",
            marginTop: tablet ? "-480px" : "",
        }}>
            {children}
        </div>
    );
}