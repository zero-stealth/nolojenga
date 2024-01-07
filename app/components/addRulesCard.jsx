import { useRouter } from "next/navigation";
import styles from "@/app/style/addRules.module.css";
import { MinusCircleIcon as RemoveIcon } from "@heroicons/react/24/solid";

const rulesData = [
  {
    rule: "Always keep the gate locked",
  },
  {
    rule: "No Partying and Loud Music",
  },
];

export default function RulesCardComponent() {
  const router = useRouter();
  const addRules = () => {
    router.push("add/rentals", { scroll: false });
  };

  const removeRules = (index) => {};

  return (
    <div className={styles.addRuleContainer}>
      <div className={styles.addRulesHeader}>
        <h1>Rules</h1>
        <button
          type="submit"
          onClick={addRules}
          className={styles.addRulesButton}
        >
          Add
        </button>
      </div>
      <div className={styles.addRulesContent}>
        <ol>
          {rulesData.map((data, index) => (
            <li key={index}>
              <div className={styles.addRulesCard}>
                {data.rule}
                <div
                  className={styles.removeIconContainer}
                  onClick={() => {
                    removeRules(index);
                  }}
                >
                  <RemoveIcon
                    className={styles.RemoveIcon}
                    alt="remove icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
