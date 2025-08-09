import { motion } from 'framer-motion'
import { useState } from 'react'

const Calculator = () => {
  const [amount, setAmount] = useState(10000)
  const [term, setTerm] = useState(12)
  const interestRate = 5.5 // Annual interest rate in percentage

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12
    const payment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1)
    return payment.toFixed(2)
  }

  const totalPayment = (parseFloat(calculateMonthlyPayment()) * term).toFixed(2)
  const totalInterest = (parseFloat(totalPayment) - amount).toFixed(2)

  return (
    <section id="calculator" className="py-20 bg-blue-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10" data-aos="fade-right">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Loan Calculator
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Use our loan calculator to estimate your monthly payments and total
              interest based on your loan amount and term.
            </motion.p>
            <motion.div
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-white font-medium mb-2"
                >
                  Loan Amount ($)
                </label>
                <input
                  type="range"
                  id="amount"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300">$1,000</span>
                  <span className="text-white font-medium">
                    ${amount.toLocaleString()}
                  </span>
                  <span className="text-gray-300">$100,000</span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="term"
                  className="block text-white font-medium mb-2"
                >
                  Loan Term (months)
                </label>
                <input
                  type="range"
                  id="term"
                  min="6"
                  max="60"
                  step="6"
                  value={term}
                  onChange={(e) => setTerm(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300">6 months</span>
                  <span className="text-white font-medium">{term} months</span>
                  <span className="text-gray-300">60 months</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-1">Interest Rate</p>
                <p className="text-2xl font-bold text-white mb-4">
                  {interestRate}%
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Loan Estimate
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-medium">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Loan Term</span>
                  <span className="font-medium">{term} months</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-medium">{interestRate}%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Payment</span>
                  <span className="font-medium text-primary-600">
                    ${calculateMonthlyPayment()}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-medium">${totalInterest}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 font-semibold">
                    Total Payment
                  </span>
                  <span className="font-bold text-primary-700">
                    ${totalPayment}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Apply for This Loan
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator