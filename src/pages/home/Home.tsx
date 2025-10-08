import React, { useEffect} from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import {
  selectAllPosts,
  isLoadingPosts,
  loadAllPosts,
} from "@/app/store/slices/postsSlice";
import { Post } from "@/shared/components/post";

export const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const postsPreviews = useAppSelector(selectAllPosts);
    const isLoading = useAppSelector(isLoadingPosts);

    useEffect(() => {
      dispatch(loadAllPosts());
    }, [dispatch]);

    if (isLoading) {
      return <div>loading state</div>;
    }

    return (
      <>
        {postsPreviews.map((post) => (
          <Post key={post.data.id} post={post} />
        ))}
      </>
    );
};
