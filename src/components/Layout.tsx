import EventNews from "./EventNews";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <EventNews />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
