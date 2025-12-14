export default function InfoBox({ title, children }) {
  return (
    <div style={{
      padding: "1rem",
      borderLeft: "4px solid #000",
      margin: "2rem 0",
      background: "#f7f7f7"
    }}>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  )
}
