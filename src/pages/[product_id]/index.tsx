import { getIdProduct } from "@/pages/api/products";
import { ProductProps } from "@/types/index";
import type { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";
import Head from "next/head";

type ProductDetailsProps = {
  productIdData: ProductProps;
};

const ProductDetailsPage = ({ productIdData }: ProductDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-[90vh] container mx-auto">
        <MoonLoader color="#A51A7D" role="spinner"/>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Product details</title>
        <meta name="description" content="Product content" />
      </Head>
      <div className="flex justify-center h-[80vh] container mx-auto">
        <Link
          href={"/"}
          className=" absolute left-20 top-24 flex items-center gap-1 text-xl text-purple font-bold max-md:hidden"
        >
          <IoMdArrowRoundBack size={20} />
          Back
        </Link>
        <ProductDetails product={productIdData} />
      </div>
    </>
  );
};

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const id = params?.product_id as string;
  const redirectPage = {
    redirect: {
      destination: "/",
      permanent: false,
    },
    props: {},
  };
  try {
    const productIdData = (await getIdProduct(id)) as ProductProps;
    if (!productIdData) return redirectPage;
    return { props: { productIdData } };
  } catch (err) {
    return redirectPage;
  }
}) satisfies GetStaticProps<{}>;

export default ProductDetailsPage;
