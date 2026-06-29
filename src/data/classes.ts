export interface ClassType {
  name: string;
  level: string;
  description: string;
  whatToExpect: string;
}

export const classTypes: ClassType[] = [
  {
    name: "Beginner Pole Fitness",
    level: "Beginner",
    description: "Perfect class for your foray into pole. Our instructors are ready to help you learn the basics of pole tricks and spins.",
    whatToExpect: "Foundational pole tricks, basic spins, and safe technique. No experience required.",
  },
  {
    name: "Intermediate Pole",
    level: "Intermediate",
    description: "For students ready to push further. Build on foundational skills with more complex combinations and strength moves.",
    whatToExpect: "Layered tricks, combinations, and increased strength challenges.",
  },
  {
    name: "Intro to Pole Choreo",
    level: "All Levels",
    description: "Learn to connect pole movements into a flowing routine. Adds musicality and artistry to your pole practice.",
    whatToExpect: "Movement sequences, musicality, and basic choreography fundamentals.",
  },
  {
    name: "Heels Classes",
    level: "All Levels",
    description: "Specialized pole instruction performed in heeled footwear. Move with confidence, style, and control.",
    whatToExpect: "Pole technique adapted for heels. Bring 6-inch platforms or borrow from the studio.",
  },
  {
    name: "Heels Choreography",
    level: "All Levels",
    description: "Dance combination instruction in heels. Build a performance-ready routine with musicality and flow.",
    whatToExpect: "Dance combinations, full routines, and performance confidence in heels.",
  },
  {
    name: "Pole Prep",
    level: "All Levels",
    description: "Conditioning and flexibility training built specifically to support your pole journey. Injury prevention focused.",
    whatToExpect: "Strength conditioning, flexibility work, and injury prevention techniques.",
  },
  {
    name: "Stretch",
    level: "All Levels",
    description: "Dedicated flexibility sessions to complement your pole training. Works great as a standalone class or paired with any pole class.",
    whatToExpect: "Full-body stretching, flexibility improvements, and active recovery.",
  },
];
