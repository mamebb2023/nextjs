import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuesitons?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuesitons, showCount }: Props) => {
  return (
    <div>
      <Link href={`/tag/${_id}`} className="flex justify-between gap-2">
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase ">
          {name}
        </Badge>
        {showCount && (
          <Badge className="small-medium text-dark500_light700">
            {totalQuesitons}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default RenderTag;
