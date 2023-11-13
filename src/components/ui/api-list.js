"use client";

import useOrigin from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

const ApiList = ({ entityName, entityIdName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${process.env.API_URL}api/v1`;

  return (
    <>
      <ApiAlert
        title={"GET"}
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title={"GET"}
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title={"POST"}
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title={"PATCH"}
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title={"DELETE"}
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};

export default ApiList;
