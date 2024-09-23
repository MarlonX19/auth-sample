import { useSearchParams } from "react-router-dom";

type MyPaginationProps = {
  items: number;
  page: number;
  pages: number;
};

export const MyPagination = ({ items, page, pages }: MyPaginationProps) => {
  const [, setSearchParams] = useSearchParams();

  const firstPage = () => {
    setSearchParams((params) => {
      params.set("page", "1");
      return params;
    });
  };
  const lastPage = () => {
    setSearchParams((params) => {
      params.set("page", String(pages));
      return params;
    });
  };

  const previousPage = () => {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  };

  const nextPage = () => {
    if (page + 1 > pages) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page + 1));
      return params;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <div>
        <span>
          {page} de {pages}
        </span>
      </div>
      <div
        style={{
          borderRadius: "8px",
          background: "#ccc",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={firstPage}
      >
        {"<<"}
      </div>
      <div
        style={{
          borderRadius: "8px",
          background: "#ccc",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={previousPage}
      >
        {"<"}
      </div>
      <div
        style={{
          borderRadius: "8px",
          background: "#ccc",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={nextPage}
      >
        {">"}
      </div>
      <div
        style={{
          borderRadius: "8px",
          background: "#ccc",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={lastPage}
      >
        {">>"}
      </div>
    </div>
  );
};
