type Skill = string;

export interface WorkExperience {
  profession: string;
  company: string;
  work_type: string;
  start_date: string;
  end_date: string;
  work_location: string;
  experience: string[];
  skils: Skill[];
}

export const pengalamankerja: WorkExperience[] = [
  {
    profession: "Full Stack Developer",
    company: "Desa Digital Developer",
    work_type: "Full Time",
    start_date: "2024",
    end_date: "Present",
    work_location: "Mataram, West Nusa Tenggara, Indonesia.",
    experience: [
      "NEXT.JS",
      "Developed CRM systems for product and warehouse management.",
      "Developed AI based company profile and website builder platforms.",
      "Developed architecture and interior websites with AI visualization using ChatGPT, Gemini, and Veo3.",
      "Developed internal payment gateway systems integrated with Xendit, Midtrans, and NowPayments.",
      "Converted Figma designs into responsive websites using Next.js and Tailwind CSS.",
      "EXPRESS.JS",
      "Developed WhatsApp servers for automated payment follow-up systems.",
      "Developed AI powered WhatsApp chatbots for automatic customer replies outside working hours.",
      "Integrated WhatsApp automation systems with internal company services to improve transaction and customer support processes.",
      "ASP.NET",
      "Developed web applications using C# and ASP.NET for financial services.",
      "Designed and managed databases using MySQL and SQL Server.",
      "Handled application debugging, maintenance, deployment, and server monitoring.",
      "Collaborated with other developers to build features based on business requirements."
    ],
    skils: [],
  },
  {
    profession: "SEO and Website Content Specialist",
    company: "Nuansa Mandalika",
    work_type: "Part Time",
    start_date: "2021",
    end_date: "2023",
    work_location: "Central Lombok, West Nusa Tenggara, Indonesia.",
    experience: [
      "Developed and implemented SEO strategies to improve website rankings.",
      "Conducted keyword research and optimized website content for better visibility and readability.",
      "Analyzed website performance using Google Analytics and created performance reports.",
      "Collaborated with the marketing team to align content with promotional campaigns and brand strategies.",
      "Managed and maintained company blog content based on the latest SEO standards."
    ],
    skils: [],
  },
];
