import type { BookType } from '../store/slices/bookSlice';
import { axiosInstance } from '../api';

const getById = async (bookId: string | undefined) => {
  const response = await axiosInstance.get<{ book: BookType }>(`/book/${bookId}`);
  return response.data;
};

const likeBook = async (bookId: number, userId?: number) => {
  const response = await axiosInstance.post('book/like-book/', { bookId, userId });
  return response.data;
};

const filtered = async (params: object) => {
  const response = await axiosInstance.get<{ books: BookType[]; numberOfBooks: number }>('/book/filtered-books', { params });
  return response.data;
};

export default {
  getById,
  filtered,
  likeBook,
};
