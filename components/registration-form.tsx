"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { CheckIcon, Loader2, User, AtSign, Phone, Building, Briefcase, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom est requis" }),
  prenom: z.string().min(2, { message: "Le prénom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  telephone: z.string().min(8, { message: "Numéro de téléphone invalide" }),
  entreprise: z.string().min(2, { message: "Le nom de l'entreprise est requis" }),
  fonction: z.string().min(2, { message: "La fonction est requise" }),
  message: z.string().optional(),
  acceptConditions: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions",
  }),
})

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      fonction: "",
      message: "",
      acceptConditions: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Inscription envoyée",
        description: "Nous vous contacterons prochainement pour confirmer votre inscription.",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="p-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 font-primary">Inscription réussie !</h3>
        <p className="text-gray-700 mb-6 font-secondary">
          Merci pour votre inscription. Nous vous contacterons bientôt avec tous les détails.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-[#20a29d] to-[#f2c14e] text-white rounded-full px-6 font-primary"
        >
          Nouvelle inscription
        </Button>
      </motion.div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <User className="w-4 h-4 text-[#20a29d]" />
                  Nom*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre nom"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#20a29d] focus:ring-[#20a29d]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <User className="w-4 h-4 text-[#f2c14e]" />
                  Prénom*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre prénom"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#f2c14e] focus:ring-[#f2c14e]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <AtSign className="w-4 h-4 text-[#20a29d]" />
                  Email*
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#20a29d] focus:ring-[#20a29d]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <Phone className="w-4 h-4 text-[#f2c14e]" />
                  Téléphone*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre numéro de téléphone"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#f2c14e] focus:ring-[#f2c14e]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="entreprise"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <Building className="w-4 h-4 text-[#20a29d]" />
                  Entreprise*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nom de votre entreprise"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#20a29d] focus:ring-[#20a29d]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fonction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                  <Briefcase className="w-4 h-4 text-[#f2c14e]" />
                  Fonction*
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre fonction"
                    {...field}
                    className="bg-gray-50 border-gray-200 focus:border-[#f2c14e] focus:ring-[#f2c14e]/20 rounded-xl font-secondary"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 flex items-center gap-2 font-primary">
                <MessageSquare className="w-4 h-4 text-[#20a29d]" />
                Message (optionnel)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Questions ou informations complémentaires"
                  className="resize-none bg-gray-50 border-gray-200 focus:border-[#20a29d] focus:ring-[#20a29d]/20 rounded-xl min-h-24 font-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptConditions"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-gray-50 p-4 rounded-xl">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#20a29d] data-[state=checked]:to-[#f2c14e] border-gray-300"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-gray-700 text-sm font-secondary">
                  J'accepte les conditions générales et la politique de confidentialité*
                </FormLabel>
                <FormMessage className="text-red-500" />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#20a29d] to-[#f2c14e] hover:from-[#1b8d89] hover:to-[#e0b43c] rounded-xl py-6 text-white font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 font-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              S'inscrire
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

