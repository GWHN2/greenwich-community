import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import StorageClient from "../../utils/StorageClient";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

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
        const imageURI = await new StorageClient().storeFiles(selectedFile);
        setFileUrl(imageURI);
        if (callback) {
          callback(imageURI);
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
          className={`absolute flex items-center justify-center w-full h-full p-2 border
          rounded-lg cursor-pointer border-blue-400
          text-xl font-semibold bg-blue-400/40 text-white text-center
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
          <span className="flex flex-row items-center justify-center">
            <div className="w-5 mr-2 text-green-400 cursor-pointer">
              <CopyToClipboard
                text={fileUrl}
                onCopy={() => {
                  toast.success("Link copied to clipboard");
                }}
              >
                <ClipboardDocumentIcon />
              </CopyToClipboard>
            </div>
            File uploaded to IPFS:
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-medium text-blue-500"
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
