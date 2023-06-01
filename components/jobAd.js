export default function JobAd(job) {
  return (
    <div>
      <div>Job Title</div>
      <div className="grid grid-cols-2">
        <p>Location</p>
        <p>Company</p>
      </div>
      <div>Description</div>
      <div className="grid grid-cols-2">
        <div>Requirements</div>
        <div>Responsibilites</div>
      </div>
    </div>
  );
}
