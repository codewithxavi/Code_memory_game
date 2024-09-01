"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card as UICard, CardContent } from "@/components/ui/card";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import { IconType } from "react-icons";

interface Card {
  id: number;
  name: string;
  icon: IconType;
}

const technologies = [
  { name: "HTML", icon: Fa.FaHtml5 },
  { name: "CSS", icon: Fa.FaCss3Alt },
  { name: "JavaScript", icon: Fa.FaJs },
  { name: "TypeScript", icon: Si.SiTypescript },
  { name: "React", icon: Fa.FaReact },
  { name: "Vue", icon: Fa.FaVuejs },
  { name: "Angular", icon: Fa.FaAngular },
  { name: "Svelte", icon: Si.SiSvelte },
  { name: "Node.js", icon: Fa.FaNodeJs },
  { name: "Python", icon: Fa.FaPython },
  { name: "Django", icon: Si.SiDjango },
  { name: "Flask", icon: Si.SiFlask },
  { name: "Java", icon: Fa.FaJava },
  { name: "Spring", icon: Si.SiSpring },
  { name: "C#", icon: Si.SiCsharp },
  { name: ".NET", icon: Si.SiDotnet },
  { name: "PHP", icon: Fa.FaPhp },
  { name: "Laravel", icon: Fa.FaLaravel },
  { name: "Ruby", icon: Fa.FaGem },
  { name: "Ruby on Rails", icon: Si.SiRubyonrails },
  { name: "Go", icon: Si.SiGo },
  { name: "Rust", icon: Si.SiRust },
  { name: "Swift", icon: Fa.FaSwift },
  { name: "Kotlin", icon: Si.SiKotlin },
  { name: "Scala", icon: Si.SiScala },
  { name: "Haskell", icon: Si.SiHaskell },
  { name: "Elixir", icon: Si.SiElixir },
  { name: "Clojure", icon: Si.SiClojure },
  { name: "Dart", icon: Si.SiDart },
  { name: "Flutter", icon: Si.SiFlutter },
  { name: "R", icon: Fa.FaRProject },
  { name: "Perl", icon: Si.SiPerl },
  { name: "Lua", icon: Si.SiLua },
  { name: "Shell", icon: Si.SiGnubash },
  { name: "PowerShell", icon: Si.SiPowershell },
  { name: "SQL", icon: Si.SiMysql },
  { name: "MongoDB", icon: Si.SiMongodb },
  { name: "PostgreSQL", icon: Si.SiPostgresql },
  { name: "Redis", icon: Si.SiRedis },
  { name: "Cassandra", icon: Si.SiApachecassandra },
  { name: "GraphQL", icon: Si.SiGraphql },
  { name: "Docker", icon: Fa.FaDocker },
  { name: "Kubernetes", icon: Si.SiKubernetes },
  { name: "AWS", icon: Fa.FaAws },
  { name: "Azure", icon: Si.SiMicrosoftazure },
  { name: "Google Cloud", icon: Si.SiGooglecloud },
  { name: "Heroku", icon: Si.SiHeroku },
  { name: "DigitalOcean", icon: Fa.FaDigitalOcean },
  { name: "Git", icon: Fa.FaGitAlt },
  { name: "GitHub", icon: Fa.FaGithub },
  { name: "GitLab", icon: Fa.FaGitlab },
  { name: "Bitbucket", icon: Fa.FaBitbucket },
  { name: "npm", icon: Fa.FaNpm },
  { name: "Yarn", icon: Fa.FaYarn },
  { name: "Webpack", icon: Si.SiWebpack },
  { name: "Babel", icon: Si.SiBabel },
  { name: "ESLint", icon: Si.SiEslint },
  { name: "Prettier", icon: Si.SiPrettier },
  { name: "Jest", icon: Si.SiJest },
  { name: "Mocha", icon: Si.SiMocha },
  { name: "Cypress", icon: Si.SiCypress },
  { name: "Selenium", icon: Si.SiSelenium },
  { name: "Jenkins", icon: Fa.FaJenkins },
  { name: "Travis CI", icon: Si.SiTravisci },
  { name: "CircleCI", icon: Si.SiCircleci },
  { name: "Ansible", icon: Si.SiAnsible },
  { name: "Terraform", icon: Si.SiTerraform },
  { name: "Vagrant", icon: Si.SiVagrant },
  { name: "Prometheus", icon: Si.SiPrometheus },
  { name: "Grafana", icon: Si.SiGrafana },
  { name: "Elasticsearch", icon: Si.SiElasticsearch },
  { name: "Logstash", icon: Si.SiLogstash },
  { name: "Kibana", icon: Si.SiKibana },
  { name: "Apache", icon: Si.SiApache },
  { name: "Nginx", icon: Si.SiNginx },
  { name: "Sass", icon: Fa.FaSass },
  { name: "Less", icon: Fa.FaLess },
  { name: "Stylus", icon: Si.SiStylus },
  { name: "Bootstrap", icon: Fa.FaBootstrap },
  { name: "Tailwind CSS", icon: Si.SiTailwindcss },
  { name: "Ant Design", icon: Si.SiAntdesign },
  { name: "Redux", icon: Si.SiRedux },
  { name: "MobX", icon: Si.SiMobx },
  { name: "RxJS", icon: Si.SiReactivex },
  { name: "D3.js", icon: Si.SiD3Dotjs },
  { name: "Three.js", icon: Si.SiThreedotjs },
  { name: "WebGL", icon: Si.SiWebgl },
  { name: "Electron", icon: Si.SiElectron },
  { name: "Ionic", icon: Si.SiIonic },
  { name: "Cordova", icon: Si.SiApachecordova },
  { name: "Unity", icon: Si.SiUnity },
  { name: "Unreal Engine", icon: Si.SiUnrealengine },
  { name: "Godot", icon: Si.SiGodotengine },
  { name: "TensorFlow", icon: Si.SiTensorflow },
  { name: "PyTorch", icon: Si.SiPytorch },
  { name: "Keras", icon: Si.SiKeras },
  { name: "OpenCV", icon: Si.SiOpencv },
  { name: "Pandas", icon: Si.SiPandas },
  { name: "NumPy", icon: Si.SiNumpy },
  { name: "Jupyter", icon: Si.SiJupyter },
];

export default function Component() {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [failedAttempts, setFailedAttempts] = useState(0);

  useEffect(() => {
    resetGame();
  }, [level]);

  const resetGame = () => {
    const numPairs = 12; // Always 12 pairs (24 cards)
    const shuffledTechnologies = [...technologies].sort(
      () => Math.random() - 0.5
    );
    const selectedTechnologies = shuffledTechnologies.slice(0, numPairs);
    const newCards = [...selectedTechnologies, ...selectedTechnologies]
      .sort(() => Math.random() - 0.5)
      .map((tech, index) => ({ ...tech, id: index }));
    setCards(newCards);
    setFlippedIndexes([]);
    setMatchedPairs([]);
    setFailedAttempts(0);
  };

  const handleCardClick = (index: number) => {
    if (
      flippedIndexes.length === 2 ||
      flippedIndexes.includes(index) ||
      matchedPairs.includes(cards[index].name)
    )
      return;

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndexes;
      if (cards[firstIndex].name === cards[secondIndex].name) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].name]);
        setFlippedIndexes([]);
        if (matchedPairs.length + 1 === cards.length / 2) {
          setTimeout(() => {
            setLevel(level + 1);
          }, 600);
        }
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
          setFailedAttempts((prev) => {
            const newFailedAttempts = prev + 1;
            if (newFailedAttempts >= 20) {
              resetGame();
              return 0;
            }
            return newFailedAttempts;
          });
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-background text-foreground w-screen h-screen flex flex-col md:flex-row">
      <header className="overflow-y-auto w-full md:w-1/3 lg:w-1/4 p-6 bg-gradient-to-r from-sky-500 to-sky-600 text-[#eee7e7] shadow-lg md:relative md:h-auto fixed h-1/3">
        <h1 className="text-4xl font-extrabold mb-6 text-center animate-bounce">
          Memory Game 🧠
        </h1>
        <h2 className="text-2xl font-bold mb-4 underline">Instrucciones:</h2>
        <ul className="list-disc list-inside mb-6 text-lg space-y-2">
          <li>Encuentra pares de cartas que coincidan.</li>
          <li>Cada carta representa una tecnología diferente.</li>
          <li>
            Haz clic en una carta para revelarla y luego encuentra su par.
          </li>
          <li>Si fallas 20 veces, el nivel se reiniciará.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 underline">Niveles:</h2>
        <p className="mb-6 text-lg">
          Nivel actual: <span className="font-bold">{level}</span>
          <br />
          Pares de cartas: <span className="font-bold">12</span>
          <br />
          Intentos fallidos:{" "}
          <span className="font-bold">{failedAttempts} / 20</span>
        </p>
        <Button
          className="w-full py-3 px-6 bg-gradient-to-r from-[#7746d1] to-rose-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
          onClick={resetGame}
        >
          Reiniciar Nivel
        </Button>
      </header>
      <div className="p-4 overflow-y-auto flex-1 mt-1/3 md:mt-0">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-1">
          {cards.map((card, index) => (
            <UICard
              key={card.id}
              className={`cursor-pointer transition-all duration-150 w-full ${
                flippedIndexes.includes(index) ||
                matchedPairs.includes(card.name)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <CardContent className="flex flex-col items-center justify-center w-full aspect-square p-1">
                {flippedIndexes.includes(index) ||
                matchedPairs.includes(card.name) ? (
                  <>
                    {card.icon && <card.icon className="w-12 h-12 mb-1" />}
                    <span className="text-xs text-center">{card.name}</span>
                  </>
                ) : (
                  <span className="text-5xl">?</span>
                )}
              </CardContent>
            </UICard>
          ))}
        </div>
      </div>
      <footer className="text-center inset-x-0 bottom-0 p-4 fixed bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <p className="">
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/codewithxavi"
            target="_blank"
            rel="noreferrer noopener"
          >
            @codewithxavi
          </a>
        </p>
      </footer>
    </div>
  );
}
