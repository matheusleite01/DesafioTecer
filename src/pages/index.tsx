import Head from "next/head";
import EmptyData from "@/components/EmptyData";
import ProductList from "@/components/ProductList";
import { ProductProps } from "@/types";
import { getAllProducts } from "@/pages/api/products";

type PageProps = {
  data: ProductProps[];
  error: string;
};

export default function Page({ data, error }: PageProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Dev Store products" />
      </Head>
      <div className="container mx-auto">
        {data.length ? (
          <ProductList dataProduct={data} />
        ) : (
          <EmptyData error={error} />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = (await getAllProducts()) as ProductProps[];
    return {
      props: {
        data,
      },
      revalidate: 120,
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: "Failed to fetch products. Please try again later.",
      },
      revalidate: 120,
    };
  }
}
