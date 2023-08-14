import Link from "../../../../node_modules/next/link"

export default function Reservation() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
            {/* NAVBAR */}
            <nav className="bg-white p-2 flex justify-between">
                <Link href="/" className="font-bold text-gray-700 text-2xl">
                    Open Table
                </Link>
                <div>
                <div className="flex">
                    <button className="bg-blue-400 text-white border p-2 rounded">Signin</button>
                    <button className="ml-3 border p-2 rounded">Signup</button>
                </div>
                </div>
            </nav>
            {/* NAVBAR */}
            {/* HEADER */}
            <div className="h-96 overflow-hidden">
                <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justified-center items-center">
                <h1 className="text-7xl text-white capitalize text-shadow text-center">
                    Milestone Grill (Texas)
                </h1>
                </div>
            </div>
            {/* HEADER */}
            {/* DESCRIPTION PORTION*/}
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[70%] rounded p-3 shadow">
                {/* RESTAURANT NAV*/}
                <nav className="flex text-reg border-b pb-2">
                    <a href="" className="mr-7">Overview</a>
                    <a href="" className="mr-7">Menu</a>
                </nav>
                {/* RESTAURANT NAV*/}
                {/* TITLE */}
                <div className="mt-4 border-b pb-6">
                    <h1 className="font-bold text-6xl">Milestone Grill</h1>
                </div>
                {/* TITLE */}
                {/* RATINGS */}
                <div className="flex items-end">
                    <div className="ratings mt-2 flex items-center">
                    <p>*****</p>
                    <p className="text-reg ml-3">4.9</p>
                    </div>
                    <div>
                    <p className="text-reg ml-4">600 Reviews</p>
                    </div>
                </div>
                {/* RATINGS */}
                {/* DESCRIPTION */}
                <div className="mt-4">
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                {/* DESCRIPTION */}
                {/* IMAGES */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                    5 photos
                    </h1>
                    <div className="flex flex-wrap">
                    <img className="w-56 h-44 mr-1 mb-1" 
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/53052249.webp"
                    alt=""
                    />
                    <img className="w-56 h-44 mr-1 mb-1" 
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/53052241.webp"
                    alt=""
                    />
                    <img className="w-56 h-44 mr-1 mb-1" 
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/53052235.webp"
                    alt=""
                    />
                    <img className="w-56 h-44 mr-1 mb-1" 
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/53052233.webp"
                    alt=""
                    />
                    <img className="w-56 h-44 mr-1 mb-1" 
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/53052243.webp"
                    alt=""
                    />
                    </div>
                </div>
                {/* IMAGES */}
                {/* REVIEWS */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                    What 100 people are saying
                    </h1>
                    <div>
                    {/* REVIEW CARD */}
                    <div className="border-b pb-7 mb-7">
                        <div className="flex">
                        <div className="w-1/6 flex flex-col items-center">
                            <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                            {/* INITIALS */}
                            <h2 className="flex-white text-2xl">
                                MJ
                            </h2>
                            </div>
                            {/* NAME */}
                            <p className="text-center">
                            Michael Jordan
                            </p>
                        </div>
                        <div className="ml-10 w-5/6">
                            <div className="flex items-center">
                            <div className="flex mr-5">
                                *****
                            </div>
                            </div>
                            <div className="mt-5">
                            <p className="text-light font-light">
                                The perfect anniversary dinner. The food was excellent. The service was outstanding. The setting was exquisite. Definitely looking forward to another celebration soon.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* REVIEW CARD */}
                    </div>
                </div>
                {/* REVIEWS */}
                </div>
                {/* RESERVATION CARD PORTION */}
                <div className="w-[27%] relative text-reg">
                <div className="fixed w-[15%] bg-white rounded p-3 shadow">
                    <div className="text-center border-b pb-2 font-bold">
                    <h4 className="mr-7 text-lg">
                        Make a reservation
                    </h4>
                    </div>
                    <div className="my-3 flex flex-col">
                    <label htmlFor="">Party Size</label>
                    <select name="" className="py-3 border-b font-light" id="">
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                    </select>
                    </div>
                    <div className="flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="">
                        Date
                        </label>
                        <input type="text" className="py-3 border-b font-light w-28"></input>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="">
                        Time
                        </label>
                        <select name="" className="py-3 border-b font-light" id="">
                        <option value="">7:30 AM</option>
                        <option value="">9:30 AM</option>
                        </select>
                    </div>
                    </div>
                    <div className="mt-5">
                    <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">Find a Time</button>
                    </div>
                </div>
                </div>
                {/* RESERVATION CARD PORTION */}
            </div>
            {/* DESCRIPTION PORTION*/}
            </main>
        </main>
    )
}