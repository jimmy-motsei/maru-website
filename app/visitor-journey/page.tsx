import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, TrendingUp, Zap, Users, Award, ArrowRight, Mail, Check, X, FileText, Calendar, MessageSquare, BarChart3, AlertCircle } from 'lucide-react';

const MaruVisitorJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: ''
  });
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [leadScore] = useState(78);

  const steps = [
    { id: 0, name: 'Homepage Landing', color: 'blue' },
    { id: 1, name: 'Tool Landing Page', color: 'purple' },
    { id: 2, name: 'Email Capture', color: 'green' },
    { id: 3, name: 'Tool Questions', color: 'orange' },
    { id: 4, name: 'AI Analysis', color: 'red' },
    { id: 5, name: 'Results Dashboard', color: 'indigo' },
    { id: 6, name: 'Follow-up Sequence', color: 'pink' }
  ];

  useEffect(() => {
    if (currentStep === 0) {
      const timer = setTimeout(() => setShowExitIntent(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 4 && analysisStep > 0 && analysisStep < 5) {
      const timer = setTimeout(() => setAnalysisStep(analysisStep + 1), 1500);
      return () => clearTimeout(timer);
    }
    if (analysisStep === 5) {
      setTimeout(() => setCurrentStep(5), 1000);
    }
  }, [analysisStep, currentStep]);

  const HomePage = () => (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Maru Online</div>
          <div className="flex gap-6 text-sm">
            <a className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</a>
            <a className="text-gray-700 hover:text-blue-600 cursor-pointer">Case Studies</a>
            <a className="text-gray-700 hover:text-blue-600 cursor-pointer">AI Tools</a>
            <a className="text-gray-700 hover:text-blue-600 cursor-pointer">Blog</a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              🚀 Free AI-Powered Lead Analysis
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Website Into a Lead Generation Machine
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              B2B companies using our AI tools see 5-6x conversion increases. Get your free lead score analysis in 2 minutes.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentStep(1)}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
              >
                Try Lead Score Predictor Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600">
                Watch Demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Results in 2 minutes
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-2">5-6x</div>
              <div className="text-gray-700">Average Conversion Increase</div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Leads Generated</span>
                <span className="font-bold text-green-600">+320%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Website Conversion</span>
                <span className="font-bold text-green-600">1% → 6%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-700">Sales Pipeline Value</span>
                <span className="font-bold text-green-600">+R2.4M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-600 mb-4">TRUSTED BY LEADING B2B COMPANIES</div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'Sarah M.', role: 'VP Marketing, TechCorp', text: 'Our lead volume increased 280% in 3 months. The AI tools are game-changing.' },
                { name: 'John K.', role: 'CEO, SalesForce Pro', text: 'Finally, a system that actually delivers qualified leads. ROI was 8x in year one.' },
                { name: 'Lisa T.', role: 'Head of Sales, DataDrive', text: 'We went from 5 leads per month to 45 SQLs. Best investment we have made.' }
              ].map((testimonial, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{testimonial.text}</p>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Free AI-Powered Tools</h2>
          <p className="text-xl text-gray-600">Get instant insights about your lead generation system</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: 'Lead Score Predictor', icon: TrendingUp, desc: 'Analyze your website and get a lead generation score 0 to 100', cta: 'Get My Score' },
            { name: 'Pipeline Leak Detector', icon: AlertCircle, desc: 'Upload your CRM data and find where deals are stalling', cta: 'Find Leaks' },
            { name: 'Proposal Accelerator', icon: FileText, desc: 'Generate winning proposals in minutes with AI', cta: 'Create Proposal' },
            { name: 'Tech Stack Auditor', icon: BarChart3, desc: 'Identify redundant tools and save on software costs', cta: 'Audit Stack' }
          ].map((tool, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => i === 0 && setCurrentStep(1)}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <tool.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-lg text-gray-900">{tool.name}</div>
              </div>
              <p className="text-gray-600 mb-4">{tool.desc}</p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
                {tool.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">Ready to 5x your leads?</div>
            <div className="text-sm text-blue-100">Get your free AI analysis in 2 minutes</div>
          </div>
          <button 
            onClick={() => setCurrentStep(1)}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
            Start Free Analysis
          </button>
        </div>
      </div>

      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md relative">
            <button 
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Wait! Before You Go...</h3>
              <p className="text-gray-600 mb-6">
                Get a free website analysis worth R2,500. See exactly how to 5x your lead generation in the next 90 days.
              </p>
              <button 
                onClick={() => {
                  setShowExitIntent(false);
                  setCurrentStep(1);
                }}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 mb-3">
                Yes, Analyze My Website Free
              </button>
              <button 
                onClick={() => setShowExitIntent(false)}
                className="text-sm text-gray-500 hover:text-gray-700">
                No thanks, I do not want more leads
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const ToolLandingPage = () => (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Maru Online</div>
          <button onClick={() => setCurrentStep(0)} className="text-sm text-gray-600 hover:text-gray-900">
            Back to Home
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold mb-4">
            FREE AI-POWERED TOOL
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Lead Score Predictor
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Discover your website lead generation potential in just 2 minutes
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">2 min</div>
              <div className="text-sm text-gray-600">to complete</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">0-100</div>
              <div className="text-sm text-gray-600">score range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">free forever</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Will Get:</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { icon: BarChart3, title: 'Lead Generation Score', desc: 'Comprehensive 0-100 rating of your current system' },
              { icon: AlertCircle, title: 'Gap Analysis', desc: 'Identify exactly what is missing from your funnel' },
              { icon: TrendingUp, title: 'Growth Roadmap', desc: 'Step-by-step plan to increase conversions 5-6x' },
              { icon: FileText, title: 'Custom PDF Report', desc: 'Detailed analysis you can share with your team' }
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setCurrentStep(2)}
            className="w-full py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 flex items-center justify-center gap-2">
            Start My Free Analysis <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const EmailCapture = () => (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-6">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Unlock Your Free Analysis
            </h2>
            <p className="text-gray-600">
              Enter your email to access the Lead Score Predictor and get your personalized results
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Your Company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <button 
            onClick={() => formData.email && formData.name && formData.company && setCurrentStep(3)}
            disabled={!formData.email || !formData.name || !formData.company}
            className="w-full py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            Continue to Analysis <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
            <Check className="w-4 h-4 text-green-600" />
            <span>We will email you the results. No spam, unsubscribe anytime.</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ToolQuestions = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
      { q: "What is your website URL?", type: "text" },
      { q: "What is your role?", type: "select", options: ["CEO or Founder", "Marketing Director", "Sales Leader", "Other"] },
      { q: "Company size?", type: "select", options: ["1-10", "11-50", "51-200", "200+"] },
      { q: "Monthly website visitors?", type: "select", options: ["Under 500", "500-2K", "2K-10K", "10K+" ]}
    ];

    return (
      <div className="bg-gradient-to-br from-orange-50 to-purple-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full mx-6">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {questionIndex + 1} of {questions.length}</span>
                <span>{Math.round(((questionIndex + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[questionIndex].q}
              </h2>

              {questions[questionIndex].type === "text" && (
                <input
                  type="text"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  onChange={(e) => setAnswers({...answers, [questionIndex]: e.target.value})}
                />
              )}

              {questions[questionIndex].type === "select" && (
                <div className="space-y-3">
                  {questions[questionIndex].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => setAnswers({...answers, [questionIndex]: option})}
                      className={`w-full px-6 py-4 rounded-lg border-2 text-left font-medium transition-all ${
                        answers[questionIndex] === option
                          ? 'border-orange-500 bg-orange-50 text-orange-900'
                          : 'border-gray-300 hover:border-orange-300 text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              {questionIndex > 0 && (
                <button
                  onClick={() => setQuestionIndex(questionIndex - 1)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400"
                >
                  Previous
                </button>
              )}
              <button
                onClick={() => {
                  if (questionIndex < questions.length - 1) {
                    setQuestionIndex(questionIndex + 1);
                  } else {
                    setCurrentStep(4);
                    setAnalysisStep(1);
                  }
                }}
                disabled={!answers[questionIndex]}
                className="flex-1 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {questionIndex < questions.length - 1 ? 'Next Question' : 'Analyze My Website'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AIAnalysis = () => {
    const steps = [
      { label: 'Connecting to website...', icon: BarChart3 },
      { label: 'Analyzing content and structure...', icon: TrendingUp },
      { label: 'Evaluating conversion points...', icon: AlertCircle },
      { label: 'Detecting optimization gaps...', icon: Zap },
      { label: 'Generating recommendations...', icon: FileText }
    ];

    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full mx-6">
          <div className="bg-white rounded-xl shadow-2xl p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-red-600 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                AI Analysis In Progress
              </h2>
              <p className="text-gray-600">
                Our AI is analyzing your website and generating your personalized score...
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                    i < analysisStep
                      ? 'bg-green-50 border-2 border-green-500'
                      : i === analysisStep
                      ? 'bg-red-50 border-2 border-red-500'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i < analysisStep
                      ? 'bg-green-500'
                      : i === analysisStep
                      ? 'bg-red-500'
                      : 'bg-gray-300'
                  }`}>
                    {i < analysisStep ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <step.icon className={`w-6 h-6 ${i === analysisStep ? 'text-white animate-pulse' : 'text-gray-500'}`} />
                    )}
                  </div>
                  <span className={`font-medium ${
                    i < analysisStep ? 'text-green-900' : i === analysisStep ? 'text-red-900' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center text-sm text-gray-600">
              This usually takes 30-45 seconds...
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ResultsDashboard = () => {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
        <nav className="bg-white shadow-sm p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Maru Online</div>
            <div className="text-sm text-gray-600">
              Logged in as: {formData.email}
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {formData.company} Lead Generation Score
              </h1>
              <p className="text-gray-600">Based on AI analysis of your website</p>
            </div>

            <div className="flex items-center justify-center gap-12 mb-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#e5e7eb"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#6366f1"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${leadScore * 5.024} 502.4`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-6xl font-bold text-indigo-600">{leadScore}</div>
                      <div className="text-gray-600">out of 100</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 w-40">Website Quality</span>
                  <div className="w-64 bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-gray-900 font-bold w-12 text-right">85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 w-40">Conversion Points</span>
                  <div className="w-64 bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{width: '62%'}}></div>
                  </div>
                  <span className="text-gray-900 font-bold w-12 text-right">62</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 w-40">Lead Capture</span>
                  <div className="w-64 bg-gray-200 rounded-full h-4">
                    <div className="bg-orange-500 h-4 rounded-full" style={{width: '54%'}}></div>
                  </div>
                  <span className="text-gray-900 font-bold w-12 text-right">54</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">+42pts</div>
                <div className="text-sm text-gray-600">Potential Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">5-6x</div>
                <div className="text-sm text-gray-600">Expected Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">90 days</div>
                <div className="text-sm text-gray-600">To Achieve Results</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-3">Download Full Report</h3>
              <p className="mb-6">Get the complete 15-page PDF analysis with detailed recommendations</p>
              <button 
                onClick={() => setCurrentStep(6)}
                className="w-full py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Download PDF Report
              </button>
            </div>

            <div className="bg-white border-2 border-indigo-600 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Book Strategy Call</h3>
              <p className="text-gray-700 mb-6">Discuss how to implement these recommendations and hit your 5-6x growth target</p>
              <button 
                onClick={() => setCurrentStep(6)}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FollowUpSequence = () => {
    return (
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 pt-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Automated Follow-Up Sequence
            </h1>
            <p className="text-xl text-gray-600">
              What happens behind the scenes after {formData.name || 'a visitor'} completes the tool
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                day: 'Day 0',
                subject: 'Your Lead Score Results',
                content: 'Thanks for using the Lead Score Predictor! Your score: 78 out of 100. Here is your personalized PDF report with action plan...',
                actions: ['PDF attached', 'Results dashboard link', 'CRM: Lead created', 'Tag: Tool User']
              },
              {
                day: 'Day 3',
                subject: 'How Company X Increased Leads 280%',
                content: 'Case study showing exactly how a similar company implemented our recommendations and achieved 5x growth...',
                actions: ['CRM: Engagement tracked', 'Lead score: +5 points', 'Tag: Case Study Reader']
              },
              {
                day: 'Day 7',
                subject: 'Ready to discuss your roadmap?',
                content: 'Book a free 30-minute strategy session. We will create a custom plan for your specific situation...',
                actions: ['Booking link included', 'If booked: Tag SQL', 'Calendar integration']
              },
              {
                day: 'Day 14',
                subject: 'Last chance: Free consultation',
                content: 'Final reminder about your free strategy session. This offer expires in 48 hours...',
                actions: ['Urgency messaging', 'Alternative: Tool 2 offer', 'If no response: Cold sequence']
              }
            ].map((email, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-sm text-pink-600 font-semibold">{email.day}</div>
                        <div className="text-lg font-bold text-gray-900">{email.subject}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{email.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {email.actions.map((action, j) => (
                        <span key={j} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Behind The Scenes: Lead Scoring</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Completed tool</span>
                <span className="font-bold text-green-600">+20 points</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Opened Day 3 email</span>
                <span className="font-bold text-green-600">+5 points</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Downloaded PDF</span>
                <span className="font-bold text-green-600">+10 points</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                <span className="text-gray-700">Booked consultation</span>
                <span className="font-bold text-green-600">+30 points - SQL Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Maru Website Visitor Journey Demo</h1>
          <p className="text-blue-100">Click through each stage to experience the complete flow</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                currentStep === step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {step.id + 1}. {step.name}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-y-auto">
        {currentStep === 0 && <HomePage />}
        {currentStep === 1 && <ToolLandingPage />}
        {currentStep === 2 && <EmailCapture />}
        {currentStep === 3 && <ToolQuestions />}
        {currentStep === 4 && <AIAnalysis />}
        {currentStep === 5 && <ResultsDashboard />}
        {currentStep === 6 && <FollowUpSequence />}
      </div>
    </div>
  );
};

export default MaruVisitorJourney;
