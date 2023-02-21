
const Form = () => {
    return (
        <div className="px-20 mb-6">
            <h3 className="text-[#20404A] font-bold text-3xl">Personal Details</h3>
            <p className="text-xl text-[#20404A] mb-32">Please complete the below form and attach a CV</p>
            <div className="formBox grid grid-cols-3 grid-rows-3 gap-x-11 mb-6 ">

                <div className="">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                    >
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="bg-white border border-gray-300 text-[#20404A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div></div>
                <div></div>

                <div className="">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="bg-white border border-gray-300 text-[#20404A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                    >
                        Telephone
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className="">
                    <>
                        <label
                            className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                            htmlFor="file_input"
                        >
                            Upload CV
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                        <p
                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            Select resume file (TXT, PDF or Word DOC).
                        </p>
                    </>

                </div>
            </div>

            <button type="button" class="text-white bg-[#04a8e8] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

        </div>
    )
}

export default Form