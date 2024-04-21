app.post("/add/product-categories", async (req, res) => {
  const { categoryName, agentId } = req.body;
  if (!categoryName || !agentId) {
    return res
      .status(400)
      .json({ message: "Both categoryName and agentId are required" });
  }
  try {
    const existingCategory = await ProductCategoryModel.findOne({
      categoryName,
    });
    if (existingCategory) {
      return res
        .status(400)
        .json({ message: "Product category already exists" });
    }
    const newProductCategory = new ProductCategoryModel({
      categoryName,
      agentId,
    });
    await newProductCategory.save();
    return res
      .status(201)
      .json({ message: "Product category created successfully" });
  } catch (error) {
    console.error("Error creating product category:", error);
    return res.status(500).json({ message: error.message });
  }
});
//create Products
app.post("/add/products", async (req, res) => {
  const {
    productName,
    productPrice,
    productDescription,
    images,
    agentId,
    categoryName,
  } = req.body;
  if (
    !productName ||
    !productPrice ||
    !productDescription ||
    !images ||
    !agentId ||
    !categoryName
  ) {
    return res
      .status(400)
      .json({
        message:
          "All fields (productName, productPrice, productDescription, images, timestamp) are required",
      });
  }

  const imagesDir = path.join(__dirname, "Products");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }
  const imageUrls = [];
  for (let i = 0; i < images.length; i++) {
    const base64Image = images[i];
    const imageData = Buffer.from(base64Image.split(",")[1], "base64");
    const imageType = base64Image.split(",")[0].split(";")[0].split("/")[1];
    const imageName = `${Date.now()}_${i}.${imageType}`;
    fs.writeFileSync(path.join(imagesDir, imageName), imageData);
    imageUrls.push(`Products/${imageName}`);
  }

  try {
    const newProduct = new ProductsModel({
      productName,
      productPrice,
      productDescription,
      images: imageUrls,
      categoryName,
      agentId,
    });
    await newProduct.save();
    return res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: error.message });
  }
});
//get Products
app.get("/get/product-categories", async (req, res) => {
  try {
    const productCategories = await ProductCategoryModel.find(
      {},
      "categoryName"
    );
    res.json(productCategories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
//get the particular user uploaded products
app.get("/get/products-by-user", async (req, res) => {
  const { agentId } = req.query;

  try {
    const products = await ProductsModel.find({ agentId });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
