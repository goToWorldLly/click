'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const HomeContent = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-gray-50 to-white">
      {/* 主要内容 */}
      <main className="pt-24 pb-16">
        {/* 英雄区域 */}
        <section className="text-center px-4 mb-20">
          <div className="relative inline-block">
            {/* 外层光环 */}
            <motion.span
              className="absolute -inset-8 bg-blue-100/50 blur-xl rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.3, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* 内层光环 */}
            <motion.span
              className="absolute -inset-4 bg-blue-200/50 blur-md rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            />
            <motion.h1 
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: [1, 1.02, 1],
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 0.6,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                backgroundPosition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              提升你的
              <br className="md:hidden" />
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ 
                  color: ["#2563eb", "#7c3aed", "#2563eb"],
                  textShadow: [
                    "0 0 8px rgba(37, 99, 235, 0.5)",
                    "0 0 16px rgba(124, 58, 237, 0.5)",
                    "0 0 8px rgba(37, 99, 235, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative inline-block"
              >
                英语打字
              </motion.span>
              速度
            </motion.h1>
          </div>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            通过实时的中英对照练习，让你在提升打字速度的同时，加强英语学习效果
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/practice"
              className="px-8 py-4 text-lg rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              立即开始
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </section>

        {/* 特性展示 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">实时对照</h3>
              <p className="text-gray-600">
                中英文实时对照显示，帮助你在打字练习的同时加强英语理解
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">即时反馈</h3>
              <p className="text-gray-600">
                打字错误即时提示，帮助你快速定位并改正错误
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">进度追踪</h3>
              <p className="text-gray-600">
                实时显示打字速度、准确率等数据，帮助你了解练习效果
              </p>
            </motion.div>
          </div>
        </section>

        {/* 开始练习区域 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div 
            className="bg-blue-50 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              准备好开始练习了吗？
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              立即开始提升你的英语打字速度，让练习变得更有趣、更有效
            </p>
            <Link 
              href="/practice"
              className="px-8 py-4 text-lg rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              开始练习
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}; 