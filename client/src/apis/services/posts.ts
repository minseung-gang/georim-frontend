import { State } from "../../reducer/postReducer";
import { instance, authInstance } from "../utils/instance";

export async function createPosts(posts: FormData, request: {}) {
  try {
    const response = await authInstance.post(`/api/posts`, posts, {
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
    const response = await authInstance.put(`/api/posts/${id}`, posts, {
      params: {
        request,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPromotionPosts() {
  try {
    const { data } = await authInstance.get(`/api/posts/promotion`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPromotionById(id: number) {
  try {
    const { data } = await authInstance.get(`/api/posts/promotion/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByCategory(category: string) {
  try {
    const { data } = await authInstance.get(`/api/posts?category=${category}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByUsername(username: string) {
  try {
    const { data } = await authInstance.get(`/api/posts?username=${username}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsById(id: number) {
  try {
    const { data } = await authInstance.get(`/api/posts/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostsById(id: number) {
  try {
    const response = await authInstance.delete(`/api/posts/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
