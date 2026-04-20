import BackButton from "@/app/components/Shared/BackButton";
import QuickButton from "@/app/components/Shared/QuickButton";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FiArchive, FiClock, FiTrash2 } from "react-icons/fi";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await (
    await fetch(
      "https://raw.githubusercontent.com/mdyeamin/friends-data/refs/heads/main/keepkeper",
    )
  ).json();

  const friends = await res.friends;

  const myFriend = friends.find((friend) => friend.id === Number(id));
  if (!myFriend) {
    return notFound();
  }
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    email,
    bio,
    goal,
    next_due_date,
  } = myFriend;

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-10 font-sans text-[#1e293b]">
      {/* Back Button Container */}
      <BackButton />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Profile & Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Image
                src={picture}
                width={100}
                height={100}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>

            <h1 className="text-xl font-bold mb-2">{name}</h1>

            <div className="flex flex-col gap-2 mb-4">
              <span
                className={`
             ${status.toLowerCase() === "almost due" && "bg-[#efad44]"}
${status.toLowerCase() === "on-track" && "bg-[#244d3f]"}
${status.toLowerCase() === "overdue" && "bg-[#ef4444]"}
            text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
              >
                {status}
              </span>
              <div className="flex gap-1">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className=" bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-sm italic mb-1">{`${bio}`}</p>
            <p className="text-slate-400 text-xs">Preferred: {email}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-white hover:bg-slate-50 border border-gray-100 py-4 rounded-lg shadow-sm flex items-center justify-center gap-3 font-semibold text-sm transition-all">
              <FiClock className="text-lg" />
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-white hover:bg-slate-50 border border-gray-100 py-4 rounded-lg shadow-sm flex items-center justify-center gap-3 font-semibold text-sm transition-all">
              <FiArchive className="text-lg" />
              Archive
            </button>
            <button className="w-full bg-white hover:bg-red-50 border border-gray-100 py-4 rounded-lg shadow-sm flex items-center justify-center gap-3 font-semibold text-sm text-red-500 transition-all">
              <FiTrash2 className="text-lg" />
              Delete
            </button>
          </div>
        </div>

        {/* Right Column: Stats & Goals */}
        <div className="lg:col-span-8 space-y-6">
          {/* Top Stat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-4xl font-bold mb-1">{days_since_contact}</h2>
              <p className="text-slate-400 text-sm font-medium">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-4xl font-bold mb-1">{goal}</h2>
              <p className="text-slate-400 text-sm font-medium">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-bold text-[#244d3f] mb-1">
                {next_due_date}
              </h2>
              <p className="text-slate-400 text-sm font-medium">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Relationship Goal</h3>
              <button className="text-slate-400 text-xs font-bold border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-slate-50 transition-all">
                Edit
              </button>
            </div>
            <p className="text-slate-500">
              Connect every{" "}
              <span className="font-bold text-slate-800">{goal} days</span>
            </p>
          </div>

          {/* Quick Check-In Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <QuickButton name={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
