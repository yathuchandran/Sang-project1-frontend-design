import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Button } from '@material-tailwind/react';
import exportToExcel from '../ExportToExcel'
import Popup from "../Popup";
import Group from '../forms/group'
import Addgroups from '../forms/Addgroup';
import EditForm from '../forms/EditForm';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ControlledTreeView from '../Tree'
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import Product from './Product'
const rows = [
    {
        id: 1,
        Name: "Product A",
        Code: 123,
        Vat: 0.1,
        Tax: 0.05,
        Batchable: 'false'
    },
    {
        id: 2,
        Name: "Product B",
        Code: 456,
        Vat: 0.1,
        Tax: 0.05,
        Batchable: 'false'
    },
    {
        id: 3,
        Name: "Product C",
        Code: 789,
        Vat: 0.1,
        Tax: 0.05,
        Batchable: 'false'
    },
    {
        id: 4,
        Name: "Product D",
        Code: 111,
        Vat: 0.1,
        Tax: 0.05,
        Batchable: 'false'
    },
    {
        id: 4,
        Name: "Product E",
        Code: 112,
        Vat: 0.1,
        Tax: 0.05,
        Batchable: 'false'
    },]

console.log(rows, 65);
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'Name', numeric: false, label: 'Name' },
    { id: 'Code', numeric: true, label: 'Code' },
    { id: 'Vat', numeric: true, label: 'Vat' },
    { id: 'Tax', numeric: true, label: 'Tax' },
    { id: 'Batchable', numeric: true, label: 'Batchable' }
];


////////////////////////////////////////////////////////////////////
function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    // console.log(numSelected,113);


    return (
        <>

            <TableHead>
                <TableRow>

                    <TableCell padding="checkbox">
                        {/* <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            /> */}
                    </TableCell>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
function EnhancedTableToolbar(props) {
    const { numSelected, handleExportToExcel } = props; // Receive handleExportToExcel from props
    const [state, setState] = React.useState(false)
    const [Groups, setGroup] = React.useState(false)
    const [Addgroup, setAddGroup] = React.useState(false)
    const [Edit, setEdit] = React.useState(false)
    const Navigate = useNavigate()

    // console.log(numSelected,182);
    const values = (value) => {
        setState(!state)
        if (!value) {
            setState(value)
        }
    }


    const handlegroup = (value) => {
        setGroup(!Groups)
        if (!value) {
            setGroup(value)
        }

    }

    const handleAddgroup = (value) => {
        setAddGroup(!Addgroup)
        if (!value) {
            setAddGroup(value)
        }
    }
    const handleEdit = (value) => {
        setEdit(!Edit)
        if (!value) {
            setEdit(value)
        }
    }
    const onClickExport = () => {
        handleExportToExcel();
    };
    const onClickClose = () => {
        Navigate('/home')
    }
    const buttonStyle = {
        // borderRadius: '45px',
        // backgroundColor: '#616eb1',
        // color: 'white',
        // height: '30px',
        // margin: '0 1px', 

    };

    const handleGroupButtonClick = () => {
        console.log(numSelected, 227);
        if (numSelected === 0) {
            // If no checkbox is selected, show an alert
            Swal.fire({
                icon: 'warning',
                title: 'Please select a checkbox',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Are you sure you want to perform this action?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    handleGroupAction();
                }
            });
        }
    };
    const handleGroupAction = () => {
        setGroup(!Groups)


    };

    const handleEditButtonClick = () => {
        console.log(numSelected, 227);
        if (numSelected === 0) {
            // If no checkbox is selected, show an alert
            Swal.fire({
                icon: 'warning',
                title: 'Please select a checkbox',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Are you sure you want to perform this action?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    handleEditAction();
                }
            });
        }
    };
    const handleEditAction = () => {
        setEdit(!Edit)


    };


    const handleDeleteButtonClick = () => {
        console.log(numSelected, 227);
        if (numSelected === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Please select a checkbox',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Do you want to delete  row?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
            })

        }
    };


    const handlePropertyButtonClick = () => {
        console.log(numSelected, 227);
        if (numSelected === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Please select a checkbox',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Do you want to Change Property?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
            })

        }
    };

    return (
        <>
            <Popup Addnew={state} newss={values} />
            <Group groupss={Groups} actionss={handlegroup} />
            <Addgroups Addgroups={Addgroup} groupsAdd={handleAddgroup} />
            <EditForm edit={Edit} handleEdit={handleEdit} />
            <Toolbar
            // sx={{
            //   pl: { sm: 2 },
            //   pr: { xs: 1, sm: 1 },
            //   ...(numSelected > 0 && {
            //     bgcolor: (theme) =>
            //       alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            //   }),
            // }}
            >

                <Typography
                    sx={{
                        flex: '1 1 100%',
                        //   color: 'white',
                    }}
                    variant="h4"
                    id="tableTitle"
                    component="div"
                >
                    Product
                </Typography>


                <Tooltip title="new">
                    <IconButton  >
                        <AddIcon onClick={values} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Group">
                    <IconButton >
                        <GroupsIcon onClick={handleGroupButtonClick} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Group">
                    <IconButton >
                        <GroupAddIcon onClick={handleAddgroup} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Export">
                    <IconButton >
                        <LocalPrintshopIcon onClick={onClickExport} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                    <IconButton >
                        <EditIcon onClick={handleEditButtonClick} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Property">
                    <IconButton >
                        <ViewListIcon onClick={handlePropertyButtonClick} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton >
                        <DeleteIcon onClick={handleDeleteButtonClick} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Close">
                    <IconButton >
                        <CloseIcon onClick={onClickClose} />
                    </IconButton>
                </Tooltip>

            </Toolbar>
        </>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    handleExportToExcel: PropTypes.func.isRequired, // Ensure handleExportToExcel is a function prop

};
//////////////////////////////////////////////////////////////////////////////////////////////





export default function EnhancedTable({ drawerOpen }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    //////////////////////////////////////////////////////////////
    const [searchTerm, setSearchTerm] = React.useState(''); // New state for search term
    const [visibleRows, setVisibleRows] = React.useState([]);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);


    // const storedDrawerWidth = localStorage.getItem("drawerWidth") || "100%"; 
    // const [drawerWidth, setDrawerWidth] = React.useState();

    // React.useEffect(() => {
    //     const storedDrawerWidth = localStorage.getItem("drawerWidth") || "100%"; 
    //     if (storedDrawerWidth) {
    //         setDrawerWidth(storedDrawerWidth)

    //     }
    // }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Update search term on input change
    };
    //////////////////////////////////////////////////////
    const filterRows = (rows) => {
        return rows.filter((row) =>
            row.Name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const isSelected = (id) => selected.indexOf(id) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    /////////////////////////////////////////////////////

    React.useEffect(() => {
        const filteredRows = filterRows(rows);
        const sortedRows = stableSort(filteredRows, getComparator(order, orderBy));
        const emptyRowsCount =
            rowsPerPage - Math.min(rowsPerPage, sortedRows.length - page * rowsPerPage);

        const updatedVisibleRows = sortedRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .concat(
                Array.from({ length: emptyRowsCount }, (_, index) => ({
                    id: `empty-${index}`,
                    Name: '',
                    Code: '',
                    Vat: '',
                    Tax: '',
                    Batchable: '',
                }))
            );

        setVisibleRows(updatedVisibleRows);
    }, [order, orderBy, page, rows, rowsPerPage]);

    const handleExportToExcel = () => {
        exportToExcel(visibleRows); // Pass your filtered/visibleRows data here
    };


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const productPaperWidth = sidebarOpen ? '22%' : '0%';
    return (
        <>
            <Box sx={{ width: '100%', marginTop: 5, display: "flex", justifyContent: "flex-end", flexDirection: "row", }}>


                <Box sx={{ display: 'flex', width: productPaperWidth, justifyContent: 'flex-end', marginRight: 1 }}>
                    <Paper
                        sx={{
                            width: '90%',
                            height: '320px',
                            padding: '11px',
                            border: '1px solid #e0e0e0',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                            display: sidebarOpen ? 'block' : 'none', // Toggle display based on sidebarOpen state
                        }}
                    >
                        <Typography>Product</Typography>
                        <ControlledTreeView />
                    </Paper>
                </Box>



                <Box sx={{ width: '100%' }}>


                    <Paper sx={{
                        mb: 2, width: '100%',
                        border: '1px solid #e0e0e0', // Border color and width
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow definition
                    }}>

                        <Grid sx={{margin:'2%',marginBottom:'0%', marginTop:'1%'}}>
                            <button onClick={toggleSidebar}>
                                <AccountTreeIcon />Tree 
                            </button>

                        </Grid>


                        <EnhancedTableToolbar numSelected={selected.length}
                            handleExportToExcel={handleExportToExcel} />

                        <TableContainer>
                            {/*  */}
                            <Grid container alignItems="center" justifyContent="flex-start" sx={{ px: 2 }}>
                                <Grid item sx={{ marginTop: '5px' }}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        size="small"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        sx={{
                                            height: '1px', // Adjust the height as needed
                                            '& input': {
                                                padding: '3px 4px', // Adjust padding for input text
                                            },
                                        }} InputProps={{
                                            startAdornment: (
                                                <SearchIcon sx={{ marginRight: '8px', color: 'grey' }} />
                                            ),
                                        }}
                                    />
                                </Grid>

                            </Grid>


                            <Table
                                sx={{ minWidth: 750 }}
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />

                                <TableBody
                                // tableRef={tableRef}
                                >
                                    {visibleRows.map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                {/* Adjust the cell rendering based on your row structure */}
                                                <TableCell align="left">{row.Name}</TableCell>
                                                <TableCell align="right">{row.Code}</TableCell>
                                                <TableCell align="right">{row.Vat}</TableCell>
                                                <TableCell align="right">{row.Tax}</TableCell>
                                                <TableCell align="right">{row.Batchable}</TableCell>
                                            </TableRow>
                                        );
                                    })}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>

                            </Table>

                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />

                    </Paper>

                </Box>

            </Box>

        </>
    );
}
