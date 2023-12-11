
export default function Notification({ text, timestamp, unread, icon, image, emoji, android, quotes }) {

    let emojiSrc = 'emoji-party-ios.png';

    if (android) {
        emojiSrc = 'emoji-party-android.png';
    }

    return (
        <div style={{ backgroundColor: unread ? "#F0F7FF" : "#ffffff", borderRadius: "16px", display: "block", color: "#666", padding: "16px 40px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 24px 1px", marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "top", marginBottom: 20, marginTop: 30 }}>
                <div>
                    {image ? <img src={image} style={{ width: 80, height: 80, borderRadius: 60, marginRight: 20 }} /> : ''}
                </div>
                <div>
                    <p style={{ fontSize: 36, fontWeight: 500, color: "#343D4C", marginTop: 0 }}>{quotes ? '"' : ''}{text}{emoji ? <img src={emojiSrc} style={{ width: 35, height: 35 }} /> : ''}{quotes ? '"' : ''}</p>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                        <img src={icon} width="28" height="28" style={{ marginRight: 8 }} />
                        <p style={{ fontSize: 28, fontWeight: 500, opacity: "0.7", margin: 0, color: "#6D7C99", flexGrow: 1 }}>{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}