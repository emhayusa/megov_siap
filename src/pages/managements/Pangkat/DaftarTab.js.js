import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Grid,
  Divider,
  Button,
  Avatar,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  useTheme,
  styled,
  CardContent,
} from "@mui/material";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { format, subHours, subWeeks, subDays, parseISO } from "date-fns";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RefreshIcon from "@mui/icons-material/Refresh";
import { retrieve } from "src/redux/actions/pangkat";

import DaftarDialog from "./DaftarDialog";

function PangkatTab() {
  const theme = useTheme();

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const label = "Pangkat";

  const initialConfig = {
    data: null,
    title: `Tambah ${label} Baru`,
    mode: "add",
    action: "Submit",
    description: `Silahkan isi form berikut untuk menambahkan  ${label} baru.`,
  };
  const [config, setConfig] = useState(initialConfig);
  const datas = useSelector((state) => state.pangkat);
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieve());
  }, []);

  const handleClickAdd = () => {
    setConfig(initialConfig);
    setOpen(true);
  };

  const handleClickEdit = (data) => {
    setConfig({
      data: data,
      title: `Edit  ${label}`,
      mode: "edit",
      action: "Save",
      description: `Silahkan edit form berikut untuk mengupdate ${label}.`,
    });
    setOpen(true);
  };

  const handleClickDelete = (data) => {
    setConfig({
      data: data,
      title: `Delete ${label}`,
      mode: "delete",
      action: "Delete",
      description: `Anda yakin akan menghapus ${label}?`,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid
              container
              justifyContent="end"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              {currentUser.roles.includes("ROLE_ADMIN") ? (
                <Grid item>
                  <Tooltip placement="top" title={`Create ${label}`} arrow>
                    <Button
                      sx={{ mt: { xs: 2, md: 0 }, mr: 1 }}
                      variant="outlined"
                      startIcon={<AddTwoToneIcon fontSize="small" />}
                      onClick={handleClickAdd}
                    >
                      Create {label}
                    </Button>
                  </Tooltip>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
            <Divider />
            <TableContainer>
              <Table width={300}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nama {label}</TableCell>
                    {currentUser.roles.includes("ROLE_ADMIN") ? (
                      <TableCell align="right">Actions</TableCell>
                    ) : (
                      ""
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datas.length == 0 ? (
                    <TableRow key={0}>
                      <TableCell colSpan={9}>Data tidak ditemukan</TableCell>
                    </TableRow>
                  ) : null}
                  {datas &&
                    datas.map((data) => (
                      <TableRow key={data.uuid} hover>
                        <TableCell>{data.nama_pangkat}</TableCell>
                        {currentUser.roles.includes("ROLE_ADMIN") ? (
                          <TableCell align="right">
                            <Tooltip title={`Edit ${label}`} arrow>
                              <IconButton
                                sx={{
                                  "&:hover": {
                                    background: theme.colors.primary.lighter,
                                  },
                                  color: theme.palette.primary.main,
                                }}
                                color="inherit"
                                size="small"
                                onClick={() => handleClickEdit(data)}
                              >
                                <EditTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip
                              placement="top"
                              title={`Delete ${label}`}
                              arrow
                            >
                              <IconButton
                                sx={{
                                  "&:hover": {
                                    background: theme.colors.error.lighter,
                                  },
                                  color: theme.palette.error.main,
                                }}
                                color="inherit"
                                size="small"
                                onClick={() => handleClickDelete(data)}
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        ) : (
                          ""
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <DaftarDialog open={open} onClose={handleClose} config={config} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default PangkatTab;
