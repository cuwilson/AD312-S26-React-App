import { useState } from "react";
import "./UserProfile.css";

function UserProfile() {
    const [user, setUser] = useState({
        name: "Oreo Wilson",
        email: "oreo.wilson@cutecats.com",
        address: {
            street: "123 Fluffy Ave",
            city: "Purrfectville",
            state: "WA",
            zip: "10987"
        }
    });

    const [streetInput, setStreetInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [stateInput, setStateInput] = useState("");
    const [zipInput, setZipInput] = useState("");

    const { name, email, address } = user;

    function updateAddress() {
        setUser((prevUser) => ({
            ...prevUser,
            address: {
                ...prevUser.address,
                street: streetInput || prevUser.address.street,
                city: cityInput || prevUser.address.city,
                state: stateInput || prevUser.address.state,
                zip: zipInput || prevUser.address.zip,
            },
        }));

        // Clear input fields after updating address
        setStreetInput("");
        setCityInput("");
        setStateInput("");
        setZipInput("");

    }

    return (
        <div className="container profile-container">
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address.street}, {address.city}, {address.state} {address.zip}</p>
            <h2>Update Address</h2>
            <div className="input-group">
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
            <button onClick={updateAddress}>Update Address</button>
        </div>
    );
}

export default UserProfile;