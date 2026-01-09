import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Palette, 
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Motion'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira'],
  },
];

const technologies = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 82 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'AWS', level: 78 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(200,80%,50%,0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit honed through years of building modern web applications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] mx-auto rounded-full mt-4" />
          </div>

          {/* Skill Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bars Section */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Core Expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {technologies.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-primary font-mono">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
