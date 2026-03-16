import { useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue
} from 'framer-motion';

const heroImage = '/images/hr1.jpeg';

const aboutImage = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80';

const categoryItems = [
  {
    title: 'Tools',
    description: 'Professional tools and accessories for daily maintenance and projects.',
    image: '/images/tools/499401631_1763356374584155_3847075069565262876_n.jpeg',
    images: [
      '/images/tools/499401631_1763356374584155_3847075069565262876_n.jpeg',
      '/images/tools/499403708_703083612434147_2142358998254414216_n.jpeg',
      '/images/tools/499432906_1791095561785579_5663820527502045209_n.jpeg',
      '/images/tools/499551230_1234584854843484_7686183340197794023_n.jpeg',
      '/images/tools/499684422_1059086312948598_2312647215050135919_n.jpeg',
      '/images/tools/499782483_1135258505073436_8093648345032205111_n.jpeg',
      '/images/tools/499819762_990347706623412_1489548484256705366_n.jpeg',
      '/images/tools/499833958_1374661803813533_5214005444073099089_n.jpeg',
      '/images/tools/500086590_995992512692542_4227065224106022333_n.jpeg',
      '/images/tools/500088015_999513322329319_117886025895525004_n.jpeg',
      '/images/tools/500136956_1970546840019801_3554762394153031157_n.jpeg',
      '/images/tools/500384527_612961898574640_4378869776626481931_n.jpeg',
      '/images/tools/500420051_1233757758142973_9163059660907510717_n.jpeg',
      '/images/tools/500447267_662909123288012_6790053389918578308_n.jpeg',
      '/images/tools/500516639_474769555692982_2659709123466570725_n.jpeg',
      '/images/tools/500661882_1038892841030515_3760605968078922118_n.jpeg',
      '/images/tools/500685402_3618079011826716_2376207006635696805_n.jpeg',
      '/images/tools/641153298_17889238431443586_466325432676128984_n.jpeg',
      '/images/tools/651918651_17903317311224024_1430818169889598462_n.jpeg',
      '/images/tools/driller%202.jpeg',
      '/images/tools/driller1.jpeg'
    ]
  },
  {
    title: 'Household',
    description: 'Comfort‑first essentials for a refined and organized home.',
    image: '/images/house%20hold/467183592_3753665604888036_1966763074739398175_n.jpeg',
    images: [
      '/images/house%20hold/467183592_3753665604888036_1966763074739398175_n.jpeg',
      '/images/house%20hold/467330776_1138622451196460_1400170416314003287_n.jpeg',
      '/images/house%20hold/467647843_591004526845143_2550199085983048346_n.jpeg',
      '/images/house%20hold/467653444_1406006377029516_8597296849925425467_n.jpeg',
      '/images/house%20hold/467655147_1320221666008335_6272947054537968115_n.jpeg',
      '/images/house%20hold/467738826_8762532500470956_4705022288837948271_n.jpeg',
      '/images/house%20hold/473613210_17891652567119666_4084904189313415070_n.jpeg',
      '/images/house%20hold/473659319_17891652558119666_7880740197255891144_n.jpeg',
      '/images/house%20hold/499483714_722675083559562_9074196259753732559_n.jpeg',
      '/images/house%20hold/499823339_1689631161917966_7637006955750684310_n.jpeg',
      '/images/house%20hold/500319298_1354177509143911_6900204104194381981_n.jpeg',
      '/images/house%20hold/500456243_1744055786523558_6021417054590768463_n.jpeg',
      '/images/house%20hold/500517590_1211855253973627_4825936230919761580_n.jpeg',
      '/images/house%20hold/500662435_719693727193342_5775259813957270745_n.jpeg',
      '/images/house%20hold/500695286_1360715598562245_8134929664606796269_n.jpeg',
      '/images/house%20hold/500975107_714865791099597_7055710604688127844_n.jpeg',
      '/images/house%20hold/503025082_1759823824744333_1479717208542925419_n.jpeg',
      '/images/house%20hold/503028205_1357863918777789_6376299619520457018_n.jpeg',
      '/images/house%20hold/504532345_752299814118174_7842415789355763907_n.jpeg',
      '/images/house%20hold/505497515_721510953752002_2240878611913184275_n.jpeg',
      '/images/house%20hold/505710389_1079015427483164_4393363153490411373_n.jpeg',
      '/images/house%20hold/509664082_1439836544032136_5105896396397579335_n.jpeg',
      '/images/house%20hold/509676587_1029499845838497_2353973485846949906_n.jpeg',
      '/images/house%20hold/510467134_735464702231828_7119343813934250934_n.jpeg',
      '/images/house%20hold/510484909_689282143937396_3315664248183731223_n.jpeg',
      '/images/house%20hold/622493208_18071625899130602_2262832790669184569_n.jpeg',
      '/images/house%20hold/645784348_17901582240391861_8667010239531167660_n.jpeg',
      '/images/house%20hold/chair1.jpeg'
    ]
  },
  {
    title: 'Lights',
    description: 'Modern lighting pieces to elevate ambience and everyday spaces.',
    image: '/images/lights/499254135_682392987757142_1974398613834251828_n.jpeg',
    images: [
      '/images/lights/499254135_682392987757142_1974398613834251828_n.jpeg',
      '/images/lights/499260922_563832483444706_5851539992695696251_n.jpeg',
      '/images/lights/500437643_2305137823213893_5017753978868553656_n.jpeg',
      '/images/lights/623260312_18042856904718118_8097479026149882576_n%20(1).jpeg',
      '/images/lights/623260312_18042856904718118_8097479026149882576_n.jpeg'
    ]
  },
  {
    title: 'Sofa',
    description: 'Premium seating and lounge pieces with a luxury finish.',
    image: '/images/sofas/504007757_1666766980638240_5783629589635747827_n.jpeg',
    images: [
      '/images/sofas/504007757_1666766980638240_5783629589635747827_n.jpeg',
      '/images/sofas/510311115_1383314322781871_2635228996767279676_n.jpeg',
      '/images/sofas/587851536_17931447570119666_5957119218321439211_n.jpeg'
    ]
  }
];

const galleryImages = [
  {
    label: 'Store Interior 01',
    url: '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24.jpeg'
  },
  {
    label: 'Store Interior 02',
    url: '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24%20(1).jpeg'
  },
  {
    label: 'Store Interior 03',
    url: '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24%20(2).jpeg'
  },
  {
    label: 'Store Interior 04',
    url: '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.25.jpeg'
  },
  {
    label: 'Store Interior 05',
    url: '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.25%20(1).jpeg'
  }
];

const instagramFeedImages = [
  '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24.jpeg',
  '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24%20(1).jpeg',
  '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.24%20(2).jpeg',
  '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.25.jpeg',
  '/images/inside/WhatsApp%20Image%202026-03-15%20at%2012.41.25%20(1).jpeg'
];

const stats = [
  { label: 'Curated Brands', value: 120 },
  { label: 'Product Categories', value: 18 },
  { label: 'Daily Visitors', value: 850 },
  { label: 'Years in Khasab', value: 12 }
];

const sectionMotion = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-10 w-10 rounded-full border border-gold-300 border-t-gold-700 animate-spin" />
        <p className="text-xs uppercase tracking-[0.4em] text-gold-700">Preparing the experience</p>
      </motion.div>
    </motion.div>
  );
}

function AnimatedCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const duration = 1400;

          const animate = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-3xl bg-white/80 p-6 shadow-soft">
      <div className="text-3xl font-display text-ink">{count}+</div>
      <div className="text-sm text-slate-500 mt-2">{label}</div>
    </div>
  );
}

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Shop', href: '#gallery' },
    { label: 'Categories', href: '#categories' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300 bg-white/60 shadow-glow">
            <img
              src="/images/logo/427099377_3242274819409301_3127611882871632025_n.jpg"
              alt="Tameer Al Madina logo"
              className="h-7 w-7 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-sm text-ink">Tameer Al Madeena</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500">Shopping Center</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition ${
                activeSection === link.href
                  ? 'text-ink'
                  : 'text-slate-600 hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <MobileMenu links={links} activeSection={activeSection} />
      </div>
    </motion.nav>
  );
}

function MobileMenu({ links, activeSection }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-gold-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-700"
      >
        Menu
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-6 top-20 w-64 rounded-3xl bg-white/95 p-6 shadow-lift backdrop-blur"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-4 text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${
                    activeSection === link.href ? 'text-ink' : 'text-slate-600'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.12]);
  const textY = useTransform(scrollY, [0, 360], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 320], [1, 0.2]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, y, scale }}
      />
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-ivory" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-32">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div
            className="glass inline-flex items-center gap-3 rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Premium Shopping Destination
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            Khasab, Oman
          </motion.div>

          <motion.h1
            className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Tameer Al Madeena
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg text-slate-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            Your Trusted Shopping Destination in Khasab
          </motion.p>
          <motion.p
            className="mt-3 max-w-2xl text-sm text-slate-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Tameer Al Madina: Where quality meets everyday needs – gifts, electronics, and household essentials.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <button className="group relative overflow-hidden rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-soft">
              <span className="relative z-10">Explore Store</span>
              <span className="absolute inset-0 translate-x-[-120%] bg-gold-500/80 transition duration-500 group-hover:translate-x-0" />
            </button>
            <div className="glass flex items-center gap-4 rounded-full px-6 py-3 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open daily 9:00 AM – 11:00 PM
            </div>
          </motion.div>
        </motion.div>
      </div>

      <FloatingOrbs />
    </section>
  );
}

function FloatingOrbs() {
  const orbs = useMemo(
    () => [
      { size: 180, top: '18%', left: '8%' },
      { size: 120, top: '55%', left: '80%' },
      { size: 90, top: '72%', left: '15%' }
    ],
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gold-100/60 blur-2xl"
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left }}
          animate={{ y: [0, -15, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-subtitle">About</p>
          <h2 className="section-title mt-4">
            Our Story, Community, and Features.
          </h2>
          <div className="mt-6 space-y-6 text-slate-600">
            <div className="rounded-[1.6rem] border border-gold-100 bg-ivory/60 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Our Story</p>
              <p className="mt-3 text-sm">
                Tameer Al Madina Shopping Center was born from a simple mission: to provide the Khasab
                community with a single destination for quality construction needs. Starting as a hub for
                Building Materials.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-gold-100 bg-ivory/60 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Our Community</p>
              <p className="mt-3 text-sm">
                At tameeroman.com, we believe that building a strong and supportive community is key to our
                success. That's why we've created a platform that puts people first, and fosters a sense of
                belonging and connection among our users.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-gold-100 bg-ivory/60 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Our Features</p>
              <p className="mt-3 text-sm">
                We've built a platform that's packed with features designed to make your experience on
                tameeroman.com as enjoyable and engaging as possible. From personalized recommendations to
                real-time chat, we've got you covered.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute -right-6 top-6 hidden h-full w-full rounded-[2rem] border border-gold-200 md:block" />
          <img
            src={aboutImage}
            alt="Store interior"
            className="relative w-full rounded-[2rem] object-cover shadow-lift"
          />
        </motion.div>
      </div>
    </section>
  );
}

function TiltCard({ item }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareXPercent = useTransform(glareX, (value) => `${value}%`);
  const glareYPercent = useTransform(glareY, (value) => `${value}%`);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    rotateX.set(-yPercent * 8);
    rotateY.set(xPercent * 10);
    glareX.set((x / rect.width) * 100);
    glareY.set((y / rect.height) * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[1.8rem] bg-white shadow-soft transition-shadow duration-500 group-hover:shadow-lift"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="absolute inset-0 rounded-[1.8rem] border border-transparent transition duration-500 group-hover:border-gold-300/70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x) var(--y), rgba(203,168,92,0.25), transparent 55%)',
          '--x': glareXPercent,
          '--y': glareYPercent
        }}
      />
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-ink">{item.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{item.description}</p>
      </div>
    </motion.div>
  );
}

function Categories({ onModalChange }) {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (activeCategory) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      onModalChange?.(true);
      return () => {
        document.body.style.overflow = original;
        onModalChange?.(false);
      };
    }
    return undefined;
  }, [activeCategory, onModalChange]);

  return (
    <section id="categories" className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p className="section-subtitle">Product categories</p>
            <h2 className="section-title mt-4">Curated collections for every lifestyle.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-slate-500 md:block">
            Each category is styled with premium presentation, thoughtful spacing, and a tactile in-store feel.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveCategory(item)}
              className="text-left"
            >
              <TiltCard item={item} />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCategory(null)}
            data-lenis-prevent
          >
            <motion.div
              className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-lift"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              data-lenis-prevent
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Category</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{activeCategory.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  className="rounded-full border border-gold-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-700"
                >
                  Close
                </button>
              </div>

              <div
                className="mt-6 grid max-h-[70vh] grid-cols-1 gap-4 overflow-y-auto overscroll-contain pr-2 sm:grid-cols-2 lg:grid-cols-3"
                data-lenis-prevent
              >
                {activeCategory.images.map((image, index) => (
                  <div key={image} className="rounded-[1rem] bg-ivory/60 p-3">
                    <img
                      src={image}
                      alt={`${activeCategory.title} ${index + 1}`}
                      className="h-40 w-full rounded-xl object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="mt-3 text-xs uppercase tracking-[0.2em] text-gold-500">
                      {activeCategory.title} {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-subtitle">Shop</p>
          <h2 className="section-title mt-4">A glimpse into the Tameer Al Madeena experience.</h2>
        </motion.div>

        <motion.div
          className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {galleryImages.map((image) => (
            <motion.button
              key={image.label}
              className="group relative mb-6 w-full break-inside-avoid overflow-hidden rounded-[1.6rem]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              variants={sectionMotion}
              onClick={() => setLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
                {image.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={lightbox.url} alt={lightbox.label} className="rounded-3xl" />
              <button
                className="absolute right-4 top-4 rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.2em]"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Instagram() {
  return (
    <section id="instagram" className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-subtitle">Instagram</p>
            <h2 className="section-title mt-4">Follow the latest arrivals & moments.</h2>
            <p className="mt-3 text-sm text-slate-500">
              Official page: tameer.almadeena — curated highlights, launches, and seasonal showcases.
            </p>
          </div>
          <a
            href="https://www.instagram.com/tameer.almadeena/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold-300 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold-700"
          >
            Visit @tameer.almadeena
          </a>
        </motion.div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Instagram Feed</p>
              <h3 className="mt-2 font-display text-2xl text-ink">tameer.almadeena</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scroll the latest visuals from our official Instagram page.
              </p>
            </div>
            <a
              href="https://www.instagram.com/tameer.almadeena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold-300 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold-700"
            >
              Visit Instagram
            </a>
          </div>

          <div className="mt-8 marquee">
            <div className="marquee-track">
              {[...instagramFeedImages, ...instagramFeedImages].map((image, index) => (
                <a
                  key={`${image}-${index}`}
                  href="https://www.instagram.com/tameer.almadeena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="ig-card"
                >
                  <img src={image} alt={`Instagram post ${index + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-gold-400" />
          https://www.instagram.com/tameer.almadeena/
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="overflow-hidden rounded-[2rem] shadow-lift"
        >
          <iframe
            title="Khasab Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.13109220345!2d56.2443979!3d26.1794699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6b21e4c1c2ac1%3A0x4d0fb41f7d0d8c0a!2sKhasab%2C%20Oman!5e0!3m2!1sen!2som!4v1719739342381!5m2!1sen!2som"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </motion.div>

        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="glass flex h-full flex-col justify-between gap-6 rounded-[2rem] p-8 shadow-soft"
        >
          <div>
            <p className="section-subtitle">Location</p>
            <h2 className="section-title mt-4">Visit us in Khasab, Oman.</h2>
            <p className="mt-4 text-sm text-slate-600">
              Tameer Al Madeena Shopping Center is centrally located in Khasab, making it easy to reach for
              residents and visitors alike.
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Address</p>
              <p className="mt-1">Main Commercial Street, Khasab, Oman</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Phone</p>
              <p className="mt-1">+968 9234 5678</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Business Hours</p>
              <p className="mt-1">Every day · 9:00 AM – 11:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong.');
      setStatus({ type: 'success', message: result.message });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  return (
    <section id="contact" className="bg-ivory py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr,1.1fr]">
        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title mt-4">Let’s create your perfect shopping visit.</h2>
          <p className="mt-4 text-sm text-slate-600">
            Reach out for product availability, gift recommendations, or bulk shopping inquiries.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/96892345678"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center justify-between rounded-full px-6 py-4 text-sm text-ink shadow-soft"
            >
              WhatsApp Concierge
              <span className="text-xs uppercase tracking-[0.2em] text-gold-500">Chat Now</span>
            </a>
            <a
              href="https://www.instagram.com/tameer.almadeena/"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center justify-between rounded-full px-6 py-4 text-sm text-ink shadow-soft"
            >
              Instagram Updates
              <span className="text-xs uppercase tracking-[0.2em] text-gold-500">Follow</span>
            </a>
            <a
              href="mailto:hello@tameeralmadeena.om"
              className="glass flex items-center justify-between rounded-full px-6 py-4 text-sm text-ink shadow-soft"
            >
              Email Enquiries
              <span className="text-xs uppercase tracking-[0.2em] text-gold-500">Contact</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[2rem] bg-white p-8 shadow-lift"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-gold-500">Name</label>
              <input
                name="name"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-gold-500">Email</label>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-gold-500">Message</label>
              <textarea
                rows="5"
                name="message"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-400"
                placeholder="Tell us what you’re looking for"
              />
            </div>
            <button className="rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.3em] text-white shadow-soft transition hover:bg-gold-700">
              Send Message
            </button>
            {status && (
              <p
                className={
                  status.type === 'success'
                    ? 'text-sm text-emerald-600'
                    : 'text-sm text-rose-600'
                }
              >
                {status.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 Tameer Al Madeena Shopping Center. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-ink">Back to top</a>
          <a href="https://www.instagram.com/tameer.almadeena/" target="_blank" rel="noreferrer" className="hover:text-ink">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gold-500"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('#home');
  const lenisRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false
    });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['#home', '#about', '#gallery', '#categories', '#location', '#contact'];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-ivory text-ink">
      <ScrollProgress />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Categories
          onModalChange={(open) => {
            if (!lenisRef.current) return;
            if (open) {
              lenisRef.current.stop();
            } else {
              lenisRef.current.start();
            }
          }}
        />
        <Instagram />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
