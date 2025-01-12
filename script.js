// Filter and search functionality
document.getElementById("search").addEventListener("input", filterVideos);
document.getElementById("filter-type").addEventListener("change", filterVideos);

function filterVideos() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filterType = document.getElementById("filter-type").value;

  const videoItems = document.querySelectorAll(".video-item");

  videoItems.forEach((item) => {
    const title = item.querySelector("h3").textContent.toLowerCase();
    const type = item.getAttribute("data-type");

    if (
      (searchQuery === "" || title.includes(searchQuery)) &&
      (filterType === "" || type === filterType)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}




