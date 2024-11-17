import { Appbar } from "../components/Appbar"


export const Publish = () => {
return <div>
    <Appbar/>
    <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
            <input type="text" className="w-full bg-gray-50 boreder border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />

        </div>

    </div>
</div>
}