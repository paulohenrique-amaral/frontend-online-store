import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

type SearchInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
};

function SearchInput({ onChange, value, name, type }: SearchInputProps) {
  return (
    <Paper
      component="div"
      sx={ { p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 } }
    >
      {/* <IconButton sx={ { p: '10px' } } aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Divider sx={ { height: 28, m: 0.5 } } orientation="vertical" /> */}
      <InputBase
        sx={ { ml: 1, flex: 1 } }
        placeholder="Digite sua busca"
        onChange={ onChange }
        value={ value }
        name={ name }
        type={ type }
        inputProps={ { 'aria-label': 'Digite sua busca' } }
      />
      <IconButton type="submit" sx={ { p: '10px' } } aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
