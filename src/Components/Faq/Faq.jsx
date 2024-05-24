import faqFood from '../../assets/faq1.jpg'


const Faq = () => {
    return (
        <div>
            <div className="hero p-2">
                <div className="hero-content flex-col lg:flex-row">
                    <img data-aos="fade-right" data-aos-duration="1000" src={faqFood} className="max-w-sm rounded-lg h-[400px]" />
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                What ingredients do you use in your dishes?                            </div>
                            <div className="collapse-content">
                                <p>We use fresh, locally-sourced ingredients in all our dishes to ensure the highest quality and taste.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer vegetarian or vegan options?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we offer a variety of vegetarian and vegan options on our menu. Look for the green leaf icon next to the dishes.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How can I make a reservation?
                            </div>
                            <div className="collapse-content">
                                <p>You can make a reservation through our website or by calling our restaurant directly at 1-800-123-4567.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer delivery or takeout services?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we offer both delivery and takeout services. You can place your order online or by calling our restaurant.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Are there any allergens in your food?
                            </div>
                            <div className="collapse-content">
                                <p>We provide a detailed allergen guide on our menu. Please inform our staff of any allergies.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What are your operating hours?
                            </div>
                            <div className="collapse-content">
                                <p>Our operating hours are Monday to Friday, 11 AM to 10 PM, and Saturday to Sunday, 9 AM to 11 PM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;