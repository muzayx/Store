import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Menu, X, Send, ArrowRight, Star } from 'lucide-react'

const products = [
  { id: 1, name: 'Vaso Geométrico', price: 'R$ 129,99', image: 'https://images.tcdn.com.br/img/img_prod/704596/kit_vaso_cachepot_de_cimento_geometrico_para_plantas_e_jardim_vasinho_de_suculentas_2241_3_c59735cd0f4fe7c5f3018493b2298b33.jpeg', rating: 4.5 },
  { id: 2, name: 'Luminária de Mesa', price: 'R$ 199,99', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', rating: 4.8 },
  { id: 3, name: 'Almofada Decorativa', price: 'R$ 79,99', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', rating: 4.2 },
  { id: 4, name: 'Quadro Abstrato', price: 'R$ 159,99', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', rating: 4.7 },
  { id: 5, name: 'Relógio de Parede', price: 'R$ 89,99', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', rating: 4.4 },
  { id: 6, name: 'Porta-velas', price: 'R$ 69,99', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', rating: 4.3 },
  { id: 7, name: 'Verdinha', price: 'R$ 9,99', image: 'https://s2-oglobo.glbimg.com/vfJOS0q0zZW-eUb8vR5tBz7kKwk=/0x0:4724x3143/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/b/5/bnzZYkQSOz4E69oA2KKg/98714982-a-man-prepares-a-marijuana-cigarette-during-a-4-20-rally-to-commemorate-the-world-cannabis.jpg', rating: 5.0 },
]

export default function LojaMuza() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <motion.header 
        className="fixed top-0 left-0 right-0 bg-white z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Loja do Muza
          </motion.h1>
          <nav className="hidden md:flex space-x-6">
            <motion.a href="#products" className="hover:text-gray-600 transition-colors" whileHover={{ scale: 1.1 }}>Produtos</motion.a>
            <motion.a href="#about" className="hover:text-gray-600 transition-colors" whileHover={{ scale: 1.1 }}>Sobre</motion.a>
            <motion.a href="#contact" className="hover:text-gray-600 transition-colors" whileHover={{ scale: 1.1 }}>Contato</motion.a>
          </nav>
          <motion.button 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <X />
              </motion.button>
            </div>
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <motion.a href="#products" onClick={() => setIsMenuOpen(false)} whileHover={{ scale: 1.1 }}>Produtos</motion.a>
              <motion.a href="#about" onClick={() => setIsMenuOpen(false)} whileHover={{ scale: 1.1 }}>Sobre</motion.a>
              <motion.a href="#contact" onClick={() => setIsMenuOpen(false)} whileHover={{ scale: 1.1 }}>Contato</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section id="hero" className="h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Objetos Únicos e Especiais
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Descubra peças que contam histórias
            </motion.p>
            <motion.a
              href="#products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Coleção
            </motion.a>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nossa Coleção
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5}}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                      <span>{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Nossa loja" className="rounded-lg shadow-md" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 md:pl-12"
              >
                <h2 className="text-3xl font-bold mb-6">Sobre a Loja do Muza</h2>
                <p className="text-gray-600 mb-6">
                  Na Loja do Muza, acreditamos que cada objeto tem uma história para contar. Nossa curadoria cuidadosa garante que cada peça em nossa coleção seja única e especial.
                </p>
                <p className="text-gray-600 mb-6">
                  Buscamos objetos que não apenas decoram espaços, mas que também inspiram e trazem significado para o dia a dia de nossos clientes.
                </p>
                <motion.a 
                  href="#contact" 
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Entre em Contato
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Entre em Contato
            </motion.h2>
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://instagram.com/seu@"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                <Instagram className="w-6 h-6 mr-2" />
                Instagram
              </motion.a>
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                <Send className="w-6 h-6 mr-2" />
                WhatsApp
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <motion.footer 
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Loja do Muza. Todos os direitos reservados.</p>
        </div>
      </motion.footer>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-2 right-1 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedProduct(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X />
              </motion.button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mt-4 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
              <p className="text-gray-600 mb-2">{selectedProduct.price}</p>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{selectedProduct.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-700 mb-4">
                Este produto exclusivo está disponível para venda. Entre em contato conosco para mais informações ou para realizar a compra.
              </p>
              <div className="flex justify-end">
                <motion.a
                  href={`https://wa.me/5511999999999?text=Olá! Estou interessado no produto: ${selectedProduct.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-4 py-2 rounded-full inline-flex items-center"
                >
                  Comprar <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
      </motion.div>
    </div>
  )
}