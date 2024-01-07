"use client";

import styles from "@/app/style/table.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function TableComponent({ Title, TableData }) {
  const router = useRouter();

  const openMore = (id) => {
    router.push(`details/${id}`);
  };
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h1>{Title}</h1>
        <input type="date" name="table" className={styles.dateFilter} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {TableData.length > 0 ? (
            TableData.map((data, index) => (
              <tr key={index}>
                <td>{data.amount}/-</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.paidFor}</td>
                <td>
                  <div
                    className={`${styles.tablePending} ${
                      data.status === "Paid"
                        ? styles.succesStat
                        : data.status === "pending"
                        ? styles.pendingStat
                        : styles.failStat
                    }`}
                    onClick={() => openMore(data.id)}
                  > 
                    {data.status}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
