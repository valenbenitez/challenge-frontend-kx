import * as React from "react";
import { useDispatch } from "react-redux";
import { fullSearch, getComercios } from "../../redux/actions/commerces";
import "./input.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

export default function CustomizedInputBase() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") {
      return alert("Porfavor ingrese lo que desea buscar");
    } else {
      dispatch(fullSearch(input));
      setInput("");
    }
  }

  function handleClear() {
    dispatch(getComercios());
  }

  return (
    <div className="d">
      <Paper
        className="paper"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          color="secondary"
          className="inputS"
          onChange={(e) => handleChange(e)}
          value={input}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          color="warning"
          onClick={(e) => handleSubmit(e)}
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Stack>
        <Button
          onClick={handleClear}
          className="buttonC"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          limpiar filtros
        </Button>
      </Stack>
    </div>
  );
}
