import * as React from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUpload.css";
import fileUpload from "../images/upload.svg";

function ImageDropper() {
  const [imageUrl, setImageUrl] = React.useState();
  const [imageFile, setImageFile] = React.useState();

  console.log(imageUrl);

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImageFile(file);

      // convert file to data: url
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => setImageUrl(String(reader.result)),
        false
      );
      reader.readAsDataURL(file);
    },
    [setImageFile, setImageUrl]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="uploadMain">
      <div className="uploadBody" {...getRootProps()}>
        {/* {imageFile ? imageFile.name : ""} */}
        {isDragActive ? (
          <p>Drop files here...</p>
        ) : (
          <p>
            <img src={fileUpload} /> Upload
          </p>
        )}
        <input {...getInputProps()} />
      </div>
      {imageUrl && (
        <div className="imageStyle">
          <img src={imageUrl} />
        </div>
      )}
    </div>
  );
}

export default ImageDropper;
