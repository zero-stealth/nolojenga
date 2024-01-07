import  { useState } from "react";
import styles from "@/app/style/dropdown.module.css";
import { ChevronDownIcon as DropdownIcon } from "@heroicons/react/24/outline";

export default function Dropdown({ options, onSelect, Icon, dropPlaceHolder }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); 
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput} onClick={() => setIsOpen(!isOpen)}>
        {Icon}
        <span>{selectedOption || dropPlaceHolder}</span>
        <DropdownIcon
          className={styles.dropdownIcon} 
          alt="Dropdown icon"
          width={16}
          height={16}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdownArea}>
          {options.map((option) => (
            <span key={option} onClick={() => handleSelect(option)}>
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
