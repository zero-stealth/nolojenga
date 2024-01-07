"use client";

import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/book.module.css";
import BannerImage from "@/public/assets/banner.png";
import { usePathname, useRouter } from "next/navigation";

const itemsPerPage = 7;

const tableData = [
  {
    id: 1,
    profile: BannerImage,
    balance: "2000",
    roomNumber: "2",
    username: "Penguin Angelo",
    PhoneNumber: "071111331",
  }

];
export default function TableComponent() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const openMore = (id) => {
    router.push(`tenants/tenant/${id}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.bookContainer}>
      <NavBar />
      <div className={styles.tableContainer}>
        <div className={styles.tableContainerInner}>
          <div className={styles.tableHeader}>
            <h1>Tenants</h1>
            <input type="date" name="table" className={styles.dateFilter} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number </th>
                <th>Room Number</th>
                <th>Balance</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((data, index) => (
                  <tr key={index}>
                    <td>
                        {data.username}
                    </td>
                    <td>{data.PhoneNumber}</td>
                    <td>{data.roomNumber}</td>
                    <td>Ksh {data.balance}</td>
                    <td>
                      <button
                        className={styles.tableBtn}
                        onClick={() => openMore(data.id)}
                      >
                        View
                      </button>
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
        <div className={styles.tableFooter}>
          <h1>
            Page {currentPage} of {totalPages}
          </h1>
          <div className={styles.tableFooterBtnContain}>
            <button
              className={styles.tableFooterBtn}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={styles.tableFooterBtn}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
