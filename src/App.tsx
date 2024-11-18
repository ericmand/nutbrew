import { MapPin, Clock, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import DrinkCard from './components/DrinkCard';

function App() {
  const drinks = [
    {
      name: 'Spiced Cashew Latte',
      description: 'Creamy cashew milk infused with warming spices',
      price: '$5.50',
      image:
        'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: 'Vanilla Almond Steamer',
      description:
        'Smooth almond milk with Madagascar vanilla and a hint of honey',
      price: '$4.75',
      image:
        'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: 'Hazelnut Hot Chocolate',
      description: 'Rich hazelnut milk blended with premium dark chocolate',
      price: '$5.25',
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=2000"
            alt="Cozy cafe interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nut Brew</h1>
            <p className="text-xl md:text-2xl mb-8">
              Artisanal Nut-Based Hot Beverages
            </p>
            <a
              href="#menu"
              className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition duration-300"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Our Signature Drinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drinks.map((drink) => (
              <DrinkCard key={drink.name} {...drink} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="locations" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Find Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-amber-700 mx-auto" />
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-600">
                Palo Alto Farmers Market
                <br />
                Palo Alto, CA
              </p>
            </div>
            <div className="space-y-4">
              <Clock className="w-8 h-8 text-amber-700 mx-auto" />
              <h3 className="text-xl font-semibold">Hours</h3>
              <p className="text-gray-600">Sat: 8am - 11am</p>
            </div>
            <div className="space-y-4">
              <Phone className="w-8 h-8 text-amber-700 mx-auto" />
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-gray-600">hello@nutbrew.xyz</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Born from a passion for sustainable, plant-based beverages, Nut
                Brew brings you artisanal hot drinks crafted from the finest
                nuts. Each recipe is carefully developed to bring out the unique
                flavors and creamy textures that only nuts can provide.
              </p>
              <p className="text-gray-600">
                We source our nuts from local organic farmers and craft each
                drink to order, ensuring the freshest, most flavorful experience
                possible.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
                alt="Coffee making process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="space-y-2">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2">
                <p>hello@nutbrew.xyz</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest offerings</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full text-amber-900 focus:outline-none"
              />
              <button className="bg-amber-700 px-4 py-2 rounded-r-full hover:bg-amber-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-amber-800">
            <p>&copy; 2024 Nut Brew. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
