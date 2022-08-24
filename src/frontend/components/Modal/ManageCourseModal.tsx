import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState, useResetRecoilState } from "recoil";
import API from "../../data/api";
import { EditingItemIdState, ShowingModalState } from "../../data/globalState";
import { getHeaders } from "../../utils/getHeaders";

import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Modal from "../common/Modal";
import RefetchButton from "../common/RefetchButton";
import Titles from "../common/Titles";
import UploadingFilesToIPFS from "../Rating/UploadingFilesToIPFS";

const ManageCourseModal = () => {
  const [showingModal, setShowingModal] = useRecoilState(ShowingModalState);
  const [editingItemId, setEditingItemId] = useRecoilState(EditingItemIdState);
  const resetEditingItemId = useResetRecoilState(EditingItemIdState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const asPath = router.asPath;

  const { isLoading, data, isError, refetch } = useQuery(
    ["editingItemId", editingItemId],
    async (): Promise<any> => {
      if (editingItemId) {
        const headers = getHeaders();
        const response = await API.get(`${asPath}/${editingItemId}`, {
          headers,
        });
        const resData = response.data?.data;
        return {
          name: resData.name,
          imageUrl: resData.imageUrl,
          code: resData.code,
          tokens: resData.tokens,
          description: resData.description,
        };
      } else {
        return null;
      }
    }
  );

  const defaultValues = {
    name: "",
    imageUrl: "",
    code: "",
    tokens: "",
    description: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const textInputs = [
    {
      placeholder: "Enter name",
      name: "name",
    },
    {
      placeholder: "Enter imageUrl",
      name: "imageUrl",
    },
    {
      placeholder: "Enter code",
      name: "code",
    },
    {
      placeholder: "Enter tokens",
      name: "tokens",
      type: "number",
    },
    {
      placeholder: "Enter description",
      name: "description",
    },
  ];

  const handleEdit = async () => {
    try {
      const headers = getHeaders();
      const response = await API.patch(
        `/events/${editingItemId}`,
        {
          ...formValues,
        },
        { headers }
      );
      if (response.status === 200) {
        toast.success(asPath + " Edit successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    try {
      const headers = getHeaders();
      const response = await API.post(
        `/events`,
        {
          ...formValues,
        },
        { headers }
      );
      if (response.status === 200) {
        toast.success(asPath + " Added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={showingModal.includes("ManageCourse")}
      onClose={() => {
        setShowingModal("");
        resetEditingItemId();
      }}
    >
      {isLoading || isError ? (
        <RefetchButton refetch={refetch} loading={isLoading} />
      ) : (
        <>
          <Titles
            title={`${editingItemId ? "Edit" : "Add"} ${asPath.replace(
              "/",
              ""
            )}`}
            className="pt-0 text-center"
          />
          <UploadingFilesToIPFS />
          <div className="flex flex-col items-center justify-center space-y-5">
            <HookForm
              className="grid-cols-2"
              textInputs={textInputs}
              defaultValues={data || defaultValues}
              onTextChange={(values) => {
                setFormValues(values as any);
              }}
            />
            <div className="flex justify-center">
              <Button
                loading={loading}
                onClick={async () => {
                  setLoading(true);
                  if (editingItemId) {
                    await handleEdit();
                  } else {
                    await handleAdd();
                  }
                  setLoading(false);
                }}
              >
                {editingItemId ? "Edit" : "Add"}
              </Button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ManageCourseModal;
