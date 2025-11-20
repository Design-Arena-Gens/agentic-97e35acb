'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  category: string
  description: string
  icon: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    category: "Electronics",
    description: "High-quality sound with active noise cancellation",
    icon: "🎧"
  },
  {
    id: 2,
    name: "Designer Leather Jacket",
    price: 499,
    category: "Fashion",
    description: "Genuine leather with premium craftsmanship",
    icon: "🧥"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 399,
    category: "Electronics",
    description: "Track your health and fitness goals in style",
    icon: "⌚"
  },
  {
    id: 4,
    name: "Professional Camera",
    price: 1299,
    category: "Electronics",
    description: "Capture moments with stunning clarity",
    icon: "📷"
  },
  {
    id: 5,
    name: "Premium Sneakers",
    price: 179,
    category: "Fashion",
    description: "Comfort meets style for everyday wear",
    icon: "👟"
  },
  {
    id: 6,
    name: "Luxury Watch",
    price: 899,
    category: "Accessories",
    description: "Timeless elegance for any occasion",
    icon: "⌚"
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    price: 149,
    category: "Electronics",
    description: "True wireless freedom with premium sound",
    icon: "🎵"
  },
  {
    id: 8,
    name: "Designer Sunglasses",
    price: 249,
    category: "Accessories",
    description: "UV protection with sophisticated style",
    icon: "🕶️"
  },
  {
    id: 9,
    name: "Laptop Backpack",
    price: 89,
    category: "Accessories",
    description: "Durable and stylish protection for your tech",
    icon: "🎒"
  }
]

export default function Home() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo">ModernStore</a>
            <ul className="nav-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="cart-icon">
              Cart {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Welcome to ModernStore</h1>
          <p>Discover premium products curated just for you</p>
        </div>
      </section>

      <main>
        <section className="products-section" id="products">
          <div className="container">
            <h2 className="section-title">Featured Products</h2>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.icon}</div>
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <button
                        className="add-to-cart"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>ModernStore brings you the finest selection of premium products from around the world.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ModernStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
