"use client";

import Image from "next/image";
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
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 2,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 3,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 4,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 5,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 6,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 7,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 8,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 9,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 10,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 11,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 12,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 13,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 14,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 15,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 16,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 17,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 18,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 19,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 20,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 21,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 22,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 23,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
  {
    id: 24,
    profile: BannerImage,
    time: "12:00:00",
    date: "12/11/2023",
    username: "Penguin Angelo",
    location: "Nairobi",
  },
];
export default function TableComponent() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const openMore = (id) => {
    router.push(`bookings/booking/${id}`);
  };

  const openMap = (slug) => {
    router.push(`map/${slug}`);
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
            <h1>Bookings</h1>
            <input type="date" name="table" className={styles.dateFilter} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Property name</th>
                <th>Date </th>
                <th>Time</th>
                <th>Location</th>
                <th>View Property</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((data, index) => (
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
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>
                      <button
                        className={styles.tableBtn}
                        onClick={() => openMap(data.location)}
                      >
                        Map
                      </button>
                    </td>
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
