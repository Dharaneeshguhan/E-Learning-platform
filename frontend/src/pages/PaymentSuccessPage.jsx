import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId, course } = location.state || {};

  useEffect(() => {
    if (!paymentId || !course) {
      navigate('/courses');
    }
  }, [paymentId, course, navigate]);

  if (!paymentId || !course) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <FaCheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for enrolling in {course.title}
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Payment ID: {paymentId}</p>
              <p>Amount: ${(course.price / 100).toFixed(2)}</p>
              <p>Course: {course.title}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => navigate(`/courses/${course.id}`)}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Learning
            </button>
            
            <button
              onClick={() => navigate('/courses')}
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Browse More Courses
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>A confirmation email has been sent to your registered email address.</p>
          <p className="mt-2">
            If you have any questions, please{' '}
            <a href="/contact" className="text-indigo-600 hover:text-indigo-500">
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
