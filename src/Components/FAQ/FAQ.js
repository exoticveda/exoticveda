import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "What products do you offer?",
            answer: "Exotic Veda offers a range of exotic and premium wellness products including herbal supplements, essential oils, and beauty products."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order through our website Revaais.com by adding products to your cart and proceeding to checkout. Follow the prompts to complete your purchase."
        },
        {
            question: "What are your shipping options?",
            answer: "We offer various shipping options, including standard and expedited shipping. Shipping costs and delivery times will be displayed during checkout."
        },
        {
            question: "Can I return a product?",
            answer: "Yes, we accept returns within 14 days of purchase. Please refer to our Return Policy page for more details on how to process a return."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team via email at support@revaais.com or through our contact form on the website."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => handleToggle(index)}>
                            <h2 style={{borderBottom:'none'}}>{faq.question}</h2>
                            <span className="toggle-icon">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
