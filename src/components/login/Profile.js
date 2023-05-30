import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalContext } from '../../context/Context';

const Profile = () => {
  const { state } = GlobalContext();
  const { userCredentials, isUserLoggedIn } = state;
  return (
    <section className="form-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>

      <form className="form">
        <header className="form_heading">
          <h2>Profile</h2>
          <div className="profile_imgBox">
            <span className="profile_btn profile_img">
              {isUserLoggedIn &&
                userCredentials.firstName.split('')[0].toUpperCase()}
            </span>
          </div>
        </header>

        <main className="form_main">
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            Firstname:
          </label>
          <input
            type="text"
            name="firstName"
            id=""
            className="form-inp form-inp-disabled"
            value={userCredentials.firstName}
            readOnly
          />
          {/* Lastname input */}
          <label htmlFor="" className="form-label">
            Lastname:
          </label>
          <input
            type="text"
            name="firstName "
            id=""
            className="form-inp form-inp-disabled"
            value={userCredentials.lastName}
            readOnly
          />
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            Profession:
          </label>
          <input
            type="text"
            name="firstName"
            id=""
            className="form-inp form-inp-disabled"
            value={userCredentials.profession}
            readOnly
          />
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name="firstName"
            id=""
            className="form-inp form-inp-disabled"
            value={userCredentials.email}
            readOnly
          />
        </main>
      </form>
    </section>
  );
};

export default Profile;
