import React from 'react';

const Footer = () => {
    return (
        <footer
            className="h-20 bg-slate-800 text-white py-4 px-6 flex flex-col md:flex-row justify-center items-center gap-4 fixed bottom-0 w-full"
            role="contentinfo"
        >
            {/* Logo */}
            <div className="logo font-bold text-white text-2xl flex items-center">
                <span className="text-green-500">&lt;</span>
                <span> Pass </span>
                <span className="text-green-500">OP/&gt;</span>
            </div>

            {/* Text with Icon */}
            <div className="flex items-center text-center">
                <span>Created with</span>
                <img
                    className="w-5 h-5 mx-2"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO3WTysEYRzA8c9yIUVZktdBkVfCSd6B8gZcuPp3opwsbk5egBxIDkpeAXvE2SpLU7OlbffZ2Z15tmS/9btMT/OZmWdqhkH/uSWcoYoaXnCCuRZr51FpWnuKxW7AYezju818YQuldLZRb7M2Ob6bnrNjewH09yQXd5Bx7U4ndCFw9Xmmnm5d284joI2phOBqRPg5BH9GhGsh+C0i/BqCryPCVyF4IyK8HoKn8BFpf6d16CgCfChD5fRFKAp9T59kptYKhFezoo2OC0CTbeu6UdzmQG8woscm8NAD+ohJOZvFU5fojIIq4z4DelfEnTY3hosAeolxkSphs8XPQvLXMqQPraTf7mSW+wEO+nv9AE0ndRE9xK4zAAAAAElFTkSuQmCC"
                    alt="heart icon"
                />
                <span>by Bharath</span>
            </div>
        </footer>
    );
};

export default Footer;
