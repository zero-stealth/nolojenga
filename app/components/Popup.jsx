import styles from "@/app/style/popup.module.css";
import { XCircleIcon as ExitIcon } from "@heroicons/react/24/outline";

export default function PopupComponent({
  isOpen,
  onClose,
  content,
  Width,
  Height,
  Top,
  Right,
  Left,
  Bottom,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.popupContainer}>
    <div
      className={styles.popup}
      style={{
        width: `${Width}px`,
        height: `${Height}px`,
        top: `${Top}px`,
        right: `${Right}px`,
        bottom: `${Bottom}px`,
        left: `${Left}px`,
      }}
    >
      <div className={styles.popupHeader}>
        <div className={styles.Notchbar}></div>
        <div className={styles.popupExit}>
          <ExitIcon
            className={styles.popupIcon}
            alt="Exit icon"
            onClick={onClose}
            width={30}
            height={30}
          />
        </div>
      </div>
      {content}
      <div className="dotContainer">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
    </div>
  );
}
