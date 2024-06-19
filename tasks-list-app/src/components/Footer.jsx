import "../styles/form-style.css";

export default function Footer({ countDone, totalTasks }) {
  return (
    <div className="footer">
      <span className="footer-span">Completed tasks: {countDone}</span>
      <span className="footer-span">Total tasks: {totalTasks}</span>
    </div>
  );
}
