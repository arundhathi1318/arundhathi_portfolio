import { useEffect, useRef, useState } from 'react';

const questions = [
  "What are you currently studying?",
  "Where are you based?",
  "Why should we hire you?",
  "What makes you unique?",
  "What’s your biggest weakness?",
  "Can you describe yourself in 3 emojis?",
  "How do you handle bugs?",
  "Would you survive a zombie apocalypse?",
  "Favorite debugging snack?",
  "What's your secret developer skill?",
  "What's harder: CSS or calculus?",
  "Have you ever used !important in rage?",
];

const answers: Record<string, string> = {
  "What are you currently studying?": "I'm a final-year B.Tech student in Computer Science & Business Systems (CSBS) at Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET).",
  "Where are you based?": "I'm based in the vibrant city of Hyderabad, India!",
  "Why should we hire you?": "Because I’ll get the job done without turning every meeting into a TED Talk.",
  "What makes you unique?": "I write clean code, explain it without PowerPoint, and still know when to ask Stack Overflow.",
  "What’s your biggest weakness?": "Thinking I’ll ‘just fix one thing’ and then it’s 3 AM and I’m knee-deep in a redesign.",
  "Can you describe yourself in 3 emojis?": "💻 ☕ 🤷‍♀️",
  "How do you handle bugs?": "Stage 1: Denial. Stage 2: Blaming the framework. Stage 3: The 'aha!' moment at 2 AM after adding a dozen console.log('here') statements. Stage 4: A single-line fix.",
  "Would you survive a zombie apocalypse?": "Only if the zombies were written in JavaScript. I could probably debug my way out of it.",
  "Favorite debugging snack?": "Irani chai and Osmania biscuits. They help me stay focused during long debugging sessions.",
  "What's your secret developer skill?": "Figuring out answers from a 5-year-old Stack Overflow post and somehow making it fix my totally unrelated problem.",
  "What's harder: CSS or calculus?": "CSS. At least calculus doesn’t randomly break in Safari.",
  "Have you ever used !important in rage?": "Yes. And I regretted it less than some of my Amazon orders."
};

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [conversation, setConversation] = useState<{ type: 'question' | 'answer'; text: string }[]>([]);
  const [isAnswering, setIsAnswering] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState(questions);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * 10;
      const rotateY = (x - 0.5) * 10;
      const elements = container.querySelectorAll('.hero-3d-element');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const depth = (index + 1) * 0.5;
        element.style.transform = `perspective(1000px) rotateX(${rotateX * depth}deg) rotateY(${rotateY * depth}deg) translateZ(${depth * 20}px)`;
      });
    };
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation, isAnswering]);

  const handleRandomQuestionClick = () => {
    if (isAnswering) return;
    let questionsToChooseFrom = availableQuestions;
    if (questionsToChooseFrom.length === 0) {
      questionsToChooseFrom = questions;
    }
    const randomIndex = Math.floor(Math.random() * questionsToChooseFrom.length);
    const randomQuestion = questionsToChooseFrom[randomIndex];
    const answer = answers[randomQuestion];
    setAvailableQuestions(questionsToChooseFrom.filter(q => q !== randomQuestion));
    setConversation((prev) => [...prev, { type: 'question', text: randomQuestion }]);
    setIsAnswering(true);
    setTimeout(() => {
      setIsAnswering(false);
      setConversation((prev) => [...prev, { type: 'answer', text: answer }]);
    }, 1200);
  };

  const initialMessage = {
    type: 'answer' as const,
    text: "Hello Geek. Go ahead and ask a random question to get to know me.",
  };

  return (
    // --- UPDATED: Removed flex properties from the main container ---
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background and particles are fine here */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2A4A] to-[#1F1E33]"></div>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute w-2 h-2 bg-pink-300/20 rounded-full animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s`, animationDuration: `${6 + Math.random() * 4}s` }} />
      ))}
      
      {/* --- UPDATED: A new container whose only job is to center the main text --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:text-left lg:max-w-none lg:pl-24">
          <div className="hero-3d-element mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#FFD6C9] mb-4 animate-fade-in">
              Naga Arundhathi Jampala
              <span className="block text-3xl md:text-4xl font-medium text-gray-300 mt-2">
                Full Stack Developer | AI Builder | DevOps Learner
              </span>
            </h1>
          </div>
          <div className="hero-3d-element mb-8" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-gray-400 animate-fade-in">
              Just a curious mind building things with code, chasing ideas, and occasionally debugging life.
            </p>
          </div>
        </div>
      </div>
      
      {/* Your graphic image can now be positioned safely */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10">
        <img
          src="/6597434.jpg"
          alt="Arundhathi Graphic"
          className="w-[140px] md:w-[160px] lg:w-[280px] rounded-xl shadow-xl animate-fade-in"
        />
      </div>

      {/* Floating shapes are also fine */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 hero-3d-element opacity-10 blur-sm">
        <div className="w-full h-full bg-gradient-to-br from-[#FFAC70] to-[#FFD6C9] rounded-3xl animate-float"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 hero-3d-element opacity-20 blur-sm">
        <div className="w-full h-full bg-gradient-to-br from-[#FFD6C9] to-[#FFAC70] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* The fixed chatbot is also unaffected and safe */}
      <div className="fixed top-1/2 right-6 md:right-10 lg:right-24 transform -translate-y-1/2 z-50">
        <div className="w-80 h-[28rem] bg-black/30 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="flex-shrink-0 p-3 bg-black/20 text-center text-white font-medium">Know me</div>
          <div ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-start">
              <p className="max-w-[80%] text-sm bg-gray-700 text-white p-3 rounded-lg rounded-bl-none">{initialMessage.text}</p>
            </div>
            {conversation.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'question' ? 'justify-end' : 'justify-start'}`}>
                <p className={`max-w-[80%] text-sm p-3 rounded-lg ${msg.type === 'question' ? 'bg-[#FFAC70] text-black rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>{msg.text}</p>
              </div>
            ))}
            {isAnswering && (
              <div className="flex justify-start">
                <div className="bg-gray-700 p-3 rounded-lg rounded-bl-none flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/10">
            <button onClick={handleRandomQuestionClick} className="w-full text-center text-sm text-black bg-gradient-to-r from-[#FFD6C9] to-[#FFAC70] hover:from-[#FFAC70] hover:to-[#FFD6C9] p-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isAnswering}>
              Ask a Random Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;