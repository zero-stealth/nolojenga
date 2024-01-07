"use client";

import Image from "next/image";
import styles from "@/app/style/table.module.css";
import { usePathname , useRouter} from "next/navigation";

export default function TableComponent({
  Title,
  tableName,
  tableType,
  tableView,
  tableData,
}) {
  const router = useRouter()

  const openMore = (id) => {
    router.push(`rent/${id}`);
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
            <th>{tableName}</th>
            <th>{tableType}</th>
            <th>Price(Ksh)</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.tableProfile}>
                    <Image
                      src={data.profile}
                      className={styles.tableProfileImage}
                      alt="Profile image"
                      width={30}
                      height={30}
                      priority
                    />
                    {data.username}
                  </div>
                </td>
                <td>{data.type}</td>
                <td>{data.price}/-</td>
                <td>
                  <div
                    className={`${styles.tablePending} ${
                      data.status ? styles.succesStat : styles.failStat
                    }`}
                    onClick={() => openMore(data.id)}
                  >
                    {data.status}
                  </div>
                </td>
                <td>
                  <div
                    className={styles.tableBtn}
                    onClick={() => openMore(data.id)}
                  >
                    View
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
