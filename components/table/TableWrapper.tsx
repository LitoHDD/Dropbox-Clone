import { FileType } from "@/typings";
import React from "react";
import { Button } from "../ui/button";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  return (
    <div>
      <Button>Sort By ...</Button>
    </div>
  );
}

export default TableWrapper;
