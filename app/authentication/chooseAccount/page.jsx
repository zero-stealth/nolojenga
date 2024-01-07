                                                                                                                            "use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Dropdown from "@/app/components/Dropdown";
import styles from "@/app/style/choose.module.css";
import { UserIcon } from "@heroicons/react/24/outline";

const account = [
  "serviceProvider",
  "propertyDealer",
  "landlord",
  "landSeller",
  "tenant",
];

const userIcon = (
  <UserIcon
    className={styles.dropdownUserIcon}
    alt="User icon"
    width={24}
    height={24}
  />
);

export default function ChooseAccount() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAccountSelection = (selectedAccount) => {
    if (account.length === 1) {
      router.push(`/page/${account[0]}/dashboard`);
      localStorage.setItem("account", account[0]);
    
    } else {
      router.push(`/page/${selectedAccount}/dashboard`);
      localStorage.setItem("account", selectedAccount);
    }
    toast.success(`Hi ${selectedAccount}, welcome to  Nolojenga`);
  };

  return (
    <div className={styles.chooseComponent}>
      <h1>
        <span>Welcome</span> choose an account
      </h1>
      <Dropdown
        options={account}
        Icon={userIcon}
        dropPlaceHolder="no account selected"
        onSelect={(selectedAccount) => {
          setSelectedOption(selectedAccount);
          handleAccountSelection(selectedAccount);
        }}
      />
    </div>
  );
}
