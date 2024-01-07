"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
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

  const [serviceData, setServiceData] = useState({});

  useEffect(() => {

    // fetch(`/api/tenants/${id}`)
    //   .then(response => response.json())
    //   .then(data => setServiceData(data));

    setServiceData(filteredData[0] || {});
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
                src={serviceData.profile}
                className={styles.tenantProfileImage}
                alt="Profile image"
                width={140}
                height={140}
                priority
              />
              <div className={styles.tenantProfileInfo}>
                <h1>{serviceData.username}</h1>
                <h2>{serviceData.phoneNumber}</h2>
              </div>
            </div>
            <div className={styles.tenantInfoContent}>
            <div className={styles.tenantInfodiv}>
                <h3>Booked On</h3>
                <span>{serviceData.joined}</span>
              </div>
              <div className={styles.tenantInfodiv}>
                <h3>Room Number</h3>
                <span>{serviceData.roomNumber}</span>
              </div>
              <div className={styles.tenantInfodiv}>
                <h3>Total Balance</h3>
                <span>Ksh {serviceData.balance}</span>
              </div>
            </div>
          </div>

          <TableComponent Title={'Payment History'} TableData={filteredData} />
        </div>
      </div>
    </div>
  );
}
