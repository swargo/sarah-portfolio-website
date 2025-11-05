import Navigation from "../Navigation";
import Footer from "../Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
