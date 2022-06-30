import React from "react";
import Link from "next/link";

function ImageNav() {
  return (
    <div>
      <nav>
        <Link href="/optimizasyon/img">
          <a>
            <button className="buton">Img</button>
          </a>
        </Link>
        <Link href="/optimizasyon/image">
          <a>
            <button className="buton">Image</button>
          </a>
        </Link>
        <Link href="/optimizasyon/localImage">
          <a>
            <button className="buton">Local Image</button>
          </a>
        </Link>
        <Link href="/optimizasyon/imageSizing">
          <a>
            <button className="buton">Image Sizing</button>
          </a>
        </Link>
        <hr />
      </nav>
      <style jsx>
        {`
          .buton {
            color: #0070f3;
            background-color: rgb(247, 247, 247);
            padding: 10px 30px;
            margin: 20px;
            border: none;
            border-radius: 5px;
          }
          .buton:hover {
            color: #000;
          }
        `}
      </style>
    </div>
  );
}

export default ImageNav;
