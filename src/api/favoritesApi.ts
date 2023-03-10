import { axiosInstance } from '../api';
import type { BookType } from '../store/slices/bookSlice';

const getAll = async () => {
  const response = await axiosInstance.get<{ favoriteBooks: BookType[] }>('/favorites');
  return response.data;
};

const addById = async (bookId: number) => {
  const response = await axiosInstance.post<{ favoriteBook: BookType }>('/favorites/add', { bookId });
  return response.data;
};

const deleteById = async (bookId: number) => {
  const response = await axiosInstance.delete(`/favorites/${bookId}`);
  return response.data;
};

export default {
  getAll,
  addById,
  deleteById,
};
