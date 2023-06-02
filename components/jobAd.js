export default function JobAd({ job, guesses }) {
  return (
    <div className="bg-white text-black">
      <div className="text-xl font-bold">{job.title}</div>
      <div className="grid grid-cols-2">
        <p className="blur-sm">{job.location}</p>
        <p className="blur-sm">{job.company}</p>
      </div>
      <div>
        <p className="font-bold">Description</p>
        <p className="blur-sm">{job.description}</p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold">Requirements</p>
          <p className="blur-sm">{job.requirements}</p>
        </div>
        <div>
          <p className="font-bold">Responsibilites</p>
          <p className="blur-sm">lalalalalalala responsbilites</p>
        </div>
      </div>
    </div>
  );
}
