import React from 'react';
import { motion } from 'framer-motion';
import './Cart.scss';

const Cart = () => {
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-header">
                <h5 className="mb-3">
                  <a href="#!" className="text-body">
                    <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                  </a>
                </h5>
              </div>
              <motion.div
                className="card-body p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span> 
                      <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a>
                    </p>
                  </div>
                </div>

                {[
                  {
                    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
                    title: "Iphone 11 pro",
                    description: "256GB, Navy Blue",
                    quantity: 2,
                    price: "$900"
                  },
                  {
                    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
                    title: "Samsung galaxy Note 10",
                    description: "256GB, Navy Blue",
                    quantity: 2,
                    price: "$900"
                  },
                  {
                    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
                    title: "Canon EOS M50",
                    description: "Onyx Black",
                    quantity: 1,
                    price: "$1199"
                  },
                  {
                    imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
                    title: "MacBook Pro",
                    description: "1TB, Graphite",
                    quantity: 1,
                    price: "$1799"
                  }
                ].map((item, index) => (
                  <motion.div
                    className="cart-item mb-3"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img
                      src={item.imgSrc}
                      alt="Shopping item"
                    />
                    <div className="cart-item-info">
                      <h5>{item.title}</h5>
                      <p className="small mb-0">{item.description}</p>
                    </div>
                    <div className="cart-item-actions">
                      <h5 className="fw-normal mb-0">{item.quantity}</h5>
                      <h5 className="mb-0">{item.price}</h5>
                      <a href="#!">
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </div>
                  </motion.div>
                ))}

              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="shipping-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">Shipping details</h5>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  className="img-fluid rounded-3"
                  style={{ width: '45px' }}
                  alt="Avatar"
                />
              </div>

              <form className="mt-4">
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeName"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                  />
                  <label className="form-label" htmlFor="typeName">Full Name</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeAddress"
                    className="form-control form-control-lg"
                    placeholder="Address"
                  />
                  <label className="form-label" htmlFor="typeAddress">Address</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeCity"
                    className="form-control form-control-lg"
                    placeholder="City"
                  />
                  <label className="form-label" htmlFor="typeCity">City</label>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="typeZip"
                        className="form-control form-control-lg"
                        placeholder="ZIP Code"
                      />
                      <label className="form-label" htmlFor="typeZip">ZIP Code</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="typePhone"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                      />
                      <label className="form-label" htmlFor="typePhone">Phone Number</label>
                    </div>
                  </div>
                </div>

              </form>

              <hr className="my-4" />

              <div className="d-flex justify-content-between">
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">$4798.00</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping</p>
                <p className="mb-2">$20.00</p>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <p className="mb-2">Total(Incl. taxes)</p>
                <p className="mb-2">$4818.00</p>
              </div>

              <motion.button
                type="button"
                className="checkout-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="d-flex justify-content-between">
                  <span>$4818.00</span>
                  <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                </div>
              </motion.button>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cart;
