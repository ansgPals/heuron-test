import { useMemo } from "react";

export const useSearches = (
  data: Record<string, string>[],
  searchKeywords: Record<string, string>
) =>
  useMemo(() => {
    const filteredData = data.filter((row) =>
      Object.entries(searchKeywords).every(([key, keyword]) =>
        (row[key] ?? "")
          .toString()
          .toLowerCase()
          .includes(keyword?.toLowerCase() ?? "")
      )
    );

    return { filteredData };
  }, [data, searchKeywords]);
