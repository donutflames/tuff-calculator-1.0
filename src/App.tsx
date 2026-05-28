import { useState, useEffect, useRef } from 'react';
import { 
  Coins, 
  Tv, 
  Skull, 
  TrendingDown, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Trash2, 
  Wifi, 
  Smartphone, 
  Flame, 
  DollarSign, 
  CreditCard,
  X
} from 'lucide-react';

// Floating indicator interface
interface FloatingText {
  id: number;
  text: string;
}

// Ads database list with highly customized comedic visual styling properties
const MEME_ADS = [
  { 
    id: 1,
    title: "dopamine correction system",
    text: "this ad will literally fix your dopamine receptors. click to claim free credits. type shi.", 
    tagline: "sponsored by alpha posture corp",
    reward: 2.50,
    visualType: "looksmaxxing"
  },
  { 
    id: 2,
    title: "aura deficit alert",
    text: "imagine having $0 math credits... absolute zero aura. get your bread up right now.", 
    tagline: "delivered by high frequency trades llc",
    reward: 3.00,
    visualType: "crypto"
  },
  { 
    id: 3,
    title: "account salvage protocol",
    text: "me when i run out of cash for the equals button: 💀. watch this plug to save your credentials.", 
    tagline: "certified by global grinding initiative",
    reward: 5.00,
    visualType: "doomscroll"
  },
  { 
    id: 4,
    title: "cortisol emergency relief",
    text: "bro is cooked. lower your cortisol levels by watching this 5s plug. (+$2.50). real.", 
    tagline: "sponsored by certified ice bath providers",
    reward: 2.50,
    visualType: "biohack"
  },
  { 
    id: 5,
    title: "calculus paywall bypass",
    text: "bro really thought calculating 5+5 was free. watch this plug to clear your debt. no cap.", 
    tagline: "powered by silicon valley breadwinners",
    reward: 2.00,
    visualType: "hustle"
  }
];

export default function App() {
  // Game States
  const [credits, setCredits] = useState<number>(1.25);
  const [aura, setAura] = useState<number>(100);
  const [equationCount, setEquationCount] = useState<number>(0);
  const [lastSaved, setLastSaved] = useState<string>('');

  // Audio system state
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Tabs layout Navigation
  const [activeTab, setActiveTab] = useState<'calculator' | 'wallet'>('calculator');

  // Calculator engine state
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string>('0');
  const [lastOperationWasCalculation, setLastOperationWasCalculation] = useState<boolean>(false);

  // Gate Modal triggered by calculation execution
  const [gateModalOpen, setGateModalOpen] = useState<boolean>(false);
  const [pendingCalculation, setPendingCalculation] = useState<string>('');

  // Ad Popover simulation states
  const [isAdWatching, setIsAdWatching] = useState<boolean>(false);
  const [adTimeLeft, setAdTimeLeft] = useState<number>(5);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  // checkout/payment flow simulation with Bad Connection outcome
  const [isPayingRealMoney, setIsPayingRealMoney] = useState<boolean>(false);
  const [paymentStep, setPaymentStep] = useState<'idle' | 'linking' | 'error'>('idle');

  // Floating micro interaction overlays
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [screenFlash, setScreenFlash] = useState<boolean>(false);

  // Audio context reference
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Safe Audio Synthesizer Beep System
  const triggerSound = (type: 'click' | 'cash' | 'success' | 'fail' | 'adStart' | 'popup') => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'cash') {
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(920, now);
        osc1.frequency.setValueAtTime(1150, now + 0.08);
        gain1.gain.setValueAtTime(0.1, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.4);
      } else if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(880.00, now + 0.16); // A5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'fail') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(75, now + 0.3);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'adStart') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(360, now + 0.15);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'popup') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(520, now + 0.12);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      console.warn("Sound blocked or API context locked", e);
    }
  };

  // Restore game state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pay_2_math_v2');
      if (saved) {
        const data = JSON.parse(saved);
        if (typeof data.credits === 'number') setCredits(data.credits);
        if (typeof data.aura === 'number') setAura(data.aura);
        if (typeof data.equationCount === 'number') setEquationCount(data.equationCount);
      }
    } catch (e) {
      console.warn("Could not retrieve state", e);
    }
  }, []);

  // Save loop every 10 seconds
  useEffect(() => {
    const backupTimer = setInterval(() => {
      try {
        const payload = { credits, aura, equationCount };
        localStorage.setItem('pay_2_math_v2', JSON.stringify(payload));
        const stamp = new Date().toLocaleTimeString('en-US', { hour12: false });
        setLastSaved(stamp);
      } catch (e) {}
    }, 10000);
    return () => clearInterval(backupTimer);
  }, [credits, aura, equationCount]);

  // Haptics controller
  const vibrateTouch = (dur: number = 10) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      try {
        window.navigator.vibrate(dur);
      } catch (e) {}
    }
  };

  // Floating text feedback generator
  const triggerFloatingIndicator = (text: string) => {
    const id = Date.now() + Math.random();
    setFloatingTexts(prev => [...prev, { id, text }]);
    setTimeout(() => {
      setFloatingTexts(prev => prev.filter(t => t.id !== id));
    }, 1200);
  };

  // Standard keyboard helper logic
  const handleDigit = (digit: string) => {
    triggerSound('click');
    vibrateTouch(8);
    if (lastOperationWasCalculation) {
      setCalcInput(digit);
      setLastOperationWasCalculation(false);
    } else {
      setCalcInput(prev => prev + digit);
    }
  };

  const handleOperator = (op: string) => {
    triggerSound('click');
    vibrateTouch(10);
    if (lastOperationWasCalculation) {
      setCalcInput(calcResult + ' ' + op + ' ');
      setLastOperationWasCalculation(false);
    } else {
      const trimmed = calcInput.trim();
      const last = trimmed.slice(-1);
      if (['+', '-', '*', '/'].includes(last)) {
        setCalcInput(trimmed.slice(0, -1) + op + ' ');
      } else {
        setCalcInput(prev => prev + ' ' + op + ' ');
      }
    }
  };

  const handleClear = () => {
    triggerSound('click');
    vibrateTouch(12);
    setCalcInput('');
    setCalcResult('0');
    setLastOperationWasCalculation(false);
  };

  const handleBackspace = () => {
    triggerSound('click');
    vibrateTouch(8);
    setCalcInput(prev => {
      const trimmed = prev.trim();
      if (trimmed.endsWith(' +') || trimmed.endsWith(' -') || trimmed.endsWith(' *') || trimmed.endsWith(' /')) {
        return trimmed.slice(0, -2);
      }
      return prev.slice(0, -1);
    });
  };

  // The critical evaluation phase!
  const triggerEqualsEvaluation = () => {
    if (!calcInput.trim()) return;
    
    // Play sound & trigger the paywall modal
    triggerSound('popup');
    vibrateTouch(20);
    
    // Store the pending equation, trigger the paywall!
    setPendingCalculation(calcInput);
    setGateModalOpen(true);
  };

  // Option A checkout paywall
  const handlePayRealMoneyButton = () => {
    triggerSound('click');
    setIsPayingRealMoney(true);
    setPaymentStep('linking');
    
    // Wait 2.2 seconds to simulate loading, then crash with WiFi bad connection error
    setTimeout(() => {
      setPaymentStep('error');
      triggerSound('fail');
      vibrateTouch(150);
    }, 2200);
  };

  // Option B watch ad countdown
  const handleWatchAdButton = () => {
    triggerSound('adStart');
    vibrateTouch(25);
    
    // Choose a random ad index from our array
    const randomIndex = Math.floor(Math.random() * MEME_ADS.length);
    setCurrentAdIndex(randomIndex);
    
    // Reset timer
    setAdTimeLeft(5);
    setGateModalOpen(false);
    setIsAdWatching(true);

    const interval = setInterval(() => {
      setAdTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Finish watching ad stream, award user
  const dismissAdAndReward = () => {
    setIsAdWatching(false);
    setScreenFlash(true);
    setTimeout(() => setScreenFlash(false), 300);

    const activeAd = MEME_ADS[currentAdIndex];
    setCredits(prev => {
      const next = Math.round((prev + activeAd.reward) * 100) / 100;
      return next;
    });
    setAura(prev => prev + 25);
    
    triggerFloatingIndicator(`+$${activeAd.reward.toFixed(2)}`);
    triggerSound('cash');
    vibrateTouch(40);

    // If there was a pending calculation, solve it now that they paid with their attention!
    if (pendingCalculation) {
      resolvePendingCalculation();
    }
  };

  const resolvePendingCalculation = () => {
    try {
      const sanitized = pendingCalculation.replace(/[^0-9+\-*/(). ]/g, '');
      if (!sanitized) {
        setCalcResult('error');
        return;
      }
      const answer = new Function(`return (${sanitized})`)();
      setCalcResult(String(answer));
      setEquationCount(prev => prev + 1);
      setLastOperationWasCalculation(true);
      triggerSound('success');
    } catch (e) {
      setCalcResult('syntax error');
      triggerSound('fail');
    }
    setPendingCalculation('');
  };

  // Direct Ad grinding clicker from the Wallet page
  const startStandaloneAdGrind = () => {
    setPendingCalculation(''); // no equation pending, just grinding
    handleWatchAdButton();
  };

  const clearSaveMemory = () => {
    if (window.confirm("reset math database back to peasant ratios?")) {
      localStorage.removeItem('pay_2_math_v2');
      setCredits(1.25);
      setAura(100);
      setEquationCount(0);
      setCalcInput('');
      setCalcResult('0');
      triggerSound('fail');
    }
  };

  return (
    <div className="bg-[#050609] text-zinc-300 font-sans min-h-screen flex flex-col justify-between py-6 px-4 md:px-8 tracking-tight selection:bg-amber-500/30">
      
      {/* 1. FLASH SCREEN LEVEL */}
      {screenFlash && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-white/25 transition-opacity duration-300" />
      )}

      {/* FLOAT CHIP FEEDBACKS */}
      <div className="fixed top-6 right-6 z-40 pointer-events-none flex flex-col gap-2">
        {floatingTexts.map(t => (
          <div 
            key={t.id} 
            className="text-emerald-400 font-mono text-xs font-bold bg-zinc-950/90 border border-emerald-500/20 px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)] animate-bounce"
          >
            {t.text}
          </div>
        ))}
      </div>

      {/* 2. MAIN HEADER HUD */}
      <header className="max-w-md w-full mx-auto flex items-center justify-between border-b border-zinc-900 pb-4 mb-2 select-none">
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-500 animate-pulse" /> pay 2 math
          </h1>
          <p className="text-[10px] text-zinc-500 font-mono mt-0.5 lowercase">
            the ultimate pay-per-click calculation platform.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-1">
          {/* AUDIO SWITCH */}
          <button 
            onClick={() => { setIsMuted(!isMuted); triggerSound('click'); }}
            className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-500 hover:text-white rounded-lg transition-all"
            title="toggle synthesizer audio"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-zinc-400" />}
          </button>
        </div>
      </header>

      {/* 3. DOCK SUBPAGES (SWITCH TABS) */}
      <main className="flex-1 flex flex-col justify-center max-w-md w-full mx-auto py-4">
        
        {/* VIEW A: THE MINIMAL CLINICAL CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="w-full flex flex-col gap-4 animate-fadeIn">
            
            {/* CALCULATOR DISPLAY MODULE */}
            <div className="bg-[#0b0c10] border border-zinc-900 rounded-3xl p-5 relative flex flex-col justify-between h-36 text-right overflow-hidden shadow-[inset_0_2px_12px_rgba(0,0,0,0.8)]">
              {/* Dynamic live rating badge */}
              <div className="text-[9.5px] font-mono text-zinc-600 tracking-wider flex items-center justify-between absolute top-3.5 left-5 right-5 select-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  math index live
                </span>
                <span>bal: ${credits.toFixed(2)}</span>
              </div>

              {/* Current input stack */}
              <div className="text-zinc-500 font-mono text-xs tracking-wider mt-5 overflow-x-hidden text-ellipsis whitespace-nowrap">
                {calcInput || 'empty buffer'}
              </div>

              {/* Solved result */}
              <div className="text-3xl font-mono tracking-tighter text-white font-semibold select-all overflow-x-auto whitespace-nowrap scrollbar-none">
                {calcResult}
              </div>
            </div>

            {/* KEYBOARD TARGET GRID */}
            <div className="grid grid-cols-4 gap-2.5">
              
              {/* ROW 1: CONTROLS */}
              <button 
                onClick={handleClear}
                className="bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 py-4 rounded-2xl font-mono text-xs border border-zinc-900 transition-all font-semibold active:scale-95"
              >
                ac
              </button>
              <button 
                onClick={handleBackspace}
                className="bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 py-4 rounded-2xl font-mono text-xs border border-zinc-900 transition-all font-semibold active:scale-95"
              >
                c
              </button>
              <div className="bg-[#090a0f]/20 rounded-2xl border border-zinc-950/40 flex items-center justify-center text-zinc-800 font-mono text-[10px] select-none cursor-not-allowed">
                N/A
              </div>
              <button 
                onClick={() => handleOperator('/')}
                className="bg-zinc-900/30 hover:bg-zinc-800/40 text-amber-500/90 font-mono py-4 rounded-2xl border border-zinc-900 font-semibold transition-all active:scale-95"
              >
                /
              </button>

              {/* ROW 2 */}
              <button 
                onClick={() => handleDigit('7')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                7
              </button>
              <button 
                onClick={() => handleDigit('8')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                8
              </button>
              <button 
                onClick={() => handleDigit('9')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                9
              </button>
              <button 
                onClick={() => handleOperator('*')}
                className="bg-zinc-900/30 hover:bg-zinc-800/40 text-amber-500/90 font-mono py-4 rounded-2xl border border-zinc-900 font-semibold transition-all active:scale-95"
              >
                *
              </button>

              {/* ROW 3 */}
              <button 
                onClick={() => handleDigit('4')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                4
              </button>
              <button 
                onClick={() => handleDigit('5')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                5
              </button>
              <button 
                onClick={() => handleDigit('6')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                6
              </button>
              <button 
                onClick={() => handleOperator('-')}
                className="bg-zinc-900/30 hover:bg-zinc-800/40 text-amber-500/90 font-mono py-4 rounded-2xl border border-zinc-900 font-semibold transition-all active:scale-95"
              >
                -
              </button>

              {/* ROW 4 */}
              <button 
                onClick={() => handleDigit('1')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                1
              </button>
              <button 
                onClick={() => handleDigit('2')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                2
              </button>
              <button 
                onClick={() => handleDigit('3')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                3
              </button>
              <button 
                onClick={() => handleOperator('+')}
                className="bg-zinc-900/30 hover:bg-zinc-800/40 text-amber-500/90 font-mono py-4 rounded-2xl border border-zinc-900 font-semibold transition-all active:scale-95"
              >
                +
              </button>

              {/* ROW 5 */}
              <button 
                onClick={() => handleDigit('0')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                0
              </button>
              <button 
                onClick={() => handleDigit('.')}
                className="bg-[#0c0d12] hover:bg-[#121319] text-zinc-150 font-mono font-medium py-4 rounded-2xl border border-zinc-900/60 transition-all active:scale-95 text-sm"
              >
                .
              </button>

              {/* EQUALS ACTUATOR TARGET BAR */}
              <button 
                onClick={triggerEqualsEvaluation}
                className="col-span-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-semibold py-4 rounded-2xl transition-all active:scale-95 text-base shadow-[0_4px_20px_rgba(245,158,11,0.25)] border border-amber-500"
              >
                =
              </button>
            </div>

            {/* PEASANT DISCLOSURE NOTE */}
            <p className="text-[10.5px] font-mono text-zinc-600 text-center select-none leading-relaxed mt-2 italic px-4">
              *each calculation is processed on cloud servers. operator calculation request costs fake math currency.
            </p>
          </div>
        )}

        {/* VIEW B: THE FINANCIAL PORTFOLIO (WALLET) */}
        {activeTab === 'wallet' && (
          <div className="w-full flex flex-col gap-4 animate-fadeIn select-none">
            
            {/* PORTFOLIO CARD DISPLAY */}
            <div className="bg-gradient-to-br from-[#0c0e14] to-[#040508] border border-zinc-900 rounded-3xl p-6 relative overflow-hidden">
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest block uppercase mb-1">active account leverage</span>
              
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-4xl font-bold font-mono tracking-tighter text-emerald-400 animate-pulse">
                  ${credits.toFixed(2)}
                </span>
                <span className="text-xs text-zinc-500 font-mono">math credits</span>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-zinc-900 text-xs font-mono">
                <div>
                  <span className="text-zinc-600 block text-[9.5px]">calculated operations</span>
                  <span className="text-white font-semibold text-sm">{equationCount}</span>
                </div>
                <div className="w-px h-8 bg-zinc-900" />
                <div>
                  <span className="text-zinc-600 block text-[9.5px]">mindset status bonus</span>
                  <span className="text-amber-500 font-semibold text-sm">+{aura} aura rating</span>
                </div>
              </div>
            </div>

            {/* GRIND STATION AD GENERATION TRIGGER */}
            <div className="border border-zinc-900 bg-zinc-950 rounded-2xl p-4 flex flex-col gap-3">
              <div>
                <p className="text-sm font-semibold text-white lowercase">math credit faucet</p>
                <p className="text-[10px] text-zinc-500 font-mono mt-0.5 leading-relaxed">
                  running dry on math money? trigger our verified dopamine plug stream terminal below to increase your cash flow.
                </p>
              </div>

              <button 
                onClick={startStandaloneAdGrind}
                className="w-full py-3 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 border-b-2 border-emerald-800 shadow-md"
              >
                <Tv className="w-4 h-4 animate-pulse" /> watch ads
              </button>
            </div>

            {/* SOLEMN BYPASS - COMEDIENNE WIFI REJECTION PANEL */}
            <div className="border border-zinc-900 bg-[#090a0f] rounded-2xl p-4 flex flex-col gap-3">
              <div>
                <span className="bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded text-[8.5px] font-mono uppercase font-bold tracking-wider inline-block mb-1">hustler VIP bypass</span>
                <p className="text-sm font-semibold text-white lowercase">buy premium credits packet</p>
                <p className="text-[10px] text-zinc-500 font-mono mt-0.5 leading-relaxed">
                  unlock instant infinity calculations. standard real credit card processing terminals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <button 
                  onClick={handlePayRealMoneyButton}
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-center text-zinc-300 hover:text-white transition-all active:scale-95"
                >
                  $1.99 (+$20 math)
                </button>
                <button 
                  onClick={handlePayRealMoneyButton}
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-center text-zinc-300 hover:text-white transition-all active:scale-95"
                >
                  $4.99 (+$100 VIP)
                </button>
              </div>
            </div>

            {/* SEVER PANEL REPAIR */}
            <div className="flex justify-between items-center text-[10px] text-zinc-600 font-mono px-1 select-none">
              <span>db: local_sync</span>
              <button 
                onClick={clearSaveMemory}
                className="hover:text-red-400 transition-all flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" /> erase cache
              </button>
            </div>

          </div>
        )}

      </main>

      {/* 4. DOCK SYSTEM TABS NAVIGATION */}
      <nav className="max-w-md w-full mx-auto flex gap-2 pt-2 border-t border-zinc-900 select-none">
        <button 
          onClick={() => { setActiveTab('calculator'); triggerSound('click'); vibrateTouch(8); }}
          className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-2 ${activeTab === 'calculator' ? 'bg-[#15161e] text-white border border-zinc-800 font-semibold' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <Smartphone className="w-4 h-4" /> calculator
        </button>
        <button 
          onClick={() => { setActiveTab('wallet'); triggerSound('click'); vibrateTouch(8); }}
          className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-2 ${activeTab === 'wallet' ? 'bg-[#15161e] text-white border border-zinc-800 font-semibold' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          <Coins className="w-4 h-4" /> my wallet
        </button>
      </nav>

      {/* 5. PAYWALL INTERRUPTION DIALOG (MODAL) */}
      {gateModalOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b0c10] border border-zinc-800 hover:border-zinc-700/80 rounded-3xl p-6 max-w-sm w-full shadow-2xl animate-scaleUp text-center relative overflow-hidden">
            
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-850">
                <Skull className="w-8 h-8 text-rose-500 animate-bounce" />
              </div>
            </div>

            <span className="text-[10px] font-mono text-rose-500 tracking-widest block uppercase mb-1">insufficient credits</span>
            <h2 className="text-xl font-bold tracking-tighter text-white font-sans">
              get your bread up right now.
            </h2>
            
            <p className="text-xs text-zinc-400 font-mono mt-3 leading-relaxed lowercase">
              calculating <span className="text-amber-400 font-semibold italic">"{pendingCalculation.trim() || '...'}"</span> on our servers is not free. your account level lacks premium math aura.
            </p>

            {/* SELECTION MODES */}
            <div className="flex flex-col gap-2.5 mt-6">
              
              {/* WATCH ADS BUTTON COMPLETED TO RESOLVE MATH */}
              <button 
                onClick={handleWatchAdButton}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-mono text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 border-b-2 border-emerald-800 shadow-md"
              >
                <Tv className="w-4 h-4 animate-pulse" /> watch free 5s ad plug (+${MEME_ADS[0].reward.toFixed(2)})
              </button>

              {/* REAL PAYMENT FAILURE ATTEMPT TRIGGERS WIFI COMPLAINT */}
              <button 
                onClick={handlePayRealMoneyButton}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-xl font-mono text-xs transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4 text-zinc-400" /> pay real money ($0.99)
              </button>

              <button 
                onClick={() => {
                  setGateModalOpen(false);
                  setPendingCalculation('');
                  triggerSound('click');
                  vibrateTouch(10);
                }}
                className="text-[10.5px] font-mono text-zinc-650 hover:text-zinc-400 transition-all mt-1"
              >
                cancel calculation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. IMMERSIVE FULLSCREEN 5-SECOND AD WINDOW DISPLAY PREVIEW */}
      {isAdWatching && (
        <div className="fixed inset-0 z-50 bg-[#08090d] flex flex-col justify-between p-6 select-none animate-fadeIn">
          
          {/* Top telemetry ad label */}
          <div className="flex items-center justify-between text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            <span>sponsor broadcast system</span>
            <span className="text-amber-500 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 lowercase">
              <Tv className="w-3 h-3 text-amber-500 animate-spin" /> reward pending...
            </span>
          </div>

          {/* Core funny video card wrapper */}
          <div className="max-w-sm w-full mx-auto my-auto bg-gradient-to-tr from-[#0e111a] to-[#06070a] border border-zinc-800 rounded-3xl p-6 relative shadow-2xl flex flex-col gap-6 select-none text-center">
            
            <div className="flex justify-center">
              <span className="p-3 bg-amber-500/5 text-amber-400 rounded-full border border-amber-500/10 animate-pulse text-xs tracking-mono">
                {MEME_ADS[currentAdIndex].visualType === 'looksmaxxing' && "🤫 looksmaxxing protocol active"}
                {MEME_ADS[currentAdIndex].visualType === 'crypto' && "📈 crypto compound system"}
                {MEME_ADS[currentAdIndex].visualType === 'doomscroll' && "💀 dopamine booster locked"}
                {MEME_ADS[currentAdIndex].visualType === 'biohack' && "🧊 ice bath cortisol block"}
                {MEME_ADS[currentAdIndex].visualType === 'hustle' && "⚡ 100x leverage optimizer"}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {MEME_ADS[currentAdIndex].tagline}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug lowercase mt-2">
                {MEME_ADS[currentAdIndex].title}
              </h3>
              
              <div className="bg-black/80 rounded-2xl p-4 border border-zinc-900 relative mt-4">
                <p className="text-base text-zinc-300 font-sans leading-relaxed tracking-tight lowercase">
                  “{MEME_ADS[currentAdIndex].text}”
                </p>
              </div>
            </div>

            {/* Fake progress bar */}
            <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-zinc-900">
              <div 
                className="bg-emerald-500 h-full transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${((5 - adTimeLeft) / 5) * 100}%` }}
              />
            </div>
            
            <p className="text-[10px] font-mono text-zinc-500">
              your mathematical intelligence is currently sponsored.
            </p>
          </div>

          {/* Bottom Countdown closure label */}
          <div className="flex justify-center items-center select-none">
            {adTimeLeft > 0 ? (
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs px-5 py-2.5 rounded-full tracking-wide">
                this ad will close in <span className="text-amber-500 font-bold">{adTimeLeft}s</span>...
              </span>
            ) : (
              <button 
                onClick={dismissAdAndReward}
                className="bg-emerald-500 text-slate-950 font-mono text-xs px-6 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-bounce flex items-center gap-1.5"
              >
                <X className="w-4 h-4" /> dismiss ad & claim bonus
              </button>
            )}
          </div>
        </div>
      )}

      {/* 7. CHECKOUT FLOW DIALOG (WIFI EMBARASSMENT TRIGGER) */}
      {isPayingRealMoney && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b0c10] border border-zinc-800 rounded-3xl p-6 max-w-sm w-full text-center relative">
            
            {paymentStep === 'linking' && (
              <div className="flex flex-col items-center py-6">
                <div className="w-10 h-10 border-2 border-t-amber-500 border-r-zinc-800 border-b-zinc-800 border-l-zinc-800 rounded-full animate-spin mb-4" />
                <p className="text-sm font-semibold text-white lowercase">connecting with financial gateway...</p>
                <p className="text-[10px] text-zinc-500 font-mono mt-1">establishing safe token routing...</p>
              </div>
            )}

            {paymentStep === 'error' && (
              <div className="flex flex-col items-center select-none">
                <div className="p-3 bg-red-950/10 border border-red-500/20 text-red-500 rounded-2xl mb-4">
                  <Wifi className="w-8 h-8 text-rose-500 animate-pulse" />
                </div>
                
                <span className="text-[9.5px] font-mono text-red-500 tracking-widest block uppercase mb-1">payment server timeout</span>
                <h3 className="text-base font-bold text-white lowercase">your connection speed is cooked.</h3>
                
                <p className="text-xs text-zinc-400 font-mono text-center leading-relaxed mt-3 lowercase">
                  our checkout host suggester tells us your wifi router has gone stale or absolute zero broadband. please get your broadband situated or move closer to high-aura coverage before attempting to pay the developers. no cap.
                </p>

                <div className="flex flex-col gap-2 w-full mt-6">
                  {/* Redirect user back to watching normal free ads */}
                  <button 
                    onClick={() => {
                      setIsPayingRealMoney(false);
                      setPaymentStep('idle');
                      triggerSound('click');
                    }}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl font-mono text-xs transition-all border border-zinc-800"
                  >
                    try watching normal ads instead
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
