
import React, { useEffect, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

export default function UpdateDetails() {
    const [fullName, setFullName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.displayName) {
            setFullName(user.displayName);
            setPhotoUrl(user.photoURL);
        }
    }, [user]);

    const nameHandler = (e) => {
        setFullName(e.target.value);
    };

    const photoUrlHandler = (e) => {
        setPhotoUrl(e.target.value);
    };

    const formUpdateHandler = async (e) => {
        e.preventDefault();
        console.log(auth.currentUser);
        try {
            await updateProfile(auth.currentUser, {
                displayName: fullName,
                photoURL: photoUrl
            });
            console.log('Profile updated successfully');

            // navigate("/welcome");
        } catch (err) {
            console.error('Error updating profile:', err);
        }
        setFullName("");
        setPhotoUrl("");
    };

    return (
        <div>
            <div className="form-container">
                <div className="header">
                    <span className="frmspan">Contact Details</span>
                    <button className="cancel-button" onClick={() => navigate("/update")}>Cancel</button>
                </div>
                <form onSubmit={formUpdateHandler}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={nameHandler}
                            required
                        />
                        <label htmlFor="photoURL">Photo URL:</label>
                        <input type="text" id="photoURL"
                            placeholder="Photo URL"
                            value={photoUrl}
                            onChange={photoUrlHandler}
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Update</button>
                    </div>
                </form>
                <hr className="horizontal-line" />
            </div>
        </div>
    );
}