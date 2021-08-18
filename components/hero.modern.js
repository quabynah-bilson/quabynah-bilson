function ModernHero({ user }) {
  return (
    <div className="w-screen h-screen max-w-7xl mx-auto bg-gray-50">
      <div className="flex flex-col space-y-2 items-center justify-center pt-12">
        <h1 className="text-6xl font-bold">{user.username}</h1>
        <h1 className="text-3xl">Full stack developer</h1>
        <h1 className="text-3xl">Based in Ghana</h1>
      </div>
      {/* <div className="w-full h-full grid grid-cols-2 gap-x-8">
        <div className="flex flex-col items-start justify-center">
          <h1 className="">{user.username}</h1>
        </div>
        <div className="flex"></div>
      </div> */}
    </div>
  );
}

export default ModernHero;
