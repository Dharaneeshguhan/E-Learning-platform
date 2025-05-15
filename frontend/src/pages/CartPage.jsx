import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cartItems, setCartItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const API_URL = 'http://localhost:5000/api';

  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${API_URL}/cart`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          }
        });
        const data = await response.json();
        if (data.success) {
          setCartItems(data.data.items || []);
        } else {
          setError('Failed to load cart');
        }
      } catch (err) {
        setError('Failed to load cart');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleRemoveFromCart = async (courseId) => {
    try {
      const response = await fetch(`${API_URL}/cart/remove/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }
      });
      const data = await response.json();
      if (data.success) {
        setCartItems(prev => prev.filter(item => item.id !== courseId));
        // Update cart count in header
        const cartUpdateEvent = new CustomEvent('cartUpdate');
        window.dispatchEvent(cartUpdateEvent);
      } else {
        setError('Failed to remove item from cart');
      }
    } catch (err) {
      setError('Failed to remove item from cart');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout', {
        state: {
          items: cartItems,
          total: cartItems.reduce((sum, item) => sum + item.price, 0)
        }
      });
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-8">
            <FaShoppingCart className="text-2xl text-gray-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button
                onClick={() => navigate('/app/courses')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Browse Courses
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cartItems.map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-gray-500">{course.instructor}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                      <button
                        onClick={() => handleRemoveFromCart(course.id)}
                        className="p-2 text-red-500 hover:text-red-600 transition-colors"
                        title="Remove from cart"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-600">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
