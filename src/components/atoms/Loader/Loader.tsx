import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderContainer } from "./Loader.styles";
import { LoaderProps } from "./Loader.types";

export const Loader: React.FC<LoaderProps> = ({
  isLoading,
  size = 35,
  color = "#111",
}) => {
  if (!isLoading) return null;

  return (
    <LoaderContainer>
      <ClipLoader
        color={color}
        loading={isLoading}
        size={size}
        speedMultiplier={0.8}
      />
    </LoaderContainer>
  );
};
