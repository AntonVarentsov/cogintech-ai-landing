import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AskQuestion = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    question: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Question Submitted",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ question: "", email: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cogintech-blue/5 to-cogintech-teal/5" id="ask-question">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cogintech-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-cogintech-blue" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Have a Question?
              </h2>
              <p className="text-lg text-foreground/70">
                Не готовы к демо? Спросите нас о чём угодно касательно платформы, внедрения или вашего конкретного случая использования.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="question" className="text-sm font-medium text-foreground mb-2 block">
                  Your Question *
                </Label>
                <Textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="e.g., How do you handle sensitive technical drawings? Can this integrate with our existing CAD systems?"
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Work Email *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ваш.email@компания.ru"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !formData.question.trim() || !formData.email.trim()}
                className="w-full bg-cogintech-blue hover:bg-cogintech-blue/90 text-white font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Question"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-sm text-foreground/60 text-center">
                We reply within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;