import "./FilterGroup.css";

const FilterGroup = ({ title, inputType, options }) => {


    return (

        <>
            <div className="filter-by-container">
                <h3 className="filter-by-title">{title}</h3>

                {options.map((option, index) => (
                    <label
                        className="input-label"
                        key={index}
                    >
                    <input
                        type={inputType}
                        value={option.value ?? option.text}
                        className="input-checkbox"
                        name="option"
                    />

                        {option.text}
                    </label>
                ))}


            </div>
        </>
    )
}

export default FilterGroup;