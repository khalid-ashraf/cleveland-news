import MainHeader from "@/components/main-header";

export const metadata = {
  title: "Cleveland News",
  description: "Everything that happens in Cleveland",
};

export default function ContentLayout({ children }) {
  return (
    <div id='page'>
      <MainHeader />
      {children}
    </div>
  );
}
