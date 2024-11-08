function showJobs() {
  const district = document.getElementById("district").value;
  const education = document.getElementById("education").value;
  const upper = document.getElementById("upper");

  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  const filteredJobs = window.jobs.filter(
    (job) => job.district === district && job.education === education
  );

  upper.style.display = "none";
  jobList.style.display = "block";

  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found for the selected criteria.</p>";
  } else {
    filteredJobs.forEach((job) => {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");
      jobItem.innerHTML = `
                <h4>${job.role} - ${job.company}</h4>
                <p><strong>Address:</strong> ${job.address}</p>
                <p><strong>Phone:</strong> ${job.phone}</p>
                <p><strong>Openings:</strong> ${job.openings}</p>
                <p><strong>Education Required:</strong> ${job.education}</p>
                <a href="tel:${job.phone}">Call</a> | <a href="https://wa.me/91${job.phone}">WhatsApp</a>
            `;
      jobList.appendChild(jobItem);
    });
  }
}
