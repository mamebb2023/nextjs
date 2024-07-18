import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuesitons?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuesitons, showCount }: Props) => {
  return <div>RenderTag</div>;
};

export default RenderTag;
