import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = ({
  collapsed,
  isMobile,
}: {
  collapsed: boolean;
  isMobile: boolean;
}) => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Image
        src="/images/logo-only.svg"
        alt="Logo"
        width={55}
        height={55}
        priority={true}
        style={{ maxWidth: "100%", height: "27px", width: "auto" }}
      />
      {!isMobile && !collapsed && (
        <Image
          src="/images/logo-text.svg"
          alt="Logo"
          width={95}
          height={95}
          priority={false}
          style={{ maxWidth: "100%", height: "27px", width: "auto" }}
        />
      )}
    </Link>
  );
};

export default HeaderLogo;
