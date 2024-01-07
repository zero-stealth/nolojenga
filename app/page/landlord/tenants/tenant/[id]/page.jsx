"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import styles from '@/app/style/tenantInfo.module.css';
import BannerImage from '@/public/assets/banner.png';
import BackNavigation from '@/app/components/navigation';
import TableComponent from '@/app/components/TableComponent';

const tableData = [
  {
    id: 1,
    profile: BannerImage,
    balance: '2000',
    roomNumber: 'B-2',
    username: 'Penguin Angelo',
    phoneNumber: '071111331',
    joined: '2023-03-01',
    date: '2023-03-01',
    time: '2023-03-01',
    amount: '2000',
    paidFor: 'Rent',
    status: 'Paid',
  },
];

export default function TenantInfo({ params }) {
  const { id } = params;

  const filteredData = tableData.filter((item) => item.id === Number(id));

  const [tenantData, setTenantData] = useState({});

  useEffect(() => {

    // fetch(`/api/tenants/${id}`)
    //   .then(response => response.json())
    //   .then(data => setTenantData(data));

    setTenantData(filteredData[0] || {});
  }, [id]);

  return (
    <div className={styles.tenantInfoComponent}>
      <NavBar />
      <div className={styles.tenantInfoComponent}>
        <BackNavigation />
        <div className={styles.tenantInfoWrapper}>
          <div className={styles.tenantInfo}>
            <div className={styles.tenantProfile}>
              <Image
                src={tenantData.profile}
                className={styles.tenantProfileImage}
                alt="Profile image"
                width={140}
                height={140}
                priority
              />
              <div className={styles.tenantProfileInfo}>
                <h1>{tenantData.username}</h1>
                <h2>{tenantData.phoneNumber}</h2>
              </div>
            </div>
            <div className={styles.tenantInfoContent}>
            <div className={styles.tenantInfodiv}>
                <h3>Joined On</h3>
                <span>{tenantData.joined}</span>
              </div>
              <div className={styles.tenantInfodiv}>
                <h3>Room Number</h3>
                <span>{tenantData.roomNumber}</span>
              </div>
              <div className={styles.tenantInfodiv}>
                <h3>Total Balance</h3>
                <span>Ksh {tenantData.balance}</span>
              </div>
            </div>
          </div>

          <TableComponent Title={'Payment History'} TableData={filteredData} />
        </div>
      </div>
    </div>
  );
}
