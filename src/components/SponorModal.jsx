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
import { createSponor } from "../api/role";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

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

const SponorModal = ({ open, handleClose }) => {
  const { user, loading, setLoading, loadUserAfterRefresh } =
    useGlobalContext();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: user.id,
    companyName: "",
    logoUrl: "",
    urlSocial: "",
    urlSocial1: "",
    contactEmail: user.email,
    descreption: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreateAccount = async () => {
    setLoading(true);
    try {
      const response = await createSponor(form);
      if (response.statusCode === 200) {
        alert("create sponor successfully");
        await loadUserAfterRefresh();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
          Please fill in your personal information for admins to verify
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
              Personal Information
            </Typography>
            <div
              className="key-body"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <TextField
                id=""
                label="Company Name"
                name="companyName"
                placeholder="Enter your company name"
                value={form.companyName}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />

              <TextField
                id=""
                label="Company logo URL"
                name="logoUrl"
                placeholder="Enter your Company logo URL"
                value={form.logoUrl}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />

              <TextField
                id=""
                label="Social Link"
                name="urlSocial"
                placeholder="Enter your Social Link"
                value={form.urlSocial}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />

              <TextField
                id=""
                label="Alternate Social Link"
                name="urlSocial1"
                placeholder="Enter your alternate social link"
                value={form.urlSocial1}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
              />

              <TextField
                id=""
                label="Description"
                name="descreption"
                placeholder="Enter your description"
                value={form.descreption}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                fullWidth
                multiline
              />
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

export default SponorModal;
