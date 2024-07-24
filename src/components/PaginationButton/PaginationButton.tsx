import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationButtonProps = {
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

function PaginationButton({ count, onChange }: PaginationButtonProps) {
  return (
    <Stack spacing={ 2 }>
      <Pagination
        count={ count }
        shape="rounded"
        onChange={ onChange }
      />
    </Stack>
  );
}

export default PaginationButton;
