export default function JobAd({ job, guesses }) {
  return (
    <div className="flex justify-center text-black">
      <div className="bg-white rounded-md p-2 space-y-2 w-8/12">
        <div className="text-xl font-bold">{job.title}</div>
        <div className="grid grid-cols-2">
          <p className={guesses.length < 1 ? "blur-sm" : ""}>{job.location}</p>
          <p className={guesses.length < 2 ? "blur-sm" : ""}>{job.company}</p>
        </div>
        <div>
          <p className="font-bold">Description</p>
          <p className={guesses.length < 3 ? "blur-sm" : ""}>
            {job.description}
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="font-bold">Requirements</p>
            {job.requirements.map((requirement) => {
              return (
                <p className={guesses.length < 4 ? "blur-sm" : ""}>
                  {requirement}
                </p>
              );
            })}
          </div>
          <div>
            <p className="font-bold">Responsibilites</p>
            <p className={guesses.length < 5 ? "blur-sm" : ""}>
              lalalalalalala responsbilites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
