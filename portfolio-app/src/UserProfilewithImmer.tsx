import { useState } from "react";
import { useImmer } from "use-immer";
import "./UserProfilewithImmer.css"

function UserProfileWithImmer() {
    const [userProfile, updateUserProfile] = useImmer({
        name: "Oreo Wilson",
        email: "oreo.wilson@cutecats.com",
        contactDetails: {
            phone: "555-123-4567",
            address: {
                street: "123 Fluffy Ave",
                city: "Purrfectville",
                state: "WA",
                zip: "10987",
            },
        },
        preferences: {
            newsletter: true,
            notifications: true,
        },
    });

    // Inputs 
    const [phoneInput, setPhoneInput] = useState("");
    const [streetInput, setStreetInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [stateInput, setStateInput] = useState("");
    const [zipInput, setZipInput] = useState("");

    function updateContactDetails() {
        updateUserProfile((draft) => {
            if (phoneInput !== "") draft.contactDetails.phone = phoneInput;

            if (streetInput !== "") draft.contactDetails.address.street = streetInput;
            if (cityInput !== "") draft.contactDetails.address.city = cityInput;
            if (stateInput !== "") draft.contactDetails.address.state = stateInput;
            if (zipInput !== "") draft.contactDetails.address.zip = zipInput;
        });

        // clear inputs
        setPhoneInput("");
        setStreetInput("");
        setCityInput("");
        setStateInput("");
        setZipInput("");
    }

    function toggleNewsletter() {
        updateUserProfile((draft) => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    }

    function toggleNotifications() {
        updateUserProfile((draft) => {
            draft.preferences.notifications = !draft.preferences.notifications;
        });
    }

    return (
        <div className="container profile-immer-container">
            <h1>User Profile</h1>
            <h2>with Immer</h2>

            {/* Display */}
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Phone: {userProfile.contactDetails.phone}</p>
            <p>
                Address: {userProfile.contactDetails.address.street},{" "}
                {userProfile.contactDetails.address.city},{" "}
                {userProfile.contactDetails.address.state}{" "}
                {userProfile.contactDetails.address.zip}
            </p>

            <p>
                Newsletter: {userProfile.preferences.newsletter ? "Subscribed" : "Not Subscribed"}
            </p>

            <p>
                Notifications: {userProfile.preferences.notifications ? "On" : "Off"}
            </p>
            {/* Inputs */}
            <h2>Update Info</h2>
            <div className="input-group">
                
                <input
                    type="text"
                    placeholder="New phone"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New street"
                    value={streetInput}
                    onChange={(e) => setStreetInput(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New city"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New state"
                    value={stateInput}
                    onChange={(e) => setStateInput(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New zip"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                />

            </div>

            <button onClick={updateContactDetails}>Update Profile</button>
            <div className="checkbox-group">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={userProfile.preferences.newsletter}
                        onChange={toggleNewsletter}
                    />
                    <span className="checkmark"></span>
                    Subscribe to Newsletter
                </label>
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={userProfile.preferences.notifications}
                        onChange={toggleNotifications}
                    />
                    <span className="checkmark"></span>
                    Enable Notifications
                </label>
            </div>

            {/* Debug / feedback section */}
            <h2>Live State</h2>
            <pre>{JSON.stringify(userProfile, null, 2)}</pre>
        </div>
    );
}

export default UserProfileWithImmer;