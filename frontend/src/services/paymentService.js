import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const paymentService = {
  // Create a payment intent
  createPaymentIntent: async (amount, currency = 'usd') => {
    try {
      const response = await axios.post(`${API_URL}/payments/create-intent`, {
        amount,
        currency,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Process the payment
  processPayment: async (paymentIntentId, paymentMethodId) => {
    try {
      const response = await axios.post(`${API_URL}/payments/process`, {
        paymentIntentId,
        paymentMethodId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get payment history
  getPaymentHistory: async () => {
    try {
      const response = await axios.get(`${API_URL}/payments/history`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Save payment method
  savePaymentMethod: async (paymentMethodId) => {
    try {
      const response = await axios.post(`${API_URL}/payments/save-method`, {
        paymentMethodId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get saved payment methods
  getSavedPaymentMethods: async () => {
    try {
      const response = await axios.get(`${API_URL}/payments/methods`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
