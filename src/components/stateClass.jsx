import { useState } from "react";

const StateComp = () => {
    const [stateClass, setStateClass] = useState(0);
    const [userData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        nationality: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const handleChange = () => {
        // Logic to monitor user inputs
    };

    const handleSubmit = () => {
        // Logic to submit form as a text file sent to email
    };

    const increment = () => {
        setStateClass(stateClass + 1);
    };

    const decrement = () => {
        setStateClass(Math.max(stateClass - 1, 0));
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
            {/* <h1 className="text-2xl font-bold text-gray-800">
                Welcome to our Simple E-commerce site built with React
            </h1>
            
            <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/0127612/1.jpg"
                alt="Product"
                className="rounded-lg shadow-lg"
            />

            <p className="text-lg font-semibold">State: {stateClass}</p>
            
            <div className="space-x-4">
                <button onClick={increment} className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600 transition">
                    Add
                </button>
                <button onClick={decrement} className="bg-red-500 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition">
                    Remove
                </button>
            </div> */}

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                <div>
                    <label className="block font-medium">First Name</label>
                    <input
                        onChange={handleChange}
                        value={userData.firstname}
                        type="text"
                        name="firstname"
                        placeholder="Your first name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium">Last Name</label>
                    <input
                        onChange={handleChange}
                        value={userData.lastname}
                        type="text"
                        name="lastname"
                        placeholder="Your last name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium">Age</label>
                    <input
                        onChange={handleChange}
                        value={userData.age}
                        type="number"
                        name="age"
                        placeholder="Your age"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium">Phone Number</label>
                    <input
                        onChange={handleChange}
                        value={userData.phoneNumber}
                        type="text"
                        name="phoneNumber"
                        placeholder="Your phone number"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium">Nationality</label>
                    <select
                        onChange={handleChange}
                        value={userData.nationality}
                        name="nationality"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select your nationality</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="USA">USA</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        onChange={handleChange}
                        value={userData.email}
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium">Password</label>
                    <input
                        onChange={handleChange}
                        value={userData.password}
                        type="password"
                        name="password"
                        placeholder="Your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default StateComp;
