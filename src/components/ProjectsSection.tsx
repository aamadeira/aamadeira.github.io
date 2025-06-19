import { projects } from "@/lib/data";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-12 relative">
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left">🚀 Projects</h2>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <MotionWrapper key={project.title} delay={index * 0.2}>
                            <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                                    <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="list-disc ml-4 space-y-1 text-sm transition-all duration-300">
                                        {project.description.map((desc, i) => (
                                            <motion.li
                                                key={i}
                                                className="text-muted-foreground"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {desc}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                {project.github && (
                                    <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg
                                                className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>GitHub</title>
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            View on GitHub 🔗
                                        </motion.a>
                                    </CardFooter>
                                )}
                            </GlassCard>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
