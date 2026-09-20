import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import toast from 'react-hot-toast';

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  role: z.string().min(1, 'Please select your role'),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

export function ClinicianBanner() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (_data: WaitlistForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    toast.success('You\'ve been added to the waitlist!');
  };

  return (
    <section className="section-padding" aria-label="Clinician waitlist" ref={sectionRef}>
      <div className="container-main">
        <div
          className="rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-secondary)] to-[#2A1520] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          data-reveal
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-[0.08] blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl mb-4">
              Built for Clinicians.{' '}
              <span className="text-[var(--color-primary)]">By Clinicians.</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Join the waitlist to get early access to Neuromed and help shape the
              future of AI-assisted neuroimaging.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[var(--color-success)]">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-medium">
                  You&apos;re on the list. We&apos;ll be in touch.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                noValidate
              >
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="you@hospital.org"
                    {...register('email')}
                    className="input-field-dark"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 text-left">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="waitlist-role" className="sr-only">Role</label>
                  <select
                    id="waitlist-role"
                    {...register('role')}
                    className="input-field-dark cursor-pointer appearance-none"
                    aria-invalid={errors.role ? 'true' : 'false'}
                  >
                    <option value="" className="text-gray-900">Your Role</option>
                    <option value="radiologist" className="text-gray-900">Radiologist</option>
                    <option value="neurologist" className="text-gray-900">Neurologist</option>
                    <option value="researcher" className="text-gray-900">Researcher</option>
                    <option value="hospital-admin" className="text-gray-900">Hospital Admin</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-400 text-xs mt-1 text-left">{errors.role.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  loading={isSubmitting}
                  className="shrink-0"
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
