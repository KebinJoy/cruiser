import NavBar from "@/ui/components/NavBar";
import AppSearchBar from "../AppSearchBar";

const AppNavBar = () => {
  return (
    <NavBar
      links={[{ href: "/about", label: "About" }]}
      home={{ href: "/", label: "Cruiser" }}
      endChild={<AppSearchBar />}
    />
  );
};

export default AppNavBar;
