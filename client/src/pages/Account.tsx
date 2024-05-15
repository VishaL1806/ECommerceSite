
import AccountForm from "@/components/AccountForm";
import BreadCrumb from "@/components/BreadCrumb";


const Account = () => {

  return (
    <section className="my-account mx-32 mt-10">
      <div className="flex flex-col">
        {/* Header and links */}
        <div className="flex justify-between items-center">
          <BreadCrumb />
          <div className="flex gap-3">
            <p>Welcome!</p> <p className="text-red-500">Vishal</p>
          </div>
        </div>
        <div className="flex mt-10">
        <div className="flex-1 ">
        <span className="font-semibold">Manage My Account</span>
      <ul className="pl-10 flex flex-col gap-2 my-5">
        <li>My Profile</li>
        <li>Address Book</li>
        <li>My Payment Options</li>
      </ul>
      <span className="font-semibold">Manage My Account</span>
      <ul className="pl-10 flex flex-col gap-2 my-5">
        <li>My Returns</li>
        <li>My Cancellations</li>
      </ul>
      <span className="font-semibold">My Wishlist</span>
      </div>
      <div className="flex-[3] shadow-lg py-10 px-32 pr-0 flex flex-col gap-7">
      <AccountForm />
      </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
