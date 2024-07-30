import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Context from '../../context/Context';
import { useFormatCurrency } from '../../hook/useFormatCurrency';

function TableDashBoard() {
  const { cart, removeItem } = useContext(Context);
  const formatCurrency = useFormatCurrency();
  return (
    <TableContainer component={ Paper }>
      <Table sx={ { minWidth: 400 } } aria-label="simple table">
        <TableHead>
          <TableRow
            sx={ { backgroundColor: '#f5f5f5' } }
          >
            <TableCell sx={ { width: '55%' } }>
              Resumo Carrinho
            </TableCell>
            <TableCell align="right" sx={ { width: '15%' } }>
              Valor
            </TableCell>
            <TableCell align="right" sx={ { width: '10%' } }>
              Quantidade
            </TableCell>
            <TableCell align="right" sx={ { width: '15%' } }>
              Total
            </TableCell>
            <TableCell align="right" sx={ { width: '5%' } } />
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={ row.id }
              sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
            >
              <TableCell component="th" scope="row" sx={ { width: '55%' } }>
                {row.title}
              </TableCell>
              <TableCell align="right" sx={ { width: '15%' } }>
                {formatCurrency(row.price)}
              </TableCell>
              <TableCell align="right" sx={ { width: '10%' } }>
                {row.quantity}
                x
              </TableCell>
              <TableCell align="right" sx={ { width: '15%' } }>
                {formatCurrency(row.price * row.quantity)}
              </TableCell>
              <TableCell align="right" sx={ { width: '5%' } }>
                <IconButton
                  aria-label="delete"
                  color="info"
                  onClick={ () => removeItem(row.id) }
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDashBoard;
