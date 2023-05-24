import React, { useEffect } from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

const Earn = () => {
  useEffect(() => {
    document.title = 'Contribute and Earn | Previous Papers';
  }, []);
  return (
    <section className="form-section contribute-section">
      <form action="" className="form">
        <header className="form_heading">
          <h2>Contribute and get paid!</h2>
        </header>
        <main className="form-main">
          <fieldset className="form-partition form-main">
            <legend>User details:</legend>
            <label className="form-label" htmlFor="uploadPaperFormName">
              Name:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormName"
              type="text"
              placeholder="Enter your name"
            />
            <label className="form-label" htmlFor="uploadPaperFormEmail">
              Email:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormEmail"
              type="email"
              placeholder="example@abc.com"
            />
            <label className="form-label" htmlFor="uploadPaperFormUpiNum">
              UPI Number:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormUpiNum"
              type="number"
              placeholder="91xxxxxx90"
            />
          </fieldset>
          <fieldset className="form-partition form-main">
            <legend>Paper details:</legend>
            <label className="form-label" htmlFor="uploadPaperFormUniversity">
              Enter university name:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormUniversity"
              type="text"
              placeholder="Enter university"
            />
            <label className="form-label" htmlFor="uploadPaperFormCourse">
              Course name:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormCourse"
              type="text"
              placeholder="B.sc / B.A"
            />
            <label className="form-label" htmlFor="uploadPaperFormCourseYear">
              Course Year:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormCourseYear"
              type="text"
              placeholder="1st year / 2nd year"
            />
            <label className="form-label" htmlFor="uploadPaperFormPaperTitle">
              Subject:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormPaperTitle"
              type="text"
              placeholder="As mentioned in the paper."
            />
            <label className="form-label" htmlFor="uploadPaperFormPaperYear">
              Paper Year:
            </label>
            <input
              className="form-inp"
              id="uploadPaperFormPaperYear"
              type="text"
              placeholder="2023 / 2022"
            />
          </fieldset>
          <label
            className="btn form-btn contribute-btn"
            htmlFor="uploadPaperFormPaperFile"
          >
            <HiOutlineUpload /> Upload file
          </label>
          <input
            className="paperInput"
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
          <span className="form-notation">
            The better the PDF file, the higher the paper price!
          </span>
        </main>
      </form>
    </section>
  );
};

export default Earn;
