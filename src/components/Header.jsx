import { useContext } from "react";
import { Container } from "react-bootstrap";
// import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchContext from "../context/useContext";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SearchResult from "./SearchResult";

const Header = () => {
  const { handleSearch, searchData, setSearchData } = useContext(SearchContext)

  return (
    <nav className="navbar mb-5">
      <Container fluid className="">
        <h1 className="text-danger logo m-0"><Link className="text-decoration-none text-danger" to={'/'}>Movielist</Link></h1>
        <div className="search border rounded-5 border-danger d-flex align-items-center justify-content-between w-50 py-2 px-3">
          <input
            className="bg-transparent border-0 text-white search-input w-100 "
            type="text"
            placeholder="What do you want to watch?"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <Link to={"/searchresult"}>
            <BsSearch onClick={handleSearch} className="text-white m-1 searchButton" />
          </Link>
        </div>
        <form className="d-flex gap-2 m-0" role="search">
          <button
            className="btn btn-outline-danger rounded-5 py-2 px-4"
            type="submit"
          >
            Login
          </button>
          <button
            className="btn bg-danger text-white rounded-5 py-2 px-3"
            type="submit"
          >
            Register
          </button>
        </form>
      </Container>
    </nav>
  );
};

export default Header;
