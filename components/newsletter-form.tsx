"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CheckIcon, Loader2, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
})

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Appel direct au webhook n8n avec les bons paramètres
    fetch("https://finopia.app.n8n.cloud/webhook/3278072f-d2b3-4ed9-bfc6-108f4d4ce2eb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email }),
      mode: "no-cors", // Important pour éviter les erreurs CORS
    })
      .then(() => {
        // Avec mode: "no-cors", on ne peut pas lire la réponse
        // Mais on peut quand même considérer que la requête a été envoyée
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Inscription réussie",
          description: "Vous êtes maintenant inscrit à notre newsletter.",
        });
      })
      .catch((error) => {
        console.error("Erreur détaillée:", error.message || error);
        setIsSubmitting(false);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
          variant: "destructive",
        });
      });
  }

  if (isSubmitted) {
    return (
      <div className="bg-white/10 rounded-xl p-4 text-center">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckIcon className="w-5 h-5 text-white" />
        </div>
        <p className="text-white font-medium font-primary">Merci pour votre inscription !</p>
        <p className="text-white/80 text-sm mt-1 font-secondary">Vous recevrez bientôt nos prochaines actualités.</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    {...field}
                    className="bg-white border-white pl-10 pr-24 py-6 rounded-full text-gray-800 font-secondary"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#20a29d] to-[#f2c14e] hover:from-[#1b8d89] hover:to-[#e0b43c] rounded-full px-4 text-white font-medium flex items-center justify-center gap-1 transition-all duration-300 font-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        S'inscrire
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-white/90 text-xs pl-3" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
