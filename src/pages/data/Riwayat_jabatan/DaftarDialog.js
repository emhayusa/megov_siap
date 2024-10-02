import { forwardRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { create, remove, update } from "src/redux/actions/riwayat_jabatan";

import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
  CircularProgress,
} from "@mui/material";

import swal from "sweetalert";
import { blue } from "@mui/material/colors";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Riwayat_jabatanDialog(props) {
  const { onClose, open, config } = props;
  const initialDataState = {
    nama_riwayat_jabatan: "",
  };
  const [data, setData] = useState(initialDataState);
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (config) {
      if (config.data) {
        setData(config.data);
      } else {
        setData(initialDataState);
      }
    }
  }, [config]);

  function isValidated() {
    //console.log(user);
    return data.nama_riwayat_jabatan.length > 0;
  }

  const save = (e) => {
    e.preventDefault();

    if (isValidated()) {
      setLoading(true);
      dispatch(create(data))
        .then((data) => {
          setLoading(false);
          swal("Success", "Data berhasil disimpan!", "success", {
            buttons: false,
            timer: 2000,
          });
          onClose();
          setData(initialDataState);
        })
        .catch((e) => {
          setLoading(false);
          swal("Error", e.response.data.message, "error", {
            buttons: false,
            timer: 2000,
          });
          console.log(e);
        });
    } else {
      setLoading(false);

      swal("Error", "Cek isian formulir!", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  };

  const updateContent = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(update(data.uuid, data))
      .then((response) => {
        console.log(response);
        setLoading(false);
        swal("Success", "Data berhasil diperbarui!", "success", {
          buttons: false,
          timer: 2000,
        });

        onClose();
      })
      .catch((e) => {
        setLoading(false);
        swal("Error", e.response.data.message, "error", {
          buttons: false,
          timer: 2000,
        });
        console.log(e);
      });
  };

  const removeData = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(remove(data.uuid))
      .then(() => {
        setLoading(false);

        swal("Success", "Data berhasil dihapus!", "success", {
          buttons: false,
          timer: 2000,
        });
        onClose();
      })
      .catch((e) => {
        setLoading(true);

        swal("Error", e.response.data.message, "error", {
          buttons: false,
          timer: 2000,
        });
        console.log(e);
      });
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      maxWidth="sm"
      fullWidth
      scroll="paper"
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>{config.title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{config.description}</DialogContentText>

        <TextField
          helperText=""
          margin="normal"
          required
          fullWidth
          id="nama_riwayat_jabatan"
          label="Nama Riwayat_jabatan"
          name="nama_riwayat_jabatan"
          value={data.nama_riwayat_jabatan}
          onChange={handleInputChange}
          autoComplete="nama_riwayat_jabatan"
          autoFocus
          disabled={config.mode == "delete"}
        />
      </DialogContent>
      <DialogActions>
        <Box sx={{ position: "relative" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            disabled={loading}
            sx={{ mr: "10px" }}
          >
            Cancel
          </Button>
          {config.mode == "add" ? (
            <Button onClick={save} variant="contained" disabled={loading}>
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: blue[500],
                    position: "absolute",
                    top: "50%",
                    left: "40%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              ) : (
                config.action
              )}
            </Button>
          ) : config.mode == "edit" ? (
            <Button
              onClick={updateContent}
              variant="contained"
              disabled={loading}
            >
              {config.action}
            </Button>
          ) : (
            <Button onClick={removeData} variant="contained" disabled={loading}>
              {config.action}
            </Button>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
}

Riwayat_jabatanDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  config: PropTypes.object.isRequired,
};

export default Riwayat_jabatanDialog;