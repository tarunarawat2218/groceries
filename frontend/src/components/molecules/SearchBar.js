import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Pass search term to parent component
    };

    return (
        <Container maxWidth="md">
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 1000 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end"></InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}
