import { create } from "ipfs-http-client";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

const projectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_INFURA_PROJECT_SECRET;
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

const options = {
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
};

const client = create(options);

const UploadingFilesToIPFS = ({
  callback,
}: {
  callback?: (url: string) => void;
}) => {
  const [fileUrl, setFileUrl] = useState("");
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        console.log(fileRejections);
        toast.error(fileRejections[0]?.errors[0]?.message);
      } else {
        try {
          if (acceptedFiles) {
            setFileUrl("");
            const file = acceptedFiles[0];
            setSelectedFile(file);
          } else {
            setSelectedFile(undefined);
          }
        } catch (error) {
          console.log("Error read file: ", error);
        }
      }
    },
    []
  );

  const onSubmit = async () => {
    if (!name) {
      toast.error("Name is required");
      return;
    }
    try {
      if (selectedFile) {
        setLoading(true);
        const added = await client.add(selectedFile);
        console.log("====================================");
        console.log(added?.cid?.toString());
        console.log("====================================");
        const url = `https://greenwich-community.infura-ipfs.io/ipfs/${added.path}`;
        setFileUrl(url);
        if (callback) {
          callback(url);
        }
        toast.success("File uploaded to IPFS successfully");
        setLoading(false);
      } else {
        toast.error("Please select a file to upload");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error uploading file to IPFS");
      console.log("Error uploading file: ", error);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    maxFiles: 1,
    maxSize: 5000000,
  });

  return (
    <div>
      <div className="relative flex items-center justify-center p-2">
        <div
          className={`absolute flex items-center justify-center w-full h-full p-2 border-4 
          rounded-lg cursor-pointer border-blue-200
          text-xl font-semibold bg-primary-400/60 text-white text-center
          ${
            selectedFile || fileUrl || isDragActive
              ? "opacity-0 hover:opacity-100"
              : "h-20"
          }
          `}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag drop Image, or click to select</p>
          )}
        </div>
        {selectedFile && (
          <img src={URL.createObjectURL(selectedFile)} width="300px" />
        )}
      </div>
      <div className="flex flex-col my-10 space-y-3">
        <TextInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <Button onClick={onSubmit} disabled={loading} loading={loading}>
          Upload
        </Button>
        {fileUrl && (
          <span>
            {" "}
            Click to get Image URL:
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-400"
            >
              {name}
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default UploadingFilesToIPFS;
