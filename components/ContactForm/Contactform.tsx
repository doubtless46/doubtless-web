import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useFormik } from "formik";

const ContactForm: React.FC = () => {
  const { values, handleChange, handleSubmit,errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        content: "",
      },
      onSubmit: async (values, { resetForm }) => {
        //backend
        console.log(values)
      },
    });

  return (
    <div className="contact-form">
      <div className="contact-header">
        <h2>Get In Touch Today</h2>
        <p>Let's work together</p>
        <figure>
          <img src="https://www.highfivestrategies.com/wp-content/uploads/2022/04/high-five.svg" />
        </figure>
      </div>
    <form onSubmit={handleSubmit}>
    <Box sx={{ flexGrow: 1, mx: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="First name"
              placeholder="Enter first name..."
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Last name"
              placeholder="Enter last name..."
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              onChange={handleChange}
              value={values.email}
              name="email"
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Email"
              placeholder="Enter contact email..."
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              value={values.subject}
              name="subject"
              id="outlined-error-helper-text"
              label="Subject"
              style={{ width: "100%" }}
              placeholder="Enter subject regards..."
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              value={values.content}
              name="content"
              style={{ width: "100%" }}
              placeholder="Enter reason for contact"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              sx={{
                width: "100%",
                bgcolor: "#9370DB",
                "&:hover": {
                  bgcolor: "#9e7cc2",
                },
              }}
              variant="contained"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
    </div>
  );
};

export default ContactForm;
