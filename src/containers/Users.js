import React, { useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";
import { useUsers } from "../contexts/UsersContext";
import { makeStyles, withStyles } from "@material-ui/core";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Container,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#848786",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(25),
  },
}));

export default function Users() {
  const { fetchUsers } = useUsers();
  const { filteredData } = useSearch();
  const classes = useStyles();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name:</StyledTableCell>
              <StyledTableCell align="right">Username:</StyledTableCell>
              <StyledTableCell align="right">Email:</StyledTableCell>
              <StyledTableCell align="right">Phone:</StyledTableCell>
              <StyledTableCell align="right">Website:</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map(
              ({ id, name, username, email, phone, website }) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{username}</StyledTableCell>
                  <StyledTableCell align="right">{email}</StyledTableCell>
                  <StyledTableCell align="right">{phone}</StyledTableCell>
                  <StyledTableCell align="right">{website}</StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
