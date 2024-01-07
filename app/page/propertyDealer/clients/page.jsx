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
    amount: "2000",
    propertyName: "Mansion",
    username: "Penguin Angelo",
    phoneNumber: "071111331",
  }

];
export default function ClientComponent() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const openMore = (id) => {
    router.push(`clients/client/${id}`);
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
            <h1>Clients</h1>
            <input type="date" name="table" className={styles.dateFilter} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number </th>
                <th>Property Name</th>
                <th>Amount</th>
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
                    <td>{data.phoneNumber}</td>
                    <td>{data.propertyName}</td>
                    <td>Ksh {data.amount}</td>
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
