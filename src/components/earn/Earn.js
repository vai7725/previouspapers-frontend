import React from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

const Earn = () => {
  return (
    <section className="earn-section contact-section">
      <form action="" className="contact-form paper-upload-form">
        <header>
          <h2>Upload papers and earn</h2>
          <p>
            The price of paper will depend <br /> on quality of pdf file.
          </p>
        </header>
        <main className="contact-form-main">
          <fieldset className="form-section">
            <legend>User details:</legend>
            <label className="form-label" htmlFor="uploadPaperFormName">
              Name:
            </label>
            <input
              className="inp"
              id="uploadPaperFormName"
              type="text"
              placeholder="Enter your name"
            />
            <label className="form-label" htmlFor="uploadPaperFormEmail">
              Email:
            </label>
            <input
              className="inp"
              id="uploadPaperFormEmail"
              type="email"
              placeholder="example@abc.com"
            />
            <label className="form-label" htmlFor="uploadPaperFormUpiNum">
              UPI Number:
            </label>
            <input
              className="inp"
              id="uploadPaperFormUpiNum"
              type="number"
              placeholder="91xxxxxx90"
            />
          </fieldset>
          <fieldset className="form-section">
            <legend>Paper details:</legend>
            <label className="form-label" htmlFor="uploadPaperFormUniversity">
              Enter university name:
            </label>
            <input
              className="inp"
              id="uploadPaperFormUniversity"
              type="text"
              placeholder="Enter university"
            />
            <label className="form-label" htmlFor="uploadPaperFormCourse">
              Course name:
            </label>
            <input
              className="inp"
              id="uploadPaperFormCourse"
              type="text"
              placeholder="B.sc / B.A"
            />
            <label className="form-label" htmlFor="uploadPaperFormCourseYear">
              Course Year:
            </label>
            <input
              className="inp"
              id="uploadPaperFormCourseYear"
              type="text"
              placeholder="1st year / 2nd year"
            />
            <label className="form-label" htmlFor="uploadPaperFormPaperTitle">
              Subject:
            </label>
            <input
              className="inp"
              id="uploadPaperFormPaperTitle"
              type="text"
              placeholder="Enter subject mentioned in the paper"
            />
            <label className="form-label" htmlFor="uploadPaperFormPaperYear">
              Paper Year:
            </label>
            <input
              className="inp"
              id="uploadPaperFormPaperYear"
              type="text"
              placeholder="2023 / 2022"
            />
          </fieldset>
          <label
            className="form-label inp btn paperInput-label"
            htmlFor="uploadPaperFormPaperFile"
          >
            <HiOutlineUpload /> Upload file
          </label>
          <input
            className="inp paperInput"
            id="uploadPaperFormPaperFile"
            type="file"
            placeholder="2023 / 2022"
          />

          <label htmlFor="t&c" className="form-label check-label">
            <input
              type="checkbox"
              name="t&c"
              id="t&c"
              className="tnc_check"
              checked
            />
            I accept all the T&C.
          </label>
          <button className="btn form-btn">Sumbit</button>
        </main>
      </form>
    </section>
  );
};

export default Earn;
