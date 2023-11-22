
export default function Body({ compact, noPadding, children }) {
    return (
        <div className="app-body" style={{ padding: noPadding ? "0" : "0 40px 0", marginTop: compact ? 0 : "-320px", color: "#fff", fontWeight: 600 }}>
            {children}
        </div>
    );
}