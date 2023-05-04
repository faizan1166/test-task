import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  DOB: Yup.date().required("Required"),
  sex: Yup.string().required("Required"),

  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "mobile number should contain 10 digits ")
    .min(10, "mobile number should contain 10 digits "),
  aadharNumber: Yup.string().max(12, "Adhar number should contain 12 digits ").min(12, "Adhar number should contain 12 digits "),
  pan: Yup.string().max(10, "Pan number should contain 10 digits ").min(10, "Pan number should contain 10 digits "),
});

const Registration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    axios
      .post("http://localhost:4000/api/v1/saveuser", {
        firstName: values.firstName,
        DOB: values.DOB,
        sex: values.sex,
        mobile: values.mobile,
        govIdType: values.govIdType,
        aadharNumber: values.aadharNumber,
        pan: values.pan,
        gradianType: values.gradianType,
        gradianName: values.gradianName,
        email: values.email,
        address: values.address,
        emergencyNumber: values.emergencyNumber,
        state: values.state,
        city: values.city,
        country: values.country,
        pincode: values.pincode,
        occupation: values.occupation,
        religion: values.religion,
        martialStatus: values.martialStatus,
        blood: values.blood,
        nationality: values.nationality,
      })
      .then((response) => {
        console.log("response==>", response);
        setIsLoading(false);
        navigate("/detail");
      });
  };

  return (
    <div>
  <NavBar/>
      <Formik
        initialValues={{
          firstName: "",
          DOB: "",
          sex: "",
          mobile: "",
          govIdType: "",
          aadharNumber: "",
          pan: "",
          gradianType: "",
          gradianName: "",
          email: "",
          address: "",
          emergencyNumber: "",
          state: "",
          city: "",
          country: "",
          pincode: "",
          occupation: "",
          religion: "",
          martialStatus: "",
          blood: "",
          nationality: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <>
          
          <div className="container my-3 style_container">
            <Form className="p-5">
              <div class="row">
                <h5>
                  <u>Personal Details</u>
                </h5>
                <div class="col-4 my-2">
                  <lable>Name *</lable>
                  <input
                    name="firstName"
                    placeholder="Enter Name"
                    value={values.firstName}
                    onChange={(e) => setFieldValue("firstName", e.target.value)}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    type="text"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="errorMsg">{errors.firstName}</div>
                  ) : null}
                </div>
                <div class="col-4 my-2">
                  <lable>Date Of Birth *</lable>
                  <DatePicker
                    selected={values.DOB}
                    placeholder="Enter DD/MM/YYYY"
                    onChange={(date) => setFieldValue("DOB", date)}
                    dateFormat="yyyy/MM/dd"
                    name="DOB"
                    className="form-control"
                  />
                  {errors.DOB && touched.DOB ? (
                    <div className="errorMsg">{errors.DOB}</div>
                  ) : null}
                </div>
                <div class="col-4 my-2">
                  <lable>Sex *</lable>
                  <Field
                    name="sex"
                    as="select"
                    className="form-select"
                    placeholder="Enter sex"
                  >
                    <option value="">Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  {errors.sex && touched.sex ? (
                    <div className="errorMsg">{errors.sex}</div>
                  ) : null}
                </div>
              </div>
              <div class="row">
                <div class="col-4 my-2">
                  <lable>Mobile </lable>
                  <input
                    name="Mobile"
                    placeholder="Enter Mobile"
                    value={values.mobile}
                    onChange={(e) => setFieldValue("mobile", e.target.value)}
                    class="form-control"
                    type="tel"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="errorMsg">{errors.mobile}</div>
                  ) : null}
                </div>

                <div class="col-2 my-2">
                  <lable>Govt Issued ID </lable>
                  <Field name="govIdType" as="select" className="form-select">
                    <option value="">ID Type</option>
                    <option value="Adhar">Adhar </option>
                    <option value="PAN">PAN</option>
                  </Field>
                </div>
                {values.govIdType === "Adhar" ? (
                  <div class="col-6 my-2">
                    <lable>Aadhaar Number</lable>
                    <input
                      name="aadhaarNumber"
                      placeholder="Enter Aadhaar Number"
                      value={values.aadharNumber}
                      onChange={(e) =>
                        setFieldValue("aadharNumber", e.target.value)
                      }
                      class="form-control"
                      type="tel"
                    />
                    {errors.aadharNumber && touched.aadharNumber ? (
                      <div className="errorMsg">{errors.aadharNumber}</div>
                    ) : null}
                  </div>
                ) : (
                  <div class="col-6 my-2">
                    <lable>PAN</lable>
                    <input
                      name="pan"
                      placeholder="Enter Govt ID"
                      value={values.pan}
                      onChange={(e) => setFieldValue("pan", e.target.value)}
                      class="form-control"
                      type="tel"
                    />
                    {errors.pan && touched.pan ? (
                      <div className="errorMsg">{errors.pan}</div>
                    ) : null}
                  </div>
                )}
              </div>
              <div class="row">
                <h5 className="mt-4">
                  <u>Contact Details</u>
                </h5>
                <div class="col-2 my-2">
                  <lable>Guadian Details </lable>
                  <input
                    name="gradianType"
                    placeholder="Enter label"
                    value={values.gradianType}
                    onChange={(e) =>
                      setFieldValue("gradianType", e.target.value)
                    }
                    class="form-control"
                    type="text"
                  />
                </div>

                <div class="col-2 my-2">
                  <lable>Name</lable>
                  <input
                    name="gradianName"
                    placeholder="Enter Guardian Name"
                    value={values.gradianName}
                    onChange={(e) =>
                      setFieldValue("gradianName", e.target.value)
                    }
                    class="form-control"
                    type="text"
                  />
                </div>
                <div class="col-4 my-2">
                  <lable>Email</lable>
                  <input
                    name="email"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    class="form-control"
                    type="email"
                  />
                </div>
                <div class="col-4 my-2">
                  <lable>Emergency Contact Number</lable>
                  <input
                    name="emergencyNumber"
                    placeholder="Enter Emergency Number"
                    value={values.emergencyNumber}
                    onChange={(e) =>
                      setFieldValue("emergencyNumber", e.target.value)
                    }
                    class="form-control"
                    type="text"
                  />
                </div>
              </div>

              <div class="row">
                <h5 className="mt-4">
                  <u>Address Details</u>
                </h5>
                <div class="col-4 my-2">
                  <lable>Address</lable>
                  <input
                    name="address"
                    placeholder="Enter Address"
                    value={values.address}
                    onChange={(e) => setFieldValue("address", e.target.value)}
                    class="form-control"
                    type="text"
                  />
                </div>

                <div class="col-4 my-2">
                  <lable>State</lable>
                  <Field
                    name="state"
                    as="select"
                    className="form-select"
                    placeholder="Enter State"
                  >
                    <option value="">Select State</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="UK">UK</option>

                    <option value="Maharashtra">Maharashtra</option>
                  </Field>
                </div>
                <div class="col-4 my-2">
                  <lable>City</lable>
                  <Field
                    name="city"
                    as="select"
                    className="form-select"
                    placeholder="Enter city"
                  >
                    <option value="">Select city</option>
                    <option value="Shahjahanpur">Shahjahanpur</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Noida">Noida</option>
                  </Field>
                </div>
              </div>
              <div class="row">
                <div class="col-4 my-2">
                  <lable>Country </lable>
                  <Field
                    name="country"
                    as="select"
                    className="form-select"
                    placeholder="Enter Country"
                  >
                    <option value="">Select country</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                  </Field>
                </div>

                <div class="col-4 my-2">
                  <lable>Pincode</lable>
                  <input
                    name="pincode"
                    placeholder="Enter Pin Code "
                    value={values.pincode}
                    onChange={(e) => setFieldValue("pincode", e.target.value)}
                    class="form-control"
                    type="tel"
                  />
                </div>
              </div>

              <div class="row">
                <h5 className="mt-4">
                  <u>Other Details</u>
                </h5>
                <div class="col-3 my-2">
                  <lable>Occupation </lable>

                  <input
                    name="occupation"
                    placeholder="Enter Occupation"
                    value={values.occupation}
                    onChange={(e) =>
                      setFieldValue("occupation", e.target.value)
                    }
                    class="form-control"
                    type="text"
                  />
                </div>

                <div class="col-3 my-2">
                  <lable>Religion</lable>
                  <Field
                    name="religion"
                    as="select"
                    className="form-select"
                    placeholder="Enter Religion"
                  >
                    <option value="">Select Religion</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Islam">Islam</option>
                    <option value="Bhuddhism">Bhuddhism</option>
                    <option value="Hinduism">Hinduism</option>
                  </Field>
                </div>
                <div class="col-3 my-2">
                  <lable>Martial Status</lable>
                  <Field
                    name="martialStatus"
                    as="select"
                    className="form-select"
                    placeholder="Enter Martial Status"
                  >
                    <option value="">Select Martial Status</option>
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                  </Field>
                </div>
                <div class="col-3 my-2">
                  <lable>Blood Group</lable>
                  <Field
                    name="blood"
                    as="select"
                    className="form-select"
                    placeholder="Enter Blood  Group"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A++">A++</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                  </Field>
                </div>
              </div>
              <div class="row">
                <div class="col-3 my-2">
                  <lable>Nationality *</lable>
                  <input
                    name="nationality"
                    placeholder="Enter Nationality"
                    value={values.nationality}
                    onChange={(e) =>
                      setFieldValue("nationality", e.target.value)
                    }
                    class="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end mx-3">
                {isLoading ? (
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </Form>
          </div>
          </>
        )}

      </Formik>
    </div>
  );
};

export default Registration;
