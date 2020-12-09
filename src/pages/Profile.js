/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import blankProfile from '../components/assets/blank-profile-picture.png';
import fetchProfile from '../store/api/fetchProfile';
import Loader from '../components/loading/loading';
import 'react-toastify/dist/ReactToastify.css';
import '../components/styles/ProfilePage.scss';
import {
  getProfileError,
  getProfile,
  getProfilePending,
} from '../store/reducers/profile';
import updateProfileFinal, {
  updateProfile,
  updateProfileImage,
} from '../store/api/updateProfile';

const fields = [
  { name: 'first_name', type: 'text', title: 'First Name' },
  { name: 'last_name', type: 'text', title: 'Last Name' },
  { name: 'birth_date', type: 'date', title: 'Birthday' },
  { name: 'gender', type: 'select', options: ['', 'male', 'female'], title: 'Gender' },
  { name: 'mother_name', type: 'text', title: 'Mother Name' },
  { name: 'father_name', type: 'text', title: 'Father Name' },
  { name: 'phone_number', type: 'text', title: 'Phone Number' },
  { name: 'where_you_live', type: 'text', title: 'Location' },
  { name: 'preferred_language', type: 'text', title: 'Language' },
  { name: 'preferred_currency', type: 'text', title: 'Currency' },
  { name: 'marital_status', type: 'select', options: ['', 'single', 'married', 'widowed', 'divorced'], title: 'Marital status' },
  { name: 'nationality', type: 'text', title: 'Nationality' },
];

function FormField({ onChange, type, value, name, disabled, title, options, className, onClick }) {
  switch (type) {
    case 'select':
      return (
        <div className="form__control">
          <label htmlFor={name}>{title}:</label>
          <select value={value} onChange={onChange} disabled={disabled} name={name}>
            { options.map((data, i) => ((i === 0) ? <option value={data} disabled>Select One</option> : <option value={data}>{data}</option>)) }
          </select>
        </div>
      );
    case 'submit':
    case 'button': return <button type={type} className={className} disabled={disabled} onClick={onClick}>{title}</button>;
    default:
      return (
        <div className="form__control">
          <label htmlFor={name}>{title}:</label>
          <input disabled={disabled} onChange={onChange} type={type} name={name} value={value} />
        </div>
      );
  }
}

const Profile = ({ profile, pending, fetchProfile, updateProfile, error, updateProfileFinal, updateProfileImage }) => {
  const [state, setState] = useState({ disabled: true });
  useEffect(async () => {
    await fetchProfile();
    if (error) toast.error(error);
  }, []);
  const handleChange = (e) => updateProfile({ ...profile, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfileFinal(profile);
    if (error) toast.error(error);
    else setState({ ...state, disabled: true });
  };
  const handleImageSelect = async (e) => {
    await updateProfileImage(e.target.files[0]);
    if (error) toast.error('Profile Image not updated!');
  };
  return (
    <div className="profile-page">
      <section>
        <div className="img">{pending ? <Loader /> : <img src={profile.profile_image || blankProfile} alt="profile_image" />}</div>
        <div className="section-actions">
          <FormField title="Upload" type="button" className="btn dark" disabled={pending} onClick={() => document.getElementById('profile_image').click()} />
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="file" id="profile_image" onChange={handleImageSelect} hidden />
          <div className="form-paralled">
            {fields.map((field) => <FormField key={field.name} {...field} value={profile[field.name] || ''} disabled={state.disabled} onChange={handleChange} />)}
          </div>
          <div className="section-actions">
            {state.disabled ? <FormField title="Update" type="button" className="btn light" disabled={pending} onClick={() => setState({ ...state, disabled: false })} />
              : (
                <>
                  <FormField onClick={() => setState({ ...state, disabled: true })} title="Cancel" type="button" className="btn" disabled={pending} />
                  <FormField title={pending ? 'Wait...' : 'Save'} type="submit" className="btn dark" disabled={pending} />
                </>
              )}
          </div>
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pending: getProfilePending(state),
  error: getProfileError(state),
  profile: getProfile(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchProfile, updateProfileFinal, updateProfile, updateProfileImage },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
