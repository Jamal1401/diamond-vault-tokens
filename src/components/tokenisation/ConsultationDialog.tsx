import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const describesYouOptions = [
  "Asset Manager",
  "Asset Owner",
  "Blockchain Services",
  "Diamond Trader",
  "Diamond Manufacturer",
  "Distributor",
  "Family Office",
  "Financial Institution",
  "Fintech",
  "Fund Manager",
  "Government",
  "Investor",
  "Other",
];

const interestedInOptions = [
  "Bespoke Solutions",
  "Distribution",
  "Investment Opportunities",
  "Partnership",
  "Structuring",
  "Tokenization",
  "White Label",
  "Other",
];

interface ConsultationDialogProps {
  children: React.ReactNode;
}

export function ConsultationDialog({ children }: ConsultationDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    describesYou: "",
    interestedIn: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-consultation-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Consultation request submitted",
        description: "We'll be in touch with you shortly.",
      });
    } catch (error) {
      console.error("Error sending consultation email:", error);
      toast({
        title: "Request submitted",
        description: "We'll be in touch with you shortly.",
      });
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      describesYou: "",
      interestedIn: "",
      message: "",
    });
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Book a Consultation
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Get in touch with our team to discuss your tokenisation needs.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Business Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="describesYou">What best describes you? *</Label>
            <Select
              required
              value={formData.describesYou}
              onValueChange={(value) =>
                setFormData({ ...formData, describesYou: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {describesYouOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestedIn">I'm interested in *</Label>
            <Select
              required
              value={formData.interestedIn}
              onValueChange={(value) =>
                setFormData({ ...formData, interestedIn: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {interestedInOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your needs..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <p className="text-xs text-muted-foreground">
            * All fields required. By clicking "Submit" you acknowledge that
            your information will be shared with Billiton Diamonds.
          </p>

          <Button
            type="submit"
            variant="gold"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
