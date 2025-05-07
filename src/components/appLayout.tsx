// COMPONENTS
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="flex pt-17 flex-col">
        {children}
      </div>
      <Footer />
    </>
  );
}