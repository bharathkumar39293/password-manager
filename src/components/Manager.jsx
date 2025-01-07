import React, { useState, useEffect } from 'react';

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const savePassword = () => {
        if (!form.site || !form.username || !form.password) {
            alert("All fields are required!");
            return;
        }
        let updatedArray;
        if (isEditing) {
            updatedArray = [...passwordArray];
            updatedArray[editingIndex] = form;
        } else {
            updatedArray = [...passwordArray, form];
        }

        setPasswordArray(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
        setForm({ site: "", username: "", password: "" });
        setIsEditing(false);
        setEditingIndex(null);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const clearPasswords = () => {
        setPasswordArray([]);
        localStorage.removeItem('passwords');
    };

    const editPassword = (index) => {
        setForm(passwordArray[index]);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const deletePassword = (index) => {
        const updatedArray = passwordArray.filter((_, i) => i !== index);
        setPasswordArray(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied to clipboard: ${text}`);
    };

    return (
        <>
            {/* Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>

            {/* Container */}
            <div className="mx-auto px-8 py-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-700">&lt;</span>
                    pass
                    <span className="text-green-700">op /&gt;</span>
                </h1>
                <p className="text-green-700 text-lg text-center mt-2">
                    Your own Password Manager
                </p>

                <div className="flex flex-col gap-6 items-center mt-6">
                    <input
                        value={form.site}
                        onChange={handleChange}
                        className="rounded-full border border-green-500 px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="text"
                        name="site"
                        required
                        placeholder="Enter website URL"
                    />

                    <div className="flex gap-4 w-full max-w-md">
                        <input
                            value={form.username}
                            onChange={handleChange}
                            className="flex-1 rounded-full border border-green-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            type="text"
                            name="username"
                            required
                            placeholder="Enter Username"
                        />

                        <div className="relative flex-1">
                            <input
                                value={form.password}
                                onChange={handleChange}
                                className="rounded-full border border-green-500 px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Enter Password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-white bg-green-500 hover:bg-green-600 rounded-full"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={savePassword}
                        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors border border-green-500"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: 24, height: 24 }}
                        ></lord-icon>
                        {isEditing ? "Update Password" : "Add Password"}
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="font-bold text-3xl py-4">Your passwords</h2>
                    {passwordArray.length === 0 ? (
                        <div>No passwords to show</div>
                    ) : (
                        <>
                            <table className="table-auto w-full rounded-md overflow-hidden">
                                <thead className="bg-green-800 text-white">
                                    <tr>
                                        <th className="py-2">Site</th>
                                        <th className="py-2">Username</th>
                                        <th className="py-2">Password</th>
                                        <th className="py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-green-100">
                                    {passwordArray.map((item, index) => (
                                        <tr key={index}>
                                            <td className="py-2 border-1 border-white text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <a
                                                        href={item.site}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 underline"
                                                    >
                                                        {item.site}
                                                    </a>
                                                    <img
                                                        className="cursor-pointer w-5"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVR4nGNgGE7Am4GB4QkDA8N/MjFB8JgCw/8TNp4EheQCulvgTWacgILakxgLKImTR8RYQG6Q/celb9QCGBgNIoJgNIgIApqXrv8HjQWPqV3YoQNPMi0BGe5Bhs8HKQAA5qOmsSMWnn4AAAAASUVORK5CYII"
                                                        alt="copy"
                                                        onClick={() => copyText(item.site)}
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-2 border-1 border-white text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>{item.username}</span>
                                                    <img
                                                        className="cursor-pointer w-5"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVR4nGNgGE7Am4GB4QkDA8N/MjFB8JgCw/8TNp4EheQCulvgTWacgILakxgLKImTR8RYQG6Q/celb9QCGBgNIoJgNIgIApqXrv8HjQWPqV3YoQNPMi0BGe5Bhs8HKQAA5qOmsSMWnn4AAAAASUVORK5CYII"
                                                        alt="copy"
                                                        onClick={() => copyText(item.username)}
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-2 border-1 border-white text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span>{item.password}</span>
                                                    <img
                                                        className="cursor-pointer w-5"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVR4nGNgGE7Am4GB4QkDA8N/MjFB8JgCw/8TNp4EheQCulvgTWacgILakxgLKImTR8RYQG6Q/celb9QCGBgNIoJgNIgIApqXrv8HjQWPqV3YoQNPMi0BGe5Bhs8HKQAA5qOmsSMWnn4AAAAASUVORK5CYII"
                                                        alt="copy"
                                                        onClick={() => copyText(item.password)}
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-2 border-1 border-white text-center">
                                                <div className="flex gap-4 justify-center">
                                                    <button
                                                        onClick={() => editPassword(index)}
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deletePassword(index)}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                onClick={clearPasswords}
                                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                            >
                                Clear All Passwords
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Manager;
