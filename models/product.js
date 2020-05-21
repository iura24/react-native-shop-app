class Product {
  constructor(id, ownerId, title, imageUrl, description, price, categoryId) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
  }
}

export default Product;
