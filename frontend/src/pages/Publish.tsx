import { Appbar } from "../components/Appbar"


export const Publish = () => {
return <div>
    <Appbar/>
    <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
            <input type="text" className="w-full bg-gray-50 boreder border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />
        < TextEditor />
        </div>

    </div>
</div>
}

function TextEditor() {
    return (
    <div className="w-full mb-4  ">
        <div className="flex items-center justify-between border ">
            <div className="py-2 bg-white rounded-b-lg w-full ">
                <label className="sr-only">Publish Post</label>
                <textarea id="editor" rows={8} className="focus:outline-none block w-full text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an articel..." required  />

            </div>

        </div>
        <button type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm fon-medium text-center text-white bg-blue-700 rounded-lg focus:ring-blue-200 hover:bg-blue-900">
            Publish Post
        </button>

    </div>
    )
}