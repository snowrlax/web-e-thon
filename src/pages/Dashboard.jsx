import { MentorCard } from "../components/MentorCard"
import { List } from "../components/MentorList"

export const Dashboard = () => {
    return (
        <div classNameName="mt-20 h-screen flex gap-2 flex-row justify-center">
            <div classNameName="w-[70%] flex flex-col gap-2">
                

<MentorCard />
<MentorCard />
<MentorCard />

            </div>
            <div classNameName="">
                

<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Industry Mentors</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <List />
            <List />
            <List />
            <List />
        </ul>
   </div>
</div>

            </div>
        </div>
    )
}