'use client';

import ModalForm from "@/components/ui/ModalForm";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Award,
  Target,
  Zap,
  MessageCircle,
  Phone,
  Code,
  Megaphone,
  TrendingUp,
  PenTool,
  Database,
  MessageSquare,
  Palette,
  FileText,
  Clock,
  IndianRupee,
  Video,
  Shield,
  Star,
  Gift,
  UserCheck,
} from "lucide-react"

export default function CareerCreatorsLanding() {

const [showModal, setShowModal] = useState(false);


  const domains = [
    {
      name: "Web Development",
      icon: Code,
      tools: "HTML, CSS, JavaScript, React",
      ideal: "Perfect for BCA/BTech students",
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "Digital Marketing",
      icon: Megaphone,
      tools: "SEO, Social Media, Google Ads",
      ideal: "Great for BBA/BCom students",
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "Sales & Business",
      icon: TrendingUp,
      tools: "CRM, Lead Gen, Negotiation",
      ideal: "Ideal for BBA/MBA students",
      color: "bg-green-50 border-green-200",
    },
    {
      name: "Content Writing",
      icon: PenTool,
      tools: "Copywriting, Blogs, Social Copy",
      ideal: "Perfect for BA/English students",
      color: "bg-purple-50 border-purple-200",
    },
    {
      name: "CRM Management",
      icon: Database,
      tools: "Salesforce, HubSpot, Analytics",
      ideal: "Great for BCom/BBA students",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      name: "Business Communication",
      icon: MessageSquare,
      tools: "Presentations, Emails, Reports",
      ideal: "Essential for all streams",
      color: "bg-teal-50 border-teal-200",
    },
    {
      name: "Graphic Design",
      icon: Palette,
      tools: "Canva, Figma, Brand Design",
      ideal: "Creative for all backgrounds",
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "Documentation",
      icon: FileText,
      tools: "Technical Writing, SOPs",
      ideal: "Perfect for detail-oriented students",
      color: "bg-yellow-50 border-yellow-200",
    },
  ]

  const valueProps = [
    {
      icon: Award,
      title: "Internship Offer Letter & Certificate",
      description: "Get real internship experience with verified certificates",
    },
    {
      icon: Target,
      title: "Real Startup-Based Projects",
      description: "Work on actual projects, not theoretical assignments",
    },
    {
      icon: Users,
      title: "Resume & LinkedIn Optimization",
      description: "Stand out with professionally crafted profiles",
    },
    {
      icon: MessageCircle,
      title: "Mock Interviews + Soft Skills",
      description: "Build confidence with real interview practice",
    },
    {
      icon: FileText,
      title: "College-Required Documents",
      description: "Progress reports, timesheets, and completion certificates",
    },
  ]

  const weeklyPlan = [
    {
      week: "Week 1",
      title: "Foundation & Setup",
      content: "Domain basics, tool setup, first project brief, soft skills intro",
    },
    {
      week: "Week 2",
      title: "Hands-On Learning",
      content: "Live project work, mentor guidance, portfolio building starts",
    },
    {
      week: "Week 3",
      title: "Real-World Application",
      content: "Advanced techniques, mock interviews, LinkedIn optimization",
    },
    {
      week: "Week 4",
      title: "Certification & Placement",
      content: "Project completion, certificate generation, internship placement",
    },
  ]

  const whyUs = [
    {
      icon: Users,
      title: "Built by Tier 2/3 College Alumni",
      description: "We've been where you are. We know the struggle.",
    },
    {
      icon: Zap,
      title: "No Fluff, Pure Practical Training",
      description: "Skip the theory. Get straight to skills that matter.",
    },
    {
      icon: Shield,
      title: "College-Accepted Format",
      description: "All documents meet college internship requirements.",
    },
    {
      icon: IndianRupee,
      title: "Affordable on Purpose",
      description: "No ₹30k fake programs. Real value at student prices.",
    },
  ]

  const bonuses = [
    "Intern Ninja Program access (DFY internship application support)",
    "Personal branding workshop",
    "Lifetime access to recordings",
    "Earn cash via referral program",
  ]

  const faqs = [
    {
      question: "Will my college accept this internship?",
      answer:
        "Yes! We provide all required documents including offer letters, progress reports, timesheets, and completion certificates that meet college standards.",
    },
    {
      question: "Do I get lifetime access to materials?",
      answer:
        "You get lifetime access to all recorded sessions, resources, and materials even after program completion.",
    },
    {
      question: "What if I miss a live class?",
      answer:
        "No worries! All sessions are recorded and available within 24 hours. Plus, you can always catch up with our mentors.",
    },
    {
      question: "Is this really beginner-friendly?",
      answer: "100%! We start from absolute basics. No prior experience needed. Our mentors guide you step-by-step.",
    },
    {
      question: "How is this different from other programs?",
      answer:
        "We're built by Tier 2/3 college students who made it. No fake promises, no theory overload - just practical skills and real internships.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 md:hidden">
        <div className="flex gap-2">
          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold">📝 Register Now</Button>
          <Button variant="outline" className="flex-1 border-green-500 text-green-600 hover:bg-green-50 bg-transparent">
            <Phone className="w-4 h-4 mr-2" />
            Call Us
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Land Internships in Just <span className="text-orange-500">4 Weeks</span>
                <br />
                <span className="text-2xl md:text-4xl">Learn What Matters — No Fluff, No Filler</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Mentor-led training for Tier 2/3/4 students. Get certified, get skilled, and get{" "}
                <span className="text-green-400 font-semibold">real internship experience</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              

<Button
  onClick={() => setShowModal(true)}
  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg"
>
  📝 Register Now
</Button>
 <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />

<a href="tel:+919876543210">
  <Button
    size="lg"
    variant="outline"
    className="w-full sm:w-auto border-green-500 text-green-400 hover:bg-green-50 hover:text-green-600 font-semibold px-8 py-4 text-lg bg-transparent"
  >
    <Phone className="w-5 h-5 mr-2" />
    Talk to Our Team
  </Button>
</a>

            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-400">
                ✅ Limited seats • ✅ Certificate verified • ✅ WhatsApp support throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What You'll Actually Get</h2>
            <p className="text-xl text-gray-600">No fluff. No fake promises. Just real value.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors"
              >
                <div className="flex-shrink-0">
                  <prop.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{prop.title}</h3>
                  <p className="text-gray-600">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Choose Your Domain</h2>
            <p className="text-xl text-gray-600">Pick what excites you. We'll make you job-ready.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${domain.color} border-2`}
              >
                <CardHeader className="text-center pb-4">
                  <domain.icon className="w-12 h-12 mx-auto mb-4 text-slate-700" />
                  <CardTitle className="text-lg font-bold text-slate-800">{domain.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-3">{domain.tools}</p>
                  <Badge variant="secondary" className="text-xs">
                    {domain.ideal}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => setShowModal(true)} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4">
              Register
            </Button>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Program Details</h2>
            <p className="text-xl text-gray-600">Everything you need to know, upfront.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-slate-800 mb-2">Duration</h3>
              <p className="text-gray-600">4 Weeks or 8 Weeks</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200">
              <IndianRupee className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-slate-800 mb-2">Investment</h3>
              <p className="text-gray-600">₹1,499 or ₹2,499</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200">
              <Video className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-bold text-slate-800 mb-2">Format</h3>
              <p className="text-gray-600">Live + Recorded on Zoom/Google Meet</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-bold text-slate-800 mb-2">Certificates</h3>
              <p className="text-gray-600">Verified with unique QR codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Your 4-Week Journey</h2>
            <p className="text-xl text-gray-600">From zero to internship-ready in just 4 weeks.</p>
          </div>

          <div className="space-y-8">
            {weeklyPlan.map((week, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {week.week}: {week.title}
                  </h3>
                  <p className="text-gray-600">{week.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Career Creators */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Career Creators?</h2>
            <p className="text-xl text-gray-300">Because we've been in your shoes. And we made it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-slate-700">
                <div className="flex-shrink-0">
                  <reason.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://careercreators.online"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4">
              Join the Movement
            </Button></a>
          </div>
        </div>
      </section>

      {/* Bonus Add-ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">🎁 Bonus Add-ons</h2>
            <p className="text-xl text-gray-600">Because we believe in over-delivering.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 rounded-lg border border-green-200 bg-green-50"
              >
                <Gift className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-slate-800 font-medium">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Who Should Join?</h2>
            <p className="text-xl text-gray-600">If this sounds like you, you're in the right place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white border border-gray-200">
              <UserCheck className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-slate-800 mb-2">College Students</h3>
              <p className="text-gray-600">BCA, BSc, BBA, BCom, BA, BTech - all streams welcome</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white border border-gray-200">
              <Star className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-slate-800 mb-2">No Experience Required</h3>
              <p className="text-gray-600">Complete beginners welcome. We start from basics.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white border border-gray-200">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-bold text-slate-800 mb-2">Need College Credit</h3>
              <p className="text-gray-600">Perfect for students needing college-accepted internships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Train. Ready to Intern.
              <br />
              <span className="text-yellow-300">Let's Go.</span>
            </h2>

            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Stop scrolling. Stop doubting. Your internship is just 4 weeks away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button
              onClick={() => setShowModal(true)}
                size="lg"
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                📝 Register Now
              </Button>
              <a href="https://wa.me/918296193469" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Us
              </Button>
              </a>
            </div>

            <p className="text-sm text-orange-100">
              ⚡ Limited seats • 🏆 Certificate verified • 💬 WhatsApp support throughout
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Got Questions? We've Got Answers.</h2>
            <p className="text-xl text-gray-600">Everything you need to know before joining.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Career Creators</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Empowering Tier 2/3/4 students with real skills, real internships, and real opportunities. Built by
              students, for students.
            </p>

            <div className="flex justify-center space-x-6">
              <a href="https://wa.me/918296193469?text=Hi%2C%20I%20am%20interested%20in%20Career%20Creators%20training" target="_blank" rel="noopener noreferrer"
>
              <Button variant="ghost" className="text-white hover:text-orange-400">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
              </a>
              <a href="tel:+918296193469">
  <Button variant="ghost" className="text-white hover:text-orange-400">
    <Phone className="w-5 h-5 mr-2" />
    Call Us
  </Button>
</a>

            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">© 2024 Career Creators. Made with ❤️ for ambitious students.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-40">
        <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
