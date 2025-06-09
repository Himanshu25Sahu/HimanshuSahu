"use client"
import { motion } from "framer-motion"

const FloatingCodeSnippets = () => {
  const snippets = [
    {
      code: `function optimizeLife() {\n  while(alive) {\n    eat();\n    sleep();\n    code();\n    repeat();\n  }\n}`,
      x: "10%",
      y: "15%",
      rotation: -5,
      delay: 0,
    },
    {
      code: `const mySkills = [\n  'React',\n  'Node.js',\n  'TypeScript',\n  'Problem Solving'\n];\n\nmySkills.push('Learning...');`,
      x: "75%",
      y: "25%",
      rotation: 5,
      delay: 0.3,
    },
    {
      code: `// Life philosophy\nif (problem) {\n  understand();\n  plan();\n  execute();\n  reflect();\n} else {\n  findNewChallenge();\n}`,
      x: "15%",
      y: "65%",
      rotation: 3,
      delay: 0.6,
    },
    {
      code: `import { passion, creativity, logic } from 'my-brain';\n\nexport default function Developer() {\n  return buildAmazingThings();\n}`,
      x: "70%",
      y: "75%",
      rotation: -3,
      delay: 0.9,
    },
  ]

  return (
    <div className="floating-snippets">
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="code-snippet"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 0.85, 0.8],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: snippet.delay,
            ease: "easeInOut",
          }}
          style={{
            left: snippet.x,
            top: snippet.y,
            rotate: `${snippet.rotation}deg`,
          }}
        >
          <pre>{snippet.code}</pre>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingCodeSnippets
