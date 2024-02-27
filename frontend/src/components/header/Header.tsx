import Navbar from "../navbar/Navbar";
import SearchBar from "../searchBar/SearchBar";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex w-full gap-4 justify-between items-center p-4">
      <h2 className="font-bold text-2xl">Logo</h2>
      <Navbar />
      <SearchBar />
      <div className="flex gap-4 justify-around items-center">
        <a href="">Login</a>
        <a href="">Register</a>
        <Button>For Employers</Button>
      </div>
    </div>
  );
};

export default Header;
