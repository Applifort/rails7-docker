import { createTheme } from '@mui/material/styles';

import palette from './palette';
import overrides from './overrides';
import typography from './typography';

export default createTheme({
  typography,
  palette,
  overrides,
});
