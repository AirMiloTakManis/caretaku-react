import { IconButton, InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/styles';
import { Search } from '@mui/icons-material';

const SearchTextField = styled(TextField)(() => ({
  marginLeft: -25,
  '& fieldset': {
    borderRadius: '50px',
  },
  background: "#ffff",
  borderRadius: "50px",
}));

export default function SearchBox({
  onChange, onKeyDown = () => null, onClick = () => null, hasOnClick = false, label = 'Search', props
}) {
  const SearchIcon = () => (
    hasOnClick
      ? <IconButton onClick={onClick}><Search /></IconButton>
      : <IconButton style={{ pointerEvents: 'none' }}><Search /></IconButton>
  );
  return (
    <SearchTextField
      label={label}
      size="small"
      variant="outlined"
      onChange={onChange}
      onKeyDown={onKeyDown}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
