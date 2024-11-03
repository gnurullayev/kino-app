import React, { FC, useRef } from "react";
import { route } from "@/utils";
import Routes from "@/enums/routes";
import { Box, Button, TextField } from "@mui/material";
import css from "./style.module.scss";
import { useRouter } from "next/router";

interface Props {
  searchValue: string;
  mutate: any;
}

const MovieSearch: FC<Props> = ({ mutate, searchValue }) => {
  const inputRef = useRef(searchValue);
  const router = useRouter();

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const value = inputRef.current ? inputRef.current : "...";
    mutate({ search: value });
    router.push(route(Routes.SEARCH_MOVIES, { search: value }));
  };

  return (
    <form
      className={css["form"]}
      style={{ margin: "20px auto", marginBottom: "50px", padding: "0 20px" }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Qidirish"
        variant="outlined"
        name="search"
        defaultValue={inputRef.current}
        onChange={(evt) => {
          inputRef.current = evt.target.value;
        }}
        className={css["form_input"]}
        style={{ width: "100%", color: "#fff" }}
      />
      <Button className={css["form_submit"]} type="submit" color="success">
        Yuborish
      </Button>
    </form>
  );
};

export default MovieSearch;
