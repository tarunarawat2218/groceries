import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container maxWidth="md" sx={{  }}>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 1000}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}