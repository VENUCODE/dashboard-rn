const fileNames = async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = fileNames;
