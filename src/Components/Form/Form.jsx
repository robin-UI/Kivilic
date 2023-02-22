import { useRef, useState } from "react"
import {FaTrashAlt} from 'react-icons/fa'
import upload from '../../assets/upload.png'

const Form = () => {

    const email = useRef()
    const firstname = useRef()
    const lastName = useRef()
    const telephone = useRef()
    const hiddneFiles = useRef()
    const [file, setfile] = useState(null)
    const [fileName, setFileName] = useState('')

    const submitFile = (e) => {
        setfile(e.target.files[0])
        setFileName(e.target.files[0].name);
    }

    const submitForm = () => {
        const userData = {
            email: email.current.value,
            firstname: firstname.current.value,
            lastName: lastName.current.value,
            telephone: telephone.current.value
        }

        if (file) {

            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            user.photo = fileName;
            try {
                //API hear
            } catch (error) {
                console.log(error);
            }
        }

        try {
            //API hear
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="px-20 mb-6">
            <h3 className="text-[#20404A] font-bold text-[25px] sm:text-3xl">Personal Details</h3>
            <p className=" text-[15px] sm:text-xl text-[#20404A] mb-32">Please complete the below form and attach a CV</p>
            <form onSubmit={submitForm}>
                <div className="formBox md:grid md:grid-cols-3 grid-rows-3 gap-x-11 mb-6 ">

                    <div className=" mb-4 ">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                        >
                            Email Address
                        </label>
                        <input
                            ref={email}
                            type="text"
                            id="base-input"
                            className="bg-white border border-gray-300 text-[#20404A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>

                    <div></div>
                    <div></div>

                    <div className=" mb-4 ">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                        >
                            First Name
                        </label>
                        <input
                            ref={firstname}
                            type="text"
                            id="base-input"
                            className="bg-white border border-gray-300 text-[#20404A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>

                    <div className=" mb-4 ">
                        <label
                            htmlFor="base-input"
                            className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                        >
                            Last Name
                        </label>
                        <input
                            ref={lastName}
                            type="text"
                            id="base-input"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>

                    <div className=" mb-4 ">
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

                    <div className=" mb-4 ">
                        {!file ? <>
                            <label
                                className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white"
                                htmlFor="file_input"
                            >
                                Upload CV
                            </label>

                            <input
                                className="hidden"
                                ref={hiddneFiles}
                                type="file"
                                onChange={submitFile}
                            />

                            <button type="button" onClick={() => hiddneFiles.current.click()} class="flex justify-between w-full text-[#20404A] bg-[#BFBFBF] hover:bg-[#BFBFBF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">
                                <h2>Upload CV</h2> 
                                <img src={upload} alt="Upload Logo" className="w-[20px] h-[20px] " />
                            </button>

                            <p
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="file_input_help"
                            >
                                Select resume file (TXT, PDF or Word DOC).
                            </p>
                        </> :
                            <div>
                                <p className="block mb-2 text-sm font-normal text-[#20404A] dark:text-white">Your file</p>
                                <div class="w-full flex justify-between items-center max-w-sm p-4 bg-blue-100 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                                    <h5 class="text-base font-normal text-gray-900 md:text-xl dark:text-white">
                                        {fileName}
                                    </h5>
                                    <FaTrashAlt className=" cursor-pointer" onClick={()=> setfile(null)}/>
                                    </div>
                            </div>
                        }


                    </div>
                </div>
            </form>

            <button type="button" class="text-white bg-[#04a8e8] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

        </div>
    )
}

export default Form