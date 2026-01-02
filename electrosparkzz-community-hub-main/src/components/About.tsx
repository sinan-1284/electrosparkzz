import { Lightbulb, Users, Rocket, Code } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We foster creative thinking and push the boundaries of what's possible with technology.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our strength lies in our diverse community of tech enthusiasts, learners, and professionals.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Stay ahead with workshops, hackathons, and tech talks that keep you at the cutting edge.",
  },
  {
    icon: Code,
    title: "Hands-On Experience",
    description: "Learn by doing. Build real projects and gain practical skills that matter.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(192_95%_55%/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Vision</span> & Mission
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe technology has the power to transform lives. Our mission is to create 
            an inclusive space where anyone can explore, learn, and innovate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-glow opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</div>
            <p className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-relaxed">
              Technology is best when it brings people together. At ElectroSparkzz, 
              we're building more than code — we're building a community.
            </p>
            <div className="absolute -bottom-8 -right-2 text-6xl text-primary/20 font-serif rotate-180">"</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
