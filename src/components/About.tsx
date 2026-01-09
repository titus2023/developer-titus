import { Code2, Rocket, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Code2, value: '5+', label: 'Years Experience' },
  { icon: Rocket, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Zap, value: '99%', label: 'Client Satisfaction' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(175,80%,50%,0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl glass-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[hsl(200,80%,50%)] flex items-center justify-center mb-6 glow">
                    <Code2 size={48} className="text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-mono text-muted-foreground">
                    <span className="text-primary">const</span> developer = {'{'}
                  </p>
                  <p className="text-lg font-mono text-muted-foreground ml-4">
                    <span className="text-foreground">passionate:</span> <span className="text-primary">true</span>,
                  </p>
                  <p className="text-lg font-mono text-muted-foreground ml-4">
                    <span className="text-foreground">creative:</span> <span className="text-primary">true</span>
                  </p>
                  <p className="text-2xl font-mono text-muted-foreground">{'}'}</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/20 rounded-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Building Digital Experiences That Matter
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                web applications that are not just functional, but truly exceptional. My journey 
                in tech started with a curiosity about how things work, and has evolved into a 
                career dedicated to crafting elegant solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences. 
                Whether it's a startup MVP or an enterprise platform, I approach each project with 
                the same level of dedication and attention to detail.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card p-4 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                  >
                    <stat.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
