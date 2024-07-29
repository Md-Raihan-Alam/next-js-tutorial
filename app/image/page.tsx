import React from "react";
import Image from "next/image";
import image from "@/public/images/image.jpg";
// https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
const ImageCover = () => {
  return (
    <div className="relative h-screen">
      {/* <Image src={image} alt="Kaneki" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        width={300}
        height={170}
        alt="React+TS"
        fill={true}
      /> */}
      <Image
        src="https://bit.ly/react-cover"
        alt="React+TS"
        fill={true}
        // style={{ objectFit: "cover" }}
        className="object-cover"
        // sizes="100vw"
        sizes="(max-width:480px) 100vw,(max-width:768px) 50vw,33vw"
        quality={100}
        priority
      />
    </div>
  );
};
export default ImageCover;
