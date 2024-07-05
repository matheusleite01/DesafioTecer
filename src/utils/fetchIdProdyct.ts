import api from "@/service/api";

export default async function fetchIdProduct(id: string) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
