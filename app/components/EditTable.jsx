"use client";

import Image from "next/image";
import styles from "@/app/style/editTable.module.css";
import { usePathname, useRouter } from "next/navigation";

import {
  TrashIcon as DeleteIcon,
  PencilSquareIcon as EditIcon,
} from "@heroicons/react/24/solid";

export default function EditTable({ Title, tableData }) {
  const router = useRouter();

  const edit = (id) => {
    router.push(`edit/${id}`);
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
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Ads Boost</th>
            <th>Price(Ksh)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.tableProfile}>
                    <Image
                      src={data.image}
                      className={styles.tableProfileImage}
                      alt="Profile image"
                      width={30}
                      height={30}
                      priority
                    />
                    {data.name}
                  </div>
                </td>
                <td>{data.type}</td>
                <td>{data.location}</td>
                <td>{data.boost}</td>
                <td>{data.price}/-</td>
                <td>
                  <div className={styles.EditTableComponent}>
                    <EditIcon
                      className={styles.EditIcon}
                      onClick={() => edit(data.id)}
                      alt="Edit icon"
                      width={20}
                      height={20}
                    />
                    <DeleteIcon
                      className={styles.DeleteIcon}
                      onClick={() => delete(data.id)}
                      alt="Delete icon"
                      width={20}
                      height={20}
                    />
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
