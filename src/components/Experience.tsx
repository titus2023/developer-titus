import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of microservices architecture serving 1M+ users. Mentoring junior developers and implementing CI/CD pipelines.',
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and launched 3 successful products from scratch. Implemented real-time features and optimized database performance by 40%.',
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 - 2020',
    description: 'Developed responsive web applications for Fortune 500 clients. Introduced component libraries that reduced development time by 30%.',
  },
];

const education = [
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'State University',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focus on software engineering and algorithms.',
  },
];

const certifications = [
  { name: 'AWS Solutions Architect', year: '2023' },
  { name: 'Google Cloud Professional', year: '2022' },
  { name: 'MongoDB Certified Developer', year: '2021' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(200,80%,50%,0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and continuous learning path
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Work Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>

                      <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold">{exp.title}</h4>
                          <span className="text-sm text-primary font-mono">{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>

                {education.map((edu, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <h4 className="font-semibold mb-1">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.company}</p>
                    <span className="text-xs text-primary font-mono">{edu.period}</span>
                    <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="text-sm">{cert.name}</span>
                        <span className="text-xs text-primary font-mono">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
