export const projectsData = [
  {
    id: 1,
    title: "Townsquare – The Neighborhood's Digital Pulse",
    category: "Full Stack",
    duration: "3 months",
    description:
      "Built a hyperlocal social hub with real-time crime alerts, street chats, and a verified marketplace. Turbocharged performance by 30% with lazy loading and WebSockets—because community shouldn’t buffer.",
    features: [
      "Post and discuss local issues",
      "Create Polls & Surveys",
      "Local Marketplace",
      "Community Chat",
      "Personalized Homepage",
      "Announcements Page",
      "User Profiles",
      "Emergency Contacts Section",

    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    media: [
      { type: "image", url: "/phome.png?height=400&width=600" },
      { type: "video", url: "/townsqaurevid.mp4?height=400&width=600" },
      { type: "image", url: "/townsqaurepostpage.png?height=400&width=600" },
      { type: "image", url: "/townsquarediscussion.png?height=400&width=600" },
      { type: "image", url: "/townsqauremyprof1.png?height=400&width=600" },
    ],
    github: "https://github.com/Himanshu25Sahu/TownSquare",
    live: "https://townsquareclient.onrender.com/",
  },
  {
    id: 2,
    title: "Devsphere – Where Developers Connect, Code & Collaborate",
    category: "Full Stack",
    duration: "2 months",
    description:
      "A real-time developer collaboration platform where coders connect, discuss ideas, and build together. Created an interactive space combining coding, community discussions, and networking tools to streamline developer workflows.",
    features: [
      "1:1 & group chats with real-time messaging",
      "Smart feed",
      "User profiles",
      "Multi-language IDE",
      "Search and Follow"
      
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    media: [
      { type: "image", url: "/devsphome.png?height=400&width=600" },
      { type: "video", url: "/devspvid.mp4?height=400&width=600" },
      { type: "image", url: "/devspchat.png?height=400&width=600" },
      { type: "image", url: "/devspcommu.png?height=400&width=600" },
      { type: "image", url: "/devspsearch.png?height=400&width=600" },
    ],
    github: "https://github.com/Himanshu25Sahu/DevChat",
    live: "https://devsphereclient.onrender.com/",
  },
  {
    id: 3,
    title: "Interactive Machine Learning Visualizer",
    category: "Machine Learning",
    duration: "1 month",
    description:
      "AlgoViz is an interactive machine learning visualizer that brings ML algorithms to life. Tune models, manipulate data, and instantly see how learning evolves — all in real time. Perfect for curious minds who’d rather see than guess.",
    features: [
      "Draws dynamic regression lines based on real-time model training",
      "Lets you experiment with different datasets, algorithms, and noise levels",
      "Supports tuning of hyperparameters like learning rate, regularization, etc.",
      "Visualizes classification decision boundaries as you train the model",
      "Instantly reflects changes in model behavior with interactive graphs",
      "Great for understanding ML intuitively through trial and visual feedback",
    ],
    tech: ["React.js", "Chart.js", "Sklearn", "Matplotlib", "Flask"],
    media: [
      { type: "image", url: "/algoreg.png?height=400&width=600" },
      { type: "video", url: "/algovizvid.mp4?height=400&width=600" },
      { type: "image", url: "/algoreg2.png?height=400&width=600" },
      { type: "image", url: "/algoclass.png?height=400&width=600" },
      { type: "image", url: "/algochat.png?height=400&width=600" },
    ],
    github: "https://github.com/Himanshu25Sahu/ml-visualizer",
    live: "https://algoviz-ichv.onrender.com/",
  },
  {
    id: 4,
    title: "NovaScript – A Human-Friendly Interpreted Programming Language",
    category: "Systems Programming",
    duration: "Ongoing",
    description:
      "NovaScript is a work-in-progress interpreted programming language designed to bridge the gap between human thought and code. Inspired by natural language, it's built with an English-like syntax that makes programming more intuitive for beginners — without compromising expressive power.",
    features: [
      "English-like syntax for beginner-friendly programming",
      "Support for variables, conditionals, loops, functions (WIP or current scope)",
      "Real-time code execution with instant output in the browser",
      "Web-based interactive playground for writing and visualizing code",
      "Wearable device integration",
      "AI-powered coaching tips",
    ],
    tech: ["C++ - Core", "React.js", "AST", "Web APIs"],
    media: [
      { type: "image", url: "/novasc.png?height=400&width=600" },
      
    ],
    github: "NA",
    live: "NA",
  },
  {
    id: 5,
    title: "GemiCook - What & How To Make?",
    category: "Frontend",
    duration: "Under 1 month",
    description:
      "GemiCook is an AI-powered recipe generator that uses the Gemini API to suggest recipes instantly. Just enter a dish name or the ingredients you have — and get smart, tailored recipes with filters like vegetarian, healthy, and under 20 minutes.",
    features: [
      "Generates full recipes with ingredients, steps, and tips using Gemini AI",
      "Supports smart filters like Vegetarian, Healthy, Under 20 Minutes, and more",
      "Ideal for quick meal planning, zero-waste cooking, and culinary discovery",
      "Historical data analysis",
      "Location-based forecasting",
      "Responsive design",
    ],
    tech: ["React.js", "Gemini API", "Javascript"],
    media: [
      { type: "image", url: "/gemicook.jpg?height=400&width=600" },
      { type: "image", url: "/gemi2.jpg?height=400&width=600" },
      { type: "image", url: "/gemi3.jpg?height=400&width=600" },
    ],
    github: "https://github.com/Himanshu25Sahu/gemiCook",
    live: "https://himanshu25sahu.github.io/gemiCook/",
  },
  {
    id: 6,
    title: "Coride - A carpooling app for students",
    category: "Full Stack",
    duration: "1 month",
    description:
      "Coride is a secure and student-first carpooling app that simplifies shared travel for college-goers. Built on the MERN stack, it connects users heading to the same destination while prioritizing privacy, trust, and eco-friendly commuting.",
    features: [
      "Search and join carpools based on location and route",
      "1-on-1 in-app chat to coordinate rides and meeting points",
      "Admin-based user verification for trusted community access",
      "Request review and rejection flow for unauthorized users",
      "Promotes cost-saving, sustainable travel for students",
      
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    media: [
      { type: "video", url: "/coridevid.mp4?height=400&width=600" },
      
    ],
    github: "https://github.com/Himanshu25Sahu/Coride",
    live: "NA",
  },
]
