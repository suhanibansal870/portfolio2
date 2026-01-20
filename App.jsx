import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, ChevronDown, Send, MapPin, Award, User, Code, Globe, Briefcase, Users, Building, Brain, Dna, Leaf, Radio, CheckCircle2, Calendar, Megaphone, GraduationCap, Compass } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'research', 'experience', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-300 selection:bg-rose-500/30 selection:text-rose-200 relative overflow-x-hidden font-sans">
      {/* Scroll Progress Bar */}

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Image - Cinematic Layer */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-110"
          style={{ backgroundImage: "url('bg-pattern.png')" }}
        ></div>
        <div className="absolute inset-0 bg-zinc-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-900/80 to-zinc-900"></div>
      </div>

      {/* Atmospheric Glow (Jewel Tones) - Parallax Orbs */}
      <ParallaxOrbs />

      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-3xl`}>
        <div className={`glass-nav px-6 py-2 rounded-full flex items-center justify-center gap-2 md:gap-4 shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-all ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl scale-95' : 'bg-zinc-900/40 backdrop-blur-md scale-100'}`}>
          <a href="#home" className="flex items-center gap-2 pr-4 border-r border-white/10 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-rose-400 transition-colors shadow-lg">
              <img src="logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-base font-bold text-zinc-200 tracking-wide group-hover:text-white transition-colors bg-clip-text text-transparent bg-gradient-to-tr from-rose-200 to-violet-200"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            {['home', 'about', 'research', 'experience', 'awards', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize tracking-wide cursor-pointer ${activeSection === item
                  ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/5'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`mt-2 md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl space-y-1">
            {['home', 'about', 'research', 'experience', 'awards', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-5 py-3 capitalize rounded-xl transition-all font-medium ${activeSection === section
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-500 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - UPDATED BACKGROUND */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        {/* Beautiful Fluid Background - Only for Hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transform scale-105"
            style={{ backgroundImage: "url('hero-bg.png')" }}
          ></div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-900/40 to-zinc-900"></div>
          <div className="absolute inset-0 bg-zinc-900/30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-tight drop-shadow-2xl animate-[fade-in_1s_ease-out]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400">Suhani Bansal</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-200 font-light leading-relaxed max-w-3xl mx-auto text-shadow-md animate-[fade-in_1s_ease-out_0.2s_forwards] opacity-0">
            a sophomore at design tech high school passionate about <span className="text-rose-300 font-medium">machine learning</span>, <span className="text-fuchsia-300 font-medium">bioinformatics</span>, and <span className="text-violet-300 font-medium">leadership</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-[fade-in_1s_ease-out_0.4s_forwards] opacity-0">
            <button onClick={() => scrollToSection('research')} className="group px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-medium transition-all hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] active:scale-95 flex items-center gap-3 text-sm md:text-base backdrop-blur-md shadow-2xl hover:shadow-rose-500/20 whitespace-nowrap min-w-[220px] justify-center cursor-pointer">
              View Research
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white/80 group-hover:text-white" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-transparent border border-white/20 text-zinc-300 rounded-full font-medium transition-all hover:text-white hover:bg-white/10 hover:border-white/30 active:scale-95 text-sm md:text-base backdrop-blur-md whitespace-nowrap min-w-[220px] justify-center cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-zinc-400 hover:text-rose-300 transition-colors cursor-pointer z-20"
          aria-label="Scroll to About"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.3)]"></div>
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {/* Bio and Education Row */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Bio */}
              <div className="md:w-2/3">
                <RevealOnScroll direction="left">
                  <SpotlightCard className="h-full p-8">
                    <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-6">
                      I am a sophomore at Design Tech High School passionate about leveraging computer science, machine learning, and biology to improve healthcare outcomes.
                    </p>
                    <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                      Through independent research projects, I've worked with bioinformatics tools, machine learning models, and clinical datasets, presenting my findings at science fairs and conferences.
                    </p>
                  </SpotlightCard>
                </RevealOnScroll>
              </div>

              {/* Education */}
              <div className="md:w-1/3">
                <RevealOnScroll delay={150} direction="right">
                  <SpotlightCard className="h-full p-8 flex flex-col justify-between group">
                    <div>
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-white">Education</h3>
                      <p className="text-zinc-400 text-sm">Design Tech High School</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Class of</p>
                      <p className="text-4xl font-light text-zinc-100 group-hover:text-fuchsia-200 transition-colors">2028</p>
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              </div>
            </div>

            {/* Leadership */}
            <RevealOnScroll delay={300} direction="up">
              <SpotlightCard className="p-8 flex flex-col justify-center">
                <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                  I'm also deeply engaged in <span className="text-rose-200 font-medium">leadership</span>, holding elected positions at both the school and city levels, where I advocate for youth voice and contribute to policy development.
                </p>
              </SpotlightCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Research</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.3)]"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Machine Learning for Antibiotic Resistance Detection"
              subtitle="Predicting Ertapenem Resistance in Klebsiella Pneumoniae Using MALDI-TOF MS"
              year="2025-Present"
              status="IEEE CCWC Presenter"
              description="Developed a machine learning-based diagnostic approach to distinguish ertapenem-resistant and susceptible Klebsiella pneumoniae isolates using high-dimensional MALDI-TOF mass spectrometry data"
              achievements={[
                "Presented at 2026 IEEE CCWC Conference",
                "Built models achieving 86-99% accuracy",
                "Built a complete data preprocessing and analysis pipeline including noise reduction, normalization, spectral alignment, and feature evaluation",
                "Applied data balancing techniques (SMOTE, ADASYN, class-weighting, undersampling)",
                "Assessed performance using stratified cross-validation, confusion matrices, precision, recall, and F1 score",
              ]}
              tags={['Python', 'Random Forest', 'Logistic Regression', 'K-Nearest Neighbors', 'Multi-Layer Perceptron', 'MALDI-TOF MS', 'SMOTE', 'Cross-validation', 'Data Analysis', 'Experimental Design']}
              icon={Brain}
              delay={0}
              direction="left"
            />
            <ProjectCard
              title="Pharmacogenomics of Celecoxib Metabolism"
              subtitle="A CYP2C9-Focused Bioinformatics Study"
              year="2024-2025"
              status="3rd Place in Alameda County"
              description="Designed and conducted an independent pharmacogenomics study examining how CYP2C9 genetic variants influence celecoxib metabolism and treatment risk, with a focus on implications for senior citizens."
              achievements={[
                "Third Place at Alameda County Science Fair",
                "Analyzed CYP2C9*2 and CYP2C9*3 genetic variants",
                "Explored genotype–phenotype relationships relevant to personalized medicine by analyzing sequence data and protein interactions",
                "Leveraged multiple bioinformatics tools to perform sequence alignment, predict variant impact, and interpret functional consequences",
                "Presented the research to experts in computational biology and bioinformatics"
              ]}
              tags={['NCBI', 'PharmGKB', 'STRING', 'EMBOSS Water', 'dbSNP', 'PolyPhen-2', 'SIFT', 'Mutation-Taster', 'gnomAD', 'Data Analysis', 'Experimental Design']}
              icon={Dna}
              delay={100}
              direction="right"
            />
            <ProjectCard
              title="Sea to Style: Sustainable Seaweed Biofabrics"
              subtitle="Crafting Biodegradable Textiles from Alginate"
              year="2023-2024"
              status="1st Place County, 2nd Place in States, Qualified to Nationals"
              description="Created biodegradable fabric from seaweed as an alternative to cotton and polyester. Tested different formulas to find the strongest and most flexible option."
              achievements={[
                "Made 9 different biofabric prototypes",
                "Tested strength and flexibility of each sample",
                "1st Place at San Mateo County STEM Fair",
                "2nd Place in the California State Science Fair",
                "Top 10% of middle school science projects"
              ]}
              tags={['Sodium Alginate', 'Calcium Chloride', 'Glycerin', 'Tensile Testing', 'Torsion Testing', 'Flexure Testing', 'Materials Science', 'Data Analysis', 'Experimental Design']}
              icon={Leaf}
              delay={200}
              direction="left"
            />
            <ProjectCard
              title="EMF Radiation from Smartphones & Routers"
              subtitle="Measuring Electromagnetic Wave Exposure for Safer Use"
              year="2022-2023"
              status="1st Place County, Qualified to States, Top 300 Nationally"
              description="Measured electromagnetic radiation from phones and WiFi routers at different distances and settings. Found safer ways to use devices in everyday life."
              achievements={[
                "1st Place at San Mateo County STEM Fair",
                "Qualified for California State Science Fair",
                "Top 300 Thermo Fisher Junior Innovators",
                "Top ~16% of the Top 10% of US middle school science projects"
              ]}
              tags={['RF Meter (Acoustimeter)', 'Data Analysis', 'Experimental Design']}
              icon={Radio}
              delay={300}
              direction="right"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Experience</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.3)]"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ExperienceCategory
              title="Student Leadership"
              icon={<Megaphone size={20} />}
              delay={0}
              direction="left"
            >
              <ExperienceRole
                title="Co-President, Student Council"
                org="Design Tech High School"
                date="Jan 2025 - Present"
                desc="Leading student governance and working with administration on school-wide initiatives."
              />
              <ExperienceRole
                title="School Director's Advisory Committee"
                org="Design Tech High School"
                date="Sep 2025 - Present"
                desc="Representing students on school policies. Helped shape the school's AI policy and safety initiatives."
              />
              <ExperienceRole
                title="Student Council Secretary and Representative"
                org="Design Tech High School"
                date="Mar 2024 - Jan 2025"
                desc="Managed agendas and documentation for 12-member council. Elected as a freshmen/sophomore representative."
              />
            </ExperienceCategory>

            <ExperienceCategory
              title="STEM & Education"
              icon={<GraduationCap size={20} />}
              delay={100}
              direction="up"
            >
              <ExperienceRole
                title="Girls Who Code Chair"
                org="Design Tech High School"
                date="Aug 2025 - Present"
                desc="Teaching HTML, CSS, Python, Java, 3D Design, and block coding to middle school students."
              />
              <ExperienceRole
                title="Girls Who Code Member"
                org="Design Tech High School"
                date="Sep 2024 - Aug 2025"
                desc="Worked on multi-language programming projects and supported outreach efforts to recruit more participants."
              />
            </ExperienceCategory>

            <ExperienceCategory
              title="Model United Nations"
              icon={<Compass size={20} />}
              delay={200}
              direction="up"
            >
              <ExperienceRole
                title="Co-Chair, Gender Equality in STEM"
                org="d.mun III"
                date="May 2025 - Present"
                desc="Wrote 18-page topic guide and chaired committee of 20-30 delegates."
              />
              <ExperienceRole
                title="Conference Innovation Committee"
                org="d.mun III"
                date="May 2025 - Present"
                desc="Recruited 200+ delegates and redesigned conference materials for first-time participants."
              />
              <ExperienceRole
                title="Delegate"
                org="Various Conferences"
                date="Sep 2024 - Present"
                desc="Competed at Stanford, UC Berkeley, and regional conferences. Won awards for research and debate."
              />
              <ExperienceRole
                title="Secretariat"
                org="d.mun II"
                date="Sep 2024 - Feb 2025"
                desc="Supported crisis-room writing, delegate coordination, and event logistics"
              />
            </ExperienceCategory>

            <ExperienceCategory
              title="City Engagement"
              icon={<Building size={20} />}
              delay={300}
              direction="right"
            >
              <ExperienceRole
                title="Secretary, Teen Advisory Board"
                org="City of Redwood City"
                date="Sep 2024 - Present"
                desc="Documenting meetings and supporting youth representation in city decisions."
              />
              <ExperienceRole
                title="TAB Representative"
                org="City of Redwood City"
                date="Sep 2024 - Present"
                desc="Launched spelling bee, organized Eco Action fair, and volunteered at various community events."
              />
              <ExperienceRole
                title="Vice Chair, Youth Advisory Board"
                org="City of Redwood City"
                date="Sep 2023 - Sep 2024"
                desc="Helped coordinate board activities and youth engagement initiatives."
              />
            </ExperienceCategory>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Awards and Honors</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.3)]"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Research Paper Presenter", org: "IEEE CCWC", year: "Jan 2026" },
              { title: "Honorable Mention", org: "Stanford Model United Nations Conference", year: "Nov 2025" },
              { title: "Honorable Mention", org: "Gunn Model United Nations Conference", year: "Oct 2025" },
              { title: "Research Award", org: "Foothill Model United Nations Conference", year: "Apr 2025" },
              { title: "Third Place", org: "Alameda County Science and Engineering Fair", year: "Mar 2025" },
              { title: "Leadership Excellence Award", org: "Design Tech High School", year: "Jun 2025" },
              { title: "2nd Place, Materials Science", org: "California Science and Engineering Fair", year: "Apr 2024" },
              { title: "1st Place, Materials Science", org: "San Mateo County STEM Fair", year: "Mar 2024" },
              { title: "Outstanding Math Student", org: "Carlmont High School", year: "Jun 2024" },
              { title: "Top 300 Junior Innovator", org: "Thermo Fisher Scientific JIC", year: "Sep 2023" },
              { title: "1st Place, Physics", org: "San Mateo County STEM Fair", year: "Mar 2023" },
              { title: "Innovation Showcase Presenter", org: "Oracle Education Foundation", year: "2024" },
              { title: "Certified Facilitator", org: "Redwood City Police Dept", year: "Nov 2024" },
              { title: "Mayor Recognition", org: "Boards & Commissions Dinner", year: "2024" },
            ].map((award, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-rose-500/20 hover:bg-white/5 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg shadow-black/10">
                  <div>
                    <h4 className="font-bold text-zinc-300 group-hover:text-white transition-colors mb-1 text-xl">{award.title}</h4>
                    <p className="text-zinc-500 text-base">{award.org}</p>
                  </div>
                  <p className="text-zinc-600 text-sm font-bold uppercase tracking-wider mt-4 text-right group-hover:text-rose-400">{award.year}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section >



      {/* Contact Section */}
      < section id="contact" className="py-32 px-4 relative" >
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Functional Form */}
            <div className="order-2 lg:order-1">
              <RevealOnScroll>
                <SpotlightCard className="p-8 md:p-10 !rounded-[2rem]">
                  <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>

                  <form action="https://formspree.io/f/xnjjvwnz" method="POST" className="space-y-4 relative z-10">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-3.5 bg-black/40 border border-white/5 rounded-xl focus:ring-1 focus:ring-rose-500/50 focus:border-rose-500/50 outline-none transition-all placeholder:text-zinc-600 text-zinc-200 text-sm backdrop-blur-sm"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-3.5 bg-black/40 border border-white/5 rounded-xl focus:ring-1 focus:ring-rose-500/50 focus:border-rose-500/50 outline-none transition-all placeholder:text-zinc-600 text-zinc-200 text-sm backdrop-blur-sm"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-5 py-3.5 bg-black/40 border border-white/5 rounded-xl focus:ring-1 focus:ring-rose-500/50 focus:border-rose-500/50 outline-none transition-all resize-none placeholder:text-zinc-600 text-zinc-200 text-sm backdrop-blur-sm"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm border border-white/5 shadow-lg cursor-pointer"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </SpotlightCard>
              </RevealOnScroll>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-4 justify-center order-1 lg:order-2">
              <RevealOnScroll delay={100}>
                <a href="mailto:suhanibansal633@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                  <SpotlightCard className="p-6 !rounded-2xl flex items-center justify-between group cursor-pointer hover:border-rose-500/30">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 text-zinc-300 rounded-xl relative z-10 group-hover:text-rose-300 transition-colors">
                        <Mail size={24} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">suhanibansal633@gmail.com</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-rose-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all relative z-10" />
                  </SpotlightCard>
                </a>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <a href="https://www.linkedin.com/in/suhanibansal8/" target="_blank" rel="noopener noreferrer" className="block">
                  <SpotlightCard className="p-6 !rounded-2xl flex items-center justify-between group cursor-pointer hover:border-fuchsia-500/30">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 text-zinc-300 rounded-xl relative z-10 group-hover:text-fuchsia-300 transition-colors">
                        <Linkedin size={24} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <p className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">/in/suhanibansal8</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-fuchsia-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all relative z-10" />
                  </SpotlightCard>
                </a>
              </RevealOnScroll>
            </div>
          </div>

          <footer className="mt-24 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
            <p>© {new Date().getFullYear()} Suhani Bansal. All rights reserved.</p>
          </footer>
        </div>
      </section >
      <BackToTop />
    </div >
  );
}

// --- NEW INTERACTIVE COMPONENTS ---

function BackToTop() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-4 bg-zinc-800/80 backdrop-blur-md border border-white/10 rounded-full text-zinc-400 hover:text-rose-300 hover:border-rose-500/30 transition-all duration-300 z-50 shadow-2xl ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Back to top"
    >
      <ArrowUpRight className="-rotate-45" size={24} />
    </button>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (totalScroll / windowHeight) * 100;
      setWidth(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

function ParallaxOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize position from -0.5 to 0.5
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-rose-900/10 rounded-full blur-[180px] mix-blend-screen animate-pulse duration-[10000ms]"
        style={{ transform: `translate3d(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 50}px), 0)` }}
      />
      <div
        className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-indigo-900/10 rounded-full blur-[180px] mix-blend-screen animate-pulse duration-[12000ms]"
        style={{ transform: `translate3d(calc(50% + ${mousePos.x * -80}px), calc(50% + ${mousePos.y * -80}px), 0)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[200px] mix-blend-screen animate-pulse duration-[15000ms]"
        style={{ transform: `translate3d(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px), 0)` }}
      />
    </div>
  );
}

// Reveal on Scroll Component with Directional Support
function RevealOnScroll({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Define animation classes based on direction
  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out transform';

    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
    }

    switch (direction) {
      case 'left':
        return `${baseClasses} opacity-0 -translate-x-12 scale-95`;
      case 'right':
        return `${baseClasses} opacity-0 translate-x-12 scale-95`;
      case 'up':
      default:
        return `${baseClasses} opacity-0 translate-y-12 scale-95`;
    }
  };

  return (
    <div
      ref={ref}
      className={getAnimationClasses()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-zinc-900/40 backdrop-blur-md rounded-[1.5rem] border border-white/5 shadow-xl shadow-black/20 transition-all duration-300 group/card ${className}`}
    >
      {/* Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(244, 114, 182, 0.1), transparent 40%)`,
        }}
      />

      {/* Glass Shine Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg] group-hover/card:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
      </div>

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}

// Wrapped Components
function ProjectCard({ title, subtitle, year, award, description, achievements, tags, status, icon: Icon = Code, delay, direction = 'up' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <RevealOnScroll delay={delay} direction={direction}>
      <SpotlightCard className="p-8 h-full flex flex-col group hover:border-rose-500/30">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 text-zinc-300 group-hover:bg-rose-500/20 group-hover:text-rose-200 transition-colors">
              <Icon size={24} />
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
              <Calendar size={14} />
              {year}
            </div>
          </div>
          {status && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {status}
            </span>
          )}
        </div>

        <div className="mb-4">
          <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-rose-100 transition-colors leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base font-medium text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
              {subtitle}
            </p>
          )}
        </div>

        <p className="text-zinc-400 leading-relaxed mb-6 text-base group-hover:text-zinc-300">
          {description}
        </p>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          {achievements && achievements.length > 0 && (
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <CheckCircle2 size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-rose-300 transition-colors mb-6 uppercase tracking-widest cursor-pointer"
        >
          {isExpanded ? (
            <>Less Details <ChevronDown size={14} className="rotate-180" /></>
          ) : (
            <>More Details <ChevronDown size={14} /></>
          )}
        </button>

        <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-white/5 group-hover:border-rose-500/20">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-lg text-xs font-medium border border-white/5 group-hover:border-rose-500/30 group-hover:text-rose-200/80">
              {tag}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </RevealOnScroll>
  );
}

function ExperienceCategory({ title, icon, children, delay, direction = 'up' }) {
  return (
    <RevealOnScroll delay={delay} direction={direction}>
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-300 rounded-xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white whitespace-nowrap">{title}</h3>
        </div>
        <div className="relative pl-4 space-y-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800/50">
          {children}
        </div>
      </div>
    </RevealOnScroll>
  )
}

function ExperienceRole({ title, org, date, desc }) {
  return (
    <div className="relative pl-6 group">
      {/* Timeline Dot */}
      <div className="absolute left-[-21px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-indigo-400 group-hover:scale-110 group-hover:bg-indigo-400 transition-all z-10" />

      <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/50 transition-all hover:border-indigo-500/30 transform hover:-translate-y-1">
        <h4 className="font-bold text-zinc-200 text-xl mb-1 group-hover:text-white transition-colors">{title}</h4>
        <div className="flex flex-col gap-0.5 mb-3">
          <p className="text-sm text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors">{org}</p>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-bold uppercase tracking-wider">
            <Calendar size={10} />
            {date}
          </div>
        </div>
        <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">{desc}</p>
      </div>
    </div>
  )
}
