import { useAutoAnimate } from "@formkit/auto-animate/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PostsResponse } from "./types";
import { MyPagination } from "../components/pagination";
import { useSearchParams } from "react-router-dom";

export function TableList() {
  const [animationParent] = useAutoAnimate();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const { data: postsResponse, isLoading } = useQuery<PostsResponse>({
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/posts?_page=${page}&_per_page=5`
      );

      const data = await response.json();
      return data;
    },
    queryKey: ["getTags", page],
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <h1>loading content</h1>;
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody ref={animationParent}>
            {postsResponse?.data?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {postsResponse && (
          <MyPagination
            page={page}
            pages={postsResponse.pages}
            items={postsResponse.items}
          />
        )}
      </div>
    </>
  );
}
