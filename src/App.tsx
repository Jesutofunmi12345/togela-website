import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Settings,
  Zap,
  Shield,
  Users,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Wrench,
  Lightbulb,
  Target,
} from "lucide-react";
import logo from "./img/togela.png";
import logo_white from "./img/togela_white.jpeg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "strengths",
        "why-choose",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* <Settings className="h-8 w-8 text-blue-900 mr-2" /> */}
              <img src={logo} alt="Company Logo" className="h-14 w-18 mr-2" />
              <span className="text-2xl font-bold text-blue-900">
                Togela LLC
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "services", label: "Services" },
                  { id: "strengths", label: "Strengths" },
                  { id: "why-choose", label: "Why Choose Us" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-900 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "strengths", label: "Strengths" },
                { id: "why-choose", label: "Why Choose Us" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:bg-blue-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Engineering
                <span className="text-yellow-400"> Excellence</span>
                <br />
                Built to Last
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transforming complex challenges into innovative solutions with
                precision, expertise, and unwavering commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-yellow-400/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">40+</h3>
                      <p className="text-blue-100">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">50+</h3>
                      <p className="text-blue-100">Projects Completed</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">100%</h3>
                      <p className="text-blue-100">Quality Assured</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">24/7</h3>
                      <p className="text-blue-100">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              About Togela LLC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Founded on the principles of innovation, integrity, and excellence, we are a leading engineering firm dedicated to delivering cutting-edge solutions that shape the future. */}
              Togela LLC is a trusted partner in the Oil Services sector. We
              provide world-class Engineering, Procurement, and Construction
              (EPC) solutions across the United States. While we are a dynamic
              and innovative company, our team brings a wealth of expertise,
              boasting over 40 years of combined industry experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Our Story & Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {/* With over 15 years of experience in the engineering industry,
                TechnoCore Engineering has established itself as a trusted
                partner for complex engineering challenges. Our team of highly
                skilled professionals combines technical expertise with
                innovative thinking to deliver solutions that exceed
                expectations. */}
                Our professionals have successfully executed projects of varying
                complexities, delivering exceptional results in upstream,
                midstream, and downstream operations. This deep knowledge base
                ensures we can tackle the most challenging projects with
                precision, efficiency, and a commitment to excellence.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {/* We believe in sustainable engineering practices that not only
                meet today's needs but also consider the impact on future
                generations. Our commitment to quality, safety, and
                environmental responsibility drives everything we do. */}
                At Togela LLC, we are dedicated to offering cutting-edge
                solutions that drive efficiency, sustainability, and
                profitability for our clients. Our mission is to forge strong
                partnerships, deliver superior value, and exceed expectations on
                every project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To be the global leader in innovative engineering solutions
                    that transform industries and improve lives.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Our Values
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Integrity, excellence, innovation, sustainability, and
                    client satisfaction guide our every decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Award Winning
                </h4>
                <p className="text-gray-600 text-sm">
                  Recognized for excellence in engineering and innovation
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Team
                </h4>
                <p className="text-gray-600 text-sm">
                  Highly qualified engineers and technical specialists
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Quality First
                </h4>
                <p className="text-gray-600 text-sm">
                  Rigorous quality control and safety standards
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Lightbulb className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600 text-sm">
                  Cutting-edge solutions and latest technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to meet your specific
              needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Specialized Equipment Procurement",
                description:
                  "Drilling and production equipment, Subsea systems and Process Equipment.",
              },
              {
                icon: Zap,
                // title: "Material Sourcing",
                title: (
                  <>
                    Material
                    <br />
                    Sourcing
                  </>
                ),
                description:
                  "Pipeline materials, Specialty materials, and Chemicals and catalysts.",
              },
              {
                icon: Wrench,
                title: "Spare Parts and Maintenance Supplies",
                description:
                  "OEM-certified spare parts, Customs clearance and Expedited delivery services.",
              },
              {
                icon: Target,
                title: "Digital and Technology Procurement",
                description:
                  "IoT solutions, SCADA systems, and Project management software.",
              },
              {
                icon: Shield,
                title: "Safety and Environmental Equipment:",
                description:
                  "Comprehensive safety systems, PPE, environmental remediation equipment, and compliance for hazardous environments.",
              },
              {
                icon: Lightbulb,
                title: "Strategic Sourcing and Vendor Management",
                description:
                  "Global supplier identification and qualification, Contract negotiation and management.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="bg-blue-900 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-white group-hover:text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section id="strengths" className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Key Strengths
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {/* What sets us apart in the competitive engineering landscape and
              makes us the preferred choice for complex projects. */}
              At Togela LLC, our success lies in the strength of our
              meticulously designed and executed EPC sourcing methodology, which
              ensures optimal outcomes for every project. With over 40 years of
              combined industry expertise, we have mastered delivering
              high-value, on-time, and cost-effective solutions tailored to our
              clients’ needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                // title: "<br> Proven Expertise",
                title: (
                  <>
                    Proven
                    <br />
                    Expertise
                  </>
                ),
                description:
                  "40+ years of industry experience with a track record of successful project delivery across diverse sectors.",
              },
              {
                icon: Users,
                title: "Supplier Identification and Qualification",
                description:
                  "Rigorous supplier selection based on technical capability, financial stability and proven performance.",
              },
              {
                icon: Zap,
                // title: "Tendering and <br> Bid Evaluation",
                title: (
                  <>
                    Tendering
                    <br />
                    Bid Evaluation
                  </>
                ),
                description:
                  // "Preparation of clear and comprehensive tender documents to attract the best suppliers. Thorough bid evaluations, considering technical, commercial, and qualitative factors.",
                  "Thorough bid evaluations, considering technical, commercial, and qualitative factors.",
              },
              {
                icon: Shield,
                title: "Procurement Strategy Development",
                description:
                  "Customized procurement strategies designed to meet the specific requirements of each project.",
              },
            ].map((strength, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <strength.icon className="h-10 w-10 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {strength.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Togela LLC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team’s 40+ years of combined experience is your assurance of
              expertise and professionalism.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Client-Centric Approach",
                    description:
                      "We work closely with our clients to understand their unique needs and deliver customized solutions. ",
                  },
                  {
                    title: "Timely Delivery",
                    description:
                      "We understand the importance of deadlines and consistently deliver projects on time without compromising quality.",
                  },
                  {
                    title: "Cost-Effective Approach",
                    description:
                      "Optimized engineering solutions that maximize value while minimizing costs and resource utilization.",
                  },
                  {
                    title: "Commitment to Quality",
                    description:
                      " Our work meets the highest standards, ensuring longterm value and operational excellence.",
                  },
                  {
                    title: "Innovation Focus",
                    description:
                      "We stay ahead of industry trends and continuously invest in new technologies and methodologies.",
                  },
                  // {
                  //   title: "Transparent Communication",
                  //   description:
                  //     "Regular updates, clear reporting, and open communication throughout the entire project lifecycle.",
                  // },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of satisfied clients who have trusted us with
                their engineering challenges. Let's discuss how we can help
                bring your vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-700">
                    Free initial consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-700">
                    Detailed project assessment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-blue-800 transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our procurement specialists are ready to discuss your specific
              needs and demonstrate how Togela's expertise can optimize your
              next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Phone
                    </h4>
                    <p className="text-gray-600">+1(281) 408-0362 </p>
                    {/* <p className="text-gray-600">+1 (555) 987-6543</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Email
                    </h4>
                    <p className="text-gray-600">info@togela.us</p>
                    {/* <p className="text-gray-600">projects@technocoreeng.com</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      1721 Anniston Road,
                      <br />
                      Suite 1422 Jacksonville,
                      <br />
                      FL 32246
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900">
                    <option>Select a service</option>
                    <option>Mechanical Engineering</option>
                    <option>Electrical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Project Management</option>
                    <option>Safety Consulting</option>
                    <option>Design & Innovation</option>
                  </select>
                </div> */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <Settings className="h-8 w-8 text-yellow-400 mr-2" /> */}
                <img
                  src={logo_white}
                  alt="Company Logo"
                  className="h-14 w-18 mr-2"
                />
                <span className="text-2xl font-bold">Togela LLC</span>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Your trusted partner for innovative engineering solutions that
                transform ideas into reality.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Specialized Equipment Procurement</li>
                <li>Material Sourcing</li>
                <li>Logistics and Expediting</li>
                <li>Digital and Technology Procurement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <button onClick={() => scrollToSection("about")}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
                {/* <li>Careers</li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p>1721 Anniston Road</p>
                <p>Suite 1422 Jacksonville, FL 32246</p>
                <p> +1(281) 408-0362 </p>
                <p>info@togela.us</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>
              &copy; 2025 Togela LLC. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
