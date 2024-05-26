import React from "react";
import { useLocation } from "react-router-dom";

function DownloadPage() {
  const location = useLocation();
  const { username } = location.state || { username: "User" };

  const files = [
    { name: "File 1", link: "/path/to/file1.zip" },
    { name: "File 2", link: "/path/to/file2.zip" },
    { name: "File 3", link: "/path/to/file3.zip" },
  ];

  return (
    <div className="container mt-5">
      <h2>Selamat datang, {username}!</h2>
      <p>Berikut adalah daftar berkas yang dapat diunduh:</p>
      <ul className="list-group">
        {files.map((file, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {file.name}
            <a href={file.link} className="btn btn-success" download>
              Unduh
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DownloadPage;
