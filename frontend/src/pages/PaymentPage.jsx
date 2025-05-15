import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/payment/CheckoutForm';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course, amount } = location.state || {};

  const handlePaymentSuccess = (paymentIntent) => {
    // Handle successful payment
    navigate('/payment-success', {
      state: {
        paymentId: paymentIntent.id,
        course: course,
      },
    });
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
  };

  if (!course || !amount) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Invalid Payment Request</h2>
          <p className="text-gray-600">Please select a course before proceeding to payment.</p>
          <button
            onClick={() => navigate('/courses')}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Purchase</h1>
          <p className="text-gray-600">You're about to enroll in {course.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-24 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Course Price</span>
                  <span>${(amount / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(amount / 100).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                amount={amount}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
