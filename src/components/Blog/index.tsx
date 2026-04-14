import { motion } from 'framer-motion';
import { posts } from '../../data';
import './Blog.css';

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog-inner">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Writing
        </motion.div>
        <motion.h2 className="blog-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'circOut' as const }}>
          Dev Blog
        </motion.h2>

        <div className="blog-list">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="blog-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: 'circOut' as const }}
              whileHover="hover"
            >
              <div className="blog-row-left">
                <span className="blog-date">{p.date}</span>
                <span className="blog-tag">{p.tag}</span>
              </div>
              <div className="blog-row-center">
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>
              </div>
              <motion.div
                className="blog-arrow"
                variants={{ hover: { x: 6, color: '#9b7b4a' } }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.div>
              <motion.div
                className="blog-underline"
                variants={{ hover: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: 'circOut' as const }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
