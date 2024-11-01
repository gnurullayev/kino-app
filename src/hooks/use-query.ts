import { useEffect, useState } from "react";
import deepEqual from "deep-equal";
import { useRouter } from "next/router";

export function useQuery() {
  const router = useRouter();
  const { query } = router;

  const [page, setPage] = useState(() => query["page"] || 1);
  const [sort, setSort] = useState(() => query["sort"] || null);
  const [desc, setDesc] = useState(() => query["desc"] || false);
  const [params, setParams] = useState<{ [key: string]: any }>(() => {
    const parsed = parseQueryParams(query);

    delete parsed["page"];
    delete parsed["sort"];
    delete parsed["desc"];

    return parsed;
  });

  const updateQuery = (newParams: { [key: string]: any }, replace = true) => {
    const updatedQuery = { ...query, ...newParams };

    // Remove any parameters that have a null or undefined value
    Object.keys(updatedQuery).forEach(
      (key) => updatedQuery[key] == null && delete updatedQuery[key]
    );

    if (replace) {
      router.replace({ query: updatedQuery }, undefined, { shallow: true });
    } else {
      router.push({ query: updatedQuery }, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    const parsed = parseQueryParams(query);

    setPage(parsed["page"] || 1);
    setSort(parsed["sort"] || null);
    setDesc(parsed["desc"] || false);

    delete parsed["page"];
    delete parsed["sort"];
    delete parsed["desc"];

    if (!deepEqual(params, parsed)) {
      setParams(parsed);
    }
  }, [query, params]);

  return { params, page, sort, desc, setParams, updateQuery };
}

function parseQueryParams(query: { [key: string]: any }) {
  const parsed: { [key: string]: any } = {};

  for (const key in query) {
    parsed[key] = Array.isArray(query[key]) ? query[key][0] : query[key];
  }

  return parsed;
}
