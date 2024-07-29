"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
// https://www.bing.com/ck/a?!&&p=5ea99f125db48681JmltdHM9MTcyMTAwMTYwMCZpZ3VpZD0xYTBkMDUzZS1jNjQ2LTZjOTEtMTkxMC0xNDY2Yzc0NzZkNmUmaW5zaWQ9NTE5Ng&ptn=3&ver=2&hsh=3&fclid=1a0d053e-c646-6c91-1910-1466c7476d6e&psq=next+cloudinary&u=a1aHR0cHM6Ly9uZXh0LmNsb3VkaW5hcnkuZGV2Lw&ntb=1

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A conffie image"
        />
      )}
      <CldUploadWidget
        uploadPreset="qz05vzwm"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        // widget customize
        // options={{
        //     sources:["local"],
        //     multiple:false,
        //     maxFiles:5,
        //     style:{}
        // }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
