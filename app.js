// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [showReviews, setShowReviews] = useState<boolean>(false);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('description');

  const product = {
    id: 1,
    name: "Professional DSLR Camera",
    brand: "TechPro",
    rating: 4.8,
    reviews: 245,
    price: 1499.99,
    salePrice: 1299.99,
    description: "High-end professional DSLR camera with advanced features perfect for photography enthusiasts and professionals. Features include 45.7 MP full-frame sensor, 4K video recording, and advanced autofocus system.",
    variants: [
      { id: 1, name: "Body Only", price: 1299.99 },
      { id: 2, name: "With 24-70mm Lens", price: 1899.99 },
      { id: 3, name: "With 70-200mm Lens", price: 2099.99 }
    ],
    specs: [
      { name: "Sensor", value: "45.7 MP Full-Frame CMOS" },
      { name: "ISO Range", value: "100-51,200" },
      { name: "Video Resolution", value: "4K UHD" },
      { name: "Screen", value: "3.2\" Tilting Touchscreen" },
      { name: "Connectivity", value: "Wi-Fi, Bluetooth" }
    ],
    features: [
      "45.7 MP Resolution",
      "Advanced Autofocus System",
      "4K Video Recording",
      "Weather-Sealed Body",
      "Dual Memory Card Slots"
    ]
  };

  useEffect(() => {
    const images = [
      "https://public.readdy.ai/ai/img_res/5d3e3f847e74dc923ac4d1463df70419.jpg",
      "https://public.readdy.ai/ai/img_res/986045c3bb3173ab745fa9ec81509b3c.jpg",
      "https://public.readdy.ai/ai/img_res/fd9638898d42a8fa54fd3957a6bfb57e.jpg",
      "https://public.readdy.ai/ai/img_res/86730cb4a1acc7f6130abbed25d76ce0.jpg"
    ];

    setProductImages(images);
    setMainImage(images[0]);

    const related = [
      {
        id: 2,
        name: "Camera Tripod Pro",
        price: 199.99,
        rating: 4.6,
        image: "https://public.readdy.ai/ai/img_res/2f3a8fa38cde23e23605d940d55b2398.jpg"
      },
      {
        id: 3,
        name: "Camera Bag Deluxe",
        price: 129.99,
        rating: 4.7,
        image: "https://public.readdy.ai/ai/img_res/652955e2452fd38d4e02b431fa23a1b8.jpg"
      },
      {
        id: 4,
        name: "Professional Flash Kit",
        price: 299.99,
        rating: 4.8,
        image: "https://public.readdy.ai/ai/img_res/8efc8db2f471a38c67cfa1639d739e32.jpg"
      }
    ];

    setRelatedProducts(related);
  }, []);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm">
            <a href="#" className="text-gray-500 hover:text-indigo-600 cursor-pointer">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-indigo-600 cursor-pointer">Cameras</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden cursor-pointer !rounded-button whitespace-nowrap ${
                    mainImage === image ? 'ring-2 ring-indigo-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-1 text-lg text-gray-500">By {product.brand}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`${
                      index < Math.floor(product.rating)
                        ? 'fas'
                        : index < product.rating
                        ? 'fas fa-star-half-alt'
                        : 'far'
                    } fa-star text-amber-400`}
                  ></i>
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="border-t border-b py-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${product.salePrice}</span>
                <span className="text-lg text-gray-500 line-through">${product.price}</span>
                <span className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded">
                  Save {Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">Free shipping on orders over $50</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Variant
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.name)}
                      className={`px-4 py-3 border rounded-lg text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap ${
                        selectedVariant === variant.name
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {variant.name} - ${variant.price}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 border rounded-lg cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-minus text-gray-600"></i>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    className="w-16 text-center border-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 border rounded-lg cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="far fa-heart text-xl"></i>
                </button>
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <i className="fas fa-truck text-gray-400 mr-2"></i>
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <i className="fas fa-undo text-gray-400 mr-2"></i>
                  30-Day Returns
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-gray-400 mr-2"></i>
                  2-Year Warranty
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-1 py-4 text-sm font-medium border-b-2 cursor-pointer !rounded-button whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b">
                    <span className="font-medium text-gray-900">{spec.name}</span>
                    <span className="text-gray-500">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
                    <p className="text-sm text-gray-500">{product.reviews} reviews</p>
                  </div>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer !rounded-button whitespace-nowrap">
                    Write a review
                  </button>
                </div>
                {/* Add review components here */}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">${item.price}</p>
                    <div className="flex items-center">
                      <i className="fas fa-star text-amber-400 text-sm"></i>
                      <span className="ml-1 text-sm text-gray-500">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

