import styled from '@emotion/styled';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `url('https://oir.mobi/uploads/posts/2023-05/1683376999_oir-mobi-p-chernii-gradient-foni-instagram-43.jpg') no-repeat center center fixed`,
  backgroundSize: 'cover',
  padding: '20px',
  transformOrigin: 'left top',
}));

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
