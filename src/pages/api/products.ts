import api from "@/service/api";

export async function getAllProducts() {
  const { data } = await api.get("/products");
  return data;
}

export async function getIdProduct(id: string) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
