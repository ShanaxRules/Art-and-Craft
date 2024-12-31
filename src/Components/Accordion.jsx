
const Accordion = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title text-xl font-medium">Where is your store located?</div>
                <div className="collapse-content">
                    <p>Find us in Gulshan/Dhaka</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are you available 24/7?</div>
                <div className="collapse-content">
                    <p>Yes we are</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are the qualities of the watercolor good?</div>
                <div className="collapse-content">
                    <p>Yes they sure are</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are you available 24/7?</div>
                <div className="collapse-content">
                    <p>Yes we are</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are the qualities of the watercolor good?</div>
                <div className="collapse-content">
                    <p>Yes they sure are</p>
                </div>
            </div>

        </div>
    );
};

export default Accordion;