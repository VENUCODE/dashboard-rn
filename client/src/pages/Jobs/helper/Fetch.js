const getJobCatgories = async () => {
  try {
    const response = await fetch("http://localhost:3300/api/jobs/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { status: "failed", message: error.message };
  }
};

module.exports = { getJobCatgories };
