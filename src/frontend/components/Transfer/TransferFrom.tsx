import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "../../data/api";
import {
  SessionDataState,
  UserDataState,
  UserRoleState,
} from "../../data/globalState";
import { ACCESS_TOKEN } from "../../data/localStorage";
import { approve, balanceOf, transferFrom } from "../../service/token-service";
import Button from "../common/Button";
import HookForm from "../common/HookForm";
import Titles from "../common/Titles";

const TransferFrom = () => {
  const defaultValues = {
    PrincipalId: "",
    amount: "",
  };

  const textInputs = [
    {
      placeholder: "Enter Principal Id",
      name: "PrincipalId",
    },
    {
      placeholder: "Enter amount",
      name: "amount",
      type: "number",
    },
  ];
  const [formValues, setFormValues] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const sessiondata = useRecoilValue(SessionDataState);
  const handleTransfer = async () => {
    setLoading(true);
    try {
      console.log(sessiondata?.principalId);
      console.log(formValues.PrincipalId);
      const balance = await balanceOf(sessiondata?.principalId as string);
      console.log(balance);
      const approved = await approve(
        "n3zld-k42mj-idvze-l4tw7-jl2dj-ucevs-aarkk-5qzt5-n3lmz-25rc2-pae",
        +formValues.amount
      );
      console.log("approved", approved);

      if (approved.Ok) {
        const response = await transferFrom(
          sessiondata?.principalId as string,
          formValues.PrincipalId,
          +formValues.amount
        );
        console.log(response);
        if (response?.Ok) {
          toast.success("Transfer Successful");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full p-6 my-10 bg-white rounded-lg lg:w-1/2 drop-shadow-xl">
      <Titles title="Transfer" className="text-center" />
      <div className="flex flex-col items-center justify-center space-y-5">
        <HookForm
          textInputs={textInputs}
          defaultValues={defaultValues}
          onTextChange={(values) => {
            setFormValues(values as any);
          }}
        />
        <div className="flex justify-center">
          <Button onClick={handleTransfer} loading={loading}>
            Transfer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransferFrom;
