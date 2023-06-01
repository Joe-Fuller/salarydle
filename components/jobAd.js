export default function JobAd({ job }) {
  return (
    <div className="bg-white text-black">
      <div className="text-xl font-bold">{job.title}</div>
      <div className="grid grid-cols-2">
        <p>{job.location}</p>
        <p>{job.company}</p>
      </div>
      <div>
        <p className="font-bold">Description</p>
        <p>{job.description}</p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold">Requirements</p>
          <p>{job.requirements}</p>
        </div>
        <div>
          <p className="font-bold">Responsibilites</p>
          <p>lalalalalalala responsbilites</p>
        </div>
      </div>
    </div>
  );
}
