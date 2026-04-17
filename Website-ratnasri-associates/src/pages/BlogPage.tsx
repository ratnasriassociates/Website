import { motion } from 'motion/react';
import { BLOG_POSTS } from '@/src/constants';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-white mb-6">Insights & Updates</h1>
          <p className="text-gray-400 text-lg">
            Stay informed with the latest trends in Hyderabad real estate and insurance tips.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> Admin</span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-navy font-bold flex items-center gap-2 hover:text-gold transition-colors">
                  Read Full Article <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gold/10 section-padding rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest property listings and insurance tips directly in your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button type="submit" className="btn-gold">Subscribe Now</button>
          </form>
        </div>
      </section>
    </div>
  );
}
