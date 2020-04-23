import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Thêm Thành Công!', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>ADD TO CART</Button>
    </React.Fragment>
  );
}

export default function AddCart() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}