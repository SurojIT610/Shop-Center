import React from 'react';
import '../../../../assets/css/productsection.scss';

const Products = () => {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New Product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              <li className="active mixitup-control-active" data-filter="*">All</li>
              <li data-filter=".women">Women’s</li>
              <li data-filter=".men">Men’s</li>
              <li data-filter=".kid">Kid’s</li>
              <li data-filter=".accessories">Accessories</li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </div>
        </div>
        <div className="row property__gallery" id="MixItUp088F3D">
          {products.map((product, index) => (
            <div key={index} className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}>
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.image})` }}>
                  {product.label && <div className={`label ${product.label.toLowerCase()}`}>{product.label}</div>}
                  <ul className="product__hover">
                    <li><a href={product.image} className="image-popup"><span className="arrow_expand"></span></a></li>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{product.name}</a></h6>
                  <div className="rating">
                    {Array(5).fill().map((_, i) => <i key={i} className="fa fa-star"></i>)}
                  </div>
                  <div className="product__price">{`$ ${product.price.toFixed(1)}`}{product.oldPrice && <span>{`$ ${product.oldPrice.toFixed(1)}`}</span>}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    name: 'Buttons tweed blazer',
    image: 'src/assets/img/product/product-1.jpg',
    price: 59.0,
    category: 'women',
    label: 'New'
  },
  {
    name: 'Flowy striped skirt',
    image: 'src/assets/img/product/product-2.jpg',
    price: 49.0,
    category: 'men'
  },
  {
    name: 'Cotton T-Shirt',
    image: 'src/assets/img/product/product-3.jpg',
    price: 59.0,
    category: 'accessories',
    label: 'Out of stock'
  },
  {
    name: 'Slim striped pocket shirt',
    image: 'src/assets/img/product/product-4.jpg',
    price: 59.0,
    category: 'cosmetic'
  },
  {
    name: 'Fit micro corduroy shirt',
    image: 'src/assets/img/product/product-5.jpg',
    price: 59.0,
    category: 'kid'
  },
  {
    name: 'Tropical Kimono',
    image: 'src/assets/img/product/product-6.jpg',
    price: 49.0,
    oldPrice: 59.0,
    category: 'women men kid accessories cosmetic',
    label: 'Sale'
  },
  {
    name: 'Contrasting sunglasses',
    image: 'src/assets/img/product/product-7.jpg',
    price: 59.0,
    category: 'women men kid accessories cosmetic'
  },
  {
    name: 'Water resistant backpack',
    image: 'src/assets/img/product/product-8.jpg',
    price: 49.0,
    oldPrice: 59.0,
    category: 'women men kid accessories cosmetic',
    label: 'Sale'
  }
];

export default Products;
