import Image from 'next/image';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

interface DevCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  github: string;
  linkedin: string;
  email: string;
}
// ______________________________
// Change according to your needs
// ------------------------------
const devData = [
  {
    name: 'Habibur Rahman',
    role: 'Front-end Developer',
    description:
      'Junior Front-end Developer who ❤️s working with TypeScript | React | Next.js | Tailwind',
    image: 'https://avatars.githubusercontent.com/u/115046415?v=4',
    github: 'https://github.com/habibmollah',
    linkedin: 'https://www.linkedin.com/in/habib-ibn-tofazzal/',
    email: 'hrmollah2002@gmail.com',
  },
  {
    name: 'AFM Taha',
    role: 'Front-end Developer',
    description:
      'MERN stack developer and React expert with many years of industrial experience',
    image: 'https://avatars.githubusercontent.com/u/96813648?v=4',
    github: 'https://github.com/AFM-Taha',
    linkedin: 'https://www.linkedin.com/in/md-taha-43949a22a/',
    email: 'taha.iu.bd@gmail.com',
  },
  {
    name: 'Moazzem Hossain Nahid',
    role: 'Back-end Developer',
    description:
      'Full Stack Developer (MERN) with expertise in Express.js, MongoDB and Firebase',
    image: 'https://avatars.githubusercontent.com/u/67864972?v=4',
    github: 'https://github.com/moazzemhossainnahid',
    linkedin: 'https://www.linkedin.com/in/moazzemhossainnahid/',
    email: 'moazzemhossainnahid@gmail.com',
  },
];

function DevCard({
  name,
  role,
  description,
  image,
  github,
  linkedin,
  email,
}: DevCardProps) {
  return (
    <div className="max-h-80 min-h-[180px] w-full min-w-[320px] max-w-md rounded-3xl bg-white p-4 pr-8 text-black">
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={100}
        height={100}
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-800">{role}</p>
        <p className="mt-2">{description}</p>
        <div className="mt-6 flex items-center gap-4">
          <a target="_blank" href={github}>
            <SiGithub size={22} />
          </a>
          <a target="_blank" href={linkedin}>
            <SiLinkedin size={22} />
          </a>
          <a href={'mailto:' + email}>
            <SiGmail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DevGrid() {
  return (
    <div className="py-32">
      <h1 className="mb-16 text-center font-mono text-7xl font-bold text-white">
        {'<Developers/>'}
      </h1>
      <div className="mx-4 flex flex-col items-center justify-evenly gap-4 lg:flex-row">
        {devData.map((data) => (
          <DevCard
            key={data.name}
            name={data.name}
            image={data.image}
            role={data.role}
            description={data.description}
            github={data.github}
            linkedin={data.linkedin}
            email={data.email}
          />
        ))}
      </div>
    </div>
  );
}
