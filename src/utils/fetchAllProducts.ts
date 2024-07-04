import api from "@/service/api";

export default async function fetchAllProducts() {
  const { data } = await api.get("/products");
  return data;
}
