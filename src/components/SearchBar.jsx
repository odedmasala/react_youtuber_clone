import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
      <Paper
        component={"form"}
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input  className='search-bar' onChange={()=>{}} placeholder="Search..." value="" type="text" />
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <SearchIcon/>
        </IconButton>
      </Paper>
  );
};

export default SearchBar;
