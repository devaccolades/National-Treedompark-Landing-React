import React, { forwardRef, useState } from 'react';

// Icons
import phoneIcon from '../../asset/icons/phone.png';
import emailIcon from '../../asset/icons/chat.png';
import mapIcon from '../../asset/icons/map-and-location.png';

const data = [
    { icon: phoneIcon, title1: "Call Now", title2: "+91 98477 17771", href: "tel:+91 98477 17771" },
    { icon: emailIcon, title1: "Email Us", title2: "marketingkochi@nationalbuilders.in", href: "mailto:marketingkochi@nationalbuilders.in" },
    { icon: mapIcon, title1: "Visit Us", title2: "National Treedom park,Vyttila, Kochi", href: "https://www.google.com/maps?ll=9.970803,76.328979&z=11&t=m&hl=en-US&gl=US&mapclient=embed&cid=7264730013772661357" },
];

const Contact = forwardRef((props, ref) => {
    const [form, setForm] = useState({ name: "", phone: "" });
    const [errors, setErrors] = useState({ name: "", phone: "" });
    const [loading, setLoading] = useState(false);

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
                    alert('Form submitted successfully!');
                    setForm({ name: "", phone: "" });
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
        setErrors({ ...errors, [name]: "" })
    };

    return (
        <section ref={ref} className="w-[90%] pb-[60px] lg:w-[70%] mx-auto flex flex-col gap-[16px] lg:gap-[30px]">
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#d90429] font-quicksand-semiBold text-[16px] lg:text-[26px] underline hidden md:block">
                    Contact Now
                </p>
                <h2 className="font-quicksand-bold text-[26px] lg:text-[36px]">
                    Get In Touch With Us
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[30px] justify-center">
                    {data?.map((item, index) => (
                        <div className="grid grid-cols-[40px,1fr] gap-[40px]" key={index}>
                            <img src={item?.icon} className="w-[40px]" alt="" />
                            <div className="flex flex-col">
                                <p className="font-extrabold text-[14px]">{item?.title1}</p>
                                <a href={item?.href} className="text-[#d90429] font-inter-regular text-[14px]">
                                    {item?.title2}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[10px] border border-[#2b2d42] p-[30px] rounded-[20px]">
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-inter-regular" htmlFor="name">
                                Name <span className="text-[#d90429]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name ..."
                                className={`border px-[10px] outline-none py-[10px] rounded-[10px] ${errors.name ? 'border-[#d90429]' : 'border-[#2b2d42]'
                                    }`}
                            />
                            {errors.name && <span className="text-[#d90429] text-[12px]">{errors.name}</span>}
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-inter-regular" htmlFor="phone">
                                Number <span className="text-[#d90429]">*</span>
                            </label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number ..."
                                className={`border px-[10px] outline-none py-[10px] rounded-[10px] ${errors.phone ? 'border-[#d90429]' : 'border-[#2b2d42]'
                                    }`}
                            />
                            {errors.phone && <span className="text-[#d90429] text-[12px]">{errors.phone}</span>}
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-[#d90429] text-white py-[10px] px-[20px] rounded-[10px] mt-[16px] lg:mt-[30px] font-inter-medium text-[14px] lg:text-[16px] cursor-pointer"
                        >
                            {loading ? 'Submitting...' : 'Submit Here'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
});

export default Contact;
