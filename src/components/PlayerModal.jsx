import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { fontFamily } from "../../constants/fontFamily";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../GlobalProvider";
import { createPlayer, createSponor } from "../api/role";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { getAllProvinces } from "../api/province";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: "30px",
  borderRadius: "10px",
};

const PlayerModal = ({ open, handleClose }) => {
  const { user, loading, setLoading, loadUserAfterRefresh } =
    useGlobalContext();

  const navigate = useNavigate();

  const [provinces, setProvinces] = useState([]);

  const [form, setForm] = useState({
    playerId: user.id,
    province: "",
    city: "",
  });

  const fetchAllProvinces = async () => {
    try {
      const data = await getAllProvinces();
      setProvinces(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const selectedProvince = e.target.value;
    setForm((prev) => ({
      ...prev,
      province: selectedProvince,
      city: selectedProvince,
    }));
  };

  const handleCreateAccount = async () => {
    setLoading(true);
    try {
      const response = await createPlayer(form);
      if (response.statusCode === 200) {
        alert("create player successfully");
        await loadUserAfterRefresh();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    // console.log(form);
  };

  useEffect(() => {
    fetchAllProvinces();
  }, []);

  return (
    <Modal open={open}>
      <Box sx={style}>
        <div
          className="modal-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body1"
            color="initial"
            // fontFamily={fontFamily.msr}
            fontWeight={600}
            fontSize={22}
          >
            You're 1 step away from creating your account
          </Typography>
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography
          variant="body1"
          //   fontFamily={fontFamily.msr}
          //   color={styles.TEXT_SECONDARY}
          fontSize={15}
          sx={{ mt: "-2px" }}
        >
          Please pick your province and we're set!
        </Typography>
        <div
          className="modal-content"
          style={{
            marginTop: "24px",
          }}
        >
          <div
            className="key-information"
            // style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Typography
              variant="body1"
              color="initial"
              //   fontFamily={fontFamily.msr}
              fontWeight={600}
              fontSize={16}
              sx={{ mb: "20px" }}
            >
              Personal location
            </Typography>
            <div
              className="key-body"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Province</InputLabel>
                <Select
                  value={form.province}
                  label="Province"
                  name="province"
                  onChange={handleInputChange}
                  sx={{ borderRadius: "10px" }}
                >
                  {provinces.map((p, index) => (
                    <MenuItem key={index} value={p.name}>
                      {p.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div
            className="button-group"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 15,
              marginTop: "30px",
            }}
          >
            <CustomButton
              title={"Cancel"}
              padding={"10px 20px"}
              handleClick={handleClose}
              outlined={true}
            />
            <CustomButton
              title={"Create"}
              padding={"10px 20px"}
              handleClick={handleCreateAccount}
              loading={loading}
              loadingState={"Creating..."}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PlayerModal;
