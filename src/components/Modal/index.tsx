import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Don't render the modal if it's closed

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
