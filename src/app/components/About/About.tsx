import About from "./components/About";

interface AboutPageProps {
  isDarkMode: boolean;
}
export default function AboutPage({ isDarkMode }: AboutPageProps) {
  return <About isDarkMode={isDarkMode} />;
}
