import UserCard from '@/components/UserCard'

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USERS CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Students"/>
            <UserCard type="Teachers"/>
            <UserCard type="Parents"/>
            <UserCard type="Staff"/>
        </div>
        {/* MIDDLE CHARTS */}
        <div className=''></div>
        {/* BOTTOM CHARTS */}
        <div className=''></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
