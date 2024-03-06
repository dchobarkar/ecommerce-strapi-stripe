import { MdClose } from "react-icons/md";

import "./Search.scss";

const Search = ({ setSearchModal }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src="" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Name</span>
              <span className="desc">Desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
