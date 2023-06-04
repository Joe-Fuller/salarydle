export default function JobAd({ job, guesses }) {
  return (
    <div className="bg-white text-black p-8 rounded-md m-8">
      <div className="text-xl font-bold">{job.title}</div>
      <div className="grid grid-cols-2">
        <p className={guesses.length < 1 ? "blur-sm" : ""}>{job.location}</p>
        <p className={guesses.length < 2 ? "blur-sm" : ""}>{job.company}</p>
      </div>
      <div>
        <p className="font-bold">Description</p>
        <p className={guesses.length < 3 ? "blur-sm" : ""}>{job.description}</p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold">Requirements</p>
          <p className={guesses.length < 4 ? "blur-sm" : ""}>
            {job.requirements}
          </p>
        </div>
        <div>
          <p className="font-bold">Responsibilites</p>
          <p className={guesses.length < 5 ? "blur-sm" : ""}>
            lalalalalalala responsbilites
          </p>
        </div>
      </div>
    </div>
  );
}
