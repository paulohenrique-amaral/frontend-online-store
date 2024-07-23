import { styled } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}  `,
    padding: '0 4px',
  },
  '& svg': {
    color: theme.palette.primary.contrastText,
    fontSize: '2rem',
  },
}));
