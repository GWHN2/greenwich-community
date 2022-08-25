import React, { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "./TextInput";

interface ITextInput {
  placeholder: string;
  name: string;
  type?: string;
}
interface IHookFormProps {
  defaultValues: { [key: string]: string };
  textInputs: ITextInput[];
  onTextChange: (values: { [key: string]: string }) => void;
  className?: string;
  children?: React.ReactNode;
}
const HookForm = (props: IHookFormProps) => {
  const {
    defaultValues,
    textInputs,
    onTextChange,
    className = "grid-cols-1",
    children,
  } = props;
  const {
    control,
    reset,
    getValues,
    watch,

    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return defaultValues;
    }, [defaultValues]),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(defaultValues)]);

  return (
    <div className={`grid w-full gap-2 ${className}`}>
      {textInputs.map((item, index) => {
        return (
          <Controller
            key={index}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                type={item.type || "text"}
                value={value}
                label={item.placeholder}
                placeholder={item.placeholder}
                onChange={(e) => {
                  onChange(e);
                  onTextChange(getValues());
                }}
              />
            )}
            name={item.name}
          />
        );
      })}
      {children}
    </div>
  );
};

export default HookForm;
