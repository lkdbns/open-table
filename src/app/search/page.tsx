import Link from "../../../node_modules/next/link"


export default function Search() {
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
                <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
                {/* SEARCH BAR */}
                <div className="text-left py-3 m-auto flex justify-center">
                    <input 
                        className="rounded text-lg mr-3 w-74 p-2 w[450px]"
                        type="text"
                        placeholder="State, City, or Town"
                    />
                        <button className="bg-red-600 px-9 py-2 text-white">
                        Let's Go
                        </button>
                    </div>
                    {/* SEARCH BAR */}
                </div>
                <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                {/* SEARCH SIDE BAR */}
                <div className="w-1/5">
                    <div className="border-b pb-4">
                    <h1 className="mg-2">Region</h1>
                    <p className="font-light text-reg">Austin</p>
                    <p className="font-light text-reg">Dallas</p>
                    <p className="font-light text-reg">San Antonio</p>
                    <p className="font-light text-reg">Houston</p>
                    <p className="font-light text-reg">Galveston</p>
                    </div>
                    <div className="border-b pb-4 mt-3">
                    <h1 className="mg-2">Cuisine</h1>
                    <p className="font-light text-reg">Mexican</p>
                    <p className="font-light text-reg">Italion</p>
                    <p className="font-light text-reg">Chinese</p>
                    <p className="font-light text-reg">Indian</p>
                    </div>
                    <div className="mt-3 pb-4">
                    <h1 className="mb-2">Price</h1>
                    <div className="flex">
                        <button className="border w-full text-reg font-light rounded-l p-2">
                        $
                        </button>
                        <button className="border-r border-t border-b w-full text-reg font-light p-2">
                        $$
                        </button>
                        <button className="border-r border-t border-b w-full text-reg font-light p-2">
                        $$$
                        </button>
                        <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
                        $$$$
                        </button>
                    </div>
                    </div>
                </div>
                {/* SEARCH SIDE BAR */}
                <div className="w-5/6">
                    {/* RESTAURANT CARD */}
                    <div className="border-b flex pb-5">
                    <img 
                        src="https://resizer.otstatic.com/v2/photos/legacy/3/48284913.jpg" 
                        alt="" 
                        className="w-44 rounded" 
                    />
                    <div className="pl-5">
                        <h2 className="text-3xl">Dean's</h2>
                        <div className="flex items-start">
                        <div className="flex mb-2">*****</div>
                        <p className="ml-2 text-sm">Awesome</p>
                        </div>
                        <div className="mb-9">
                        <div className="font-light flex text-reg">
                            <p className="mr-4">$$$</p>
                            <p className="mr-4">Mexican</p>
                            <p className="mr-4">Austin</p>
                        </div>
                        </div>
                        <div className="text-red-600">
                        <a href="">View more information</a>
                        </div>
                    </div>
                    </div>
                    {/* RESTAURANT CARD */}
                </div>
                </div>
            </main>
        </main>
    )
}