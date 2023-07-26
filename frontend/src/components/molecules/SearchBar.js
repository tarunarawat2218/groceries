import React, {useState} from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="col-md-7">
            <div className="d-flex form-inputs">
                <input
                    className="search form-control"
                    type="text"
                    placeholder="Search any product..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;
