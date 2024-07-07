import Header from "@/components/Header";
import SideCard from "@/components/SideCart";
import useGlobalContext from "@/hooks/useGlobalContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { enabledSideCart } = useGlobalContext();
  return (
    <>
      <div className={enabledSideCart ? "mr-52" : ""}>
        <Header />
        <main>{children}</main>
      </div>
      {enabledSideCart && <SideCard />}
    </>
  );
}
