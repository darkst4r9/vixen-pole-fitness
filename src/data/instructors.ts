export interface Instructor {
  name: string;
  initials: string;
  role: string;
  bio: string;
  specialty: string[];
  experience: string;
  isOwner: boolean;
  photo: string;
  photoPosition: string;
  instagram: string;
}

export const instructors: Instructor[] = [
  {
    name: "Lexi",
    initials: "L",
    role: "Co-Owner & Lead Instructor",
    bio: "Hi, I'm Lexi! I'm a co-owner here at Vixen! I've been teaching for 6 years! I teach all levels of pole fitness classes and heels classes! My favorite part of teaching is seeing the progression of students and celebrating all of the small victories along the way!",
    specialty: ["All Pole Levels", "Heels Classes"],
    experience: "6+ years teaching",
    isOwner: true,
    photo: "/images/instructors/lexi.jpg",
    photoPosition: "top",
    instagram: "lexivinson",
  },
  {
    name: "Sarah",
    initials: "S",
    role: "Co-Owner & Instructor",
    bio: "Hi, I'm Sarah! I'm a co-owner here at Vixen! I have a history in dance and have been teaching pole over the last two years! I teach Beginner Pole, Intro to Pole Choreo and Heels. The most rewarding part of teaching for me is to see my students gain their self love and confidence on and off the pole!",
    specialty: ["Beginner Pole", "Intro Choreo", "Heels"],
    experience: "2+ years teaching",
    isOwner: true,
    photo: "/images/instructors/sarah.jpg",
    photoPosition: "top",
    instagram: "vxn_bb",
  },
  {
    name: "Erika",
    initials: "E",
    role: "Instructor",
    bio: "Hi I'm Erika! I've been poling for 10 years. I teach Beginner Pole, Heels and Intro to Choreo. My favorite part about teaching is when a student looks at me like I'm crazy for suggesting a move, but then they nail it and have a look of shock and happiness on their face realizing they are a total badass.",
    specialty: ["Beginner Pole", "Heels", "Intro Choreo"],
    experience: "10 years experience",
    isOwner: false,
    photo: "/images/instructors/erika.jpeg",
    photoPosition: "top",
    instagram: "polefitpeeches",
  },
  {
    name: "Michelle",
    initials: "M",
    role: "Instructor",
    bio: "Hi I'm Michelle! I've been poling on and off since 2012! I finally relit my passion for pole fitness in 2019 (I took a break to have a baby in 2020) and have been back since 2021! My favorite part about teaching is seeing students accomplish tricks they never thought they could do! The support of the other members is incredible and I'm lucky to have made some amazing friends here!",
    specialty: ["Pole Fitness"],
    experience: "Pole since 2012",
    isOwner: false,
    photo: "/images/instructors/michelle.jpeg",
    photoPosition: "center",
    instagram: "meeeessshhellll",
  },
  {
    name: "Reyna",
    initials: "R",
    role: "Instructor",
    bio: "Hi I'm Reyna! I've been teaching pole for 2 years. I teach intermediate pole and heels choreography. My favorite part of being an instructor is teaching students how to unlock their inner athlete and find their inner strength!",
    specialty: ["Intermediate Pole", "Heels Choreography"],
    experience: "2 years teaching",
    isOwner: false,
    photo: "/images/instructors/reyna.jpeg",
    photoPosition: "center",
    instagram: "veevanityy",
  },
  {
    name: "Star",
    initials: "S",
    role: "Instructor",
    bio: "Hi I'm Star! I've been poling for 6 years. I teach Beginner Pole Fitness, Intro to Choreo and Heels! My favorite part of teaching is helping you find the confidence you didn't know you had while getting a great workout in the process!",
    specialty: ["Beginner Pole", "Intro Choreo", "Heels"],
    experience: "6 years experience",
    isOwner: false,
    photo: "/images/instructors/star.jpg",
    photoPosition: "top",
    instagram: "polebaby_562",
  },
  {
    name: "Kim",
    initials: "K",
    role: "Instructor",
    bio: "My name is Kim and I've been poling for 3 years! I teach Intro to Pole Choreo. My favorite part about teaching pole is seeing everyone connect with themselves and unleash their inner baddies!",
    specialty: ["Intro to Pole Choreo"],
    experience: "3 years experience",
    isOwner: false,
    photo: "/images/instructors/kim.jpg",
    photoPosition: "center",
    instagram: "kimberp0le",
  },
  {
    name: "Carly",
    initials: "C",
    role: "Instructor",
    bio: "Hi, I'm Carly! I have been in the fitness industry for over a decade. I teach Pole Prep and Stretch classes. My favorite part of instructing is giving students the building blocks to prevent injury, increase flexibility and advance their pole practice!",
    specialty: ["Pole Prep", "Stretch"],
    experience: "10+ years fitness",
    isOwner: false,
    photo: "/images/instructors/carly.jpg",
    photoPosition: "bottom",
    instagram: "_polesome_content_",
  },
];
