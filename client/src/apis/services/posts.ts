import { State } from "../../reducer/postReducer";
import { instance, authInstance } from "../utils/instance";

export async function createPosts(posts: FormData, request: {}) {
  try {
    const response = await authInstance.post(`/posts`, posts, {
      params: {
        request,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePosts(posts: FormData, request: {}, id: string) {
  try {
    const response = await authInstance.put(`/posts/${id}`, posts, {
      params: {
        request,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByCategory(category: string) {
  try {
    const { data } = await authInstance.get(`/posts?category=${category}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByUsername(username: string) {
  try {
    const { data } = await authInstance.get(`/posts?username=${username}`);
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsById(id: number) {
  try {
    const { data } = await authInstance.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostsById(id: number) {
  try {
    const response = await authInstance.delete(`/posts/${id}`);
    console.log("delete", response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
