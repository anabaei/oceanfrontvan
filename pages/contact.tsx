// components/ContactForm.tsx
import React, { useState } from "react";
import Layout from '../components/layout';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    address: "",
    receiveUpdates: false,
    inquiryType: "general",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle checkbox separately
    // if (type === "checkbox") {
    //   setFormData({
    //     ...formData,
    //     [name]: checked,
    //   });
    // } else {
      setFormData({
        ...formData,
        [name]: value,
      });
  
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      address: "",
      receiveUpdates: false,
      inquiryType: "general",
    });
  };

  return (
    <Layout>
    <div className="container">
      
      <div  className="row justify-content-center">
        <div className="col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="receiveUpdates"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="receiveUpdates" className="form-check-label">
              Receive Updates
            </label>
          </div> */}
          <div className="mb-3">
            <label className="form-label">Inquiry Type:</label>
            <div className="form-check">
              <input
                type="radio"
                id="general"
                name="inquiryType"
                value="general"
                checked={formData.inquiryType === "general"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="general" className="form-check-label">
                General
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="support"
                name="inquiryType"
                value="support"
                checked={formData.inquiryType === "support"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="support" className="form-check-label">
                Support
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="sales"
                name="inquiryType"
                value="sales"
                checked={formData.inquiryType === "sales"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="sales" className="form-check-label">
                Sales
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  </Layout>
  );
};

export default ContactForm;
