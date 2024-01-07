  "use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { useState, useRef, useEffect } from "react";
import styles from "@/app/style/addRental.module.css";
import {
  CameraIcon,
  MapIcon as LandIcon,
} from "@heroicons/react/24/outline";

const FileInput = ({ onChange, idImage }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.formChangeUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div className={styles.AdsSection}>
        {idImage === null ? (
          <div className={styles.uploadCameraIcon} onClick={handleIconClick}>
            <CameraIcon
              className={styles.CameraIcon}
              alt="Camera Icon"
              width={30}
              height={30}
            />
          </div>
        ) : (
          <Image
            src={idImage}
            alt="Id Image"
            className={styles.IdImage}
            layout="fill"
            quality={100}
            objectFit="cover"
            priority
          />
        )}
      </div>
    </div>
  );
};

const GoogleMap = ({ onSelectLocation }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.defer = true;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); 

  const initMap = () => {
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      }
    );

    setMap(mapInstance);

    mapInstance.addListener("click", (event) => {
      const { latLng } = event;
      const latitude = latLng.lat();
      const longitude = latLng.lng();

      onSelectLocation({ latitude, longitude });
    });
  };

  return <div id="map" className={styles.mapRental}></div>;
};

export default function AddRental() {
  const [imageUrls, setImageUrls] = useState([null, null, null, null, null]);
  const [payPopup, setPayPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const router = useRouter();

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    togglePayPopup();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success('Rental added succesfully')
    } catch (error) {
      console.error(error);
      toast.error('Rental not added')
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = imageUrl;
      setImageUrls(newImageUrls);
    }
  };



  const onSelectLocation = ({ latitude, longitude }) => {
    setSelectedLocation({ latitude, longitude });
    toast.success(`Selected Location: ${latitude}, ${longitude}`);
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1>Add rental</h1>
      </div>
      <div className={styles.formContainerInner}>
        <div className={styles.ContainSide}>
          {/* Property Name */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Property Name</label>
            <div className={styles.formInput}>
              <LandIcon
                className={styles.formInputIcon}
                alt="PropertyName icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="PropertyName"
                id="PropertyName"
                placeholder="Rsft Land"
              />
            </div>
          </div>
          {/* land Description */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>land Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              className={styles.filterInputTextArea}
              placeholder="description"
              rows={4}
            />
          </div>
        </div>
        <div className={styles.ContainSideTwo}>
          <h2>Upload images of the apartment (capture exterior)</h2>
          <div className={styles.ContainSideInner}>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className={styles.SideInner}>
                <label className={styles.formLabel}>Image {index}</label>
                <FileInput
                  onChange={(e) => handleImageUpload(e, index - 1)}
                  idImage={imageUrls[index - 1]}
                />
              </div>
            ))}
          </div>
          {selectedLocation && (
            <div>
              Selected Location: {selectedLocation.latitude},{" "}
              {selectedLocation.longitude}
            </div>
          )}
          <GoogleMap onSelectLocation={onSelectLocation} />
        </div>
      </div>
    </form>
  );
}
