

const Form = () => {
    //const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
    return(
        <div>
            <form  className="">
                <h2>Setup Quiz</h2>
                <div>
                    <label>Number of Questions</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className=""
                        
                        min={5}
                        max={50}
                    />
                </div>
                <div>
                    <label htmlFor="category">
                        Select Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className=""
                        
                    >
                        <option value="sports">Sports</option>   
                        <option value="politics">Politics</option>
                        <option value="history">History</option>
                        <option value="science">Science</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="difficulty">
                        Select Difficulty
                    </label>
                    <select
                        id="difficulty"
                        name="difficulty"
                        className=""
                        
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                </div>
                <div>
                    <label>
                        Select Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className=""
                        
                    >
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True or False</option>
                    </select>
                </div>
                {/* { error && (
                    <p className="">
                        Can't Generate Questions, Please Try Different Options
                    </p>
                )} */}
                <button
                    type="submit"
                    className=""
                >
                    Start
                </button>
            </form>
        </div>
    );
};

export default Form;