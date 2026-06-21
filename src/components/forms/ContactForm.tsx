"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "Please enter a valid phone number"
    ),
  email: z.string().email("Please enter a valid email address"),
  area: z.string().min(1, "Please select a service area"),
  service: z.string().min(1, "Please select a service"),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters describing your project"),
  referral: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

type ContactFormProps = {
  preselectedArea?: string;
};

const serviceAreas = [
  "Frisco",
  "Starwood",
  "Phillips Creek Ranch",
  "Grayhawk",
  "Newman Village",
  "Richwoods",
  "Preston Vineyards",
];

const serviceOptions = [
  "Driveway",
  "Patio",
  "Pool Deck",
  "Block Wall",
  "Foundation/Slab",
  "Commercial",
  "Other",
];

const referralOptions = [
  "Google",
  "Facebook",
  "Referral",
  "Yard Sign",
  "Other",
];

export default function ContactForm({ preselectedArea }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      area: preselectedArea || "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ll be in touch within 1 business day!
        </p>
      </div>
    );
  }

  const validate = (value: string, field: keyof ContactFormData) => {
    const result = contactSchema.shape[field].safeParse(value);
    if (!result.success) return result.error.issues[0]?.message;
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Something went wrong. Please try again or call us at (214) 949-4092.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { validate: (v) => validate(v, "name") })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { validate: (v) => validate(v, "phone") })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="(214) 555-0123"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { validate: (v) => validate(v, "email") })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="you@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-charcoal mb-1.5">
            Service Area / Neighborhood *
          </label>
          <select
            id="area"
            {...register("area", { validate: (v) => validate(v, "area") })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          >
            <option value="">Select your area</option>
            {serviceAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.area && (
            <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
            Service Needed *
          </label>
          <select
            id="service"
            {...register("service", { validate: (v) => validate(v, "service") })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-1.5">
          Project Description *
        </label>
        <textarea
          id="description"
          rows={5}
          {...register("description", {
            validate: (v) => validate(v, "description"),
          })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-y"
          placeholder="Tell us about your project — size, scope, timeline, and any specific requirements."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="referral" className="block text-sm font-medium text-charcoal mb-1.5">
          How did you hear about us?
        </label>
        <select
          id="referral"
          {...register("referral")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="">Select an option</option>
          {referralOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send My Request"}
      </Button>
    </form>
  );
}
