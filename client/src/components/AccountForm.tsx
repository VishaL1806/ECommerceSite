import { Input } from './ui/input'
import { Button } from './ui/button'

const AccountForm = () => {
  return (
    <>
    <span className="text-red-600 text-xl">Edit Your Profile</span>
            <div className="flex gap-1">
              <span className="flex-1 flex justify-start flex-col gap-1">
                <label>First Name</label>
                <Input
                  className="w-3/4 h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
              </span>
              <span className="flex-1 flex justify-start flex-col gap-1">
                <label>Last Name</label>
                <Input
                  className="w-3/4 h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
              </span>
            </div>
            <div className="flex gap-1">
              <span className="flex-1 flex justify-start flex-col gap-1">
                <label>Email</label>
                <Input
                  className="w-3/4 h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
              </span>
              <span className="flex-1 flex justify-start flex-col gap-1">
                <label>Address</label>
                <Input
                  className="w-3/4 h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
              </span>
            </div>
            <div className="flex gap-14">
              <span className="flex-1 flex justify-start flex-col gap-3">
                <label>Password Changes</label>
                <Input
                  className="w-[88%] h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                  placeholder="Current Password"
                />
                <Input
                  className="w-[88%] h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                  placeholder="New Password"
                />
                <Input
                  className="w-[88%] h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                  placeholder="Confirm New Password"
                />
              </span>
            </div>
            <div className="flex justify-end items-center pr-32">
              <Button className=" h-12 rounded-sm" variant={"secondary"}>Cancel</Button>
              <Button className="py-5 px-10 h-12 rounded-sm" variant={"destructive"}>Save Changes</Button>
            </div></>
  )
}

export default AccountForm