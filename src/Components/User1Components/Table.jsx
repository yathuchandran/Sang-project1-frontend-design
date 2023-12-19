import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
{ id: 'Item', label: 'Item', minWidth: 100 },
{ id: 'Description', label: 'Description', minWidth: 10 },
{
  id: 'Unit',
  label: 'Unit',
  minWidth: 10,
  align: 'right',
  format: (value) => value.toLocaleString('en-US'),
},
{
  id: 'Account',
  label: 'Account',
  minWidth: 10,
  align: 'right',
  format: (value) => value.toLocaleString('en-US'),
},
{
  id: 'Qty',
  label: 'Qty',
  minWidth: 100,
  align: 'right',
  format: (value) => value.toFixed(2),
},
// Add more columns here
{ id: 'AltQty', label: 'AltQty', minWidth: 100 },
{ id: 'Weight', label: 'Weight', minWidth: 100 },
{ id: 'Batch', label: 'Batch', minWidth: 100 },
{ id: 'Rate', label: 'Rate', minWidth: 100 },
{ id: 'Gross', label: 'Gross', minWidth: 100 },
{ id: 'Freight', label: 'Freight', minWidth: 100 },
{ id: 'Vat%', label: 'Vat%', minWidth: 100 },
{ id: 'VatAmt', label: 'VatAmt', minWidth: 100 },
{ id: 'Net', label: 'Net', minWidth: 100 },
{ id: 'Stock', label: 'Stock', minWidth: 100 },
{ id: 'TaxCode', label: 'TaxCode', minWidth: 100 },
{ id: 'HsCodeDet', label: 'HsCodeDet', minWidth: 100 },
{ id: 'COD', label: 'COD', minWidth: 100 },
{ id: 'Remarks', label: 'Remarks', minWidth: 100 },
{ id: 'PackingType', label: 'PackingType', minWidth: 100 },
// { id: 'Currency', label: 'Currency', minWidth: 100 },
// { id: 'Language', label: 'Language', minWidth: 100 },
];

function createData(Item, Description, Unit, Account, Qty, AltQty,Weight,Batch,Rate,Gross,Freight,Vat,VatAmt,Net,Stock,TaxCode,HsCodeDet) {
// const Qty = Population / Size;
return { Item, Description, Unit, Account, Qty, AltQty, Weight,Batch,Rate,Gross,Freight,Vat,VatAmt,Net,Stock,TaxCode,HsCodeDet };
}

const rows = [
createData('India', 'IN', 1371354, 3287263, 'Hindi', 'INR'),
createData('China', 'CN', 1400365, 9596961, 'Mandarin', 'CNY'),
createData('Italy', 'IT', 60973, 301340, 'Italian', 'EUR'),
createData('India', 'IN', 1371354, 3287263, 'Hindi', 'INR'),

// Add more rows here
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} style={{ color: '#0583D2',        padding: '6px 8px', // Adjust padding to reduce height

             }}>
               Total Quantity:  0.00
              </TableCell>
              <TableCell align="center" colSpan={3} style={{ color: '#0583D2',
                    padding: '6px 8px', // Adjust padding to reduce height
                }}>
               Total Gross:  0.00
              </TableCell>
              <TableCell align="center" colSpan={3} style={{ color: '#0583D2',
                    padding: '6px 8px', // Adjust padding to reduce height
                }}>
               Net:  0.00
              </TableCell>

              <TableCell align="center" colSpan={6} style={{ 
                    padding: '6px 8px', // Adjust padding to reduce height
                }}>
               Freight:0.00
              </TableCell><TableCell align="center" colSpan={0} style={{ 
                    padding: '6px 8px', // Adjust padding to reduce height
                }}>
               VatAmt:0.00
              </TableCell>
            </TableRow>
            
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: 'white', backgroundColor: '#0583D2',
                  padding: '6px 5px', // Adjust padding to reduce height
                }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}  style={{ height: '10px' }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ padding: '6px 8px' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
