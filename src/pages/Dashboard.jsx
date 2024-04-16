import { MentorCard } from "../components/MentorCard"
import { List } from "../components/MentorList"

export const Dashboard = () => {
    return (
        <div className="mt-20 h-screen flex gap-2 flex-row justify-center">
            <div className="w-[70%] flex flex-col gap-2">
                

<MentorCard title={"Startup 1"} description={"fasdfsadfasdfsdfsd"} link={"https://google.com/"}/>
<MentorCard title={"Startup 2"} description={"hasdfsdafsdgsfsffsdfsadf"} link={"https://www.youtube.com/"} />
<MentorCard title={"startup 3"}  description={"sdfasdfdsafsdhfsdkjsdfsdkhf"} link={"https://www.ycombinator.com/companies"}/>

            </div>
            <div className="">
                

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Industry Mentors</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
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