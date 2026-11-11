import { useEffect } from "react";
import "../styles/Toast.css";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(onClose, 2800);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const icon = type === "success" ? "✓" : type === "error" ? "⚠" : "ℹ";

  return (
    <div className={`toast toast-${type}`} role="status">
      <span className="toast-icon">{icon}</span>
      <span className="toast-message">{message}</span>

      <button
        type="button"
        className="toast-close"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;