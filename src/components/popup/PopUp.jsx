import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "" });
    const [errors, setErrors] = useState({ name: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    // Check if the popup has been closed before
    useEffect(() => {
        if (!isOpen) {
            setIsOpen(true);
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(form.phone.trim())) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const formData = new URLSearchParams();
                formData.append('name', form.name);
                formData.append('phone', form.phone);

                const response = await fetch('https://treedompark.nationalbuilders.in/ads/Thankyou.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formData.toString(),
                });

                const result = await response.json();
                setLoading(false);

                if (result.result === 'success') {
                    setForm({ name: "", phone: "" });
                    setIsOpen(false);
                    navigate('/thankyou'); 
                } else {
                    alert(result.message || 'Something went wrong. Please try again.');
                }
            } catch (error) {
                setLoading(false);
                console.error('Error submitting form:', error);
                alert('Something went wrong. Please try again.');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white relative p-6 rounded-lg w-full max-w-md shadow-lg">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            ✖
                        </button>
                        <h2 className="text-lg font-semibold mb-4">Enquiry Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="font-medium">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name..."
                                        className={`border px-3 py-2 rounded-md outline-none ${
                                            errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.name && (
                                        <span className="text-red-500 text-sm">{errors.name}</span>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="font-medium">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number..."
                                        className={`border px-3 py-2 rounded-md outline-none ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-sm">{errors.phone}</span>
                                    )}
                                </div>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="bg-[#d90429] text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50"
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUp;
